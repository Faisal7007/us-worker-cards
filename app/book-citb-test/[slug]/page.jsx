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

  const params = useParams()
  const id = params.slug;
  console.log(id, 'ID')

  return (
    <div className="max-w-[1440px] mx-auto px-6 pt-12 mt-[102px]">
      <ToastContainer />

      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Book a CITB Health, Safety and Environment test{" "}
          {id === "default" ? "" : id ? `in ${id} Test Center` : ""}
        </h1>
        <h3 className="mt-2 text-lg font-semibold text-gray-700">
          Required for CSCS Card
        </h3>
      </div>

      {/* Divider */}
      {/* <div className="h-[2px] w-20 bg-purple_primary rounded mb-6"></div> */}

      {/* Intro Text */}
      <div className="space-y-4 max-w-3xl">
        <h2 className="font-semibold text-gray-800 text-justify text-base sm:text-lg md:text-xl">
          The HS&E test from CITB is a key requirement for obtaining a CSCS Card.
        </h2>
        <Link
          href="/citb-test"
          className="inline-block text-purple_primary font-semibold hover:text-purple-700 transition-colors duration-300 underline"
        >
          More Information here
        </Link>
        <p className="text-gray-700 text-justify text-sm sm:text-base">
          The CITB Health, Safety & Environment Test, also called the CITB Touch Screen Test, is necessary for obtaining or renewing a CSCS Card. The cost of the CITB HS&E Test is <span className="font-semibold">£22.50</span>.
        </p>
        <Link
          href="/"
          className="inline-block text-purple_primary font-semibold hover:text-purple-700 transition-colors duration-300 underline"
        >
          Not Sure which test to take?
        </Link>
      </div>

      {/* Form */}
      <div className="mt-8 mb-12 max-w-3xl mx-auto">
        <CitbForm test_center={id} />
      </div>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-0">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-light tracking-wide mb-8">
          Frequently Asked{" "}
          <span className="text-purple_primary font-allison_regular text-7xl sm:text-8xl leading-none">
            Questions
          </span>
        </h1>
        <QuestionAccordion />
      </section>

      {/* Info Box */}
      <section className="mt-12 px-6 py-6 bg-gray-50 border-l-8 border-r-8 border-purple_primary rounded-lg max-w-4xl mx-auto">
        <h2 className="text-purple_primary font-bold text-xl sm:text-2xl mb-3">
          What does the CITB Health, Safety, and Environment Test involve?
        </h2>
        <p className="text-gray-800 text-justify text-sm sm:text-base leading-relaxed">
          The CITB Test (Touchscreen Test) is a requirement for obtaining a CSCS Card. Officially called the CITB Health, Safety, and Environment Test, it can be booked by completing the form above. Your test booking confirmation will be sent to you via email and phone. Construction Card Services (CCS) specializes in supporting the construction industry, providing workers with the guidance needed to obtain their construction cards.
        </p>
      </section>
    </div>
  )

}

export default page
