import React, { useContext, useEffect, useState, useMemo } from "react";
import Loader from "./Loader";
import { UserContext } from "../context-api/UserContext";

const CscsEssTable = ({ userData, isLoading }) => {
  const [total, setTotal] = useState(0);
  const [auto, setAuto] = useState(0);
  const [manual, setManual] = useState(0);


  // Remove duplicate entries based on email
  const removeDuplicates = (data) => {
    const uniqueData = [];
    const seenEmails = new Set();

    data.forEach((user) => {
      if (!seenEmails.has(user.email)) {
        seenEmails.add(user.email);
        uniqueData.push(user);
      }
    });

    return uniqueData;
  };
  

  const filteredUserData = useMemo(() => removeDuplicates(userData), [userData]);

  useEffect(() => {
    if (!filteredUserData || filteredUserData.length === 0) return;
    const totalUsers = filteredUserData.length;
    const autoCount = filteredUserData.filter((user) => user.submitType === "auto").length;
    const manualCount = filteredUserData.filter((user) => user.submitType === "manual").length;

    setTotal(totalUsers);
    setAuto(autoCount);
    setManual(manualCount);
  
  }, [filteredUserData,auto,manual]); 

  return (
    <div className="overflow-x-auto">
            <ul className="flex items-center gap-6 mb-4">
  <li className="flex items-center gap-2 text-gray-800 font-medium">
    <span className="text-orange-500 text-xl">•</span> Auto Saved ({auto ?? 0})
  </li>
  <li className="flex items-center gap-2 text-gray-800 font-medium">
    <span className="text-green-500 text-xl">•</span> Manually Saved ({ manual ?? 0})
  </li>
</ul>
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
          ) : filteredUserData.length > 0 ? (
            filteredUserData.map((user, index) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 flex gap-2 items-center">{index + 1}
                <p className={`before:content-['•'] before:${user.submitType==='auto'?"text-orange-500":"text-green-500"} before:text-2xl before:mr-2`}></p>
                </td>
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
