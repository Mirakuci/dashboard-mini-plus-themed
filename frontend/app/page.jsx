import Link from 'next/link'

export default function Page() {
  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div
            className="card shadow border-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(2,6,23,0.96), rgba(15,23,42,0.96))',
              color: 'white',
              borderRadius: '24px',
              overflow: 'hidden'
            }}
          >
            <div className="card-body p-4 p-md-5">
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '8px 14px',
                  borderRadius: 999,
                  background: 'rgba(59,130,246,0.14)',
                  color: '#93c5fd',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  marginBottom: 18
                }}
              >
                Demo projekt
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3.4rem)',
                  lineHeight: 1.05,
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  marginBottom: 16
                }}
              >
                Dashboard mini
              </h1>

              <p
                style={{
                  color: 'rgba(255,255,255,0.78)',
                  fontSize: '1.08rem',
                  maxWidth: 760,
                  marginBottom: 28
                }}
              >
                Ukázkový dashboard projekt pro portfolio. Cílem je ukázat moderní UI,
                práci s KPI kartami, grafem návštěvnosti a připraveností na napojení
                backendu a reálných dat.
              </p>

              <div className="d-flex flex-wrap gap-2 mb-4">
                {['Next.js', 'Recharts', 'Bootstrap', 'Demo data'].map((item) => (
                  <span
                    key={item}
                    style={{
                      padding: '8px 12px',
                      borderRadius: 999,
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'rgba(255,255,255,0.88)',
                      fontSize: '0.92rem',
                      fontWeight: 600
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="d-flex flex-wrap gap-3">
                <Link href="/dashboard" className="btn btn-primary btn-lg">
                  Otevřít dashboard
                </Link>

                <Link href="/o-projektu" className="btn btn-outline-light btn-lg">
                  O projektu
                </Link>

                <Link href="/kontakt" className="btn btn-outline-light btn-lg">
                  Kontakt
                </Link>
              </div>
            </div>
          </div>

          <div className="row g-3 mt-3">
            <div className="col-md-4">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body">
                  <div className="text-muted small mb-2">Co ukazuje</div>
                  <h3 className="h5 mb-2">UI dashboardu</h3>
                  <p className="mb-0 text-muted">
                    KPI karty, layout, práce s obsahem, přehled a čitelnost na desktopu i mobilu.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body">
                  <div className="text-muted small mb-2">Pro portfolio</div>
                  <h3 className="h5 mb-2">Live demo</h3>
                  <p className="mb-0 text-muted">
                    Projekt běží online a je připravený jako ukázka pro klienty i budoucí rozšíření.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body">
                  <div className="text-muted small mb-2">Další krok</div>
                  <h3 className="h5 mb-2">Napojení backendu</h3>
                  <p className="mb-0 text-muted">
                    Aktuálně používá demo data. Později lze připojit reálné API a autentizaci.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}