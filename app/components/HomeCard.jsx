import Link from 'next/link'
import React from 'react'
import { MdOutlineLaptopMac } from 'react-icons/md'

const HomeCard = ({icon,title,description,button_text,link_to}) => {
  return (
    <div className="shadow-[rgba(0,0,0,0.12)_0px_1px_3px,_rgba(0,0,0,0.24)_0px_1px_2px] rounded-md max-w-[400px] flex flex-col justify-center items-center p-4 hover:shadow-[rgba(0,0,0,0.16)_0px_3px_6px,_rgba(0,0,0,0.23)_0px_3px_6px] ">
    <div className="flex flex-col items-center">
      <div className="bg-blue_primary w-fit p-2 text-center rounded-full mb-4">
        {/* <MdOutlineLaptopMac className="size-10 text-white" /> */}
        {icon}
      </div>
      <div className="text-center">
        <div className="text-blue_primary text-[18px] font-bold mb-2">{title}</div>
        <div className={`mb-2 text-[14px] ${description ? 'h-[100px]' : 'h-[0px]'}`}>
        {description}
        </div>
        <Link href={link_to} className="custom-btn btn-3"><span>{button_text}</span></Link>
      </div>
    </div>
  </div>
  
  )
}

export default HomeCard
