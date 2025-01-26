"use client"
import React, { useEffect, useState } from 'react'
import ApplicantsTable from '../components/ApplicantsTable'
import { useFirebase } from '@/app/context/Firebase'


const page = () => {
    const firebase=useFirebase()
    const [healthAndSafetyApplicants, setHealthAndSafetyApplicants] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    

    useEffect(()=>{
        firebase.fetchHealthAndSafetyApplicants(setHealthAndSafetyApplicants,setIsLoading)
    },[])

  return (
    <div className='py-6 px-3'>
     <div className='text-[24px] text-gray-800 text-center font-bold mb-6'>Health & Safety Course Applicants</div>
      <ApplicantsTable userData={healthAndSafetyApplicants} isLoading={isLoading} form_type="health-and-safety-course"/>
    </div>
  )
}

export default page
