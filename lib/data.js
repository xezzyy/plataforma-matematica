// ============================================================
//  DADOS DA PLATAFORMA — Matemática A (Exame 635, 2026)
// ============================================================

export const TEMAS = [
  { id: "funcoes",       nome: "Funções (limites, continuidade, derivadas)", peso: 30, prioridade: "essencial",  porque: "É o tema mais pesado. Aparece SEMPRE com várias questões: continuidade, derivadas, monotonia, assíntotas e o teorema de Bolzano." },
  { id: "complexos",     nome: "Números Complexos",                           peso: 14, prioridade: "essencial",  porque: "Aparece todos os anos, normalmente 2 questões. Muito 'mecânico': segue fórmulas do formulário. Bom para garantir pontos." },
  { id: "probabilidades",nome: "Probabilidades e Cálculo Combinatório",       peso: 16, prioridade: "essencial",  porque: "Sempre presente. Triângulo de Pascal, contagens e probabilidade condicionada. Há 'receitas' claras." },
  { id: "geometria",     nome: "Geometria (no espaço / analítica)",           peso: 12, prioridade: "importante", porque: "Muito frequente e o mais 'receita' de todos: segue sempre os mesmos passos. Ideal para começar e ganhar confiança." },
  { id: "sucessoes",     nome: "Sucessões (e progressões)",                   peso: 12, prioridade: "importante", porque: "Recorrente. Limites de sucessões e somas de progressões. Costuma ter uma questão com bom valor." },
  { id: "trigonometria", nome: "Trigonometria",                               peso:  8, prioridade: "importante", porque: "Aparece com frequência, por vezes ligada à geometria ou aos complexos. Fórmulas estão no formulário." },
  { id: "estatistica",   nome: "Estatística (regressão linear)",              peso:  8, prioridade: "bonus",      porque: "Costuma surgir numa questão de escolha múltipla resolvida quase toda com a calculadora. Pontos 'fáceis'." },
];

export const PLANO = [
  { dia: 1,  semana: 1, titulo: "Geometria — o básico",               foco: "geometria",      tarefas: ["Coordenadas e vetores (B − A). Ver 2 exemplos.", "3 exercícios de distância entre pontos."] },
  { dia: 2,  semana: 1, titulo: "Geometria — equações de planos",     foco: "geometria",      tarefas: ["Equação do plano e vetor normal.", "Exercícios 'plano perpendicular a uma reta'."] },
  { dia: 3,  semana: 1, titulo: "Geometria — retas e interseções",    foco: "geometria",      tarefas: ["Equação vetorial da reta + onde fura o plano.", "🔁 Refaz 1 exercício do Dia 1."] },
  { dia: 4,  semana: 1, titulo: "Geometria — treino livre",           foco: "geometria",      tarefas: ["4 exercícios de exame de geometria.", "🎉 Se conseguires, este tema está ganho!"] },
  { dia: 5,  semana: 1, titulo: "Funções — limites (1)",              foco: "funcoes",        tarefas: ["O que é um limite (ideia simples).", "Calcular limites simples.", "🔁 1 exercício de geometria."] },
  { dia: 6,  semana: 1, titulo: "Funções — continuidade",             foco: "funcoes",        tarefas: ["A regra dos 3 passos da continuidade.", "Exercícios 'averigua se é contínua em x=0'."] },
  { dia: 7,  semana: 1, titulo: "Revisão (dia leve)",                 foco: null,             tarefas: ["🔁 1 exercício de geometria.", "🔁 1 exercício de limites.", "Descansa. Só consolidas."] },
  { dia: 8,  semana: 2, titulo: "Derivadas (1) — regras",             foco: "funcoes",        tarefas: ["O que é uma derivada + regras básicas.", "Derivar muitas funções simples.", "🔁 1 exercício de continuidade."] },
  { dia: 9,  semana: 2, titulo: "Derivadas (2) — aplicação",         foco: "funcoes",        tarefas: ["Máximos e mínimos (monotonia).", "Exercícios de monotonia."] },
  { dia: 10, semana: 2, titulo: "Derivadas (3) — otimização",        foco: "funcoes",        tarefas: ["Problemas de área/volume máximo.", "2 problemas com calculadora gráfica.", "🔁 Derivar 2 funções do Dia 8."] },
  { dia: 11, semana: 2, titulo: "Probabilidades (1)",                 foco: "probabilidades", tarefas: ["Combinatória + triângulo de Pascal.", "Exercícios de contagem."] },
  { dia: 12, semana: 2, titulo: "Probabilidades (2)",                 foco: "probabilidades", tarefas: ["Probabilidade condicionada + Laplace.", "Exercícios de exame.", "🔁 1 problema de derivadas."] },
  { dia: 13, semana: 2, titulo: "Trigonometria + Complexos (intro)",  foco: "trigonometria",  tarefas: ["Razões básicas + fórmula fundamental.", "Forma dos complexos (formulário)."] },
  { dia: 14, semana: 2, titulo: "Revisão geral",                      foco: null,             tarefas: ["🔁 Geometria.", "🔁 Derivadas.", "🔁 Probabilidades.", "💪 Nota que estão mais fáceis."] },
  { dia: 15, semana: 3, titulo: "1.º exame completo (sem stress)",    foco: null,             tarefas: ["Faz um exame antigo com tempo livre.", "Objetivo: ver os TIPOS de pergunta."] },
  { dia: 16, semana: 3, titulo: "Corrigir o exame",                   foco: null,             tarefas: ["Vê a resolução de cada erro.", "Anota os tipos de erro numa folha."] },
  { dia: 17, semana: 3, titulo: "Treinar pontos fracos",              foco: null,             tarefas: ["Exercícios só dos temas onde erraste mais."] },
  { dia: 18, semana: 3, titulo: "2.º exame completo (a sério)",       foco: null,             tarefas: ["Cronometra, sem consultar nada.", "Faz toda a escolha múltipla."] },
  { dia: 19, semana: 3, titulo: "Corrigir + escolha múltipla",        foco: null,             tarefas: ["Treina as 4 questões de escolha múltipla.", "Nunca deixes em branco — elimina e arrisca."] },
  { dia: 20, semana: 3, titulo: "Revisão final calma",                foco: null,             tarefas: ["🔁 Relê a folha de receitas.", "Refaz 2-3 exercícios que dominas.", "Dorme bem. Já fizeste o trabalho. 😊"] },
];

