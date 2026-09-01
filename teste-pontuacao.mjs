// Conferência da pontuação. Roda com `npm test` e também no CI, antes de
// publicar. Se falhar, o deploy para.
//
// Força bruta sobre todas as combinações possíveis de resposta, mais a
// verificação do desempate em três níveis.

import { questions, perfilApontadoPor, AVISO } from './src/data/questions.js'
import { results, blocoFinal } from './src/data/results.js'
import { calculateResult, calculateScores, PERFIS } from './src/lib/quizScoring.js'

let falhas = 0
function conferir(ok, msg) {
  if (!ok) { console.error('  FALHOU:', msg); falhas++ }
}

// ─── Cada alternativa alimenta exatamente um perfil ─────────────────────────
// É o desenho deste quiz: não existe alternativa melhor, existe alternativa que
// descreve de onde vem o incômodo. Se alguma alimentar dois perfis, o desempate
// pela pergunta 8 deixa de funcionar.

console.log('desenho das alternativas')
questions.forEach((q) => {
  conferir(q.options.length === 4, `pergunta ${q.id} não tem 4 alternativas`)
  q.options.forEach((o) => {
    const perfis = Object.keys(o.scores)
    conferir(perfis.length === 1, `pergunta ${q.id}, alternativa ${o.id} alimenta ${perfis.length} perfis`)
    conferir(PERFIS.includes(perfis[0]), `pergunta ${q.id}, alternativa ${o.id} aponta perfil desconhecido`)
  })
  const cobertos = new Set(q.options.map((o) => Object.keys(o.scores)[0]))
  conferir(cobertos.size === 4, `pergunta ${q.id} não cobre os quatro perfis`)
})
console.log(`  ${questions.length} perguntas, 4 alternativas cada, cada uma apontando um perfil`)

// ─── Teto de cada perfil ────────────────────────────────────────────────────

console.log('\nteto de cada perfil')
const teto = {}
PERFIS.forEach((p) => {
  teto[p] = questions.reduce((s, q) => {
    const o = q.options.find((x) => Object.keys(x.scores)[0] === p)
    return s + (o ? Object.values(o.scores)[0] : 0)
  }, 0)
  console.log(`  ${p}: ${teto[p]} · ${results[p].nome}`)
})

// ─── Força bruta ────────────────────────────────────────────────────────────

const porPerfil = {}
let combos = 0
let semPerfil = 0
let empatesResolvidos = 0
let caiuNaPrioridade = 0

function anda(i, acc) {
  if (i === questions.length) {
    combos++
    const { perfil, scores } = calculateResult(acc)
    if (!results[perfil]) { semPerfil++; return }
    porPerfil[perfil] = (porPerfil[perfil] || 0) + 1

    const maior = Math.max(...PERFIS.map((p) => scores[p]))
    const empatados = PERFIS.filter((p) => scores[p] === maior)

    if (empatados.length > 1) {
      empatesResolvidos++
      // O vencedor tem que estar entre os empatados, sempre.
      conferir(empatados.includes(perfil), 'o desempate escolheu um perfil que não estava empatado')

      // Se a pergunta 8 aponta um dos empatados, ela tem que decidir.
      const p8 = perfilApontadoPor(8, acc[8])
      if (p8 && empatados.includes(p8)) {
        conferir(perfil === p8, 'a pergunta 8 apontava um empatado e não decidiu')
      } else {
        const p7 = perfilApontadoPor(7, acc[7])
        if (p7 && empatados.includes(p7)) {
          conferir(perfil === p7, 'a pergunta 7 apontava um empatado e não decidiu')
        } else {
          caiuNaPrioridade++
        }
      }
    }
    return
  }
  for (const o of questions[i].options) anda(i + 1, { ...acc, [questions[i].id]: o.id })
}
anda(0, {})

console.log('\nforça bruta')
console.log('  combinações testadas:  ', combos)
console.log('  sem perfil válido:     ', semPerfil)
console.log('  empates que precisaram de desempate:', empatesResolvidos,
            `(${(empatesResolvidos / combos * 100).toFixed(1)}%)`)
