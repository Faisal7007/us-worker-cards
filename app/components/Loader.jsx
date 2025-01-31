import Image from 'next/image'
import React from 'react'

const Laoder = () => {
  return (
    <div className='flex flex-col  items-center'>
     <h1 className='text-[25px] font-semibold mb-3 mt-5'>Fetching...</h1>

       <Image
      src="/loading-gif.gif"
     width={700}
    height={400}
    alt="loader"
    className='h-[50px] w-[50px]'
     />
    </div>
  )
}

export default Laoder