export const EXERCICIOS = [
  { id: "ex1", tema: "geometria",      pergunta: "Um plano é perpendicular a uma reta cujo vetor diretor é (2, 3, −1). Qual é o vetor normal desse plano?",      opcoes: ["(0, 0, 0)", "(2, 3, −1)", "(−2, −3, 1) só funciona ao contrário", "(3, 2, −1)"],                                                          correta: 1, explicacao: "Receita-chave: quando um plano é PERPENDICULAR a uma reta, o vetor diretor da reta É o vetor normal do plano. Então é (2, 3, −1)." },
  { id: "ex2", tema: "geometria",      pergunta: "A distância entre os pontos A(1, 0, 2) e B(1, 3, 6) é:",                                                         opcoes: ["3", "5", "7", "√29"],                                                                                                                         correta: 1, explicacao: "√[(1−1)² + (3−0)² + (6−2)²] = √[0 + 9 + 16] = √25 = 5. As diferenças são 0, 3 e 4 — o clássico triângulo 3-4-5!" },
  { id: "ex3", tema: "funcoes",        pergunta: "Para uma função ser contínua num ponto, o que precisa de acontecer?",                                              opcoes: ["A função tem de ser sempre crescente", "O limite à esquerda, o limite à direita e o valor da função têm de ser iguais", "A derivada tem de existir", "A função tem de passar pela origem"], correta: 1, explicacao: "A regra dos 3: limite à esquerda = limite à direita = valor da função no ponto. Esta pergunta sai quase todos os anos!" },
  { id: "ex4", tema: "funcoes",        pergunta: "Qual é a derivada de f(x) = x³ ?",                                                                                opcoes: ["x²", "3x²", "3x", "x³/3"],                                                                                                                   correta: 1, explicacao: "Regra da potência: a derivada de xⁿ é n·xⁿ⁻¹. Então x³ → 3·x². 'Desce o expoente para a frente, e tira-lhe 1.'" },
  { id: "ex5", tema: "probabilidades", pergunta: "Quantos códigos de 2 algarismos diferentes (de 0 a 9) existem, se a ordem importa?",                              opcoes: ["100", "90", "45", "20"],                                                                                                                      correta: 1, explicacao: "Para o 1.º algarismo há 10 escolhas; para o 2.º, como tem de ser diferente, há 9. Total = 10 × 9 = 90." },
  { id: "ex6", tema: "probabilidades", pergunta: "Numa turma, P(gostar de música) = 0,6. A probabilidade de NÃO gostar é:",                                         opcoes: ["0,6", "0,4", "1", "0,5"],                                                                                                                     correta: 1, explicacao: "O complementar: P(não A) = 1 − P(A) = 1 − 0,6 = 0,4. A probabilidade total é sempre 1." },
  { id: "ex7", tema: "trigonometria",  pergunta: "Qual é o valor de sen²(x) + cos²(x) ?",                                                                          opcoes: ["0", "1", "2", "Depende de x"],                                                                                                                correta: 1, explicacao: "A fórmula fundamental: sen²(x) + cos²(x) = 1, sempre, para qualquer x. Das fórmulas mais usadas no exame." },
  { id: "ex8", tema: "sucessoes",      pergunta: "Numa progressão aritmética, cada termo obtém-se do anterior:",                                                    opcoes: ["Multiplicando por um número fixo", "Somando um número fixo (a razão)", "Elevando ao quadrado", "Dividindo por 2"],                            correta: 1, explicacao: "Progressão ARITMÉTICA = somar sempre a mesma razão (ex: 2, 5, 8, 11... soma 3). Se fosse MULTIPLICAR, era geométrica." },
];

