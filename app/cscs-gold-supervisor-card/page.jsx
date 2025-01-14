import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import CardForm from '../components/CardForm';
import Image from 'next/image';
import { FaHardHat } from 'react-icons/fa';

const Page = () => {
  return (
    <div className='max-w-[1440px] mx-auto px-4 pt-8'>
    <h1 className='text-[30px] font-bold mb-2 capitalize'>Gold Supervisor Card</h1>
    <Link href='#' className='inline-flex items-center text-purple_primary '><IoIosArrowForward/><span>Go to full card types list</span></Link>
    <div className='h-[1px] w-full bg-slate-300 my-4'></div>
    <h1 className='text-[25px] font-bold mb-2'>How to apply</h1>
    {/* <h1 className='text-[20px] font-bold'>Apply by phone</h1> */}

     <p>Call <Link href='/' className='text-purple_primary font-semibold hover:text-black '>0203 769 9047</Link> to book by phone. Our lines are open Monday to Saturday, from 9 AM to 7 PM.</p>

     <h1 className='text-[20px] font-bold mb-2 mt-8'>Apply online</h1>
   <p>Apply for a CSCS Card easily using our <Link href='/' className='text-purple_primary font-bold '> online application service.</Link>
    </p>

{/* Form */}

<div className='flex justify-between items-center mt-10'>
  <div>
  <Image src='/gold-supervisor-card-img.png'
    alt='card-image'
    width={800}
    height={400}
    className='rounded-lg h-[355px] w-[660px]'
  />
  </div>
  <div>
    <CardForm titleOne='Gold supervisor Card' titleTwo='Easy apply for CSCS Gold Card - Supervisor.' ringColor='yellow'/>
  </div>
</div>

<div className='mt-8'>
<h1 className='capitalize text-[25px] text-black mb-6 font-bold'>Validity - 5 Years</h1>

<p className='mb-6 text-justify'>Applicants must have passed the <Link href="#" className='text-purple_primary font-bold'>CITB Health, Safety, and Environment test</Link> at the appropriate level within the last two years. The test must correspond to the relevant level for the occupation being applied for. To identify the required test level, please use our <Link href="#" className='text-purple_primary font-bold'> Test Finder.</Link> The CSCS card booking costs £54, which includes the £36 CSCS fee, along with the booking fee and VAT.</p>

<p className='text-justify'>This card is available for supervisor and technical occupations subject to the achievement of:</p>

<p className="flex items-center mb-2">
        <FaHardHat className="text-purple_primary mr-2" />
        Construction Related Supervisory/Technical NVQ or SVQ Level 3 or 4</p>
        <p className="flex items-center mb-6">
        <FaHardHat className="text-purple_primary mr-2" />Occupational Work Supervision NVQ or SVQ Level 3 (including proof of endorsed occupation).</p>
        <p ><Link href="#" className='text-purple_primary font-bold'>Contact Support</Link> if you're still not sure which test to take.</p>
</div>
    </div>
  )
}

export default Page
