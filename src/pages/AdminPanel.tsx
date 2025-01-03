import React from 'react';
import { Users, TrendingUp, AlertCircle, Settings } from 'lucide-react';

export default function AdminPanel() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', subscriptions: 2, joined: '2024-02-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', subscriptions: 3, joined: '2024-02-16' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Total Users</h3>
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">1,234</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Revenue</h3>
              <TrendingUp className="h-6 w-6 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">₹1.2M</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Issues</h3>
              <AlertCircle className="h-6 w-6 text-red-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">3</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Settings</h3>
              <Settings className="h-6 w-6 text-purple-600" />
            </div>
            <button className="text-purple-600 text-sm hover:text-purple-700">System Settings</button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Recent Users</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b dark:border-gray-700">
                  <th className="text-left py-3 px-4">ID</th>
                  <th className="text-left py-3 px-4">Name</th>
                  <th className="text-left py-3 px-4">Email</th>
                  <th className="text-left py-3 px-4">Subscriptions</th>
                  <th className="text-left py-3 px-4">Joined</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b dark:border-gray-700">
                    <td className="py-3 px-4">{user.id}</td>
                    <td className="py-3 px-4">{user.name}</td>
                    <td className="py-3 px-4">{user.email}</td>
                    <td className="py-3 px-4">{user.subscriptions}</td>
                    <td className="py-3 px-4">{user.joined}</td>
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