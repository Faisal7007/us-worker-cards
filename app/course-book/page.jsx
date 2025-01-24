import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import CourseBookForm from '../components/CourseBookForm'

const page = () => {
  return (
    <div className='max-w-[1440px] mx-auto px-4 pt-8'>
      <h1 className='text-[30px] font-bold mb-2 capitalize'>Level 1 Health and Safety in a Construction Environment</h1>
      <h2 className='text-[20px] font-bold mb-2 capitalize'>(leads to CSCS Green Labourer Card)</h2>
    <div className='h-[1px] w-full bg-slate-300 my-4'></div>
    <p>Obtain your health and safety course certificate, which can be used to apply for your <span className='font-bold'>CSCS Card.</span> <br /> Know more about <Link href="#" className='text-purple_primary font-bold'>health and safety related courses in construction.</Link></p>
    <div className='mt-6 mb-4'>
    <CourseBookForm/>
    </div>
    <div className='h-[1px] w-full bg-slate-300 my-4'></div>
  
    </div>
  )
}

export default page
