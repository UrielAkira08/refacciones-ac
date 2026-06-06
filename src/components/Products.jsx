const CATEGORIES = [
  {
    id: 'compresores',
    title: 'Compresores',
    desc: 'Compresores de pistón rotativo, scroll y de paletas para aplicaciones de carga pesada. Nuevos y remanufacturados.',
    brands: ['Sanden 508', 'Sanden 510', 'SD7H15', 'York', 'Thermo King'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07"/>
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>
      </svg>
    ),
  },
  {
    id: 'condensadores',
    title: 'Condensadores',
    desc: 'Condensadores de aluminio y cobre-latón de alta capacidad BTU para ambientes de trabajo exigentes.',
    brands: ['Peterbilt', 'Kenworth', 'Freightliner', 'Universal'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="18" rx="2"/>
        <line x1="8" y1="3" x2="8" y2="21"/>
        <line x1="14" y1="3" x2="14" y2="21"/>
        <line x1="2" y1="9" x2="22" y2="9"/>
        <line x1="2" y1="15" x2="22" y2="15"/>
      </svg>
    ),
  },
  {
    id: 'evaporadores',
    title: 'Evaporadores',
    desc: 'Núcleos de evaporador y ensambles completos para cabinas de tractocamión y unidades de transporte refrigerado.',
    brands: ['Carrier', 'Thermo King', 'Red Dot', 'Universal'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v10M12 22v-5"/>
        <path d="M4.93 4.93l3.54 3.54M15.54 15.54l3.53 3.53"/>
        <path d="M2 12h5M17 12h5"/>
        <path d="M4.93 19.07l3.54-3.53M15.54 8.46l3.53-3.53"/>
      </svg>
    ),
  },
  {
    id: 'filtros',
    title: 'Filtros Deshidratadores',
    desc: 'Filtros secadores y acumuladores para proteger el sistema de humedad, ácidos y contaminantes.',
    brands: ['Sanda', 'Parker', 'Multiline', 'Universal'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 3H2l8 9.46V19l4 2V12.46L22 3z"/>
      </svg>
    ),
  },
  {
    id: 'mangueras',
    title: 'Mangueras y Conexiones',
    desc: 'Mangueras de alta y baja presión, adaptadores, válvulas Schrader y fitting de aluminio para R-134a y R-12.',
    brands: ['Gates', 'Parker', 'Dayco', 'Goodyear'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h4l3-9 4 18 3-9h4"/>
      </svg>
    ),
  },
  {
    id: 'embragues',
    title: 'Embragues y Poleas',
    desc: 'Clutch magnético, poleas de compresor, placas y bobinas para todas las marcas principales de servicio pesado.',
    brands: ['Sanden', 'York', 'Denso', 'Valeo'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="4"/>
        <line x1="12" y1="2" x2="12" y2="8"/>
        <line x1="12" y1="16" x2="12" y2="22"/>
        <line x1="2" y1="12" x2="8" y2="12"/>
        <line x1="16" y1="12" x2="22" y2="12"/>
      </svg>
    ),
  },
  {
    id: 'valvulas',
    title: 'Válvulas de Expansión',
    desc: 'Válvulas TXV y orificio fijo para control de flujo de refrigerante en sistemas de alta demanda térmica.',
    brands: ['Danfoss', 'Parker', 'Sporlan', 'Emerson'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="1"/>
        <path d="M12 5v6M12 13v6"/>
        <path d="M5 5l7 7-7 7M19 5l-7 7 7 7"/>
      </svg>
    ),
  },
  {
    id: 'ventiladores',
    title: 'Motores y Ventiladores',
    desc: 'Motores de soplador, aspas de ventilador y conjuntos completos para condensador y evaporador de cabina.',
    brands: ['Behr', 'Modine', 'Denso', 'Red Dot'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12c0-3.31 2.69-6 6-6 0 3.31-2.69 6-6 6z"/>
        <path d="M12 12c3.31 0 6 2.69 6 6-3.31 0-6-2.69-6-6z"/>
        <path d="M12 12c0 3.31-2.69 6-6 6 0-3.31 2.69-6 6-6z"/>
        <path d="M12 12c-3.31 0-6-2.69-6-6 3.31 0 6 2.69 6 6z"/>
      </svg>
    ),
  },
]

export default function Products() {
  return (
    <section className="section section-gray" id="productos">
      <div className="container">
        <div className="section-header">
          <h2>Catálogo de Refacciones</h2>
          <div className="divider" />
          <p>Amplio inventario de componentes para sistemas de A/C de servicio pesado con cobertura nacional.</p>
        </div>

        <div className="categories-grid">
          {CATEGORIES.map(({ id, title, desc, brands, icon }) => (
            <article key={id} className="category-card">
              <div className="cat-icon" aria-hidden="true">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="cat-brands">
                {brands.map(b => <span key={b} className="brand-tag">{b}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
