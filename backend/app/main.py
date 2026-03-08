from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Dashboard API", version="1.0.0")

# Pro jistotu při vývoji (když bys někdy volal backend přímo z FE):
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

KPI_DATA = {
    "users": {"value": 1284, "trend": 12.5},
    "revenue": {"value": 84520, "trend": 8.2},
    "orders": {"value": 312, "trend": -3.1},
    "conversion": {"value": 3.8, "trend": 1.4},
}

STATS_DATA = [
    {"day": "D1", "visits": 120},
    {"day": "D2", "visits": 160},
    {"day": "D3", "visits": 90},
    {"day": "D4", "visits": 200},
    {"day": "D5", "visits": 180},
    {"day": "D6", "visits": 240},
    {"day": "D7", "visits": 300},
    {"day": "D8", "visits": 260},
    {"day": "D9", "visits": 190},
    {"day": "D10", "visits": 220},
]


@app.get("/health")
def health():
    return {"ok": True}


@app.get("/api/kpi")
def get_kpi():
    return KPI_DATA


@app.get("/api/stats")
def get_stats():
    return STATS_DATA