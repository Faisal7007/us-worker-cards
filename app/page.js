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


        <div className="flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-10 px-4 sm:px-6">
          {/* Image Section */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex items-center h-auto max-w-[350px] sm:max-w-[400px] lg:h-[300px] xl:h-[350px]" // ↓ Reduced height/width
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
            className="flex flex-col gap-10 justify-around max-w-xl text-center lg:text-left lg:ml-2" // ↓ reduced gap & margin
          >
            {/* Headings */}
            {/* <div> */}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug text-gray-900">
              Complete All Requirements to{" "}
              <span className="text-purple_primary relative inline-block">
                Secure On-Site Access
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-purple_primary" />
              </span>
            </h1>
            <h2 className="mt-2 text-sm sm:text-base md:text-lg text-gray-700 font-normal">
              Verify credentials and stay compliant with industry standards.
            </h2>
            {/* </div> */}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-4">
              {/* Buttons here */}
            </div>
          </motion.div>
        </div>








        <div>
          {/* <Carousel /> */}
        </div>

        <div className="mt-2 sm:mt-16">
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
                  "Apply online for a CSCS Card, renew your CSCS Card, or request a replacement for a lost card. Get a free consultation from our experts on whatsapp.",
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
          <h2 className="text-[25px] font-bold inline-block mb-8 px-4 py-1 bg-purple_primary rounded-full text-white media-max-600px:text-[22px]">
            Your Guide to Booking the CITB Test
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center max-w-[1300px] mx-auto px-4 lg:px-0">
          {/* Left Image */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full lg:w-[40%] bg-purple_primary rounded-lg overflow-hidden"
          >
            <Image
              src="/citb-img3.png"
              alt="CITB Test Booking"
              width={700}
              height={350}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full lg:w-[50%] text-gray-700 text-justify text-[16px]"
          >
            <h3 className="text-[24px] font-bold text-purple_primary mb-4">
              Scheduling Your CITB Health, Safety & Environment Test
            </h3>
            <p className="mb-5">
              Booking your CITB Touchscreen Test is simpler with Construction Card Services.
            </p>

            <ul className="space-y-3 pl-5 list-none">
              <li className="flex items-start gap-2">
                <FaHardHat className="text-purple_primary mt-1" />
                <span>
                  Fill out the CITB Test Booking application
                  <Link href="/book-citb-test/default" className="underline text-purple_primary ml-1">here</Link>.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaHardHat className="text-purple_primary mt-1" />
                <span>Select your preferred test centre and date.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaHardHat className="text-purple_primary mt-1" />
                <span>Complete the payment and review your booking.</span>
              </li>
            </ul>

            <p className="mt-4">
              Within a few minutes, you will receive confirmation via email and/or text. That’s it!
            </p>

            <p className="mt-4">
              <strong>Not sure which test to book?</strong> Find it according to your occupation{" "}
              <Link href="/trade-wise-test" className="text-purple_primary underline">here</Link>.
            </p>
          </motion.div>
        </div>








        <div className="text-center mt-16 mb-8 media-max-545px:mt-12">
          <h2 className="text-[25px] font-bold inline-block  px-4 py-1 bg-purple_primary rounded-full text-white media-max-600px:text-[22px]">Apply for CSCS Card</h2>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-center items-center lg:gap-10 gap-6 rounded-lg px-4 lg:px-0">

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
                width={500}
                height={280}
                className="rounded-lg w-full max-w-[500px] h-auto media-max-1298px:max-w-[460px]"
              />
            </div>


            {/* Mobile View */}
            {/* <div className="hidden media-min-601px:hidden">
              <Image
                src="/green-vertical.png"
                alt="card-image-mobile"
                width={400}
                height={700}
                className="rounded-lg w-full h-full object-cover"
              /> */}
            {/* </div> */}
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
