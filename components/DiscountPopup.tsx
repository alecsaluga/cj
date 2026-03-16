'use client'

import { useState, useEffect } from 'react'
import styles from './DiscountPopup.module.css'

const DISCOUNT_CODE = 'FISH50'
const WEBHOOK_URL = 'https://n8n.alecautomations.com/webhook/58bb30ce-1542-4ddf-9586-87d544f396a7'

export function DiscountPopup() {
  const [show, setShow] = useState(false)
  const [step, setStep] = useState<'offer' | 'email' | 'code'>('offer')
  const [email, setEmail] = useState('')
  const [copied, setCopied] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    // Check if user has already seen/dismissed the popup
    const hasSeenPopup = localStorage.getItem('discountPopupSeen')
    if (!hasSeenPopup) {
      // Show popup after a short delay
      const timer = setTimeout(() => setShow(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleDecline = () => {
    localStorage.setItem('discountPopupSeen', 'declined')
    setShow(false)
  }

  const handleAccept = () => {
    setStep('email')
  }

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setSubmitting(true)
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          discountCode: DISCOUNT_CODE,
          timestamp: new Date().toISOString()
        }),
      })
    } catch (error) {
      console.error('Webhook error:', error)
    }

    localStorage.setItem('discountPopupSeen', 'claimed')
    localStorage.setItem('discountCode', DISCOUNT_CODE)
    setSubmitting(false)
    setStep('code')
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(DISCOUNT_CODE)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Copy failed:', err)
    }
  }

  const handleClose = () => {
    setShow(false)
  }

  if (!show) return null

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeBtn} onClick={handleClose} aria-label="Close">
          &times;
        </button>

        {step === 'offer' && (
          <div className={styles.content}>
            <div className={styles.badge}>LIMITED OFFER</div>
            <h2 className={styles.title}>$50 OFF</h2>
            <p className={styles.subtitle}>YOUR FIRST CHARTER</p>
            <p className={styles.description}>
              Get $50 off your first fishing trip with Captain CJ!
            </p>
            <div className={styles.buttons}>
              <button className={styles.yesBtn} onClick={handleAccept}>
                YES, I WANT $50 OFF
              </button>
              <button className={styles.noBtn} onClick={handleDecline}>
                No thanks, I don&apos;t want a discount
              </button>
            </div>
          </div>
        )}

        {step === 'email' && (
          <div className={styles.content}>
            <h2 className={styles.titleSmall}>CLAIM YOUR $50 OFF</h2>
            <p className={styles.description}>
              Enter your email to receive your discount code
            </p>
            <form onSubmit={handleSubmitEmail} className={styles.form}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                required
              />
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={submitting}
              >
                {submitting ? 'SENDING...' : 'GET MY CODE'}
              </button>
            </form>
          </div>
        )}

        {step === 'code' && (
          <div className={styles.content}>
            <div className={styles.successIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
            </div>
            <h2 className={styles.titleSmall}>HERE&apos;S YOUR CODE!</h2>
            <div className={styles.codeBox}>
              <span className={styles.code}>{DISCOUNT_CODE}</span>
              <button className={styles.copyBtn} onClick={handleCopy}>
                {copied ? 'COPIED!' : 'COPY'}
              </button>
            </div>
            <p className={styles.instructions}>
              Copy and use this during your request to book for $50 off.
              <br />
              <strong>We&apos;ll email it to you too!</strong>
            </p>
            <button className={styles.doneBtn} onClick={handleClose}>
              START BOOKING
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
