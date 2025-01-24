"use client"
import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
// import CscsForm from '../components/CscsForm'
import Image from 'next/image'
import { FaHardHat } from 'react-icons/fa'
import { GoDotFill } from 'react-icons/go'
import ApplyEssCscsForm from '@/app/components/ApplyEssCscsForm'
import { useParams } from 'next/navigation'

const page = () => {
      const params = useParams();
      const form_type = params.slug;
      console.log(form_type,"form_type in slug page")
  return (
    <div className='max-w-[1440px] mx-auto px-4 pt-8'>
      <h1 className='text-[30px] font-bold mb-2 capitalize'>Apply For <span className='uppercase'>{form_type}</span> Card</h1>
    {/* <Link href='#' className='inline-flex items-center text-purple_primary '><IoIosArrowForward/><span>Go to full card types list</span></Link> */}
    <div className='h-[1px] w-full bg-slate-300 my-4'></div>
    <p>To apply for a <span className='uppercase'>{form_type}</span> Card, the applicant must have completed the CITB HS&E Test within the past two years. If you have not taken the test, <Link href="/citb-test" className='text-purple_primary font-bold'>you can schedule an appointment.</Link></p>
    <div className='mt-6 mb-4'>
    <ApplyEssCscsForm form_type={form_type}/>
    </div>
    <div className='h-[1px] w-full bg-slate-300 my-4'></div>
    <div className="text-center py-8">
    <h2 className="text-[25px] font-bold inline-block  px-4 py-1 bg-purple_primary rounded-full text-white">Apply for <span className='uppercase'>{form_type}</span> Card</h2>
    </div>

      <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start rounded-lg ">
          {/* Left Side - Image */}
            <Image
            src={`${form_type==='cscs'?'/green-card-img.png':'/ess-green-labourer-img.png'}`}
            alt='card-image'
            width={800}
            height={400}
            className='rounded-lg h-[380px] w-[660px]'
            />
          
          {/* Right Side - Content */}
          <div className="w-[660px]">
            <ul className="mb-4 text-gray-700">
          <li className="flex items-start mb-4">
            <FaHardHat className="text-purple_primary mt-1 mr-2" />
            Fill the Application here and choose the <h1 className='uppercase px-1'>{form_type}</h1> Card based on your qualification.
          </li>
          <li className="flex items-center mb-2">
            <FaHardHat className="text-purple_primary mr-2" />
            
          Select the type of card booking you want to proceed with.
          </li>
          <li className="flex items-center mb-2 ml-6">
          <GoDotFill className="text-purple_primary" />
    
          If you are applying for the first time, select <span className="font-semibold ml-1">New Card</span>.
          </li>
          <li className="flex items-center mb-4 ml-6">
          <GoDotFill className="text-purple_primary" />
    
          If you want a replacement for your existing <span className='uppercase mx-1'>{form_type}</span> card, select <span className="font-semibold ml-1">Lost Card</span>.
          </li> 
          <li className="flex items-start mb-4">
            <FaHardHat className="text-purple_primary mr-2 size-6 " />
            <span>To continue, click <span className="font-semibold ml-1">Submit Application</span> to add your CITB test ID, expired <span className='uppercase mx-1'>{form_type}</span> Card number (for Renew Card), and card delivery address.</span>
          </li>  
          <li className="flex items-center mb-4">
            <FaHardHat className="text-purple_primary mr-2" />
            Make the payment and confirm your details.
          </li> 
          <li className="flex items-start mb-4">
      <FaHardHat className="text-purple_primary mr-2 size-4 mt-1" />
      Once approved, you will receive your &nbsp;<span className='uppercase'> {form_type} </span> &nbsp;Card in approximately 7 working days. That’s it!
    </li>
        </ul>   
          </div>
        </div>
    </div>
  )
}

export default page
