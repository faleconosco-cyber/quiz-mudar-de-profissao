// As oito perguntas.
//
// Cada alternativa alimenta exatamente um perfil, e os quatro perfis não são
// níveis: são camadas diferentes de mudança profissional. A alternativa D não é
// "mais grave" que a A, é outra hipótese sobre de onde vem a insatisfação.
//
// A ordem interna é sempre a mesma (contexto, forma de trabalhar, critérios,
// direção), mas isso nunca aparece na tela.

export const CAPTURA_APOS = 3

export const questions = [
  {
    id: 1,
    title: 'Quando você pensa "não quero mais trabalhar com isso", o que mais pesa?',
    options: [
      { id: 'A', text: 'O ambiente, a pressão, a liderança ou a rotina do meu trabalho atual.', scores: { profile1: 3 } },
      { id: 'B', text: 'A maneira como minha profissão ocupa minha vida hoje.', scores: { profile2: 3 } },
      { id: 'C', text: 'Sinto que o trabalho que faço já não combina tanto com quem me tornei.', scores: { profile3: 3 } },
      { id: 'D', text: 'Tenho vontade de trabalhar com coisas realmente diferentes do que faço hoje.', scores: { profile4: 3 } },
    ],
  },
  {
    id: 2,
    title: 'Se você pudesse mudar completamente de empresa amanhã, mantendo sua profissão, como se sentiria?',
    options: [
      { id: 'A', text: 'Bastante aliviado(a). Talvez isso resolvesse boa parte da minha insatisfação.', scores: { profile1: 3 } },
      { id: 'B', text: 'Ajudaria, mas eu também precisaria mudar bastante minha rotina ou forma de trabalhar.', scores: { profile2: 3 } },
      { id: 'C', text: 'Não sei se seria suficiente. Continuaria questionando o sentido do que faço.', scores: { profile3: 3 } },
      { id: 'D', text: 'Acho que pouco mudaria. Minha vontade é experimentar outro caminho profissional.', scores: { profile4: 3 } },
    ],
  },
  {
    id: 3,
    title: 'O que aconteceu com seu interesse pela sua profissão ao longo do tempo?',
    options: [
      { id: 'A', text: 'Ainda existe. O problema é que meu trabalho atual tem me desgastado muito.', scores: { profile1: 3 } },
      { id: 'B', text: 'Ainda gosto de partes importantes, mas não quero continuar vivendo a profissão desta maneira.', scores: { profile2: 3 } },
      { id: 'C', text: 'O que fazia sentido para mim antes parece ter perdido importância.', scores: { profile3: 3 } },
      { id: 'D', text: 'Tenho me interessado cada vez mais por assuntos e possibilidades fora da minha área.', scores: { profile4: 3 } },
    ],
  },
  {
    id: 4,
    title: 'Imagine que você pudesse redesenhar seu trabalho atual. O que mudaria primeiro?',
    options: [
      { id: 'A', text: 'Empresa, liderança, equipe, salário ou condições de trabalho.', scores: { profile1: 3 } },
      { id: 'B', text: 'Horários, autonomia, ritmo, tipo de projeto ou forma de exercer minha profissão.', scores: { profile2: 3 } },
      { id: 'C', text: 'O tipo de problema que resolvo e aquilo que meu trabalho representa para mim.', scores: { profile3: 3 } },
      { id: 'D', text: 'O próprio campo em que atuo. Gostaria de experimentar algo diferente.', scores: { profile4: 3 } },
    ],
  },
  {
    id: 5,
    title: 'Quando você imagina continuar na mesma profissão pelos próximos anos...',
    options: [
      { id: 'A', text: 'Consigo imaginar, desde que seja em um contexto profissional melhor.', scores: { profile1: 3 } },
      { id: 'B', text: 'Consigo imaginar, mas não trabalhando do jeito que trabalho hoje.', scores: { profile2: 3 } },
      { id: 'C', text: 'Tenho dificuldade porque já não sei se esse caminho conversa com minhas prioridades atuais.', scores: { profile3: 3 } },
      { id: 'D', text: 'A ideia me incomoda. Tenho vontade de construir uma trajetória em outra direção.', scores: { profile4: 3 } },
    ],
  },
  {
    id: 6,
    title: 'O que você já fez para entender sua insatisfação?',
    options: [
      { id: 'A', text: 'Pensei principalmente em trocar de emprego ou empresa.', scores: { profile1: 3 } },
      { id: 'B', text: 'Já imaginei outras funções, formatos ou maneiras de atuar dentro da minha área.', scores: { profile2: 3 } },
      { id: 'C', text: 'Tenho refletido sobre o que quero da minha vida e percebo que minhas prioridades mudaram.', scores: { profile3: 3 } },
      { id: 'D', text: 'Já comecei a pesquisar outras áreas, cursos ou possibilidades profissionais.', scores: { profile4: 3 } },
    ],
  },
  {
    // Segundo critério de desempate. O peso maior no D vem da spec: o medo de
    // perder o que construiu é o que mais segura quem já quer outra direção.
    id: 7,
    title: 'O que mais dificulta uma decisão sobre sua carreira hoje?',
    options: [
      { id: 'A', text: 'Não sei se estou confundindo uma experiência ruim de trabalho com uma profissão ruim para mim.', scores: { profile1: 3 } },
      { id: 'B', text: 'Não sei que outras maneiras existem de exercer minha profissão.', scores: { profile2: 3 } },
      { id: 'C', text: 'Sei que mudei, mas ainda não consegui transformar isso em novos critérios profissionais.', scores: { profile3: 3 } },
      { id: 'D', text: 'Tenho medo de perder o que construí e começar de novo em outra direção.', scores: { profile4: 4 } },
    ],
  },
  {
    // A pergunta em que a própria pessoa aponta a camada, ao dizer o que
    // gostaria de descobrir primeiro. Por isso vale 4 em todas e é o primeiro
    // critério de desempate.
    id: 8,
    title: 'Se você não precisasse decidir agora se "fica ou muda de profissão", o que gostaria de descobrir primeiro?',
    options: [
      { id: 'A', text: 'Se eu estaria melhor exercendo minha profissão em outro contexto.', scores: { profile1: 4 } },
      { id: 'B', text: 'De quantas outras formas eu poderia usar minha experiência e competências sem abandonar necessariamente minha área.', scores: { profile2: 4 } },
      { id: 'C', text: 'O que faz sentido para mim profissionalmente hoje, e não apenas o que fazia quando comecei.', scores: { profile3: 4 } },
      { id: 'D', text: 'Quais novos caminhos poderiam aproveitar o que já construí e, ao mesmo tempo, me levar para outra direção.', scores: { profile4: 4 } },
    ],
  },
]

