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
        <div className=" flex justify-between items-center gap-8 flex-wrap media-max-545px:justify-between">
          {/* Logo and Description */}
          <motion.div initial={{ x: -60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false,amount:0.4}} className="flex flex-col items-center lg:items-start space-y-4">
            <Link href="/">
              <Image
                src="/color-logo.png"
                width={100}
                height={100}
                alt="logo"
                priority={true}
              />
            </Link>

            <div className="w-full lg:w-72 sm:w-72 text-justify text-sm md:text-base media-max-545px:text-[14px]">
            Construction Card Services explicitly states that we are not part of, or associated with CSCS or CITB.
            </div>
          </motion.div>

          {/* Important Links */}
          <motion.div  initial={{ x: -60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false,amount:0.4}} className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold mb-4 text-center sm:text-right media-max-545px:text-[16px]">
              Important Links
            </h3>
            <div className="space-y-2 text-center sm:text-left media-max-545px:text-justify ">
              {[{title:'CSCS Card Types',link:'cscs-card-types'}, {title:'Know Your Card',link:'know-your-card'}, {title:'Trade Wise Test',link:'trade-wise-test'}, {title:'Test Center',link:'test-centers'}].map((elem) => (
                <div key={elem.link} className='media-max-545px:text-[14px] media-max-545px:mr-2'>
                  <Link
                    href={`/${elem.link}`}
                    className="text-purple_primary hover:text-black transition-all duration-300"
                  >
                    {elem.title}
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false,amount:0.3}} className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold mb-4 text-center  sm:text-left media-max-545px:mr-12 media-max-545px:text-[16px]">
              CSCS Cards
            </h3>
            <div className="space-y-2 text-center sm:text-left media-max-545px:text-justify">
              {[{ title: 'Green Labourer Card', link: 'cscs-green-card' }, { title: 'Blue Skilled Card', link: 'cscs-blue-card' }, { title: 'Gold Supervisor Card', link: 'cscs-gold-supervisor-card' }, { title: 'Black Manager Card', link: 'cscs-black-manager-card' }].map((elem, id) => (
                <div key={id} className='media-max-545px:text-[14px] '>
                  <Link
                    href={`/${elem.link}`}
                    className="text-purple_primary  hover:text-black  transition-all duration-300"
                  >
                    {elem.title}
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Social Media Links */}
          <motion.div initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false,amount:0.3}} className="relative flex flex-col items-center  media-max-545px:justify-end">
        <div className='media-max-545px:ml-4  '>
            <h3 className="text-lg font-semibold mb-4 text-center sm:text-left">
              Follow Us
            </h3>
            {/* <div className="flex space-x-4 justify-center sm:justify-start">
              {[
                { icon: <FaFacebook size={18}  />, link: 'https://facebook.com' },
                { icon: <FaTwitter size={18} />, link: 'https://twitter.com' },
                { icon: <FaInstagram size={18} />, link: 'https://instagram.com' },
                { icon: <FaLinkedin size={18} />, link: 'https://linkedin.com' },
              ].map(({ icon, link }, index) => (
                <div
                  key={index}
                  className="h-8 w-8 flex justify-center items-center text-white bg-purple_primary rounded-full hover:text-purple_primary  hover:bg-white transition-all duration-300"
                >
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {icon}
                  </a>
                </div>
              ))}
            </div> */}
            <div className='mt-4 h-12 media-max-545px:ml-12'>
              <Image
                height={200}
                width={200}
                alt='payment-image'
                src="/payment-img.png"
                className='h-full media-max-545px:h-full mr-16'
              />
            </div>

            <div className="mt-2 ">
              <Link href="/admin" className="flex items-center justify-center gap-2 text-gray-600 hover:text-gray-800">
                <FaUserShield className="size-4 absolute left-40 -bottom-4"/>
              </Link>
            </div>
        </div>
          </motion.div>
          
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center border-t border-gray-300 pt-4 pb-2 media-max-545px:text-[14px]">
          <Link href="/terms-and-conditions" className='mr-4 text-purple_primary'>Terms & Conditions</Link>
          <Link href="/privacy-policy" className='text-purple_primary'>Privacy Policy</Link>
          <p className="text-sm text-gray-500 mt-2 media-max-545px:text-[12px]">
            &copy; {new Date().getFullYear()} Construction card services. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
    </div>

  );
};

export default Footer;
