"use client"
import { UserContext } from '@/app/context-api/UserContext';
import { useFirebase } from '@/app/context/Firebase';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'

const page = () => {
  const params = useParams();
  const id = params.slug;
  const router = useRouter()
  const firebase = useFirebase()
  const [user, setUser] = useState([])
  const { formType, setFormType } = useContext(UserContext)
  const { setViewDetailsId } = useContext(UserContext)

  useEffect(() => {

    firebase.fetchCitbApplicantById(id, setUser)
    setViewDetailsId(id)

  }, [id])

  console.log(user, "User")

  return (
    <div className='px-3 py-6'>
      <div className="bg-gray-100 flex items-center justify-center">
        <div className="max-w-2xl w-full shadow-lg rounded-2xl bg-white">
          <div className="bg-gray-800 relative text-white rounded-t-2xl p-4 text-center">
            <button onClick={() => (router.back())} className='bg-white rounded-2xl text-gray-800 px-4 py-2  absolute top-0 left-0'>Go Back</button>
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
                <p className="text-gray-500 font-semibold">Date of Birth</p>
                <p>{user.dob}</p>
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
              {/* <div>
                <p className="text-gray-500 font-semibold">Application Type</p>
                <p>{user.applicationType}</p>
              </div> */}
              {/* <div>
                <p className="text-gray-500 font-semibold">Card Type</p>
                <p>{user.cardType}</p>
              </div> */}
              <div>
                <p className="text-gray-500 font-semibold">Created At</p>
                <p>{new Date(user.createdAt).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-gray-500 font-semibold">City</p>
                <p>{user.city}</p>
              </div>
              <div>
                <p className="text-gray-500 font-semibold">Locality</p>
                <p>{user.locality}</p>
              </div>
              <div>
                <p className="text-gray-500 font-semibold">Full Address</p>
                <p>{user.fullAddress}</p>
              </div>
              <div>
                <p className="text-gray-500 font-semibold">Postcode</p>
                <p>{user.postcode}</p>
              </div>
              <div>
                <p className="text-gray-500 font-semibold">Country</p>
                <p>{user.country}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