export const LICOES = [
  {
    id: "geo-1", tema: "geometria", numero: "1", titulo: "Coordenadas e vetores", duracao: "≈ 8 min",
    blocos: [
      { tipo: "texto", html: "Imagina uma sala. Para dizer onde está um objeto, precisas de 3 números: quão à frente, quão para o lado, e quão para cima. Em matemática, esses 3 números são as <b>coordenadas</b> de um ponto no espaço." },
      { tipo: "texto", html: "Um ponto escreve-se assim: <b>A(2, 5, 3)</b>. O primeiro número é o <b>x</b>, o segundo o <b>y</b>, o terceiro o <b>z</b>. É só uma 'morada' no espaço." },
      { tipo: "chave", html: "Um <b>vetor</b> é uma seta que vai de um ponto a outro. Para calcular, fazes <b>B − A</b> (ponto final menos ponto inicial), coordenada a coordenada." },
      { tipo: "exemplo", titulo: "Exemplo resolvido", passos: ["Dados: A(1, 2, 0) e B(4, 6, 5). Queremos o vetor AB.", "Receita: AB = B − A.", "x: 4 − 1 = 3 | y: 6 − 2 = 4 | z: 5 − 0 = 5", "Resposta: AB = (3, 4, 5). É literalmente uma subtração feita 3 vezes."] },
      { tipo: "texto", html: "É mesmo só isto. Sempre que vires 'vetor de A para B', a tua cabeça deve dizer automaticamente: <b>B menos A</b>." },
    ],
    exercicios: [
      { nivel: "simples", pergunta: "Se C(2, 1, 3) e D(5, 5, 3), qual é o vetor CD?",                                                                                         opcoes: ["(3, 4, 0)", "(7, 6, 6)", "(3, 4, 6)", "(−3, −4, 0)"],       correta: 0, explicacao: "CD = D − C = (5−2, 5−1, 3−3) = (3, 4, 0). O z deu 0 porque ambos tinham z=3 — normal." },
      { nivel: "simples", pergunta: "Se P(0, 0, 0) e Q(2, −3, 4), qual é o vetor PQ?",                                                                                        opcoes: ["(−2, 3, −4)", "(2, −3, 4)", "(2, 3, 4)", "(0, 0, 0)"],       correta: 1, explicacao: "PQ = Q − P = (2−0, −3−0, 4−0) = (2, −3, 4). Quando o ponto inicial é a origem, o vetor é igual ao ponto final." },
      { nivel: "exame",   pergunta: "Em referencial o.n. Oxyz, considera A(3, −1, 2) e B(1, 4, 2). Indica as coordenadas do vetor AB.",                                        opcoes: ["(−2, 5, 0)", "(2, −5, 0)", "(4, 3, 4)", "(−2, 5, 4)"],       correta: 0, explicacao: "AB = B − A = (1−3, 4−(−1), 2−2) = (−2, 5, 0). Cuidado com o sinal: 4 − (−1) = 4 + 1 = 5." },
    ],
  },
  {
    id: "geo-2", tema: "geometria", numero: "2", titulo: "Distância entre dois pontos", duracao: "≈ 7 min",
    blocos: [
      { tipo: "texto", html: "Agora que sabes localizar pontos, vamos medir a <b>distância</b> entre dois. É das coisas que mais aparece no exame, e tem uma fórmula única que nunca muda." },
      { tipo: "chave", html: "Distância de A a B = √[(x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²]" },
      { tipo: "texto", html: "Parece assustador, mas é uma receita de 3 passos: (1) subtrais cada coordenada, (2) elevas ao quadrado, (3) somas tudo e tiras a raiz. É o Teorema de Pitágoras no espaço." },
      { tipo: "exemplo", titulo: "Exemplo resolvido", passos: ["Dados: A(1, 0, 2) e B(1, 3, 6).", "Passo 1 — subtrair: (1−1)=0 ; (3−0)=3 ; (6−2)=4", "Passo 2 — elevar ao quadrado: 0²=0 ; 3²=9 ; 4²=16", "Passo 3 — somar e raiz: √(0+9+16) = √25 = 5", "Resposta: a distância é 5."] },
      { tipo: "texto", html: "A ordem dos pontos não importa para a distância — o quadrado de um número negativo é positivo. 😉" },
    ],
    exercicios: [
      { nivel: "simples", pergunta: "Qual é a distância entre A(0, 0, 0) e B(2, 0, 0)?",                                                                                       opcoes: ["0", "2", "4", "√2"],                                         correta: 1, explicacao: "√[(2−0)² + 0 + 0] = √4 = 2. Quando só muda uma coordenada, a distância é simplesmente essa diferença." },
      { nivel: "simples", pergunta: "Qual é a distância entre P(1, 2, 2) e Q(1, 2, 5)?",                                                                                       opcoes: ["3", "5", "9", "√3"],                                         correta: 0, explicacao: "Só muda o z: √[0 + 0 + (5−2)²] = √9 = 3." },
      { nivel: "exame",   pergunta: "A distância entre A(2, 1, 0) e B(4, 1, 0) é:",                                                                                            opcoes: ["2", "4", "√8", "6"],                                         correta: 0, explicacao: "√[(4−2)² + (1−1)² + (0−0)²] = √4 = 2." },
    ],
  },
  {
    id: "geo-3", tema: "geometria", numero: "3", titulo: "Equação do plano e vetor normal", duracao: "≈ 9 min",
    blocos: [
      { tipo: "texto", html: "Um <b>plano</b> é uma superfície lisa e infinita (como uma folha de papel que nunca acaba). No espaço, escreve-se: <b>ax + by + cz + d = 0</b>." },
      { tipo: "chave", html: "Os números à frente do x, y e z formam o <b>vetor normal</b> do plano: (a, b, c). Lê-se diretamente da equação." },
      { tipo: "chave", html: "REGRA DE OURO: se uma reta é perpendicular a um plano, o vetor diretor da reta É o vetor normal do plano. São a mesma seta." },
      { tipo: "exemplo", titulo: "Exemplo resolvido", passos: ["Problema: plano ⊥ à reta de vetor diretor (4, 0, −2), que passa no ponto P(1, 5, 3).", "Passo 1 — vetor normal = (4, 0, −2). Equação: 4x + 0y − 2z + d = 0.", "Passo 2 — substituir P(1,5,3): 4(1) + 0(5) − 2(3) + d = 0.", "Passo 3 — resolver: 4 − 6 + d = 0 → d = 2.", "Resposta: 4x − 2z + 2 = 0."] },
      { tipo: "texto", html: "O d é sempre encontrado da mesma forma: substituis as coordenadas de um ponto que pertence ao plano e resolves para achar o d." },
    ],
    exercicios: [
      { nivel: "simples", pergunta: "Qual é o vetor normal do plano 3x − y + 2z − 7 = 0?",                                                                                    opcoes: ["(3, 1, 2)", "(3, −1, 2)", "(−7, 0, 0)", "(3, −1, 2, −7)"],  correta: 1, explicacao: "Copias os números à frente de x, y, z: (3, −1, 2). O −7 NÃO faz parte do vetor normal." },
      { nivel: "simples", pergunta: "Uma reta tem vetor diretor (1, 2, 5). Um plano perpendicular a essa reta tem que vetor normal?",                                           opcoes: ["(5, 2, 1)", "(1, 2, 5)", "(−1, −2, −5)", "(0, 0, 0)"],       correta: 1, explicacao: "Regra de ouro: plano ⊥ reta → o vetor diretor da reta é o vetor normal do plano. Logo (1, 2, 5)." },
      { nivel: "exame",   pergunta: "Plano α perpendicular à reta (x,y,z)=(0,0,1)+k(2,−1,3), passando na origem O(0,0,0). Qual a equação?",                                   opcoes: ["2x − y + 3z = 0", "2x − y + 3z + 5 = 0", "x − y + z = 0", "2x + y + 3z = 0"], correta: 0, explicacao: "Vetor normal = (2,−1,3). Passando na origem: d=0. Fica 2x−y+3z=0." },
    ],
  },
  {
    id: "geo-4", tema: "geometria", numero: "4", titulo: "Equação da reta e interseção com plano", duracao: "≈ 10 min",
    blocos: [
      { tipo: "texto", html: "Uma <b>reta</b> precisa de: um <b>ponto</b> por onde passa e uma <b>direção</b> (vetor diretor). Escreve-se: <b>(x, y, z) = (ponto) + k·(vetor diretor)</b>, onde k é qualquer número real." },
      { tipo: "chave", html: "O k é como um 'controlo deslizante': cada valor de k dá-te um ponto diferente ao longo da reta." },
      { tipo: "texto", html: "A pergunta clássica do exame: 'onde é que a reta fura o plano?'. A receita: pegas no ponto genérico da reta e substituis na equação do plano. Isso dá-te o valor de k." },
      { tipo: "exemplo", titulo: "Exemplo resolvido", passos: ["Reta: (x,y,z) = (1, 0, 2) + k(0, 1, 1). Plano: y + z − 5 = 0.", "Passo 1 — ponto genérico da reta: (1, k, 2+k).", "Passo 2 — substituir no plano: k + (2+k) − 5 = 0.", "Passo 3 — resolver: 2k − 3 = 0 → k = 3/2.", "Passo 4 — pôr k=3/2 no ponto genérico: (1, 1.5, 3.5).", "Resposta: cruzam-se no ponto (1, 1,5, 3,5)."] },
      { tipo: "texto", html: "Repara como tudo se liga: precisaste do ponto genérico e da equação do plano. A geometria do exame é sempre estas receitas encaixadas." },
    ],
    exercicios: [
      { nivel: "simples", pergunta: "Na reta (x,y,z)=(2,1,0)+k(1,1,1), qual é o ponto quando k=2?",                                                                            opcoes: ["(2, 1, 0)", "(4, 3, 2)", "(3, 2, 1)", "(1, 1, 1)"],          correta: 1, explicacao: "Substituis k=2: (2+2, 1+2, 0+2) = (4, 3, 2)." },
      { nivel: "simples", pergunta: "Qual é o vetor diretor da reta (x,y,z)=(5,0,1)+k(2,−3,4)?",                                                                               opcoes: ["(5, 0, 1)", "(2, −3, 4)", "(7, −3, 5)", "(0, 0, 0)"],        correta: 1, explicacao: "O vetor diretor é a parte que multiplica o k: (2, −3, 4)." },
      { nivel: "exame",   pergunta: "A reta (x,y,z)=(0,0,3)+k(1,−1,−1) interseta o plano x+y+z−2=0. Qual é o valor de k no ponto de interseção?",                             opcoes: ["k=1", "k=−1", "k=3", "k=0"],                                 correta: 0, explicacao: "Ponto genérico: (k, −k, 3−k). Substituir: k+(−k)+(3−k)−2=0 → 1−k=0 → k=1." },
    ],
  },
];
