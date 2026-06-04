"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import { supabase, carregarProgresso, guardarProgresso, signOut } from "@/lib/supabase";
import { TEMAS, PLANO, EXERCICIOS, LICOES } from "@/lib/data";
import TutorChat from "@/components/TutorChat";
import PomodoroTimer from "@/components/PomodoroTimer";

// ---- Cores ----
const C = {
  bg: "#0f1419", panel: "#1a222c", panel2: "#222d3a",
  ink: "#e8edf2", sub: "#9fb0c0", line: "#2d3a48",
  amber: "#f5a623", green: "#3ecf8e", red: "#e85d75", blue: "#5aa9e6",
};

const prioridadeCor   = (p) => p === "essencial" ? C.red : p === "importante" ? C.amber : C.green;
const prioridadeLabel = (p) => p === "essencial" ? "ESSENCIAL" : p === "importante" ? "IMPORTANTE" : "BÓNUS";

// ---- App Principal ----
export default function AppPage() {
  const router = useRouter();
  const [user, setUser]               = useState(null);
  const [carregado, setCarregado]     = useState(false);
  const [aba, setAba]                 = useState("inicio");
  const [diasFeitos, setDiasFeitos]   = useState({});
  const [exFeitos, setExFeitos]       = useState({});
  const [licoesFeitas, setLicoesFeitas] = useState({});
  const [contextoTutor, setContexto]  = useState("");
  const guardarTimeout                = useRef(null);

  // Auth check
  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user: u } }) => {
      if (!u) { router.replace("/login"); return; }
      setUser(u);
      carregarProgresso(u.id)
        .then((d) => {
          if (d) {
            setDiasFeitos(d.dias_feitos || {});
            setExFeitos(d.ex_feitos || {});
            setLicoesFeitas(d.licoes || {});
          }
        })
        .catch(console.error)
        .finally(() => setCarregado(true));
    });
  }, [router]);

  // Auto-save debounced
  useEffect(() => {
    if (!carregado || !user) return;
    clearTimeout(guardarTimeout.current);
    guardarTimeout.current = setTimeout(() => {
      guardarProgresso(user.id, diasFeitos, exFeitos, licoesFeitas).catch(console.error);
    }, 1200);
    return () => clearTimeout(guardarTimeout.current);
  }, [diasFeitos, exFeitos, licoesFeitas, carregado, user]);

  const logout = async () => { await signOut(); router.replace("/login"); };

  const apagarProgresso = () => {
    setDiasFeitos({}); setExFeitos({}); setLicoesFeitas({});
  };

  const toggleDia = (d) => setDiasFeitos(s => ({ ...s, [d]: !s[d] }));

  const totalDias = PLANO.length;
  const concluidos = Object.values(diasFeitos).filter(Boolean).length;
  const pctPlano = Math.round((concluidos / totalDias) * 100);
  const exConcluidos = Object.values(exFeitos).filter(Boolean).length;
  const pctEx = Math.round((exConcluidos / EXERCICIOS.length) * 100);
  const licoesConcluidas = Object.values(licoesFeitas).filter(Boolean).length;

  const abas = [
    { id: "inicio",  label: "Início" },
    { id: "aprender",label: "Aprender" },
    { id: "plano",   label: "Plano 20 dias" },
    { id: "analise", label: "O que sai mais" },
    { id: "treino",  label: "Treinar" },
  ];

  if (!carregado) return (
    <div style={{ minHeight: "100dvh", background: C.bg, display: "flex", alignItems: "center", justifyContent: "center", color: C.sub }}>
      A carregar o teu progresso...
    </div>
  );

  return (
    <div style={{ minHeight: "100dvh", background: C.bg, color: C.ink, fontFamily: "'Segoe UI', system-ui, sans-serif", paddingBottom: 80 }}>
      {/* Header */}
      <header style={{ padding: "22px 20px 16px", borderBottom: `1px solid ${C.line}`, background: `linear-gradient(180deg, ${C.panel} 0%, ${C.bg} 100%)` }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: 12, color: C.amber, letterSpacing: 2, fontWeight: 700 }}>EXAME 635 · MATEMÁTICA A · 2026</div>
            <h1 style={{ margin: "5px 0 3px", fontSize: 22, fontWeight: 900 }}>A tua plataforma de estudo</h1>
            <p style={{ margin: 0, color: C.sub, fontSize: 13 }}>Do zero ao exame. Passo a passo, ao teu ritmo.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <span style={{ fontSize: 12, color: C.sub }}>{user?.email}</span>
            <button onClick={logout} style={{ padding: "6px 12px", borderRadius: 8, border: `1px solid ${C.line}`, background: "transparent", color: C.sub, cursor: "pointer", fontSize: 12 }}>Sair</button>
          </div>
        </div>
      </header>

      {/* Nav */}
      <nav style={{ position: "sticky", top: 0, zIndex: 10, display: "flex", gap: 4, padding: "10px 12px", background: C.bg, borderBottom: `1px solid ${C.line}`, overflowX: "auto", justifyContent: "center" }}>
        {abas.map(a => (
          <button key={a.id} onClick={() => { setAba(a.id); setContexto(`Aba atual: ${a.label}`); }} style={{
            padding: "9px 14px", borderRadius: 10, border: "none", cursor: "pointer",
            fontWeight: 700, fontSize: 13.5, whiteSpace: "nowrap",
            background: aba === a.id ? C.amber : C.panel2,
            color: aba === a.id ? "#1a1206" : C.sub,
          }}>{a.label}</button>
        ))}
      </nav>

      <main style={{ maxWidth: 860, margin: "0 auto", padding: "20px 14px" }}>
        {aba === "inicio"   && <Inicio pctPlano={pctPlano} concluidos={concluidos} totalDias={totalDias} pctEx={pctEx} exConcluidos={exConcluidos} totalEx={EXERCICIOS.length} licoesConcluidas={licoesConcluidas} totalLicoes={LICOES.length} irPara={setAba} apagarProgresso={apagarProgresso} />}
        {aba === "plano"    && <PlanoView diasFeitos={diasFeitos} toggleDia={toggleDia} pct={pctPlano} />}
        {aba === "aprender" && <AprenderView licoesFeitas={licoesFeitas} setLicoesFeitas={setLicoesFeitas} setContexto={setContexto} />}
        {aba === "analise"  && <AnaliseView />}
        {aba === "treino"   && <TreinoView exFeitos={exFeitos} setExFeitos={setExFeitos} setContexto={setContexto} />}
      </main>

      {/* Tutor IA flutuante */}
      <TutorChat contexto={contextoTutor} />
    </div>
  );
}

