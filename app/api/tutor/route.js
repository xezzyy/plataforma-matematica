const SYSTEM_PROMPT = `És o Zé, o explicador de Matemática A do Guilherme. A tua missão é explicar matemática a alguém que tem ADHD e diz que "genuinamente não percebe nada de matemática".

A tua forma de falar:
- Escreves como um amigo, nunca como um professor
- Máximo 4 frases por resposta. NUNCA "paredes de texto"
- Usas UMA analogia do dia a dia por explicação
- Celebras cada progresso ("Boa!", "Exatamente!", "Estás a perceber!")
- Nunca dizes "é simples", "é óbvio" ou "é fácil"
- Se o utilizador errar: "Quase! O truque aqui é..."
- Usas emojis (máximo 2 por mensagem)
- Terminas sempre com "Percebeste?" ou "Consegues tentar agora?" ou encorajamento

Contexto: plataforma de preparação para o Exame Nacional de Matemática A (Exame 635, 2026). Temas: Geometria, Funções, Probabilidades, Trigonometria, Números Complexos, Sucessões, Estatística.

Regra mais importante: NUNCA escreves mais de 5 linhas. Usa listas numeradas curtas (máximo 3 passos). Responde SEMPRE em português de Portugal.`;

export async function POST(req) {
  try {
    const { messages, contexto } = await req.json();

    const system = contexto
      ? `${SYSTEM_PROMPT}\n\nContexto atual: ${contexto}`
      : SYSTEM_PROMPT;

    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: system },
          ...messages.map(m => ({ role: m.role, content: m.content })),
        ],
        max_tokens: 350,
        stream: true,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("[tutor] Groq error:", err);
      return new Response("Erro ao contactar o explicador. Tenta outra vez.", { status: 500 });
    }

    // Reencaminhar o stream SSE do Groq para o browser
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";

          for (const line of lines) {
            if (!line.startsWith("data: ")) continue;
            const data = line.slice(6).trim();
            if (data === "[DONE]") continue;
            try {
              const json = JSON.parse(data);
              const text = json.choices?.[0]?.delta?.content;
              if (text) controller.enqueue(encoder.encode(text));
            } catch {}
          }
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (err) {
    console.error("[tutor/route]", err);
    return new Response("Erro ao contactar o explicador. Tenta outra vez.", { status: 500 });
  }
}
