import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import Image from 'next/image';
import { FaHardHat } from "react-icons/fa";
import EssCardForm from './EssCardForm';


const EssPageComponent = ({ id, title_page, image_path, title_form_one, title_form_two, card_type, validity }) => {
  // const firebase=useFirebase()

  console.log(id, 'Id in ESS page Component')

  return (
    <div className='max-w-[1440px] mx-auto px-4 pt-8 mt-[102px]'>
      <h1 className='text-[30px] font-bold mb-2 capitalize'>{title_page}</h1>
      <Link href='/ess-card-types' className='inline-flex items-center text-purple_primary media-max-470px:text-[14px] '><IoIosArrowForward /><span>Go to full card types list</span></Link>
      <div className='h-[1px] w-full bg-slate-300 my-4'></div>
      <h1 className='text-[25px] font-bold mb-2'>How to apply</h1>
      {/* <h1 className='text-[20px] font-bold'>Apply by phone</h1> */}

      <p className='text-justify media-max-545px:text-[14px]'>
        Call <Link href='tel:+443030030136' className='text-purple_primary font-semibold hover:text-black'>
          +44 3030030136
        </Link> to book by phone. Our lines are open Monday to Saturday, from 9 AM to 7 PM.
      </p>


      <h1 className='text-[20px] font-bold mb-2 mt-8'>Apply online</h1>
      <p className='text-justify media-max-470px:text-[14px]'>Apply for a ESS Card easily using our <Link href={`/ess-card-types`} className='text-purple_primary font-bold'> online application service.</Link>
      </p>

      {/* Form */}

      <div className='flex justify-between  items-center  mt-10 media-max-1360px:flex-col media-max-1360px:gap-8'>
        <div className='hidden sm:block h-[380px] max-w-[660px]'>
          <Image
            src={`${image_path}`}
            alt='card-image'
            width={800}
            height={400}
            className='rounded-lg h-full w-full'
          />
        </div>
        <div>
          <EssCardForm titleOne={`${title_form_one}`} titleTwo={`${title_form_two}`} cardType={card_type} card="ess" />
        </div>
      </div>
      {/* <div className='flex justify-center mt-12'>
    <h1 className='capitalize text-[25px] text-white inline-block px-4 py-1 bg-purple_primary rounded-full  font-semibold text-center media-max-600px:text-[22px] '>Eligibility Requirements</h1>
  </div> */}

      <h1 className='capitalize text-[25px] text-black mt-8 font-bold'>Validity - {validity} Years</h1>

      <div className='media-max-545px:text-[14px] text-justify'>


        {/* Green */}
        <div className='my-5'>


          {id === 'green' && (
            <>
              {/* Green */}
              <p className='my-5 text-justify'>
                This card is issued exclusively to individuals performing basic site work. It indicates that the cardholder has fulfilled the SKILLcard health and safety requirements and is qualified to carry out basic site tasks.
              </p>
            </>
          )}

          {/* Blue Skilled */}

          {
            id === 'blue-skilled' && (
              <>

                <p className='mb-2'>This card is issued if you fall into one of the following categories :</p>
                <p className="flex items-start mb-2">
                  <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                  A Modern Apprentice holding a relevant NVQ/SVQ Level 2 or Apprenticeship Standard, or</p>
                <p className="flex items-start mb-2">
                  <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                  A skilled worker possessing a relevant Apprenticeship Standard, NVQ, or SVQ Level 2, or</p>
                <p className="flex items-start mb-2">
                  <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                  A skilled worker with a City and Guilds craft certificate relevant to your trade and an informal apprenticeship.</p>

              </>
            )
          }



          {/* Blue Experienced */}

          {
            id === 'blue-experienced' && (
              <>

                <p className='mb-5 text-justify'>This card is issued to individuals without formal industry qualifications who are working towards a relevant NVQ/SVQ Level 2 or higher.</p>

                <p className='mb-5 text-justify'>Upon completion of your qualification, you will be eligible to upgrade to a blue/gold ESScard.</p>

                <p className='mb-2 text-justify'>To qualify for applying for an experienced worker ESScard, you must:</p>

                <ol className="list-decimal pl-4 ">
                  <li className="mb-4">
                    <p className="mb-2 text-justify">Possess a minimum of five years’ experience in one of the following qualifications:</p>
                    <ul>
                      <li className="flex items-start mb-2">
                        <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                        Service & Maintenance Technician/Engineer specializing in Building Services Engineering
                      </li>
                      <li className="flex items-start mb-2">
                        <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                        H&V Fitter/Welder/Installer/Pipefitter
                      </li>
                      <li className="flex items-start mb-2">
                        <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                        Plumber Domestic or Industrial & Commercial
                      </li>
                      <li className="flex items-start mb-2">
                        <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                        Refrigeration/Air Conditioning Technician/Engineer
                      </li>
                    </ul>
                  </li>
                  <li className="mb-4">Have completed an approved Health and Safety test within the last two years</li>
                  <li>Operate in a role equivalent to level 2 or 3.</li>
                </ol>

              </>
            )
          }



          {/* Red Trainee */}

          {
            id === 'red-trainee' && (
              <>

                <p className='mb-2 text-justify'>This card is for new entrant trainees who:</p>
                <ul>
                  <li className="flex items-start mb-2">
                    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0 " />
                    Are registered for a relevant Apprenticeship Standard, NVQ, or SVQ; or pursuing an NC, HNC, or Degree but have not yet achieved the qualification, and have no prior experience.
                  </li>
                  <li className="flex items-start mb-2">
                    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0 " />
                    Adult Trainees.
                  </li>
                  <li className="flex items-start mb-2">
                    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0 " />
                    Student Engineers training to be Project Engineers/Project Managers who have not yet achieved the relevant NC or higher level qualification.
                  </li>
                  <li className="flex items-start mb-2">
                    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0 " />
                    Technician Trainees/Assistants in Building Services Engineering (formerly referred to as Commissioning).
                  </li>
                  <li className="flex items-start mb-2">
                    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0 " />
                    Undergraduates pursuing an HNC or Degree, or those enrolled as Higher or Degree Apprentices.
                  </li>
                </ul>

                <p className='mb-5 text-justify'>Trainees are expected to upgrade to a Blue/Gold SKILLcard when the Apprenticeship Standard/NVQ/SVQ Level 2/3 is achieved.</p>
                <p className='mb-5 text-justify'>On completing their training, Student Engineers are expected to upgrade to a Gold (Supervisory) SKILLcard to reflect their status as a Junior or Assistant Project Engineer.</p>

                <p className='mb-5 text-justify'>HNC and Degree Apprentices or students are expected to upgrade to the White Academically Qualified Persons (AQP) SKILLcard upon achieving their qualification.</p>

              </>
            )
          }


          {/* Red Industry Experienced */}

          {
            id === 'red-industry' && (
              <>

                <p className='mb-6 text-justify'>This card is for students who are enrolled onto a qualification or training programme requiring a minimum of 30 days’ work placement including T Levels, Traineeships, Foundation & Progression Qualifications (Wales) and Sandwich Degrees.</p>
                <p className='mb-6 text-justify'>They must be aged 16 or above.</p>
                <p className='mb-6 text-justify'>The card is valid for three years and in non-renewable.</p>

              </>
            )
          }


          {/* Gold Advanced */}

          {
            id === 'gold-advanced' && (
              <>

                <p className='mb-2 text-justify'>A Gold Advanced Craft is available if you are a:</p>
                <ul>
                  <li className="flex items-start mb-2">
                    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />A skilled worker holding an Apprenticeship Standard, NVQ, or SVQ Level 3.
                  </li>
                  <li className="flex items-start mb-2">
                    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                    Skilled worker with an indentured apprenticeship
                  </li>
                  <li className="flex items-start mb-2">
                    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                    A skilled worker who has completed an informal apprenticeship and holds a City and Guilds or SCOTVEC (SQA) advanced craft certificate relevant to their trade.</li>
                </ul>
              </>
            )
          }



          {/* Gold Supervisor */}

          {
            id === 'gold-supervisor' && (
              <>
                <p className='mb-2 text-justify'>This card is available for the following supervisory occupations: </p>
                <ul>
                  <li className="flex items-start mb-2">
                    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />Team Leader </li>
                  <li className="flex items-start mb-2">
                    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                    Building Services Engineer Supervisor

                  </li>
                  <li className="flex items-start mb-2">
                    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />Building Services Technician</li>
                </ul>

                <p className='my-5 text-justify'>Gold cards for supervisors are issued to applicants who can provide evidence of having completed a relevant Level 3 qualification or higher in a building service engineering occupation.</p>

                <p className='mb-2 text-justify'>Plus one of the following health and safety requirements:</p>
                <ul>
                  <li className="flex items-start mb-2">
                    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />CITB Supervisory HSE test</li>
                  <li className="flex items-start mb-2">
                    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                    CITB Managers and Professionals test</li>
                  <li className="flex items-start mb-2">
                    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />CITB SSSTS or SMSTS course</li>
                  <li className="flex items-center mb-2">
                    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />IOSH ‘Managing Safely’ course</li>
                  <li className="flex items-start mb-2">
                    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />NEBOSH Construction Certificate </li>
                </ul>
                <p className='mb-2 mt-5'>For applicants who have completed a 'generic' Level 3 supervisory qualification, such as:</p>
                <ul>
                  <li className="flex items-start mb-2">
                    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />L3 N/SVQ Diploma in Occupational Work Supervision </li>
                  <li className="flex items-start mb-2">
                    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                    L3 N/SVQ in Construction Site Supervision </li>
                </ul>
                <p className='my-5'>This must be accompanied by a recognized Level 3 qualification in a relevant building service engineering occupation, along with one of the health and safety requirements mentioned above.</p>
                <p>This card is valid for five years and is renewable upon application, subject to SKILLcard renewal rules</p>
              </>
            )
          }



          {/* Black Manager */}
          {
            id === 'manager' && (
              <>
                <p className='mb-2 text-justify'>The following managerial occupations are eligible for this card:</p>
                <ul>
                  <li className="flex items-start mb-2">
                    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />Project Engineer</li>
                  <li className="flex items-start mb-2">
                    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />Project Manager</li>
                  <li className="flex items-start mb-2">
                    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />Quantity Surveyor</li>
                  <li className="flex items-start mb-2">
                    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />Contracts Manager</li>
                  <li className="flex items-start mb-2"><FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />Commissioning Manager</li>
                  <li className="flex items-start mb-2"><FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />Building Services Design Engineer</li>
                  <li className="flex items-start mb-2"><FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />Service and Maintenance Manager</li>
                  <li className="flex items-start mb-2"><FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />Building Services Engineering Site Manager</li>
                  <li className="flex items-start mb-2"><FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                    Design/Project Engineer for Fire Sprinklers (Domestic and Residential).</li>
                </ul>
                <p className='my-5'>Manager cards are issued to applicants who can demonstrate completion of a relevant Level 4 NVQ, SVQ, Apprenticeship Standard, Degree, or higher qualification in building services engineering and/or construction management.</p>

                <p className='mb-2 text-justify'>Plus one of the following H&S requirements:</p>
                <ul>
                  <li className="flex items-start mb-2">
                    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />'Managing Safely' course by IOSH</li>
                  <li className="flex items-start mb-2">
                    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                    CITB Managers and Professionals test</li>
                  <li className="flex items-start mb-2">
                    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                    CCNSG ‘Safety Passport Scheme’ course</li>
                  <li className="flex items-start mb-2">
                    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
                    CITB Site Management Safety Training Scheme (SMSTS) </li>
                </ul>
                <p className='mt-5 text-justify'>All applications must be accompanied by an employer endorsement which confirms that the applicant is working in a building service engineering managerial role in accordance with the managerial criteria as specified in the online application form.</p>
              </>
            )
          }


          {/* White Professionally Qualified */}

          {
            id === 'pqp' && (
              <>

                <p className='mb-4 text-justify'>Building Services Engineers who meet the corporate membership standards of SKILLcard-approved Professional Bodies are eligible for this card.</p>
                <p className='mb-4 text-justify'>To apply for this card the following must be provided:</p>
                <p>To be eligible, applicants must provide proof of current membership in a professional body at a level recognized by SKILLcard, using one of the following:</p>
                <ul>
                  <li className="flex items-start mb-2">
                    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />A membership certificate</li>
                  <li className="flex items-start mb-2">
                    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />A membership card (if issued)</li>
                  <li className="flex items-start mb-2">
                    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />A current year letter or email from the professional body</li>
                </ul>
                <p className='mb-4 text-justify'>For renewals, applicants must supply a letter or email from the professional body confirming that they are still a member of the organisation.</p>
              </>
            )
          }




          {/* Academically Qualified Person */}


          {
            id === 'aqp' && (
              <>
                <p className='mb-4 text-justify'>This card is available to Building Services Engineers who hold an identified SKILLcard approved academic qualification.</p>
                <p className='mb-4 text-justify'>
                  Applicants must provide proof of an academic qualification approved by SKILLcard by submitting a copy of the qualification certificate.</p>
                <p>All applicants must meet the SKILLcard health and safety requirements.</p>
              </>
            )
          }


          {
            id === 'acrib' && (
              <>
                <p>Applicants must hold appropriate qualifications, for example:</p>
                <ul>
                  <li className="flex items-start mb-2">
                    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />City and Guilds 2079 (Cat1)</li>
                  <li className="flex items-start mb-2">
                    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />BESA FG Cat1</li>
                  <li className="flex items-start mb-2">
                    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />Appropriate unit of NVQ or 7189 as recognised by DEFRA</li>
                  <li className="flex items-start mb-2">
                    <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />Logic 603/1917/3 (Cat1)</li>
                </ul>
                <p className='mb-4 text-justify'>Cards can also feature additional refrigeration related qualifications such as those covering brazing, electrical and REAL Zero.</p>
                <p>The Engineering Services SKILLcard and the Air Conditioning and Refrigeration Industry Board (ACRIB) jointly offer the ACRIB/SKILLcard, a construction-related occupation card for registered operatives competent in handling refrigerants.</p>
              </>
            )




          }



        </div>


        <p className='mb-2 font-bold'> Cost of ESS card :</p>
        <p className="flex items-start mb-2">
          <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" /><span className='font-semibold mr-1'>Physical card :</span>  120 £  including 84 pound ESS fee+ VAT fee + booking fee</p>
        <p className="flex items-start mb-2">
          <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" /><span className='font-semibold mr-1'>Digital card :</span> 66 £ including 48 pound ESS fee+ VAT fee + booking fee</p>

        <p><Link href="#" className='text-purple_primary font-bold mt-6'>Contact Support</Link> if you're still not sure which test to take.</p>






      </div>


    </div>
  )
}

export default EssPageComponent

