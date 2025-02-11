import Link from 'next/link'
import React from 'react'
import { FaHardHat } from 'react-icons/fa'

const page = () => {
    return (
        <div className='max-w-[1440px] mx-auto px-4 pt-8'>
            <h1 className='text-[30px] font-bold mb-2 capitalize'>
                About the Health, safety and environment (HS&E) test
            </h1>
            <div className='h-[1px] w-full bg-slate-300 my-4'></div>
            <div className='media-max-545px:text-[14px] text-justify'>

                <p className='font-bold mb-4'>The CITB Health, Safety, and Environment (HS&E) test is an essential way for construction workers to demonstrate their ability to work safely. It also ensures they can trust that their fellow workers are safe on-site and not putting them at risk of injury.</p>
                <p className='font-bold mb-4'>For employers, having workers who have passed the CITB HS&E test assures that their workforce is safe and can continue to be safe at work. There are three types of HS&E tests.</p>
            <span >
            If you already know which type of test to take, you can book and pay for the test
                <Link href="/book-citb-test/default" className="text-purple_primary ml-1 underline">here.</Link>
            </span>

            <h1 className='text-[25px] mb-2 mt-4  font-bold capitalize'>Structure of Test</h1>
            <p className="text-gray-700 mb-2 text-justify">
            The HS&E test is made up of 50 questions covering five core knowledge areas:
            </p>

            <ul className="pl-4 mb-4 font-bold text-gray-700 media-max-545px:text-[14px]">
              <li className="flex items-start mb-2 text-justify">
                <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                <span>
                Legal and management
                  
                </span>
              </li>
              <li className="flex items-start mb-2 text-justify">
                <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                <span>
                Health and welfare
                </span>
              </li>
              <li className="flex items-start mb-2 text-justify">
                <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                <span>
                General safety
                </span>
              </li>
              <li className="flex items-start mb-2 text-justify">
                <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                <span>
                High risk activities
                </span>
              </li>
              <li className="flex items-start mb-2 text-justify">
                <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                <span>
                Environment
                </span>
              </li>
            </ul>
            <p className='mb-4'>Candidates have 45 minutes to answer 50 questions, including new question styles. The test also features behavioral case studies to assess a candidate's understanding of health, safety, and environmental issues, as well as their ability to behave safely on-site.</p>

            <h1 className='text-[25px] mb-2 mt-4  font-bold capitalize'>Types of HS&E Tests</h1>
            <p className="text-gray-700 mb-2 text-justify">
            There are three types of HS&E test:
            </p>
            <ul className="pl-4 mb-4 font-bold text-gray-700 media-max-545px:text-[14px]">
              <li className="flex items-start mb-2 text-justify">
                <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                <span>
                Operatives                  
                </span>
              </li>
              <li className="flex items-start mb-2 text-justify">
                <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                <span>
                Specialists
                </span>
              </li>
              <li className="flex items-start mb-2 text-justify">
                <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                <span>
                Managers and Professionals.
                </span>
              </li>
            </ul>

            
            <h1 className='text-[25px] mb-2  font-bold capitalize'>About the Operatives HS&E test</h1>
            <p className="text-gray-700 text-justify">
            The Operatives test ensures that workers have a basic level of health, safety, and environmental awareness before entering a site. It covers the five core knowledge areas mentioned above (see Structure of the test).
            </p>

            <h1 className='text-[25px] mb-2 mt-4  font-bold capitalize'>About the Specialist HS&E tests</h1>
            <p className="text-gray-700 mb-2 text-justify">
            These tests include questions on the five core knowledge areas, along with relevant questions in the chosen specialist fields. The Specialists test can be taken in the following topics:
            </p>

            <ul className="pl-4 mb-4 font-bold text-gray-700 media-max-545px:text-[14px]">
              <li className="flex items-start mb-2 text-justify">
                <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                <span>
                Supervisory (SUP)
                  
                </span>
              </li>
              <li className="flex items-start mb-2 text-justify">
                <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                <span>
                Demolition (DEM)
                </span>
              </li>
              <li className="flex items-start mb-2 text-justify">
                <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                <span>
                Tunnelling (TUNN)
                </span>
              </li>
              <li className="flex items-start mb-2 text-justify">
                <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                <span>
                Highway works (HIW)
                </span>
              </li>
              <li className="flex items-start mb-2 text-justify">
                <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                <span>
                Plumbing (JIB) (PLUM)
                </span>
              </li>
              <li className="flex items-start mb-2 text-justify">
                <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                <span>
                Lifts and escalators (LAEE)
                </span>
              </li>
              <li className="flex items-start mb-2 text-justify">
                <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                <span>
                Specialist work at height (WAH)
                </span>
              </li>
              <li className="flex items-start mb-2 text-justify">
                <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                <span>
                HVACR - ductwork (DUCT)
                </span>
              </li>
              <li className="flex items-start mb-2 text-justify">
                <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                <span>
                HVACR - pipefitting and welding (PFW)
                </span>
              </li>
              <li className="flex items-start mb-2 text-justify">
                <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                <span>
                HVACR - heating and plumbing services (HAPS)
                </span>
              </li>
              <li className="flex items-start mb-2 text-justify">
                <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                <span>
                HVACR - refrigeration and air conditioning (RAAC)
                </span>
              </li>
              <li className="flex items-start mb-2 text-justify">
                <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                <span>
                HVACE - services and facilities maintenance (SAF)
                </span>
              </li>
            </ul>

            <h1 className='text-[25px] mb-2  font-bold capitalize'>About the Managers and Professionals test</h1>
            <p className="text-gray-700 mb-2 text-justify">
            This test covers the same five core knowledge areas but also includes questions on the following topics:
            </p>
            <ul className="pl-4 mb-4 font-bold text-gray-700 media-max-545px:text-[14px]">
              <li className="flex items-start mb-2 text-justify">
                <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                <span>
                Construction (design and management) regulations                  
                </span>
              </li>
              <li className="flex items-start mb-2 text-justify">
                <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                <span>
                Demolition
                </span>
              </li>
              <li className="flex items-start mb-2 text-justify">
                <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                <span>
                Highway works.
                </span>
              </li>
            </ul>
            <p className="font-bold text-center md:text-left flex flex-col items-center md:items-start">
  Not sure which test to take? 
  <Link href={"#"} className="text-purple_primary  underline">Talk to one of our executives.</Link>
  <span className="text-sm text-gray-600">Lines are open from 9am to 7pm (Monday to Saturday)</span>
</p>
            </div>

        </div>
    )
}

export default page
