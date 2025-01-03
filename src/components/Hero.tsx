import React from 'react';
import { Play, Film, Tv, Monitor } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
  onCompare: () => void;
}

export default function Hero({ onExplore, onCompare }: HeroProps) {
  return (
    <div className="relative bg-gradient-to-br from-purple-900/90 via-purple-800/90 to-purple-900/90 backdrop-blur-sm text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Your Ultimate OTT Platform Destination
            </h1>
            <p className="mt-6 text-lg text-purple-100">
              Get instant access to premium streaming services all in one place. Compare, subscribe, and start streaming your favorite content today.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button 
                onClick={onExplore}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors flex items-center"
              >
                <Play className="h-5 w-5 mr-2" />
                Explore Plans
              </button>
              <button 
                onClick={onCompare}
                className="border-2 border-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Compare Services
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
              <Film className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Movies</h3>
              <p className="text-purple-100">Latest blockbusters and timeless classics</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
              <Tv className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">TV Shows</h3>
              <p className="text-purple-100">Binge-worthy series and exclusive content</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
              <Monitor className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Multi-device</h3>
              <p className="text-purple-100">Watch on any device, anytime</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
              <Play className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instant Access</h3>
              <p className="text-purple-100">Start streaming immediately after purchase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}