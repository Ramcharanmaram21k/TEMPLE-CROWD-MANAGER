import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BarChart3, 
  DoorOpen, 
  Settings,
  Home
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext.jsx';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const { t } = useLanguage();
  
  const menuItems = [
    { path: '/', key: 'dashboard', icon: LayoutDashboard },
    { path: '/analytics', key: 'analytics', icon: BarChart3 },
    { path: '/gate-control', key: 'gateControl', icon: DoorOpen },
    { path: '/settings', key: 'settings', icon: Settings },
  ];
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-50 h-full bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
        w-64
      `}>
        <div className="flex flex-col h-full">
          {/* Logo/Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Home className="w-8 h-8 text-gov-blue" />
              <div>
                <h1 className="text-lg font-bold text-gov-blue">Kanaka Durga Temple</h1>
                <p className="text-xs text-gray-600">Crowd Manager</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                    ${active 
                      ? 'bg-gov-blue text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{t(item.key)}</span>
                </Link>
              );
            })}
          </nav>
          
          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <div className="text-xs text-gray-500 text-center">
              <p>AI-Enabled Platform</p>
              <p className="mt-1">Version 1.0.0</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

