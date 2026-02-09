'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './Gallery.module.css'

const PHOTOS = [
  '/gallery/1.jpeg',
  '/gallery/IMG_2914.jpg',
  '/gallery/IMG_4513.jpg',
  '/gallery/IMG_4591.jpg',
  '/gallery/IMG_4606.jpg',
  '/gallery/IMG_4689.jpg',
  '/gallery/IMG_6462.jpg',
  '/gallery/IMG_6484.jpeg',
  '/gallery/IMG_8109.jpg',
  '/gallery/image000001.jpg',
]

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? PHOTOS.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev === PHOTOS.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className={`section bg-cream ${styles.section}`}>
      <div className="container">
        <div className="text-center mb-xl">
          <h2>GALLERY</h2>
        </div>

        <div className={styles.carouselContainer}>
          <button
            className={`${styles.navButton} ${styles.navButtonPrev}`}
            onClick={goToPrevious}
            aria-label="Previous photo"
          >
            ‹
          </button>

          <div className={styles.imageContainer}>
            <Image
              src={PHOTOS[activeIndex]}
              alt={`Gallery photo ${activeIndex + 1}`}
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 80vw"
              priority={activeIndex === 0}
            />
          </div>

          <button
            className={`${styles.navButton} ${styles.navButtonNext}`}
            onClick={goToNext}
            aria-label="Next photo"
          >
            ›
          </button>
        </div>

        <div className={styles.dots}>
          {PHOTOS.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ''}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to photo ${i + 1}`}
            />
          ))}
        </div>

        <div className={styles.counter}>
          {activeIndex + 1} / {PHOTOS.length}
        </div>
      </div>
    </section>
  )
}
