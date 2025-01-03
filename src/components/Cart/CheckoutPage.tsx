import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import CartSummary from './CartSummary';
import PaymentForm, { PaymentFormData } from './PaymentForm';
import UPIPayment from './UPIPayment';

export default function CheckoutPage() {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi'>('card');

  const handlePayment = (formData: PaymentFormData | string) => {
    console.log('Processing payment:', formData);
    dispatch({ type: 'CLEAR_CART' });
    navigate('/success');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/50 via-purple-800/50 to-purple-900/50 backdrop-blur-sm py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-8">Checkout</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Order Summary</h3>
              <CartSummary items={state.items} total={state.total} />
            </div>
            
            <div>
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`flex-1 py-2 rounded-lg transition-colors ${
                    paymentMethod === 'card'
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/5 text-white hover:bg-white/10'
                  }`}
                >
                  Card
                </button>
                <button
                  onClick={() => setPaymentMethod('upi')}
                  className={`flex-1 py-2 rounded-lg transition-colors ${
                    paymentMethod === 'upi'
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/5 text-white hover:bg-white/10'
                  }`}
                >
                  UPI
                </button>
              </div>
              
              {paymentMethod === 'card' ? (
                <PaymentForm total={state.total} onSubmit={handlePayment} />
              ) : (
                <UPIPayment total={state.total} onSubmit={handlePayment} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}