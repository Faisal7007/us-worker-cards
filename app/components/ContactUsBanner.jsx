import Image from 'next/image'
import React from 'react'

const ContactUsBanner = () => {
  return (
    <div className="relative">
            <Image
              src="/banner-2.jpg"
              className="max-h-[410px] w-full"
              alt="banner"
              width={1400}
              height={700}
            />
          </div>

  )
}

export default ContactUsBanner
