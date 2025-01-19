import Image from 'next/image'
import React from 'react'

const ContactUsBanner = () => {
  return (
    <div className=" relative">
    
            <Image
              src="/banner-2.jpg"
              className="max-h-[410px] w-full"
              alt="banner"
              width={1400}
              height={700}
            />
            <div className="text-balck font-semibold text-4xl sm:text-5xl lg:text-[65px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              Contact Us
            </div>
          </div>

    // <div className="h-[380px] relative bg-[url('/contact-us-banner.jpg')] mb-4 bg-cover bg-center">
    //      <div className="text-balck font-semibold text-4xl sm:text-5xl lg:text-[65px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
    //          Contact Us
    //          </div>
    
    // </div>
  )
}

export default ContactUsBanner
