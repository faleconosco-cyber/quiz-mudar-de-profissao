// Pontuação por perfil e desempate.
//
// Função pura, sem contador incremental. Os quatro perfis são sempre
// recalculados do zero a partir das respostas guardadas, e é isso que faz o
// botão "voltar" funcionar sem bug: trocar uma alternativa não precisa
// subtrair peso antigo, porque nada foi acumulado.

import { questions, perfilApontadoPor } from '../data/questions'

export const PERFIS = ['profile1', 'profile2', 'profile3', 'profile4']

function zerado() {
  return { profile1: 0, profile2: 0, profile3: 0, profile4: 0 }
}

// answers: { [questionId]: optionId }
export function calculateScores(answers) {
  const scores = zerado()

  Object.entries(answers).forEach(([questionId, optionId]) => {
    const question = questions.find((q) => String(q.id) === String(questionId))
    if (!question) return

    const option = question.options.find((o) => o.id === optionId)
    if (!option || !option.scores) return

    Object.entries(option.scores).forEach(([perfil, valor]) => {
      if (perfil in scores) scores[perfil] += valor
    })
  })

  return scores
}

// Último recurso, e a pessoa nunca sabe que ele existe. Vem depois das duas
// perguntas de desempate porque é arbitrário: só evita que o quiz fique sem
// resposta num empate perfeito.
const PRIORIDADE = ['profile4', 'profile3', 'profile2', 'profile1']

// Perguntas em que a própria pessoa aponta um perfil. A 8 vem primeiro porque
// nela ela diz o que gostaria de investigar, que é exatamente o que o
// resultado devolve.
const DESEMPATE = [8, 7]

export function calculateResult(answers) {
  const scores = calculateScores(answers)
  const maior = Math.max(...PERFIS.map((p) => scores[p]))
  const empatados = PERFIS.filter((p) => scores[p] === maior)

  if (empatados.length === 1) {
    return { perfil: empatados[0], scores }
  }

  for (const questionId of DESEMPATE) {
    const apontado = perfilApontadoPor(questionId, answers[questionId])
    if (apontado && empatados.includes(apontado)) {
      return { perfil: apontado, scores }
    }
  }

  return { perfil: PRIORIDADE.find((p) => empatados.includes(p)), scores }
}

// Detalhe de cada resposta, para viajar no payload junto do lead.
export function respostasDetalhadas(answers) {
  return questions.map((q) => {
    const o = q.options.find((x) => x.id === answers[q.id])
    return {
      pergunta: q.id,
      alternativa: answers[q.id] || null,
      perfil: o ? Object.keys(o.scores)[0] : null,
      valor: o ? Object.values(o.scores)[0] : null,
    }
  })
}
