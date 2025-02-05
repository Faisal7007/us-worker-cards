"use client"
import React, { useEffect, useState } from 'react'
import ApplicantsTable from '../components/ApplicantsTable'
import { useFirebase } from '@/app/context/Firebase'


const page = () => {
    const firebase=useFirebase()
    const [groupBookingApplicants, setGroupBookingApplicants] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    

    useEffect(()=>{
        firebase.fetchGroupBooking(setGroupBookingApplicants,setIsLoading)
    },[])

  return (
    <div className='py-6 px-3'>
     <div className='text-[24px] text-gray-800 text-center font-bold mb-6'>Group Booking Applicants</div>
      <ApplicantsTable userData={groupBookingApplicants} isLoading={isLoading} form_type="group-booking"/>
    </div>
  )
}

export default page

