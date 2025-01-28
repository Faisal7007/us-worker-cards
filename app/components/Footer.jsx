import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-gray-50 pt-8 px-4'>
    <footer className="bg-gray-50 max-w-[1440px] mx-auto pt-8  text-color_dark_red1">
      <div className=" flex justify-between items-center gap-8 flex-wrap media-max-545px:justify-between">
        {/* Logo and Description */}
        <div className="flex flex-col items-center lg:items-start space-y-4">
            <Image
              src="/new-logo-color.png"
              width={100}
              height={100}
              alt="logo"
              priority={true}
            />
          
          <div className="w-full lg:w-72 sm:w-72 text-justify text-sm md:text-base media-max-545px:text-[14px]">
          Construction cards services explicitly states that we are not part of, or associated with CSCS or CITB.
          </div>
        </div>

        {/* Important Links */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-semibold mb-4 text-center sm:text-right media-max-545px:text-[16px]">
            Important Links
          </h3>
          <div className="space-y-2 text-center sm:text-left media-max-545px:text-justify ">
            {['CSCS Card Types', 'Know Your Card', 'Trade Wise Test', 'Test Center'].map((link) => (
              <div key={link} className='media-max-545px:text-[14px] media-max-545px:mr-2'>
                <Link
                  href={`/${link.toLowerCase()}`}
                  className="text-purple_primary hover:text-black transition-all duration-300"
                >
                  {link}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-semibold mb-4 text-center  sm:text-left media-max-545px:mr-12 media-max-545px:text-[16px]">
            CSCS Cards
          </h3>
          <div className="space-y-2 text-center sm:text-left media-max-545px:text-justify">
            {[{ title:'Green Labourer Card',link:'cscs-green-card' }, { title:'Blue Skilled Card',link:'cscs-blue-card' }, { title:'Gold Supervisor Card',link:'cscs-gold-supervisor-card' },{ title:'Black Manager Card',link:'cscs-black-manager-card'}].map((elem,id) => (
              <div key={id}  className='media-max-545px:text-[14px] '>
                <Link
                  href={`/${elem.link}`}
                  className="text-purple_primary  hover:text-black  transition-all duration-300"
                >
                  {elem.title}
                </Link>
              </div>
            ))}
          </div>
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
              className='h-24 mt-5 media-max-545px:h-18 '
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center border-t border-gray-300 pt-4 pb-2 media-max-545px:text-[14px]">
      <Link href="/terms-and-conditions" className='mr-4 text-purple_primary'>Terms & Conditions</Link>
      <Link href="/privacy-policy" className='text-purple_primary'>Privacy Policy</Link>
        <p className="text-sm text-gray-500 mt-2 media-max-545px:text-[12px]">
          &copy; {new Date().getFullYear()} Construction cards services. All rights reserved.
        </p>
      </div>
    </footer>
</div>

  );
};

export default Footer;
