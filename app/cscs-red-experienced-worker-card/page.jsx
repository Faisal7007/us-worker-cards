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
    <h1 className='text-[30px] font-bold mb-2 capitalize'>Red Experienced Worker Card</h1>
    <Link href='#' className='inline-flex items-center text-purple_primary '><IoIosArrowForward/><span>Go to full card types list</span></Link>
    <div className='h-[1px] w-full bg-slate-300 my-4'></div>
    <h1 className='text-[25px] font-bold mb-2'>How to apply</h1>
    {/* <h1 className='text-[20px] font-bold'>Apply by phone</h1> */}

     <p >Call <Link href='/' className='text-purple_primary font-semibold hover:text-black '>0203 769 9047</Link> to book by phone. Our lines are open Monday to Saturday, from 9 AM to 7 PM.</p>

     <h1 className='text-[20px] font-bold mb-2 mt-8'>Apply online</h1>
   <p>Apply for a CSCS Card easily using our <Link href='/' className='text-purple_primary font-bold'> online application service.</Link>
    </p>

{/* Form */}
<div className='flex justify-between  items-center  mt-10'>
  <div>
  <Image 
    src='/red-experienced-worker-card-img.png'
    alt='card-image'
    width={800}
    height={400}
    className='rounded-lg h-[355px] w-[660px]'
  />
  </div>
  <div>
    <CardForm titleOne='Red Experienced Worker Card' titleTwo='Easy apply for Experienced Worker Card'/>
  </div>
</div>
  <div className='flex justify-center mt-24'>
    <h1 className='capitalize text-[25px] text-white inline-block px-4 py-1 bg-purple_primary rounded-full  font-semibold text-center '>Eligibility Requirements</h1>
  </div>
    
<div className='flex justify-center mt-8'>
    <div className=" flex gap-10">
<SmallCard icon={<FaHardHat className="size-6 text-white" />}
    title="CITB Test(Operatives)"
    button_text="Apply Now"
    link_to="#"/>

<SmallCard icon={<FaAward className="size-6 text-white" />}
    title="Helth & Safety Awareness Course"
    button_text="Apply Now"
    link_to="#"/>
</div>
</div>

<div>
<h1 className='capitalize text-[25px] text-black my-8 font-bold'>Validity - 1 Years</h1>

<h2 className='font-bold'>How can you replace your CSCS Red Experienced Worker Card?</h2>
<p className='mb-4'>This card is non-renewable. Cardholders must complete their qualification before it expires and then apply for a Skilled CSCS Card.</p>

<p className='text-justify'>This temporary card is available specifically for workers with at least one year of on-the-job experience within the last three years, who are registered to complete a Construction-Related NVQ or SVQ Level 2 or higher that is acceptable for a CSCS card.</p>
<p className='mb-6'>For more information about registering(enrollment) for NVQ Level 2, please visit <Link href="/#" className='text-purple_primary font-bold'>NVQ Level 2.</Link></p>

<p className='mb-6 text-justify'>Applicants must have passed the appropriate level of the CITB Health, Safety, and Environment test within the last two years. The test must be taken at the relevant level for the occupation being applied for. To determine the required test level, please use our <Link href="#" className='text-purple_primary font-bold'>Test Finder.</Link> The CSCS card booking costs £54, which includes the £36 CSCS fee, booking fee, and VAT.</p>

<p className='text-justify'>Experienced Worker card applicants must be able to provide proof of registration onto their NVQ/SVQ qualification. As a minimum, you are required to provide evidence from your Training Organisation awarding body that must include:</p>

<p className="flex items-center mb-2">
        <FaHardHat className="text-purple_primary mr-2" />
        Applicant’s Full Name</p>
        <p className="flex items-center mb-2">
        <FaHardHat className="text-purple_primary mr-2" />Full qualification title of the NVQ/SVQ course you are registered to, including level</p>
        <p className="flex items-center mb-2">
        <FaHardHat className="text-purple_primary mr-2" />
        Date of registration proof required for Vocational Qualifications (i.e. NVQ or SVQ) must be in the last two years.</p>
        <p className="flex items-center mb-2">
        <FaHardHat className="text-purple_primary mr-2" />
        Date of registration (must be in the last 2 years)</p>
        <p className='my-6'></p>
        <p ><Link href="#" className='text-purple_primary font-bold'>Contact Support</Link> if you're still not sure which test to take.</p>
</div>
</div>
  )
}

export default Page