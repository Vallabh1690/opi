import React from 'react';
import { Settings, CreditCard, Activity, Package } from 'lucide-react';

export default function Dashboard() {
  const subscriptions = [
    { name: 'Netflix', status: 'Active', nextBilling: '2024-04-01', price: '₹649' },
    { name: 'Amazon Prime', status: 'Active', nextBilling: '2024-03-28', price: '₹299' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Active Plans</h3>
              <Package className="h-6 w-6 text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">2</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Total Spent</h3>
              <CreditCard className="h-6 w-6 text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">₹948</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Savings</h3>
              <Activity className="h-6 w-6 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">₹350</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Settings</h3>
              <Settings className="h-6 w-6 text-purple-600" />
            </div>
            <button className="text-purple-600 text-sm hover:text-purple-700">Manage Account</button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Active Subscriptions</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b dark:border-gray-700">
                  <th className="text-left py-3 px-4">Platform</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Next Billing</th>
                  <th className="text-left py-3 px-4">Price</th>
                </tr>
              </thead>
              <tbody>
                {subscriptions.map((sub, index) => (
                  <tr key={index} className="border-b dark:border-gray-700">
                    <td className="py-3 px-4">{sub.name}</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {sub.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">{sub.nextBilling}</td>
                    <td className="py-3 px-4">{sub.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}