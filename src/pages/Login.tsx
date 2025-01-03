import React, { useState } from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import InputField from '../components/auth/InputField';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login logic here
    console.log('Login:', formData);
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Log in to your account"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label="Email"
          type="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <InputField
          label="Password"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center">
            <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">Remember me</span>
          </label>
          <a href="/forgot-password" className="text-sm text-purple-600 hover:text-purple-700">
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Log In
        </button>
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Don't have an account?{' '}
          <a href="/signup" className="text-purple-600 hover:text-purple-700">
            Sign up
          </a>
        </p>
      </form>
    </AuthLayout>
  );
}