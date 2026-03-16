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
  email: string
  phone: string
  discountCode: string
  notes: string
  timestamp: string
}

export default function BookingConfirmation() {
  const [booking, setBooking] = useState<BookingData | null>(null)
  const router = useRouter()

  useEffect(() => {
    const lastBooking = localStorage.getItem('lastBooking')
    if (lastBooking) {
      const data = JSON.parse(lastBooking)
      setBooking(data)
      // Clear after reading
      localStorage.removeItem('lastBooking')
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

  const firstName = booking.name.split(' ')[0]

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <div className={styles.icon}>✓</div>
        </div>

        <h1 className={styles.title}>REQUEST RECEIVED!</h1>

        <p className={styles.subtitle}>
          Thanks, {firstName}! Captain CJ will call you at <strong>{booking.phone}</strong> from <strong>(412) 979-4505</strong> to confirm your trip details and availability.
        </p>

        <div className={styles.summary}>
          <h2 className={styles.summaryTitle}>YOUR REQUEST DETAILS</h2>

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
            <span className={styles.label}>Email</span>
            <span className={styles.value}>{booking.email}</span>
          </div>

          <div className={styles.detail}>
            <span className={styles.label}>Phone</span>
            <span className={styles.value}>{booking.phone}</span>
          </div>

          {booking.discountCode && booking.discountCode !== 'none' && (
            <div className={styles.detail}>
              <span className={styles.label}>Discount Code</span>
              <span className={styles.valueDiscount}>{booking.discountCode}</span>
            </div>
          )}

          {booking.notes && booking.notes !== 'none' && (
            <div className={styles.detail}>
              <span className={styles.label}>Notes</span>
              <span className={styles.value}>{booking.notes}</span>
            </div>
          )}

          <div className={`${styles.detail} ${styles.total}`}>
            <span className={styles.label}>Trip Price</span>
            <span className={styles.valueTotal}>
              ${booking.price}
              {booking.discountCode === 'FISH50' && <span className={styles.discount}> (-$50)</span>}
            </span>
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
