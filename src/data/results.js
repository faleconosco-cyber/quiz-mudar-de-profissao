// As quatro camadas de mudança.
//
// NÃO são níveis. O perfil 4 não é mais grave nem mais maduro que o perfil 1:
// são hipóteses diferentes sobre de onde vem a insatisfação. Nada no texto, na
// ordem ou no visual pode sugerir escada.
//
// Nenhum deles diz para pedir demissão, para ficar ou para mudar de profissão,
// e nenhum recomenda profissão específica.

export const results = {
  profile1: {
    id: 'profile1',
    chave: 'contexto_de_trabalho',
    nome: 'Talvez o problema não seja a profissão',
    headline: 'Sua insatisfação parece estar bastante ligada ao contexto em que você trabalha hoje.',
    corpo: [
      {
        tipo: 'p',
        texto:
          'Pressão, liderança, relações, falta de reconhecimento, condições de trabalho ou uma rotina desgastante podem fazer uma profissão inteira parecer errada.',
      },
    ],
    secoes: [
      {
        titulo: 'O que merece investigação',
        corpo: [
          { tipo: 'p', texto: 'Experimente separar:' },
          { tipo: 'falas', itens: ['Não quero mais fazer isso.', 'Não quero mais fazer isso desse jeito e nesse lugar.'] },
          {
            tipo: 'p',
            texto:
              'Se você ainda reconhece interesse no que faz, talvez sua primeira mudança não precise ser de profissão.',
          },
        ],
      },
      {
        titulo: 'Seu próximo passo',
        corpo: [
          {
            tipo: 'p',
            texto:
              'Investigar quais condições estão produzindo sua insatisfação e quais delas poderiam mudar em outro contexto profissional.',
          },
        ],
      },
    ],
    destaque:
      'Talvez você não precise abandonar sua trajetória. Talvez precise descobrir onde e como ela ainda poderia funcionar para você.',
    cta: 'Quero entender melhor minha insatisfação',
  },

  profile2: {
    id: 'profile2',
    chave: 'forma_de_trabalhar',
    nome: 'Seu jeito de trabalhar está pedindo mudança',
    headline: 'Você ainda parece reconhecer valor em partes importantes da sua profissão.',
    corpo: [
      { tipo: 'p', texto: 'O problema pode estar menos em:' },
      { tipo: 'falas', itens: ['o que faço'] },
      { tipo: 'p', texto: 'e mais em:' },
      { tipo: 'falas', itens: ['como estou fazendo'] },
      {
        tipo: 'p',
        texto:
          'Rotina, autonomia, tipo de projeto, público, vínculo de trabalho, especialidade ou ritmo podem ter deixado de combinar com você.',
      },
    ],
    secoes: [
      {
        titulo: 'O que merece investigação',
        corpo: [
          { tipo: 'p', texto: 'Uma profissão não precisa ser vivida de uma única maneira.' },
          { tipo: 'p', texto: 'Antes de abandonar sua área, vale descobrir:' },
          { tipo: 'falas', itens: ['Que outras formas existem de usar o que eu já sei?'] },
        ],
      },
      {
        titulo: 'Seu próximo passo',
        corpo: [
          { tipo: 'p', texto: 'Explorar funções, ambientes, especialidades e formatos de trabalho diferentes.' },
          {
            tipo: 'p',
            texto:
              'Pode existir mais espaço de movimento dentro da sua própria trajetória do que você consegue enxergar hoje.',
          },
        ],
      },
    ],
    destaque: 'Mudar a vida profissional nem sempre exige mudar de profissão.',
    cta: 'Quero descobrir outras possibilidades',
  },

  profile3: {
    id: 'profile3',
    chave: 'novos_criterios',
    nome: 'Sua carreira perdeu conexão com você',
    headline:
      'O que fazia sentido profissionalmente antes talvez já não represente tão bem quem você é hoje.',
    corpo: [
      { tipo: 'lista', itens: ['Prioridades mudam.', 'Valores mudam.', 'Interesses mudam.', 'A vida fora do trabalho também muda.'] },
      { tipo: 'p', texto: 'Uma escolha profissional feita anos atrás não precisa permanecer congelada.' },
    ],
    secoes: [
      {
        titulo: 'O que merece investigação',
        corpo: [
          { tipo: 'p', texto: 'Antes de perguntar:' },
          { tipo: 'falas', itens: ['Qual profissão eu deveria fazer agora?'] },
          { tipo: 'p', texto: 'vale perguntar:' },
          { tipo: 'falas', itens: ['O que eu espero do trabalho nesta fase da minha vida?'] },
        ],
      },
      {
        titulo: 'Seu próximo passo',
        corpo: [
          { tipo: 'p', texto: 'Revisitar seus interesses, valores, competências, limites e prioridades atuais.' },
          {
            tipo: 'p',
            texto:
              'Depois disso, investigar se existe espaço para essa nova versão de você dentro da trajetória atual, ou se outros caminhos fazem mais sentido.',
          },
        ],
      },
    ],
    destaque: 'Talvez você ainda não precise de uma nova profissão. Precisa primeiro de novos critérios.',
    cta: 'Quero redescobrir meus critérios',
  },

  profile4: {
    id: 'profile4',
    chave: 'nova_direcao',
    nome: 'Uma mudança de direção merece ser explorada',
    headline:
      'Sua vontade de mudança parece ir além de uma semana ruim ou de um problema pontual no trabalho.',
    corpo: [
      { tipo: 'p', texto: 'Outros assuntos, áreas ou formas de trabalhar começam a chamar sua atenção.' },
      { tipo: 'p', texto: 'Isso não significa que você precise abandonar tudo agora.' },
      { tipo: 'p', texto: 'Significa que essa vontade merece investigação real.' },
    ],
    secoes: [
      {
        titulo: 'O que merece investigação',
        corpo: [
          { tipo: 'p', texto: 'Em vez de começar por:' },
          { tipo: 'falas', itens: ['Como largo tudo e começo do zero?'] },
          { tipo: 'p', texto: 'experimente:' },
          {
            tipo: 'falas',
            itens: [
              'Para onde quero me mover?',
              'O que quero encontrar lá que não encontro aqui?',
              'O que da minha trajetória atual pode continuar comigo?',
            ],
          },
        ],
      },
      {
        titulo: 'Seu próximo passo',
        corpo: [
          {
            tipo: 'p',
            texto:
              'Explorar novos campos, conversar com profissionais, pesquisar possibilidades e identificar competências transferíveis antes de construir uma transição.',
          },
        ],
      },
    ],
    destaque:
      'Uma mudança de carreira não precisa apagar sua história. O próximo caminho pode ser construído usando partes importantes do que você já viveu.',
    cta: 'Quero explorar uma nova direção',
  },
}

