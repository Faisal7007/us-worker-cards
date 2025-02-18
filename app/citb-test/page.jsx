import Image from 'next/image'
import React from 'react'
import items from '../constants/citbTestData'
import Link from 'next/link'

const page = () => {
  return (
    <div className='max-w-[1440px] mx-auto px-4 pt-8 mt-[102px]'>
      <h1 className='text-[30px] font-bold mb-2 capitalize'>
        CITB HS&E (Health, Safety, and Environment) Test.
      </h1>
      <div className='h-[1px] w-full bg-slate-300 my-4'></div>
      
      <Image
        src="/banner-2.jpg"
        className="max-h-[410px] w-full"
        alt="banner"
        width={1400}
        height={700}
      />

      <div className='mt-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
        {items &&
          items.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className='bg-white  shadow-md p-4 rounded-lg'
            >
              <h1 className='text-[20px] text-purple_primary underline font-bold capitalize'>{item.title}</h1>
              <p>{item.description}</p>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default page
