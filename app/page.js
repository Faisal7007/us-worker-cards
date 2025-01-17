"use client"
import Image from "next/image";
import { useState } from "react";
import { FaAngleDoubleDown, FaCheckCircle, FaDotCircle, FaHardHat, FaIdCard, FaLongArrowAltRight, FaUsers } from "react-icons/fa";
import { GoDotFill } from "react-icons/go"
import HomeCard from "./components/HomeCard";
import { MdOutlineLaptopMac } from "react-icons/md";
import Link from "next/link";
import Contact from "./components/Contact";
import Banner from "./components/Banner";
export default function Home() {
  const [isOpen, setIsOpen] = useState(true)
  const handleToggle = () => {
    setIsOpen(true)
  }
  return (
    <>
      <Banner />
      <div className="max-w-[1440px] mx-auto px-4 pt-8 media-max-545px:pt-2">
        
          <div className="flex items-start justify-between pt-8 ">
            <div className="flex items-center w-[700px] media-max-1298px:w-[500px] media-max-600px:w-[300px] media-max-470px:w-[200px]">
              <Image
                src="/worker-img.png"
                alt="home-image"
                className="h-[450px] w-full rounded-lg media-max-1298px:h-[380px] media-max-935px:h-[320px] media-max-600px:h-[210px] media-max-470px:h-[200px]"
                width={800}
                height={1000}
              />
            </div>
            <div className="flex flex-col">
              <div>
                <h1 className="text-[70px] leading-[85px] text-justify text-black font-bold media-max-1298px:text-[50px] media-max-935px:text-[35px] media-max-935px:leading-[50px] media-max-600px:text-[26px] media-max-600px:leading-[40px] media-max-522px:text-[22px] media-max-510px:text-[22px] media-max-510px:leading-[35px] media-max-470px:text-[18px] media-max-470px:leading-[28px]">Complete All Requirements to Secure On-Site Access</h1>
                <br />
                <h2 className="text-[40px] font-semibold text-justify mb-[70px] media-max-1298px:text-[25px] media-max-1015px:mb-[40px] media-max-935px:text-[22px] media-max-760px:mb-[12px] media-max-655px:mb-[22px] media-max-600px:text-[16px] media-max-600px:mb-[4px] media-max-510px:text-[16px] media-max-510px:mb-[16px] media-max-470px:text-[14px] media-max-470px:mb-[25px]">Verify credentials and stay compliant with industry standards.</h2>
              </div>

              <div className="flex gap-5">
                <Link href="/cscs-card-types" className="bg-purple_primary text-white font-semibold py-3 px-6 rounded-md my-5 border-2 border-transparent hover:border-purple_primary hover:text-purple_primary hover:bg-white transition-all duration-300 media-max-760px:text-[12px] media-max-655px:text-[10px] media-max-655px:px-3 media-max-655px:py-2 media-max-545px:text-[8px]  between360-545:text-[8px] media-max-510px:text-[6px] media-max-510px:px-2"><span>CSCS Card</span></Link>
                <Link href="/citb-test" className="bg-purple_primary text-white font-semibold py-3 px-6 rounded-md my-5 border-2 border-transparent hover:border-purple_primary hover:text-purple_primary hover:bg-white transition-all duration-300 media-max-760px:text-[12px] media-max-655px:text-[10px] media-max-655px:px-3 media-max-655px:py-2 media-max-545px:text-[8px  media-max-510px:text-[8px] media-max-510px:px-2"><span>CITB HS&E </span></Link>
                <Link href="/health-and-safety-awareness" className="bg-purple_primary text-white font-semibold py-3 px-6 rounded-md my-5 border-2 border-transparent hover:border-purple_primary hover:text-purple_primary hover:bg-white transition-all duration-300 media-max-760px:text-[12px] media-max-655px:text-[10px] media-max-655px:px-3 media-max-655px:py-2 media-max-545px:text-[8px] media-max-510px:text-[8px] media-max-510px:px-2"><span>Health & Safety</span></Link>
              </div>
            </div>
          </div>

          <div className="mt-16 media-max-545px:mt-12">

            <div className="text-center ">
              <h2 className="text-[25px] font-bold inline-block  px-4 py-1 bg-purple_primary rounded-full text-white media-max-600px:text-[18px]">Our Services</h2>
              <p className="text-lg text-gray-600 mt-4 media-max-545px:text-[14px]">Explore the various services we offer to help with your construction and safety needs.</p>
            </div>

         

             <div className="flex justify-between items-center flex-wrap mt-4 media-max-1015px:gap-6 media-max-690px:justify-center media-max-545px:gap-6 media-max-545px:justify-center">
              <div>
                <HomeCard
                  icon={<FaIdCard className="size-8 text-white" />}
                  title="Get a CSCS Card"
                  description="Apply online for a CSCS Card, renew your CSCS Card, or request a replacement for a lost card. The CSCS Card booking fee is £54, which includes the £36 CSCS fee, a booking fee, and VAT."
                  button_text="Apply Now"
                  link_to="/apply-card-for/cscs"
                />
              </div>

              <div>

                <HomeCard
                  icon={<MdOutlineLaptopMac className="size-8 text-white" />}
                  title="Schedule the CITB HS&E Test."
                  description="Schedule your CITB Health, Safety & Environment Test at the nearest test center.booking fee of CITB Test 35 pounds for one chance and for 2 chances it will cost 55 pounds."
                  button_text="Apply Now"
                  link_to="/citb-test"
                />
              </div>
              <div>


                <HomeCard
                  icon={<FaHardHat className="size-8 text-white" />}
                  title="Construction Course  Green Card"
                  description="Schedule your Health & Safety Awareness Course online or offline."
                  button_text="Apply Now"
                  link_to="/course-book"
                />
              </div>

              <div>

                <HomeCard
                  icon={<FaUsers className="size-8 text-white" />}
                  title="Group booking available."
                  description="Get exclusive discounts when you book the CITB Health & Safety Test, CSCS Cards, and Construction Course leading to the Green Card for multiple delegates."
                  button_text="Apply Now"
                  link_to="/group-booking"
                />
              </div>
            </div> 
          

          </div>

          <div className="text-center mt-16 media-max-545px:mt-12">
            <h2 className="text-[25px] font-bold inline-block mb-8  px-4 py-1 bg-purple_primary rounded-full text-white media-max-600px:text-[18px]">Your Guide to Booking the CITB Test</h2>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-6 rounded-lg">
            
<div className="bg-purple_primary rounded-lg ">

            <Image
              src="/citb-img3.png"
              alt="CITB Test Booking"
              width={800}
             height={400}
            className='rounded-lg h-[380px] w-[660px] media-max-1298px:w-[560px] media-max-600px:w-[100vw] media-max-545px:h-[220px]'
            />
            </div>

            <div className="w-[660px] media-max-1298px:w-[560px] media-max-600px:w-[100vw] media-max-410px:w-[100vw] media-max-600px:px-4 media-max-410px:px-4 media-max-545px:text-[14px]">
              <h2 className="text-[25px] font-bold text-purple_primary text-justify mb-4 media-max-545px:text-[20px]">
                Scheduling Your CITB Health, Safety & Environment Test
              </h2>
              <p className="text-gray-700 mb-5 text-justify">
                Booking your CITB Touchscreen Test, officially called the CITB Health, Safety & Environment Test, is simpler with Construction Worker Support.
              </p>
              <ul className="pl-6 mb-4 text-gray-700 media-max-545px:text-[14px]">
  <li className="flex items-start mb-2 text-justify">
    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
    <span>
      Fill out the CITB Test Booking application
      <Link href="#" className="text-purple_primary ml-1 underline">here.</Link>
    </span>
  </li>
  <li className="flex items-start mb-2 text-justify">
    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
    <span>
      Select your preferred test centre and date.
    </span>
  </li>
  <li className="flex items-start mb-2 text-justify">
    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
    <span>
      Complete the payment and review your booking.
    </span>
  </li>
</ul>

              <p className="text-gray-700 mb-5">
                Within a few minutes, you will receive the confirmation via email and/or text at your registered email address. That’s it!
              </p>
              <p className="text-gray-700">
                <strong>Not sure which test to book?</strong> Find the correct test
                according to your occupation{" "}
                <a href="#" className="text-purple_primary underline">
                  here
                </a>
                .
              </p>
            </div>
          </div> 


         
           <div className="text-center mt-16 mb-8 media-max-545px:mt-12">
             <h2 className="text-[25px] font-bold inline-block  px-4 py-1 bg-purple_primary rounded-full text-white media-max-600px:text-[18px]">Apply for CSCS Card</h2>
             </div>
         
               <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-6  rounded-lg">
                   
                     <Image
                     src={`/green-card-img.png`}
                     alt='card-image'
                     width={800}
                     height={400}
                       className='rounded-lg h-[380px] w-[660px] media-max-1298px:w-[560px] media-max-600px:w-[100vw] media-max-545px:h-[220px]'
                     />
                   
              
                   <div className="w-[660px] media-max-1298px:w-[560px] media-max-600px:w-[100vw] media-max-410px:w-[100vw] media-max-600px:px-4 media-max-410px:px-4 media-max-545px:text-[14px]">
              

                   <ul className="mb-4 text-gray-700">
  <li className="flex items-start gap-2 mb-4">
    <FaHardHat className="text-purple_primary mt-1 flex-shrink-0" />
    <p className="text-justify">
      Fill the Application here and choose the CSCS Card based on your qualification.
    </p>
  </li>

  <li className="flex items-start gap-2 mb-2">
    <FaHardHat className="text-purple_primary mt-1 flex-shrink-0" />
    <p className="text-justify">Select the type of card booking you want to proceed with.</p>
  </li>

  <li className="flex items-start gap-2 mb-1 ml-6">
    <GoDotFill className="text-purple_primary mt-1 flex-shrink-0" />
    <p className="text-justify">
      If you are applying for the first time, select  
      <strong className="font-semibold ml-1">New Card</strong>.
    </p>
  </li>

  <li className="flex items-start gap-2 mb-4 ml-6">
    <GoDotFill className="text-purple_primary mt-1 flex-shrink-0" />
    <p className="text-justify">
      If you want a replacement for your existing CSCS card, select 
      <strong className="font-semibold ml-1">Lost Card</strong>.
    </p>
  </li>

  <li className="flex items-start gap-2 mb-4">
    <FaHardHat className="text-purple_primary mt-1 flex-shrink-0" />
    <p className="text-justify">
      To continue, click <strong className="font-semibold ml-1">Submit Application</strong> to add your 
      CITB test ID, expired CSCS Card number (for Renew Card), and card delivery address.
    </p>
  </li>

  <li className="flex items-start gap-2 mb-4">
    <FaHardHat className="text-purple_primary mt-1 flex-shrink-0" />
    <p className="text-justify">Make the payment and confirm your details.</p>
  </li>

  <li className="flex items-start gap-2 mb-4">
    <FaHardHat className="text-purple_primary mt-1 flex-shrink-0" />
    <p className="text-justify">
      Once approved, you will receive your CSCS Card in approximately 7 working days. That’s it!
    </p>
  </li>
</ul>



                   </div>
                 </div> 

        
      </div>
      <div className="">
        <Contact no_banner />
      </div>
    </>

  );
}
