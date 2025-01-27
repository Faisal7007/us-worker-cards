import React from "react";
import Loader from "./Loader";

const CscsEssTable = ({ userData, isLoading }) => {
  // Remove duplicate entries based on email or another unique field
  const removeDuplicates = (data) => {
    const uniqueData = [];
    const seenEmails = new Set();

    data.forEach((user) => {
      if (!seenEmails.has(user.email)) {
        seenEmails.add(user.email); // Add email to the Set
        uniqueData.push(user); // Add user to the uniqueData array
      }
    });

    return uniqueData;
  };

  const filteredUserData = removeDuplicates(userData);

  console.log(filteredUserData, "Filtered UserData");

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
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="5" className="text-center py-4">
                <Loader />
              </td>
            </tr>
          ) : filteredUserData?.length > 0 ? (
            filteredUserData.map((user, index) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{user.firstName}</td>
                <td className="border border-gray-300 px-4 py-2">{user.lastName}</td>
                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                <td className="border border-gray-300 px-4 py-2">{user.phone}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="border border-gray-300 px-4 py-2 text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CscsEssTable;
