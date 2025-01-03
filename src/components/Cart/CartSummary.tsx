import React from 'react';
import { CartItem as CartItemType } from '../../types';

interface CartSummaryProps {
  items: CartItemType[];
  total: number;
}

export default function CartSummary({ items, total }: CartSummaryProps) {
  return (
    <div className="space-y-4 mb-6">
      {items.map((item) => (
        <div key={item.id} className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
            <div className="ml-3">
              <p className="text-white font-medium">{item.name}</p>
              <p className="text-purple-200">x{item.quantity}</p>
            </div>
          </div>
          <p className="text-white">₹{item.price * item.quantity}</p>
        </div>
      ))}
      <div className="border-t border-white/10 pt-4">
        <div className="flex justify-between text-lg font-semibold text-white">
          <span>Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}