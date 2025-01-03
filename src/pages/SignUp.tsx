import React, { useState } from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import InputField from '../components/auth/InputField';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add signup logic here
    console.log('Sign up:', formData);
  };

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Start your streaming journey today"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label="Full Name"
          type="text"
          placeholder="John Doe"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
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
        <InputField
          label="Confirm Password"
          type="password"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          required
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Sign Up
        </button>
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Already have an account?{' '}
          <a href="/login" className="text-purple-600 hover:text-purple-700">
            Log in
          </a>
        </p>
      </form>
    </AuthLayout>
  );
}