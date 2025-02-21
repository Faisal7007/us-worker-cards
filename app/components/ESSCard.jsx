"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import { UserContext } from '../context-api/UserContext';

const ESSCard = ({item}) => {
  // const id=11

  const {setEssId} = useContext(UserContext);

  const handleApplyNow=()=>{
    setEssId(item.id)
  }

  return (
//     <div>

//     <div className=' w-full h-full rounded-lg shadow-[rgba(0,0,0,0.12)_0px_1px_3px,_rgba(0,0,0,0.24)_0px_1px_2px]'>
//     <Image
//         src={`${item.image_path}`}
//         alt='card-image'
//         height={600}
//         width={600}
//         className=' rounded-t-lg shadow-[rgba(0,0,0,0.12)_0px_1px_3px,_rgba(0,0,0,0.24)_0px_1px_2px]'
//     />
//     <div className='px-4 py-8 bg-gray-100 h-[200px] media-max-470px:py-4 media-max-470px:h-[160px]'>
//     <div className="">
//         <h1 className='font-bold text-[20px] mb-2 text-center media-max-470px:text-[15px]'>{item.title}</h1>
//         <p className='mb-2 text-center media-max-470px:text-[14px]'>{item.description}</p>
//         <h2 className='font-semibold text-center media-max-470px:text-[14px]'>Validity - {item.validity}</h2>
//     </div>
//     </div>

//     <div className='flex justify-between items-end bg-gray-100'>
//     <Link href={`${item.know_more_link}`} className='px-4 py-3 bg-purple_primary rounded-tr-lg rounded-bl-lg text-white border-2 border-transparent hover:border-purple_primary hover:text-purple_primary hover:bg-white transition-all duration-300 media-max-470px:text-[14px] media-max-470px:px-2 media-max-470px:py-2' >
//         Know More
//     </Link>

// <Link href={`${item.apply_now_link}`} className='px-4 py-3 bg-purple_primary rounded-tl-lg rounded-br-lg text-white border-2 border-transparent hover:border-purple_primary hover:text-purple_primary hover:bg-white transition-all duration-300 media-max-470px:text-[14px] media-max-470px:px-2 media-max-470px:py-2'>
//    <button onClick={handleApplyNow}>
//         Apply Now
//    </button>
// </Link>

//     </div>
      
//     </div>
//     </div>

<div className="flex justify-center items-center rounded-xl  bg-purple_primary p-1">
<div className="max-w-full bg-white shadow-2xl rounded-xl overflow-hidden border border-gray-300 transform transition duration-500 hover:scale-[1.02]">
  <div className="relative">
  <Image
        src={`${item.image_path}`}
         alt='card-image'
    height={600}       width={600}
        className=' rounded-t-lg shadow-[rgba(0,0,0,0.12)_0px_1px_3px,_rgba(0,0,0,0.24)_0px_1px_2px]'
        />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
  </div>
  <div className="p-6">
    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
    <p className="text-gray-600 text-sm mt-3">{item.description}</p>
    <p className="text-gray-800 font-medium mt-3">🕒 Validity: {item.validity}</p>
    <div className="mt-6 flex justify-between items-center">
      <Link href={item.know_more_link}>
        <span className="text-purple_primary font-semibold hover:underline cursor-pointer">Know More →</span>
      </Link>
      <Link onClick={handleApplyNow} href={item.apply_now_link}>
        <span className="bg-purple_primary text-white font-semibold py-2 px-4 rounded-md  border-2 border-transparent hover:border-purple_primary hover:text-purple_primary hover:bg-white transition-all duration-300 media-max-492px:text-[14px] media-max-490px:px-4 media-max-460px:text-[14px] media-max-460px:px-2 media-max-460px:py-2">Apply Now</span>
      </Link>
    </div>
  </div>
</div>
</div>

  )
}

export default ESSCard
