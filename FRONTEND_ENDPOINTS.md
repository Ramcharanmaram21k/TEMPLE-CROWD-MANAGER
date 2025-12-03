# Frontend Endpoints - Essential API Requirements

## 🎯 Critical Endpoints for Frontend Integration

These are the **6 essential endpoints** the backend team needs to implement for the frontend to work:

---

## 1. Main Dashboard Stats
**Endpoint:** `GET /dashboard/stats`

**What I Need:**
```json
{
  "realTimeCrowdDensity": 2847,
  "activeAlerts": 3,
  "openGates": 5,
  "totalGates": 6,
  "currentCapacity": 75
}
```

**Why:** Powers the top stat cards on the dashboard (Crowd Density, Active Alerts, Open Gates).

---

## 2. Heatmap Data
**Endpoint:** `GET /dashboard/heatmap`

**What I Need:**
```json
[
  {
    "x": 10,
    "y": 20,
    "intensity": 85,
    "label": "Maha Mandapam"
  }
]
```

**Why:** Powers the visual heatmap on the temple layout (the "wow" factor visualization).

---

## 3. Gate Control - List Gates
**Endpoint:** `GET /gates`

**What I Need:**
```json
[
  {
    "id": 1,
    "name": "Maha Mandapam Gate",
    "status": "open",
    "location": "Main Entrance",
    "capacity": 500
  }
]
```

**Why:** Shows the list of gates with their current status.

---

## 4. Gate Control - Toggle Gate
**Endpoint:** `POST /gates/:id/toggle`

**What I Need:**
- Request: Just the gate ID in the URL
- Response:
```json
{
  "id": 1,
  "status": "closed",
  "previousStatus": "open"
}
```

**Why:** Makes the Open/Close buttons actually work when clicked.

---

## 5. Chatbot (Devotee Assistance)
**Endpoint:** `POST /chatbot/message`

**What I Need:**
- Request Body:
```json
{
  "message": "What are the temple timings?",
  "language": "en"
}
```

- Response:
```json
{
  "response": "The temple is open from 5:00 AM to 10:00 PM daily."
}
```

**Why:** Sends user message string, gets response string back. Simple question-answer.

---

## 6. Public Safety - PA System Broadcast
**Endpoint:** `POST /pa-system/broadcast`

**What I Need:**
- Request Body:
```json
{
  "message": "Emergency announcement text here",
  "type": "emergency"
}
```

- Response:
```json
{
  "success": true,
  "message": "Broadcast sent successfully"
}
```

**Why:** Makes the big red "TRIGGER EMERGENCY ANNOUNCEMENT" button actually work.

---

## 7. Alerts List
**Endpoint:** `GET /dashboard/alerts`

**What I Need:**
```json
[
  {
    "id": 1,
    "type": "crowd_surge",
    "message": "High density detected at Maha Mandapam Gate",
    "severity": "high",
    "timestamp": "2024-12-03T10:45:00Z"
  }
]
```

**Why:** Shows the list of critical warnings/alerts on the dashboard.

---

## 📝 Notes for Backend Team

- **Authentication:** All endpoints should accept Bearer token in `Authorization` header
- **CORS:** Enable CORS for frontend domain
- **Error Format:** Return `{ "success": false, "error": "message" }` on errors
- **Success Format:** Return `{ "success": true, "data": {...} }` on success
- **Timestamps:** Use ISO 8601 format (UTC)

---

## 🚀 Priority Order

1. **GET /dashboard/stats** - Critical (dashboard won't work without it)
2. **GET /dashboard/alerts** - Critical (alerts won't show)
3. **GET /gates** - High (gate control page needs it)
4. **POST /gates/:id/toggle** - High (buttons need to work)
5. **GET /dashboard/heatmap** - Medium (visualization can wait)
6. **POST /chatbot/message** - Medium (chatbot is nice-to-have)
7. **POST /pa-system/broadcast** - Medium (PA system is important but not blocking)

---

**That's it!** These 7 endpoints are all I need to make the frontend fully functional. 🎯