// Fecha todos os perfis, igual.
export const blocoFinal = {
  titulo: 'Mudar de profissão é apenas uma das formas de mudar sua vida profissional.',
  abertura: 'Às vezes, a mudança necessária é de:',
  lista: ['empresa', 'função', 'ambiente', 'especialidade', 'rotina', 'forma de trabalhar'],
  meio: 'Em outros momentos, o que realmente começa a fazer sentido é construir uma nova direção profissional.',
  contraste: {
    intro: 'A questão é não transformar toda insatisfação em:',
    umLado: 'Preciso jogar tudo para o alto.',
    conector: 'Nem transformar todo medo em:',
    outroLado: 'Melhor continuar exatamente onde estou.',
  },
  destaque:
    'Reorientação Profissional ajuda você a entender que mudança está pedindo espaço, e como construí-la.',
  cta: 'Quero entender meu próximo movimento',
}

// Texto corrido do resultado, para viajar no payload e alimentar o primeiro
// e-mail da sequência. A tela monta o mesmo conteúdo em blocos.
export function textoDoResultado(r) {
  const linhas = [r.headline]

  function despejar(blocos) {
    blocos.forEach((b) => {
      if (b.tipo === 'p') linhas.push(b.texto)
      else b.itens.forEach((i) => linhas.push(`- ${i}`))
    })
  }

  despejar(r.corpo)
  r.secoes.forEach((s) => {
    linhas.push(s.titulo)
    despejar(s.corpo)
  })
  linhas.push(r.destaque)

  return linhas.join('\n\n')
}
