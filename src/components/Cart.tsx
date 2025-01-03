import React from 'react';
import { useCart } from '../context/CartContext';
import { X } from 'lucide-react';

export default function Cart() {
  const { state, dispatch } = useCart();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Your Cart</h2>
      {state.items.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {state.items.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div className="ml-4">
                    <h3 className="text-gray-900 dark:text-white font-semibold">{item.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      ${item.price} x {item.quantity}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                  className="text-red-500 hover:text-red-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-900 dark:text-white">Total</span>
              <span className="text-purple-600 dark:text-purple-400">${state.total.toFixed(2)}</span>
            </div>
            <button
              onClick={() => dispatch({ type: 'CLEAR_CART' })}
              className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}