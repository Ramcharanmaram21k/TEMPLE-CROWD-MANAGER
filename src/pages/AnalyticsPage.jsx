import React from 'react';
import { BarChart3, TrendingUp, Users } from 'lucide-react';

const AnalyticsPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600 mt-1">Detailed insights and reports</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="w-8 h-8 text-gov-blue" />
            <h3 className="text-lg font-semibold">Daily Reports</h3>
          </div>
          <p className="text-gray-600 text-sm">View detailed daily analytics</p>
        </div>
        
        <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-8 h-8 text-gov-saffron" />
            <h3 className="text-lg font-semibold">Trend Analysis</h3>
          </div>
          <p className="text-gray-600 text-sm">Analyze visitor trends over time</p>
        </div>
        
        <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-8 h-8 text-green-600" />
            <h3 className="text-lg font-semibold">Crowd Patterns</h3>
          </div>
          <p className="text-gray-600 text-sm">Study crowd movement patterns</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4">Analytics Dashboard</h3>
        <p className="text-gray-500 text-center py-12">
          Detailed analytics charts and reports will be displayed here
        </p>
      </div>
    </div>
  );
};

export default AnalyticsPage;

