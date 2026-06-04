"use client";
import { useState, useRef, useEffect } from "react";

const C = {
  bg: "#0f1419", panel: "#1a222c", panel2: "#222d3a",
  ink: "#e8edf2", sub: "#9fb0c0", line: "#2d3a48",
  amber: "#f5a623", green: "#3ecf8e", blue: "#5aa9e6",
};

export default function TutorChat({ contexto }) {
  const [aberto, setAberto]       = useState(false);
  const [input, setInput]         = useState("");
  const [mensagens, setMensagens] = useState([
    { role: "assistant", content: "Olá! 👋 Sou o Zé, o teu explicador pessoal. Diz-me o que não percebes e eu explico de forma simples, passo a passo. Em que te posso ajudar?" }
  ]);
  const [carregando, setCarregando] = useState(false);
  const bottomRef  = useRef(null);
  const inputRef   = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [mensagens, carregando]);

  useEffect(() => {
    if (aberto) setTimeout(() => inputRef.current?.focus(), 100);
  }, [aberto]);

  const enviar = async () => {
    const texto = input.trim();
    if (!texto || carregando) return;

    const novasMensagens = [...mensagens, { role: "user", content: texto }];
    setMensagens(novasMensagens);
    setInput("");
    setCarregando(true);

    // Adicionar placeholder para a resposta a ser gerada
    setMensagens(prev => [...prev, { role: "assistant", content: "", streaming: true }]);

    try {
      const res = await fetch("/api/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: novasMensagens.map(m => ({ role: m.role, content: m.content })),
          contexto,
        }),
      });

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let resposta = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        resposta += decoder.decode(value, { stream: true });
        const current = resposta;
        setMensagens(prev => {
          const copia = [...prev];
          copia[copia.length - 1] = { role: "assistant", content: current, streaming: true };
          return copia;
        });
      }

      setMensagens(prev => {
        const copia = [...prev];
        copia[copia.length - 1] = { role: "assistant", content: resposta };
        return copia;
      });
    } catch {
      setMensagens(prev => {
        const copia = [...prev];
        copia[copia.length - 1] = { role: "assistant", content: "Ups, algo correu mal. Tenta outra vez! 🙏" };
        return copia;
      });
    } finally {
      setCarregando(false);
    }
  };

  const aoPremerEnter = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); enviar(); }
  };

  const sugestoes = [
    "Não percebi os vetores",
    "O que é uma derivada?",
    "Como funciona a continuidade?",
    "Não estou a perceber este exercício",
  ];

  return (
    <>
      {/* Botão flutuante */}
      {!aberto && (
        <button
          onClick={() => setAberto(true)}
          style={{
            position: "fixed", bottom: 24, right: 24, zIndex: 999,
            width: 64, height: 64, borderRadius: "50%",
            background: `linear-gradient(135deg, ${C.amber}, #e8941f)`,
            border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 28, boxShadow: `0 6px 24px rgba(245,166,35,0.45)`,
            transition: "transform .15s",
          }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          title="Falar com o Zé (explicador IA)"
        >
          🧑‍🏫
        </button>
      )}

      {/* Painel de chat */}
      {aberto && (
        <div style={{
          position: "fixed", bottom: 0, right: 0, zIndex: 999,
          width: "min(420px, 100vw)", height: "min(620px, 100dvh)",
          display: "flex", flexDirection: "column",
          background: C.bg, border: `1px solid ${C.line}`,
          borderRadius: "20px 20px 0 0",
          boxShadow: "0 -8px 40px rgba(0,0,0,0.5)",
        }}>
          {/* Header */}
          <div style={{
            display: "flex", alignItems: "center", gap: 12,
            padding: "14px 18px", borderBottom: `1px solid ${C.line}`,
            background: C.panel, borderRadius: "20px 20px 0 0",
            flexShrink: 0,
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: "50%",
              background: `linear-gradient(135deg, ${C.amber}, #e8941f)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 22, flexShrink: 0,
            }}>🧑‍🏫</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 15, color: C.ink }}>Zé — Explicador IA</div>
              <div style={{ fontSize: 12, color: C.green, display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: C.green, display: "inline-block" }} />
                disponível agora
              </div>
            </div>
            <button
              onClick={() => setAberto(false)}
              style={{ background: "transparent", border: "none", color: C.sub, cursor: "pointer", fontSize: 22, padding: 4 }}
            >✕</button>
          </div>

          {/* Mensagens */}
          <div style={{
            flex: 1, overflowY: "auto", padding: "16px 14px",
            display: "flex", flexDirection: "column", gap: 10,
          }}>
            {mensagens.map((msg, i) => (
              <div key={i} style={{
                display: "flex",
                justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
              }}>
                <div style={{
                  maxWidth: "85%",
                  padding: "10px 14px",
                  borderRadius: msg.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                  background: msg.role === "user" ? C.amber : C.panel2,
                  color: msg.role === "user" ? "#1a1206" : C.ink,
                  fontSize: 14, lineHeight: 1.55, fontWeight: msg.role === "user" ? 600 : 400,
                }}>
                  {msg.content || (msg.streaming ? <span style={{ color: C.sub }}>a escrever...</span> : "")}
                </div>
              </div>
            ))}

            {/* Sugestões rápidas (só quando há poucas mensagens) */}
            {mensagens.length <= 1 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 6 }}>
                {sugestoes.map((s) => (
                  <button key={s} onClick={() => { setInput(s); setTimeout(() => inputRef.current?.focus(), 50); }}
                    style={{
                      padding: "7px 12px", borderRadius: 20, fontSize: 12.5, fontWeight: 600,
                      border: `1.5px solid ${C.line}`, background: "transparent", color: C.sub,
                      cursor: "pointer",
                    }}
                  >{s}</button>
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{
            padding: "12px 14px", borderTop: `1px solid ${C.line}`,
            display: "flex", gap: 8, flexShrink: 0,
            background: C.panel,
          }}>
            <textarea
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={aoPremerEnter}
              placeholder="Escreve a tua dúvida aqui..."
              rows={1}
              style={{
                flex: 1, padding: "10px 14px", borderRadius: 14,
                border: `1.5px solid ${C.line}`, background: C.panel2,
                color: C.ink, fontSize: 14, resize: "none", outline: "none",
                fontFamily: "inherit",
              }}
            />
            <button
              onClick={enviar}
              disabled={!input.trim() || carregando}
              style={{
                width: 44, height: 44, borderRadius: "50%", flexShrink: 0,
                border: "none", cursor: input.trim() && !carregando ? "pointer" : "default",
                background: input.trim() && !carregando ? C.amber : C.line,
                color: "#1a1206", fontSize: 20, display: "flex",
                alignItems: "center", justifyContent: "center",
                transition: "background .15s",
              }}
            >➤</button>
          </div>
        </div>
      )}
    </>
  );
}
