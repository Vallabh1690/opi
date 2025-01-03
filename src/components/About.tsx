import React from 'react';
import { Users, Heart, Shield } from 'lucide-react';

export default function About() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About StreamMart</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're passionate about bringing the best entertainment directly to your screens.
            Our mission is to make streaming accessible, affordable, and enjoyable for everyone.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-purple-600 dark:text-purple-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">10M+ Users</h3>
            <p className="text-gray-600 dark:text-gray-300">Trusted by millions worldwide</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Heart className="h-8 w-8 text-purple-600 dark:text-purple-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">98% Satisfaction</h3>
            <p className="text-gray-600 dark:text-gray-300">Loved by our customers</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Shield className="h-8 w-8 text-purple-600 dark:text-purple-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Secure Platform</h3>
            <p className="text-gray-600 dark:text-gray-300">Your security is our priority</p>
          </div>
        </div>
      </div>
    </section>
  );
}