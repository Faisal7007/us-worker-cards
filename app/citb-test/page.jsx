"use client"
import Link from 'next/link'
import React from 'react'
import CitbForm from '../components/CitbFrom'


// Demo styles, see 'Styles' section below for some notes on use.
import QuestionAccordion from '../components/QuestionAccordion';

const page = () => {

  const items=[{
    heading:'Heading',
    content:'Content'

  }]
  return (
    <div className='max-w-[1440px] mx-auto'>

    <div className='px-4 py-8'>
    <h1 className='text-[24px] font-bold'>Book a CITB Health, Safety and Environment test</h1>
    <h3>Required for CSCS Card</h3>
    <div className='h-[1px] w-full bg-slate-300 my-4'></div>
    <h2 className='font-semibold '>The HS&E test from CITB is a key requirement for obtaining a CSCS Card.</h2>
    <Link href='/' className='text-purple_primary font-semibold hover:text-black '>More Information here</Link>

    <p className='mt-6'>The CITB Health, Safety & Environment Test, also called the CITB Touch Screen Test, is necessary for obtaining or renewing a CSCS Card. The cost of the CITB HS&E Test is £22.50.</p>
    <Link href='/' className='text-purple_primary '>Not Sure which test to take?</Link>

{/* Form */}
    <div className='mt-10'>
    <CitbForm/>
    </div>

    <div>
    <h1 className='text-center text-[40px] capitalize  mb-5'>frequently Asked <span className=' text-[70px] text-purple_primary  font-light font allison_regular'>Questions</span></h1>
<QuestionAccordion/>
    </div>
      
    </div>
    </div>

  )
}

export default page
