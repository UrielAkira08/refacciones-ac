const BRANDS = [
  'Freightliner', 'Kenworth', 'Peterbilt', 'International',
  'Volvo', 'Mercedes-Benz', 'Scania', 'MAN', 'Caterpillar', 'Komatsu',
]

export default function Brands() {
  return (
    <section className="brands-section fleet-section" id="flota">
      <div className="container">
        <p className="brands-label">Compatible con las principales marcas de servicio pesado</p>
        <div className="brands-list" role="list">
          {BRANDS.map(brand => (
            <span key={brand} className="brand-item" role="listitem">{brand}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
