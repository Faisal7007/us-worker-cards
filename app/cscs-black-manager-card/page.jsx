import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import CardForm from '../components/CardForm';
import Image from 'next/image';
import { FaHardHat } from 'react-icons/fa';

const Page = () => {
  return (
    <div className='max-w-[1440px] mx-auto px-4 pt-8'>
    <h1 className='text-[30px] font-bold mb-2 capitalize'>Black Manager Card</h1>
    <Link href='cscs-card-types' className='inline-flex items-center text-purple_primary media-max-545px:text-[14px]'><IoIosArrowForward/><span>Go to full card types list</span></Link>
    <div className='h-[1px] w-full bg-slate-300 my-4'></div>
    <h1 className='text-[25px] font-bold mb-2'>How to apply</h1>
    {/* <h1 className='text-[20px] font-bold'>Apply by phone</h1> */}

     <p className='text-justify media-max-545px:text-[14px]'>Call <Link href='/' className='text-purple_primary font-semibold hover:text-black'>0203 769 9047</Link> to book by phone. Our lines are open Monday to Saturday, from 9 AM to 7 PM.</p>

     <h1 className='text-[20px] font-bold mb-2 mt-8'>Apply online</h1>
   <p className='text-justify media-max-545px:text-[14px]'>Apply for a CSCS Card easily using our <Link href='/cscs-card-types' className='text-purple_primary font-bold '> online application service.</Link>
    </p>

{/* Form */}

<div className='flex justify-between  items-center mt-10 media-max-1360px:flex-col media-max-1360px:gap-8'>
  <div className='max-h-[380px] max-w-[660px]'>
  <Image src='/black-manager-card-img.png'
    alt='card-image'
    width={800}
    height={400}
    className='rounded-lg h-full w-full'
  />

  </div>
  <div>
    <CardForm titleOne='Black Manager Card' titleTwo='Easy apply for CSCS Black Card - Manager.' cardType="black-manager" />
  </div>
</div>

<div className='mt-8 media-max-545px:text-[14px]'>
<h1 className='capitalize text-[25px] text-black mb-6 font-bold'>Validity - 5 Years</h1>

<p className='mb-6 text-justify'>Applicants must have passed the appropriate level of the <Link href="#" className='text-purple_primary font-bold'>CITB Health, Safety, and Environment test</Link> within the last two years. The test must be taken at the relevant level for the occupation being applied for. To determine the required test level, please use our <Link href="#" className='text-purple_primary font-bold'>Test Finder.</Link> The CSCS card booking fee is £54, which includes the £36 CSCS fee, as well as the booking fee and VAT.</p>

<p className='text-justify mb-2'>This card is available for manager and technical occupations subject to:</p>

<p className="flex items-start mb-2 text-justify ">
        <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
        Achievement of a relevant Construction Management/Technical related NVQ/SVQ level 5, 6 or 7.</p>
        <p className="flex items-start mb-2 text-justify">
        <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />A SVQ Level 4 in Construction Management/Technical related qualification or</p>
        <p className="flex items-start mb-6 text-justify">
        <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />Holding a pre-existing NVQ level 4 in construction management.</p>
        <p className='text-justify' ><Link href="#" className='text-purple_primary font-bold'>Contact Support</Link> if you're still not sure which test to take.</p>
</div>
    
    </div>
  )
}

export default Page
