import styles from './Stats.module.css'

export function Stats() {
  return (
    <section className={`section bg-black ${styles.stats}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.stat}>
            <div className={styles.number}>20'</div>
            <div className={styles.label}>NAUTICSTAR</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.number}>1-2</div>
            <div className={styles.label}>GUESTS</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.number}>100%</div>
            <div className={styles.label}>GEAR & LICENSE<br />INCLUDED</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.number}>4-6HR</div>
            <div className={styles.label}>TRIPS</div>
          </div>
        </div>
      </div>
    </section>
  )
}
