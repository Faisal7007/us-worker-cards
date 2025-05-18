import React, { useEffect, useState } from 'react';
import { Search, CheckCircle } from 'lucide-react';
// import { CourseCategory } from '../types';

const Banner = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    'Construction',
    'First Aid',
    'Health and Safety',
    'CITB Approved'
  ];

  const images = [
    '/green-vertical.png',
    '/red-vertical.png',
    '/black-vertical.png'
  ];

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

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
          filter: 'brightness(0.3)',
        }}
      />

      {/* Foreground Content */}
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="text-center lg:text-left max-w-5xl mx-auto">

          {/* Paragraph and image side-by-side */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-0 mb-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight max-w-2xl">
                Construction Card Services
              </h1>
              <p className="text-xl md:text-2xl max-w-lg">
                "The UK's leading construction and health & safety course provider"
              </p>

              {/* Category Filters */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-1 md:gap-1 max-w-xs">
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
            <img
              src={images[currentIndex]}
              alt="Illustration"
              className="w-60 h-86 object-cover mt-6 sm:mt-0 rounded-lg shadow-md transition duration-500"
            />
          </div>


        </div>
      </div>
    </div>


  );
};

export default Banner;
