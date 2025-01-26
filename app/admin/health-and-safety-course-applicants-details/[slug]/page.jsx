"use client"
import { UserContext } from '@/app/context-api/UserContext';
import { useFirebase } from '@/app/context/Firebase';
import { useParams, useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'

const page = () => {
     const params = useParams();
     const id = params.slug;
     const firebase=useFirebase()
     const router=useRouter()
     
     const [user, setUser] = useState([])
     const [isLoading, setIsLoading] = useState(false)
     
     const {formType,setFormType}=useContext(UserContext)

    const {viewDetailsId,setViewDetailsId}=useContext(UserContext)
     
     

     useEffect(()=>{
          setViewDetailsId(id)
          firebase.fetchHealthAndSafetyApplicantById(id,setUser,setIsLoading)
   },[id])

   console.log(user,"H&S User")

  
  
  

  return (
  <div className='py-6 px-3'>
  <button onClick={()=>(router.back())} className='bg-gray-800 text-white px-4 py-2 rounded-md'>Go Back</button>

     <div className=" bg-gray-100 flex items-center justify-center p-4">

     <div className="max-w-2xl w-full shadow-lg rounded-2xl bg-white">
       <div className="bg-gray-800 text-white rounded-t-2xl p-4 text-center">
         <h2 className="text-xl font-bold">User Information</h2>
         <p className="text-sm">Details of the user's application</p>
       </div>
       <div className="p-6 space-y-4">
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           <div>
             <p className="text-gray-500 font-semibold">Title</p>
             <p>{user.title}</p>
           </div>
           <div>
             <p className="text-gray-500 font-semibold">First Name</p>
             <p>{user.firstName}</p>
           </div>
           <div>
             <p className="text-gray-500 font-semibold">Middle Name</p>
             <p>{user.middleName}</p>
           </div>
           <div>
             <p className="text-gray-500 font-semibold">Last Name</p>
             <p>{user.lastName}</p>
           </div>
           <div>
             <p className="text-gray-500 font-semibold">Email</p>
             <p>{user.email}</p>
           </div>
           <div>
             <p className="text-gray-500 font-semibold">Phone Number</p>
             <p>{user.phoneNumber}</p>
           </div>
           <div>
             <p className="text-gray-500 font-semibold">National Insurance Number</p>
             <p>{user.nationalInsuranceNumber}</p>
           </div>
           <div>
             <p className="text-gray-500 font-semibold">Course Mode</p>
             <p>{user.courseMode}</p>
           </div>
           <div>
             <p className="text-gray-500 font-semibold">Assessment Date</p>
             <p>{user.assessmentDate}</p>
           </div>
           <div>
             <p className="text-gray-500 font-semibold">Location</p>
             <p>{user.location}</p>
           </div>
           <div>
             <p className="text-gray-500 font-semibold">Created At</p>
             <p>{new Date(user.createdAt).toLocaleString()}</p>
           </div>
         </div>
       </div>
     </div>
   </div>

  </div>


  )
}

export default page
