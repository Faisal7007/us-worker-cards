import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import CardForm from '../components/CardForm';
import Image from 'next/image';
import { MdOutlineLaptopMac } from "react-icons/md";
import { FaAward, FaHardHat, FaIdCard, FaUsers } from "react-icons/fa";
import { FaExclamationTriangle } from 'react-icons/fa';
import HomeCard from '../components/HomeCard';


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

<div className='flex justify-evenly items-center  mt-8'>
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
  <div className='flex justify-center'>
    <h1 className='capitalize text-[25px] text-white inline-block px-4  bg-purple_primary rounded-full  font-semibold mb-2 text-center my-8'>Eligibility Requirements</h1>
  </div>
    
<div className='flex justify-center mt-8'>

    <div className="grid grid-cols-1 justify-center items-center sm:grid-cols-2 lg:grid-cols-2 gap-8 ">
  <HomeCard 
    icon={<FaIdCard className="size-10 text-white" />}
    title="CITB Test(Operative)"
    button_text="Book Now"
    link_to="#"
  />


  <HomeCard 
    icon={<FaUsers className="size-10 text-white" />}
    title="Health & Safety Awareness Course"
    button_text="Book Now"
    link_to="#"
  />
</div>
</div>


<div>
<h1 className='capitalize text-[25px] text-black font-semibold mb-2  my-8'>Validity - 5 Years</h1>

<h2>How can you replace your CSCS Green Card?</h2>
<p className='mb-4'>Submit your details through the <Link href="/#" className='font-bold text-purple_primary'>online application service</Link> to request a replacement for your lost, stolen, or damaged CSCS Card.</p>
<p className='mb-6'>A labourer card remains valid for five years, however, it cannot be renewed at this time. Once your card expires, you will need to apply for a new one. The cost of booking a CSCS Card is £54, which covers the £36 CSCS fee, booking charges, and VAT.</p>

<h2>Requirements for the Card</h2>
<p>Applicants are required to pass the <Link href="/#">CITB Health, Safety, and Environment test for operatives</Link> and possess one of the following:</p>
</div>
</div>
  )
}

export default Page