// ============================================================
//  ABA: INÍCIO
// ============================================================
function Inicio({ pctPlano, concluidos, totalDias, pctEx, exConcluidos, totalEx, licoesConcluidas, totalLicoes, irPara, apagarProgresso }) {
  const [confirmar, setConfirmar] = useState(false);
  const pctLicoes = Math.round((licoesConcluidas / totalLicoes) * 100);
  const inicio = concluidos === 0 && exConcluidos === 0 && licoesConcluidas === 0;

  return (
    <div style={{ display: "grid", gap: 16 }}>
      {inicio && (
        <Card style={{ background: "linear-gradient(135deg, #1a2a1a, #1a1a2a)", border: `1px solid ${C.amber}` }}>
          <div style={{ fontSize: 26, marginBottom: 10 }}>👋</div>
          <h2 style={{ margin: "0 0 10px", fontSize: 20, fontWeight: 900, color: C.amber }}>Bem-vindo à tua plataforma!</h2>
          <p style={{ margin: "0 0 14px", color: C.sub, lineHeight: 1.65, fontSize: 14.5 }}>
            Não precisas de perceber nada de matemática para começar. Cada lição é construída do zero, com linguagem simples e exemplos do dia a dia. O <b style={{ color: C.ink }}>Zé</b> (o tutor IA, botão amarelo em baixo) está sempre disponível para responder a qualquer dúvida.
          </p>
          <BotaoGrande cor={C.amber} onClick={() => irPara("aprender")}>📖 Começar pela primeira lição</BotaoGrande>
        </Card>
      )}

      <Card>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          <h2 style={h2}>O teu progresso</h2>
          <span style={{ fontSize: 11.5, color: C.green, fontWeight: 700, display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: C.green, display: "inline-block" }} />
            guardado na cloud
          </span>
        </div>
        <Barra label={`Lições estudadas · ${licoesConcluidas}/${totalLicoes}`} pct={pctLicoes} cor={C.amber} />
        <div style={{ height: 10 }} />
        <Barra label={`Plano de estudo · ${concluidos}/${totalDias} dias`} pct={pctPlano} cor={C.green} />
        <div style={{ height: 10 }} />
        <Barra label={`Exercícios resolvidos · ${exConcluidos}/${totalEx}`} pct={pctEx} cor={C.blue} />
        {!inicio && (
          <div style={{ marginTop: 14 }}>
            {!confirmar ? (
              <button onClick={() => setConfirmar(true)} style={{ background: "transparent", border: `1px solid ${C.line}`, color: C.sub, borderRadius: 8, padding: "7px 12px", cursor: "pointer", fontSize: 12.5 }}>Recomeçar do zero</button>
            ) : (
              <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                <span style={{ fontSize: 13, color: C.sub }}>Tens a certeza? Isto apaga tudo.</span>
                <button onClick={() => { apagarProgresso(); setConfirmar(false); }} style={{ background: C.red, border: "none", color: "#fff", borderRadius: 8, padding: "7px 12px", cursor: "pointer", fontSize: 12.5, fontWeight: 700 }}>Sim, apagar</button>
                <button onClick={() => setConfirmar(false)} style={{ background: "transparent", border: `1px solid ${C.line}`, color: C.sub, borderRadius: 8, padding: "7px 12px", cursor: "pointer", fontSize: 12.5 }}>Cancelar</button>
              </div>
            )}
          </div>
        )}
      </Card>

      <PomodoroTimer />

      <Card>
        <h2 style={h2}>Como usar isto</h2>
        <ol style={{ margin: 0, paddingLeft: 18, color: C.sub, lineHeight: 1.8, fontSize: 14.5 }}>
          <li><b style={{ color: C.ink }}>Usa o temporizador acima.</b> 25 min de foco, 5 de pausa. Nunca horas seguidas.</li>
          <li><b style={{ color: C.ink }}>Segue o Plano 20 dias.</b> Marca cada dia como feito ao terminar.</li>
          <li><b style={{ color: C.ink }}>Faz os exercícios</b> — aprende-se a fazer, não a ler.</li>
          <li><b style={{ color: C.ink }}>Botão amarelo em baixo = Zé.</b> Qualquer dúvida, clica e pergunta. Ele explica tudo de forma simples.</li>
        </ol>
      </Card>

      {!inicio && (
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <BotaoGrande cor={C.amber} onClick={() => irPara("aprender")}>📖 Continuar a aprender</BotaoGrande>
          <BotaoGrande cor={C.blue} onClick={() => irPara("treino")}>✏️ Fazer um exercício</BotaoGrande>
        </div>
      )}
    </div>
  );
}