// Qual perfil cada alternativa aponta. Derivado dos próprios pesos, para não
// existir duas fontes de verdade.
export function perfilApontadoPor(questionId, optionId) {
  const q = questions.find((x) => x.id === questionId)
  if (!q) return null
  const o = q.options.find((x) => x.id === optionId)
  if (!o) return null
  const chaves = Object.keys(o.scores)
  return chaves.length === 1 ? chaves[0] : null
}

export const landing = {
  titulo: 'Quero mesmo mudar de profissão?',
  paragrafos: [
    'Você sabe que alguma coisa na sua vida profissional não está funcionando como antes.',
  ],
  destaque: 'Mas será que o problema é a profissão? Ou a forma como você está vivendo o trabalho hoje?',
  fecho: 'Responda 8 perguntas rápidas e entenda o que pode estar por trás da sua insatisfação profissional neste momento.',
  botao: 'Entender minha insatisfação',
  microtexto: 'Leva cerca de 3 minutos.',
}

// As quatro camadas de mudança, desenhadas na abertura. Elas ensinam a premissa
// do quiz antes da primeira pergunta: mudar de profissão é só uma delas.
export const camadas = [
  'O contexto onde você trabalha',
  'A forma como você trabalha',
  'Os critérios que mudaram em você',
  'A direção da sua carreira',
]

export const captura = {
  titulo: 'Sua insatisfação já está começando a ganhar contorno.',
  paragrafos: [
    'Nem toda vontade de mudar significa que você precisa abandonar sua profissão.',
    'Faltam 5 perguntas para identificar qual mudança parece estar pedindo mais atenção agora.',
  ],
  consentimento: 'Concordo em receber meu resultado e conteúdos relacionados à carreira e reorientação profissional.',
  botao: 'Continuar',
  microtexto: 'Seus dados serão utilizados para enviar informações relacionadas ao resultado deste quiz. Você poderá sair da lista quando quiser.',
}

export const processamento = {
  frases: [
    'Organizando suas respostas...',
    'Separando profissão, contexto e forma de trabalhar...',
    'Observando o que mudou nas suas prioridades...',
    'Identificando qual mudança merece mais atenção...',
  ],
  fim: 'Seu resultado está pronto.',
}

export const AVISO =
  'Este quiz é uma ferramenta de reflexão e não determina se você deve pedir demissão, permanecer no emprego ou mudar de profissão. Decisões profissionais envolvem aspectos pessoais, financeiros e contextuais que precisam ser considerados com mais profundidade.'
