import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={`section bg-cream ${styles.footer}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>1 FATHOM</div>
            <p className={styles.tagline}>
              South Florida's Best<br />
              Fishing Experience
            </p>
            <p className={styles.location}>Jensen Beach, Florida</p>
          </div>

          <div className={styles.links}>
            <h4 className={styles.heading}>QUICK LINKS</h4>
            <nav className={styles.nav}>
              <a href="#hero">Home</a>
              <a href="#about">About Captain CJ</a>
              <a href="#trips">Trips & Pricing</a>
              <a href="#contact">Contact</a>
              <a href="#trips">Book Now</a>
            </nav>
          </div>

          <div className={styles.contactInfo}>
            <h4 className={styles.heading}>CONTACT</h4>
            <div className={styles.contactDetails}>
              <p>📍 Jensen Beach, Florida</p>
              <p>📞 <a href="tel:4129794505">(412) 979-4505</a></p>
              <p>✉️ <a href="mailto:salugac@gmail.com">salugac@gmail.com</a></p>
            </div>
            <div className={styles.social}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                📷
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                📘
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 1 Fathom Sportfishing Charters</p>
          <a href="#privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}
