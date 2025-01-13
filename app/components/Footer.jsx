import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-color_dark_red1 mt-10">
      <div className="container mx-auto pt-8 px-4 md:px-8 lg:px-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col items-center lg:items-start space-y-4">
          
            <Image
              src="/new-logo-color.png"
              width={100}
              height={100}
              alt="logo"
           
              priority={true}
            />
          
          <div className="w-full lg:w-72 text-justify text-sm md:text-base">
          Construction cards services explicitly states that we are not part of, or associated with CSCS or CITB.
          </div>
        </div>

        {/* Important Links */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-semibold mb-4 text-center sm:text-left">
            Important Links
          </h3>
          <ul className="space-y-2 text-center sm:text-left">
            {['CSCS Card Types', 'Know Your Card', 'Trade Wise Test', 'Test Center'].map((link) => (
              <li key={link}>
                <a
                  href={`/${link.toLowerCase()}`}
                  className="text-purple_primary hover:text-purple_primary hover:font-semibold  transition-all duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-semibold mb-4 text-center sm:text-left">
            Follow Us
          </h3>
          <div className="flex space-x-4 justify-center sm:justify-start">
            {[
              { icon: <FaFacebook size={24} />, link: 'https://facebook.com' },
              { icon: <FaTwitter size={24} />, link: 'https://twitter.com' },
              { icon: <FaInstagram size={24} />, link: 'https://instagram.com' },
              { icon: <FaLinkedin size={24} />, link: 'https://linkedin.com' },
            ].map(({ icon, link }, index) => (
              <div
                key={index}
                className="h-10 w-10 flex justify-center items-center text-white bg-purple_primary rounded-full hover:text-purple_primary  hover:bg-white transition-all duration-300"
              >
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {icon}
                </a>
              </div>
            ))}
          </div>
          <div className='mt-4 text-lg font-semibold text-center sm:text-left'>
        
            <Image
              height={200}
              width={200}
              alt='payment-image'
              src="/payment-methods-img.png"
              className='h-24 '
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center border-t border-gray-300 py-4">
      <Link href="#" className='mr-4 text-purple_primary'>Terms & Conditions</Link>
      <Link href="#" className='text-purple_primary'>Privacy Policy</Link>
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Construction cards services. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