// ============================================================
//  ABA: PLANO
// ============================================================
function PlanoView({ diasFeitos, toggleDia, pct }) {
  const nomeSemana = { 1: "Semana 1 — Construir a base", 2: "Semana 2 — Derivadas + Probabilidades", 3: "Semana 3 — Treino de exames" };
  return (
    <div style={{ display: "grid", gap: 18 }}>
      <Card><Barra label={`Progresso do plano · ${pct}%`} pct={pct} cor={C.green} /></Card>
      {[1, 2, 3].map(sem => (
        <div key={sem}>
          <h2 style={{ ...h2, marginBottom: 10 }}>{nomeSemana[sem]}</h2>
          <div style={{ display: "grid", gap: 10 }}>
            {PLANO.filter(d => d.semana === sem).map(d => {
              const feito = !!diasFeitos[d.dia];
              return (
                <div key={d.dia} style={{ background: feito ? "#16241c" : C.panel, border: `1px solid ${feito ? C.green : C.line}`, borderRadius: 14, padding: "14px 16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <button onClick={() => toggleDia(d.dia)} style={{ width: 32, height: 32, borderRadius: 8, flexShrink: 0, border: `2px solid ${feito ? C.green : C.line}`, background: feito ? C.green : "transparent", color: "#0f1419", cursor: "pointer", fontWeight: 900, fontSize: 16 }}>
                      {feito ? "✓" : ""}
                    </button>
                    <div>
                      <div style={{ fontSize: 11.5, color: C.amber, fontWeight: 700 }}>DIA {d.dia}</div>
                      <div style={{ fontSize: 15.5, fontWeight: 700 }}>{d.titulo}</div>
                    </div>
                  </div>
                  <ul style={{ margin: "10px 0 0 44px", padding: 0, listStyle: "none", color: C.sub, fontSize: 13.5, lineHeight: 1.7 }}>
                    {d.tarefas.map((t, i) => <li key={i}>• {t}</li>)}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      ))}
      <Card>
        <h2 style={h2}>📋 Folha de receitas</h2>
        <p style={{ margin: "0 0 10px", color: C.sub, fontSize: 14, lineHeight: 1.6 }}>Vai escrevendo estas "receitas" numa folha. São os padrões que mais saem:</p>
        {[
          "Plano ⊥ reta → o vetor diretor da reta É o vetor normal do plano.",
          "Onde a reta fura o plano → ponto genérico da reta, substituir na equação do plano.",
          "Distância A→B → √[(x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²]",
          "Continuidade → limite esquerda = limite direita = valor da função.",
          "Derivada de xⁿ → n·xⁿ⁻¹ (desce o expoente, tira-lhe 1).",
        ].map((r, i) => <div key={i} style={receita}>{r}</div>)}
      </Card>
    </div>
  );
}

// ============================================================
//  ABA: APRENDER
// ============================================================
function AprenderView({ licoesFeitas, setLicoesFeitas, setContexto }) {
  const [abertaId, setAbertaId] = useState(null);
  const aberta = LICOES.find(l => l.id === abertaId);

  if (aberta) {
    return (
      <Licao
        licao={aberta} feita={!!licoesFeitas[aberta.id]}
        marcarFeita={() => setLicoesFeitas(s => ({ ...s, [aberta.id]: true }))}
        voltar={() => setAbertaId(null)}
        setContexto={setContexto}
      />
    );
  }

  const temasComLicoes = [...new Set(LICOES.map(l => l.tema))];
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <Card>
        <h2 style={h2}>Aprende do zero, passo a passo</h2>
        <p style={{ margin: 0, color: C.sub, fontSize: 14.5, lineHeight: 1.6 }}>
          Cada lição é curta (≈8 min), explica tudo do básico e termina com exercícios do simples ao formato-exame. Faz 1-2 lições por sessão de 25 min.
        </p>
      </Card>
      {temasComLicoes.map(temaId => {
        const tema = TEMAS.find(t => t.id === temaId);
        return (
          <div key={temaId}>
            <h2 style={{ ...h2, marginBottom: 10 }}>{tema?.nome.split(" (")[0] ?? temaId}</h2>
            <div style={{ display: "grid", gap: 10 }}>
              {LICOES.filter(l => l.tema === temaId).map(l => {
                const feita = !!licoesFeitas[l.id];
                return (
                  <button key={l.id} onClick={() => { setAbertaId(l.id); setContexto(`Lição: ${l.titulo}`); }} style={{
                    textAlign: "left", background: feita ? "#16241c" : C.panel,
                    border: `1px solid ${feita ? C.green : C.line}`, borderRadius: 14,
                    padding: "15px 16px", cursor: "pointer", display: "flex", alignItems: "center", gap: 13,
                  }}>
                    <div style={{ width: 38, height: 38, borderRadius: 10, flexShrink: 0, background: feita ? C.green : C.panel2, color: feita ? "#0f1419" : C.amber, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 17 }}>
                      {feita ? "✓" : l.numero}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 16, fontWeight: 700, color: C.ink }}>{l.titulo}</div>
                      <div style={{ fontSize: 12.5, color: C.sub }}>{l.duracao} · {l.exercicios.length} exercícios</div>
                    </div>
                    <span style={{ color: C.sub, fontSize: 22 }}>›</span>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
      <Card>
        <p style={{ margin: 0, color: C.sub, fontSize: 13.5, lineHeight: 1.6 }}>
          💡 Estão disponíveis as lições de <b style={{ color: C.ink }}>Geometria</b>. Pergunta ao Zé (botão amarelo) para te explicar qualquer outro tema enquanto não há mais lições disponíveis.
        </p>
      </Card>
    </div>
  );
}

function Licao({ licao, feita, marcarFeita, voltar, setContexto }) {
  useEffect(() => { setContexto(`Lição: "${licao.titulo}" — aluno está a estudar este conteúdo`); }, [licao.titulo, setContexto]);

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <button onClick={voltar} style={{ alignSelf: "start", background: "transparent", border: `1px solid ${C.line}`, color: C.sub, borderRadius: 8, padding: "7px 13px", cursor: "pointer", fontSize: 13 }}>‹ Voltar</button>
      <Card>
        <div style={{ fontSize: 12, color: C.amber, fontWeight: 800, letterSpacing: 1 }}>LIÇÃO {licao.numero} · {licao.duracao}</div>
        <h2 style={{ margin: "4px 0 18px", fontSize: 22, fontWeight: 900 }}>{licao.titulo}</h2>
        <div style={{ display: "grid", gap: 14 }}>
          {licao.blocos.map((b, i) => {
            if (b.tipo === "texto") return <p key={i} style={{ margin: 0, fontSize: 15.5, lineHeight: 1.75 }} dangerouslySetInnerHTML={{ __html: b.html }} />;
            if (b.tipo === "chave") return (
              <div key={i} style={{ background: "#13202c", borderLeft: `4px solid ${C.amber}`, borderRadius: 10, padding: "13px 16px" }}>
                <div style={{ fontSize: 11, color: C.amber, fontWeight: 800, marginBottom: 4 }}>💡 IDEIA-CHAVE</div>
                <div style={{ fontSize: 15, lineHeight: 1.6, fontWeight: 600 }} dangerouslySetInnerHTML={{ __html: b.html }} />
              </div>
            );
            if (b.tipo === "exemplo") return (
              <div key={i} style={{ background: C.panel2, border: `1px solid ${C.line}`, borderRadius: 12, padding: "14px 16px" }}>
                <div style={{ fontSize: 13, color: C.blue, fontWeight: 800, marginBottom: 10 }}>✍️ {b.titulo}</div>
                <div style={{ display: "grid", gap: 8 }}>
                  {b.passos.map((p, j) => (
                    <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: "50%", background: C.bg, color: C.sub, fontSize: 12, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>{j + 1}</span>
                      <span style={{ fontSize: 14.5, lineHeight: 1.55 }}>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
            return null;
          })}
        </div>
      </Card>
      <Card>
        <h2 style={{ ...h2, marginBottom: 6 }}>Agora treina 💪</h2>
        <p style={{ margin: "0 0 14px", color: C.sub, fontSize: 14, lineHeight: 1.5 }}>Responde e lê SEMPRE a explicação — é aí que o padrão entra.</p>
        <div style={{ display: "grid", gap: 12 }}>
          {licao.exercicios.map((ex, i) => <LicaoExercicio key={i} ex={ex} />)}
        </div>
      </Card>
      {!feita ? (
        <BotaoGrande cor={C.green} onClick={marcarFeita}>✓ Marcar lição como estudada</BotaoGrande>
      ) : (
        <div style={{ textAlign: "center", padding: 14, borderRadius: 14, background: "#16241c", border: `1px solid ${C.green}`, color: C.green, fontWeight: 800 }}>✓ Lição concluída! Boa. 🎉</div>
      )}
    </div>
  );
}

function LicaoExercicio({ ex }) {
  const [escolha, setEscolha] = useState(null);
  const respondido = escolha !== null;
  const acertou = escolha === ex.correta;
  return (
    <div style={{ background: C.panel2, border: `1px solid ${C.line}`, borderRadius: 12, padding: "14px 16px" }}>
      <span style={{ fontSize: 10.5, fontWeight: 800, color: "#0f1419", background: ex.nivel === "exame" ? C.red : C.green, padding: "2px 8px", borderRadius: 20 }}>
        {ex.nivel === "exame" ? "FORMATO EXAME" : "SIMPLES"}
      </span>
      <div style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.5, margin: "10px 0 12px" }}>{ex.pergunta}</div>
      <div style={{ display: "grid", gap: 8 }}>
        {ex.opcoes.map((op, i) => {
          let bg = C.panel, bd = C.line;
          if (respondido) { if (i === ex.correta) { bg = "#16301f"; bd = C.green; } else if (i === escolha) { bg = "#311a20"; bd = C.red; } }
          return (
            <button key={i} onClick={() => !respondido && setEscolha(i)} disabled={respondido} style={{ textAlign: "left", padding: "10px 13px", borderRadius: 10, border: `1.5px solid ${bd}`, background: bg, color: C.ink, cursor: respondido ? "default" : "pointer", fontSize: 14, display: "flex", gap: 10, alignItems: "center" }}>
              <span style={{ fontWeight: 800, color: C.sub }}>{String.fromCharCode(65 + i)}</span>
              <span style={{ flex: 1 }}>{op}</span>
              {respondido && i === ex.correta && <span style={{ color: C.green }}>✓</span>}
              {respondido && i === escolha && i !== ex.correta && <span style={{ color: C.red }}>✗</span>}
            </button>
          );
        })}
      </div>
      {respondido && (
        <div style={{ marginTop: 11, padding: "11px 13px", borderRadius: 10, background: acertou ? "#16241c" : "#26201a", border: `1px solid ${acertou ? C.green : C.amber}` }}>
          <div style={{ fontWeight: 800, color: acertou ? C.green : C.amber, marginBottom: 3, fontSize: 13.5 }}>{acertou ? "Certo! 🎉" : "Vê porquê:"}</div>
          <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.55 }}>{ex.explicacao}</p>
        </div>
      )}
    </div>
  );
}

// ============================================================
//  ABA: ANÁLISE
// ============================================================
function AnaliseView() {
  const ordenado = [...TEMAS].sort((a, b) => b.peso - a.peso);
  const maxPeso = Math.max(...TEMAS.map(t => t.peso));
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <Card>
        <h2 style={h2}>Peso real de cada tema</h2>
        <p style={{ margin: 0, color: C.sub, fontSize: 13.5, lineHeight: 1.6 }}>Baseado na Informação-Prova oficial do IAVE 2026 e nos enunciados dos exames recentes. Foca a tua energia de cima para baixo.</p>
      </Card>
      {ordenado.map(t => (
        <div key={t.id} style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 14, padding: "14px 16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
            <div style={{ fontWeight: 700, fontSize: 15.5 }}>{t.nome}</div>
            <span style={{ fontSize: 11, fontWeight: 800, padding: "3px 9px", borderRadius: 20, color: "#0f1419", background: prioridadeCor(t.prioridade) }}>{prioridadeLabel(t.prioridade)}</span>
          </div>
          <div style={{ height: 12, background: C.panel2, borderRadius: 8, overflow: "hidden", marginBottom: 6 }}>
            <div style={{ width: `${(t.peso / maxPeso) * 100}%`, height: "100%", background: `linear-gradient(90deg, ${prioridadeCor(t.prioridade)}, ${C.amber})`, borderRadius: 8 }} />
          </div>
          <div style={{ fontSize: 12, color: C.sub, marginBottom: 6 }}>≈ {t.peso}% da prova</div>
          <p style={{ margin: 0, color: C.sub, fontSize: 13.5, lineHeight: 1.6 }}>{t.porque}</p>
        </div>
      ))}
      <Card>
        <h2 style={h2}>Estrutura da prova (oficial 2026)</h2>
        <ul style={{ margin: 0, paddingLeft: 18, color: C.sub, lineHeight: 1.85, fontSize: 14 }}>
          <li><b style={{ color: C.ink }}>200 pontos</b>, 150 min (+30 de tolerância).</li>
          <li><b style={{ color: C.ink }}>18 itens:</b> 12 obrigatórios + 6 dos quais contam os 3 melhores.</li>
          <li>Mistura de <b style={{ color: C.ink }}>escolha múltipla</b> e resposta aberta.</li>
          <li>Em 2026 NÃO saem: inferência estatística, primitivas/integrais, matrizes.</li>
          <li>Tens sempre <b style={{ color: C.amber }}>formulário</b> — não decores fórmulas, aprende a usá-lo.</li>
        </ul>
      </Card>
    </div>
  );
}

// ============================================================
//  ABA: TREINAR
// ============================================================
function TreinoView({ exFeitos, setExFeitos, setContexto }) {
  const [filtro, setFiltro] = useState("todos");
  const temasDisponiveis = useMemo(() => [...new Set(EXERCICIOS.map(e => e.tema))].map(id => TEMAS.find(t => t.id === id)), []);
  const lista = filtro === "todos" ? EXERCICIOS : EXERCICIOS.filter(e => e.tema === filtro);

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <Card>
        <h2 style={h2}>Treina por reconhecimento</h2>
        <p style={{ margin: "0 0 12px", color: C.sub, fontSize: 14, lineHeight: 1.6 }}>Escolhe a resposta. Acertes ou não, lê SEMPRE a explicação — é aí que aprendes o padrão.</p>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          <Chip ativo={filtro === "todos"} onClick={() => setFiltro("todos")}>Todos</Chip>
          {temasDisponiveis.map(t => <Chip key={t.id} ativo={filtro === t.id} onClick={() => { setFiltro(t.id); setContexto(`A treinar exercícios de ${t.nome}`); }}>{t.nome.split(" ")[0]}</Chip>)}
        </div>
      </Card>
      {lista.map(ex => <Exercicio key={ex.id} ex={ex} feito={!!exFeitos[ex.id]} marcar={() => setExFeitos(s => ({ ...s, [ex.id]: true }))} />)}
    </div>
  );
}

function Exercicio({ ex, feito, marcar }) {
  const [escolha, setEscolha] = useState(null);
  const respondido = escolha !== null;
  const acertou = escolha === ex.correta;
  const escolher = (i) => { if (respondido) return; setEscolha(i); if (i === ex.correta) marcar(); };
  return (
    <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 14, padding: "16px 18px" }}>
      <div style={{ fontSize: 11, color: C.amber, fontWeight: 800, marginBottom: 6 }}>
        {TEMAS.find(t => t.id === ex.tema)?.nome.split(" ")[0].toUpperCase()}
        {feito && <span style={{ color: C.green, marginLeft: 8 }}>✓ resolvido</span>}
      </div>
      <div style={{ fontSize: 15.5, fontWeight: 600, lineHeight: 1.5, marginBottom: 12 }}>{ex.pergunta}</div>
      <div style={{ display: "grid", gap: 8 }}>
        {ex.opcoes.map((op, i) => {
          let bg = C.panel2, bd = C.line;
          if (respondido) { if (i === ex.correta) { bg = "#16301f"; bd = C.green; } else if (i === escolha) { bg = "#311a20"; bd = C.red; } }
          return (
            <button key={i} onClick={() => escolher(i)} disabled={respondido} style={{ textAlign: "left", padding: "11px 14px", borderRadius: 10, border: `1.5px solid ${bd}`, background: bg, color: C.ink, cursor: respondido ? "default" : "pointer", fontSize: 14.5, display: "flex", gap: 10, alignItems: "center" }}>
              <span style={{ fontWeight: 800, color: C.sub }}>{String.fromCharCode(65 + i)}</span>
              <span>{op}</span>
              {respondido && i === ex.correta && <span style={{ marginLeft: "auto", color: C.green }}>✓</span>}
              {respondido && i === escolha && i !== ex.correta && <span style={{ marginLeft: "auto", color: C.red }}>✗</span>}
            </button>
          );
        })}
      </div>
      {respondido && (
        <div style={{ marginTop: 12, padding: "12px 14px", borderRadius: 10, background: acertou ? "#16241c" : "#26201a", border: `1px solid ${acertou ? C.green : C.amber}` }}>
          <div style={{ fontWeight: 800, color: acertou ? C.green : C.amber, marginBottom: 4, fontSize: 14 }}>{acertou ? "Boa! 🎉" : "Quase — aprende isto:"}</div>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6 }}>{ex.explicacao}</p>
        </div>
      )}
    </div>
  );
}

// ============================================================
//  COMPONENTES PARTILHADOS
// ============================================================
const h2 = { margin: "0 0 12px", fontSize: 18, fontWeight: 800 };
const receita = { background: "#13202c", border: `1px solid ${C.line}`, borderLeft: `3px solid ${C.amber}`, borderRadius: 8, padding: "9px 12px", fontSize: 13.5, color: C.ink, marginBottom: 7, lineHeight: 1.5 };

function Card({ children, style }) {
  return <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 16, padding: "18px 20px", ...style }}>{children}</div>;
}

function Barra({ label, pct, cor }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13.5, marginBottom: 6, color: C.sub }}>
        <span>{label}</span><span style={{ fontWeight: 800, color: cor }}>{pct}%</span>
      </div>
      <div style={{ height: 14, background: C.panel2, borderRadius: 8, overflow: "hidden" }}>
        <div style={{ width: `${pct}%`, height: "100%", background: cor, borderRadius: 8, transition: "width .4s" }} />
      </div>
    </div>
  );
}

function BotaoGrande({ children, cor, onClick }) {
  return (
    <button onClick={onClick} style={{ flex: 1, minWidth: 180, padding: "15px 18px", borderRadius: 14, border: "none", cursor: "pointer", fontWeight: 800, fontSize: 15.5, background: cor, color: "#0f1419" }}>
      {children}
    </button>
  );
}

function Chip({ children, ativo, onClick }) {
  return (
    <button onClick={onClick} style={{ padding: "7px 13px", borderRadius: 20, border: `1.5px solid ${ativo ? C.amber : C.line}`, background: ativo ? C.amber : "transparent", color: ativo ? "#1a1206" : C.sub, cursor: "pointer", fontWeight: 700, fontSize: 13 }}>
      {children}
    </button>
  );
}
