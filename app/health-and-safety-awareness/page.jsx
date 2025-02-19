// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// import CardForm from '../components/CardForm'
// import { GiCheckMark } from "react-icons/gi";
// import { PiNumberCircleOneFill, PiNumberCircleThreeFill, PiNumberCircleTwoFill } from "react-icons/pi";
// import QuestionAccordionHAndS from '../components/QuestionAccordionHAndS';

// const Page = () => {
//   return (
//     <div className='max-w-[1440px] mx-auto px-4 pt-8'>
//     <h1 className='text-[30px] font-bold mb-2 capitalize'>Health & Safety Awareness Course</h1>
//     <p>To obtain a <Link href="#" className='font-bold text-purple_primary'>CSCS Green Labourer</Link> Card you must complete the Level 1 Health and Safety in a Construction Environment course, commonly referred to as the One Day course.</p>
//   <div className='flex justify-between  items-center mt-10 media-max-1360px:flex-col media-max-1360px:gap-8'>
//   <div className='max-h-[380px] max-w-[660px]'>
//   <Image src='/green-card-img.png'
//     alt='card-image'
//     width={800}
//     height={400}
//     className='rounded-lg h-full w-full'
//   />
//   </div>
//   <div>
//     <CardForm titleOne='Health & Safety Awareness' titleTwo='Easy apply for Level 1 Health & Safety in Construction.' cardType="health-and-safety-awareness"/>
//   </div>
// </div>

// <div className='h-[1px] w-full bg-slate-300 mb-6 mt-12'></div>
// <h1 className='text-[30px] font-bold mb-4 capitalize'>
// Level 1 Award in Health and Safety in a Construction Environment (Online)</h1>

// <div className='mb-4 '>
// <p className="flex items-center font-bold text-green-500  mb-2">
//   <GiCheckMark className="text-green-500  size-4 mr-2" />
//   Accredited officially.
// </p>
//  <p className="flex items-center font-bold text-green-500  mb-2">
//   <GiCheckMark className="text-green-500 size-4 mr-2" />
// Travel is not needed.
// </p>
//    <p className="flex items-center font-bold text-green-500  mb-2">
//   <GiCheckMark className="text-green-500 size-4 mr-2" />Support from dedicated staff.
// </p>
//     <p className="flex items-center font-bold text-green-500  mb-2">
//   <GiCheckMark className="text-green-500 size-4 mr-2" /> 
// Currently, up to a 99% pass rate.
// </p>
//    <p className="flex items-center font-bold text-green-500  mb-2">
//   <GiCheckMark className="text-green-500 size-4 mr-2" />
//   There’s no need to take a day off work.
// </p>
//    <p className="flex items-center font-bold text-green-500  mb-2">
//   <GiCheckMark className="text-green-500 size-4 mr-2" />Training available immediately at times that suit you.
// </p>

// <p className="flex items-center font-bold text-green-500  mb-2">
//   <GiCheckMark className="text-green-500 size-4 mr-2" />
//   The course can be completed using a smartphone or computer.
// </p>
//    <p className="flex items-center font-bold text-green-500  mb-2">
//   <GiCheckMark className="text-green-500 size-4 mr-2" />
//   A short exam taken from a laptop or computer instead of at a test center.
// </p>



// </div>
// <p className='mb-2'>You can use this qualification to obtain a <Link href="#" className='font-bold text-purple_primary'>CSCS Green Labourer Card.</Link></p>
// <p className='mb-2 text-justify'>To obtain a CSCS Green Card, you must complete the Health, Safety, and Awareness qualification. The online course enables you to complete the training from your computer in half the time, all from the comfort of your own home. Once completed, the qualification remains valid for 5 years, making you eligible to apply for a CSCS Green Card.</p>
// <p className='mb-2'>To book your Health & Safety Awareness Course, please visit the <Link href="#" className='font-bold text-purple_primary'>Course Page.</Link></p>
// <Link href="#" className='font-bold text-purple_primary'>Download details about the qualification.</Link>
// <h1 className='text-[30px] font-bold mt-6 mb-3 capitalize'>How does it works?</h1>

