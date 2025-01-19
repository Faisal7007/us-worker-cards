import Link from 'next/link'
import React from 'react'

const HomeCard = ({icon,title,description,button_text,link_to}) => {
  return (
    <div className="border-2 border-purple_primary shadow-[rgba(0,0,0,0.12)_0px_1px_3px,_rgba(0,0,0,0.24)_0px_1px_2px] rounded-md w-[320px] h-[310px] flex flex-col justify-center items-center px-4   hover:shadow-[rgba(0,0,0,0.16)_0px_3px_6px,_rgba(0,0,0,0.23)_0px_3px_6px] media-max-545px:w-[90vw]  ">
    <div className="flex flex-col items-center">
      <div className="bg-purple_primary  w-fit p-2 text-center rounded-full mb-6">
        {/* <MdOutlineLaptopMac className="size-10 text-white" /> */}
        {icon}
      </div>
      <div className="text-center">
        <div className="text-black text-[18px] text-start font-semibold mb-1">{title}</div>
        <div className={`mb-6 text-[14px] text-justify ${description ? 'h-[100px]' : 'h-[0px]'}`}>
        {description}
        </div>
        <Link href={link_to} className="bg-purple_primary text-white font-semibold py-2 px-4 rounded-md my-5 border-2 border-transparent hover:border-purple_primary hover:text-purple_primary hover:bg-white transition-all duration-300"><span>{button_text}</span></Link>
      </div>
    </div>
  </div>
  
  )
}

export default HomeCard
