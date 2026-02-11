'use client'

import { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styles from './BookingModal.module.css'

const LAUNCH_LOCATIONS = ['Jensen Beach', 'Fort Pierce', 'Stuart', 'Other']

const INSHORE_TRIPS = [
  { title: '4 Hour Inshore Fishing', price: 400, display: '$400' },
  { title: '6 Hour Inshore Fishing', price: 550, display: '$550' },
]

const NEARSHORE_TRIPS = [
  { title: '4 Hour Nearshore Fishing', price: 450, display: '$450', note: 'Seasonal: Apr 1 – Sep 1' },
  { title: '6 Hour Offshore/Nearshore', price: 600, display: '$600', note: 'Seasonal: Apr 1 – Sep 1' },
]

const TIME_SLOTS = [
  '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM',
  '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'
]

type Step = 1 | 2 | 3 | 4 | 5 | 6

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
  const [phone, setPhone] = useState('')
  const [notes, setNotes] = useState('')

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
      setPhone('')
      setNotes('')
    }
    window.addEventListener('openBookingModal', handler)
    return () => window.removeEventListener('openBookingModal', handler)
  }, [])

  const close = () => setOpen(false)

  const trips = fishingType === 'inshore' ? INSHORE_TRIPS : NEARSHORE_TRIPS

  const handlePayment = async () => {
    // Store booking data in localStorage for webhook after Stripe redirect
    const bookingData = {
      launchLocation,
      fishingType: fishingType === 'inshore' ? 'Inshore' : 'Nearshore & Offshore',
      trip: selectedTrip,
      price: selectedPrice,
      date: date ? date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '',
      time,
      name,
      phone,
      notes,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem('pendingBooking', JSON.stringify(bookingData))

    // Stripe Payment Links
    const stripeLinks: Record<number, string> = {
      400: 'https://buy.stripe.com/28E6oH1NUdkMepR6zP0gw0h',
      450: 'https://buy.stripe.com/28E00jeAG3KcchJ3nD0gw0k',
      550: 'https://buy.stripe.com/cNi8wP8ci94w3Ld4rH0gw0l',
      600: 'https://buy.stripe.com/00wbJ1akqbcE1D58HX0gw0i',
    }

    const stripeUrl = stripeLinks[selectedPrice]
    if (stripeUrl) {
      window.location.href = stripeUrl
    }
  }

  // Redirect to confirmation page after successful payment
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get('payment') === 'success') {
      window.location.href = '/booking-confirmation'
    }
  }, [])

  if (!open) return null

  return (
    <>
      {/* Floating Call Button */}
      <a href="tel:4129794505" className={styles.floatingCall} aria-label="Call now">
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
        </svg>
      </a>

      <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && close()}>
        <div className={styles.modal}>
          <button className={styles.closeBtn} onClick={close} aria-label="Close">✕</button>

          <div className={styles.progress}>
            {[1, 2, 3, 4, 5, 6].map((s) => (
              <div key={s} className={`${styles.dot} ${step >= s ? styles.dotActive : ''}`} />
            ))}
          </div>

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
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
                  disabled={!name || !phone}
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
                <h3 className={styles.stepTitle}>CONFIRM & PAY</h3>
                <div className={styles.summary}>
                  <div className={styles.summaryRow}><span>Launch</span><span>{launchLocation}</span></div>
                  <div className={styles.summaryRow}><span>Type</span><span>{fishingType === 'inshore' ? 'Inshore' : 'Nearshore & Offshore'}</span></div>
                  <div className={styles.summaryRow}><span>Trip</span><span>{selectedTrip}</span></div>
                  <div className={styles.summaryRow}><span>Date</span><span>{date ? date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : ''}</span></div>
                  <div className={styles.summaryRow}><span>Time</span><span>{time}</span></div>
                  <div className={styles.summaryRow}><span>Name</span><span>{name}</span></div>
                  <div className={styles.summaryRow}><span>Phone</span><span>{phone}</span></div>
                  <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
                    <span>Total</span>
                    <span>${selectedPrice}</span>
                  </div>
                </div>
                <button className={`btn btn-primary ${styles.payBtn}`} onClick={handlePayment}>
                  PAY ${selectedPrice}
                </button>
                <p className={styles.secureNote}>Secure payment via Stripe</p>
              </div>
              <button className={styles.backBtn} onClick={() => setStep(5)}>← Back</button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
