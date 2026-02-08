import styles from './WhatToBring.module.css'

export function WhatToBring() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-xl">
          <h2>COME PREPARED</h2>
        </div>

        <div className={styles.grid}>
          <div className={`card ${styles.card}`}>
            <h4 className={styles.title}>ESSENTIALS</h4>
            <ul className={styles.list}>
              <li>Sunglasses</li>
              <li>Sunblock (non-spray)</li>
              <li>Hat</li>
            </ul>
          </div>

          <div className={`card ${styles.card}`}>
            <h4 className={styles.title}>OPTIONAL</h4>
            <ul className={styles.list}>
              <li>Your own drinks</li>
              <li>Alcohol OK in moderation</li>
              <li>No hard liquor until after</li>
            </ul>
          </div>

          <div className={`card ${styles.card}`}>
            <h4 className={styles.title}>FOR KIDS</h4>
            <ul className={styles.list}>
              <li>Life jacket required for under 6</li>
              <li>Must bring your own</li>
              <li>Kids under 5 not recommended</li>
            </ul>
          </div>
        </div>

        <p className={styles.footer}>
          Water bottles provided • Fishing license covered
        </p>
      </div>
    </section>
  )
}
