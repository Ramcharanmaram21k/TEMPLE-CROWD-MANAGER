import React, { useState } from 'react';
import { Volume2, AlertCircle } from 'lucide-react';
import Button from '../common/Button';
import Modal from '../common/Modal';

const PA_SystemPanel = ({ messages = [] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  
  const handleBroadcast = () => {
    if (message.trim()) {
      console.log('Broadcasting:', message);
      // In production, this would call the API
      setMessage('');
      setIsModalOpen(false);
    }
  };
  
  const handleEmergency = () => {
    setEmergencyModalOpen(true);
  };
  
  const handleEmergencyConfirm = () => {
    console.log('EMERGENCY ANNOUNCEMENT TRIGGERED');
    // In production, this would trigger emergency protocols
    setEmergencyModalOpen(false);
  };
  
  return (
    <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <Volume2 className="w-5 h-5 text-gov-blue" />
          Public Safety - PA System
        </h3>
      </div>
      
      {/* Emergency Button */}
      <div className="mb-6">
        <Button
          variant="emergency"
          size="xl"
          onClick={handleEmergency}
          className="w-full"
        >
          <AlertCircle className="w-6 h-6 mr-2 inline" />
          TRIGGER EMERGENCY ANNOUNCEMENT
        </Button>
      </div>
      
      {/* Regular Broadcast */}
      <div className="mb-4">
        <Button
          variant="primary"
          size="lg"
          onClick={() => setIsModalOpen(true)}
          className="w-full"
        >
          <Volume2 className="w-5 h-5 mr-2 inline" />
          Broadcast Audio Alert
        </Button>
      </div>
      
      {/* Recent Messages */}
      <div className="mt-6">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Recent Broadcasts</h4>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {messages.length > 0 ? (
            messages.map((msg) => (
              <div
                key={msg.id}
                className="p-3 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className="flex items-start justify-between">
                  <p className="text-sm text-gray-800">{msg.message}</p>
                  <span className="text-xs text-gray-500 ml-2">
                    {new Date(msg.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500 text-center py-4">No recent broadcasts</p>
          )}
        </div>
      </div>
      
      {/* Broadcast Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Broadcast Audio Alert"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gov-blue"
              rows={4}
              placeholder="Enter your broadcast message..."
            />
          </div>
          <div className="flex gap-3 justify-end">
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleBroadcast}>
              Broadcast
            </Button>
          </div>
        </div>
      </Modal>
      
      {/* Emergency Modal */}
      <Modal
        isOpen={emergencyModalOpen}
        onClose={() => setEmergencyModalOpen(false)}
        title="Emergency Announcement"
        size="md"
      >
        <div className="space-y-4">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
            <div className="flex items-center gap-2 text-red-800 mb-2">
              <AlertCircle className="w-5 h-5" />
              <span className="font-semibold">Warning: Emergency Protocol</span>
            </div>
            <p className="text-sm text-red-700">
              This will trigger an emergency announcement across all PA systems. 
              Are you sure you want to proceed?
            </p>
          </div>
          <div className="flex gap-3 justify-end">
            <Button variant="secondary" onClick={() => setEmergencyModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleEmergencyConfirm}>
              Confirm Emergency
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PA_SystemPanel;

