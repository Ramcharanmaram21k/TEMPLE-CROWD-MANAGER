import React from 'react';
import { Video } from 'lucide-react';
import StatCards from '../components/dashboard/StatCards';
import HeatmapWidget from '../components/dashboard/HeatmapWidget';
import PredictionChart from '../components/dashboard/PredictionChart';
import PA_SystemPanel from '../components/dashboard/PA_SystemPanel';
import Badge from '../components/common/Badge';
import ChatWidget from '../components/common/ChatWidget.jsx';
import { 
  dashboardStats, 
  heatmapData, 
  historicalFootfall, 
  predictedFootfall,
  cctvFeeds,
  paSystemMessages 
} from '../services/mockData';

import { useLanguage } from '../context/LanguageContext.jsx';

const DashboardPage = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      {/* DPDP Compliance Badge */}
      <div className="flex justify-end">
        <Badge variant="dpdp" size="lg">
          🔒 {t('dpdpBadge')}
        </Badge>
      </div>
      
      {/* Stat Cards */}
      <StatCards stats={dashboardStats} />
      
      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Heatmap Widget */}
        <HeatmapWidget data={heatmapData} />
        
        {/* Prediction Chart */}
        <PredictionChart 
          historical={historicalFootfall} 
          predicted={predictedFootfall} 
        />
      </div>
      
      {/* Video Analytics Section */}
      <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-4">
          <Video className="w-5 h-5 text-gov-blue" />
          Video Analytics - CCTV Feeds
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cctvFeeds.map((feed) => (
            <div
              key={feed.id}
              className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video"
            >
              {/* Video Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Video className="w-12 h-12 text-gray-600" />
              </div>
              
              {/* Overlay Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white font-semibold text-sm">{feed.name}</span>
                  <Badge 
                    variant={feed.status === 'Normal' ? 'success' : 'warning'}
                    size="sm"
                  >
                    {feed.status}
                  </Badge>
                </div>
                <p className="text-xs text-gray-300">Detected: {feed.detected}</p>
                <p className="text-xs text-gray-400 mt-1">{feed.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* PA System Panel */}
      <PA_SystemPanel messages={paSystemMessages} />
      
      {/* Chatbot Widget (Floating) */}
      <ChatWidget />
    </div>
  );
};

export default DashboardPage;