// <ol className='list-decimal pl-5 mb-4'>
//   <li className="marker:text-purple_primary mb-2">Safely make payment for your <Link href="#" className='text-purple_primary font-bold'>Health, Safety & Awareness (HS&A) Course</Link> online and receive your login details via email within 24 hours.</li>
//   <li className="marker:text-purple_primary mb-2">Finish the straightforward course on your computer in under 6 hours and get instant confirmation.</li>
//   <li className="marker:text-purple_primary mb-2">The confirmation you receive can be used to apply for your CSCS Green Card (valid for 5 years).</li>
// </ol>

// <p className='text-justify '><span className='font-bold'>Please note:</span> To complete your CSCS Green Card application, you will need a copy of both the Health, Safety & Awareness certificate and the Health, Safety & Environment test score report. Once this process is completed and you obtain your CSCS Green Card, you will be eligible to work on construction sites in the UK. The CSCS Green Card remains valid for 5 years.</p>
// <button className="bg-purple_primary text-white font-semibold py-3 px-6 rounded-md my-5 border-2 border-transparent hover:border-purple_primary hover:text-purple_primary hover:bg-white transition-all duration-300">
//   Book Online Course
// </button>
// <p className='text-justify'>This course is ideal for individuals who are either considering a career in, or are already working within, the construction and civil engineering industry. Its objective is to educate you about potential hazards that may arise while working on-site and to offer practical advice on ensuring the safety of yourself and others in the workplace. Upon completion, you will gain a solid understanding of the following:</p>
// <ul className='list-disc pl-4'>
//   <li className='marker:text-purple_primary mb-2'>Laws related to Health & Safety.</li>
//   <li className='marker:text-purple_primary mb-2'>The importance of preventing accidents.</li>
//   <li className='marker:text-purple_primary mb-2'>Both risk assessments and method statements.</li>
//   <li className='marker:text-purple_primary mb-2'>How to prevent accidents by reporting unsafe acts.</li>
//   <li className='marker:text-purple_primary mb-2'>Safely performing your job role and asking for advice when necessary.</li>
//   <li className='marker:text-purple_primary mb-2'>How your role contributes to the control and management of the construction site.</li>
// </ul>

// <div>
//     <h1 className='text-center text-[40px] capitalize  mb-5'>frequently Asked <span className=' text-[70px] text-purple_primary  font-light font allison_regular'>Questions</span></h1>
// <QuestionAccordionHAndS/>
//     </div>


// <div className='mb-6 mt-12'>
//     <div className='h-[1px] w-full bg-slate-300 mb-6 mt-12'></div>
// <h1 className='text-[30px] font-bold mb-4 capitalize'>
// Level 1 Award in Health and Safety in a Construction Environment (Offline)</h1>
// <p className='mb-2'><span className='font-bold'>Duration: </span>1 Day.</p>
// <p className='font-bold mb-2'>Includes classroom training.</p>
// <p className='mb-2'>The <span className='font-bold'>final assessment</span> consists of <span className='font-bold'>40 multiple-choice questions,</span> and you need to score at least 80% to pass within <span className='font-bold'>60 minutes.</span></p>
// <p className='mt-4 text-justify'>To secure a construction job in the UK, most sites require a CSCS Card. The first step in obtaining your CSCS Green Card is completing the RQF Level 1 Award in Health and Safety in a Construction Environment course, which is valid for life.</p>
// <p className='mt-6'>This course is available in the following locations:</p>
// <ul className='list-disc pl-4'>
//   <li className='font-bold marker:text-purple_primary mb-2'>Leeds.</li>
//   <li className='font-bold marker:text-purple_primary mb-2'>London.</li>
//   <li className='font-bold marker:text-purple_primary mb-2'>Liverpool.</li>
//   <li className='font-bold marker:text-purple_primary mb-2'>Birmingham.</li>
//   <li className='font-bold marker:text-purple_primary mb-2'>Manchester.</li>
//   <li className='font-bold marker:text-purple_primary mb-2'>Nottingham.</li>
// </ul>
// {/* #84286a */}
// <button className="bg-purple_primary text-white font-semibold py-3 px-6 rounded-md my-5 border-2 border-transparent hover:border-purple_primary hover:text-purple_primary hover:bg-white transition-all duration-300">
//   Book Classroom Course
// </button>

