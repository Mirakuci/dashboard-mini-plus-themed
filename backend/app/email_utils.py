import os, smtplib
from email.mime.text import MIMEText
from email.utils import formataddr

SMTP_HOST = os.getenv("SMTP_HOST", "")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USER = os.getenv("SMTP_USER", "")
SMTP_PASS = os.getenv("SMTP_PASS", "")
SMTP_FROM = os.getenv("SMTP_FROM", SMTP_USER or "noreply@example.com")
SMTP_TO   = os.getenv("SMTP_TO", SMTP_USER or "owner@example.com")

def send_mail(subject: str, body: str):
    if not SMTP_HOST or not SMTP_USER or not SMTP_PASS:
        print("[email] SMTP not configured, skipping send.")
        return False
    msg = MIMEText(body, "plain", "utf-8")
    msg["Subject"] = subject
    msg["From"] = formataddr(("Web App", SMTP_FROM))
    msg["To"] = SMTP_TO
    with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as s:
        s.starttls()
        s.login(SMTP_USER, SMTP_PASS)
        s.send_message(msg)
    return True
