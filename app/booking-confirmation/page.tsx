'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'

interface BookingData {
  launchLocation: string
  fishingType: string
  trip: string
  price: number
  date: string
  time: string
  name: string
  phone: string
  notes: string
  timestamp: string
}

export default function BookingConfirmation() {
  const [booking, setBooking] = useState<BookingData | null>(null)
  const router = useRouter()

  useEffect(() => {
    const pendingBooking = localStorage.getItem('pendingBooking')
    if (pendingBooking) {
      const data = JSON.parse(pendingBooking)
      setBooking(data)

      // Send to webhook
      fetch('https://n8n.alecautomations.com/webhook/27d5dc31-8f82-4bdf-8f51-f055a7d3d4eb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: pendingBooking,
      }).then(() => {
        localStorage.removeItem('pendingBooking')
      }).catch((error) => {
        console.error('Failed to send booking data:', error)
      })
    }
  }, [])

  if (!booking) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>No Booking Found</h1>
          <p>There was no booking information found. Please try booking again.</p>
          <button className="btn btn-primary" onClick={() => router.push('/')}>
            RETURN HOME
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <div className={styles.icon}>✓</div>
        </div>

        <h1 className={styles.title}>BOOKING CONFIRMED!</h1>

        <p className={styles.subtitle}>
          Thank you for your booking. Captain CJ will reach out soon to confirm your trip details.
        </p>

        <div className={styles.summary}>
          <h2 className={styles.summaryTitle}>YOUR BOOKING DETAILS</h2>

          <div className={styles.detail}>
            <span className={styles.label}>Launch Location</span>
            <span className={styles.value}>{booking.launchLocation}</span>
          </div>

          <div className={styles.detail}>
            <span className={styles.label}>Trip Type</span>
            <span className={styles.value}>{booking.fishingType}</span>
          </div>

          <div className={styles.detail}>
            <span className={styles.label}>Trip</span>
            <span className={styles.value}>{booking.trip}</span>
          </div>

          <div className={styles.detail}>
            <span className={styles.label}>Date</span>
            <span className={styles.value}>{booking.date}</span>
          </div>

          <div className={styles.detail}>
            <span className={styles.label}>Time</span>
            <span className={styles.value}>{booking.time}</span>
          </div>

          <div className={styles.detail}>
            <span className={styles.label}>Name</span>
            <span className={styles.value}>{booking.name}</span>
          </div>

          <div className={styles.detail}>
            <span className={styles.label}>Phone</span>
            <span className={styles.value}>{booking.phone}</span>
          </div>

          {booking.notes && (
            <div className={styles.detail}>
              <span className={styles.label}>Notes</span>
              <span className={styles.value}>{booking.notes}</span>
            </div>
          )}

          <div className={`${styles.detail} ${styles.total}`}>
            <span className={styles.label}>Total Paid</span>
            <span className={styles.valueTotal}>${booking.price}</span>
          </div>
        </div>

        <div className={styles.actions}>
          <button className="btn btn-primary btn-large" onClick={() => router.push('/')}>
            RETURN HOME
          </button>
        </div>
      </div>
    </div>
  )
}
