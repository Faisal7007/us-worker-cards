"use client"
import { useFirebase } from '@/app/context/Firebase';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import ApplicantsTable from '../../components/ApplicantsTable';

const page = () => {
     const params = useParams();
      const form_type = params.slug;
      const firebase=useFirebase()
      const [cscsApplicants, setCscsApplicants] = useState([])
      const [essApplicants, setEssApplicants] = useState([])
      const [isLoading, setIsLoading] = useState(false)
      

    
      useEffect(()=>{
        if(form_type==="cscs"){
            firebase.fetchCscsEssApplicants('cscs',setCscsApplicants,setIsLoading)
        }
      },[])

      console.log(cscsApplicants,"cscs applicants")

      useEffect(()=>{
        if(form_type==="ess"){
            firebase.fetchCscsEssApplicants('ess',setEssApplicants,setIsLoading)
        }
      },[])
  return (
    <div className='py-6 px-3 media-max-545px:text-[14px] media-max-545px:px-0'>
    <div className='text-[24px] text-gray-800 text-center font-bold mb-6'><span className='uppercase '>{form_type}</span> Cards Applicants</div>
    {
        form_type==='cscs'?<ApplicantsTable userData={cscsApplicants} form_type={form_type} isLoading={isLoading} setUserData={setCscsApplicants} />:<ApplicantsTable userData={essApplicants} form_type={form_type} isLoading={isLoading} setUserData={setEssApplicants} />

    }
     
    </div>
  )
}

export default page
