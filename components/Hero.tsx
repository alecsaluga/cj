import styles from './Hero.module.css'

export function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.headline}>
          SOUTH FLORIDA'S<br />
          BEST FISHING<br />
          EXPERIENCE
        </h1>
        <p className={styles.subheadline}>
          Jensen Beach, Florida
        </p>
        <a href="#trips" className="btn btn-primary btn-large">
          BOOK YOUR TRIP
        </a>
      </div>
    </section>
  )
}
