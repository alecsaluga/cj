'use client'

interface CityTripsGridProps {
  cityName: string
}

export function CityTripsGrid({ cityName }: CityTripsGridProps) {
  const openBooking = () => window.dispatchEvent(new CustomEvent('openBookingModal'))

  return (
    <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
      <div className="card">
        <h4>4 HOUR INSHORE FISHING</h4>
        <div style={{ fontSize: '32px', fontWeight: 700, margin: '16px 0', color: 'var(--cyan)' }}>$400</div>
        <p>Perfect for targeting snook, redfish, and tarpon in the flats and backcountry waters.</p>
        <button className="btn btn-primary" style={{ width: '100%', marginTop: '24px' }} onClick={openBooking}>
          BOOK NOW
        </button>
      </div>

      <div className="card">
        <h4>6 HOUR INSHORE FISHING</h4>
        <div style={{ fontSize: '32px', fontWeight: 700, margin: '16px 0', color: 'var(--cyan)' }}>$550</div>
        <p>Extended inshore trip for serious anglers targeting trophy snook, redfish, and tarpon.</p>
        <button className="btn btn-primary" style={{ width: '100%', marginTop: '24px' }} onClick={openBooking}>
          BOOK NOW
        </button>
      </div>

      <div className="card">
        <div className="seasonal-badge">SEASONAL</div>
        <h4>4 HOUR NEARSHORE FISHING</h4>
        <div style={{ fontSize: '32px', fontWeight: 700, margin: '16px 0', color: 'var(--cyan)' }}>$450</div>
        <p style={{ fontSize: '14px', opacity: 0.7, marginBottom: '8px' }}>Available: Apr 1 - Sep 1</p>
        <p>Venture into nearshore waters for kingfish, cobia, and more.</p>
        <button className="btn btn-primary" style={{ width: '100%', marginTop: '24px' }} onClick={openBooking}>
          BOOK NOW
        </button>
      </div>

      <div className="card">
        <div className="seasonal-badge">SEASONAL</div>
        <h4>6 HOUR OFFSHORE/NEARSHORE</h4>
        <div style={{ fontSize: '32px', fontWeight: 700, margin: '16px 0', color: 'var(--cyan)' }}>$600</div>
        <p style={{ fontSize: '14px', opacity: 0.7, marginBottom: '8px' }}>Available: Apr 1 - Sep 1</p>
        <p>Extended trip for serious anglers chasing sailfish, mahi, and wahoo.</p>
        <button className="btn btn-primary" style={{ width: '100%', marginTop: '24px' }} onClick={openBooking}>
          BOOK NOW
        </button>
      </div>
    </div>
  )
}
