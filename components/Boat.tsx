import Image from 'next/image'
import styles from './Boat.module.css'

export function Boat() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageContainer}>
            <Image
              src="/nauticstar.png"
              alt="20' NauticStar Bay Boat"
              width={1200}
              height={800}
              className={styles.image}
            />
          </div>

          <div className={styles.content}>
            <h2 className={styles.headline}>
              20' NAUTICSTAR<br />
              BAY BOAT
            </h2>
            <p className={styles.subheadline}>
              Small, versatile, and equipped for success
            </p>

            <ul className={styles.features}>
              <li>
                <span className={styles.checkmark}>✓</span>
                GPS & Fishfinder
              </li>
              <li>
                <span className={styles.checkmark}>✓</span>
                Live Bait Well
              </li>
              <li>
                <span className={styles.checkmark}>✓</span>
                Wireless Trolling Motor
              </li>
              <li>
                <span className={styles.checkmark}>✓</span>
                Ice Box
              </li>
              <li>
                <span className={styles.checkmark}>✓</span>
                Holds up to 3 guests comfortably
              </li>
            </ul>

            <p className={styles.note}>
              All tackle, rods, and reels provided for every trip.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
