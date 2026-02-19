import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Dashboard demo',
  description: 'Demo dashboard (Next.js + FastAPI)',
}

const linkStyle = {
  color: '#cbd5e1',
  textDecoration: 'none',
  fontWeight: 600,
  padding: '8px 12px',
  borderRadius: 10,
}

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body>
        <header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 50,
            background: 'rgba(6,12,26,0.65)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div
            className="container"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between', // ✅ menu doprava
              gap: 16,
              padding: '14px 0',
            }}
          >
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                textDecoration: 'none',
              }}
            >
              <span
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 10,
                  background: '#2563eb',
                  boxShadow: '0 10px 30px rgba(37,99,235,0.25)',
                }}
              />
              <span style={{ color: '#e5e7eb', fontWeight: 700, letterSpacing: '.2px' }}>
                Dashboard demo
              </span>
            </Link>

            <nav style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Link href="/" style={linkStyle}>Domů</Link>
              <Link href="/o-projektu" style={linkStyle}>O projektu</Link>
              <Link href="/kontakt" style={linkStyle}>Kontakt</Link>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  )
}