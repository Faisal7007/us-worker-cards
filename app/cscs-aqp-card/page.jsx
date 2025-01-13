import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import CardForm from '../components/CardForm';
import Image from 'next/image';
import { FaHardHat } from 'react-icons/fa';

const Page = () => {
  return (
    <div className='max-w-[1440px] mx-auto px-4 pt-8'>
    <h1 className='text-[30px] font-bold mb-2 capitalize'>White Academically Qualified Person</h1>
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
  <Image src='/white-academically-qualified-card-img.png'
    alt='card-image'
    width={800}
    height={400}
    className='rounded-lg h-[355px] w-[660px]'
  />
  </div>
  <div>
    <CardForm titleOne='White Academically Qualified Person' titleTwo='Easy apply for CSCS White Card - Academically Qualified Person CSCS Card.' ringColor='yellow'/>
  </div>
</div>

<div className='mt-8'>
<h1 className='capitalize text-[25px] text-black mb-6 font-bold'>Validity - 5 Years</h1>

<p className='mb-6 text-justify'>This card is available to individuals who have completed specific construction-related degrees, HNDs, HNCs, CIOB Certificates, or NEBOSH Diplomas. It is valid for <span className='font-bold'>five years.</span>
<br />
All applicants must pass the <Link href="#" className='text-purple_primary font-bold'>CITB Managers and Professionals Health, Safety and Environment Test.</Link>
</p>

<p className='mb-6 text-justify'>To apply for the card, applicants will need to supply a copy of their qualification and where possible evidence of the units achieved within the qualification. The CSCS Card booking is £54 which includes the £36 CSCS fee, booking fee and VAT.</p>
        <p ><Link href="#" className='text-purple_primary font-bold'>Contact Support</Link> if you're still not sure which test to take.</p>
</div>
    </div>
  )
}

export default Page