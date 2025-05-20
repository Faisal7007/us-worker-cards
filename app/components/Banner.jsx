import React, { useEffect, useState } from 'react';
import Link from 'next/link'; // Use next/link instead of react-router-dom
import { Search, CheckCircle } from 'lucide-react';

const Banner = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    'NVQs',
    'Health and Safety Course',
    'CITB Test'
  ];

  const images = [
    '/green-vertical.png',
    '/red-vertical.png',
    '/black-vertical.png',
    '/blue-vertical.png',
    '/white-vertical.png'
  ];

  // Map category names to URL slugs
  const categoryLinks = {
    'NVQs': '/nvq-level-2',
    'Health and Safety Course': '/health-and-safety-awareness',
    'CITB Test': '/book-citb-test/default'
  };

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
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
    console.log('Selected categories:', selectedCategories);
  };

  return (
    <div className="relative h-screen flex items-center pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/banner.jpg')",
          filter: 'brightness(0.3)',
        }}
      />

      <div className="container mx-auto px-4 z-10 text-white">
        <div className="text-center lg:text-left max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-6 mb-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight max-w-2xl">
                Construction Card Services
              </h1>
              <p className="text-xl md:text-2xl max-w-lg">
                "Empowering the Future of Construction and Safety in the UK"
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-4">
                {categories.map((category) => (
                  <Link href={categoryLinks[category]} key={category} passHref>
                    <div
                      onClick={() => toggleCategory(category)}
                      className={`flex items-center font-medium px-4 py-2 rounded-md border border-green-400 text-white transition duration-300 hover:bg-green-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 ${selectedCategories.includes(category) ? 'bg-green-400 text-black' : 'bg-transparent'} cursor-pointer`}
                      role="button"
                      tabIndex={0}
                    >
                      <CheckCircle
                        size={20}
                        className={`mr-2 ${selectedCategories.includes(category) ? 'text-black' : 'text-white'}`}
                      />
                      {category}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/apply-card-for/cscs" passHref>
              <img
                src={images[currentIndex]}
                alt="Illustration"
                className="w-60 h-86 object-cover rounded-lg shadow-md transition duration-500 cursor-pointer"
              />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;


