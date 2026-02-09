'use client'

import { useState, useEffect } from 'react'
import styles from './BookingModal.module.css'

const LAUNCH_LOCATIONS = ['Jensen Beach', 'Fort Pierce', 'Stuart', 'Other']

const INSHORE_TRIPS = [
  { title: '4 Hour Inshore Fishing', price: '$400' },
  { title: '6 Hour Inshore Fishing', price: '$550' },
]

const NEARSHORE_TRIPS = [
  { title: '4 Hour Nearshore Fishing', price: '$450', note: 'Seasonal: Apr 1 – Sep 1' },
  { title: '6 Hour Offshore/Nearshore', price: '$600', note: 'Seasonal: Apr 1 – Sep 1' },
]

type Step = 1 | 2 | 3 | 4 | 5

export function BookingModal() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState<Step>(1)
  const [launchLocation, setLaunchLocation] = useState('')
  const [fishingType, setFishingType] = useState('')
  const [selectedTrip, setSelectedTrip] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [notes, setNotes] = useState('')

  useEffect(() => {
    const handler = () => {
      setOpen(true)
      setStep(1)
      setLaunchLocation('')
      setFishingType('')
      setSelectedTrip('')
      setName('')
      setPhone('')
      setDate('')
      setNotes('')
    }
    window.addEventListener('openBookingModal', handler)
    return () => window.removeEventListener('openBookingModal', handler)
  }, [])

  const close = () => setOpen(false)

  const trips = fishingType === 'inshore' ? INSHORE_TRIPS : NEARSHORE_TRIPS

  if (!open) return null

  return (
    <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && close()}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={close} aria-label="Close">✕</button>

        <div className={styles.progress}>
          {[1, 2, 3, 4].map((s) => (
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
                  onClick={() => { setSelectedTrip(t.title); setStep(4) }}
                >
                  <span className={styles.optionName}>{t.title}</span>
                  <span className={styles.optionPrice}>{t.price}</span>
                  {'note' in t && <span className={styles.optionSub}>{(t as { note: string }).note}</span>}
                </button>
              ))}
            </div>
            <button className={styles.backBtn} onClick={() => setStep(2)}>← Back</button>
          </div>
        )}

        {step === 4 && (
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>YOUR DETAILS</h3>
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
              <input
                className={styles.input}
                type="date"
                placeholder="Preferred Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <textarea
                className={styles.textarea}
                placeholder="Any questions or notes?"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
              <a
                href={`tel:5551234567`}
                className={`btn btn-primary ${styles.submitBtn}`}
                onClick={() => setStep(5)}
              >
                CALL TO BOOK
              </a>
            </div>
            <button className={styles.backBtn} onClick={() => setStep(3)}>← Back</button>
          </div>
        )}

        {step === 5 && (
          <div className={styles.stepContent}>
            <div className={styles.confirm}>
              <div className={styles.confirmIcon}>✓</div>
              <h3 className={styles.stepTitle}>YOU&apos;RE ALL SET</h3>
              <p className={styles.confirmText}>
                Captain CJ will reach out to confirm your booking.
              </p>
              <div className={styles.summary}>
                <div className={styles.summaryRow}><span>Launch</span><span>{launchLocation}</span></div>
                <div className={styles.summaryRow}><span>Type</span><span>{fishingType === 'inshore' ? 'Inshore' : 'Nearshore & Offshore'}</span></div>
                <div className={styles.summaryRow}><span>Trip</span><span>{selectedTrip}</span></div>
                {date && <div className={styles.summaryRow}><span>Date</span><span>{date}</span></div>}
              </div>
              <button className={`btn btn-primary ${styles.doneBtn}`} onClick={close}>DONE</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
