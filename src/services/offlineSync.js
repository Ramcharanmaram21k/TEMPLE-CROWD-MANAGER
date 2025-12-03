// Offline-first data synchronization service

const STORAGE_KEYS = {
  PENDING_REQUESTS: 'offline_pending_requests',
  CACHED_DATA: 'offline_cached_data',
};

class OfflineSync {
  constructor() {
    this.isOnline = navigator.onLine;
    this.pendingRequests = this.loadPendingRequests();
    this.setupListeners();
  }

  setupListeners() {
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.syncPendingRequests();
    });

    window.addEventListener('offline', () => {
      this.isOnline = false;
    });
  }

  loadPendingRequests() {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.PENDING_REQUESTS);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading pending requests:', error);
      return [];
    }
  }

  savePendingRequests() {
    try {
      localStorage.setItem(
        STORAGE_KEYS.PENDING_REQUESTS,
        JSON.stringify(this.pendingRequests)
      );
    } catch (error) {
      console.error('Error saving pending requests:', error);
    }
  }

  queueRequest(request) {
    this.pendingRequests.push({
      ...request,
      timestamp: new Date().toISOString(),
      id: Date.now().toString(),
    });
    this.savePendingRequests();
  }

  async syncPendingRequests() {
    if (!this.isOnline || this.pendingRequests.length === 0) {
      return;
    }

    const requests = [...this.pendingRequests];
    this.pendingRequests = [];
    this.savePendingRequests();

    for (const request of requests) {
      try {
        // In production, this would make the actual API call
        console.log('Syncing request:', request);
        // await api[request.method](request.url, request.data);
      } catch (error) {
        // Re-queue failed requests
        this.pendingRequests.push(request);
      }
    }

    this.savePendingRequests();
  }

  cacheData(key, data) {
    try {
      const cached = this.getCachedData();
      cached[key] = {
        data,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem(STORAGE_KEYS.CACHED_DATA, JSON.stringify(cached));
    } catch (error) {
      console.error('Error caching data:', error);
    }
  }

  getCachedData() {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.CACHED_DATA);
      return stored ? JSON.parse(stored) : {};
    } catch (error) {
      console.error('Error getting cached data:', error);
      return {};
    }
  }

  getCached(key) {
    const cached = this.getCachedData();
    return cached[key]?.data || null;
  }

  clearCache() {
    try {
      localStorage.removeItem(STORAGE_KEYS.CACHED_DATA);
      localStorage.removeItem(STORAGE_KEYS.PENDING_REQUESTS);
      this.pendingRequests = [];
    } catch (error) {
      console.error('Error clearing cache:', error);
    }
  }
}

export default new OfflineSync();

