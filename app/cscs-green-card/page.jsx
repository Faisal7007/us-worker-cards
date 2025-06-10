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
    <div className='max-w-[1440px] mx-auto px-4 pt-8 mt-[102px]'>
      <ToastContainer />

      <h1 className='text-[30px] font-bold mb-2 capitalize'>CSCS Green Card</h1>
      <Link href='/cscs-card-types' className='inline-flex items-center text-purple_primary media-max-545px:text-[14px]'><IoIosArrowForward /><span>Go to full card types list</span></Link>
      <div className='h-[1px] w-full bg-slate-300 my-4'></div>
      <h1 className='text-[25px] font-bold mb-2'>How to apply</h1>
      {/* <h1 className='text-[20px] font-bold'>Apply by phone</h1> */}

      <p className='text-justify media-max-545px:text-[14px]'>
        Call <Link href='tel:+443030030136' className='text-purple_primary font-semibold hover:text-black'>
          +44 3030030136
        </Link> to book by phone. Our lines are open Monday to Saturday, from 9 AM to 7 PM.
      </p>


      <h1 className='text-[20px] font-bold mb-2 mt-8'>Apply online</h1>
      <p className='media-max-545px:text-[14px]'>Apply for a CSCS Card easily using our <Link href='/apply-card-for/cscs' className='text-purple_primary font-bold'> online application service.</Link>
      </p>

      {/* Form */}

      <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-8">
        <div className="w-full sm:max-w-[660px]">
          <Image
            src="/green-card-img.png"
            alt="card-image"
            width={600}
            height={310}
            className="rounded-lg w-[610px] media-max-1298px:w-[560px]"
          />
        </div>

        <div className="w-full sm:max-w-[660px]">
          <CardForm titleOne='Green Labourer Card' titleTwo='Easy apply for CSCS Green Card - Labourers Card.' cardType='green-labourer' card="cscs" />
        </div>
      </div>
      <div className='flex justify-center mt-12'>
        <h1 className='capitalize text-[25px] text-white inline-block px-4 py-1 bg-purple_primary rounded-full  font-semibold text-center media-max-600px:text-[22px] media-max-600px:inline'>Eligibility Requirements</h1>
      </div>

      <div className="flex justify-center mt-8 px-4">
        <div className="flex flex-wrap justify-center gap-6">
          <SmallCard
            icon={<FaHardHat className="size-6 text-white" />}
            title="CITB Test(Operatives)"
            button_text="Apply Now"
            link_to="/book-citb-test/default"
          />

          <SmallCard
            icon={<FaAward className="size-6 text-white" />}
            title="Health & Safety Awareness Course"
            button_text="Apply Now"
            link_to="/health-and-safety-awareness"
          />
        </div>
      </div>


      <div>
        <h1 className='capitalize text-[25px] text-black mt-8 mb-4 font-bold'>Validity</h1>
        <h2><span className='font-semibold'>New Applications :</span> 2 Years</h2>
        <h2><span className='font-semibold'>Renew Applications :</span> 5 Years</h2>

        <h2 className='font-bold text-justify mt-4'>Guidelines for Labourer Card Application and Renewal</h2>
        <p className='mb-6 text-justify media-max-545px:text-[14px]'>If your previous Labourer card expired within the last year, you can renew it for five years by providing proof of your work in a labouring role. However, if it has been expired for more than a year, you must submit an appeal with evidence of your labouring work.</p>

        <h2 className='font-bold text-justify mt-4'>When to Provide Evidence of Working as a Labourer</h2>
        <div className='media-max-545px:text-[14px]'>
          <h3 className="font-semibold text-justify">Evidence is required in the following cases:</h3>
          <ul className="mt-1 text-justify list-disc list-inside">
            <li>When applying for a five-year Labourer card after previously holding a two-year Labourer card.</li>
            <li>When renewing a five-year Labourer card, provided it has not been expired for more than one year.</li>
          </ul>
        </div>
        <p className="mt-2 text-justify font-semibold media-max-545px:text-[14px]">
          Note: Evidence is not required for a first-time two-year Labourer card application.
        </p>
        <h2 className='font-bold text-justify mt-4'>Impact on Current Cards</h2>
        <p className='mb-6 text-justify media-max-545px:text-[14px]'>Existing cards will remain valid until their expiry and can be renewed for five years if all requirements are met.</p>
        <h2 className='font-bold text-justify mt-4'>Reasons for These Changes</h2>
        <div className='media-max-545px:text-[14px]'>
          <ul className="mt-1 text-justify list-disc list-inside">
            <li>Compliance with the Building Safety Act</li>
            <li>Ensuring Eligibility for Genuine Labourers</li>
            <li>Managing the Oversupply of Labourer Cards</li>
          </ul>
        </div>
        <h2 className='font-bold text-justify mt-4'>Approved Evidence for Labouring Work Verification</h2>
        <div className='media-max-545px:text-[14px]'>
          <ul className="mt-1 text-justify list-disc list-inside">
            <li>A letter from an employer (or the main contractor for self-employed workers) on official company-headed paper</li>
            <li>A fully completed Labourer Declaration Form</li>
          </ul>
        </div>
        <h2 className='font-bold text-justify mt-4'>Self-Employed Applicants</h2>
        <p className='mb-6 text-justify media-max-545px:text-[14px]'>The declaration form can be completed by a main contractor for whom you have worked</p>

        <h2 className='font-bold text-justify mt-4'>What to Do If You Have a Labourer Card Solely for Site Access?</h2>
        <div className='media-max-545px:text-[14px]'>
          <ul className="mt-1 text-justify list-disc list-inside">
            <li>A relevant CSCS card is required only for construction workers.</li>
            <li>Workers in non-construction or office-based roles who rarely visit sites do not need a card</li>
          </ul>
        </div>

        <h2 className='font-bold text-justify mt-4'>Construction Site Cleaners</h2>
        <div className='media-max-545px:text-[14px]'>
          <ul className="mt-1 text-justify list-disc list-inside">
            <li>Cleaners working in site offices or welfare facilities do not need a CSCS card</li>
            <li>General cleaning on live construction sites requires a Labourer Card</li>
            <li>Specialist cleaning (e.g., industrial cleaning) requires a Blue Skilled Card, which requires a Level 2 Certificate in Cleaning and Support Services Skills</li>
          </ul>
        </div>
        <h2 className='font-bold text-justify mt-4'>Reapplying with Recognized Alternative Qualifications</h2>
        <div className='media-max-545px:text-[14px]'>
          <ul className="mt-1 text-justify list-disc list-inside">
            <li>Five-year validity qualifications must have been completed within four years of application</li>
            <li>IOSH Safety, Health, and Environment for Construction Workers is valid for three years and must be within its validity at the time of application</li>
          </ul>
        </div>

        <h2 className='font-bold text-justify mt-4'>How can you replace your CSCS Green Card?</h2>
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
