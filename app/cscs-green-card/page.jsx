import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import CardForm from '../components/CardForm';
import Image from 'next/image';
import { MdOutlineLaptopMac } from "react-icons/md";
import { FaAward } from "react-icons/fa";
import { FaExclamationTriangle } from 'react-icons/fa';


const Page = () => {
  return (
    <div className='px-36 py-8'>
    <h1 className='text-[24px] font-bold mb-6 capitalize'>CSCS Green Card</h1>
    <Link href='#' className='inline-flex items-center text-purple_primary '><IoIosArrowForward/><span>Go to full card types list</span></Link>
    <div className='h-[1px] w-full bg-slate-300 my-4'></div>
    <h1 className='text-[25px] font-bold mb-2'>How to apply</h1>
    <h1 className='text-[20px] font-bold'>Apply by phone</h1>

     <p className='my-4'>Call <Link href='/' className='text-purple_primary font-semibold hover:text-black '>0203 769 9047</Link> to book by phone. Our lines are open Monday to Saturday, from 9 AM to 7 PM.</p>

     <h1 className='text-[20px] font-semibold mb-2'>Apply online</h1>
   <p>Apply for a CSCS Card easily using our <Link href='/' className='text-purple_primary font-bold '> online application service.</Link>
    </p>

{/* Form */}

<div className='flex justify-between items-start mt-8'>
  <div>
  <Image src='/green-card-img.png'
    alt='card-image'
    width={600}
    height={400}
    className='rounded-lg max-w-[500px] h-auto  '
  />

  </div>
  <div>
    <CardForm titleOne='Green Labourer Card' titleTwo='Easy apply for CSCS Green Card - Labourers Card.' ringColor='green'/>
  </div>
</div>
    <h1 className='capitalize text-[20px] font-semibold mb-2'>Eligibility Requirements</h1>
    <div className='flex gap-10'>
      <div className='shadow-lg rounded-md w-fit px-10 py-16 flex justify-between  items-center'>
        <div className='bg-blue_primary p-3 rounded-full mr-4 '>
                <MdOutlineLaptopMac className='size-10 text-white'/>
        </div>
        <div>
        <div className='text-blue_primary text-[18px] font-bold mb-2'>CITB Test(Operatives)</div>
        <button className='bg-blue_primary text-white py-2 px-4 rounded-sm font-bold'>Book Now</button>
        </div>
      </div>
      <div className='shadow-lg rounded-md w-fit px-10 py-16 flex justify-between  items-center'>
        <div className='bg-blue_primary p-3 rounded-full mr-4 '>
                <FaExclamationTriangle className='size-10 text-white'/>
        </div>
        <div>
        <div className='text-blue_primary text-[18px] font-bold mb-2'>
Health & Safety Awareness Course
</div>
        <button className='bg-blue_primary text-white py-2 px-4 rounded-sm font-bold'>Book Now</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Page
