"use client"
import React, { useEffect, useState } from 'react'
import ApplicantsTable from '../components/ApplicantsTable'
import { useFirebase } from '@/app/context/Firebase'


const page = () => {
    const firebase=useFirebase()
    const [CitbApplicants, setCitbApplicants] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    

    useEffect(()=>{
        firebase.fetchCITBTestApplicants(setCitbApplicants,setIsLoading)
    },[])

  return (
    <div className='py-6 px-3'>
     <div className='text-[24px] text-gray-800 text-center font-bold mb-6'>CITB Test Applicants</div>
      <ApplicantsTable userData={CitbApplicants} form_type="citb"  isLoading={isLoading} setUserData={setCitbApplicants}/>
    </div>
  )
}

export default page
