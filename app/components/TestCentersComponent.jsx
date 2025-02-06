
"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const TradeTestComponent = ({item}) => {
    const router=useRouter()
    const handleClick=(link)=>{
        router.push(link)

    }
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 ">
      <h1 className="text-[25px] text-center leading-8 font-semibold text-gray-800 mb-4">
        {item.title}
      </h1>
      <div className="text-gray-600 text-sm sm:text-base">
        <p className="mb-1 text-center">
          <span className="font-medium  text-gray-700">Full Address:</span> {item.address}
        </p>
        
      </div>
      <button onClick={()=>handleClick(item.link)} className="mt-4 w-full bg-purple_primary  text-white font-medium py-2 rounded-lg hover:bg-[#84286a] transition duration-300">
        Book Test in {item.button_text}
      </button>
    </div>
  );
};

export default TradeTestComponent;
