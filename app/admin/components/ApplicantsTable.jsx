"use client"
import React, { useContext, useEffect } from "react";
import Loader from "../../components/Loader";
import { useRouter } from "next/navigation";
import { UserContext } from "@/app/context-api/UserContext";

const ApplicantsTable = ({userData,isLoading,form_type}) => {
    const {viewDetailsId,setViewDetailsId}=useContext(UserContext)
    const {formType,setFormType}=useContext(UserContext)
        
    const router=useRouter()

    useEffect(()=>{
           if(form_type==='cscs'){
                  setFormType('cscs')
           }
           else{
            setFormType('ess')
           }
    },[form_type])



  console.log(userData,"UserData in Applicants table")

  const handleViewDetails=(id)=>{
    if(form_type==='cscs'|| form_type==='ess'){ 
      setViewDetailsId(id)
      router.push(`/admin/cscs-ess-applicants-details/${id}`)
    }
    else{
      setViewDetailsId(id)
      router.push(`/admin/citb-applicants-details/${id}`)
    }
    if(form_type==='health-and-safety-course'){
      setViewDetailsId(id)
      router.push(`/admin/health-and-safety-course-applicants-details/${id}`)

    }

  }

  console.log(viewDetailsId,'View detail ID')

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Sr. No.</th>
            <th className="border border-gray-300 px-4 py-2 text-left">First Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Last Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Mobile No.</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Full Details</th>
          </tr>
        </thead>

        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="6" className="text-center py-4">
                <Loader/>
              </td>
            </tr>
          ) : userData?.length > 0 ? (
            userData.map((user, index) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{user.firstName}</td>
                <td className="border border-gray-300 px-4 py-2">{user.lastName}</td>
                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                <td className="border border-gray-300 px-4 py-2">{user.phoneNumber}</td>
                <td onClick={()=>handleViewDetails(user.id)} className="border border-gray-300 px-4 py-2 text-green-500 font-semibold cursor-pointer">View</td>

              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="border border-gray-300 px-4 py-2 text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>

      </table>
    </div>
  );
};

export default ApplicantsTable;
