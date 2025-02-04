"use client";
import { useFirebase } from "@/app/context/Firebase";
import React, { use, useContext, useEffect, useState } from "react";
import Loader from "../../components/Loader";
import { UserContext } from "@/app/context-api/UserContext";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const page = () => {
  const firebase = useFirebase();
  const [contactedData, setContactedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {viewDetailsId,setViewDetailsId}=useContext(UserContext)
  const router=useRouter()
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false)
  
  

  useEffect(() => {
    firebase.fetchContactUsData((data) => {
      const filteredData = removeDuplicates(data); 
      setContactedData(filteredData);
    }, setIsLoading);
  }, []);


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

  // console.log(contactedData, "Filtered ContactedData");

  const handleViewDetails = (id) => {
    // console.log(`View details for ID: ${id}`);
    setViewDetailsId(id)
    router.push(`/admin/contact-us-details/${id}`)

    
  };


 

  let auto=0
  let autoFilterdData=  contactedData && contactedData.filter((user)=>{
    return(
      user.submitType==='auto'
    )
  })   

 let total = contactedData.length
  auto =  autoFilterdData.length
  let manually =total-auto




  // Handle checkbox selection
  const handleCheckboxChange = (userId) => {
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(userId)
        ? prevSelected.filter((id) => id !== userId)
        : [...prevSelected, userId]
    );
  };

  // Handle select all checkboxes
  const handleSelectAll = () => {
    if (selectedUsers.length === contactedData.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(contactedData.map((user) => user.id));
    }
  };

  const handleDeleteSelected = async () => {
    if (selectedUsers.length === 0) {
      toast.error("No messages selected for deletion!");
      return;
    }
  
    try {
      setIsDeleting(true);
      
    
      await firebase.deleteContactUsMessages(selectedUsers, setIsDeleting);
  
      setContactedData((prevData) =>
        prevData.filter((user) => !selectedUsers.includes(user.id))
      );
  
      // toast.success("Selected messages deleted successfully!");
    } catch (error) {
      // toast.error("Error deleting messages!");
    } finally {
      setSelectedUsers([]);
      setIsDeleting(false);
    }
  };
  



  return (
    <div className="overflow-x-auto px-4 pt-8">
     <div className='flex justify-center'>
          <span className='text-[24px] text-gray-800 text-center font-bold mb-6'>Contact Us Messages</span>
      </div>
  

<ul className="flex items-center gap-6 mb-4">
  <li className="flex items-center gap-2 text-gray-800 font-medium">
    <span className="text-orange-500 text-xl">•</span> Auto Saved ({auto ?? 0})
  </li>
  <li className="flex items-center gap-2 text-gray-800 font-medium">
    <span className="text-green-500 text-xl">•</span> Manually Saved ({ manually ?? 0})
  </li>
</ul>

<div className="overflow-x-auto">
      {selectedUsers.length > 0 && (
        <button
          className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={handleDeleteSelected}
        >
        {isDeleting?"Deleting...":"Delete Selected"}
           ({selectedUsers.length})
        </button>
      )}
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">
              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={selectedUsers.length === contactedData.length}
              />
            </th>
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
              <td colSpan="7" className="text-center py-4">
                <Loader />
              </td>
            </tr>
          ) : contactedData?.length > 0 ? (
            contactedData.map((user, index) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => handleCheckboxChange(user.id)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2 flex gap-2 items-center">
                  {index + 1}
                  <p
                    className={`before:content-['•'] before:${user.submitType === "auto" ? "text-orange-500" : "text-green-500"} before:text-2xl before:mr-2`}
                  ></p>
                </td>
                <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                <td className="border border-gray-300 px-4 py-2">{user.mobile}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.description.length > 20 ? `${user.description.slice(0, 20)}...` : user.description}
                </td>
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
              <td colSpan="7" className="border border-gray-300 px-4 py-2 text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default page;
