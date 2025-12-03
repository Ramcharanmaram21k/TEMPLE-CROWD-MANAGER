// Mock data specific to Kanaka Durga Temple

export const templeGates = [
  { id: 1, name: 'Maha Mandapam Gate', status: 'open', location: 'Main Entrance', capacity: 500 },
  { id: 2, name: 'Ghat Road Exit', status: 'open', location: 'North Side', capacity: 300 },
  { id: 3, name: 'VIP Gate', status: 'closed', location: 'East Wing', capacity: 100 },
  { id: 4, name: 'Prasadam Hall Gate', status: 'open', location: 'South Side', capacity: 200 },
  { id: 5, name: 'Parking Gate A', status: 'open', location: 'Parking Area', capacity: 400 },
  { id: 6, name: 'Parking Gate B', status: 'open', location: 'Parking Area', capacity: 400 },
];

export const dashboardStats = {
  realTimeCrowdDensity: 2847,
  activeAlerts: 3,
  openGates: 5,
  totalGates: 6,
  currentCapacity: 75, // percentage
  lastUpdated: new Date().toISOString(),
};

export const alerts = [
  { id: 1, type: 'crowd_surge', message: 'High density detected at Maha Mandapam Gate', severity: 'high', timestamp: new Date(Date.now() - 15 * 60000).toISOString() },
  { id: 2, type: 'capacity_warning', message: 'Parking Gate A approaching capacity', severity: 'medium', timestamp: new Date(Date.now() - 30 * 60000).toISOString() },
  { id: 3, type: 'maintenance', message: 'VIP Gate closed for maintenance', severity: 'low', timestamp: new Date(Date.now() - 60 * 60000).toISOString() },
];

export const cctvFeeds = [
  { id: 1, name: 'Main Entrance', detected: 450, status: 'Crowd Surge', location: 'Maha Mandapam' },
  { id: 2, name: 'Sanctum Sanctorum', detected: 120, status: 'Normal', location: 'Inner Temple' },
  { id: 3, name: 'Prasadam Hall', detected: 85, status: 'Normal', location: 'South Wing' },
  { id: 4, name: 'Parking Area', detected: 320, status: 'Normal', location: 'Parking Zone' },
  { id: 5, name: 'Ghat Road', detected: 210, status: 'Normal', location: 'North Exit' },
  { id: 6, name: 'Queue Area', detected: 380, status: 'High Density', location: 'Main Queue' },
];

export const historicalFootfall = [
  { date: '2024-01-01', visitors: 8500, event: 'New Year' },
  { date: '2024-02-14', visitors: 12000, event: 'Maha Shivaratri' },
  { date: '2024-03-08', visitors: 9500, event: 'Holi' },
  { date: '2024-04-14', visitors: 11000, event: 'Ugadi' },
  { date: '2024-05-01', visitors: 8000, event: 'Regular Day' },
  { date: '2024-06-15', visitors: 10500, event: 'Regular Day' },
  { date: '2024-07-20', visitors: 9800, event: 'Regular Day' },
  { date: '2024-08-15', visitors: 13000, event: 'Independence Day' },
  { date: '2024-09-17', visitors: 14500, event: 'Dasara Festival' },
  { date: '2024-10-02', visitors: 12500, event: 'Gandhi Jayanti' },
  { date: '2024-11-01', visitors: 10000, event: 'Karthika Masam' },
  { date: '2024-12-25', visitors: 9000, event: 'Christmas' },
];

export const predictedFootfall = [
  { date: '2025-01-01', predicted: 9000, confidence: 'high', event: 'New Year' },
  { date: '2025-02-14', predicted: 13000, confidence: 'high', event: 'Maha Shivaratri' },
  { date: '2025-03-08', predicted: 10000, confidence: 'medium', event: 'Holi' },
  { date: '2025-04-14', predicted: 12000, confidence: 'high', event: 'Ugadi' },
  { date: '2025-09-17', predicted: 16000, confidence: 'high', event: 'Dasara Festival' },
];

export const heatmapData = [
  { x: 10, y: 20, intensity: 85, label: 'Maha Mandapam' },
  { x: 30, y: 25, intensity: 45, label: 'Sanctum Sanctorum' },
  { x: 50, y: 30, intensity: 70, label: 'Prasadam Hall' },
  { x: 70, y: 15, intensity: 60, label: 'Parking Area' },
  { x: 20, y: 50, intensity: 90, label: 'Main Queue' },
  { x: 60, y: 45, intensity: 55, label: 'Ghat Road' },
];

export const paSystemMessages = [
  { id: 1, message: 'Welcome to Kanaka Durga Temple. Please maintain decorum.', type: 'info', timestamp: new Date(Date.now() - 5 * 60000).toISOString() },
  { id: 2, message: 'Parking available at Gate A and Gate B.', type: 'info', timestamp: new Date(Date.now() - 10 * 60000).toISOString() },
];

