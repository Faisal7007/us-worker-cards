import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import CardForm from '../components/CardForm';
import Image from 'next/image';
import { MdOutlineLaptopMac } from "react-icons/md";
import { FaAward, FaHardHat, FaIdCard, FaUsers } from "react-icons/fa";
import { FaExclamationTriangle } from 'react-icons/fa';
import HomeCard from '../components/HomeCard';
import SmallCard from '../components/SmallCard';


const Page = () => {
  return (
    <div className='max-w-[1440px] mx-auto px-4 pt-8'>
    <h1 className='text-[30px] font-bold mb-2 capitalize'>Blue Skilled Worker Card</h1>
    <Link href='#' className='inline-flex items-center text-purple_primary '><IoIosArrowForward/><span>Go to full card types list</span></Link>
    <div className='h-[1px] w-full bg-slate-300 my-4'></div>
    <h1 className='text-[25px] font-bold mb-2'>How to apply</h1>
    {/* <h1 className='text-[20px] font-bold'>Apply by phone</h1> */}
     <p>Call <Link href='/' className='text-purple_primary font-semibold hover:text-black '>0203 769 9047</Link> to book by phone. Our lines are open Monday to Saturday, from 9 AM to 7 PM.</p>

     <h1 className='text-[20px] font-bold mb-2 mt-8'>Apply online</h1>
   <p>Apply for a CSCS Card easily using our <Link href='/' className='text-purple_primary font-bold'> online application service.</Link>
    </p>

{/* Form */}

<div className='flex justify-between items-center mt-10 '>
  <div>
  <Image src='/blue-card-img.png'
    alt='card-image'
    width={800}
    height={400}
    className='rounded-lg h-[355px] w-[660px]'
  />
  </div>
  <div>
    <CardForm titleOne='Blue Skilled Worker Card' titleTwo='Easy apply for Blue CSCS Card - Skilled Worker.' ringColor='green'/>
  </div>
</div>

<div className='flex justify-center mt-24'>
    <h1 className='capitalize text-[25px] text-white px-4 py-1 bg-purple_primary rounded-full  font-semibold '>Eligibility Requirements</h1>
  </div>
    
<div className='flex justify-center mt-8'>

    <div className=" flex gap-10">
 
<SmallCard icon={<FaHardHat className="size-6 text-white" />}
    title="CITB Test"
    button_text="Apply Now"
    link_to="#"/>

<SmallCard icon={<FaAward className="size-6 text-white" />}
    title="NVQ Level 2"
    button_text="Apply Now"
    link_to="#"/>
</div>
</div>


<div>
<h1 className='capitalize text-[25px] text-black my-8  font-bold'>Validity - 5 Years</h1>

<h2 className=''>You can apply for this card if you have either:</h2>
<p className="flex items-start">
        <FaHardHat className="text-purple_primary mt-1 mr-2" /> 
Achieved an <Link href="#" className='font-bold mx-1'>NVQ or SVQ</Link> Level 2 in a construction-related field, or
      </p>
      <p className="flex items-start mb-4">
        <FaHardHat className="text-purple_primary mt-1 mr-2" />
        Completed an apprenticeship, such as an employer-sponsored apprenticeship, a City and Guilds of London Institute Craft Certificate, or a CSCS-approved Trailblazer.
      </p>
      <p>
      If you lack these qualifications but have experience in your job, you can register for a qualification relevant to your occupation and then apply for a <Link href="#">(Red) Experienced Worker Card.</Link></p>
      <p className='mb-4'>
      For more information on registering (enrolling) for a qualification, please visit <Link href="#">NVQ Level 2.</Link></p>

{/* <h2 className='font-bold'>Requirements for the Card</h2> */}

    <p className='mb-6'>Applicants must pass the <Link href="#" className='font-bold '>CITB Health, Safety, and Environment test</Link> at the appropriate level for their occupation within the last two years. To identify the required test level, refer to our <Link href="#" className='font-bold'>Card Finder.</Link> The cost for booking a CSCS Card is £54, which covers the £36 CSCS fee, booking fee, and VAT.</p>
 
        <p ><Link href="#" className='text-purple_primary font-bold'>Contact Support</Link> if you're still not sure which test to take.</p>
</div>
</div>
  )
}

export default Page
