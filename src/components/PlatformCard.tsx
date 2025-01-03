import React from 'react';
import { Platform } from '../types';
import { useCart } from '../context/CartContext';
import { Check, Plus } from 'lucide-react';

interface PlatformCardProps {
  platform: Platform;
}

export default function PlatformCard({ platform }: PlatformCardProps) {
  const { state, dispatch } = useCart();
  const isInCart = state.items.some(item => item.id === platform.id);

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img 
          src={platform.image} 
          alt={platform.name} 
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6 transform transition-all duration-300">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {platform.name}
          </h3>
          <span className="text-purple-600 dark:text-purple-400 font-bold">
            ₹{platform.price}
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
          {platform.description}
        </p>
        
        <div className="space-y-2 mb-6 transform transition-all duration-300 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Features:</h4>
          <ul className="space-y-2">
            {platform.features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <button
          onClick={() => dispatch({ type: 'ADD_ITEM', payload: platform })}
          className={`w-full py-2 px-4 rounded-lg flex items-center justify-center transition-all duration-300 transform ${
            isInCart
              ? 'bg-green-500 hover:bg-green-600'
              : 'bg-purple-600 hover:bg-purple-700'
          } text-white hover:scale-105`}
        >
          <Plus className="h-5 w-5 mr-2" />
          {isInCart ? 'Add Another' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}