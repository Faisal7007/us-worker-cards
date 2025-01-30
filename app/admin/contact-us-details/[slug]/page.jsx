"use client";
import { UserContext } from '@/app/context-api/UserContext';
import { useFirebase } from '@/app/context/Firebase';
import { useParams, useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'

const page = () => {
         const params = useParams();
         const id = params.slug;
        const router=useRouter()
         
        const firebase=useFirebase()
        const {setViewDetailsId}=useContext(UserContext)
        
         
        const [user, setUser] = useState([])
         
        useEffect(()=>{
            firebase.fetchContactUsDataById(id,setUser)
            setViewDetailsId(id)
        },[id])

        console.log(user)
  return (
    <div className='px-3 py-6'>

  
    <div className=" bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full shadow-lg rounded-2xl bg-white">
        <div className="bg-gray-800 relative text-white rounded-t-2xl p-4 text-center">
        <button onClick={() => (router.back())} className='bg-white rounded-2xl text-gray-800 px-4 py-2  absolute top-0 left-0'>Go Back</button>
          <h2 className="text-xl font-bold">User Information</h2>
          <p className="text-sm">Details of the user's application</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500 font-semibold">Name</p>
              <p>{user.name}</p>
            </div>
            <div>
              <p className="text-gray-500 font-semibold">Email</p>
              <p>{user.email}</p>
            </div>
            <div>
              <p className="text-gray-500 font-semibold">Mobile</p>
              <p>{user.mobile}</p>
            </div>
            <div>
              <p className="text-gray-500 font-semibold">Description</p>
              <p>{user.description}</p>
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
