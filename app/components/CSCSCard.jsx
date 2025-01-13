import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CSCSCard = ({item}) => {
  return (
    <div>

    <div className=' w-full h-full rounded-lg shadow-[rgba(0,0,0,0.12)_0px_1px_3px,_rgba(0,0,0,0.24)_0px_1px_2px]'>
    <Image
        src={`${item.image_path}`}
        alt='card-image'
        height={600}
        width={600}
        className=' rounded-t-lg shadow-[rgba(0,0,0,0.12)_0px_1px_3px,_rgba(0,0,0,0.24)_0px_1px_2px]'
    />
    <div className='px-4 py-8 bg-gray-100 h-[200px]'>
    <div className="">
        <h1 className='font-bold text-[20px] mb-2 text-center'>{item.title}</h1>
        <p className='mb-2 text-center'>{item.description}</p>
        <h2 className='font-semibold text-center'>Validity - {item.validity}</h2>
    </div>
    </div>

    <div className='flex justify-between items-end bg-gray-100'>
    <Link href={`${item.know_more_link}`} className='px-4 py-3 bg-purple_primary rounded-tr-lg rounded-bl-lg text-white border-2 border-transparent hover:border-purple_primary hover:text-purple_primary hover:bg-white transition-all duration-300' >
        Know More
    </Link>

<Link href={`${item.apply_now_link}`} className='px-4 py-3 bg-purple_primary rounded-tl-lg rounded-br-lg text-white border-2 border-transparent hover:border-purple_primary hover:text-purple_primary hover:bg-white transition-all duration-300'>
        Apply Now
</Link>

    </div>
      
    </div>
    </div>

  )
}

export default CSCSCard
