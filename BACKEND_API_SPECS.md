# Backend API Specifications
## AI-Enabled Intelligent Crowd Management Platform - Kanaka Durga Temple

**Version:** 1.0.0  
**Base URL:** `https://api.temple-crowd-manager.com/api` (Production)  
**Base URL:** `http://localhost:3000/api` (Development)

---

## Authentication

All protected endpoints require authentication via Bearer token in the Authorization header:
```
Authorization: Bearer <token>
```

---

## 1. Dashboard API

### 1.1 Get Dashboard Statistics
**Endpoint:** `GET /dashboard/stats`

**Description:** Returns real-time dashboard statistics including crowd density, alerts, and gate status.

**Response:**
```json
{
  "success": true,
  "data": {
    "realTimeCrowdDensity": 2847,
    "activeAlerts": 3,
    "openGates": 5,
    "totalGates": 6,
    "currentCapacity": 75,
    "lastUpdated": "2024-12-03T11:00:00Z"
  }
}
```

**Status Codes:**
- `200 OK`: Success
- `401 Unauthorized`: Invalid or missing token
- `500 Internal Server Error`: Server error

---

### 1.2 Get Active Alerts
**Endpoint:** `GET /dashboard/alerts`

**Description:** Retrieves all active alerts requiring attention.

**Query Parameters:**
- `severity` (optional): Filter by severity (`low`, `medium`, `high`)
- `limit` (optional): Maximum number of alerts to return (default: 50)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "type": "crowd_surge",
      "message": "High density detected at Maha Mandapam Gate",
      "severity": "high",
      "timestamp": "2024-12-03T10:45:00Z",
      "location": "Maha Mandapam Gate",
      "resolved": false
    }
  ]
}
```

---

### 1.3 Get Heatmap Data
**Endpoint:** `GET /dashboard/heatmap`

**Description:** Returns real-time heatmap data for temple layout visualization.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "x": 10,
      "y": 20,
      "intensity": 85,
      "label": "Maha Mandapam",
      "visitorCount": 450,
      "timestamp": "2024-12-03T11:00:00Z"
    }
  ]
}
```

---

## 2. Gate Management API

### 2.1 Get All Gates
**Endpoint:** `GET /gates`

**Description:** Retrieves list of all temple gates with their current status.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Maha Mandapam Gate",
      "status": "open",
      "location": "Main Entrance",
      "capacity": 500,
      "currentOccupancy": 450,
      "lastUpdated": "2024-12-03T11:00:00Z"
    }
  ]
}
```

---

### 2.2 Get Gate by ID
**Endpoint:** `GET /gates/:id`

**Description:** Retrieves detailed information about a specific gate.

**Path Parameters:**
- `id` (required): Gate ID

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Maha Mandapam Gate",
    "status": "open",
    "location": "Main Entrance",
    "capacity": 500,
    "currentOccupancy": 450,
    "operationalHours": {
      "open": "05:00",
      "close": "22:00"
    },
    "lastUpdated": "2024-12-03T11:00:00Z"
  }
}
```

---

### 2.3 Update Gate Status
**Endpoint:** `PATCH /gates/:id/status`

**Description:** Updates the status of a specific gate.

**Path Parameters:**
- `id` (required): Gate ID

**Request Body:**
```json
{
  "status": "open" | "closed",
  "reason": "string (optional)"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "status": "open",
    "updatedAt": "2024-12-03T11:05:00Z"
  }
}
```

---

### 2.4 Toggle Gate
**Endpoint:** `POST /gates/:id/toggle`

**Description:** Toggles gate status (open ↔ closed).

**Path Parameters:**
- `id` (required): Gate ID

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "status": "closed",
    "previousStatus": "open",
    "updatedAt": "2024-12-03T11:05:00Z"
  }
}
```

---

## 3. CCTV & Video Analytics API

### 3.1 Get All CCTV Feeds
**Endpoint:** `GET /cctv/feeds`

**Description:** Retrieves list of all CCTV feeds with analytics data.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Main Entrance",
      "location": "Maha Mandapam",
      "streamUrl": "rtsp://camera1.example.com/stream",
      "detected": 450,
      "status": "Crowd Surge",
      "lastUpdated": "2024-12-03T11:00:00Z",
      "isActive": true
    }
  ]
}
```

---

### 3.2 Get CCTV Feed by ID
**Endpoint:** `GET /cctv/feeds/:id`

**Description:** Retrieves detailed information about a specific CCTV feed.

