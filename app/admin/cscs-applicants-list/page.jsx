"use client"
import { useFirebase } from '@/app/context/Firebase'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const page = () => {
  const params = useParams();
  const form_type = params.slug;
  const firebase=useFirebase()
  const [cscsApplicants, setCscsApplicants] = useState([])

  useEffect(()=>{
       firebase.fetchCscsApplicants('cscs',setCscsApplicants)
  },[])
  return (
    <div className='py-6 px-3'>
      CSCS Applicants List
    </div>
  )
}

export default page
