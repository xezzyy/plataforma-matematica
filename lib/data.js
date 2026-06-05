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

  // ============================================================
  //  FUNÇÕES
  // ============================================================
  {
    id: "func-1", tema: "funcoes", numero: "1", titulo: "O que é um limite", duracao: "≈ 8 min",
    blocos: [
      { tipo: "texto", html: "Imagina que estás a andar em direção a uma parede. Vais chegando mais perto, mais perto... mas nunca tocas. O valor de que te estás a aproximar é o <b>limite</b>." },
      { tipo: "texto", html: "Em matemática: <b>lim f(x) quando x→a</b> é o valor para onde a função caminha quando x se aproxima de a. Não é o valor no ponto — é o valor a que ela <i>se aproxima</i>." },
      { tipo: "chave", html: "Receita para calcular a maioria dos limites: <b>substitui x pelo valor</b> e calcula. Se der um número normal, esse é o limite. É mesmo assim tão simples na maioria dos casos." },
      { tipo: "exemplo", titulo: "Exemplo resolvido", passos: [
        "Calcular lim(x→3) de f(x) = x² + 1.",
        "Receita: substituir x=3 diretamente.",
        "3² + 1 = 9 + 1 = 10.",
        "Resposta: o limite é 10.",
      ]},
      { tipo: "chave", html: "Problema: às vezes ao substituir obtemos <b>0/0</b> — isso chama-se indeterminação. Não significa que não existe limite, significa que precisamos de mais trabalho. (Vês na lição seguinte.)" },
      { tipo: "exemplo", titulo: "Quando NÃO funciona a substituição direta", passos: [
        "lim(x→2) de (x²−4)/(x−2).",
        "Substituir x=2: (4−4)/(2−2) = 0/0. ← Indeterminação!",
        "Fatorizar: (x²−4) = (x−2)(x+2).",
        "Simplificar: (x−2)(x+2)/(x−2) = x+2.",
        "Agora substituir: 2+2 = 4. O limite é 4.",
      ]},
    ],
    exercicios: [
      { nivel: "simples", pergunta: "Quanto vale lim(x→5) de f(x) = 2x − 3?",                                                       opcoes: ["7", "10", "3", "13"],                                                          correta: 0, explicacao: "Substituir x=5: 2(5)−3 = 10−3 = 7. Substituição direta funciona aqui — sem indeterminação." },
      { nivel: "simples", pergunta: "Quanto vale lim(x→0) de f(x) = x² + x + 1?",                                                   opcoes: ["0", "1", "2", "−1"],                                                           correta: 1, explicacao: "Substituir x=0: 0² + 0 + 1 = 1. Direto ao fim." },
      { nivel: "exame",   pergunta: "Calcula lim(x→1) de (x²−1)/(x−1).",                                                            opcoes: ["0", "1", "2", "Não existe"],                                                   correta: 2, explicacao: "Substituição dá 0/0. Fatorizar: (x−1)(x+1)/(x−1) = x+1. Substituir x=1: 1+1 = 2." },
    ],
  },
  {
    id: "func-2", tema: "funcoes", numero: "2", titulo: "Continuidade — a Regra dos 3", duracao: "≈ 8 min",
    blocos: [
      { tipo: "texto", html: "Uma função é <b>contínua</b> num ponto quando o gráfico não tem 'saltos' nem 'buracos' — consegues desenhá-lo sem levantar o lápis do papel." },
      { tipo: "chave", html: "Para provar que f é contínua em x=a, tens de verificar 3 condições:<br>1. f(a) existe (o ponto tem valor)<br>2. lim(x→a) f(x) existe (limite existe)<br>3. lim(x→a) f(x) = f(a) (o limite é igual ao valor)" },
      { tipo: "texto", html: "Nas funções definidas por partes (com { ), verifica sempre a continuidade no ponto de junção — é a pergunta mais comum do exame." },
      { tipo: "exemplo", titulo: "Exemplo resolvido — função por partes", passos: [
        "f(x) = { x+1, se x<2 | 3, se x≥2 }. É contínua em x=2?",
        "Condição 1 — f(2) existe: f(2)=3. ✓",
        "Condição 2 — limite existe: lim esq = 2+1=3. lim dir = 3. São iguais → limite = 3. ✓",
        "Condição 3 — limite = valor: 3 = 3. ✓",
        "Resposta: é contínua em x=2. As 3 condições verificam-se.",
      ]},
      { tipo: "texto", html: "Se qualquer uma das 3 condições falhar, a função <b>não é contínua</b> (tem um 'salto' ou 'buraco'). Diz qual falhou e porquê — é o que o exame pede." },
    ],
    exercicios: [
      { nivel: "simples", pergunta: "Para uma função ser contínua em x=a, o limite quando x→a tem de ser igual a:",                  opcoes: ["0", "1", "f(a)", "f(0)"],                                                      correta: 2, explicacao: "A condição 3 da regra dos 3: lim(x→a) f(x) = f(a). O limite tem de ser igual ao valor da função no ponto." },
      { nivel: "simples", pergunta: "f(x) = { 2x, se x<1 | 3, se x≥1 }. Qual é lim(x→1⁻) f(x)?",                                   opcoes: ["1", "2", "3", "0"],                                                            correta: 1, explicacao: "Limite pela esquerda: usamos 2x com x→1: 2(1)=2. Pela direita seria 3. Como 2≠3, a função não é contínua em x=1." },
      { nivel: "exame",   pergunta: "f(x) = { x²+k, se x≤2 | 3x−1, se x>2 }. Para que valor de k é f contínua em x=2?",            opcoes: ["k=1", "k=−1", "k=3", "k=0"],                                                  correta: 1, explicacao: "Limite esq: 2²+k=4+k. Limite dir: 3(2)−1=5. Para continuidade: 4+k=5 → k=1. Verificar: f(2)=4+1=5. ✓" },
    ],
  },
  {
    id: "func-3", tema: "funcoes", numero: "3", titulo: "O que é uma derivada", duracao: "≈ 9 min",
    blocos: [
      { tipo: "texto", html: "Imagina o velocímetro de um carro. Ele não te diz onde estás — diz-te <b>quão rápido estás a mudar de sítio</b>. A derivada é exatamente isso: mede a <b>taxa de variação</b> de uma função." },
      { tipo: "chave", html: "A derivada de f(x) escreve-se f'(x) ou df/dx. Ela diz-te: 'se eu aumentar x um bocadinho, quanto muda f(x)?'" },
      { tipo: "chave", html: "Regra da potência (a mais importante): a derivada de <b>xⁿ é n·xⁿ⁻¹</b>. 'Desce o expoente, tira-lhe 1.'" },
      { tipo: "exemplo", titulo: "Regras básicas com exemplos", passos: [
        "Constante: (5)' = 0. Uma constante não muda, logo a derivada é 0.",
        "Potência: (x³)' = 3x². (x⁴)' = 4x³. (x)' = 1.",
        "Soma: (x² + x)' = 2x + 1. Derivam-se separadamente.",
        "Constante × função: (3x²)' = 3·2x = 6x.",
        "Regra do produto: (f·g)' = f'·g + f·g'",
      ]},
      { tipo: "exemplo", titulo: "Exemplo resolvido completo", passos: [
        "Calcular f'(x) de f(x) = 2x³ − 5x + 4.",
        "(2x³)' = 6x²",
        "(−5x)' = −5",
        "(4)' = 0",
        "f'(x) = 6x² − 5",
      ]},
    ],
    exercicios: [
      { nivel: "simples", pergunta: "Qual é a derivada de f(x) = x⁴?",                                                              opcoes: ["x³", "4x³", "4x⁴", "x⁵/5"],                                                   correta: 1, explicacao: "Regra da potência: (x⁴)' = 4·x³. Desce o 4, e o expoente fica 4−1=3." },
      { nivel: "simples", pergunta: "Qual é a derivada de f(x) = 3x² + 2x − 7?",                                                    opcoes: ["6x + 2", "3x + 2", "6x² + 2", "6x − 7"],                                      correta: 0, explicacao: "(3x²)' = 6x. (2x)' = 2. (−7)' = 0. Logo f'(x) = 6x + 2." },
      { nivel: "exame",   pergunta: "Se f(x) = x³ − 3x, então f'(2) vale:",                                                         opcoes: ["6", "9", "2", "3"],                                                            correta: 1, explicacao: "f'(x) = 3x² − 3. Substituir x=2: 3(4)−3 = 12−3 = 9." },
    ],
  },
  {
    id: "func-4", tema: "funcoes", numero: "4", titulo: "Monotonia — máximos e mínimos", duracao: "≈ 9 min",
    blocos: [
      { tipo: "texto", html: "A derivada diz-te se a função está a subir ou a descer. Imagina que és um alpinista: quando estás a subir, a inclinação (derivada) é positiva; quando desces, é negativa; no topo ou no fundo, é zero." },
      { tipo: "chave", html: "f'(x) > 0 → função <b>crescente</b> (a subir)<br>f'(x) < 0 → função <b>decrescente</b> (a descer)<br>f'(x) = 0 → <b>possível máximo ou mínimo</b> (topo ou fundo)" },
      { tipo: "texto", html: "Para encontrar máximos e mínimos: resolves f'(x) = 0 para encontrar os <b>pontos críticos</b>. Depois verificas o sinal de f'(x) antes e depois de cada ponto." },
      { tipo: "exemplo", titulo: "Exemplo resolvido — tabela de sinal", passos: [
        "f(x) = x³ − 3x. Encontrar máximos e mínimos.",
        "f'(x) = 3x² − 3. Igualar a zero: 3x²−3=0 → x²=1 → x=−1 ou x=1.",
        "Tabela de sinal de f'(x):",
        "x < −1: f'(−2)=9>0 → crescente ↑",
        "−1 < x < 1: f'(0)=−3<0 → decrescente ↓",
        "x > 1: f'(2)=9>0 → crescente ↑",
        "Conclusão: x=−1 é máximo local; x=1 é mínimo local.",
      ]},
      { tipo: "chave", html: "Regra prática: se f' muda de + para −, é um <b>máximo</b>. Se muda de − para +, é um <b>mínimo</b>." },
    ],
    exercicios: [
      { nivel: "simples", pergunta: "Se f'(x) < 0 num intervalo, a função nesse intervalo está:",                                    opcoes: ["Crescente", "Decrescente", "Constante", "No máximo"],                         correta: 1, explicacao: "Derivada negativa = função a descer = decrescente. É a definição direta." },
      { nivel: "simples", pergunta: "Para encontrar os máximos e mínimos de f, resolve-se:",                                         opcoes: ["f(x) = 0", "f'(x) = 0", "f''(x) = 0", "f(x) = 1"],                           correta: 1, explicacao: "Os pontos críticos (candidatos a máximos/mínimos) encontram-se resolvendo f'(x) = 0." },
      { nivel: "exame",   pergunta: "f(x) = −x² + 4x. Em que ponto f tem um máximo?",                                               opcoes: ["x=0", "x=2", "x=4", "x=−2"],                                                  correta: 1, explicacao: "f'(x) = −2x+4. Igualar a 0: −2x+4=0 → x=2. f' muda de + para − em x=2 → máximo. f(2) = −4+8 = 4." },
    ],
  },

  // ============================================================
  //  PROBABILIDADES
  // ============================================================
  {
    id: "prob-1", tema: "probabilidades", numero: "1", titulo: "Contagem — o princípio multiplicativo", duracao: "≈ 7 min",
    blocos: [
      { tipo: "texto", html: "Tens 3 t-shirts e 2 calças. Quantas combinações de roupa podes fazer? A resposta é 3×2=6. Isto é o <b>princípio multiplicativo</b>: quando tens de fazer duas escolhas independentes, <b>multiplicas</b> o número de opções de cada uma." },
      { tipo: "chave", html: "Se uma tarefa A pode ser feita de <b>m</b> formas, e uma tarefa B de <b>n</b> formas, ambas juntas podem ser feitas de <b>m × n</b> formas." },
      { tipo: "texto", html: "Este princípio estende-se para 3, 4 ou mais escolhas — continuas sempre a multiplicar. É a base de quase tudo em combinatória." },
      { tipo: "exemplo", titulo: "Exemplo resolvido", passos: [
        "Quantas matrículas de 2 letras + 2 números existem? (ex: AB12)",
        "Letras: 26 opções para a 1.ª, 26 para a 2.ª → 26×26.",
        "Números: 10 opções para o 1.º, 10 para o 2.º → 10×10.",
        "Total: 26 × 26 × 10 × 10 = 67 600.",
      ]},
      { tipo: "chave", html: "<b>Fatorial:</b> n! = n × (n−1) × (n−2) × ... × 1. Exemplo: 4! = 4×3×2×1 = 24. Aparece muito nas fórmulas seguintes." },
    ],
    exercicios: [
      { nivel: "simples", pergunta: "Num restaurante há 4 entradas e 5 pratos. Quantas refeições (1 entrada + 1 prato) diferentes podes fazer?",         opcoes: ["9", "20", "25", "40"],                                                         correta: 1, explicacao: "4 × 5 = 20. Princípio multiplicativo — multiplicas as opções de cada escolha." },
      { nivel: "simples", pergunta: "Quanto vale 5! ?",                                                                                                   opcoes: ["25", "60", "120", "24"],                                                       correta: 2, explicacao: "5! = 5×4×3×2×1 = 120." },
      { nivel: "exame",   pergunta: "Quantas palavras de 3 letras diferentes se podem formar com as letras {A, B, C, D, E}, se a ordem importa?",         opcoes: ["10", "60", "125", "15"],                                                       correta: 1, explicacao: "1.ª letra: 5 opções. 2.ª: 4 (já usámos 1). 3.ª: 3. Total: 5×4×3 = 60. (Arranjo de 5 letras tomadas 3 a 3.)" },
    ],
  },
  {
    id: "prob-2", tema: "probabilidades", numero: "2", titulo: "Combinações — quando a ordem não importa", duracao: "≈ 8 min",
    blocos: [
      { tipo: "texto", html: "Às vezes a ordem importa (senha '123' ≠ '321') — aí usamos <b>arranjos</b>. Outras vezes a ordem não importa (escolher 2 amigos para uma equipa — não há 'primeiro' nem 'segundo') — aí usamos <b>combinações</b>." },
      { tipo: "chave", html: "<b>Combinações</b> (ordem NÃO importa): C(n,p) = n! / (p! × (n−p)!)<br><b>Arranjos</b> (ordem importa): A(n,p) = n! / (n−p)!" },
      { tipo: "texto", html: "Dica para saber qual usar: se trocares a ordem e o resultado for diferente, é arranjo. Se for igual, é combinação. 'Equipa de 3 jogadores' = combinação. 'Pódio (1.º, 2.º, 3.º)' = arranjo." },
      { tipo: "exemplo", titulo: "Exemplo resolvido", passos: [
        "De 10 alunos, quantas equipas de 3 se podem formar?",
        "Ordem não importa (equipa A,B,C = equipa B,C,A). → Combinação.",
        "C(10,3) = 10! / (3! × 7!) = (10×9×8) / (3×2×1) = 720/6 = 120.",
        "Resposta: 120 equipas diferentes.",
      ]},
      { tipo: "texto", html: "Truque de cálculo: em C(n,p), o numerador tem p fatores a partir de n, e o denominador é p!. Exemplo: C(10,3) = (10×9×8)/(3×2×1). Não precisas de calcular o fatorial todo." },
    ],
    exercicios: [
      { nivel: "simples", pergunta: "Quanto vale C(6,2)?",                                                                                                opcoes: ["12", "15", "30", "6"],                                                         correta: 1, explicacao: "C(6,2) = (6×5)/(2×1) = 30/2 = 15." },
      { nivel: "simples", pergunta: "Queres escolher 2 livros de uma estante com 8. A ordem não importa. Quantas formas há?",                             opcoes: ["16", "28", "56", "64"],                                                        correta: 1, explicacao: "C(8,2) = (8×7)/(2×1) = 56/2 = 28." },
      { nivel: "exame",   pergunta: "Uma comissão de 4 pessoas é escolhida de um grupo de 9. Quantas comissões diferentes existem?",                      opcoes: ["126", "3024", "36", "72"],                                                     correta: 0, explicacao: "C(9,4) = (9×8×7×6)/(4×3×2×1) = 3024/24 = 126." },
    ],
  },
  {
    id: "prob-3", tema: "probabilidades", numero: "3", titulo: "Probabilidade — noções básicas", duracao: "≈ 8 min",
    blocos: [
      { tipo: "texto", html: "A probabilidade mede a chance de um evento acontecer. Vai sempre de <b>0</b> (impossível) a <b>1</b> (certo). 0,5 = 50% de hipótese." },
      { tipo: "chave", html: "<b>Regra de Laplace</b> (casos igualmente prováveis): P(A) = número de casos favoráveis / número de casos possíveis" },
      { tipo: "texto", html: "Três fórmulas que aparecem sempre no exame:" },
      { tipo: "chave", html: "Complementar: P(Ā) = 1 − P(A)  → 'a probabilidade de NÃO acontecer'<br>União: P(A∪B) = P(A) + P(B) − P(A∩B)<br>Se A e B são incompatíveis: P(A∪B) = P(A) + P(B)" },
      { tipo: "exemplo", titulo: "Exemplo resolvido", passos: [
        "Num baralho de 52 cartas, qual a probabilidade de tirar um Às?",
        "Casos favoráveis: 4 Àses.",
        "Casos possíveis: 52 cartas.",
        "P(Às) = 4/52 = 1/13 ≈ 0,077 (ou seja, ≈ 7,7%).",
      ]},
    ],
    exercicios: [
      { nivel: "simples", pergunta: "Atira-se um dado de 6 faces. Qual a probabilidade de sair um número par?",                                          opcoes: ["1/6", "1/3", "1/2", "2/3"],                                                   correta: 2, explicacao: "Pares: {2,4,6} → 3 casos favoráveis. Total: 6. P = 3/6 = 1/2." },
      { nivel: "simples", pergunta: "P(A) = 0,3. Qual é P(Ā)?",                                                                                          opcoes: ["0,3", "0,6", "0,7", "1,3"],                                                   correta: 2, explicacao: "Complementar: P(Ā) = 1 − P(A) = 1 − 0,3 = 0,7." },
      { nivel: "exame",   pergunta: "P(A)=0,5, P(B)=0,4, P(A∩B)=0,2. Quanto vale P(A∪B)?",                                                              opcoes: ["0,9", "0,7", "0,6", "1,1"],                                                   correta: 1, explicacao: "P(A∪B) = P(A)+P(B)−P(A∩B) = 0,5+0,4−0,2 = 0,7." },
    ],
  },

  // ============================================================
  //  NÚMEROS COMPLEXOS
  // ============================================================
  {
    id: "comp-1", tema: "complexos", numero: "1", titulo: "Números complexos — forma algébrica", duracao: "≈ 8 min",
    blocos: [
      { tipo: "texto", html: "Já sabes que √4 = 2. Mas quanto é √(−1)? Não existe nos números reais — então os matemáticos inventaram <b>i</b>, definido como: <b>i = √(−1)</b>. Com isto, conseguimos operar com raízes de negativos." },
      { tipo: "chave", html: "Um número complexo na <b>forma algébrica</b>: z = a + bi<br>a = parte real, b = parte imaginária, i = unidade imaginária (i² = −1)" },
      { tipo: "texto", html: "O <b>conjugado</b> de z = a + bi é z̄ = a − bi. Apenas muda o sinal da parte imaginária. É muito útil para divisões." },
      { tipo: "chave", html: "O <b>módulo</b> de z = a + bi é |z| = √(a² + b²). É a 'distância' do complexo à origem — igual a Pitágoras." },
      { tipo: "exemplo", titulo: "Exemplo resolvido", passos: [
        "z = 3 + 4i. Calcular o conjugado e o módulo.",
        "Conjugado: z̄ = 3 − 4i. (Muda o sinal do i.)",
        "Módulo: |z| = √(3² + 4²) = √(9+16) = √25 = 5.",
      ]},
    ],
    exercicios: [
      { nivel: "simples", pergunta: "Qual é o conjugado de z = 2 − 3i?",                                                                                 opcoes: ["2 + 3i", "−2 + 3i", "−2 − 3i", "3 + 2i"],                                    correta: 0, explicacao: "O conjugado muda apenas o sinal da parte imaginária: z̄ = 2 + 3i." },
      { nivel: "simples", pergunta: "Quanto vale i²?",                                                                                                    opcoes: ["1", "i", "−1", "−i"],                                                          correta: 2, explicacao: "Por definição, i = √(−1), logo i² = −1. É a regra mais importante dos complexos." },
      { nivel: "exame",   pergunta: "Qual é o módulo de z = 5 − 12i?",                                                                                   opcoes: ["7", "13", "17", "√119"],                                                       correta: 1, explicacao: "|z| = √(5² + 12²) = √(25+144) = √169 = 13. (Triângulo 5-12-13 — clássico!)" },
    ],
  },
  {
    id: "comp-2", tema: "complexos", numero: "2", titulo: "Operações com números complexos", duracao: "≈ 9 min",
    blocos: [
      { tipo: "chave", html: "Soma/diferença: junta as partes reais por um lado, as imaginárias pelo outro.<br>(a+bi) ± (c+di) = (a±c) + (b±d)i" },
      { tipo: "chave", html: "Multiplicação: como se fossem binómios, lembrando que i² = −1.<br>(a+bi)(c+di) = ac + adi + bci + bdi² = (ac−bd) + (ad+bc)i" },
      { tipo: "exemplo", titulo: "Exemplo — multiplicação", passos: [
        "(2+3i)(1−i)",
        "= 2(1) + 2(−i) + 3i(1) + 3i(−i)",
        "= 2 − 2i + 3i − 3i²",
        "= 2 + i − 3(−1)  [porque i²=−1]",
        "= 5 + i",
      ]},
      { tipo: "chave", html: "Divisão: multiplica numerador e denominador pelo <b>conjugado do denominador</b>. Isso elimina o i do denominador." },
      { tipo: "exemplo", titulo: "Exemplo — divisão", passos: [
        "(1+i) / (2−i)",
        "Conjugado do denominador: (2+i).",
        "= (1+i)(2+i) / (2−i)(2+i)",
        "Numerador: 2+i+2i+i² = 2+3i−1 = 1+3i",
        "Denominador: 4+2i−2i−i² = 4+1 = 5",
        "Resultado: (1+3i)/5 = 1/5 + (3/5)i",
      ]},
    ],
    exercicios: [
      { nivel: "simples", pergunta: "(3+2i) + (1−5i) = ?",                                                                                               opcoes: ["4−3i", "4+7i", "2−3i", "3−3i"],                                               correta: 0, explicacao: "Partes reais: 3+1=4. Partes imaginárias: 2+(−5)=−3. Resultado: 4−3i." },
      { nivel: "simples", pergunta: "(1+i)² = ?",                                                                                                         opcoes: ["1+2i", "2i", "2+2i", "0"],                                                     correta: 1, explicacao: "(1+i)² = 1+2i+i² = 1+2i−1 = 2i." },
      { nivel: "exame",   pergunta: "Qual é a parte real de (2+i)/(1+i)?",                                                                                opcoes: ["1", "3/2", "1/2", "2"],                                                        correta: 1, explicacao: "(2+i)(1−i)/[(1+i)(1−i)] = (2−2i+i−i²)/(1+1) = (3−i)/2. Parte real = 3/2." },
    ],
  },

  // ============================================================
  //  SUCESSÕES
  // ============================================================
  {
    id: "suc-1", tema: "sucessoes", numero: "1", titulo: "Progressão Aritmética", duracao: "≈ 8 min",
    blocos: [
      { tipo: "texto", html: "Uma <b>progressão aritmética (PA)</b> é uma sequência onde cada termo se obtém do anterior somando sempre o mesmo número — a <b>razão r</b>. Exemplo: 2, 5, 8, 11, 14... (r = 3)." },
      { tipo: "chave", html: "Termo geral: <b>aₙ = a₁ + (n−1)r</b><br>Soma dos n primeiros termos: <b>Sₙ = n × (a₁ + aₙ) / 2</b>" },
      { tipo: "texto", html: "A fórmula da soma é a média do primeiro e último termo, vezes o número de termos. Imagina fazer pares: 1.º com último, 2.º com penúltimo — cada par tem sempre a mesma soma." },
      { tipo: "exemplo", titulo: "Exemplo resolvido", passos: [
        "PA: 3, 7, 11, 15, ... (a₁=3, r=4). Qual é o 10.º termo? Qual é a soma dos 10 primeiros?",
        "a₁₀ = 3 + (10−1)×4 = 3 + 36 = 39.",
        "S₁₀ = 10 × (3 + 39) / 2 = 10 × 21 = 210.",
      ]},
    ],
    exercicios: [
      { nivel: "simples", pergunta: "Na PA 1, 4, 7, 10, ... qual é o 5.º termo?",                                                                        opcoes: ["12", "13", "14", "15"],                                                        correta: 1, explicacao: "r=3. a₅ = 1 + (5−1)×3 = 1+12 = 13." },
      { nivel: "simples", pergunta: "Numa PA, a₁=2 e r=5. Qual é a soma dos primeiros 4 termos?",                                                         opcoes: ["38", "40", "36", "32"],                                                        correta: 0, explicacao: "a₄ = 2+(4−1)×5 = 17. S₄ = 4×(2+17)/2 = 4×9.5 = 38." },
      { nivel: "exame",   pergunta: "Numa PA, o 1.º termo é 5 e o 6.º termo é 25. Qual é a razão?",                                                       opcoes: ["4", "5", "3", "6"],                                                            correta: 0, explicacao: "a₆ = a₁ + 5r → 25 = 5 + 5r → 5r = 20 → r = 4." },
    ],
  },
  {
    id: "suc-2", tema: "sucessoes", numero: "2", titulo: "Progressão Geométrica", duracao: "≈ 8 min",
    blocos: [
      { tipo: "texto", html: "Uma <b>progressão geométrica (PG)</b> é uma sequência onde cada termo se obtém do anterior <b>multiplicando</b> sempre pelo mesmo número — a <b>razão q</b>. Exemplo: 2, 6, 18, 54... (q = 3)." },
      { tipo: "chave", html: "Termo geral: <b>aₙ = a₁ × qⁿ⁻¹</b><br>Soma dos n primeiros termos: <b>Sₙ = a₁ × (1 − qⁿ) / (1 − q)</b>, se q ≠ 1" },
      { tipo: "texto", html: "Como distinguir PA de PG? Na PA, a diferença entre termos consecutivos é constante. Na PG, o <b>quociente</b> entre termos consecutivos é constante. Divide dois termos seguidos — se der sempre o mesmo número, é PG." },
      { tipo: "exemplo", titulo: "Exemplo resolvido", passos: [
        "PG: 3, 6, 12, 24, ... (a₁=3, q=2). Qual é o 5.º termo?",
        "a₅ = 3 × 2⁵⁻¹ = 3 × 2⁴ = 3 × 16 = 48.",
        "Soma dos 5 primeiros: S₅ = 3×(1−2⁵)/(1−2) = 3×(1−32)/(−1) = 3×31 = 93.",
      ]},
    ],
    exercicios: [
      { nivel: "simples", pergunta: "Na PG 2, 6, 18, 54, ... qual é o 4.º termo?",                                                                       opcoes: ["54", "108", "162", "72"],                                                      correta: 0, explicacao: "q=3. a₄ = 2 × 3³ = 2 × 27... mas a₄ já é 54 (termos: 2, 6, 18, 54). O 4.º é 54." },
      { nivel: "simples", pergunta: "Numa PG, a₁=5 e q=2. Qual é o 4.º termo?",                                                                           opcoes: ["20", "40", "80", "10"],                                                        correta: 1, explicacao: "a₄ = 5 × 2³ = 5 × 8 = 40." },
      { nivel: "exame",   pergunta: "Numa PG com a₁=4 e a₃=36, qual é a razão q? (q>0)",                                                                  opcoes: ["q=3", "q=9", "q=6", "q=4"],                                                   correta: 0, explicacao: "a₃ = a₁×q² → 36 = 4q² → q² = 9 → q = 3 (pois q>0)." },
    ],
  },

  // ============================================================
  //  TRIGONOMETRIA
  // ============================================================
  {
    id: "trig-1", tema: "trigonometria", numero: "1", titulo: "Razões trigonométricas e fórmulas essenciais", duracao: "≈ 9 min",
    blocos: [
      { tipo: "texto", html: "No exame, a trigonometria aparece sempre ligada a fórmulas — e tens o formulário. O que precisas mesmo de perceber é <b>quando e como usar cada fórmula</b>, não de as decorar." },
      { tipo: "chave", html: "Fórmula fundamental (está SEMPRE no exame): <b>sen²x + cos²x = 1</b><br>Dela derivam: sen²x = 1 − cos²x e cos²x = 1 − sen²x" },
      { tipo: "texto", html: "Os valores notáveis que aparecem com frequência:" },
      { tipo: "exemplo", titulo: "Valores notáveis", passos: [
        "sen(0°) = 0    |  cos(0°) = 1",
        "sen(30°) = 1/2 |  cos(30°) = √3/2",
        "sen(45°) = √2/2|  cos(45°) = √2/2",
        "sen(60°) = √3/2|  cos(60°) = 1/2",
        "sen(90°) = 1   |  cos(90°) = 0",
        "Dica: o sen sobe de 0 para 1; o cos desce de 1 para 0.",
      ]},
      { tipo: "chave", html: "Fórmulas de adição (no formulário, mas bom conhecer):<br>sen(a+b) = sen a · cos b + cos a · sen b<br>cos(a+b) = cos a · cos b − sen a · sen b" },
    ],
    exercicios: [
      { nivel: "simples", pergunta: "Se sen(x) = 0,6, quanto vale sen²(x) + cos²(x)?",                                                                  opcoes: ["0,36", "0,64", "1", "Depende de x"],                                          correta: 2, explicacao: "A fórmula fundamental diz que sen²x + cos²x = 1, SEMPRE, para qualquer x." },
      { nivel: "simples", pergunta: "Qual é o valor de cos(60°)?",                                                                                        opcoes: ["√3/2", "1/2", "√2/2", "1"],                                                   correta: 1, explicacao: "cos(60°) = 1/2. É um dos valores notáveis essenciais." },
      { nivel: "exame",   pergunta: "Se cos(x) = 3/5 e x está no 1.º quadrante, qual é sen(x)?",                                                         opcoes: ["4/5", "3/4", "√34/5", "2/5"],                                                 correta: 0, explicacao: "sen²x = 1 − cos²x = 1 − 9/25 = 16/25 → sen(x) = 4/5 (positivo no 1.º quadrante)." },
    ],
  },
];
