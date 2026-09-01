// Monta os blocos tipados de um resultado.
//
// Separado da tela para qualquer perfil ser desenhado sem a tela saber qual é,
// e para acrescentar um tipo de bloco novo sem mexer no resto.

function Paragrafo({ children }) {
  return (
    <p className="leitura" style={{
      fontSize: 15.5, color: 'var(--tinta-media)',
      lineHeight: 1.72, marginBottom: 14,
    }}>
      {children}
    </p>
  )
}

// Frases que a própria pessoa diria, ou perguntas que ela deveria se fazer.
// Ganham voz própria para não se confundirem com o texto que fala com ela.
function Falas({ itens }) {
  return (
    <div style={{
      borderLeft: '2px solid var(--creme)',
      paddingLeft: 16, margin: '0 0 18px',
    }}>
      {itens.map((f, i) => (
        <p key={i} className="serif" style={{
          fontSize: 15.5, fontStyle: 'italic', fontWeight: 600,
          color: 'var(--verde)', lineHeight: 1.5, marginBottom: 7,
        }}>
          &ldquo;{f}&rdquo;
        </p>
      ))}
    </div>
  )
}

function Lista({ itens }) {
  return (
    <ul style={{ listStyle: 'none', margin: '0 0 18px', maxWidth: 'var(--leitura)' }}>
      {itens.map((it, i) => (
        <li key={i} style={{
          position: 'relative', paddingLeft: 20, marginBottom: 8,
          fontSize: 15, color: 'var(--tinta-media)', lineHeight: 1.6,
        }}>
          <span aria-hidden="true" style={{
            position: 'absolute', left: 2, top: 10,
            width: 6, height: 6, borderRadius: '50%', background: 'var(--coral)',
          }} />
          {it}
        </li>
      ))}
    </ul>
  )
}

export default function ResultSection({ blocos }) {
  return blocos.map((b, i) => {
    if (b.tipo === 'p') return <Paragrafo key={i}>{b.texto}</Paragrafo>
    if (b.tipo === 'falas') return <Falas key={i} itens={b.itens} />
    return <Lista key={i} itens={b.itens} />
  })
}
