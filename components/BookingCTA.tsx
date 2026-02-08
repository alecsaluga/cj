'use client'

import styles from './BookingCTA.module.css'

export function BookingCTA() {
  return (
    <section id="contact" className={`section bg-black ${styles.cta}`}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.headline}>
          READY TO GET<br />
          ON THE WATER?
        </h2>

        <p className={styles.subheadline}>
          Book your charter with Captain CJ today.
        </p>

        <button
          className="btn btn-primary btn-large"
          onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
        >
          BOOK YOUR TRIP NOW
        </button>

        <p className={styles.contact}>
          Questions? Call or text: <a href="tel:5551234567">(555) 123-4567</a>
        </p>
      </div>
    </section>
  )
}