**Path Parameters:**
- `id` (required): Feed ID

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Main Entrance",
    "location": "Maha Mandapam",
    "streamUrl": "rtsp://camera1.example.com/stream",
    "detected": 450,
    "status": "Crowd Surge",
    "analytics": {
      "density": 85,
      "movementDirection": "inward",
      "averageSpeed": 1.2
    },
    "lastUpdated": "2024-12-03T11:00:00Z"
  }
}
```

---

### 3.3 Get Feed Analytics
**Endpoint:** `GET /cctv/feeds/:id/analytics`

**Description:** Retrieves detailed analytics for a specific CCTV feed.

**Path Parameters:**
- `id` (required): Feed ID

**Query Parameters:**
- `startDate` (optional): Start date for analytics (ISO 8601)
- `endDate` (optional): End date for analytics (ISO 8601)

**Response:**
```json
{
  "success": true,
  "data": {
    "feedId": 1,
    "period": {
      "start": "2024-12-03T00:00:00Z",
      "end": "2024-12-03T11:00:00Z"
    },
    "metrics": {
      "peakDensity": 95,
      "averageDensity": 75,
      "totalDetections": 12500,
      "alerts": 3
    },
    "timeline": [
      {
        "timestamp": "2024-12-03T10:00:00Z",
        "density": 80,
        "detected": 400
      }
    ]
  }
}
```

---

## 4. Analytics API

### 4.1 Get Historical Footfall
**Endpoint:** `GET /analytics/footfall`

**Description:** Retrieves historical visitor footfall data.

**Query Parameters:**
- `startDate` (required): Start date (ISO 8601)
- `endDate` (required): End date (ISO 8601)
- `granularity` (optional): `day`, `week`, `month` (default: `day`)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "date": "2024-01-01",
      "visitors": 8500,
      "event": "New Year",
      "peakHour": 14,
      "averageDensity": 65
    }
  ]
}
```

---

### 4.2 Get Predictions
**Endpoint:** `GET /analytics/predictions`

**Description:** Retrieves AI-generated predictions for future footfall.

**Query Parameters:**
- `eventType` (optional): Filter by event type (e.g., `Dasara Festival`)
- `startDate` (optional): Start date for predictions (ISO 8601)
- `endDate` (optional): End date for predictions (ISO 8601)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "date": "2025-09-17",
      "predicted": 16000,
      "confidence": "high",
      "event": "Dasara Festival",
      "lowerBound": 14000,
      "upperBound": 18000,
      "factors": [
        "Historical data",
        "Event significance",
        "Weather forecast"
      ]
    }
  ]
}
```

---

### 4.3 Get Trends
**Endpoint:** `GET /analytics/trends`

**Description:** Retrieves trend analysis data.

**Query Parameters:**
- `period` (optional): `week`, `month`, `year` (default: `month`)

**Response:**
```json
{
  "success": true,
  "data": {
    "period": "month",
    "trend": "increasing",
    "changePercentage": 12.5,
    "peakDays": ["Monday", "Saturday", "Sunday"],
    "peakHours": [10, 14, 18],
    "recommendations": [
      "Increase capacity on weekends",
      "Extend operational hours during festivals"
    ]
  }
}
```

---

## 5. PA System API

### 5.1 Broadcast Message
**Endpoint:** `POST /pa-system/broadcast`

**Description:** Broadcasts an audio alert through the PA system.

**Request Body:**
```json
{
  "message": "Welcome to Kanaka Durga Temple. Please maintain decorum.",
  "type": "info" | "warning" | "announcement",
  "priority": "normal" | "high",
  "zones": ["all"] | ["gate1", "gate2"]
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "message": "Welcome to Kanaka Durga Temple. Please maintain decorum.",
    "type": "info",
    "status": "broadcasted",
    "timestamp": "2024-12-03T11:05:00Z"
  }
}
```

---

### 5.2 Emergency Announcement
**Endpoint:** `POST /pa-system/emergency`

**Description:** Triggers an emergency announcement across all PA systems.

**Request Body:**
```json
{
  "message": "Emergency evacuation in progress. Please follow instructions.",
  "priority": "critical"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 2,
    "message": "Emergency evacuation in progress. Please follow instructions.",
    "type": "emergency",
    "status": "broadcasted",
    "timestamp": "2024-12-03T11:10:00Z",
    "zones": ["all"]
  }
}
```

**Note:** This endpoint requires elevated permissions.

---

### 5.3 Get Broadcast History
**Endpoint:** `GET /pa-system/history`

**Description:** Retrieves history of PA system broadcasts.

**Query Parameters:**
- `limit` (optional): Maximum number of records (default: 50)
- `type` (optional): Filter by type
- `startDate` (optional): Start date filter
- `endDate` (optional): End date filter

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "message": "Welcome to Kanaka Durga Temple. Please maintain decorum.",
      "type": "info",
      "timestamp": "2024-12-03T10:55:00Z",
      "status": "completed"
    }
  ]
}
```

