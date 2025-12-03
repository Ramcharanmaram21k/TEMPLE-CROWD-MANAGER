import React from 'react';
import { Settings as SettingsIcon, Bell, Shield, Database } from 'lucide-react';
import Button from '../components/common/Button';

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-1">Configure system preferences</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="w-6 h-6 text-gov-blue" />
            <h3 className="text-lg font-semibold">Notifications</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">Manage alert preferences</p>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" defaultChecked />
              <span className="text-sm">Email notifications</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" defaultChecked />
              <span className="text-sm">SMS alerts</span>
            </label>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-gov-blue" />
            <h3 className="text-lg font-semibold">Security</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">Security and access controls</p>
          <Button variant="primary" size="sm">Change Password</Button>
        </div>
        
        <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <Database className="w-6 h-6 text-gov-blue" />
            <h3 className="text-lg font-semibold">Data Management</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">Data retention and backup</p>
          <div className="space-y-2">
            <p className="text-sm text-gray-700">
              <strong>DPDP Compliance:</strong> Enabled
            </p>
            <p className="text-sm text-gray-700">
              <strong>Data Anonymization:</strong> Active
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <SettingsIcon className="w-6 h-6 text-gov-blue" />
            <h3 className="text-lg font-semibold">System</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">System configuration</p>
          <div className="space-y-2 text-sm">
            <p className="text-gray-700">Version: 1.0.0</p>
            <p className="text-gray-700">Last Updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

