"use client"
import Image from "next/image";
import { useState } from "react";
import { FaAngleDoubleDown, FaCheckCircle, FaDotCircle, FaHardHat, FaIdCard, FaLongArrowAltRight, FaUsers } from "react-icons/fa";
import {GoDotFill} from "react-icons/go"
import HomeCard from "./components/HomeCard";
import { MdOutlineLaptopMac } from "react-icons/md";
import Link from "next/link";
import Contact from "./components/Contact";
import Banner from "./components/Banner";
export default function Home() {
  const [isOpen, setIsOpen] = useState(true)
  const handleToggle=()=>{
    setIsOpen(true)
  }
  return (
    <>
<Banner/>
    <div className="max-w-[1440px] mx-auto">
<div className="px-4">
   <div className="flex items-start justify-between py-24">
   <div className="flex items-end">
  <Image
    src="/worker-img.png"
    alt="home-image"
    className="h-full w-full rounded-lg"
    width={800}
    height={1000}
  />
</div>
    <div className="flex flex-col">
      <div>
      <h1 className="text-[70px] leading-[85px] text-justify text-black font-bold">Complete All Requirements to Secure On-Site Access</h1>
      <br />
      <h2 className="text-[40px] font-semibold text-justify mb-[85px]">Verify credentials and stay compliant with industry standards.</h2>
      </div>
      
      <div className="flex gap-5">
        <button className="custom-btn btn-3"><span>CSCS Card</span></button>
        <button className="custom-btn btn-3"><span>CITB HS&E </span></button>
        <button className="custom-btn btn-3"><span>Health & Safety</span></button>
      </div>
      </div>

   </div>

<div>

   <div className="text-center">
  <h2 className="text-[25px] font-bold inline-block  px-4 py-1 bg-purple_primary rounded-full text-white">Our Services</h2>
  <p className="text-lg text-gray-600 pt-12 pb-6">Explore the various services we offer to help with your construction and safety needs.</p>
</div>


   <div className="flex justify-between">
 <div>
  <HomeCard 
    icon={<FaIdCard className="size-8 text-white" />}
    title="Get a CSCS Card"
    description="Apply online for a CSCS Card, renew your CSCS Card, or request a replacement for a lost card. The CSCS Card booking fee is £54, which includes the £36 CSCS fee, a booking fee, and VAT."
    button_text="Apply Now"
    link_to="#"
  />
 </div>

<div>

  <HomeCard 
    icon={<MdOutlineLaptopMac className="size-8 text-white" />}
    title="Schedule the CITB HS&E Test."
    description="Schedule your CITB Health, Safety & Environment Test at the nearest test center.booking fee of CITB Test 35 pounds for one chance and for 2 chances it will cost 55 pounds."
    button_text="Apply Now"
    link_to="#"
  />
</div>
   <div>


  <HomeCard 
    icon={<FaHardHat className="size-8 text-white" />}
    title="Construction Course  Green Card"
    description="Schedule your Health & Safety Awareness Course online or offline."
    button_text="Apply Now"
    link_to="#"
  />
   </div>

<div>

  <HomeCard 
    icon={<FaUsers className="size-8 text-white" />}
    title="Group booking available."
    description="Get exclusive discounts when you book the CITB Health & Safety Test, CSCS Cards, and Construction Course leading to the Green Card for multiple delegates."
    button_text="Apply Now"
    link_to="#"
  />
  </div>
</div>
</div>




{/*  */}
{/* <h1 className="text-black text-[30px] text-center font-bold pt-24 pb-12">Your Guide to Booking the CITB Test</h1> */}
<div className="text-center pt-24 pb-12">
<h2 className="text-[25px] font-bold inline-block  px-4 py-1 bg-purple_primary rounded-full text-white">Your Guide to Booking the CITB Test</h2>
</div>
<div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-center rounded-lg">
      {/* Left Side - Image */}
      
        <Image
        height={400}
        width={500}
          src="/citb-img.png"
          alt="CITB Test Booking"
          className="rounded-lg w-[450px]  "
        />
      
      {/* Right Side - Content */}
      <div className="max-w-[800px]">
        <h2 className="text-[25px] font-bold text-purple_primary mb-6">
        Scheduling Your CITB Health, Safety & Environment Test
        </h2>
        <p className="text-gray-700 mb-4">
Booking your CITB Touchscreen Test, officially called the CITB Health, Safety & Environment Test, is simpler with Construction Worker Support.
        </p>
        <ul className="pl-6 mb-4 text-gray-700">
      <li className="flex items-center mb-2">
        <FaHardHat className="text-purple_primary mr-2" />
        Fill out the CITB Test Booking application <Link href="#" className="text-purple_primary ml-1 underline"> here.</Link>
      </li>
      <li className="flex items-center mb-2">
        <FaHardHat className="text-purple_primary mr-2" />
        Select your preferred test centre and date.
      </li>
      <li className="flex items-center mb-2">
        <FaHardHat className="text-purple_primary mr-2" />
        Complete the payment and review your booking.
      </li>
    </ul>
        <p className="text-gray-700 mb-6">
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


    {/* <h1 className="text-black text-[30px] text-center font-bold pt-24 pb-12">Apply for CSCS Card</h1> */}
    <div className="text-center pt-24 pb-12">
    <h2 className="text-[25px] font-bold inline-block  px-4 py-1 bg-purple_primary rounded-full text-white">Apply for CSCS Card</h2>
    </div>

    <div className="flex flex-col lg:flex-row-reverse lg:justify-between items-center lg:items-start rounded-lg ">
      {/* Left Side - Image */}
      
        <Image
        height={400}
        width={500}
          src="/green-card-img.png"
          alt="CITB Test Booking"
          className="rounded-lg w-[450px]  "
        />
      

      {/* Right Side - Content */}
      <div className=" max-w-[800px] ">
       
        <ul className="mb-4 text-gray-700">
      <li className="flex items-start mb-2">
        <FaHardHat className="text-purple_primary mt-1 mr-2" />
        Fill the Application here and choose the CSCS Card based on your qualification.
      </li>
      <li className="flex items-center mb-2">
        <FaHardHat className="text-purple_primary mr-2" />
        
Select the type of card booking you want to proceed with.
      </li>
      <li className="flex items-center mb-2 ml-6">
      <GoDotFill className="text-purple_primary" />

      If you are applying for the first time, select <span className="font-semibold ml-1">New Card</span>.
      </li>
      <li className="flex items-center mb-2 ml-6">
      <GoDotFill className="text-purple_primary" />

      If you want a replacement for your existing CSCS card, select <span className="font-semibold ml-1">Lost Card</span>.
      </li> 
      <li className="flex items-start mb-2">
        <FaHardHat className="text-purple_primary mr-2 size-5 " />
        <span>To continue, click <span className="font-semibold ml-1">Submit Application</span> to add your CITB test ID, expired CSCS Card number (for Renew Card), and card delivery address.</span>
      </li>  <li className="flex items-center mb-2">
        <FaHardHat className="text-purple_primary mr-2" />
        Make the payment and confirm your details.
      </li> 
      <li className="flex items-start mb-2">
  <FaHardHat className="text-purple_primary mr-2 size-4 mt-1" />
  Once approved, you will receive your CSCS Card in approximately 7 working days. That’s it!
</li>

    </ul>
        
      </div>
    </div>

</div>
   </div>
   <div className="">
<Contact no_banner/>
   </div>
   </>

  );
}
