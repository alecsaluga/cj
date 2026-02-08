'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './FishingTypes.module.css'

const inshoreFish = [
  { name: 'Tarpon', src: '/fish/inshore/tarpon.png' },
  { name: 'Snook', src: '/fish/inshore/snapper.jpeg' },
  { name: 'Pompano', src: '/fish/inshore/pompano.png' },
  { name: 'Permit', src: '/fish/inshore/permit.jpeg' },
  { name: 'Bonefish', src: '/fish/inshore/bonefish.png' },
  { name: 'Sheepshead', src: '/fish/inshore/sheepshead.jpeg' },
  { name: 'Black Drum', src: '/fish/inshore/blackdrum.png' },
]

const nearshoreFish = [
  { name: 'Mahi Mahi', src: '/fish/nearshore/mahi-mahi.png' },
  { name: 'Sailfish', src: '/fish/nearshore/sailfish.png' },
  { name: 'Kingfish', src: '/fish/nearshore/kingmackereal.png' },
  { name: 'Grouper', src: '/fish/nearshore/grouper.jpeg' },
  { name: 'Wahoo', src: '/fish/nearshore/wahoo.jpeg' },
  { name: 'Blackfin Tuna', src: '/fish/nearshore/blackfin-tuna.jpeg' },
  { name: 'Bonito', src: '/fish/nearshore/bonito.jpeg' },
  { name: 'Barracuda', src: '/fish/nearshore/barracuda.png' },
]

type Tab = 'inshore' | 'nearshore'

export function FishingTypes() {
  const [activeTab, setActiveTab] = useState<Tab>('inshore')

  const fish = activeTab === 'inshore' ? inshoreFish : nearshoreFish

  return (
    <section className={`section bg-black ${styles.section}`}>
      <div className="container">
        <div className="text-center mb-xl">
          <h2 className={styles.headline}>TYPES OF TRIPS</h2>
        </div>

        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'inshore' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('inshore')}
          >
            INSHORE
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'nearshore' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('nearshore')}
          >
            NEARSHORE &amp; OFFSHORE
          </button>
        </div>

        <div className={styles.content}>
          {activeTab === 'inshore' ? (
            <p className={styles.desc}>
              Inside the coastline — estuaries such as the St. Lucie River,
              Indian River Lagoon, and Intracoastal Waterway.
            </p>
          ) : (
            <p className={styles.desc}>
              Nearshore is in the ocean within 3 miles of shore.
              Offshore is more than 3 miles out.
            </p>
          )}

          <div className={styles.gallery}>
            {fish.map((f) => (
              <div key={f.name} className={styles.fishCard}>
                <div className={styles.fishImageWrap}>
                  <Image
                    src={f.src}
                    alt={f.name}
                    fill
                    className={styles.fishImage}
                  />
                </div>
                <p className={styles.fishLabel}>{f.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
