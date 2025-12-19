import React, { useState, useEffect } from 'react';

const OfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  
  return (
    <div
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${
        isOnline 
          ? 'bg-green-50 text-green-800 border border-green-200' 
          : 'bg-gray-100 text-gray-700 border border-gray-200'
      }`}
    >
      <span
        className={`w-2.5 h-2.5 rounded-full ${
          isOnline ? 'bg-green-500' : 'bg-red-500'
        }`}
      />
      <span>{isOnline ? 'Online' : 'Offline (Data Saved)'}</span>
    </div>
  );
};

export default OfflineIndicator;

