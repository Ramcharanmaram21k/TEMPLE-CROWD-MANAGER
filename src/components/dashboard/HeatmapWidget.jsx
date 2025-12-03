import React from 'react';
import { MapPin } from 'lucide-react';

const HeatmapWidget = ({ data = [] }) => {
  // Simple heatmap visualization
  const maxIntensity = Math.max(...data.map(d => d.intensity), 100);
  
  return (
    <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-gov-blue" />
          Temple Layout Heatmap
        </h3>
        <span className="text-sm text-gray-500">Live View</span>
      </div>
      
      {/* Placeholder for actual heatmap - in production, use a proper mapping library */}
      <div className="relative bg-gray-100 rounded-lg h-64 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500 font-medium">Temple Layout Map</p>
            <p className="text-sm text-gray-400 mt-1">Heatmap visualization placeholder</p>
          </div>
        </div>
        
        {/* Simple intensity indicators */}
        {data.map((point, index) => {
          const opacity = point.intensity / maxIntensity;
          const size = 20 + (point.intensity / 10);
          
          return (
            <div
              key={index}
              className="absolute rounded-full bg-red-500"
              style={{
                left: `${point.x}%`,
                top: `${point.y}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: Math.max(0.3, opacity),
                transform: 'translate(-50%, -50%)',
              }}
              title={`${point.label}: ${point.intensity}% intensity`}
            />
          );
        })}
      </div>
      
      {/* Legend */}
      <div className="mt-4 flex items-center justify-between text-xs text-gray-600">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-200 rounded"></div>
          <span>Low Density</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-400 rounded"></div>
          <span>Medium Density</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-600 rounded"></div>
          <span>High Density</span>
        </div>
      </div>
    </div>
  );
};

export default HeatmapWidget;

