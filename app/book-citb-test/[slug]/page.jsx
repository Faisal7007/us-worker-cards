"use client"
import Link from 'next/link'
import React, { useState } from 'react'
// import CitbForm from '../components/CitbFrom'


// Demo styles, see 'Styles' section below for some notes on use.

// import { useFirebase } from '../context/Firebase';
import { ToastContainer } from 'react-toastify';
import { useParams } from 'next/navigation';
import CitbForm from '@/app/components/CitbFrom';
import QuestionAccordion from '@/app/components/QuestionAccordion';

const page = () => {
  const params = useParams();
  const id = params.slug;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 pt-[100px] pb-16 bg-gray-50">
      <ToastContainer />

      <div className="w-full max-w-[1280px] mx-auto space-y-12">
        {/* Header Section */}
        <div className="w-fit max-w-[95vw] mt-10 bg-white px-6 sm:px-10 py-6 rounded-xl shadow border border-gray-200 text-center mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Book a CITB Health, <br />
            Safety & Environment Test{" "}
            {id === "default" ? "" : id ? `in ${id} Test Center` : ""}
          </h1>
          <h3 className="mt-2 text-base sm:text-lg font-medium text-purple_primary">
            Required for CSCS Card
          </h3>
        </div>


        {/* Intro Text */}
        <div className="max-w-2xl mx-auto bg-white px-6 py-5 rounded-lg shadow-sm border border-gray-100 text-sm sm:text-base text-gray-700 text-justify space-y-4">
          <h2 className="font-semibold text-gray-800 text-base sm:text-lg md:text-xl">
            The HS&E test from CITB is a key requirement for obtaining a CSCS Card.
          </h2>
          <p>
            The CITB Health, Safety & Environment Test, also called the CITB Touch Screen Test, is necessary for obtaining or renewing a CSCS Card. The cost of the CITB HS&E Test is{" "}
            <span className="font-semibold">£22.50</span>.
          </p>

          <div className="space-y-2">
            <Link
              href="/citb-test"
              className="inline-block font-medium text-purple_primary hover:text-purple-800 underline transition"
            >
              📌 More Information here
            </Link>
            <br />
            <Link
              href="/trade-wise-test"
              className="inline-block font-medium text-purple_primary hover:text-purple-800 underline transition"
            >
              🧩 Not sure which test to take?
            </Link>
          </div>
        </div>

        {/* Form Section */}
        <div className="max-w-2xl mx-auto bg-white p-6 shadow-md rounded-lg border border-gray-100">
          <CitbForm test_center={id} />
        </div>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-0">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-light tracking-wide mb-10">
            Frequently Asked{" "}
            <span className="text-purple_primary font-allison_regular text-6xl sm:text-7xl leading-none">
              Questions
            </span>
          </h2>
          <QuestionAccordion />
        </section>

        {/* Info Box */}
        <section className="px-4 sm:px-6 py-6 bg-gradient-to-br from-purple-50 to-white border-l-[6px] border-r-[6px] border-purple_primary rounded-lg max-w-4xl mx-auto shadow-md">
          <h3 className="text-purple_primary font-bold text-lg sm:text-xl mb-4">
            What does the CITB Health, Safety, and Environment Test involve?
          </h3>
          <p className="text-gray-800 text-justify text-sm sm:text-base leading-relaxed">
            The CITB Test (Touchscreen Test) is a requirement for obtaining a CSCS Card. Officially called the CITB Health, Safety, and Environment Test, it can be booked by completing the form above. Your test booking confirmation will be sent to you via email and phone. Construction Card Services (CCS) specializes in supporting the construction industry, providing workers with the guidance needed to obtain their construction cards.
          </p>
        </section>
      </div>
    </div>
  );


};


export default page
