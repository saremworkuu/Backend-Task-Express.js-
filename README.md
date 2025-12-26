# Simple Express MVC Server

A minimal Express.js server following a beginner-friendly MVC structure with JSON responses.

## Run

```bash
npm install
npm run dev
# Server: http://localhost:4000
# Base API: http://localhost:4000/api
```

## Endpoints

- GET /api/ — Home welcome
- GET /api/about — About info
- GET /api/contact — Contact info
- GET /api/time — Dynamic time data
- POST /api/echo — Echo JSON body back
- POST /api/contact — Create contact (validates `{ name, email, message? }`)

All responses are JSON. Unknown routes return 404 JSON.
