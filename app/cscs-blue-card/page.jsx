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
    <div className='max-w-[1440px] mx-auto px-4 pt-8 mt-[102px]'>
      <h1 className='text-[30px] font-bold mb-2 capitalize'>Blue Skilled Worker Card</h1>
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

      <div className='flex justify-between items-center mt-10 media-max-1360px:flex-col media-max-1360px:gap-8'>
        <div className='hidden sm:block h-[380px] max-w-[660px]'>
          <Image src='/blue-card-img.png'
            alt='card-image'
            width={800}
            height={400}
            className='rounded-lg h-full w-full'
          />
        </div>
        <div>
          <CardForm titleOne='Blue Skilled Worker Card' titleTwo='Easy apply for Blue CSCS Card - Skilled Worker.' cardType="blue-skilled" card="cscs" />
        </div>
      </div>

      <div className='flex justify-center mt-12'>
        <h1 className='capitalize text-[25px] text-white px-4 py-1 bg-purple_primary rounded-full  font-semibold media-max-600px:text-[22px]'>Eligibility Requirements</h1>
      </div>

      <div className='flex justify-center mt-8'>

        <div className=" flex gap-10">

          <SmallCard icon={<FaHardHat className="size-6 text-white" />}
            title="CITB Test"
            button_text="Apply Now"
            link_to="/book-citb-test/default" />

          <SmallCard icon={<FaAward className="size-6 text-white" />}
            title="NVQ Level 2"
            button_text="Apply Now"
            link_to="/nvq-level-2" />
        </div>
      </div>


      <div className='text-justify media-max-545px:text-[14px]'>
        <h1 className='capitalize text-[25px] text-black my-8  font-bold font smooch_sans_regular'>Validity - 5 Years</h1>

        <h2 className='text-justify mb-2'>You can apply for this card if you have either:</h2>
        <div className="space-y-4 media-max-545px:text-[14px]">
          <p className="flex items-start text-justify">
            <FaHardHat className="text-purple_primary mt-1 mr-2 text-base flex-shrink-0" />
            <span>
              Achieved an
              <Link href="/nvq-level-2" className="font-bold mx-1 text-purple_primary">NVQ or SVQ</Link>
              Level 2 in a construction-related field, or
            </span>
          </p>

          <p className="flex items-start text-justify">
            <FaHardHat className="text-purple_primary mt-1 mr-2 text-base flex-shrink-0 leading-none" />
            Completed an apprenticeship, such as an employer-sponsored apprenticeship, a City and Guilds of London Institute Craft Certificate, or a CSCS-approved Trailblazer.
          </p>
          <p className="text-justify">
            If you lack these qualifications but have experience in your job, you can register for a qualification relevant to your occupation and then apply for a
            <Link href="/cscs-red-experienced-worker-card" className="text-purple_primary font-bold mx-1">(Red) Experienced Worker Card.</Link>
          </p>
          <p className="text-justify">
            For more information on registering (enrolling) for a qualification, please visit
            <Link href="/nvq-level-2" className="text-purple_primary font-bold mx-1">NVQ Level 2.</Link>
          </p>
          <p className="mb-6 text-justify">
            Applicants must pass the <Link href="/citb-test" className="font-bold text-purple_primary">CITB Health, Safety, and Environment test</Link> at the appropriate level for their occupation within the last two years. To identify the required test level, refer to our <Link href="#" className="font-bold text-purple_primary">Card Finder.</Link> The cost for booking a CSCS Card is £54, which covers the £36 CSCS fee, booking fee, and VAT.
          </p>
          <p className="text-justify">
            <Link href="#" className="text-purple_primary font-bold">Contact Support</Link> if you're still not sure which test to take.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Page
