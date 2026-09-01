import { blocoFinal } from '../data/results'

// Bloco que fecha todos os perfis, igual. A tese do quiz mora aqui: mudar de
// profissão é só uma das camadas possíveis de mudança.
export default function FinalCTA({ onWhatsApp }) {
  return (
    <section className="cartao" style={{ padding: '30px 24px' }}>
      <h2 style={{ fontSize: 'clamp(1.3rem, 5.2vw, 1.6rem)', marginBottom: 16 }}>
        {blocoFinal.titulo}
      </h2>

      <p className="leitura" style={{
        fontSize: 15.5, color: 'var(--tinta-media)', lineHeight: 1.72, marginBottom: 14,
      }}>
        {blocoFinal.abertura}
      </p>

      <div className="camadas" style={{ marginBottom: 18 }}>
        {blocoFinal.lista.map((it, i) => (
          <div key={i} className="camada">{it}</div>
        ))}
      </div>

      <p className="leitura" style={{
        fontSize: 15.5, color: 'var(--tinta-media)', lineHeight: 1.72, marginBottom: 20,
      }}>
        {blocoFinal.meio}
      </p>

      {/* Os dois extremos que o quiz recusa. Desenhados lado a lado porque o
          texto diz que nenhum dos dois serve como resposta automática. */}
      <p className="leitura" style={{
        fontSize: 15.5, color: 'var(--tinta-media)', lineHeight: 1.72, marginBottom: 10,
      }}>
        {blocoFinal.contraste.intro}
      </p>
      <div className="extremos">
        <span className="extremo">&ldquo;{blocoFinal.contraste.umLado}&rdquo;</span>
      </div>
      <p className="leitura" style={{
        fontSize: 15.5, color: 'var(--tinta-media)', lineHeight: 1.72, marginBottom: 10,
      }}>
        {blocoFinal.contraste.conector}
      </p>
      <div className="extremos">
        <span className="extremo">&ldquo;{blocoFinal.contraste.outroLado}&rdquo;</span>
      </div>

      <div style={{
        background: 'var(--verde)', borderRadius: 12,
        padding: '22px 20px', margin: '8px 0 18px',
      }}>
        <p className="serif" style={{
          fontSize: 'clamp(1.05rem, 4.3vw, 1.2rem)',
          fontWeight: 600, lineHeight: 1.5, color: '#fff',
        }}>
          {blocoFinal.destaque}
        </p>
      </div>

      <button type="button" className="botao botao-whats" onClick={onWhatsApp}>
        {blocoFinal.cta}
        <span aria-hidden="true">→</span>
      </button>
    </section>
  )
}
