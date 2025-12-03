import React, { useState } from 'react';
import { DoorOpen, DoorClosed, MapPin } from 'lucide-react';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import { templeGates } from '../services/mockData';

const GateControlPage = () => {
  const [gates, setGates] = useState(templeGates);
  
  const toggleGate = (gateId) => {
    setGates(gates.map(gate => 
      gate.id === gateId 
        ? { ...gate, status: gate.status === 'open' ? 'closed' : 'open' }
        : gate
    ));
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gate Management</h1>
          <p className="text-gray-600 mt-1">Control and monitor temple gates</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gates.map((gate) => (
          <div
            key={gate.id}
            className="bg-white rounded-lg border-2 border-gray-200 p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {gate.name}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{gate.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge 
                    variant={gate.status === 'open' ? 'success' : 'danger'}
                    size="sm"
                  >
                    {gate.status === 'open' ? 'Open' : 'Closed'}
                  </Badge>
                  <span className="text-xs text-gray-500">
                    Capacity: {gate.capacity}
                  </span>
                </div>
              </div>
              <div className={`p-3 rounded-lg ${
                gate.status === 'open' 
                  ? 'bg-green-100' 
                  : 'bg-red-100'
              }`}>
                {gate.status === 'open' ? (
                  <DoorOpen className={`w-6 h-6 ${
                    gate.status === 'open' 
                      ? 'text-green-600' 
                      : 'text-red-600'
                  }`} />
                ) : (
                  <DoorClosed className="w-6 h-6 text-red-600" />
                )}
              </div>
            </div>
            
            <Button
              variant={gate.status === 'open' ? 'danger' : 'success'}
              size="md"
              onClick={() => toggleGate(gate.id)}
              className="w-full"
            >
              {gate.status === 'open' ? 'Close Gate' : 'Open Gate'}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GateControlPage;

