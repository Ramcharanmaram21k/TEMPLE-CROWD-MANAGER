# AI-Enabled Intelligent Crowd Management Platform
## Kanaka Durga Temple

A modular, component-based React application for intelligent crowd management with offline-first capabilities.

## 🏗️ Architecture

This project follows a **modular, component-based architecture** with clear separation of concerns:

```
src/
├── components/
│   ├── common/          # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Badge.jsx
│   │   ├── Modal.jsx
│   │   ├── Loader.jsx
│   │   └── OfflineIndicator.jsx
│   ├── dashboard/       # Dashboard-specific components
│   │   ├── StatCards.jsx
│   │   ├── HeatmapWidget.jsx
│   │   ├── PredictionChart.jsx
│   │   └── PA_SystemPanel.jsx
│   └── layout/          # Layout components
│       ├── Sidebar.jsx
│       ├── Navbar.jsx
│       └── MainLayout.jsx
├── pages/               # Page components
│   ├── DashboardPage.jsx
│   ├── AnalyticsPage.jsx
│   ├── GateControlPage.jsx
│   └── SettingsPage.jsx
├── services/            # Business logic & API
│   ├── mockData.js
│   ├── api.js
│   └── offlineSync.js
└── App.jsx              # Main app with routing
```

## 🚀 Features

- **Modular Architecture**: Small, reusable components (NOT all in App.jsx)
- **Offline-First**: Works in low-connectivity zones with data synchronization
- **Real-time Dashboard**: Live crowd density, alerts, and gate status
- **Video Analytics**: CCTV feed monitoring with AI detection
- **Predictive Modeling**: Historical vs predicted footfall for events like Dasara Festival
- **Gate Management**: Control and monitor all temple gates
- **PA System**: Broadcast announcements and emergency alerts
- **Multi-language Chatbot**: Devotee assistance in Telugu, Hindi, English
- **DPDP Compliant**: Data anonymization and privacy compliance

## 🎨 Design

- **Government-style colors**: White, Blue (#003F87), Saffron (#FF9933)
- **Fully Responsive**: Mobile, tablet, and desktop support
- **Clean UI**: Modern, professional interface

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

## 📋 Tech Stack

- **React 19** - UI framework
- **React Router DOM** - Navigation
- **Tailwind CSS 3** - Styling
- **Recharts** - Data visualization
- **Lucide React** - Icons
- **Axios** - HTTP client
- **Vite** - Build tool

## 📡 Backend API

See `BACKEND_API_SPECS.md` for complete API documentation.

## 🔒 Privacy & Compliance

- **DPDP 2023 Compliant**: All data is anonymized
- **Offline Support**: Data cached and synced when online
- **Secure**: Authentication and authorization built-in

## 📝 Key Components

### Dashboard
- Real-time crowd density monitoring
- Active alerts display
- Gate status overview
- Heatmap visualization
- Predictive charts
- CCTV feed grid
- PA system controls

### Gate Control
- List of all gates with status
- Open/Close toggle functionality
- Capacity monitoring

### Analytics
- Historical footfall data
- Trend analysis
- Predictive insights

## 🌐 Offline Mode

The application automatically detects network status and:
- Shows online/offline indicator
- Caches data locally
- Queues requests when offline
- Syncs when connection is restored

## 📄 License

Proprietary - Kanaka Durga Temple
