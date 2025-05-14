import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import CardForm from '../components/CardForm';
import Image from 'next/image';
import { FaHardHat } from 'react-icons/fa';

const Page = () => {
  return (
    <div className='max-w-[1440px] mx-auto px-4 pt-8 mt-[102px]'>
      <h1 className='text-[30px] font-bold mb-2 capitalize'>White Professionally Qualified Person Card</h1>
      <Link href='#' className='inline-flex items-center text-purple_primary media-max-545px:text-[14px] '><IoIosArrowForward /><span>Go to full card types list</span></Link>
      <div className='h-[1px] w-full bg-slate-300 my-4'></div>
      <h1 className='text-[25px] font-bold mb-2'>How to apply</h1>
      {/* <h1 className='text-[20px] font-bold'>Apply by phone</h1> */}

      <p className='text-justify media-max-545px:text-[14px]'>
        Call <Link href='tel:+443030030136' className='text-purple_primary font-semibold hover:text-black'>
          +44 3030030136
        </Link> to book by phone. Our lines are open Monday to Saturday, from 9 AM to 7 PM.
      </p>


      <h1 className='text-[20px] font-bold mb-2 mt-8'>Apply online</h1>
      <p className='text-justify media-max-545px:text-[14px]'>Apply for a CSCS Card easily using our <Link href='/apply-card-for/cscs' className='text-purple_primary font-bold '> online application service.</Link>
      </p>

      {/* Form */}

      <div className='flex justify-between  items-center mt-10 media-max-1360px:flex-col media-max-1360px:gap-8'>
        <div className='h-[380px] max-w-[660px] media-max-545px:h-auto'>
          <Image src='/white-professionally-qualified-card-img.png'
            alt='card-image'
            width={800}
            height={400}
            className='rounded-lg h-full w-full'
          />
        </div>
        <div>
          <CardForm titleOne='White Professionally Qualified Person' titleTwo='Easy apply for CSCS White Card - Professionally Qualified Person.' cardType="white-pqp" card="cscs" />
        </div>
      </div>

      <div className='mt-8 media-max-545px:text-[14px]'>
        <h1 className='capitalize text-[25px] text-black mb-6 font-bold'>Validity - 5 Years</h1>

        <p className='mb-6 text-justify'>This card is available to competence-assessed members of CSCS-approved Professional Bodies and is valid for five years. The CSCS card booking fee is £65, which includes the £36 CSCS fee, booking fee, and VAT.

          All applicants are required to pass the <Link href="/citb-test" className='text-purple_primary font-bold'>CITB Managers and Professionals Health, Safety, and Environment Test</Link>.
        </p>

        <p className='text-justify mb-2'>
          Applicants must provide proof of current membership in a CSCS-approved professional body at an acceptable level. Membership must be renewed annually, and the evidence must confirm the membership level and validity for the current calendar year.</p>

        <p className="flex items-start mb-2">
          <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
          A membership certificate confirming current calendar year membership.</p>
        <p className="flex items-start mb-2">
          <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />A membership card (both sides) confirming current year membership.</p>
        <p className="flex items-start mb-2">
          <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" /> An up-to-date letter or email from the professional body confirming membership for the current calendar year</p>
        <p className="flex items-start mb-6">
          <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />A receipt of payment for membership for the current calendar year</p>
        <p><Link href="#" className='text-purple_primary font-bold'>Contact Support</Link> if you're still not sure which test to take.</p>
      </div>
    </div>
  )
}

export default Page
