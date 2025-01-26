import Image from 'next/image'
import React from 'react'

const Laoder = () => {
  return (
    <div className='flex flex-col  items-center bg-gray-800 pt-10'>
     <h1 className='text-[25px] font-semibold text-white'>Fetching...</h1>

       <Image
      src="/pendulum.gif"
     width={700}
    height={400}
    alt="loader"
    className='h-[300px] w-[400px]'
     />
    </div>
  )
}

export default Laoder
