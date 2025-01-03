import React from 'react';
import { Play, User } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  onLoginClick: () => void;
  onSignUpClick: () => void;
}

export default function Navbar({ onLoginClick, onSignUpClick }: NavbarProps) {
  return (
    <nav className="fixed w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Play className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Infy OTT</span>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button 
              onClick={onLoginClick}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <User className="h-6 w-6" />
            </button>
            <button 
              onClick={onSignUpClick}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}