import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [chatLanguage, setChatLanguage] = useState('en');

  if (!isOpen) {
    // Minimized state: small floating icon button
    return (
      <button
        type="button"
        className="fixed bottom-6 right-6 z-40 bg-gov-blue text-white rounded-full shadow-lg p-3 flex items-center justify-center hover:bg-blue-800 focus:outline-none"
        onClick={() => setIsOpen(true)}
        aria-label="Open Devotee Assistance Chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="bg-white rounded-lg shadow-lg border-2 border-gray-200 p-4 w-80">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-gray-900 flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-gov-blue" />
            Devotee Assistance
          </h4>
          <button
            type="button"
            className="text-gray-400 hover:text-gray-600"
            onClick={() => setIsOpen(false)}
            aria-label="Minimize chat"
          >
            ✕
          </button>
        </div>
        
        {/* Language Selector */}
        <div className="flex gap-2 mb-3">
          {['en', 'te', 'hi'].map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => setChatLanguage(lang)}
              className={`px-3 py-1 text-xs rounded ${
                chatLanguage === lang
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
  );
};

export default ChatWidget;


