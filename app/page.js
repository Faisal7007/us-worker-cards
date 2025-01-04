"use client"
import Image from "next/image";
import { useState } from "react";
import { FaAngleDoubleDown, FaCheckCircle, FaHardHat, FaIdCard, FaUsers } from "react-icons/fa";
import HomeCard from "./components/HomeCard";
import { MdOutlineLaptopMac } from "react-icons/md";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <div className="">
<div className="min-h-screen bg-[url('/background-img.jpg')] mb-4 bg-cover bg-center">

</div>
<div className="px-36">
   <div className="flex items-center gap-24 mb-8">
   <div className="  h-[400px] flex items-center justify-center">
  <Image 
    src="/CSCS-Cards-Managers.jpg"
    alt="home-image"
    className="h-full w-full rounded-lg"
    width={500}
    height={500} // Matches the container height
  />
</div>

    <div className=" min-h-[320px]">
      <h1 className="text-[50px] text-purple_primary font-semibold">Complete All Requirements to Secure On-Site Access</h1>
      <div className="flex justify-center items-center">

      <div onClick={handleToggle} className=" flex justify-center cursor-pointer  mt-10 items-center bg-purple_primary text-white text-[20px] font-semibold px-8 py-2 rounded-full"><span>I am currently searching for<FaAngleDoubleDown className="ml-[50%]" /></span>
      </div>
      </div>
      {
        isOpen ?  <div className=" flex justify-between mt-5">
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
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-center items-center">
  <HomeCard 
    icon={<FaIdCard className="size-10 text-white" />}
    title="Get a CSCS Card"
    description="Apply online for a CSCS Card, renew your CSCS Card, or request a replacement for a lost card. The CSCS Card booking fee is £65, which includes the £36 CSCS fee, a booking fee, and VAT."
    button_text="Apply Now"
    link_to="#"
  />

  <HomeCard 
    icon={<MdOutlineLaptopMac className="size-10 text-white" />}
    title="Schedule the CITB HS&E Test."
    description="Schedule your CITB Health, Safety & Environment Test at the nearest test center."
    button_text="Apply Now"
    link_to="#"
  />

  <HomeCard 
    icon={<FaHardHat className="size-10 text-white" />}
    title="Construction Course that Leads to a Green Card"
    description="Schedule your Health & Safety Awareness Course online or offline."
    button_text="Apply Now"
    link_to="#"
  />

  <HomeCard 
    icon={<FaUsers className="size-10 text-white" />}
    title="Group booking available."
    description="Get exclusive discounts when you book the CITB Health & Safety Test, CSCS Cards, and Construction Course leading to the Green Card for multiple delegates."
    button_text="Apply Now"
    link_to="#"
  />
</div>

{/*  */}
<h1 className="text-purple_primary text-[25px] font-bold mt-6">Your Guide to Booking the CITB Test</h1>
<div className="flex flex-col lg:flex-row items-center lg:items-start  mt-6 rounded-lg ">
      {/* Left Side - Image */}
      <div className="bg-[#C3EDC0] rounded-md h-[400px] flex justify-center items-center lg:w-1/2 w-full mb-6 lg:mb-0">
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
        <FaCheckCircle className="text-blue-500 mr-2" />
        Fill out the CITB Test Booking application here.
      </li>
      <li className="flex items-center mb-2">
        <FaCheckCircle className="text-blue-500 mr-2" />
        Select your preferred test centre and date.
      </li>
      <li className="flex items-center mb-2">
        <FaCheckCircle className="text-blue-500 mr-2" />
        Complete the payment and review your booking.
      </li>
    </ul>
        <p className="text-gray-700 mb-4">
        Within a few minutes, you will receive the confirmation via email and/or text at your registered email address. That’s it!
        </p>
        <p className="text-gray-700">
          <strong>Not sure which test to book?</strong> Find the correct test
          according to your occupation{" "}
          <a href="#" className="text-blue-500 underline">
            here
          </a>
          .
        </p>
      </div>
    </div>

</div>

   </div>

  );
}
