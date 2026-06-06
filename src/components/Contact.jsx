import { useState, useRef } from 'react'

const CONTACT_ITEMS = [
  {
    id: 'phone',
    label: 'Teléfono',
    content: <a href="tel:+521234567890">+52 (123) 456-7890</a>,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92V19.92a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .99h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
  },
  {
    id: 'email',
    label: 'Correo',
    content: <a href="mailto:ventas@refaccionesacpro.mx">ventas@refaccionesacpro.mx</a>,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    id: 'location',
    label: 'Ubicación',
    content: (
      <>
        Ciudad de México, México<br />
        <small style={{ color: 'var(--gray-500)', fontSize: '0.8rem' }}>Envíos a toda la República</small>
      </>
    ),
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    id: 'hours',
    label: 'Horario de Atención',
    content: 'Lunes–Viernes 8:00–18:00\nSábado 8:00–14:00',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12,6 12,12 16,14"/>
      </svg>
    ),
  },
]

const PIEZA_OPTIONS = [
  'Compresor', 'Condensador', 'Evaporador', 'Filtro deshidratador',
  'Mangueras y conexiones', 'Embrague / Polea', 'Válvula de expansión',
  'Motor / Ventilador', 'Múltiples piezas / Kit', 'Otro',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      formRef.current?.reset()
    }, 3000)
  }

  return (
    <section className="section section-light" id="contacto">
      <div className="container">
        <div className="section-header">
          <h2>Contáctanos</h2>
          <div className="divider" />
          <p>Solicita cotización, verifica disponibilidad o habla con un asesor técnico.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Estamos para servirte</h3>
            <p>Atendemos a talleres, flotas empresariales y mecánicos independientes en todo el país.</p>

            <div className="contact-items">
              {CONTACT_ITEMS.map(({ id, label, content, icon }) => (
                <div key={id} className="contact-item">
                  <div className="contact-item-icon" aria-hidden="true">{icon}</div>
                  <div className="contact-item-text">
                    <strong>{label}</strong>
                    <span style={{ whiteSpace: 'pre-line' }}>{content}</span>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/521234567890?text=Hola%2C%20me%20interesa%20cotizar%20refacciones%20para%20A%2FC%20de%20servicio%20pesado."
              className="wa-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Escribir por WhatsApp
            </a>
          </div>

          <div className="contact-form">
            <h3>Solicitar Cotización</h3>
            <form ref={formRef} onSubmit={handleSubmit} noValidate>
              <div className="form-row two-col">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre</label>
                  <input type="text" id="nombre" name="nombre" placeholder="Tu nombre completo" required />
                </div>
                <div className="form-group">
                  <label htmlFor="empresa">Empresa / Taller</label>
                  <input type="text" id="empresa" name="empresa" placeholder="Nombre del negocio" />
                </div>
              </div>
              <div className="form-row two-col">
                <div className="form-group">
                  <label htmlFor="tel">Teléfono</label>
                  <input type="tel" id="tel" name="tel" placeholder="+52 55 0000 0000" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Correo electrónico</label>
                  <input type="email" id="email" name="email" placeholder="correo@ejemplo.com" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="vehiculo">Vehículo / Aplicación</label>
                  <input type="text" id="vehiculo" name="vehiculo" placeholder="Ej: Kenworth T680 2020, Caterpillar 320D..." />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="pieza">Pieza o sistema requerido</label>
                  <select id="pieza" name="pieza">
                    <option value="">— Seleccionar categoría —</option>
                    {PIEZA_OPTIONS.map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="mensaje">Descripción del requerimiento</label>
                  <textarea id="mensaje" name="mensaje" placeholder="Describe la pieza, número de parte (si lo tienes), síntoma de falla o cantidad requerida..." />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={submitted}
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '0.85rem',
                  background: submitted ? '#38a169' : undefined,
                }}
              >
                {submitted ? '¡Solicitud enviada!' : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                    Enviar Solicitud
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
