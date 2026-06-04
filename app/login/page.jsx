"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase, signInWithEmail, signUpWithEmail } from "@/lib/supabase";

const C = {
  bg: "#0f1419", panel: "#1a222c", ink: "#e8edf2", sub: "#9fb0c0",
  line: "#2d3a48", amber: "#f5a623", green: "#3ecf8e", red: "#e85d75",
};

export default function LoginPage() {
  const router   = useRouter();
  const [modo, setModo]       = useState("login"); // "login" | "signup"
  const [email, setEmail]     = useState("");
  const [pass, setPass]       = useState("");
  const [erro, setErro]       = useState("");
  const [loading, setLoading] = useState(false);

  // Se já está autenticado, vai direto para /app
  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) router.replace("/app");
    });
  }, [router]);

  const submeter = async (e) => {
    e.preventDefault();
    setErro("");
    setLoading(true);
    try {
      const { error } = modo === "login"
        ? await signInWithEmail(email, pass)
        : await signUpWithEmail(email, pass);

      if (error) {
        if (error.message.includes("Invalid login")) setErro("Email ou password incorretos.");
        else if (error.message.includes("already registered")) setErro("Este email já tem conta. Faz login.");
        else setErro(error.message);
      } else {
        if (modo === "signup") setErro("✅ Conta criada! Verifica o teu email para confirmar.");
        else router.replace("/app");
      }
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%", padding: "13px 14px", borderRadius: 12, fontSize: 15,
    border: `1.5px solid ${C.line}`, background: "#131c25", color: C.ink,
    outline: "none", boxSizing: "border-box", fontFamily: "inherit",
  };

  return (
    <div style={{
      minHeight: "100dvh", background: C.bg, display: "flex",
      alignItems: "center", justifyContent: "center", padding: 20,
    }}>
      <div style={{ width: "100%", maxWidth: 400 }}>
        {/* Logo / Header */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📐</div>
          <h1 style={{ margin: "0 0 6px", fontSize: 24, fontWeight: 900, color: C.ink }}>
            Plataforma de Matemática
          </h1>
          <p style={{ margin: 0, color: C.sub, fontSize: 14 }}>
            Exame 635 · 2026 · Do zero ao exame
          </p>
        </div>

        {/* Card */}
        <div style={{
          background: C.panel, borderRadius: 20,
          padding: "28px 24px",
          boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
        }}>
          {/* Tabs */}
          <div style={{ display: "flex", marginBottom: 24, background: "#131c25", borderRadius: 12, padding: 4 }}>
            {["login", "signup"].map((m) => (
              <button key={m} onClick={() => { setModo(m); setErro(""); }} style={{
                flex: 1, padding: "10px 0", borderRadius: 10, border: "none",
                background: modo === m ? C.amber : "transparent",
                color: modo === m ? "#1a1206" : C.sub,
                fontWeight: 700, fontSize: 14, cursor: "pointer",
              }}>
                {m === "login" ? "Entrar" : "Criar conta"}
              </button>
            ))}
          </div>

          <form onSubmit={submeter} style={{ display: "grid", gap: 14 }}>
            <div>
              <label style={{ fontSize: 13, color: C.sub, display: "block", marginBottom: 6 }}>Email</label>
              <input
                type="email" value={email} onChange={e => setEmail(e.target.value)}
                required placeholder="o.teu@email.com"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={{ fontSize: 13, color: C.sub, display: "block", marginBottom: 6 }}>Password</label>
              <input
                type="password" value={pass} onChange={e => setPass(e.target.value)}
                required placeholder="••••••••" minLength={6}
                style={inputStyle}
              />
              {modo === "signup" && (
                <p style={{ margin: "6px 0 0", fontSize: 12, color: C.sub }}>Mínimo 6 caracteres.</p>
              )}
            </div>

            {erro && (
              <div style={{
                padding: "10px 14px", borderRadius: 10,
                background: erro.startsWith("✅") ? "#16241c" : "#2a1a1e",
                border: `1px solid ${erro.startsWith("✅") ? C.green : C.red}`,
                color: erro.startsWith("✅") ? C.green : "#f0a0b0",
                fontSize: 13,
              }}>{erro}</div>
            )}

            <button type="submit" disabled={loading} style={{
              padding: "14px 0", borderRadius: 14, border: "none",
              background: loading ? C.line : C.amber,
              color: "#1a1206", fontWeight: 800, fontSize: 15,
              cursor: loading ? "default" : "pointer", marginTop: 4,
            }}>
              {loading ? "A carregar..." : modo === "login" ? "Entrar" : "Criar conta grátis"}
            </button>
          </form>

          {modo === "login" && (
            <p style={{ marginTop: 20, textAlign: "center", fontSize: 13, color: C.sub }}>
              Não tens conta?{" "}
              <button onClick={() => setModo("signup")} style={{
                background: "transparent", border: "none", color: C.amber,
                cursor: "pointer", fontWeight: 700, fontSize: 13,
              }}>Cria uma grátis</button>
            </p>
          )}
        </div>

        <p style={{ textAlign: "center", marginTop: 20, color: C.sub, fontSize: 12, lineHeight: 1.6 }}>
          O teu progresso fica guardado na tua conta —<br />
          podes estudar de qualquer dispositivo.
        </p>
      </div>
    </div>
  );
}