// <h1 className='text-[25px] font-bold mb-2'>How to apply</h1>
//      <p>Call <Link href='/' className='text-purple_primary font-semibold hover:text-black '>0203 769 9047</Link> to book by phone. Our lines are open Monday to Saturday, from 9 AM to 7 PM.</p>
// </div>

// </div>
//   )
// }
// export default Page


"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import CardForm from '../components/CardForm';
import { GiCheckMark } from 'react-icons/gi';
import QuestionAccordionHAndS from '../components/QuestionAccordionHAndS';
import items from '../constants/healthSafetyAwarenessData';

const Page = () => {
  return (
    <div className='max-w-[1440px] mx-auto px-4 pt-8 mt-[102px]'>
      <h1 className='text-[30px] font-bold mb-2 capitalize'>Health & Safety Awareness Course</h1>
      <p className='text-justify media-max-545px:text-[14px]'>
        To obtain a <Link href="cscs-green-card" className='font-bold text-purple_primary'>CSCS Green Labourer</Link> Card you must complete the Level 1 Health and Safety in a Construction Environment course, commonly referred to as the One Day course.
      </p>
      <div className='flex justify-between items-center mt-10 media-max-1360px:flex-col media-max-1360px:gap-8'>
        <div className='h-[380px] max-w-[660px] media-max-545px:h-auto'>
          <Image
            src='/green-card-img.png'
            alt='card-image'
            width={800}
            height={400}
            className='rounded-lg h-full w-full'
          />
        </div>
        <div>
          <CardForm
            titleOne='Health & Safety Awareness'
            titleTwo='Easy apply for Level 1 Health & Safety in Construction.'
            cardType="health-and-safety-awareness"
          />
        </div>
      </div>

      <div className='h-[1px] w-full bg-slate-300 mb-6 mt-12'></div>
      <h1 className='text-[30px] font-bold mb-4 capitalize'>
        Level 1 Award in Health and Safety in a Construction Environment (Online)
      </h1>

      <div className='media-max-545px:text-[14px]'>

        <div className='mb-4'>
          {items?.benefits?.map((benefit, index) => (
            <p key={index} className="flex items-center font-bold text-green-500 mb-2">
              <GiCheckMark className="text-green-500 size-4 mr-2" />
              {benefit}
            </p>
          ))}
        </div>

        <p className='mb-2 text-justify media-max-545px:text-[14px]'>You can use this qualification to obtain a <Link href="/cscs-green-card" className='font-bold text-purple_primary'>CSCS Green Labourer Card.</Link></p>
        <p className='mb-2 text-justify media-max-545px:text-[14px]'>
          To obtain a CSCS Green Card, you must complete the Health, Safety, and Awareness qualification. The online course enables you to complete the training from your computer in half the time, all from the comfort of your own home. Once completed, the qualification remains valid for 5 years, making you eligible to apply for a CSCS Green Card.
        </p>

        <p className='mb-2 text-justify media-max-545px:text-[14px]'>
          To book your Health & Safety Awareness Course, please visit the <Link href="/course-book" className='font-bold text-purple_primary'>Course Page.</Link>
        </p>
        <Link href="#" className='font-bold text-purple_primary'>Download details about the qualification.</Link>

        <h1 className='text-[30px] font-bold mt-6 mb-3 capitalize'>How does it works?</h1>

        <ol className='list-decimal pl-5 mb-4 text-justify media-max-545px:text-[14px]'>
          <li className="marker:text-purple_primary mb-2">
            Safely make payment for your <Link href="/course-book" className='text-purple_primary font-bold'>Health, Safety & Awareness (HS&A) Course</Link> online and receive your login details via email within 24 hours.
          </li>
          <li className="marker:text-purple_primary mb-2">
            Finish the straightforward course on your computer in under 6 hours and get instant confirmation.
          </li>
          <li className="marker:text-purple_primary mb-2">
            The confirmation you receive can be used to apply for your CSCS Green Card (valid for 5 years).
          </li>
        </ol>

        <p className='text-justify media-max-545px:text-[14px]'>
          <span className='font-bold'>Please note:</span> To complete your CSCS Green Card application, you will need a copy of both the Health, Safety & Awareness certificate and the Health, Safety & Environment test score report. Once this process is completed and you obtain your CSCS Green Card, you will be eligible to work on construction sites in the UK. The CSCS Green Card remains valid for 5 years.
        </p>
        <Link href="/course-book">
          <button className="bg-purple_primary text-white font-semibold py-3 px-6 rounded-md my-5 border-2 border-transparent hover:border-purple_primary hover:text-purple_primary hover:bg-white transition-all duration-300">
            Book Online Course
          </button>
        </Link>

        <p className='text-justify media-max-545px:text-[14px]'>
          This course is ideal for individuals who are either considering a career in, or are already working within, the construction and civil engineering industry. Its objective is to educate you about potential hazards that may arise while working on-site and to offer practical advice on ensuring the safety of yourself and others in the workplace. Upon completion, you will gain a solid understanding of the following:
        </p>

        <ul className='list-disc pl-4 text-justify'>
          {items?.topics?.map((topic, index) => (
            <li key={index} className='marker:text-purple_primary mb-2'>
              {topic}
            </li>
          ))}
        </ul>

        <div className='mt-8'>
          <h1 className='text-center text-[40px] capitalize mb-4 media-max-545px:leading-[54px]'>frequently Asked <span className=' text-[60px] text-purple_primary  font-light font allison_regular'>Questions</span></h1>
          <QuestionAccordionHAndS />
        </div>

        <div className='mb-6 mt-8'>

          <h1 className='text-[30px] font-bold mb-4 capitalize'>
            Level 1 Award in Health and Safety in a Construction Environment (Offline)
          </h1>
          <p className='mb-2'><span className='font-bold'>Duration: </span>1 Day.</p>
          <p className='font-bold mb-2'>Includes classroom training.</p>
          <p className='mb-2 text-justify'>
            The <span className='font-bold'>final assessment</span> consists of <span className='font-bold'>40 multiple-choice questions</span>, and you need to score at least 80% to pass within <span className='font-bold'>60 minutes.</span>
          </p>
          <p className='mt-4 text-justify media-max-545px:text-[14px]'>
            To secure a construction job in the UK, most sites require a CSCS Card. The first step in obtaining your CSCS Green Card is completing the RQF Level 1 Award in Health and Safety in a Construction Environment course, which is valid for life.
          </p>
          <p className='mt-6'>This course is available in the following locations:</p>
          <ul className='list-disc pl-4 media-max-545px:text-[14px]'>
            {items?.locations?.map((location, index) => (
              <li key={index} className='font-bold marker:text-purple_primary mb-2'>
                {location}.
              </li>
            ))}
          </ul>
          <Link href="/course-book">

            <button className="bg-purple_primary text-white font-semibold py-3 px-6 rounded-md my-5 border-2 border-transparent hover:border-purple_primary hover:text-purple_primary hover:bg-white transition-all duration-300">
              Book Classroom Course
            </button>
          </Link>
          <h1 className='text-[25px] font-bold mb-2 text-justify'>How to apply</h1>
          <p>Call <Link href='/' className='text-purple_primary font-semibold media-max-545px:text-[14px] hover:text-black '>0203 769 9047</Link> to book by phone. Our lines are open Monday to Saturday, from 9 AM to 7 PM.</p>
        </div>

      </div>

    </div>
  )
}
export default Page
