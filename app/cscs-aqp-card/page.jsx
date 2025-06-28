import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import CardForm from '../components/CardForm';
import Image from 'next/image';
import Script from 'next/script';
import { FaHardHat } from 'react-icons/fa';

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
        <h1 className='text-[30px] font-bold mb-2 capitalize'>White Academically Qualified Person</h1>
        <Link href='/cscs-card-types' className='inline-flex items-center text-purple_primary media-max-545px:text-[14px] '><IoIosArrowForward /><span>Go to full card types list</span></Link>
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
              src="/white-academically-qualified-card-img.png"
              alt="card-image"
              width={600}
              height={310}
              className="rounded-lg w-[610px] media-max-1298px:w-[560px]"
            />
          </div>

          <div className="w-full sm:max-w-[660px]">
            <CardForm titleOne='White Academically Qualified Person' titleTwo='Easy apply for CSCS White Card - Academically Qualified Person CSCS Card.' cardType="white-aqp" card="cscs" />
          </div>
        </div>

        <div className='mt-8 media-max-545px:text-[14px]'>
          <h1 className='capitalize text-[25px] text-black mb-6 font-bold'>Validity - 5 Years</h1>

          <p className='mb-6 text-justify'>This card is available to individuals who have completed specific construction-related degrees, HNDs, HNCs, CIOB Certificates, or NEBOSH Diplomas. It is valid for <span className='font-bold'>five years.</span>
            <br />
            All applicants must pass the <Link href="/citb-test" className='text-purple_primary font-bold'>CITB Managers and Professionals Health, Safety and Environment Test.</Link>
          </p>

          <p className='mb-6 text-justify'>To apply for the card, applicants will need to supply a copy of their qualification and where possible evidence of the units achieved within the qualification. The CSCS Card booking is £54 which includes the £36 CSCS fee, booking fee and VAT.</p>
          <p ><Link href="mailto:support@constructioncardservices.com" className='text-purple_primary font-bold'>Contact Support</Link> if you're still not sure which test to take.</p>
        </div>
      </div>
    </>
  )
}

export default Page
