import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import CardForm from '../components/CardForm';
import Image from 'next/image';
import { FaAward, FaHardHat } from 'react-icons/fa';
import SmallCard from '../components/SmallCard';

const Page = () => {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17119060615"
        strategy="afterInteractive"
      />
      <Script id="google-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17119060615');
        `}
      </Script>
      <div className='max-w-[1440px] mx-auto px-4 pt-8 mt-[102px]'>
        <h1 className='text-[30px] font-bold mb-2 capitalize'>Black Manager Card</h1>
        <Link href='cscs-card-types' className='inline-flex items-center text-purple_primary media-max-545px:text-[14px]'><IoIosArrowForward /><span>Go to full card types list</span></Link>
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

        <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-8">
          <div className="w-full sm:max-w-[660px]">
            <Image
              src="/black-manager-card-img.png"
              alt="card-image"
              width={600}
              height={310}
              className="rounded-lg w-[610px] media-max-1298px:w-[560px]"
            />
          </div>

          <div className="w-full sm:max-w-[660px]">
            <CardForm titleOne='Black Manager Card' titleTwo='Easy apply for CSCS Black Card - Manager.' cardType="black-manager" card="cscs" />
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <SmallCard
              icon={<FaHardHat className="size-6 text-white" />}
              title="CITB Test"
              button_text="Apply Now"
              link_to="/book-citb-test/default"
            />

            <SmallCard
              icon={<FaAward className="size-6 text-white" />}
              title="NVQ Level 4 or above"
              button_text="Apply Now"
              link_to="/nvq-level-2"
            />
          </div>
        </div>


        <div className='mt-8 media-max-545px:text-[14px]'>
          <h1 className='capitalize text-[25px] text-black mb-6 font-bold'>Validity - 5 Years</h1>

          <p className='mb-6 text-justify'>Applicants must have passed the appropriate level of the <Link href="/citb-test" className='text-purple_primary font-bold'>CITB Health, Safety, and Environment test</Link> within the last two years. The test must be taken at the relevant level for the occupation being applied for. To determine the required test level, please use our <Link href="/trade-wise-test" className='text-purple_primary font-bold'>Test Finder.</Link> The CSCS card booking fee is £54, which includes the £36 CSCS fee, as well as the booking fee and VAT.</p>

          <p className='text-justify mb-2'>This card is available for manager and technical occupations subject to:</p>

          <p className="flex items-start mb-2 text-justify ">
            <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
            Achievement of a relevant Construction Management/Technical related NVQ/SVQ level 4 or above.</p>
          <p className="flex items-start mb-2 text-justify">
            <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />A SVQ Level 4 in Construction Management/Technical related qualification or</p>
          <p className="flex items-start mb-6 text-justify">
            <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />Holding a pre-existing NVQ level 4 in construction management.</p>
          <p className='text-justify' ><Link href="mailto:support@constructioncardservices.com" className='text-purple_primary font-bold'>Contact Support</Link> if you're still not sure which test to take.</p>
        </div>

      </div>

    </>
  )
}

export default Page
