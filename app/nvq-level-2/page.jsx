import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GiCheckMark } from 'react-icons/gi';
import CardForm from '../components/CardForm';

import items from '../constants/nvqLevel2Data';
const Page = () => {
  return (
    <div className='max-w-[1440px] mx-auto px-4 pt-8'>
      <h1 className='text-[30px] font-bold mb-4 capitalize'>NVQ Level 2 In Construction</h1>
      
      <div className='mb-4 text-justify media-max-545px:text-[14px]'>
        {items?.benefits?.map((benefit, index) => (
          <p key={index} className="flex items-center font-bold text-green-500 mb-2">
            <GiCheckMark className="text-green-500 size-4 mr-2" />
            {benefit}
          </p>
        ))}
      </div>
      
      <p className='mb-6 text-justify media-max-545px:text-[14px]'>
        This qualification can be used to get a CSCS 
        <Link href="#" className="font-bold text-purple_primary"> Blue Skilled Worker Card.</Link>
      </p>
      
      <div className='flex justify-between items-center mt-10 media-max-1360px:flex-col media-max-1360px:gap-8'>
        <div className='max-h-[380px] max-w-[660px]'>
          <Image 
            src='/blue-card-img.png'
            alt='card-image'
            width={800}
            height={400}
            className='rounded-lg h-full w-full'
          />
        </div>
        <div>
          <CardForm 
            titleOne='NVQ Level 2' 
            titleTwo='Easy apply for NVQ Level 2 in Construction.' 
            cardType="nvq-level-2"
          />
        </div>
      </div>
      
      <p className='my-6 text-justify media-max-545px:text-[14px]'>
        All applicants must have passed the&nbsp;
        <Link href="/citb-test" className='text-purple_primary font-bold'>
          CITB Health, Safety and Environment test&nbsp;
        </Link> 
        within the last two years, at the relevant level for the occupation being applied for. 
        To find out which level of test is required please use our Card Finder.
      </p>
      
      <p className='my-6 text-justify media-max-545px:text-[14px]'>
        The Blue Skilled Worker card is valid for <span className='font-bold'>five years,</span> and for those who have achieved a construction-related NVQ/SVQ level 2 or SVQ at SCQF level 5 or completed an apprenticeship.
      </p>
      
      <p className='mb-6 text-justify media-max-545px:text-[14px]'>
        If you do not have these qualifications, but you are experienced in your job and have registered for a qualification applicable to your occupation, you may apply for an Experienced Worker Card.
      </p>
      
      <h1 className='text-[30px] font-bold mb-2 capitalize'>Trades</h1>
      <ul className='list-disc pl-4 text-justify media-max-545px:text-[14px]'>
        {items?.trades?.map((trade, index) => (
          <li key={index} className='marker:text-purple_primary mb-2'>{trade}</li>
        ))}
      </ul>
      
      <h1 className='text-[30px] font-bold mb-2 mt-6'>How to apply</h1>
      <p className='text-justify media-max-545px:text-[14px]'>
        Call <Link href='/' className='text-purple_primary font-semibold hover:text-black'>
          0203 769 9047&nbsp;
        </Link> 
        to book by phone. Our lines are open Monday to Saturday, from 9 AM to 7 PM.
      </p>
      
      <h1 className='text-[30px] font-bold mb-2 mt-6 capitalize'>NVQ Level 2 In Construction</h1>
      <p className='text-justify media-max-545px:text-[14px] mb-2'>
        Enrolling in an NVQ can be a quick option for candidates pursuing vocational training who wish to work on-site, as completing NVQ training is required to qualify for a Blue Skilled Card.
      </p>
      
      <p className='text-justify media-max-545px:text-[14px] mb-2'>
        Enrolling in an NVQ Level 2 can lead to obtaining a &nbsp; 
        <Link href="/cscs-red-trainee-card" className='text-purple_primary font-bold'>
          CSCS Red Trainee Card,
        </Link> 
        valid for <span className='font-bold'>five years,</span> or a 
        &nbsp;<Link href="/cscs-red-experienced-worker-card" className='text-purple_primary font-bold'>
          CSCS Red Experienced Worker Card,&nbsp;
        </Link> 
        &nbsp;valid for <span className='font-bold'>one year.</span>
      </p>
      
      <p className='mb-6 text-justify media-max-545px:text-[14px]'>
        After completing the NVQ training, you will receive certification and become eligible for a&nbsp;
        <Link href="/cscs-blue-card" className='text-purple_primary font-bold'>
          CSCS Blue Skilled Worker Card.
        </Link>
      </p>
      
      <div className='flex justify-between items-center mt-10 media-max-1360px:flex-col media-max-1360px:gap-8'>
        <div className='max-h-[380px] max-w-[660px]'>
          <Image 
            src='/red-trainee-img.png'
            alt='card-image'
            width={800}
            height={400}
            className='rounded-lg h-full w-full'
          />
        </div>
        <div>
          <CardForm 
            titleOne='NVQ Level 2(Enrollment)' 
            titleTwo='Easy apply for Enrollment of NVQ Level 2.' 
            cardType="nvq-level-2-enrollment"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
