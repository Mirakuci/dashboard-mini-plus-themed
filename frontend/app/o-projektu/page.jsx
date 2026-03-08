export default function Page() {
  return (
    <main className="container py-4">
      <h1>O projektu</h1>

      <p className="text-muted">
        Tento dashboard je ukázkový projekt vytvořený pomocí moderních technologií:
      </p>

      <ul>
        <li>Next.js 15 (frontend)</li>
        <li>FastAPI (backend API)</li>
        <li>Recharts (grafy)</li>
        <li>Bootstrap (layout)</li>
      </ul>

      <p>
        Dashboard zobrazuje KPI metriky, trendy a analytická data z backend API.
        Projekt demonstruje schopnost vytvořit plnohodnotnou webovou aplikaci
        včetně frontend, backend a integrace API.
      </p>
    </main>
  )
}