console.log('  que chegaram na prioridade técnica: ', caiuNaPrioridade,
            `(${(caiuNaPrioridade / combos * 100).toFixed(2)}%)`)
conferir(combos === Math.pow(4, questions.length), 'o número de combinações não bate')
conferir(semPerfil === 0, 'alguma combinação não caiu em perfil nenhum')

console.log('\ndistribuição')
PERFIS.forEach((p) => {
  const n = porPerfil[p] || 0
  console.log(`  ${String(n).padStart(6)}  ${(n / combos * 100).toFixed(1).padStart(5)}%  ${results[p].nome}`)
  conferir(n > 0, `o ${p} é inalcançável`)
})

// ─── Extremos ───────────────────────────────────────────────────────────────

console.log('\nextremos')
const letraDoPerfil = (p) => questions[0].options.find((o) => Object.keys(o.scores)[0] === p).id
PERFIS.forEach((p) => {
  const letra = letraDoPerfil(p)
  const resp = Object.fromEntries(questions.map((q) => {
    const o = q.options.find((x) => Object.keys(x.scores)[0] === p)
    return [q.id, o.id]
  }))
  const { perfil } = calculateResult(resp)
  console.log(`  tudo ${letra}: ${results[perfil].nome}`)
  conferir(perfil === p, `responder sempre na linha de ${p} deveria dar ${p}`)
})

// ─── Conteúdo ───────────────────────────────────────────────────────────────

console.log('\nconteúdo')

// A regra conceitual mais importante do quiz: ele não decide pela pessoa.
//
// Procurar só por "você deve sair" dá falso positivo, porque o texto usa a
// construção negada de propósito, em "não serve para dizer se você deve ficar
// ou sair". Então só conta como falha quando a frase NÃO vem negada.
const PROIBIDAS = [
  /seu resultado (mostra|confirma) que/i,
  /você (definitivamente )?deveria mudar de carreira/i,
  /escolheu a profissão errada/i,
  /está na hora de pedir demissão/i,
  /você não combina mais com sua profissão/i,
  /seu perfil indica que (você )?deveria trabalhar com/i,
  /(profissões|carreiras) ideais para você/i,
  // Os quatro perfis são camadas, não níveis. Nenhum texto pode ranqueá-los.
  /perfil (mais|menos) (grave|maduro|avançado)/i,
  /n[íi]vel \d de 4/i,
]

function decidePelaPessoa(texto) {
  for (const re of PROIBIDAS) {
    if (re.test(texto)) return re.source
  }
  const re = /você deve (mudar de profissão|pedir demissão|continuar|permanecer|ficar|sair|largar)/gi
  let m
  while ((m = re.exec(texto)) !== null) {
    const antes = texto.slice(Math.max(0, m.index - 60), m.index)
    if (!/\b(não|nunca|jamais)\b/i.test(antes)) return m[0]
  }
  return null
}

PERFIS.forEach((p) => {
  const r = results[p]
  conferir(!!r.nome && !!r.headline && !!r.destaque && !!r.cta, `${p} está com campo vazio`)
  conferir(r.secoes.length > 0, `${p} está sem seção`)
  const frase = decidePelaPessoa(JSON.stringify(r))
  conferir(!frase, `${p} contém uma frase que decide pela pessoa: ${frase}`)
  console.log(`  ${p}: ${r.secoes.length} seções`)
})

// O bloco final e o aviso também passam pela mesma régua.
;[['bloco final', blocoFinal], ['aviso', { AVISO }]].forEach(([nome, obj]) => {
  const frase = decidePelaPessoa(JSON.stringify(obj))
  conferir(!frase, `o ${nome} contém uma frase que decide pela pessoa: ${frase}`)
})
console.log('  bloco final e aviso: nenhuma frase decide pela pessoa')

if (falhas) { console.error(`\n${falhas} falha(s)`); process.exit(1) }
console.log('\nok')
