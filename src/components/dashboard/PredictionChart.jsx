import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Calendar } from 'lucide-react';

const PredictionChart = ({ historical = [], predicted = [] }) => {
  // Combine historical and predicted data
  const chartData = [
    ...historical.map(item => ({
      date: new Date(item.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' }),
      historical: item.visitors,
      predicted: null,
      event: item.event,
    })),
    ...predicted.map(item => ({
      date: new Date(item.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' }),
      historical: null,
      predicted: item.predicted,
      event: item.event,
      confidence: item.confidence,
    })),
  ];
  
  return (
    <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-gov-blue" />
            Predictive Modeling - Dasara Festival
          </h3>
          <p className="text-sm text-gray-500 mt-1">Historical vs Predicted Footfall</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>2024-2025</span>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="date" 
            stroke="#6b7280"
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            stroke="#6b7280"
            tick={{ fontSize: 12 }}
            label={{ value: 'Visitors', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
            }}
            formatter={(value, name) => {
              if (value === null) return null;
              return [value.toLocaleString(), name === 'historical' ? 'Historical' : 'Predicted'];
            }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="historical" 
            stroke="#003F87" 
            strokeWidth={2}
            dot={{ r: 4 }}
            name="Historical"
          />
          <Line 
            type="monotone" 
            dataKey="predicted" 
            stroke="#FF9933" 
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ r: 4 }}
            name="Predicted"
          />
        </LineChart>
      </ResponsiveContainer>
      
      <div className="mt-4 flex items-center gap-4 text-xs text-gray-600">
        <div className="flex items-center gap-2">
          <div className="w-4 h-1 bg-gov-blue"></div>
          <span>Historical Data</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-1 bg-gov-saffron border-dashed border"></div>
          <span>Predicted Data</span>
        </div>
      </div>
    </div>
  );
};

export default PredictionChart;

