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
    <h1 className='text-[30px] font-bold mb-2 capitalize'>Red Experienced Technical, Supervisor or Manager</h1>
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
    <CardForm titleOne='Red Technical Supervisor/Manager Card' titleTwo='Easy apply for Experienced Technical, Supervisor or Manager.'/>
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

<h2 className='font-bold'>How can you replace your CSCS Red Experienced Technical, Supervisor or Manager Card?</h2>
<p className='mb-4'>The card is valid for three years and cannot be renewed. Cardholders are expected to complete their qualification by the time the card expires and apply for a skilled CSCS card. </p>

<p className='text-justify'>This temporary card is available specifically for workers with at least one year of on-the-job experience within the last three years, who are registered to complete a Construction-Related NVQ or SVQ Level 2 or higher that is acceptable for a CSCS card.</p>
<p className='mb-6'>For more information about registering(enrollment) for NVQ Level 2, please visit <Link href="/#" className='text-purple_primary font-bold'>NVQ Level 2.</Link></p>

<p className='mb-6 text-justify'>This temporary card is specifically available to Supervisors, Managers, and Technical Workers with at least one year of on-the-job experience within the last three years, who are registered to complete a Construction-Related Technical, Supervisory, or Management NVQ or SVQ at Level 3 or higher, which is acceptable for a CSCS card. The CSCS card booking fee is £54, which includes the £36 CSCS fee, booking fee, and VAT.</p>

<p className='text-justify'>Applicants must also have passed the appropriate level CITB Health, Safety and Environment test within the last 2 years. Experienced Worker TSM card applicants must be able to provide proof of registration onto their qualification. As a minimum, you are required to provide evidence from your Training Organisation awarding body that must include:</p>

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