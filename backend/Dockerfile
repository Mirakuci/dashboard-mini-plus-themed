FROM python:3.11-slim
WORKDIR /app
COPY app /app/app
COPY ../data /app/data
RUN pip install --no-cache-dir fastapi "uvicorn[standard]"
ENV PYTHONUNBUFFERED=1
EXPOSE 8300
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8300"]
