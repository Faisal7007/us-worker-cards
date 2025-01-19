import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GiCheckMark } from 'react-icons/gi'
import CardForm from '../components/CardForm'

const page = () => {
    return (
        <div className='max-w-[1440px] mx-auto px-4 pt-8'>
            <h1 className='text-[30px] font-bold mb-4 capitalize'>NVQ Level 2 In Construction</h1>
            <div className='mb-4'>
                <p className="flex items-center font-bold text-green-500  mb-2">
                    <GiCheckMark className="text-green-500 size-4 mr-2" />
                    Flexible Dates
                </p>
                <p className="flex items-center font-bold text-green-500  mb-2">
                    <GiCheckMark className="text-green-500  size-4 mr-2" />
                    Time - 2months
                </p>
                <p className="flex items-center font-bold text-green-500  mb-2">
                    <GiCheckMark className="text-green-500 size-4 mr-2" />
                    Assessment - Onsite

                </p>
                <p className="flex items-center font-bold text-green-500  mb-2">
                    <GiCheckMark className="text-green-500 size-4 mr-2" />
                    Available all over the UK
                </p>
                <p className="flex items-center font-bold text-green-500  mb-2">
                    <GiCheckMark className="text-green-500 size-4 mr-2" />
                    Expert trainers And Assessors
                </p>
                <p className="flex items-center font-bold text-green-500  mb-2">
                    <GiCheckMark className="text-green-500 size-4 mr-2" />All trades in construction are covered</p>
            </div>
            <p className='mb-6'>This qualification can be used to get a CSCS <Link href="#" className="font-bold text-purple_primary">Blue Skilled Worker Card.</Link></p>
            <div className='flex justify-between  items-center mt-10'>
                <div>
                    <Image src='/blue-card-img.png'
                        alt='card-image'
                        width={800}
                        height={400}
                        className='rounded-lg h-[380px] w-[660px]'
                    />
                </div>
                <div>
                    <CardForm titleOne='NVQ Level 2' titleTwo='Easy apply for NVQ Level 2 in Construction.' />
                </div>
            </div>
            {/* <p className='my-6'>To obtain a <span className='font-bold'>Blue CSCS Skilled Worker Card</span> valid for <span className='font-bold'>five years,</span> the candidate must complete NVQ Level 2 and pass a valid CITB Health, Safety, and Environment Test.</p> */}
            <p className='my-6'>All applicants must have passed the <Link href="/citb-test" className='text-purple_primary font-bold'>CITB Health, Safety and Environment test</Link> within the last two years, at the relevant level for the occupation being applied for. To find out which level of test is required please use our Card Finder.</p>
            <p className='my-6'>The Blue Skilled Worker card is valid for <span className='font-bold'>five years,</span> and for those who have achieved a construction related NVQ/SVQ level 2 or SVQ at SCQF level 5 or completed an apprenticeship, such as an Employer sponsored apprenticeship, a City and Guilds Craft Certificate (CGLI) or a CSCS-recognised Apprenticeship.</p>
            <p className='mb-6'>If you do not have these qualifications, but you are experienced in your job and have registered for a qualification applicable to your occupation, you may apply for an Experienced Worker Card.</p>
            <h1 className='text-[30px] font-bold mb-2 capitalize'>Trades</h1>
            <ul className='list-disc pl-4'>
                {

                }
                <li className='marker:text-purple_primary mb-2'>Piling</li>
                <li className='marker:text-purple_primary mb-2'>Tiling</li>
                <li className='marker:text-purple_primary mb-2'>Joinery</li>
                <li className='marker:text-purple_primary mb-2'>Roofing</li>
                <li className='marker:text-purple_primary mb-2'>Cladding</li>
                <li className='marker:text-purple_primary mb-2'>Dry Lining</li>
                <li className='marker:text-purple_primary mb-2'>Plastering</li>
                <li className='marker:text-purple_primary mb-2'>Demolition</li>
                <li className='marker:text-purple_primary mb-2'>Steelfixing</li>
                <li className='marker:text-purple_primary mb-2'>Fenestration</li>
                <li className='marker:text-purple_primary mb-2'>Steel Erection</li>
                <li className='marker:text-purple_primary mb-2'>Stone Masonry</li>
                <li className='marker:text-purple_primary mb-2'>Plant Operations</li>
                <li className='marker:text-purple_primary mb-2'>Plant Installations</li>
                <li className='marker:text-purple_primary mb-2'>Painting and Decorating</li>
                <li className='marker:text-purple_primary mb-2'>Floorcovering occupations</li>
                <li className='marker:text-purple_primary mb-2'>Post Tensioning Operations</li>
                <li className='marker:text-purple_primary mb-2'>Concrete Drilling & Sawing</li>
                <li className='marker:text-purple_primary mb-2'>Plant Operations Road Sweeper</li>
                <li className='marker:text-purple_primary mb-2'>Specialist Concrete Operations</li>
                <li className='marker:text-purple_primary mb-2'>Erection of Precast Installations</li>
                <li className='marker:text-purple_primary mb-2'>Insulation & Building Treatments</li>
                <li className='marker:text-purple_primary mb-2'>Trowel Occupations - Bricklaying</li>
                <li className='marker:text-purple_primary mb-2'>Wood Occupations - Site Carpentry</li>
                <li className='marker:text-purple_primary mb-2'>Construction Operations/Highways Maintenance</li>
            </ul>

            <h1 className='text-[30px] font-bold mb-2 mt-6'>How to apply</h1>
            <p>Call <Link href='/' className='text-purple_primary font-semibold hover:text-black '>0203 769 9047</Link> to book by phone. Our lines are open Monday to Saturday, from 9 AM to 7 PM.</p>
            <h1 className='text-[30px] font-bold mb-2 mt-6 capitalize'>NVQ Level 2 In Construction</h1>
            <p>
            Enrolling in an NVQ can be a quick option for candidates pursuing vocational training who wish to work on-site, as completing NVQ training is required to qualify for a Blue Skilled Card.</p>
            <p>Enrolling in an NVQ Level 2 can lead to obtaining a <Link href="/cscs-red-trainee-card" className='text-purple_primary font-bold'>CSCS Red Trainee Card,</Link> valid for <span className='font-bold'>five years,</span> or a <Link href="/cscs-red-experienced-worker-card" className='text-purple_primary font-bold'>CSCS Red Experienced Worker Card,</Link> valid for <span className='font-bold'>one year.</span></p>
            <p className='mb-6'>After completing the NVQ training, you will receive certification and become eligible for a <Link href="/cscs-blue-card" className='text-purple_primary font-bold'>CSCS Blue Skilled Worker Card.</Link></p>
            <div className='flex justify-between items-center mt-10'>
                <div>
                    <Image src='/red-trainee-img.png'
                        alt='card-image'
                        width={800}
                        height={400}
                        className='rounded-lg h-[355px] w-[660px]'
                    />
                </div>
                <div>
                    <CardForm titleOne='NVQ Level 2(Enrollment)' titleTwo='Easy apply for Enrollemnt of NVQ Level 2.' />
                </div>
            </div>
        </div>
    )
}

export default page
