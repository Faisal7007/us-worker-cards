"use client"
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
// import CscsForm from '../components/CscsForm'
import Image from 'next/image'
import { FaHardHat } from 'react-icons/fa'
import { GoDotFill } from 'react-icons/go'
import ApplyEssCscsForm from '@/app/components/ApplyEssCscsForm'
import { useParams } from 'next/navigation'
import GenericCardDetailsView from '@/app/components/GenericCardDetailsView'
import { useSearchParams } from 'next/navigation'
import { UserContext } from '@/app/context-api/UserContext'

const page = () => {
  const [openDetails, setOpenDetails] = useState(false)
  const [getCardType, setGetCardType] = useState("")
  const [imagePath, setImagePath] = useState("/green-card-img.png");

  const params = useParams();
  const form_type = params.slug;
  const { item } = useContext(UserContext);

  console.log(item, "item in slug page")

  // const searchParams = useSearchParams()
  // const id = searchParams.get('id')
  // const image_path = searchParams.get('image_path')
  // console.log(item.image_path,"image_path in slug page")
  return (
    <div className='max-w-[1440px] mx-auto px-4 pt-8 mt-[102px]'>
      {

        openDetails ? <GenericCardDetailsView getCardType={getCardType} /> :
          <div>

            <h1 className='text-[30px] font-bold mb-2 capitalize'>Apply For <span className='uppercase'>{form_type}</span> Card</h1>
            {/* <Link href='#' className='inline-flex items-center text-purple_primary '><IoIosArrowForward/><span>Go to full card types list</span></Link> */}
            <div className='h-[1px] w-full bg-slate-300 my-4'></div>
            <p>To apply for a <span className='uppercase'>{form_type}</span> Card, the applicant must have completed the CITB HS&E Test within the past two years. If you have not taken the test, <Link href="/book-citb-test/default" className='text-purple_primary font-bold'>you can schedule an appointment.</Link></p>
            <div className='mt-6 mb-4'>
              <ApplyEssCscsForm form_type={form_type} setOpenDetails={setOpenDetails} setGetCardType={setGetCardType} setImagePath={setImagePath} />
            </div>
            <div className='h-[1px] w-full bg-slate-300 my-4'></div>
            <div className="text-center py-8">
              <h2 className="text-[25px] font-bold inline-block  px-4 py-1 bg-purple_primary rounded-full text-white">Apply for <span className='uppercase'>{form_type}</span> Card</h2>
            </div>

            <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-6  rounded-lg">
              {/* Left Side - Image */}
              <div className="media-min-601px:block">
                <Image
                  src={imagePath}
                  alt="card-image"
                  width={600}
                  height={310}
                  className="rounded-lg w-[610px] media-max-1298px:w-[560px]"
                />
              </div>


              {/* Right Side - Content */}
              <div className="w-[660px] text-justify media-max-1298px:w-[560px] media-max-600px:w-[100vw] media-max-410px:w-[100vw] media-max-600px:px-4 media-max-410px:px-4 media-max-545px:text-[14px]">
                <ul className="mb-4 text-gray-700">
                  <li className="flex items-start mb-4">
                    <FaHardHat className="text-purple_primary mt-1 mr-2 flex-shrink-0" />
                    <span>
                      Fill the Application here and choose the <span className="uppercase px-1 align-baseline">{form_type}</span> Card based on your qualification.
                    </span>
                  </li>
                  <li className="flex items-start mb-2">
                    <FaHardHat className="text-purple_primary mt-1 mr-2 flex-shrink-0" />
                    <span>Select the type of card booking you want to proceed with.</span>
                  </li>
                  <li className="flex items-center mb-2 ml-6">
                    <GoDotFill className="text-purple_primary flex-shrink-0" />
                    <span className="ml-2">
                      If you are applying for the first time, select <span className="font-semibold ml-1">New Card</span>.
                    </span>
                  </li>
                  <li className="flex items-center mb-4 ml-6">
                    <GoDotFill className="text-purple_primary flex-shrink-0" />
                    <span className="ml-2">
                      If you want a replacement for your existing <span className="uppercase mx-1 align-baseline">{form_type}</span> card, select <span className="font-semibold ml-1">Lost Card</span>.
                    </span>
                  </li>
                  <li className="flex items-start mb-4">
                    <FaHardHat className="text-purple_primary mt-1 mr-2 flex-shrink-0" />
                    <span>
                      To continue, click <span className="font-semibold ml-1">Submit Application</span> to add your CITB test ID, expired <span className="uppercase mx-1 align-baseline">{form_type}</span> Card number (for Renew Card), and card delivery address.
                    </span>
                  </li>
                  <li className="flex items-start mb-4">
                    <FaHardHat className="text-purple_primary mt-1 mr-2 flex-shrink-0" />
                    <span>Make the payment and confirm your details.</span>
                  </li>
                  <li className="flex items-start mb-4">
                    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                    <span>
                      Once approved, you will receive your <span className="uppercase align-baseline">{form_type}</span> Card in approximately 7 working days. That’s it!
                    </span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
      }


    </div>
  )
}

export default page
