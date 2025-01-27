"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import CitbForm from '../components/CitbFrom'


// Demo styles, see 'Styles' section below for some notes on use.
import QuestionAccordion from '../components/QuestionAccordion';
import { useFirebase } from '../context/Firebase';

const page = () => {
  const [applicants, setApplicants] = useState([]);
  const firebase=useFirebase()
  const handleGetData=()=>{
    firebase.fetchApplicantsData(setApplicants);
  }

    // const result= applicants.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt))
    // console.log(result,"result")


  return (
    <div className='max-w-[1440px] mx-auto px-4 pt-8 '>

    <div>
    <h1 className='text-[30px] font-bold '>Book a CITB Health, Safety and Environment test</h1>
    <h3>Required for CSCS Card</h3>
    <p onClick={handleGetData} className='text-purple_primary cursor-pointer'>Get Data</p>
    <div className='h-[1px] w-full bg-slate-300 my-4'></div>
    <h2 className='font-semibold text-justify  media-max-545px:text-[14px]'>The HS&E test from CITB is a key requirement for obtaining a CSCS Card.</h2>
    <Link href='/' className='text-purple_primary font-semibold hover:text-black media-max-545px:text-[14px] '>More Information here</Link>

    <p className='mt-6 text-justify media-max-545px:text-[14px]'>The CITB Health, Safety & Environment Test, also called the CITB Touch Screen Test, is necessary for obtaining or renewing a CSCS Card. The cost of the CITB HS&E Test is £22.50.</p>
    <Link href='/' className='text-purple_primary media-max-545px:text-[14px]'>Not Sure which test to take?</Link>

{/* Form */}
    <div className='mt-6 mb-4'>
    <CitbForm/>
    </div>

    <div>
    <h1 className='text-center text-[40px] capitalize  mb-4'>frequently Asked <span className=' text-[60px] text-purple_primary  font-light font allison_regular'>Questions</span></h1>
      <QuestionAccordion/>
    </div>
      <div className='mt-10 px-4 py-4 bg-gray-100 border-l-4 border-r-4 border-purple_primary'>
        <h1 className='font-bold text-purple_primary'>What does the CITB Health, Safety, and Environment Test involve?</h1>
        <p className='text-justify media-max-545px:text-[14px]'>The CITB Test (Touchscreen Test) is a requirement for obtaining a CSCS Card. Officially called the CITB Health, Safety, and Environment Test, it can be booked by completing the form above. Your test booking confirmation will be sent to you via email and phone. Construction Worker Support (CWS) specializes in supporting the construction industry, providing workers with the guidance needed to obtain their construction cards.</p>
      </div>
    </div>
    </div>

  )
}

export default page
