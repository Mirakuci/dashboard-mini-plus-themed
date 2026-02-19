from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from .email_utils import send_mail

app = FastAPI(title="dashboard-api")

# CORS – povolí frontend na localhost:3000
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)

# =========================
# STATS endpoint (graf)
# =========================
@app.get("/api/stats")
def stats():
    return [
        {"day": f"D{i}", "visits": v}
        for i, v in enumerate(
            [120, 160, 90, 200, 180, 240, 300, 260, 190, 220],
            start=1,
        )
    ]


# =========================
# KPI endpoint (value + trend)
# =========================
@app.get("/api/kpi")
def get_kpi():
    return {
        "users": {"value": 1284, "trend": 12.5},
        "revenue": {"value": 84520, "trend": 8.2},   # Kč
        "orders": {"value": 312, "trend": -3.1},
        "conversion": {"value": 3.8, "trend": 1.4},  # %
    }


# =========================
# Feedback endpoint
# =========================
@app.post("/api/feedback")
async def feedback(req: Request):
    data = await req.json()
    send_mail(subject="Nová zpětná vazba", body=str(data))
    return {"ok": True}