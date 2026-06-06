const REASONS = [
  {
    num: '01',
    title: 'Especialistas en Servicio Pesado',
    text: 'No somos una refaccionaria generalista. Toda nuestra operación está enfocada en sistemas de A/C para vehículos de trabajo pesado: tractocamiones, autobuses, maquinaria de construcción y agrícola.',
  },
  {
    num: '02',
    title: 'Inventario Disponible',
    text: 'Más de 500 números de parte en stock permanente. Minimizamos tiempos muertos de tu flota con entrega local en 24 horas y envíos express a todo el país.',
  },
  {
    num: '03',
    title: 'Calidad OEM y Aftermarket',
    text: 'Ofrecemos piezas de calidad original (OEM) y aftermarket de marcas certificadas. Te asesoramos para que elijas la mejor relación costo-beneficio según la vida útil de tu unidad.',
  },
  {
    num: '04',
    title: 'Soporte Técnico',
    text: 'Nuestro equipo técnico te ayuda a identificar la pieza correcta por número de parte, aplicación o síntoma de falla. Asesoría sin costo por WhatsApp o teléfono.',
  },
  {
    num: '05',
    title: 'Garantía en Todos los Productos',
    text: 'Todas nuestras refacciones cuentan con garantía contra defectos de fabricación. Respaldamos cada venta con servicio post-venta real.',
  },
  {
    num: '06',
    title: 'Crédito para Talleres y Flotas',
    text: 'Programa de crédito especial para talleres mecánicos y empresas con flota vehicular. Facturación electrónica y precios de mayoreo según volumen.',
  },
]

export default function WhyUs() {
  return (
    <section className="section section-dark" id="nosotros">
      <div className="container">
        <div className="section-header">
          <h2>¿Por qué elegir RefaccionesAC Pro?</h2>
          <div className="divider" />
          <p>Más de una década abasteciendo flotas y talleres con las mejores refacciones del mercado.</p>
        </div>

        <div className="reasons-grid">
          {REASONS.map(({ num, title, text }) => (
            <div key={num} className="reason-card">
              <div className="reason-num" aria-hidden="true">{num}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
