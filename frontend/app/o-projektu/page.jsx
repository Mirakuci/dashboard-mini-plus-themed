export default function Page() {
  return (
    <main className="container py-4">
      <h1 className="mb-3">O projektu</h1>

      <p className="text-muted">
        Ukázkový full-stack dashboard pro analytiku a KPI metriky.
      </p>

      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Technologie</h5>
          <ul className="mb-0">
            <li>Frontend: Next.js 15, React, Bootstrap</li>
            <li>Backend: FastAPI (Python)</li>
            <li>Grafy: Recharts</li>
            <li>API: REST (proxy přes Next.js)</li>
          </ul>
        </div>
      </div>

      <p className="mt-3">
        Dashboard zobrazuje KPI (users, revenue, orders, conversion) včetně trendů a časovou řadu návštěvnosti.
      </p>
    </main>
  )
}