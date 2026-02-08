import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import { join } from 'path'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const heroData = await readFile(join(process.cwd(), 'public/hero.jpeg'))
  const heroBase64 = `data:image/jpeg;base64,${heroData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url(${heroBase64})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        {/* dark overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.55)',
            display: 'flex',
          }}
        />
        {/* content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
            padding: '0 80px',
          }}
        >
          <div
            style={{
              color: '#00D4FF',
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              marginBottom: 28,
            }}
          >
            TREASURE COAST • JENSEN BEACH, FL
          </div>
          <div
            style={{
              color: 'white',
              fontSize: 88,
              fontWeight: 900,
              lineHeight: 0.9,
              textAlign: 'center',
              textTransform: 'uppercase',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <span>1 FATHOM</span>
            <span>SPORTFISHING</span>
          </div>
          <div
            style={{
              color: '#00D4FF',
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              marginTop: 36,
            }}
          >
            BOOK YOUR CHARTER TODAY
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
