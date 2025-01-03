import React from 'react';
import { Star } from 'lucide-react';

export default function Featured() {
  const featuredContent = [
    {
      title: "The Dark Knight",
      image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=600&q=80",
      price: "$14.99",
      rating: 4.9
    },
    {
      title: "Stranger Things",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=600&q=80",
      price: "$29.99",
      rating: 4.8
    },
    {
      title: "Inception",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80",
      price: "$12.99",
      rating: 4.7
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Content</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredContent.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <span className="text-purple-600 font-bold">{item.price}</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-2 text-gray-600">{item.rating}</span>
                </div>
                <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}