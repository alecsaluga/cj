import styles from './Policies.module.css'

export function Policies() {
  return (
    <section className="section bg-cream">
      <div className="container">
        <div className="text-center mb-xl">
          <h2>GOOD TO KNOW</h2>
        </div>

        <div className={styles.grid}>
          <div className={`card ${styles.card}`}>
            <h4 className={styles.title}>CANCELLATION POLICY</h4>
            <p className={styles.text}>
              Free cancellation up to 3 days before your trip date. Later cancellations or no-shows will forfeit 100% of payment.
            </p>
          </div>

          <div className={`card ${styles.card}`}>
            <h4 className={styles.title}>TRIP DETAILS</h4>
            <ul className={styles.list}>
              <li>Kids welcome (5+ recommended)</li>
              <li>Life jacket required for under 6</li>
              <li>Pickup may be included based on location</li>
              <li>You keep your catch (check harvest limits with captain)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
