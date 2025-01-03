import React from 'react';
import { Check, X } from 'lucide-react';
import { platforms } from '../data/platforms';

export default function CompareServices() {
  const features = [
    '4K Streaming',
    'Multiple Devices',
    'Offline Downloads',
    'Original Content',
    'Live TV',
    'Ad-free Experience'
  ];

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Compare Services</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <thead>
              <tr className="border-b dark:border-gray-700">
                <th className="text-left py-4 px-6">Platform</th>
                <th className="text-left py-4 px-6">Original Price</th>
                <th className="text-left py-4 px-6">Our Price</th>
                {features.map((feature) => (
                  <th key={feature} className="text-left py-4 px-6">{feature}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {platforms.slice(0, 5).map((platform) => (
                <tr key={platform.id} className="border-b dark:border-gray-700">
                  <td className="py-4 px-6 font-medium">{platform.name}</td>
                  <td className="py-4 px-6">₹{platform.price + 100}</td>
                  <td className="py-4 px-6 text-green-600 font-bold">₹{platform.price}</td>
                  {features.map((feature) => (
                    <td key={feature} className="py-4 px-6">
                      {platform.features.includes(feature) ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <X className="h-5 w-5 text-red-500" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}