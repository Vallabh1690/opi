import React, { useState } from 'react';
import { CreditCard, Calendar, Lock } from 'lucide-react';

interface PaymentFormProps {
  total: number;
  onSubmit: (formData: PaymentFormData) => void;
}

export interface PaymentFormData {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  name: string;
}

export default function PaymentForm({ total, onSubmit }: PaymentFormProps) {
  const [formData, setFormData] = useState<PaymentFormData>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-white text-sm font-medium mb-2">Card Number</label>
        <div className="relative">
          <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            value={formData.cardNumber}
            onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-400"
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-white text-sm font-medium mb-2">Expiry Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              value={formData.expiryDate}
              onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-400"
              placeholder="MM/YY"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-white text-sm font-medium mb-2">CVV</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              value={formData.cvv}
              onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-400"
              placeholder="123"
              required
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-white text-sm font-medium mb-2">Cardholder Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-4 text-white placeholder-gray-400"
          placeholder="John Doe"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
      >
        Pay ₹{total.toFixed(2)}
      </button>
    </form>
  );
}