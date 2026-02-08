import styles from './Trips.module.css'

export function Trips() {
  const trips = [
    {
      id: 1,
      title: '4 HOUR INSHORE FISHING (AM)',
      time: '8:00 AM Start',
      price: '$400',
      seasonal: false,
      availability: null,
    },
    {
      id: 2,
      title: '4 HOUR INSHORE FISHING (PM)',
      time: '1:00 PM Start',
      price: '$400',
      seasonal: false,
      availability: null,
    },
    {
      id: 3,
      title: '4 HOUR NEAR SHORE FISHING (AM)',
      time: '8:00 AM Start',
      price: '$450',
      seasonal: true,
      availability: 'Available: Apr 1 - Sep 1',
    },
    {
      id: 4,
      title: '6 HOUR OFFSHORE/NEAR SHORE TRIP',
      time: '8:00 AM Start',
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

              <p className={styles.time}>{trip.time}</p>

              <div className={styles.price}>{trip.price}</div>

              <a href="#contact" className="btn btn-primary" style={{ width: '100%', marginTop: '32px' }}>
                BOOK NOW
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
