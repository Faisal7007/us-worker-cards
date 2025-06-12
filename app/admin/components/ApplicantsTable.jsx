"use client"
import React, { useContext, useEffect, useState } from "react";
import Loader from "../../components/Loader";
import { useRouter } from "next/navigation";
import { UserContext } from "@/app/context-api/UserContext";
import { useFirebase } from "@/app/context/Firebase";

const ApplicantsTable = ({ userData, isLoading, form_type,setUserData}) => {
    const { viewDetailsId, setViewDetailsId } = useContext(UserContext);
    const { formType, setFormType } = useContext(UserContext);
    const [isViewing, setIsViewing] = useState(false);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [isDeleting, setIsDeleting] = useState(false);
    const firebase=useFirebase();
    const router = useRouter();

    useEffect(() => {
        if (form_type === 'cscs') {
            setFormType('cscs');
        } else {
            setFormType('ess');
        }
    }, [form_type]);

    const handleViewDetails = (id) => {
        setIsViewing(true);
        setViewDetailsId(id);

        if (form_type === 'cscs' || form_type === 'ess') {
            router.push(`/admin/cscs-ess-applicants-details/${id}`);
        } else if (form_type === 'health-and-safety-course') {
            router.push(`/admin/health-and-safety-course-applicants-details/${id}`);
        } else if (form_type==='group-booking'){
            router.push(`/admin/group-booking-applicants-details/${id}`);
            
        }
        else {
            router.push(`/admin/citb-applicants-details/${id}`);
        }
        setIsViewing(false);
    };

    const handleSelectUser = (id) => {
        setSelectedUsers(prev => 
            prev.includes(id) ? prev.filter(uid => uid !== id) : [...prev, id]
        );
    };

    const handleDeleteSelected = async() => {
      
     

        if (selectedUsers.length === 0) {
          toast.error("No messages selected for deletion!");
          return;
        }
      
        try {
          setIsDeleting(true);
      
          if (form_type === "cscs") {
            await firebase.deleteCscsApplications('cscs',selectedUsers,setIsDeleting)
            setSelectedUsers([]);
          } else if (form_type === "ess") {
            await firebase.deleteEssApplications('ess',selectedUsers,setIsDeleting)
            setSelectedUsers([]);
          }

          else if (form_type === "citb") {
            await firebase.deleteCitbApplications(selectedUsers,setIsDeleting)
            setSelectedUsers([]);
          }

          else if (form_type === "health-and-safety-course") {
            await firebase.deleteHealthAndSafetyApplications(selectedUsers,setIsDeleting)
            setSelectedUsers([]);
          }

          else if (form_type === "group-booking") {
            await firebase.deleteGroupBookings(selectedUsers,setIsDeleting)
            setSelectedUsers([]);
          }

          setUserData((prevData) =>
            prevData.filter((user) => !selectedUsers.includes(user.id))
          );
      
          // toast.success("Selected messages deleted successfully!");
        } catch (error) {
          // toast.error("Error deleting messages!");
        } finally {
          // setSelectedUsers([]);
          setIsDeleting(false);
        }
    };
console.log('userData : ',userData);

    return (
        <div className="overflow-x-auto">
            {selectedUsers.length > 0 && (
        <button
          className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={handleDeleteSelected}
        >
          {isDeleting?"Deleting...":"Delete Selected"} ({selectedUsers.length})
        </button>
      )}
           
            <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">
                            <input type="checkbox" 
                                onChange={(e) => 
                                    setSelectedUsers(e.target.checked ? userData.map(user => user.id) : [])
                                }
                                checked={selectedUsers.length === userData.length && userData.length > 0}
                            />
                        </th>
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
                            <td colSpan="7" className="text-center py-4">
                                <Loader />
                            </td>
                        </tr>
                    ) : userData?.length > 0 ? (
                        userData.map((user, index) => (
                            <tr key={user.id} className="hover:bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2">
                                    <input 
                                        type="checkbox" 
                                        checked={selectedUsers.includes(user.id)} 
                                        onChange={() => handleSelectUser(user.id)}
                                    />
                                </td>
                                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.firstName}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.lastName}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.phoneNumber || user.phone}</td>
                                <td onClick={() => handleViewDetails(user.id)} className="border border-gray-300 px-4 py-2 text-green-500 font-semibold cursor-pointer">{isViewing ? "Wait..." : "View"}</td>
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
    );
};

export default ApplicantsTable;