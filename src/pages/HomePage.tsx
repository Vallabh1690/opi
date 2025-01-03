import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { platforms } from '../data/platforms';
import PlatformCard from '../components/PlatformCard';
import PlatformFilters from '../components/PlatformFilters';
import CompareServices from '../components/CompareServices';
import CartPage from '../components/Cart/CartPage';
import Footer from '../components/Footer/Footer';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const compareRef = useRef<HTMLDivElement>(null);

  const filteredPlatforms = platforms.filter(
    platform => selectedCategory === 'all' || platform.category === selectedCategory
  );

  const scrollToCompare = () => {
    compareRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero 
        onExplore={() => document.getElementById('platforms')?.scrollIntoView({ behavior: 'smooth' })}
        onCompare={scrollToCompare}
      />
      <div ref={compareRef}>
        <CompareServices />
      </div>
      <main id="platforms" className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Available Platforms</h2>
          <PlatformFilters
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlatforms.map((platform) => (
            <PlatformCard key={platform.id} platform={platform} />
          ))}
        </div>
        <div className="mt-12">
          <CartPage />
        </div>
      </main>
      <Footer />
    </div>
  );
}