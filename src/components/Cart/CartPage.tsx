import React from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';

export default function CartPage() {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();

  if (state.items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Your cart is empty</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">Add some streaming platforms to get started!</p>
        <button 
          onClick={() => navigate('/')}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Browse Platforms
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Your Cart</h2>
      <div className="space-y-4 mb-6">
        {state.items.map((item) => (
          <CartItem 
            key={item.id} 
            item={item} 
            onRemove={(id) => dispatch({ type: 'REMOVE_ITEM', payload: id })}
          />
        ))}
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
        <div className="flex justify-between text-lg font-semibold mb-4">
          <span className="text-gray-900 dark:text-white">Total</span>
          <span className="text-purple-600 dark:text-purple-400">₹{state.total.toFixed(2)}</span>
        </div>
        <button
          onClick={() => navigate('/checkout')}
          className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}