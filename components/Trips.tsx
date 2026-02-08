'use client'

import styles from './Trips.module.css'

export function Trips() {
  const trips = [
    {
      id: 1,
      title: '4 HOUR INSHORE FISHING',
      price: '$400',
      seasonal: false,
      availability: null,
    },
    {
      id: 2,
      title: '6 HOUR INSHORE FISHING',
      price: '$550',
      seasonal: false,
      availability: null,
    },
    {
      id: 3,
      title: '4 HOUR NEARSHORE FISHING',
      price: '$450',
      seasonal: true,
      availability: 'Available: Apr 1 - Sep 1',
    },
    {
      id: 4,
      title: '6 HOUR OFFSHORE/NEARSHORE',
      price: '$600',
      seasonal: true,
      availability: 'Available: Apr 1 - Sep 1',
    },
  ]

  return (
    <section id="trips" className="section bg-white">
      <div className="container">
        <div className="text-center mb-xl">
          <h2>BOOK YOUR ADVENTURE</h2>
        </div>

        <div className={styles.grid}>
          {trips.map((trip) => (
            <div key={trip.id} className={`card ${styles.tripCard}`}>
              {trip.seasonal && (
                <div className="seasonal-badge">SEASONAL</div>
              )}

              <h4 className={styles.title}>{trip.title}</h4>

              {trip.availability && (
                <p className={styles.availability}>{trip.availability}</p>
              )}

              <div className={styles.price}>{trip.price}</div>

              <button className="btn btn-primary" style={{ width: '100%', marginTop: '32px' }} onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}>
                BOOK NOW
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
