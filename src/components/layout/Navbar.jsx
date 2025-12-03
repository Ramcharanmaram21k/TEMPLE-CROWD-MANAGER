import React, { useState } from 'react';
import { Menu, Bell, User } from 'lucide-react';
import OfflineIndicator from '../common/OfflineIndicator';
import Badge from '../common/Badge';

const Navbar = ({ onMenuClick }) => {
  const [notifications] = useState(3);
  
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 lg:px-6">
      <div className="flex items-center justify-between">
        {/* Left: Menu button and title */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h2 className="text-xl font-semibold text-gray-900 hidden sm:block">
            Command Center
          </h2>
        </div>
        
        {/* Right: Status indicators and user */}
        <div className="flex items-center gap-4">
          <OfflineIndicator />
          
          
          
          <button className="relative p-2 text-gray-600 hover:text-gray-900 focus:outline-none">
            <Bell className="w-5 h-5" />
            {notifications > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {notifications}
              </span>
            )}
          </button>
          
          <button className="flex items-center gap-2 p-2 text-gray-600 hover:text-gray-900 focus:outline-none">
            <User className="w-5 h-5" />
            <span className="hidden sm:inline text-sm font-medium">Admin</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

