'use client'

import { useMemo, useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts'

function formatNumber(n) {
  return new Intl.NumberFormat('cs-CZ').format(n)
}

function formatCurrencyCZK(n) {
  return new Intl.NumberFormat('cs-CZ', {
    style: 'currency',
    currency: 'CZK'
  }).format(n)
}

function Trend({ value }) {
  if (value == null) return null
  const isUp = value >= 0
  const color = isUp ? '#22c55e' : '#ef4444'
  const arrow = isUp ? '↑' : '↓'

  return (
    <div style={{ color, fontSize: '0.9rem', marginTop: 6 }}>
      {arrow} {Math.abs(value)}%
    </div>
  )
}

export default function Page() {
  const [stats] = useState([
    { day: 'Po', visits: 120 },
    { day: 'Út', visits: 180 },
    { day: 'St', visits: 150 },
    { day: 'Čt', visits: 210 },
    { day: 'Pá', visits: 260 },
    { day: 'So', visits: 190 },
    { day: 'Ne', visits: 170 }
  ])

  const [kpi] = useState({
    users: { value: 1248, trend: 12 },
    revenue: { value: 58240, trend: 8 },
    orders: { value: 94, trend: 11 },
    conversion: { value: 4.7, trend: 2 }
  })

  const average = useMemo(() => {
    if (!stats.length) return 0
    const sum = stats.reduce((s, i) => s + (Number(i.visits) || 0), 0)
    return Math.round(sum / stats.length)
  }, [stats])

  return (
    <main className="container py-4">
      <h1 className="mb-2">Dashboard (demo)</h1>
      <p className="text-muted mb-4">Ukázkový dashboard s demo daty pro portfolio.</p>

      <div className="row g-3 mb-4">
        <div className="col-6 col-md-3">
          <div className="card shadow border-0 h-100">
            <div className="card-body" style={{ padding: '14px 16px' }}>
              <div className="text-muted small" style={{ letterSpacing: '.2px' }}>Users</div>
              <div className="fs-4 fw-bold" style={{ lineHeight: 1.1 }}>
                {formatNumber(kpi.users.value)}
              </div>
              <Trend value={kpi.users.trend} />
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="card shadow border-0 h-100">
            <div className="card-body" style={{ padding: '14px 16px' }}>
              <div className="text-muted small" style={{ letterSpacing: '.2px' }}>Revenue</div>
              <div className="fs-4 fw-bold" style={{ lineHeight: 1.1 }}>
                {formatCurrencyCZK(kpi.revenue.value)}
              </div>
              <Trend value={kpi.revenue.trend} />
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="card shadow border-0 h-100">
            <div className="card-body" style={{ padding: '14px 16px' }}>
              <div className="text-muted small" style={{ letterSpacing: '.2px' }}>Orders</div>
              <div className="fs-4 fw-bold" style={{ lineHeight: 1.1 }}>
                {formatNumber(kpi.orders.value)}
              </div>
              <Trend value={kpi.orders.trend} />
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="card shadow border-0 h-100">
            <div className="card-body" style={{ padding: '14px 16px' }}>
              <div className="text-muted small" style={{ letterSpacing: '.2px' }}>Conversion</div>
              <div className="fs-4 fw-bold" style={{ lineHeight: 1.1 }}>
                {kpi.conversion.value}%
              </div>
              <Trend value={kpi.conversion.trend} />
            </div>
          </div>
        </div>
      </div>

      <div className="row g-3">
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Návštěvnost</h5>

              <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={stats}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="day" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="visits"
                      stroke="#38bdf8"
                      strokeWidth={3}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Souhrn</h5>
              <ul className="list-unstyled mb-0">
                <li>Průměrná návštěvnost: <strong>{average}</strong></li>
                <li>Dny: <strong>{stats.length}</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}