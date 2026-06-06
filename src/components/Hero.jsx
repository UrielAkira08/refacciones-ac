export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content fade-up">
            <div className="hero-badge" aria-label="Categoría">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10"/>
              </svg>
              Especialistas en Servicio Pesado
            </div>
            <h1>
              Refacciones AC para<br />
              <span>Transporte y Maquinaria</span><br />
              Pesada
            </h1>
            <p className="hero-desc">
              Distribuidores especializados en sistemas de aire acondicionado automotriz para
              camiones, autobuses, tractocamiones y maquinaria de construcción.
              Calidad OEM y aftermarket con garantía.
            </p>
            <div className="hero-actions">
              <a href="#productos" className="btn btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10H7M21 6H3M21 14H3M21 18H7"/>
                </svg>
                Ver Catálogo
              </a>
              <a href="#contacto" className="btn btn-outline">Solicitar Cotización</a>
            </div>

            <div className="hero-stats" style={{ marginTop: '2.5rem' }}>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">SKUs en stock</span>
              </div>
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Años exp.</span>
              </div>
              <div className="stat">
                <span className="stat-number">24h</span>
                <span className="stat-label">Entrega local</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-card-stack">
              <div className="hcard hcard-back1" />
              <div className="hcard hcard-back2" />
              <div className="hcard hcard-main">
                <div className="hcard-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07"/>
                    <path d="M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07"/>
                    <path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>
                  </svg>
                </div>
                <span className="hcard-title">Compresor Sanden</span>
                <span className="hcard-sub">508 / 510 / SD7H15</span>
                <div style={{ marginTop: '0.5rem', display: 'flex', gap: '0.35rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <span className="brand-tag">OEM</span>
                  <span className="brand-tag">Aftermarket</span>
                  <span className="brand-tag">Garantía</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
