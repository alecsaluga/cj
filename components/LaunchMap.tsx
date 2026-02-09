'use client'

import { useEffect, useRef } from 'react'
import styles from './LaunchMap.module.css'

const LAUNCH_LOCATIONS = [
  { name: 'Jensen Beach', lng: -80.2284, lat: 27.2572 },
  { name: 'Fort Pierce', lng: -80.3256, lat: 27.4467 },
  { name: 'Stuart', lng: -80.2528, lat: 27.1975 },
]

export function LaunchMap() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapRef = useRef<unknown>(null)

  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return

    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN
    if (!token) return

    import('mapbox-gl').then((mapboxgl) => {
      mapboxgl.default.accessToken = token

      const map = new mapboxgl.default.Map({
        container: mapContainer.current!,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [-80.27, 27.3],
        zoom: 9.2,
        attributionControl: false,
      })

      map.addControl(new mapboxgl.default.AttributionControl({ compact: true }))

      LAUNCH_LOCATIONS.forEach((loc) => {
        const el = document.createElement('div')
        el.className = styles.marker

        const popup = new mapboxgl.default.Popup({ offset: 12, closeButton: false })
          .setHTML(`<span class="${styles.popupLabel}">${loc.name}</span>`)

        new mapboxgl.default.Marker(el)
          .setLngLat([loc.lng, loc.lat])
          .setPopup(popup)
          .addTo(map)
      })

      mapRef.current = map
    })

    return () => {
      if (mapRef.current) {
        ;(mapRef.current as { remove: () => void }).remove()
        mapRef.current = null
      }
    }
  }, [])

  return (
    <section className={`section bg-black ${styles.section}`}>
      <div className="container">
        <div className="text-center mb-xl">
          <h2 className={styles.headline}>STARTING LOCATIONS</h2>
          <p className={styles.sub}>
            You can launch out of any of these
          </p>
        </div>
      </div>
      <div ref={mapContainer} className={styles.map} />
    </section>
  )
}
