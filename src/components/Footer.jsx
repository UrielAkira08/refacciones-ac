export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#inicio" className="nav-brand">
              <div className="nav-logo-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07"/>
                  <path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>
                </svg>
              </div>
              <div className="nav-brand-text">
                <span className="nav-brand-name">RefaccionesAC Pro</span>
                <span className="nav-brand-tag">Servicio Pesado</span>
              </div>
            </a>
            <p>Especialistas en refacciones para sistemas de aire acondicionado automotriz de servicio pesado. Calidad y disponibilidad que tu operación necesita.</p>
          </div>

          <div className="footer-col">
            <h4>Productos</h4>
            <ul>
              {['Compresores', 'Condensadores', 'Evaporadores', 'Filtros y Válvulas', 'Mangueras'].map(item => (
                <li key={item}><a href="#productos">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#nosotros">Quiénes somos</a></li>
              <li><a href="carta.html">Carta de Presentación</a></li>
              <li><a href="#contacto">Contacto</a></li>
              <li><a href="#contacto">Programa de crédito</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contacto Rápido</h4>
            <ul>
              <li><a href="tel:+521234567890">+52 (123) 456-7890</a></li>
              <li><a href="mailto:ventas@refaccionesacpro.mx">ventas@refaccionesacpro.mx</a></li>
              <li><a href="https://wa.me/521234567890" target="_blank" rel="noopener">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} RefaccionesAC Pro. Todos los derechos reservados.</p>
          <p>Hecho en México &mdash; <a href="carta.html">Carta de Presentación</a></p>
        </div>
      </div>
    </footer>
  )
}
