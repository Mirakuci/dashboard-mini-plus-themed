export default function PortfolioPage() {
  return (
    <section className="project-section">

      <div className="container">

        <h1 className="project-title">
          Dashboard Mini Plus
        </h1>

        <p className="project-subtitle">
          Moderní full-stack dashboard vytvořený v Next.js a FastAPI.
          Zobrazuje KPI metriky, analytiku a komunikuje s vlastním backend API.
        </p>

        <div className="project-hero">
          <img src="/projects/dashboard-mini/dashboard-mini-plus-overview.png" />
        </div>

        <div className="project-grid">

          <div className="project-block">
            <h3>Technologie</h3>

            <ul>
              <li>Next.js</li>
              <li>React</li>
              <li>FastAPI</li>
              <li>Python</li>
              <li>REST API</li>
              <li>Docker</li>
            </ul>

          </div>

          <div className="project-block">
            <h3>Backend API</h3>

            <img src="/projects/dashboard-mini/backend-fastapi-code.png" />
          </div>

          <div className="project-block">
            <h3>KPI endpoint</h3>

            <img src="/projects/dashboard-mini/backend-api-kpi.png" />
          </div>

          <div className="project-block">
            <h3>Stats endpoint</h3>

            <img src="/projects/dashboard-mini/backend-api-stats.png" />
          </div>

        </div>

        <div className="project-buttons">

          <a
            href="https://github.com/Mirakuci/dashboard-mini-plus-themed"
            target="_blank"
            className="btn-primary"
          >
            GitHub
          </a>

        </div>

      </div>

    </section>
  )
}