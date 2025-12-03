import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle offline scenario
    if (!navigator.onLine) {
      return Promise.reject(new Error('Network error: You are offline'));
    }
    return Promise.reject(error);
  }
);

// API Methods
export const dashboardAPI = {
  getStats: () => api.get('/dashboard/stats'),
  getAlerts: () => api.get('/dashboard/alerts'),
  getHeatmapData: () => api.get('/dashboard/heatmap'),
};

export const gateAPI = {
  getAll: () => api.get('/gates'),
  getById: (id) => api.get(`/gates/${id}`),
  updateStatus: (id, status) => api.patch(`/gates/${id}/status`, { status }),
  toggle: (id) => api.post(`/gates/${id}/toggle`),
};

export const cctvAPI = {
  getFeeds: () => api.get('/cctv/feeds'),
  getFeedById: (id) => api.get(`/cctv/feeds/${id}`),
  getAnalytics: (feedId) => api.get(`/cctv/feeds/${feedId}/analytics`),
};

export const analyticsAPI = {
  getHistoricalFootfall: (startDate, endDate) => 
    api.get('/analytics/footfall', { params: { startDate, endDate } }),
  getPredictions: (eventType) => 
    api.get('/analytics/predictions', { params: { eventType } }),
  getTrends: () => api.get('/analytics/trends'),
};

export const paSystemAPI = {
  broadcast: (message, type = 'info') => 
    api.post('/pa-system/broadcast', { message, type }),
  emergency: (message) => 
    api.post('/pa-system/emergency', { message }),
  getHistory: () => api.get('/pa-system/history'),
};

export const chatbotAPI = {
  sendMessage: (message, language = 'en') => 
    api.post('/chatbot/message', { message, language }),
  getHistory: () => api.get('/chatbot/history'),
};

export default api;

