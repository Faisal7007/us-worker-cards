import Link from 'next/link'
import React from 'react'

const HomeCard = ({ icon, title, description, button_text, link_to }) => {
  return (
    <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl w-[320px] h-[310px] flex flex-col justify-center items-center px-6 py-4 media-max-545px:w-[90vw]">
      <div className="flex flex-col items-center">
        <div className="bg-purple_primary p-3 rounded-full mb-4 shadow-md">
          {icon}
        </div>
        <div className="text-center">
          <h3 className="text-black text-[18px] font-semibold mb-2">{title}</h3>
          <p className={`text-[14px] text-gray-700 text-justify h-[100px] overflow-hidden mb-4`}>
            {description}
          </p>
          <Link
            href={link_to}
            className="bg-purple_primary text-white font-semibold py-2 px-4 rounded-md border-2 border-transparent hover:border-purple_primary hover:text-purple_primary hover:bg-white transition-all duration-300"
          >
            {button_text}
          </Link>
        </div>
      </div>
    </div>
  );
};


export default HomeCard
