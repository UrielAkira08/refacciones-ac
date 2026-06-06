import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '#productos', label: 'Productos' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#flota', label: 'Aplicaciones' },
  { href: 'carta.html', label: 'Carta de Presentación', external: true },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="container">
        <nav className="nav">
          <a href="#inicio" className="nav-brand" aria-label="RefaccionesAC Pro inicio">
            <div className="nav-logo-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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

          <ul className={`nav-links${open ? ' open' : ''}`} role="list">
            {NAV_LINKS.map(({ href, label, external }) => (
              <li key={href}>
                <a
                  href={href}
                  className={!external && activeSection && href === '#' + activeSection ? 'active' : undefined}
                  onClick={close}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contacto" className="nav-cta btn" onClick={close}>
                Cotizar
              </a>
            </li>
          </ul>

          <button
            className="nav-toggle"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
          >
            <span /><span /><span />
          </button>
        </nav>
      </div>
    </header>
  )
}
