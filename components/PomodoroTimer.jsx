"use client";
import { useState, useEffect, useRef } from "react";

const C = {
  panel: "#1a222c", panel2: "#222d3a", ink: "#e8edf2", sub: "#9fb0c0",
  line: "#2d3a48", amber: "#f5a623", green: "#3ecf8e", red: "#e85d75",
};

const MODOS = {
  foco:    { label: "Foco",   minutos: 25, cor: C.amber },
  pausa:   { label: "Pausa",  minutos:  5, cor: C.green },
  longa:   { label: "Pausa+", minutos: 15, cor: C.green },
};

export default function PomodoroTimer() {
  const [modo, setModo]         = useState("foco");
  const [segundos, setSegundos] = useState(25 * 60);
  const [ativo, setAtivo]       = useState(false);
  const [ciclos, setCiclos]     = useState(0);
  const intervalRef             = useRef(null);
  const audioRef                = useRef(null);

  const total = MODOS[modo].minutos * 60;
  const pct   = ((total - segundos) / total) * 100;
  const mins  = String(Math.floor(segundos / 60)).padStart(2, "0");
  const secs  = String(segundos % 60).padStart(2, "0");

  useEffect(() => {
    if (ativo) {
      intervalRef.current = setInterval(() => {
        setSegundos(s => {
          if (s <= 1) {
            clearInterval(intervalRef.current);
            setAtivo(false);
            if (modo === "foco") setCiclos(c => c + 1);
            // Tocar som de notificação do browser
            try { new Audio("data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAA...").play(); } catch {}
            return 0;
          }
          return s - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [ativo, modo]);

  const mudarModo = (novoModo) => {
    setModo(novoModo);
    setAtivo(false);
    setSegundos(MODOS[novoModo].minutos * 60);
  };

  const toggleTimer = () => setAtivo(a => !a);

  const reiniciar = () => {
    setAtivo(false);
    setSegundos(MODOS[modo].minutos * 60);
  };

  const cor = MODOS[modo].cor;

  // Arco SVG
  const raio = 36;
  const circunferencia = 2 * Math.PI * raio;
  const offset = circunferencia - (pct / 100) * circunferencia;

  return (
    <div style={{
      background: C.panel, border: `1px solid ${C.line}`, borderRadius: 16,
      padding: "18px 20px",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14, flexWrap: "wrap", gap: 8 }}>
        <h3 style={{ margin: 0, fontSize: 15, fontWeight: 800, color: C.ink }}>
          Temporizador Pomodoro
        </h3>
        <div style={{ fontSize: 12, color: C.sub }}>
          {ciclos} bloco{ciclos !== 1 ? "s" : ""} de foco hoje
        </div>
      </div>

      {/* Seletor de modo */}
      <div style={{ display: "flex", gap: 6, marginBottom: 16 }}>
        {Object.entries(MODOS).map(([id, m]) => (
          <button key={id} onClick={() => mudarModo(id)} style={{
            flex: 1, padding: "7px 4px", borderRadius: 10, border: `1.5px solid ${modo === id ? m.cor : C.line}`,
            background: modo === id ? `${m.cor}22` : "transparent",
            color: modo === id ? m.cor : C.sub, fontWeight: 700, fontSize: 12,
            cursor: "pointer",
          }}>{m.label}<br/><span style={{ fontWeight: 400, fontSize: 11 }}>{m.minutos}min</span></button>
        ))}
      </div>

      {/* Círculo + tempo */}
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ position: "relative", flexShrink: 0 }}>
          <svg width={96} height={96} viewBox="0 0 96 96">
            <circle cx={48} cy={48} r={raio} fill="none" stroke={C.panel2} strokeWidth={8} />
            <circle
              cx={48} cy={48} r={raio} fill="none" stroke={cor} strokeWidth={8}
              strokeDasharray={circunferencia} strokeDashoffset={offset}
              strokeLinecap="round"
              style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%", transition: "stroke-dashoffset 1s linear" }}
            />
          </svg>
          <div style={{
            position: "absolute", inset: 0, display: "flex", alignItems: "center",
            justifyContent: "center", flexDirection: "column",
          }}>
            <span style={{ fontSize: 22, fontWeight: 800, color: C.ink, letterSpacing: -1 }}>{mins}:{secs}</span>
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <p style={{ margin: "0 0 12px", color: C.sub, fontSize: 13, lineHeight: 1.55 }}>
            {modo === "foco"
              ? "Foca-te 25 min. Sem telemóvel, sem distrações. O Zé está aqui se travares. 💪"
              : "Pausa merecida! Levanta, bebe água, respira. Volta em breve. 🌿"}
          </p>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={toggleTimer} style={{
              flex: 1, padding: "10px 0", borderRadius: 12, border: "none",
              background: cor, color: "#1a1206", fontWeight: 800, fontSize: 14,
              cursor: "pointer",
            }}>
              {ativo ? "⏸ Pausar" : segundos === 0 ? "🔄 Reiniciar" : "▶ Iniciar"}
            </button>
            {(ativo || segundos < total) && (
              <button onClick={reiniciar} style={{
                padding: "10px 14px", borderRadius: 12, border: `1.5px solid ${C.line}`,
                background: "transparent", color: C.sub, fontWeight: 700, fontSize: 14,
                cursor: "pointer",
              }}>↺</button>
            )}
          </div>
        </div>
      </div>

      {segundos === 0 && (
        <div style={{
          marginTop: 14, padding: "12px 14px", borderRadius: 12,
          background: modo === "foco" ? "#1e2e1a" : "#1a1e2e",
          border: `1px solid ${cor}`, textAlign: "center",
        }}>
          <div style={{ fontWeight: 800, color: cor, marginBottom: 3 }}>
            {modo === "foco" ? "🎉 Bloco de foco concluído!" : "✅ Pausa terminada!"}
          </div>
          <div style={{ fontSize: 13, color: C.sub }}>
            {modo === "foco" ? "Faz uma pausa de 5 minutos, mereces." : "Vamos lá! Mais um bloco de foco. Consegues!"}
          </div>
          <button onClick={() => mudarModo(modo === "foco" ? "pausa" : "foco")} style={{
            marginTop: 10, padding: "8px 18px", borderRadius: 10, border: "none",
            background: cor, color: "#1a1206", fontWeight: 800, fontSize: 13, cursor: "pointer",
          }}>
            {modo === "foco" ? "Iniciar Pausa" : "Iniciar Foco"}
          </button>
        </div>
      )}
    </div>
  );
}
