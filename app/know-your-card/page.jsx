
"use client"
import React from 'react'
import KnowCardComp from '../components/KnowCardComp'
import items from '../constants/knowYourCardData'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const page = () => {
  
  const router=useRouter()
  const handleClick=()=>{
    router.push('/apply-card-for/cscs')
  }
  return (
    <div className='max-w-[1440px] mx-auto px-4 py-8 text-justify media-max-545px:text-[14px]'>
        <h1 className='text-[30px] font-bold'>About CSCS Card</h1>
        <div className='h-[1px] w-full bg-slate-300 my-4'></div>
        <p className='mb-4'>CSCS cards serve as proof that applicants working on construction sites have the necessary training and qualifications for their roles. By ensuring the workforce is properly qualified, these cards contribute to enhancing standards and safety on construction sites.</p>
        <p className='mb-4'>Every CSCS card has a specific ranking, distinguishing qualified workers, supervisors, and managers on a construction site.</p>
        <p className='mb-4'>The most commonly used card is the Green Labourer Card, which allows individuals to secure basic jobs. Non-construction workers can also apply for this card. A higher-level CSCS card, reflecting better skills and qualifications, can positively impact wages.</p>
          <p className='mb-4'>The card structure is designed to help new construction workers gradually increase their wages as they gain experience and obtain higher-level cards. Once applicants become confident in their trade, they can progress further in their careers.</p>

          <div>
          <button onClick={handleClick}  className="mt-4 w-full bg-purple_primary  text-white font-medium py-2 rounded-lg hover:bg-[#84286a] transition duration-300">
        Apply Online
      </button>
      <button className="mt-4 w-full bg-purple_primary  text-white font-medium py-2 rounded-lg hover:bg-[#84286a] transition duration-300">
        Apply by phone
      </button>
      <div className='font-bold text-center mt-2'>9am to 7pm (Monday to Saturday).</div>
          </div>

          <div className='mt-6 mb-6'>
          <KnowCardComp/>
          </div>
    <h1 className='text-[25px] font-bold mb-2'>Why CSCS card is required ?</h1>
    <p className='mb-4'>Employers now make it mandatory for every worker to have a CSCS card to work on construction sites. The CSCS card helps you stay updated with evolving industry trends, benefiting both your career growth and overall development.</p>
    <p className='mb-4'>If you have the wrong CSCS card for your job role, you should always apply for the correct one based on your requirements. Having the right card will support your career growth in the construction industry.</p>
    <Link href="/cscs-card-types" className="text-purple_primary font-bold">Click here to know more about CSCS cards</Link>
    </div>
  )
}

export default page
