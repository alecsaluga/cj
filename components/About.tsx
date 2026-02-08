import Image from 'next/image'
import styles from './About.module.css'

export function About() {
  return (
    <section id="about" className={`section bg-cream ${styles.about}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageContainer}>
            <Image
              src="/captain.jpg"
              alt="Captain CJ"
              width={800}
              height={1000}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <div className="eyebrow">YOUR CAPTAIN</div>
            <h2 className={styles.headline}>
              NOT JUST A TRIP.<br />
              AN EXPERIENCE.
            </h2>
            <div className={styles.text}>
              <p>
                At 1 Fathom Sportfishing Charters, you're not just booking another fishing trip—you're booking an experience you'll remember for life. Captain CJ takes it upon himself to make sure you experience all that South Florida's inshore and offshore waterways have to offer.
              </p>
              <p>
                From incredible scenery and wildlife to some of the best fishing in Florida, every trip is an immersive adventure. Operating a versatile 20' NauticStar bay boat, Captain CJ keeps groups small (up to 2 guests) so you get personalized attention at a fraction of the cost of larger charters.
              </p>
            </div>
            <a href="#contact" className={styles.link}>
              MEET CAPTAIN CJ →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
