import React from 'react';
import { X } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';

interface CartItemProps {
  item: CartItemType;
  onRemove: (id: string) => void;
}

export default function CartItem({ item, onRemove }: CartItemProps) {
  return (
    <div className="flex items-center justify-between bg-white/5 p-4 rounded-lg">
      <div className="flex items-center">
        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
        <div className="ml-4">
          <h3 className="text-gray-900 dark:text-white font-semibold">{item.name}</h3>
          <p className="text-gray-600 dark:text-gray-300">
            ₹{item.price} x {item.quantity}
          </p>
        </div>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:text-red-600 p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
}