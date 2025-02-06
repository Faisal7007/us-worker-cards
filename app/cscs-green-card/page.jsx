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
import { useFirebase } from '../context/Firebase';
import { ToastContainer } from 'react-toastify';


const Page = () => {
  // const firebase=useFirebase()

  return (
    <div className='max-w-[1440px] mx-auto px-4 pt-8'>
    <ToastContainer/>

    <h1 className='text-[30px] font-bold mb-2 capitalize'>CSCS Green Card</h1>
    <Link href='cscs-card-types' className='inline-flex items-center text-purple_primary media-max-545px:text-[14px]'><IoIosArrowForward/><span>Go to full card types list</span></Link>
    <div className='h-[1px] w-full bg-slate-300 my-4'></div>
    <h1 className='text-[25px] font-bold mb-2'>How to apply</h1>
    {/* <h1 className='text-[20px] font-bold'>Apply by phone</h1> */}

     <p className='media-max-545px:text-[14px]'>Call <Link href='/' className='text-purple_primary font-semibold hover:text-black '>0203 769 9047</Link> to book by phone. Our lines are open Monday to Saturday, from 9 AM to 7 PM.</p>

   <h1 className='text-[20px] font-bold mb-2 mt-8'>Apply online</h1>
   <p className='media-max-545px:text-[14px]'>Apply for a CSCS Card easily using our <Link href='/cscs-card-types' className='text-purple_primary font-bold'> online application service.</Link>
    </p>

{/* Form */}

<div className='flex justify-between  items-center  mt-10 media-max-1360px:flex-col media-max-1360px:gap-8'>
  <div className='h-[380px] max-w-[660px] media-max-545px:h-auto'>
  <Image 
    src='/green-card-img.png'
    alt='card-image'
    width={800}
    height={400}
    className='rounded-lg h-full w-full'
  />
  </div>
  <div>
    <CardForm titleOne='Green Labourer Card' titleTwo='Easy apply for CSCS Green Card - Labourers Card.' cardType='green-labourer'/>
  </div>
</div>
  <div className='flex justify-center mt-12'>
    <h1 className='capitalize text-[25px] text-white inline-block px-4 py-1 bg-purple_primary rounded-full  font-semibold text-center media-max-600px:text-[22px] media-max-600px:inline'>Eligibility Requirements</h1>
  </div>
    
<div className='flex justify-center mt-8'>
    <div className=" flex gap-10">
<SmallCard icon={<FaHardHat className="size-6 text-white" />}
    title="CITB Test(Operatives)"
    button_text="Apply Now"
    link_to="/book-citb-test/default"/>

<SmallCard icon={<FaAward className="size-6 text-white" />}
    title="Helth & Safety Awareness Course"
    button_text="Apply Now"
    link_to="/health-and-safety-awareness"/>
</div>
</div>

<div>
<h1 className='capitalize text-[25px] text-black my-8 font-bold'>Validity - 5 Years</h1>

<h2 className='font-bold text-justify'>How can you replace your CSCS Green Card?</h2>
<p className='mb-4 text-justify media-max-545px:text-[14px]'>Submit your details through the <Link href="/#" className='font-bold text-purple_primary text-justify'>online application service</Link> to request a replacement for your lost, stolen, or damaged CSCS Card.</p>
<p className='mb-6 text-justify media-max-545px:text-[14px]'>A labourer card remains valid for five years, however, it cannot be renewed at this time. Once your card expires, you will need to apply for a new one. The cost of booking a CSCS Card is £54, which covers the £36 CSCS fee, booking charges, and VAT.</p>

<h2 className='font-bold text-justify'>Requirements for the Card</h2>
<p className='mb-2  text-justify media-max-545px:text-[14px]'>Applicants are required to pass the <Link href="/book-citb-test/default" className='text-purple_primary font-bold'>CITB Health, Safety, and Environment test for operatives</Link> and possess one of the following :</p>

<p className="flex items-start mb-2 text-justify leading-relaxed text-sm media-max-545px:text-[14px] ">
  <FaHardHat className="text-purple_primary mr-2 mt-1 text-base flex-shrink-0 leading-none" />
  An Award in Health and Safety in a Construction Environment at RQF Level 1 or SCQF Level 4, or
</p>
<p className="flex items-start mb-2 text-justify leading-relaxed text-sm media-max-545px:text-[14px]">
  <FaHardHat className="text-purple_primary mr-2 mt-1 text-base flex-shrink-0 leading-none" />
  A REHIS Elementary Health and Safety Certificate at SCQF Level 5, or
</p>
<p className="flex items-start mb-2 text-justify leading-relaxed text-sm media-max-545px:text-[14px]">
  <FaHardHat className="text-purple_primary mr-2 mt-1 text-base flex-shrink-0 leading-none" />
  The Construction Health and Safety (F/618/0738) unit from NOCN/CSkills Awards.
</p>
<p className="my-6 text-justify text-sm leading-relaxed media-max-545px:text-[14px]">
  Please visit the <Link href="/health-and-safety-awareness" className="text-purple_primary font-bold">Health and Safety Awareness Course</Link> to obtain one of the required qualifications listed above.
</p>
<p className="text-justify text-sm leading-relaxed media-max-545px:text-[14px]">
  <Link href="#" className="text-purple_primary font-bold">Contact Support</Link> if you're still not sure which test to take.
</p>

</div>
</div>
  )
}

export default Page
