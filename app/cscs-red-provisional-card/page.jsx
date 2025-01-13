import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import CardForm from '../components/CardForm';
import Image from 'next/image';

const Page = () => {
  return (
    <div className='max-w-[1440px] mx-auto px-4 pt-8'>
    <h1 className='text-[30px] font-bold mb-2 capitalize'>Red Provisional Card</h1>
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
  <Image src='/red-card-img.png'
    alt='card-image'
    width={800}
    height={400}
    className='rounded-lg h-[355px] w-[660px]'
  />

  <div>
    <CardForm titleOne='Red Provisional Card' titleTwo='Easy apply for Provisional- CSCS Temorary Card.' ringColor='red'/>
  </div>
</div>
    

    
      
    </div>
  )
}

export default Page
