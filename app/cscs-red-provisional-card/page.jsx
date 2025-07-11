import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import CardForm from '../components/CardForm';
import Image from 'next/image';
import { FaHardHat } from 'react-icons/fa';
import Script from 'next/script';

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
        <h1 className='text-[30px] font-bold mb-2 capitalize'>Red Provisional Card</h1>
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
        <p className='media-max-545px:text-[14px]'>Apply for a CSCS Card easily using our <Link href='/cscs-card-types' className='text-purple_primary font-bold '> online application service.</Link>
        </p>

        {/* Form */}

        <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-8">
          <div className="w-full sm:max-w-[660px]">
            <Image
              src="/red-card-img.png"
              alt="card-image"
              width={600}
              height={310}
              className="rounded-lg w-[610px] media-max-1298px:w-[560px]"
            />
          </div>

          <div className="w-full sm:max-w-[660px]">
            <CardForm
              titleOne="Red Provisional Card"
              titleTwo="Easy apply for Provisional- CSCS Temporary Card."
              cardType="red-provisional"
              card="cscs"
            />
          </div>
        </div>



        <div className='mt-8'>
          <h1 className='capitalize text-[25px] text-black mb-6 font-bold'>Validity - 6 Months</h1>

          <p className="mb-6 text-justify text-base media-max-545px:text-[14px] leading-relaxed">
            <span>
              Applicants must have passed the&nbsp;
              <Link href="/citb-test" className="text-purple_primary font-bold">
                CITB Health, Safety, and Environment test
              </Link>
              &nbsp;at the appropriate level within the last two years.
              The Provisional CSCS card lasts for six months and cannot be renewed. Before its expiration, cardholders must either achieve or register for a recognized construction-related qualification and apply for the appropriate CSCS card relevant to their job.
              The total cost for booking the CSCS card is £54, which includes the £36 CSCS fee, booking fee, and VAT.
            </span>
          </p>



          <p className='mb-6 text-justify media-max-545px:text-[14px]'>This card is for people who are working through probationary periods while employers assess their suitability for employment. You can only apply for a provisional card if you have not held a CSCS card before and this card can only be applied for once. <span className='font-bold'>No qualification is required for this card.</span></p>

          <p className='media-max-545px:text-[14px]' ><Link href="mailto:support@constructioncardservices.com" className='text-purple_primary font-bold'>Contact Support</Link> if you're still not sure which test to take.</p>
        </div>




      </div>
    </>
  )
}

export default Page
