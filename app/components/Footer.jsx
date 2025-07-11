import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaUserShield } from 'react-icons/fa';
import { motion } from 'framer-motion';
const Footer = () => {
  return (
    <div className='bg-gray-50'>
      <div className=' max-w-[1440px] mx-auto bg-gray-50 pt-4 px-4'>
        <footer className="bg-gray-50 max-w-[1440px] mx-auto pt-8  text-color_dark_red1">
          <div className="flex flex-wrap justify-between items-start gap-8 sm:gap-10">
            {/* Logo and Description */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.4 }}
              /* ▼ changed only the utility string */
              className="order-1 md:order-none
               flex flex-col
               text-center sm:text-right lg:text-left
               items-center sm:items-end lg:items-start
               space-y-4
               w-1/2 sm:w-[48%] lg:w-auto"
            >
              <Link href="/">
                <Image
                  className="cursor-pointer
                   h-auto w-auto
                   max-h-20 sm:max-h-28 md:max-h-36 lg:max-h-48"
                  src="/color-logo.png"
                  width={200}
                  height={200}
                  alt="logo"
                  priority
                />
              </Link>

              <div className="w-10/12 sm:w-8/12 lg:w-72
                    text-justify text-gray-400
                    text-xs sm:text-[11px] md:text-[12px]">
                Construction Card Services explicitly states that we are not part of, or
                associated with CSCS or CITB.
              </div>
            </motion.div>

            {/* Important Links */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.4 }}
              className="flex flex-col items-center sm:items-start"
            >
              <h3 className="text-lg font-semibold mb-4 text-center sm:text-right">
                Important Links
              </h3>
              <div className="space-y-2 text-center sm:text-left">
                {[{ title: 'CSCS Card Types', link: 'cscs-card-types' },
                { title: 'Know Your Card', link: 'know-your-card' },
                { title: 'Trade Wise Test', link: 'trade-wise-test' },
                { title: 'Test Center', link: 'test-centers' }].map(elem => (
                  <div key={elem.link} className="text-sm">
                    <Link
                      href={`/${elem.link}`}
                      className="text-purple_primary hover:text-black transition-colors duration-300"
                    >
                      {elem.title}
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CSCS Cards */}
            <div className="mb-2 lg:mb-0 flex flex-col items-center sm:items-start">
              <h3 className="text-lg font-semibold mb-4 text-center sm:text-left">
                CSCS Cards
              </h3>
              <div className="space-y-2 text-center sm:text-left">
                {[{ title: 'Green Labourer Card', link: 'cscs-green-card' },
                { title: 'Blue Skilled Card', link: 'cscs-blue-card' },
                { title: 'Gold Supervisor Card', link: 'cscs-gold-supervisor-card' },
                { title: 'Black Manager Card', link: 'cscs-black-manager-card' }].map(
                  (elem, id) => (
                    <div key={id} className="text-sm">
                      <Link
                        href={`/${elem.link}`}
                        className="text-purple_primary hover:text-black transition-colors duration-300"
                      >
                        {elem.title}
                      </Link>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Social Media / Payment */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.3 }}
              className="relative flex flex-col items-center"
            >
              <div>
                <h3 className="text-lg font-semibold mb-4">We Accept</h3>
                <div className="mt-4">
                  <Image
                    className="cursor-pointer h-auto w-auto max-h-20"
                    height={200}
                    width={200}
                    alt="payment-image"
                    src="/payment-image.png"
                  />
                </div>
              </div>
            </motion.div>
          </div>


          {/* Copyright */}
          <div className='flex items-center justify-between mt-8'>
            <div className="w-full text-center border-t border-gray-300 pt-4 pb-2 media-max-545px:text-[14px]">
              <Link href="/terms-and-conditions" className='mr-4 text-purple_primary'>Terms & Conditions</Link>
              <Link href="/privacy-policy" className='text-purple_primary'>Privacy Policy</Link>
              <p className="text-sm text-gray-500 mt-2 media-max-545px:text-[12px]">
                &copy; {new Date().getFullYear()} Construction card services. All rights reserved.
              </p>
            </div>
            <div className="mt-2 ">
              <Link href="/admin" className="flex items-center justify-center gap-2 text-gray-600 hover:text-gray-800">
                <FaUserShield className="size-4" />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>

  );
};

export default Footer;
