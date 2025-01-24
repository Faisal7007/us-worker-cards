import Link from 'next/link'
import React from 'react'
import { FaArrowAltCircleRight, FaArrowRight } from 'react-icons/fa'

const SmallCard = ({icon,title,button_text,link_to}) => {
  return (
    <div className="w-[210px] h-[190px] media-max-492px:h-[150px] media-max-492px:w-[140px]">
{/* [rgba(0,0,0,0.12)_0px_1px_3px,_rgba(0,0,0,0.24)_0px_1px_2px] */}

    <div className=" h-full w-full shadow-[rgba(0,0,0,0.16)_0px_3px_6px,_rgba(0,0,0,0.23)_0px_3px_6px] rounded-md  flex flex-col justify-center items-center px-4 py-2 
hover:shadow-[rgba(0,0,0,0.12)_0px_1px_3px,_rgba(0,0,0,0.24)_0px_1px_2px]
    
    
    
    
     ">
    <div className="flex flex-col items-center">
      <div className="bg-purple_primary w-fit p-2 text-center rounded-full mb-4">
        {icon}
      </div>
      <div className="text-center">
        <div className="text-purple_primary text-[18px] font-bold mb-2 media-max-492px:text-[14px]">{title}</div>
        {/* <Link href={link_to} className="custom-btn-small btn-small mt-4"><span>{button_text}</span></Link> */}
        {/* <button className='bg-blue_primary text-white px-4 py-2 rounded-md '>Apply Now</button> */}
        <div className='flex justify-center cursor-pointer'>
        <Link href={`${link_to}`}>

        <FaArrowRight className='size-8 text-purple_primary animate-bounceHorizontal media-max-492px:size-4' />
        </Link>
        </div>
      </div>
    </div>
  </div>
  </div>
  
  )
}

export default SmallCard
