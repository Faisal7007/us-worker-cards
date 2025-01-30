"use client";
import { useFirebase } from "@/app/context/Firebase";
import React, { useContext, useEffect, useState } from "react";
import Loader from "../../components/Loader";
import { UserContext } from "@/app/context-api/UserContext";
import { useRouter } from "next/navigation";

const page = () => {
  const firebase = useFirebase();
  const [contactedData, setContactedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {viewDetailsId,setViewDetailsId}=useContext(UserContext)
  const router=useRouter()
  

  useEffect(() => {
    firebase.fetchContactUsData((data) => {
      const filteredData = removeDuplicates(data); // Remove duplicates before setting data
      setContactedData(filteredData);
    }, setIsLoading);
  }, []);

  // Function to remove duplicate entries
  const removeDuplicates = (data) => {
    const uniqueData = [];
    const seenEmails = new Set();

    data.forEach((item) => {
      if (!seenEmails.has(item.email)) {
        seenEmails.add(item.email); // Use email as a unique identifier
        uniqueData.push(item); // Add unique items to the array
      }
    });

    return uniqueData;
  };

  console.log(contactedData, "Filtered ContactedData");

  const handleViewDetails = (id) => {
    console.log(`View details for ID: ${id}`);
    setViewDetailsId(id)
    router.push(`/admin/contact-us-details/${id}`)

    
  };

  return (
    <div className="overflow-x-auto px-4 pt-8">
     <ul className="flex gap-6 items-center mb-4">
  <li className="before:content-['•'] before:text-orange-500 before:text-2xl before:mr-1">Auto Saved</li>
  <li className="before:content-['•'] before:text-green-500 before:text-2xl before:mr-1">Manually Saved</li>
</ul>

      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Sr. No.</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Full Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Mobile No.</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Full Details</th>
          </tr>
        </thead>

        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="6" className="text-center py-4">
                <Loader />
              </td>
            </tr>
          ) : contactedData?.length > 0 ? (
            contactedData.map((user, index) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 flex gap-2 items-center">{index + 1}  <p className={`before:content-['•'] before:${user.submitType==='auto'?"text-orange-500":"text-green-500"} before:text-2xl before:mr-2`}></p></td>
                <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                <td className="border border-gray-300 px-4 py-2">{user.mobile}</td>
                <td className="border border-gray-300 px-4 py-2">{user.description.length> 20  ? `${user.description.slice(0, 20)}...` : user.description}</td>
                <td
                  onClick={() => handleViewDetails(user.id)}
                  className="border border-gray-300 px-4 py-2 text-green-500 font-semibold cursor-pointer"
                >
                  View
                </td>
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

export default page;
