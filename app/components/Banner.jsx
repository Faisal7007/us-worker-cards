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
    // '/red-vertical.png',
    // '/black-vertical.png',
    // '/blue-vertical.png',
    // '/white-vertical.png'
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
    <div className="relative min-h-screen flex items-center pt-24 sm:pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/banner.jpg')",
          filter: 'brightness(0.5)',
        }}
      />

      <div className="container mx-auto px-4 z-10 text-white">
        <div className="text-center lg:text-left max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-8 mb-6">
            <div className="w-full sm:w-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight max-w-2xl">
                Construction Card Services
              </h1>
              <p className="text-xl md:text-2xl max-w-lg text-gray-200">
                "Empowering the Future of Construction and Safety in the UK"
              </p>

              <div className="flex flex-wrap gap-3 mt-6 justify-center sm:justify-start">
                {categories.map((category) => (
                  <Link legacyBehavior href={categoryLinks[category]} key={category}>
                    <a
                      onClick={() => toggleCategory(category)}
                      className={`gradient-border relative inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold transition duration-200 ${selectedCategories.includes(category)
                        ? 'bg-green-400 text-black'
                        : 'bg-white/10 text-white hover:bg-green-500 hover:text-black'
                        }`}
                    >

                      <CheckCircle
                        size={18}
                        className={`mr-2 ${selectedCategories.includes(category) ? 'text-black' : 'text-white'
                          }`}
                      />
                      {category}
                    </a>
                  </Link>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  href="https://wa.me/447883317237?text=Hi%20there!%20I%20need%20help%20with%20Construction%20Card%20Services."
                  className="gradient-border inline-block px-5 py-3 mt-4  text-white rounded-lg font-semibold shadow-md transition duration-200"
                >
                  💬 Got Stuck/Need Help
                </Link>

                <p className="text-sm text-gray-300 mt-2">Talk to our experts for free now</p>
              </div>
            </div>

            <Link href="/apply-card-for/cscs" passHref>
              <img
                src={images[currentIndex]}
                alt="Illustration"
                className="w-64 h-80 object-cover rounded-xl shadow-xl cursor-pointer transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Banner;


