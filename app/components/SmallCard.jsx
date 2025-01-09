import Link from 'next/link'
import React from 'react'
import { FaArrowAltCircleRight, FaArrowRight } from 'react-icons/fa'

const SmallCard = ({icon,title,button_text,link_to}) => {
  return (
    <div className="shadow-[rgba(0,0,0,0.12)_0px_1px_3px,_rgba(0,0,0,0.24)_0px_1px_2px] rounded-md w-[210px] h-[200px] flex flex-col justify-center items-center px-4   hover:shadow-[rgba(0,0,0,0.16)_0px_3px_6px,_rgba(0,0,0,0.23)_0px_3px_6px] ">
    <div className="flex flex-col items-center">
      <div className="bg-blue_primary w-fit p-2 text-center rounded-full mb-4">
        {icon}
      </div>
      <div className="text-center">
        <div className="text-blue_primary text-[18px] font-bold mb-2">{title}</div>
        {/* <Link href={link_to} className="custom-btn-small btn-small mt-4"><span>{button_text}</span></Link> */}
        {/* <button className='bg-blue_primary text-white px-4 py-2 rounded-md '>Apply Now</button> */}
        <div className='flex justify-center cursor-pointer'>
        <FaArrowRight className='size-8 text-blue_primary animate-bounceHorizontal ' />
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default SmallCard
