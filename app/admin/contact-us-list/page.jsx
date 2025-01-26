
"use client"
import { useFirebase } from '@/app/context/Firebase'
import React, { useEffect, useState } from 'react'

const page = () => {

    const firebase=useFirebase()
    const [contactedData, setContactedData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        firebase.fetchContactUsData(setContactedData,setIsLoading)
    },[])

    console.log(contactedData,'contactedData')

  return (
    <div>
        Contact-us list
    </div>

//     <div className="overflow-x-auto">
//     <table className="min-w-full table-auto border-collapse border border-gray-300">
//       <thead>
//         <tr className="bg-gray-100">
//           <th className="border border-gray-300 px-4 py-2 text-left">Sr. No.</th>
//           <th className="border border-gray-300 px-4 py-2 text-left">Full Name</th>
//           <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
//           <th className="border border-gray-300 px-4 py-2 text-left">Mobile No.</th>
//           <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
//           <th className="border border-gray-300 px-4 py-2 text-left">Full Details</th>
//         </tr>
//       </thead>

//       <tbody>
//         {isLoading ? (
//           <tr>
//             <td colSpan="6" className="text-center py-4">
//               <Loader/>
//             </td>
//           </tr>
//         ) : userData?.length > 0 ? (
//           userData.map((user, index) => (
//             <tr key={user.id} className="hover:bg-gray-100">
//               <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
//               <td className="border border-gray-300 px-4 py-2">{user.firstName}</td>
//               <td className="border border-gray-300 px-4 py-2">{user.lastName}</td>
//               <td className="border border-gray-300 px-4 py-2">{user.email}</td>
//               <td className="border border-gray-300 px-4 py-2">{user.phoneNumber}</td>
//               <td onClick={()=>handleViewDetails(user.id)} className="border border-gray-300 px-4 py-2 text-green-500 font-semibold cursor-pointer">View</td>

//             </tr>
//           ))
//         ) : (
//           <tr>
//             <td colSpan="6" className="border border-gray-300 px-4 py-2 text-center">
//               No data available
//             </td>
//           </tr>
//         )}
//       </tbody>
//     </table>
//   </div>

  )
}

export default page
