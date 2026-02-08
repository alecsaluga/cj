import styles from './WhatsIncluded.module.css'

export function WhatsIncluded() {
  const items = [
    'Rods, Reels & Tackle',
    'Live Bait (When Available)',
    'Fishing License',
    'Catch Cleaning & Filleting',
    'Water Bottles',
    'Ice Box',
  ]

  return (
    <section className="section bg-cream">
      <div className="container">
        <div className="text-center mb-xl">
          <h2>EVERYTHING YOU NEED</h2>
        </div>

        <div className={styles.grid}>
          {items.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.line}></div>
              <h4 className={styles.title}>{item}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
