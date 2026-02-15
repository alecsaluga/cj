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

        {/* Google Business Profile Map */}
        <div className={styles.mapSection}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d908593.3338204799!2d-81.11363719545186!3d27.181679330081366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x950ae2e629e65df%3A0xd2d186bbe39097c4!2s1%20Fathom%20Sportfishing%20Charters!5e0!3m2!1sen!2sus!4v1771171469838!5m2!1sen!2sus"
            className={styles.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="1 Fathom Sportfishing Charters Location"
          />
        </div>

        <div className={styles.bottom}>
          <p>© 2026 1 Fathom Sportfishing Charters</p>
          <a href="#privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}
