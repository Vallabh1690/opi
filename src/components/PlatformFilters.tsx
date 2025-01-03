import React from 'react';

interface PlatformFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function PlatformFilters({ selectedCategory, onCategoryChange }: PlatformFiltersProps) {
  const categories = [
    { id: 'all', name: 'All Platforms' },
    { id: 'cart', name: 'My Cart' }
  ];

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-lg transition-colors ${
            selectedCategory === category.id
              ? 'bg-purple-600 text-white'
              : 'bg-white/10 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-white/20'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}