'use client'

import styles from './Hero.module.css'

export function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.headline}>
          TREASURE COAST&apos;S<br />
          BEST FISHING<br />
          EXPERIENCE
        </h1>
        <p className={styles.subheadline}>
          Launch from Jensen Beach, Fort Pierce, Stuart, and more
        </p>
        <button
          className="btn btn-primary btn-large"
          onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
        >
          BOOK YOUR TRIP
        </button>
      </div>
    </section>
  )
}
