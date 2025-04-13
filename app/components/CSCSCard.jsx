"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import { UserContext } from '../context-api/UserContext';
import {  useRouter } from 'next/navigation';
const CSCSCard = ({ item }) => {
  // const id=11

  const { setIdx,setItem } = useContext(UserContext);
  const router = useRouter();

  const handleApplyNow = () => {
    setIdx(item.id)
    setItem(item)
    router.push(item.apply_now_link)
  }

  console.log(item,"item")
  return (
    <div className="flex justify-center items-center rounded-xl  bg-purple_primary p-1">
      <div className="max-w-full bg-white shadow-2xl rounded-xl overflow-hidden border border-gray-300 transform transition duration-500 hover:scale-[1.02]">
        <div className="relative">
          <Image
            src={`${item.image_path}`}
            alt='card-image'
            height={600} width={600}
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
            <div onClick={()=>handleApplyNow(item)}>
              <span className="bg-purple_primary text-white font-semibold py-2 px-4 rounded-md  border-2 border-transparent hover:border-purple_primary hover:text-purple_primary hover:bg-white transition-all duration-300 media-max-492px:text-[14px] media-max-490px:px-4 media-max-460px:text-[14px] media-max-460px:px-2 media-max-460px:py-2">Apply Now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CSCSCard
