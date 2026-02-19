'use client'

import { useEffect, useMemo, useState } from 'react'
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
  return new Intl.NumberFormat('cs-CZ', { style: 'currency', currency: 'CZK' }).format(n)
}

function getKpiValue(kpiItem, fallback = 0) {
  if (kpiItem == null) return fallback
  if (typeof kpiItem === 'number') return kpiItem
  if (typeof kpiItem === 'object' && 'value' in kpiItem) return Number(kpiItem.value) || fallback
  return fallback
}

function getKpiTrend(kpiItem) {
  if (kpiItem == null) return null
  if (typeof kpiItem === 'object' && 'trend' in kpiItem) {
    const t = Number(kpiItem.trend)
    return Number.isFinite(t) ? t : null
  }
  return null
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
  const [stats, setStats] = useState([])
  const [kpi, setKpi] = useState({
    users: { value: 0, trend: 0 },
    revenue: { value: 0, trend: 0 },
    orders: { value: 0, trend: 0 },
    conversion: { value: 0, trend: 0 }
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let alive = true

    async function load() {
      try {
        const [statsRes, kpiRes] = await Promise.all([
          fetch('/api/stats'),
          fetch('/api/kpi')
        ])

        const [statsData, kpiData] = await Promise.all([
          statsRes.json(),
          kpiRes.json()
        ])

        if (!alive) return

        setStats(Array.isArray(statsData) ? statsData : [])
        setKpi(kpiData || kpi)
      } catch (e) {
        console.error('Load error:', e)
      } finally {
        if (alive) setLoading(false)
      }
    }

    load()
    return () => { alive = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const average = useMemo(() => {
    if (!stats.length) return 0
    const sum = stats.reduce((s, i) => s + (Number(i.visits) || 0), 0)
    return Math.round(sum / stats.length)
  }, [stats])

  const usersValue = getKpiValue(kpi.users, 0)
  const usersTrend = getKpiTrend(kpi.users)

  const revenueValue = getKpiValue(kpi.revenue, 0)
  const revenueTrend = getKpiTrend(kpi.revenue)

  const ordersValue = getKpiValue(kpi.orders, 0)
  const ordersTrend = getKpiTrend(kpi.orders)

  const convValue = getKpiValue(kpi.conversion, 0)
  const convTrend = getKpiTrend(kpi.conversion)

  return (
    <main className="container py-4">
      <h1 className="mb-4">Dashboard (demo)</h1>

      {/* KPI CARDS */}
      <div className="row g-3 mb-4">
        <div className="col-6 col-md-3">
          <div className="card shadow border-0 h-100">
            <div className="card-body" style={{ padding: '14px 16px' }}>
              <div className="text-muted small" style={{ letterSpacing: '.2px' }}>Users</div>
              <div className="fs-4 fw-bold" style={{ lineHeight: 1.1 }}>
                {loading ? '…' : formatNumber(usersValue)}
              </div>
              {!loading && <Trend value={usersTrend} />}
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="card shadow border-0 h-100">
            <div className="card-body" style={{ padding: '14px 16px' }}>
              <div className="text-muted small" style={{ letterSpacing: '.2px' }}>Revenue</div>
              <div className="fs-4 fw-bold" style={{ lineHeight: 1.1 }}>
                {loading ? '…' : formatCurrencyCZK(revenueValue)}
              </div>
              {!loading && <Trend value={revenueTrend} />}
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="card shadow border-0 h-100">
            <div className="card-body" style={{ padding: '14px 16px' }}>
              <div className="text-muted small" style={{ letterSpacing: '.2px' }}>Orders</div>
              <div className="fs-4 fw-bold" style={{ lineHeight: 1.1 }}>
                {loading ? '…' : formatNumber(ordersValue)}
              </div>
              {!loading && <Trend value={ordersTrend} />}
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="card shadow border-0 h-100">
            <div className="card-body" style={{ padding: '14px 16px' }}>
              <div className="text-muted small" style={{ letterSpacing: '.2px' }}>Conversion</div>
              <div className="fs-4 fw-bold" style={{ lineHeight: 1.1 }}>
                {loading ? '…' : `${convValue}%`}
              </div>
              {!loading && <Trend value={convTrend} />}
            </div>
          </div>
        </div>
      </div>

      {/* CHART + SUMMARY */}
      <div className="row g-3">
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Návštěvnost</h5>

              <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                  <LineChart data={stats}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="visits"
                      stroke="#0d6efd"
                      strokeWidth={2}
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