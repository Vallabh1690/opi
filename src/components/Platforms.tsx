import React from 'react';
import { Play, Film, Tv } from 'lucide-react';

const platforms = [
  {
    name: 'Netflix',
    description: 'Stream award-winning Netflix originals, movies, and TV shows on all your favorite devices.',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80',
    icon: <Play className="h-8 w-8 text-red-600" />
  },
  {
    name: 'Amazon Prime',
    description: 'Watch exclusive Amazon Originals, movies, and TV shows with Prime Video.',
    image: 'https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&w=800&q=80',
    icon: <Film className="h-8 w-8 text-blue-600" />
  },
  {
    name: 'Disney+',
    description: 'The streaming home of Disney, Pixar, Marvel, Star Wars, and National Geographic.',
    image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=800&q=80',
    icon: <Tv className="h-8 w-8 text-purple-600" />
  }
];

export default function Platforms() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Popular Platforms</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {platforms.map((platform) => (
            <div key={platform.name} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <img src={platform.image} alt={platform.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {platform.icon}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-2">{platform.name}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{platform.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}