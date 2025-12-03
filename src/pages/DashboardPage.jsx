import React, { useState } from 'react';
import { Video, MessageCircle } from 'lucide-react';
import StatCards from '../components/dashboard/StatCards';
import HeatmapWidget from '../components/dashboard/HeatmapWidget';
import PredictionChart from '../components/dashboard/PredictionChart';
import PA_SystemPanel from '../components/dashboard/PA_SystemPanel';
import Badge from '../components/common/Badge';
import { 
  dashboardStats, 
  heatmapData, 
  historicalFootfall, 
  predictedFootfall,
  cctvFeeds,
  paSystemMessages 
} from '../services/mockData';

const DashboardPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  
  return (
    <div className="space-y-6">
      {/* DPDP Compliance Badge */}
      <div className="flex justify-end">
        <Badge variant="dpdp" size="lg">
          🔒 Data Anonymized & DPDP Compliant
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
      <div className="fixed bottom-6 right-6 z-40">
        <div className="bg-white rounded-lg shadow-lg border-2 border-gray-200 p-4 w-80">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-gray-900 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-gov-blue" />
              Devotee Assistance
            </h4>
            <button className="text-gray-400 hover:text-gray-600">✕</button>
          </div>
          
          {/* Language Selector */}
          <div className="flex gap-2 mb-3">
            {['en', 'te', 'hi'].map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-3 py-1 text-xs rounded ${
                  selectedLanguage === lang
                    ? 'bg-gov-blue text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {lang === 'en' ? 'English' : lang === 'te' ? 'తెలుగు' : 'हिंदी'}
              </button>
            ))}
          </div>
          
          {/* Chat Interface Placeholder */}
          <div className="bg-gray-50 rounded-lg p-4 h-48 overflow-y-auto mb-3">
            <div className="text-sm text-gray-600 text-center py-8">
              Chat interface placeholder
              <br />
              <span className="text-xs text-gray-400">
                Select language to start conversation
              </span>
            </div>
          </div>
          
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gov-blue"
            />
            <button className="px-4 py-2 bg-gov-blue text-white rounded-lg hover:bg-blue-800">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

