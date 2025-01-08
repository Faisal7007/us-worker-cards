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
<div className="px-16">
   <div className="flex items-center gap-24 mb-20">
   <div className="  h-[400px] w-[600px] flex items-center justify-center">
  <Image
    src="/untitled-design.png"
    alt="home-image"
    className="h-full w-full rounded-lg"
    width={800}
    height={1000} // Matches the container height
  />
</div>

    <div className=" min-h-[340px] ">
      <h1 className="text-[50px] text-purple_primary font-semibold">Complete All Requirements to Secure On-Site Access</h1>
      <div className="flex justify-center items-center">
      <div
  onClick={handleToggle}
  className="flex justify-center  mt-24 capitalize items-center bg-purple_primary text-white text-[20px] font-semibold px-8 py-2 rounded-md hover:shadow-md"
>
{/* animate-pulse */}
  <span>
    I am currently searching for
    {/* animate-bounce */}
    <FaAngleDoubleDown className="ml-[50%] " />
  </span>
</div>
      </div>
      {
        isOpen ?  <div className=" flex justify-between mt-10 ">
        <button className="custom-btn btn-3"><span>CSCS Card</span></button>
        <button className="custom-btn btn-3"><span>CITB HS&E Test</span></button>
        <button className="custom-btn btn-3"><span>Health & Safety</span></button>
      </div>:''
      }
    </div>
   </div>
   <div className="text-center mb-8">
  <h2 className="text-xl font-bold inline-block bg-purple_primary px-4 pb-1 rounded-full text-white">Our Services</h2>
  <p className="text-lg text-gray-600 mt-2">Explore the various services we offer to help with your construction and safety needs.</p>
</div>
<div className="flex justify-center">

   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-20 justify-center items-center">
  <HomeCard 
    icon={<FaIdCard className="size-8 text-white" />}
    title="Get a CSCS Card"
    description="Apply online for a CSCS Card, renew your CSCS Card, or request a replacement for a lost card. The CSCS Card booking fee is £54, which includes the £36 CSCS fee, a booking fee, and VAT."
    button_text="Apply Now"
    link_to="#"
  />

  <HomeCard 
    icon={<MdOutlineLaptopMac className="size-8 text-white" />}
    title="Schedule the CITB HS&E Test."
    description="Schedule your CITB Health, Safety & Environment Test at the nearest test center.booking fee of CITB Test 35 pounds for one chance and for 2 chances it will cost 55 pounds."
    button_text="Apply Now"
    link_to="#"
  />

  <HomeCard 
    icon={<FaHardHat className="size-8 text-white" />}
    title="Construction Course Leads to a Green Card"
    description="Schedule your Health & Safety Awareness Course online or offline."
    button_text="Apply Now"
    link_to="#"
  />

  <HomeCard 
    icon={<FaUsers className="size-8 text-white" />}
    title="Group booking available."
    description="Get exclusive discounts when you book the CITB Health & Safety Test, CSCS Cards, and Construction Course leading to the Green Card for multiple delegates."
    button_text="Apply Now"
    link_to="#"
  />
</div>

</div>


{/*  */}
<h1 className="text-black text-[30px] text-center font-bold my-12">Your Guide to Booking the CITB Test</h1>
<div className="flex flex-col lg:flex-row items-center lg:items-start  mt-6 rounded-lg ">
      {/* Left Side - Image */}
      <div className="rounded-md h-[400px] flex justify-center items-center lg:w-1/2 w-full mb-6 lg:mb-0">
        <Image
        height={400}
        width={500}
          src="/citb-img.png"
          alt="CITB Test Booking"
          className="rounded-lg w-full "
        />
      </div>

      {/* Right Side - Content */}
      <div className="lg:w-1/2 w-full lg:pl-8">
        <h2 className="text-2xl font-bold text-purple_primary mb-4">
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
        <p className="text-gray-700 mb-4">
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


    <h1 className="text-black text-[30px] text-center font-bold my-12">Apply for CSCS Card</h1>

    <div className="  flex flex-col lg:flex-row-reverse lg:justify-between  items-center lg:items-start  mt-6 rounded-lg ">
      {/* Left Side - Image */}
      <div className="bg-[#fff] rounded-md h-[400px] flex justify-center items-start lg:w-1/2 w-full mb-6 lg:mb-0">
        <Image
        height={400}
        width={500}
          src="/green-card-img.png"
          alt="CITB Test Booking"
          className="rounded-lg w-full "
        />
      </div>

      {/* Right Side - Content */}
      <div className="lg:w-[560px] w-full text-justify ">
       
        <ul className="mb-4 text-gray-700">
      <li className="flex items-start">
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
        <FaHardHat className="text-purple_primary mr-2 size-7" />
        <span>To continue, click <span className="font-semibold ml-1">Submit Application</span> to add your CITB test ID, expired CSCS Card number (for Renew Card), and card delivery address.</span>
      </li>  <li className="flex items-center mb-2">
        <FaHardHat className="text-purple_primary mr-2" />
        Make the payment and confirm your details.
      </li> 
      <li className="flex items-start mb-2">
  <FaHardHat className="text-purple_primary mr-2 size-5 mt-1" />
  Once approved, you will receive your CSCS Card in approximately 7 working days. That’s it!
</li>

    </ul>
        
      </div>
    </div>

</div>

   </div>
<Contact banner/>
   </>

  );
}
