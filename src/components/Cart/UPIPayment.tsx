import React, { useState } from 'react';
import { QrCode, Smartphone } from 'lucide-react';

interface UPIPaymentProps {
  total: number;
  onSubmit: (upiId: string) => void;
}

const upiApps = [
  { id: 'gpay', name: 'Google Pay', icon: '💳' },
  { id: 'phonepe', name: 'PhonePe', icon: '💸' },
  { id: 'paytm', name: 'Paytm', icon: '🏧' },
  { id: 'bhim', name: 'BHIM UPI', icon: '🇮🇳' }
];

export default function UPIPayment({ total, onSubmit }: UPIPaymentProps) {
  const [upiId, setUpiId] = useState('');
  const [selectedApp, setSelectedApp] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(upiId);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        {upiApps.map((app) => (
          <button
            key={app.id}
            onClick={() => setSelectedApp(app.id)}
            className={`p-4 rounded-lg border transition-all ${
              selectedApp === app.id
                ? 'border-purple-500 bg-white/10'
                : 'border-white/10 hover:border-purple-500'
            }`}
          >
            <span className="text-2xl mb-2">{app.icon}</span>
            <p className="text-white text-sm">{app.name}</p>
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-white text-sm font-medium mb-2">UPI ID</label>
          <div className="relative">
            <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-400"
              placeholder="username@upi"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Pay ₹{total.toFixed(2)}
        </button>
      </form>
    </div>
  );
}