---

## 6. Chatbot API

### 6.1 Send Message
**Endpoint:** `POST /chatbot/message`

**Description:** Sends a message to the AI chatbot and receives a response.

**Request Body:**
```json
{
  "message": "What are the temple timings?",
  "language": "en" | "te" | "hi",
  "sessionId": "string (optional)"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "sessionId": "abc123",
    "message": "What are the temple timings?",
    "response": "The temple is open from 5:00 AM to 10:00 PM daily.",
    "language": "en",
    "timestamp": "2024-12-03T11:15:00Z"
  }
}
```

---

### 6.2 Get Chat History
**Endpoint:** `GET /chatbot/history`

**Description:** Retrieves chat history for a session.

**Query Parameters:**
- `sessionId` (required): Chat session ID
- `limit` (optional): Maximum number of messages (default: 50)

**Response:**
```json
{
  "success": true,
  "data": {
    "sessionId": "abc123",
    "messages": [
      {
        "id": 1,
        "message": "What are the temple timings?",
        "response": "The temple is open from 5:00 AM to 10:00 PM daily.",
        "timestamp": "2024-12-03T11:15:00Z"
      }
    ]
  }
}
```

---

## 7. Data Privacy & DPDP Compliance

### 7.1 Data Anonymization Status
**Endpoint:** `GET /compliance/status`

**Description:** Returns DPDP compliance and data anonymization status.

**Response:**
```json
{
  "success": true,
  "data": {
    "dpdpCompliant": true,
    "dataAnonymized": true,
    "lastAudit": "2024-12-01T00:00:00Z",
    "certifications": [
      "DPDP 2023 Compliant",
      "ISO 27001"
    ]
  }
}
```

---

## Error Responses

All endpoints may return the following error responses:

**400 Bad Request:**
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request parameters",
    "details": {}
  }
}
```

**401 Unauthorized:**
```json
{
  "success": false,
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid or expired token"
  }
}
```

**404 Not Found:**
```json
{
  "success": false,
  "error": {
    "code": "NOT_FOUND",
    "message": "Resource not found"
  }
}
```

**500 Internal Server Error:**
```json
{
  "success": false,
  "error": {
    "code": "INTERNAL_ERROR",
    "message": "An unexpected error occurred"
  }
}
```

---

## Rate Limiting

- **Standard endpoints:** 100 requests per minute per IP
- **Emergency endpoints:** 10 requests per minute per IP
- **Analytics endpoints:** 50 requests per minute per IP

Rate limit headers:
- `X-RateLimit-Limit`: Maximum requests allowed
- `X-RateLimit-Remaining`: Remaining requests
- `X-RateLimit-Reset`: Time when limit resets (Unix timestamp)

---

## WebSocket Events (Real-time Updates)

**Connection:** `wss://api.temple-crowd-manager.com/ws`

**Events:**
- `crowd_density_update`: Real-time crowd density changes
- `alert_created`: New alert generated
- `gate_status_changed`: Gate status update
- `cctv_analytics_update`: CCTV analytics update

**Example:**
```json
{
  "event": "crowd_density_update",
  "data": {
    "location": "Maha Mandapam",
    "density": 85,
    "timestamp": "2024-12-03T11:20:00Z"
  }
}
```

---

## Offline Support

The API supports offline-first architecture:
- All GET requests should be cacheable
- POST/PATCH requests are queued when offline and synced when online
- Cache-Control headers are provided for all GET endpoints

---

## Notes

1. All timestamps are in ISO 8601 format (UTC)
2. All numeric IDs are integers
3. Pagination is supported for list endpoints (use `page` and `limit` query parameters)
4. All endpoints support CORS for frontend integration
5. Data is anonymized per DPDP 2023 requirements
6. All sensitive operations require authentication and authorization

---

**Last Updated:** December 3, 2024  
**Maintained By:** Backend Development Team

