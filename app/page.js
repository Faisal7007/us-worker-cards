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
import { BadgeCheck, ShieldCheck, BookOpenCheck } from "lucide-react";

// import ChatbotEmbed from "./components/ChatbotEmbed"; // This is the extra line (import from componets.chatbotembed)



export default function Home() {

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <>
      <Banner />


      <div className="Helvetica Neue max-w-[1440px] mx-auto px-4 pt-[102px]  media-max-545px:pt-2">


        <div className="flex flex-col lg:flex-row justify-center items-center gap-2 px-4 sm:px-6">
          {/* Image Section */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex items-center h-auto max-w-[400px] sm:max-w-[500px] lg:h-[350px] xl:h-[400px]"
          >
            <Image
              src="/home-img2.jpg"
              alt="home-image"
              width={800}
              height={600}
              priority
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col gap-6 justify-between w-full max-w-2xl mx-auto text-center"
          >
            {/* Headings */}
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug text-gray-900">
                Complete All Requirements to{" "}
                <span className="text-purple_primary relative inline-block">
                  Secure On-Site Access
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-purple_primary" />
                </span>
              </h1>
              <h2 className="mt-3 text-sm sm:text-base md:text-lg text-gray-700 font-normal">
                Verify credentials and stay compliant with industry standards.
              </h2>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <Link
                href="/cscs-card-types"
                className="flex items-center justify-center gap-2 bg-purple_primary text-white font-medium py-2.5 px-5 rounded-md shadow hover:bg-white hover:text-purple_primary hover:border hover:border-purple_primary transition-all duration-300 text-sm"
              >
                <BadgeCheck size={16} />
                CSCS Card
              </Link>

              <Link
                href="/health-and-safety-awareness"
                className="flex items-center justify-center gap-2 bg-purple_primary text-white font-medium py-2.5 px-5 rounded-md shadow hover:bg-white hover:text-purple_primary hover:border hover:border-purple_primary transition-all duration-300 text-sm"
              >
                <ShieldCheck size={16} />
                Health & Safety
              </Link>

              <Link
                href="/book-citb-test/default"
                className="flex items-center justify-center gap-2 bg-purple_primary text-white font-medium py-2.5 px-5 rounded-md shadow hover:bg-white hover:text-purple_primary hover:border hover:border-purple_primary transition-all duration-300 text-sm"
              >
                <BookOpenCheck size={16} />
                CITB HS&E
              </Link>
            </div>
          </motion.div>
        </div>







        <div>
          {/* <Carousel /> */}
        </div>

        <div className="mt-16 media-max-545px:mt-12">
          <div className="text-center ">
            <h2 className="text-[25px] font-bold inline-block  px-4 py-1 bg-purple_primary rounded-full text-white media-max-600px:text-[22px] ">Our Services</h2>
            <p className="text-lg text-gray-600 mt-4 media-max-545px:text-[14px]">Explore the various services we offer to help with your construction and safety needs.</p>
          </div>

          <div className="flex flex-wrap justify-center items-stretch gap-6 mt-10 max-w-[1300px] mx-auto px-4">
            {[
              {
                icon: <FaIdCard className="size-8 text-white" />,
                title: "Get a CSCS Card",
                description:
                  "Apply online for a CSCS Card, renew your CSCS Card, or request a replacement for a lost card. The CSCS Card booking fee is £54, which includes the £36 CSCS fee, a booking fee, and VAT.",
                link_to: "/apply-card-for/cscs",
              },
              {
                icon: <FaIdCard className="size-8 text-white" />,
                title: "Get a ESS Card",
                description:
                  "The ESS card is a ESS partner scheme. You can apply online to get a new ESS card, renew your existing card, or request a replacement if your card is lost",
                link_to: "/apply-card-for/ess",
              },
              {
                icon: <MdOutlineLaptopMac className="size-8 text-white" />,
                title: "Schedule the CITB HS&E Test.",
                description:
                  "Schedule your CITB Health, Safety & Environment Test at the nearest test center. Booking fee of CITB Test £40 for one chance and £60 for two.",
                link_to: "/citb-test",
              },
              {
                icon: <FaHardHat className="size-8 text-white" />,
                title: "Construction Course Green Card",
                description: "Schedule your Health & Safety Awareness Course online or offline.",
                link_to: "/course-book",
              },
              {
                icon: <FaUsers className="size-8 text-white" />,
                title: "Group Booking Available",
                description:
                  "Get exclusive discounts when you book the CITB Health & Safety Test, CSCS Cards, and Construction Course leading to the Green Card for multiple delegates.",
                link_to: "/group-booking",
              },
              {
                icon: <FaAward className="size-8 text-white" />,
                title: "NVQ Level 2 or Higher",
                description:
                  "Get exclusive discounts when you book the CITB Health & Safety Test, CSCS Cards, and Construction Course leading to the Green Card for multiple delegates.",
                link_to: "/nvq-level-2",
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="w-full sm:w-[48%] md:w-[30%] flex justify-center"
              >
                <HomeCard
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  button_text="Apply Now"
                  link_to={card.link_to}
                />
              </motion.div>
            ))}
          </div>



        </div>

        <div className="text-center mt-16 media-max-545px:mt-12">
          <h2 className="text-[25px] font-bold inline-block mb-8  px-4 py-1 bg-purple_primary rounded-full text-white media-max-600px:text-[22px]">Your Guide to Booking the CITB Test</h2>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-10 rounded-lg px-4 sm:px-6 lg:px-0">
          {/* Left Image */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full lg:w-1/2 flex justify-center bg-purple_primary"
          >
            <Image
              src="/citb-img3.png"
              alt="CITB Test Booking"
              width={800}
              height={400}
              className="rounded-lg w-full max-w-[660px] h-auto sm:h-[380px] object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full lg:w-1/2 text-[16px] sm:text-[15px] lg:text-[16px]"
          >
            <h2 className="text-[25px] sm:text-[20px] font-bold text-purple_primary text-left mb-4">
              Scheduling Your CITB Health, Safety & Environment Test
            </h2>
            <p className="text-gray-700 mb-5 text-justify">
              Booking your CITB Touchscreen Test, officially called the CITB Health, Safety & Environment Test, is simpler with Construction Card Services.
            </p>

            <ul className="pl-6 mb-4 text-gray-700 space-y-3">
              <li className="flex items-start text-justify">
                <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                <span>
                  Fill out the CITB Test Booking application
                  <Link href="/book-citb-test/default" className="text-purple_primary ml-1 underline">here.</Link>
                </span>
              </li>
              <li className="flex items-start text-justify">
                <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                <span>Select your preferred test centre and date.</span>
              </li>
              <li className="flex items-start text-justify">
                <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                <span>Complete the payment and review your booking.</span>
              </li>
            </ul>

            <p className="text-gray-700 mb-5 text-justify">
              Within a few minutes, you will receive the confirmation via email and/or text at your registered email address. That’s it!
            </p>
            <p className="text-gray-700 text-justify">
              <strong>Not sure which test to book?</strong> Find the correct test according to your occupation{" "}
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

        <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-6 rounded-lg px-4 lg:px-0">

          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Desktop & Tablet View */}
            <div className="media-min-601px:block">
              <Image
                src="/green-card-img.png"
                alt="card-image"
                width={600}
                height={310}
                className="rounded-lg w-[610px] media-max-1298px:w-[560px]"
              />
            </div>

            {/* Mobile View */}
            <div className="hidden media-min-601px:hidden">
              <Image
                src="/green-card-img-vertical.png"
                alt="card-image-mobile"
                width={400}
                height={700}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </motion.div>




          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full max-w-[660px] text-gray-700 sm:text-sm"
          >
            <ul className="mb-4">
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

              <li className="flex items-start gap-2 mb-1 pl-6">
                <GoDotFill className="text-purple_primary mt-1 flex-shrink-0" />
                <p className="text-justify">
                  If you are applying for the first time, select
                  <strong className="font-semibold ml-1">New Card</strong>.
                </p>
              </li>

              <li className="flex items-start gap-2 mb-4 pl-6">
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
