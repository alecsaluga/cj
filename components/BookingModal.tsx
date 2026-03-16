'use client'

import { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styles from './BookingModal.module.css'

const LAUNCH_LOCATIONS = ['Jensen Beach', 'Fort Pierce', 'Stuart', 'Other']

const INSHORE_TRIPS = [
  { title: '4 Hour Inshore Fishing', price: 450, display: '$450' },
  { title: '6 Hour Inshore Fishing', price: 600, display: '$600' },
]

const NEARSHORE_TRIPS = [
  { title: '4 Hour Nearshore Fishing', price: 500, display: '$500', note: 'Seasonal: Apr 1 – Sep 1' },
  { title: '6 Hour Offshore/Nearshore', price: 650, display: '$650', note: 'Seasonal: Apr 1 – Sep 1' },
]

const TIME_SLOTS = [
  '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM',
  '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'
]

const BOOKING_WEBHOOK = 'https://n8n.alecautomations.com/webhook/27d5dc31-8f82-4bdf-8f51-f055a7d3d4eb'

type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7

export function BookingModal() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState<Step>(1)
  const [launchLocation, setLaunchLocation] = useState('')
  const [fishingType, setFishingType] = useState('')
  const [selectedTrip, setSelectedTrip] = useState('')
  const [selectedPrice, setSelectedPrice] = useState(0)
  const [date, setDate] = useState<Date | null>(null)
  const [time, setTime] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [discountCode, setDiscountCode] = useState('')
  const [notes, setNotes] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    const handler = () => {
      setOpen(true)
      setStep(1)
      setLaunchLocation('')
      setFishingType('')
      setSelectedTrip('')
      setSelectedPrice(0)
      setDate(null)
      setTime('')
      setName('')
      setEmail('')
      setPhone('')
      setDiscountCode(localStorage.getItem('discountCode') || '')
      setNotes('')
      setSubmitting(false)
    }
    window.addEventListener('openBookingModal', handler)
    return () => window.removeEventListener('openBookingModal', handler)
  }, [])

  const close = () => setOpen(false)

  const trips = fishingType === 'inshore' ? INSHORE_TRIPS : NEARSHORE_TRIPS

  const handleSubmitRequest = async () => {
    setSubmitting(true)

    const bookingData = {
      type: 'booking_request',
      launchLocation,
      fishingType: fishingType === 'inshore' ? 'Inshore' : 'Nearshore & Offshore',
      trip: selectedTrip,
      price: selectedPrice,
      date: date ? date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '',
      time,
      name,
      email,
      phone,
      discountCode: discountCode || 'none',
      notes: notes || 'none',
      timestamp: new Date().toISOString(),
    }

    try {
      await fetch(BOOKING_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
      })
    } catch (error) {
      console.error('Webhook error:', error)
    }

    // Store booking data for thank you page
    localStorage.setItem('lastBooking', JSON.stringify(bookingData))

    // Redirect to thank you page for conversion tracking
    window.location.href = '/booking-confirmation'
  }

  return (
    <>
      {/* Floating Call Button - Always visible */}
      <a href="tel:4129794505" className={styles.floatingCall} aria-label="Call now">
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
        </svg>
      </a>

      {open && (
      <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && close()}>
        <div className={styles.modal}>
          <button className={styles.closeBtn} onClick={close} aria-label="Close">✕</button>

          {step !== 7 && (
            <div className={styles.progress}>
              {[1, 2, 3, 4, 5, 6].map((s) => (
                <div key={s} className={`${styles.dot} ${step >= s ? styles.dotActive : ''}`} />
              ))}
            </div>
          )}

          {step === 1 && (
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>WHERE DO YOU WANT TO LAUNCH?</h3>
              <div className={styles.options}>
                {LAUNCH_LOCATIONS.map((loc) => (
                  <button
                    key={loc}
                    className={`${styles.optionBtn} ${launchLocation === loc ? styles.optionSelected : ''}`}
                    onClick={() => { setLaunchLocation(loc); setStep(2) }}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>WHAT TYPE OF FISHING?</h3>
              <div className={styles.options}>
                <button
                  className={`${styles.optionBtn} ${fishingType === 'inshore' ? styles.optionSelected : ''}`}
                  onClick={() => { setFishingType('inshore'); setStep(3) }}
                >
                  <span className={styles.optionName}>INSHORE</span>
                  <span className={styles.optionSub}>Rivers, lagoon & intracoastal</span>
                </button>
                <button
                  className={`${styles.optionBtn} ${fishingType === 'nearshore' ? styles.optionSelected : ''}`}
                  onClick={() => { setFishingType('nearshore'); setStep(3) }}
                >
                  <span className={styles.optionName}>NEARSHORE &amp; OFFSHORE</span>
                  <span className={styles.optionSub}>Ocean — within 3 mi &amp; beyond</span>
                </button>
              </div>
              <button className={styles.backBtn} onClick={() => setStep(1)}>← Back</button>
            </div>
          )}

          {step === 3 && (
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>CHOOSE YOUR TRIP</h3>
              <div className={styles.options}>
                {trips.map((t) => (
                  <button
                    key={t.title}
                    className={`${styles.optionBtn} ${selectedTrip === t.title ? styles.optionSelected : ''}`}
                    onClick={() => { setSelectedTrip(t.title); setSelectedPrice(t.price); setStep(4) }}
                  >
                    <span className={styles.optionName}>{t.title}</span>
                    <span className={styles.optionPrice}>{t.display}</span>
                    {'note' in t && <span className={styles.optionSub}>{(t as { note: string }).note}</span>}
                  </button>
                ))}
              </div>
              <button className={styles.backBtn} onClick={() => setStep(2)}>← Back</button>
            </div>
          )}

          {step === 4 && (
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>PICK YOUR DATE & TIME</h3>
              <div className={styles.form}>
                <label className={styles.label}>Date</label>
                <DatePicker
                  selected={date}
                  onChange={(d: Date | null) => setDate(d)}
                  minDate={new Date()}
                  dateFormat="MMMM d, yyyy"
                  placeholderText="Select a date"
                  className={styles.input}
                  calendarClassName={styles.calendar}
                />

                <label className={styles.label} style={{ marginTop: '20px' }}>Time</label>
                <div className={styles.timeGrid}>
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot}
                      className={`${styles.timeSlot} ${time === slot ? styles.timeSlotSelected : ''}`}
                      onClick={() => setTime(slot)}
                    >
                      {slot}
                    </button>
                  ))}
                </div>

                <button
                  className={`btn btn-primary ${styles.nextBtn}`}
                  onClick={() => setStep(5)}
                  disabled={!date || !time}
                >
                  NEXT
                </button>
              </div>
              <button className={styles.backBtn} onClick={() => setStep(3)}>← Back</button>
            </div>
          )}

          {step === 5 && (
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>YOUR CONTACT INFO</h3>
              <div className={styles.form}>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className={styles.input}
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className={styles.input}
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Discount Code (optional)"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value.toUpperCase())}
                />
                <textarea
                  className={styles.textarea}
                  placeholder="Any questions or notes? (optional)"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
                <button
                  className={`btn btn-primary ${styles.nextBtn}`}
                  onClick={() => setStep(6)}
                  disabled={!name || !email || !phone}
                >
                  NEXT
                </button>
              </div>
              <button className={styles.backBtn} onClick={() => setStep(4)}>← Back</button>
            </div>
          )}

          {step === 6 && (
            <div className={styles.stepContent}>
              <div className={styles.confirm}>
                <h3 className={styles.stepTitle}>CONFIRM YOUR REQUEST</h3>
                <div className={styles.summary}>
                  <div className={styles.summaryRow}><span>Launch</span><span>{launchLocation}</span></div>
                  <div className={styles.summaryRow}><span>Type</span><span>{fishingType === 'inshore' ? 'Inshore' : 'Nearshore & Offshore'}</span></div>
                  <div className={styles.summaryRow}><span>Trip</span><span>{selectedTrip}</span></div>
                  <div className={styles.summaryRow}><span>Date</span><span>{date ? date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : ''}</span></div>
                  <div className={styles.summaryRow}><span>Time</span><span>{time}</span></div>
                  <div className={styles.summaryRow}><span>Name</span><span>{name}</span></div>
                  <div className={styles.summaryRow}><span>Email</span><span>{email}</span></div>
                  <div className={styles.summaryRow}><span>Phone</span><span>{phone}</span></div>
                  {discountCode && (
                    <div className={styles.summaryRow}><span>Discount</span><span className={styles.discountCode}>{discountCode}</span></div>
                  )}
                  <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
                    <span>Trip Price</span>
                    <span>${selectedPrice}{discountCode === 'FISH50' ? <span className={styles.discountNote}> (-$50)</span> : ''}</span>
                  </div>
                </div>
                <button
                  className={`btn btn-primary ${styles.payBtn}`}
                  onClick={handleSubmitRequest}
                  disabled={submitting}
                >
                  {submitting ? 'SUBMITTING...' : 'REQUEST TO BOOK'}
                </button>
                <p className={styles.secureNote}>We&apos;ll call you to confirm your booking</p>
              </div>
              <button className={styles.backBtn} onClick={() => setStep(5)}>← Back</button>
            </div>
          )}

          {step === 7 && (
            <div className={styles.stepContent}>
              <div className={styles.success}>
                <div className={styles.successIcon}>
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <h3 className={styles.stepTitle}>REQUEST RECEIVED!</h3>
                <p className={styles.successText}>
                  Thanks, {name.split(' ')[0]}! We&apos;ve received your booking request.
                </p>
                <p className={styles.successSubtext}>
                  Captain CJ will call you at <strong>{phone}</strong> from <strong>(412) 979-4505</strong> to confirm your trip details and availability.
                </p>
                <button className={`btn btn-primary ${styles.doneBtn}`} onClick={close}>
                  DONE
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      )}
    </>
  )
}
