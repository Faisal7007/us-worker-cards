"use client"
import Link from 'next/link'
import React, { useContext, useState } from 'react'
// import CscsForm from '../components/CscsForm'
import Image from 'next/image'
import { FaHardHat } from 'react-icons/fa'
import { GoDotFill } from 'react-icons/go'
import ApplyEssCscsForm from '@/app/components/ApplyEssCscsForm'
import { useParams } from 'next/navigation'
import GenericCardDetailsView from '@/app/components/GenericCardDetailsView'
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
    <div className="max-w-[1440px] mx-auto px-4 pt-8 mt-[102px]">
      {openDetails ? (
        <GenericCardDetailsView getCardType={getCardType} />
      ) : (
        <div>
          <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="text-[32px] sm:text-[26px] font-bold mb-3 capitalize text-gray-800">
              Apply for <span className="uppercase">{form_type}</span> Card
            </h1>

            {/* <div className="h-[2px] w-20 bg-purple_primary mb-6"></div> */}

            <p className="text-gray-700 text-[16px] sm:text-[15px] leading-relaxed text-justify">
              To apply for a <span className="uppercase font-medium">{form_type}</span> Card, the applicant must have completed the
              CITB HS&E Test within the past two years. If you have not taken the test,{" "}
              <Link
                href="/book-citb-test/default"
                className="text-purple_primary font-semibold underline hover:text-purple-700 transition-colors duration-200"
              >
                you can schedule an appointment.
              </Link>
            </p>
          </div>

          <div className="mt-6 mb-8">
            <ApplyEssCscsForm
              form_type={form_type}
              setOpenDetails={setOpenDetails}
              setGetCardType={setGetCardType}
              setImagePath={setImagePath}
            />
          </div>

          <div className="text-center py-2 sm:py-5">
            <h2 className="text-[22px] sm:text-[20px] font-bold px-5 py-0">
              Steps to get <span className="uppercase">{form_type}</span> Card
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-8 rounded-2xl px-6 py-1 sm:py-8 mx-auto max-w-7xl bg-white shadow-lg">
            {/* Left Side - Image */}
            <div className="w-full lg:max-w-[520px]">
              <Image
                src={imagePath}
                alt="card-image"
                width={520}
                height={300}
                className="rounded-xl w-full h-auto shadow-md object-cover"
              />
            </div>

            {/* Right Side - Content */}
            <div className="w-full text-justify text-[16px] sm:text-[15px] text-gray-700">
              <ul className="space-y-3 sm:space-y-5">
                <li className="flex items-start gap-3">
                  <FaHardHat className="text-purple_primary mt-1 flex-shrink-0" />
                  <span>
                    Fill the application and choose the <span className="uppercase font-medium">{form_type}</span> Card based on your qualification.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <FaHardHat className="text-purple_primary mt-1 flex-shrink-0" />
                  <span>Select the type of card booking you want to proceed with.</span>
                </li>

                <li className="flex items-start gap-3 pl-6">
                  <GoDotFill className="text-purple_primary mt-1 flex-shrink-0" />
                  <span>
                    If you are applying for the first time, select <strong>New Card</strong>.
                  </span>
                </li>

                <li className="flex items-start gap-3 pl-6">
                  <GoDotFill className="text-purple_primary mt-1 flex-shrink-0" />
                  <span>
                    If replacing your existing <span className="uppercase font-medium">{form_type}</span> card, select <strong>Lost Card</strong>.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <FaHardHat className="text-purple_primary mt-1 flex-shrink-0" />
                  <span>
                    To continue, click <strong>Submit Application</strong> to add your CITB Test ID, expired <span className="uppercase font-medium">{form_type}</span> Card number (for Renew Card), and address.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <FaHardHat className="text-purple_primary mt-1 flex-shrink-0" />
                  <span>Make the payment and confirm your details.</span>
                </li>

                <li className="flex items-start gap-3">
                  <FaHardHat className="text-purple_primary mt-1 flex-shrink-0" />
                  <span>
                    Once approved, you'll receive your <span className="uppercase font-medium">{form_type}</span> Card in approximately 7 working days.
                  </span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      )}
    </div>

  )
}

export default page
