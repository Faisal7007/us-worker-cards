import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import CardForm from '../components/CardForm';
import Image from 'next/image';
import { FaHardHat } from 'react-icons/fa';

const Page = () => {
  return (
    <div className='max-w-[1440px] mx-auto px-4 pt-8'>
    <h1 className='text-[30px] font-bold mb-2 capitalize'>Gold advanced craft card</h1>
    <Link href='#' className='inline-flex items-center text-purple_primary '><IoIosArrowForward/><span>Go to full card types list</span></Link>
    <div className='h-[1px] w-full bg-slate-300 my-4'></div>
    <h1 className='text-[25px] font-bold mb-2'>How to apply</h1>
    {/* <h1 className='text-[20px] font-bold'>Apply by phone</h1> */}

     <p>Call <Link href='/' className='text-purple_primary font-semibold hover:text-black '>0203 769 9047</Link> to book by phone. Our lines are open Monday to Saturday, from 9 AM to 7 PM.</p>

     <h1 className='text-[20px] font-bold mb-2 mt-8'>Apply online</h1>
   <p>Apply for a CSCS Card easily using our <Link href='/' className='text-purple_primary font-bold '> online application service.</Link>
    </p>

{/* Form */}

<div className='flex justify-between  items-center mt-10'>
  <div>
  <Image src='/gold-advanced-card-img.png'
    alt='card-image'
    width={800}
    height={400}
    className='rounded-lg h-[355px] w-[660px]'
  />
  </div>
  <div>
    <CardForm titleOne='Gold Advanced Craft Card' titleTwo='Easy apply for CSCS Gold Card - Advanced Craft.' ringColor='yellow'/>
  </div>
</div>

<div className='mt-8'>
<h1 className='capitalize text-[25px] text-black mb-6 font-bold'>Validity - 5 Years</h1>

<p className='mb-6 text-justify'>Applicants must have passed the appropriate level of the <Link href="#" className='text-purple_primary font-bold'>CITB Health, Safety, and Environment test</Link> within the last two years. The test must be taken at the relevant level for the occupation being applied for. To determine the required test level, please use our <Link href="#" className='text-purple_primary font-bold'>Test Finder.</Link> The CSCS card booking fee is £54, which includes the £36 CSCS fee, as well as the booking fee and VAT.</p>

<p className='text-justify'>This card is available if you have either:</p>

<p className="flex items-center mb-2">
        <FaHardHat className="text-purple_primary mr-2" />
        Achieved a Construction Related NVQ or SVQ level 3</p>
        <p className="flex items-center mb-2">
        <FaHardHat className="text-purple_primary mr-2" />Completed an approved indentured apprenticeship (e.g.with NJCBI, BATJIC etc.)</p>
        <p className="flex items-center mb-6">
        <FaHardHat className="text-purple_primary mr-2" />Completed an employer sponsored apprenticeship which included the achievement of a City and Guilds of London Institute Advanced Craft Certificate.</p>
        <p ><Link href="#" className='text-purple_primary font-bold'>Contact Support</Link> if you're still not sure which test to take.</p>
</div>
    

    </div>
  )
}

export default Page
