import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import CourseBookForm from '../components/CourseBookForm'

import Image from 'next/image'
import { FaHardHat } from 'react-icons/fa'
import { GoDotFill } from 'react-icons/go'

const page = () => {
  return (
    <div className='max-w-[1440px] mx-auto px-4 pt-8'>
      <h1 className='text-[30px] font-bold mb-2 capitalize'>Level 1 Health and Safety in a Construction Environment</h1>
      <h2 className='text-[20px] font-bold mb-2 capitalize'>(leads to CSCS Green Labourer Card)</h2>
    <div className='h-[1px] w-full bg-slate-300 my-4'></div>
    <p>Obtain your health and safety course certificate, which can be used to apply for your <span className='font-bold'>CSCS Card.</span> <br /> Know more about <Link href="#" className='text-purple_primary font-bold'>health and safety related courses in construction.</Link></p>
    <div className='mt-6 mb-4'>
    <CourseBookForm/>
    </div>
    <div className='h-[1px] w-full bg-slate-300 my-4'></div>
    {/* <div className="text-center py-8">
    <h2 className="text-[25px] font-bold inline-block  px-4 py-1 bg-purple_primary rounded-full text-white">Apply for CSCS Card</h2>
    </div> */}


      {/* <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start rounded-lg ">
            <Image
            src='/green-card-img.png'
    alt='card-image'
            width={800}
           height={400}
           className='rounded-lg h-[355px] w-[660px]'
            />
          
          <div className="w-[660px] ">
           
            <ul className="mb-4 text-gray-700">
          <li className="flex items-start mb-4">
            <FaHardHat className="text-purple_primary mt-1 mr-2" />
            Fill the Application here and choose the CSCS Card based on your qualification.
          </li>
          <li className="flex items-center mb-2">
            <FaHardHat className="text-purple_primary mr-2" />
            
    Select the type of card booking you want to proceed with.
          </li>
          <li className="flex items-center mb-2 ml-6">
          <GoDotFill className="text-purple_primary" />
    
          If you are applying for the first time, select <span className="font-semibold ml-1">New Card</span>.
          </li>
          <li className="flex items-center mb-4 ml-6">
          <GoDotFill className="text-purple_primary" />
    
          If you want a replacement for your existing CSCS card, select <span className="font-semibold ml-1">Lost Card</span>.
          </li> 
          <li className="flex items-start mb-4">
            <FaHardHat className="text-purple_primary mr-2 size-6 " />
            <span>To continue, click <span className="font-semibold ml-1">Submit Application</span> to add your CITB test ID, expired CSCS Card number (for Renew Card), and card delivery address.</span>
          </li>  <li className="flex items-center mb-4">
            <FaHardHat className="text-purple_primary mr-2" />
            Make the payment and confirm your details.
          </li> 
          <li className="flex items-start mb-4">
      <FaHardHat className="text-purple_primary mr-2 size-4 mt-1" />
      Once approved, you will receive your CSCS Card in approximately 7 working days. That’s it!
    </li>
    
        </ul>
            
          </div>
        </div> */}
    </div>
  )
}

export default page
