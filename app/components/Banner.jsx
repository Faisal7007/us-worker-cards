import React, { useState } from 'react';
import { Search, CheckCircle } from 'lucide-react';
// import { CourseCategory } from '../types';

const Banner = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [
    'Construction',
    'First Aid',
    'Health and Safety',
    'CITB Approved'
  ];

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search (in a real app, this would filter courses)
    console.log('Search query:', searchQuery);
    console.log('Selected categories:', selectedCategories);
  };

  return (
    <div className="relative h-screen flex items-center pt-16">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/banner.jpg')",
          filter: 'brightness(0.3)'
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Construction Card Services
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          "The UK's leading construction and health & safety course provider"
        </p>

        {/* Search Box */}
        {/* <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-opacity-40 bg-white p-2 rounded-full mb-8"
        >
          <div className="flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Courses..."
              className="flex-grow bg-transparent text-white placeholder-gray-300 px-4 py-2 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 transition-colors text-white font-medium px-6 py-2 rounded-full flex items-center"
            >
              <span className="hidden md:inline mr-2">Search</span>
              <Search size={20} />
            </button>
          </div>
        </form> */}

        {/* Category Filters */}
        <div className="flex flex-wrap text-white justify-center gap-4 md:gap-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => toggleCategory(category)}
              className={`flex items-center font-medium ${selectedCategories.includes(category)
                ? 'text-green-400'
                : 'text-white'
                }`}
            >
              <CheckCircle
                size={20}
                className={`mr-2 ${selectedCategories.includes(category)
                  ? 'text-green-400'
                  : 'text-white opacity-80'
                  }`}
              />
              {category}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Banner;
