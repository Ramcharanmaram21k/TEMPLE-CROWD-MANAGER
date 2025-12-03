import React from 'react';
import { Users, AlertTriangle, DoorOpen, TrendingUp } from 'lucide-react';
import Badge from '../common/Badge';

const StatCard = ({ title, value, icon: Icon, variant = 'default', subtitle }) => {
  const variants = {
    default: 'bg-white border-gray-200',
    primary: 'bg-gov-blue text-white border-gov-blue',
    warning: 'bg-yellow-50 border-yellow-200',
    success: 'bg-green-50 border-green-200',
  };
  
  const textColors = {
    default: 'text-gray-900',
    primary: 'text-white',
    warning: 'text-yellow-900',
    success: 'text-green-900',
  };
  
  const iconColors = {
    default: 'text-gov-blue',
    primary: 'text-white',
    warning: 'text-yellow-600',
    success: 'text-green-600',
  };
  
  return (
    <div className={`rounded-lg border-2 p-6 ${variants[variant]}`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className={`text-sm font-medium ${variant === 'primary' ? 'text-white/80' : 'text-gray-600'}`}>
            {title}
          </p>
          <p className={`text-3xl font-bold mt-2 ${textColors[variant]}`}>
            {value}
          </p>
          {subtitle && (
            <p className={`text-xs mt-1 ${variant === 'primary' ? 'text-white/70' : 'text-gray-500'}`}>
              {subtitle}
            </p>
          )}
        </div>
        <div className={`p-3 rounded-lg ${variant === 'primary' ? 'bg-white/20' : 'bg-gray-100'}`}>
          <Icon className={`w-6 h-6 ${iconColors[variant]}`} />
        </div>
      </div>
    </div>
  );
};

const StatCards = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <StatCard
        title="Real-time Crowd Density"
        value={stats.realTimeCrowdDensity?.toLocaleString() || '0'}
        icon={Users}
        variant="primary"
        subtitle={`${stats.currentCapacity || 0}% capacity`}
      />
      <StatCard
        title="Active Alerts"
        value={stats.activeAlerts || 0}
        icon={AlertTriangle}
        variant="warning"
        subtitle="Requires attention"
      />
      <StatCard
        title="Open Gates"
        value={`${stats.openGates || 0}/${stats.totalGates || 0}`}
        icon={DoorOpen}
        variant="success"
        subtitle="Currently operational"
      />
      <StatCard
        title="Capacity Status"
        value={`${stats.currentCapacity || 0}%`}
        icon={TrendingUp}
        variant="default"
        subtitle="Current utilization"
      />
    </div>
  );
};

export default StatCards;

