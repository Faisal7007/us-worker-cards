"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaAngleDoubleDown, FaAward, FaCheckCircle, FaDotCircle, FaHardHat, FaIdCard, FaLongArrowAltRight, FaUsers } from "react-icons/fa";
import { GoDotFill } from "react-icons/go"
import HomeCard from "./components/HomeCard";
import { MdOutlineLaptopMac } from "react-icons/md";
import Link from "next/link";
import Contact from "./components/Contact";
import Banner from "./components/Banner";
import { useFirebase } from "./context/Firebase";
import { motion } from "framer-motion";



export default function Home() {

  return (
    <>
      <Banner />
      <div className="max-w-[1440px] mx-auto px-4 pt-[102px]  media-max-545px:pt-2">
        <div className="flex  justify-between items-start gap-10  media-max-982px:flex-col">
          <motion.div initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }} className="flex items-center h-[450px] media-max-982px:hidden   media-max-510px:h-[400px] media-max-470px:h-[380px] media-max-410px:h-[350px]">
            <Image
              src="/home-img2.jpg"
              alt="home-image"
              className=" h-full rounded-lg media-max-982px:w-full"
              width={800}
              height={1000}
              priority
            />
          </motion.div>
          <motion.div initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }} className="flex flex-col justify-between ">
            <div>
              <h1 className="text-[70px] leading-[85px] font-bold text-justify media-max-1336px:text-[60px] media-max-1336px:leading-[80px] media-max-545px:text-[40px] media-max-545px:leading-[70px] media-max-545px:text-start media-max-510px:text-[45px] media-max-510px:leading-[60px]">Complete All Requirements to Secure On-Site Access</h1>
              <br />
              <h2 className="text-[40px] font-semibold text-justify media-max-1212px:text-[30px] media-max-510px:text-[25px] ">Verify credentials and stay compliant with industry standards.</h2>
            </div>

            <div className="flex gap-5 mt-[94px] media-max-1212px:mt-28 media-max-1206px:mt-8 media-max-982px:mt-10 media-max-492px:justify-between">
              <Link href="/cscs-card-types" className="bg-purple_primary text-white font-semibold py-2 px-4 rounded-md  border-2 border-transparent hover:border-purple_primary hover:text-purple_primary hover:bg-white transition-all duration-300 media-max-492px:text-[14px] media-max-490px:px-4 media-max-460px:text-[14px] media-max-460px:px-2 media-max-460px:py-2"><span>CSCS Card</span></Link>

              <Link href="/health-and-safety-awareness" className="bg-purple_primary text-white font-semibold py-2 px-4 rounded-md  border-2 border-transparent hover:border-purple_primary hover:text-purple_primary hover:bg-white transition-all duration-300 media-max-492px:text-[14px] media-max-490px:px-4 media-max-460px:text-[14px] media-max-460px:px-2 media-max-460px:py-2"><span>Health & Safety</span></Link>
              <Link href="/book-citb-test/default" className="bg-purple_primary text-white font-semibold py-2 px-4 rounded-md  border-2 border-transparent hover:border-purple_primary hover:text-purple_primary hover:bg-white transition-all duration-300 media-max-492px:text-[14px] media-max-490px:px-4 media-max-460px:text-[14px] media-max-460px:px-2 media-max-460px:py-2"><span>CITB HS&E </span></Link>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 media-max-545px:mt-12">
          <div className="text-center ">
            <h2 className="text-[25px] font-bold inline-block  px-4 py-1 bg-purple_primary rounded-full text-white media-max-600px:text-[22px] ">Our Services</h2>
            <p className="text-lg text-gray-600 mt-4 media-max-545px:text-[14px]">Explore the various services we offer to help with your construction and safety needs.</p>
          </div>

          <div className="flex gap-6 justify-between items-center flex-wrap mt-4 media-max-1015px:gap-6 media-max-690px:justify-center media-max-545px:gap-6 media-max-545px:justify-center">
            <motion.div initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.4 }}>
              <HomeCard
                icon={<FaIdCard className="size-8 text-white" />}
                title="Get a CSCS Card"
                description="Apply online for a CSCS Card, renew your CSCS Card, or request a replacement for a lost card. The CSCS Card booking fee is £54, which includes the £36 CSCS fee, a booking fee, and VAT."
                button_text="Apply Now"
                link_to="/apply-card-for/cscs"
              />
            </motion.div>

            <motion.div initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.4 }}>
              <HomeCard
                icon={<FaIdCard className="size-8 text-white" />}
                title="Get a ESS Card"
                description="The ESS card is a CSCS partner scheme. You can apply online to get a new CSCS card, renew your existing card, or request a replacement if your card is lost"
                button_text="Apply Now"
                link_to="/apply-card-for/ess"
              />
            </motion.div>

            <motion.div initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.4 }}>

              <HomeCard
                icon={<MdOutlineLaptopMac className="size-8 text-white" />}
                title="Schedule the CITB HS&E Test."
                description="Schedule your CITB Health, Safety & Environment Test at the nearest test center.Booking fee of CITB Test &#163;35 for one chance and for 2 chances it will cost &#163;55."
                button_text="Apply Now"
                link_to="/citb-test"
              />
            </motion.div>
            <motion.div initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}>


              <HomeCard
                icon={<FaHardHat className="size-8 text-white" />}
                title="Construction Course Green Card"
                description="Schedule your Health & Safety Awareness Course online or offline."
                button_text="Apply Now"
                link_to="/course-book"
              />
            </motion.div>

            <motion.div initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}>

              <HomeCard
                icon={<FaUsers className="size-8 text-white" />}
                title="Group Booking Available"
                description="Get exclusive discounts when you book the CITB Health & Safety Test, CSCS Cards, and Construction Course leading to the Green Card for multiple delegates."
                button_text="Apply Now"
                link_to="/group-booking"
              />
            </motion.div>


            <motion.div initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}>

              <HomeCard
                icon={<FaAward className="size-8 text-white" />}
                title="NVQ Level 2 or Higher"
                description="Get exclusive discounts when you book the CITB Health & Safety Test, CSCS Cards, and Construction Course leading to the Green Card for multiple delegates."
                button_text="Apply Now"
                link_to="/nvq-level-2"
              />
            </motion.div>
          </div>


        </div>

        <div className="text-center mt-16 media-max-545px:mt-12">
          <h2 className="text-[25px] font-bold inline-block mb-8  px-4 py-1 bg-purple_primary rounded-full text-white media-max-600px:text-[22px]">Your Guide to Booking the CITB Test</h2>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-6 rounded-lg">

          <motion.div initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }} className="bg-purple_primary rounded-lg ">

            <Image
              src="/citb-img3.png"
              alt="CITB Test Booking"
              width={800}
              height={400}
              className='rounded-lg h-[380px] w-[660px] media-max-1298px:w-[560px] media-max-600px:w-[100vw] media-max-545px:h-[220px]'
            />
          </motion.div>

          <motion.div initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }} className="w-[660px] media-max-1298px:w-[560px] media-max-600px:w-[100vw] media-max-410px:w-[100vw] media-max-600px:px-4 media-max-410px:px-4 media-max-545px:text-[14px]">
            <h2 className="text-[25px] font-bold text-purple_primary text-justify mb-4 media-max-545px:text-[20px]">
              Scheduling Your CITB Health, Safety & Environment Test
            </h2>
            <p className="text-gray-700 mb-5 text-justify">
              Booking your CITB Touchscreen Test, officially called the CITB Health, Safety & Environment Test, is simpler with Construction Card Services.
            </p>
            <ul className="pl-6 mb-4 text-gray-700 media-max-545px:text-[14px]">
              <li className="flex items-start mb-2 text-justify">
                <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                <span>
                  Fill out the CITB Test Booking application
                  <Link href="/book-citb-test/default" className="text-purple_primary ml-1 underline">here.</Link>
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
              <Link href="/trade-wise-test" className="text-purple_primary underline">
                here
              </Link>
              .
            </p>
          </motion.div>
        </div>

        <div className="text-center mt-16 mb-8 media-max-545px:mt-12">
          <h2 className="text-[25px] font-bold inline-block  px-4 py-1 bg-purple_primary rounded-full text-white media-max-600px:text-[22px]">Apply for CSCS Card</h2>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-6  rounded-lg">

          <motion.div initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}>

            <Image
              src={`/green-card-img.png`}
              alt='card-image'
              width={800}
              height={400}
              className='rounded-lg h-[380px] w-[660px] media-max-1298px:w-[560px] media-max-600px:w-[100vw] media-max-545px:h-[220px]'
            />
          </motion.div>



          <motion.div initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }} className="w-[660px] media-max-1298px:w-[560px] media-max-600px:w-[100vw] media-max-410px:w-[100vw] media-max-600px:px-4 media-max-410px:px-4 media-max-545px:text-[14px]">


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



          </motion.div>
        </div>


      </div>
      <div className="">
        <Contact no_banner />
      {/* <PaymentPage/> */}
      </div>
    </>

  );
}
