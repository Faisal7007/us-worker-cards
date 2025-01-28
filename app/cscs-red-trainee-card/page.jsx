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
    <h1 className='text-[30px] font-bold mb-2 capitalize'>Red Trainee Card</h1>
    <Link href='/cscs-card-types' className='inline-flex items-center text-purple_primary media-max-545px:text-[14px]'><IoIosArrowForward/><span>Go to full card types list</span></Link>
    <div className='h-[1px] w-full bg-slate-300 my-4'></div>
    <h1 className='text-[25px] font-bold mb-2'>How to apply</h1>
    {/* <h1 className='text-[20px] font-bold'>Apply by phone</h1> */}

     <p className='text-justify media-max-545px:text-[14px]' >Call <Link href='/' className='text-purple_primary font-semibold hover:text-black '>0203 769 9047</Link> to book by phone. Our lines are open Monday to Saturday, from 9 AM to 7 PM.</p>

     <h1 className='text-[20px] font-bold mb-2 mt-8'>Apply online</h1>
   <p className='text-justify media-max-545px:text-[14px]' >Apply for a CSCS Card easily using our <Link href='/cscs-card-types' className='text-purple_primary font-bold'> online application service.</Link>
    </p>

{/* Form */}

<div className='flex justify-between  items-center  mt-10 media-max-1360px:flex-col media-max-1360px:gap-8'>
  <div className='max-h-[380px] max-w-[660px]'>
  <Image 
    src='/red-trainee-img.png'
    alt='card-image'
    width={800}
    height={400}
    className='rounded-lg h-full w-full'
  />
  </div>
  <div>
    <CardForm titleOne='Red Trainee Card' titleTwo='Easy apply for CSCS Red Card - Trainee Card' cardType="red-trainee" />
  </div>
</div>
  <div className='flex justify-center mt-24'>
    <h1 className='capitalize text-[25px] text-white px-4 py-1 bg-purple_primary rounded-full  font-semibold media-max-600px:text-[22px]'>Eligibility Requirements</h1>
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

<div className='text-justify media-max-545px:text-[14px]'>
<h1 className='capitalize text-[25px] text-black my-8 font-bold'>Validity - 5 Years</h1>

<h2 className='font-bold'>How can you replace your CSCS Red Trainee Card?</h2>
<p className='mb-4'>This card is non-renewable. Cardholders must complete their qualification before it expires and then apply for a Blue Skilled CSCS Card.</p>

<p className='text-justify'>This temporary card is available if you are a trainee and registered to complete a construction related qualification. The qualification may be vocational, academic or professional, but must be acceptable for a skilled CSCS card.</p>
<p className='mb-6'>For more information about registering(enrollment) for NVQ Level 2, please visit <Link href="/#" className='text-purple_primary font-bold'>NVQ Level 2.</Link></p>

<p className='mb-6 text-justify'>Applicants must have passed the <Link href="/#" className='text-purple_primary font-bold'>CITB Health, Safety, and Environment Test for Operatives</Link> within the last 2 years. The CSCS Card booking costs £65, including the £36 CSCS fee, booking fee, and VAT.</p>

<p className='text-justify mb-2'>Trainee card applicants must provide proof of registration for their qualification. At a minimum, evidence from your University, Professional Body, or awarding body is required, which includes:</p>

<p className="flex items-start mb-2">
        <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
        Applicant’s Full Name</p>
        <p className="flex items-start mb-2">
        <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />Full qualification title of the course you are registered to, including level if relevant.</p>
        <p className="flex items-start mb-2">
        <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
        Date of registration proof required for Vocational Qualifications (i.e. NVQ or SVQ) must be in the last two years.</p>
        <p className="flex items-start mb-2">
        <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
        Academic qualifications (i.e. Degree, HND or HNC) must be in the last five years. This is due to the difference in length of time to achieving this qualification.</p>
        <p className='my-6'></p>
        <p ><Link href="#" className='text-purple_primary font-bold'>Contact Support</Link> if you're still not sure which test to take.</p>
</div>
</div>
  )
}

export default Page
