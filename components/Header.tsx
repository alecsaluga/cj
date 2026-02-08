'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Header.module.css'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero') }} className={styles.logoLink}>
            <Image
              src="/fishing2.png"
              alt="1 Fathom Sportfishing Charters"
              width={180}
              height={60}
              priority
              className={styles.logoImage}
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>ABOUT</a>
          <a href="#trips" onClick={(e) => { e.preventDefault(); scrollToSection('trips') }}>TRIPS</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>CONTACT</a>
        </nav>

        <button className={styles.bookButton} onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}>
          BOOK NOW
        </button>

        {/* Mobile hamburger - only visible on mobile */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>ABOUT</a>
            <a href="#trips" onClick={(e) => { e.preventDefault(); scrollToSection('trips') }}>TRIPS</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>CONTACT</a>
            <button className={styles.mobileBookButton} onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}>
              BOOK NOW
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
