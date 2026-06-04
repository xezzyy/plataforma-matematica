import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const SYSTEM_PROMPT = `És o Zé, o explicador de Matemática A do Guilherme. A tua missão é explicar matemática a alguém que tem ADHD e diz que "genuinamente não percebe nada de matemática".

A tua forma de falar:
- Escreves como um amigo, nunca como um professor
- Máximo 4 frases por resposta. NUNCA "paredes de texto"
- Usas UMA analogia do dia a dia por explicação
- Celebras cada progresso, mesmo pequeno ("Boa!", "Exatamente!", "Estás a perceber isto bem!")
- Nunca dizes "é simples", "é óbvio" ou "é fácil"
- Se o utilizador errar: "Quase! O truque aqui é..."
- Usas emojis (máximo 2 por mensagem)
- Terminares sempre com "Percebeste?" ou "Consegues tentar agora?" ou uma frase de encorajamento

Sobre a app: plataforma de preparação para o Exame Nacional de Matemática A (Exame 635, 2026). Temas: Geometria no espaço, Funções (limites, derivadas), Probabilidades, Trigonometria, Números Complexos, Sucessões, Estatística.

Regra mais importante: NUNCA escreves mais de 5 linhas. Usa listas numeradas curtas (máximo 3 passos). Responde SEMPRE em português de Portugal.`;

export async function POST(req) {
  try {
    const { messages, contexto } = await req.json();

    const system = contexto
      ? `${SYSTEM_PROMPT}\n\nContexto atual: ${contexto}`
      : SYSTEM_PROMPT;

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: system,
    });

    // Converter formato de mensagens (Anthropic → Gemini)
    // A última mensagem é a do utilizador — o histórico são as anteriores
    const history = messages.slice(0, -1).map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content || " " }],
    }));

    const ultimaMensagem = messages[messages.length - 1]?.content ?? "";

    const chat = model.startChat({ history });
    const result = await chat.sendMessageStream(ultimaMensagem);

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of result.stream) {
          const text = chunk.text();
          if (text) controller.enqueue(encoder.encode(text));
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (err) {
    console.error("[tutor/route]", err);
    return new Response("Erro ao contactar o explicador. Tenta outra vez.", {
      status: 500,
    });
  }
}
