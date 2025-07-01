import React, { useEffect, useState, useMemo } from "react";
import Loader from "./Loader";
import { useFirebase } from "../context/Firebase";

const CscsEssTable = ({ userData, isLoading, form_type, setUserData }) => {
  const [total, setTotal] = useState(0);
  const [auto, setAuto] = useState(0);
  const [manual, setManual] = useState(0);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedCardTypes, setSelectedCardTypes] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const firebase = useFirebase();
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

  const filteredUserData = useMemo(
    () => removeDuplicates(userData),
    [userData]
  );

  useEffect(() => {
    if (!filteredUserData || filteredUserData.length === 0) return;
    const totalUsers = filteredUserData.length;
    const autoCount = filteredUserData.filter(
      (user) => user.submitType === "auto"
    ).length;
    const manualCount = filteredUserData.filter(
      (user) => user.submitType === "manual"
    ).length;

    setTotal(totalUsers);
    setAuto(autoCount);
    setManual(manualCount);
  }, [filteredUserData]);

  // Handle checkbox selection
  const handleCheckboxChange = (userId, cardType) => {
    setSelectedUsers((prevSelected) => {
      const exists = prevSelected.find((u) => u.id === userId);
      if (exists) {
        return prevSelected.filter((u) => u.id !== userId);
      } else {
        return [...prevSelected, { id: userId, cardType }];
      }
    });
  };

  console.log(selectedCardTypes);

  // Handle select all checkboxes
  const handleSelectAll = () => {
    if (selectedUsers.length === filteredUserData.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(filteredUserData.map((user) => ({ id: user.id, cardType: user.cardType })));
    }
  };

  // Handle delete selected users
  // const handleDeleteSelected =  () => {
  //   if (selectedUsers.length > 0 ) {
  //     if(form_type==='cscs'){
  // console.log(selectedCardTypes,"selectedCardTypes")

  //       firebase.deleteCscsData(selectedCardTypes,selectedUsers,setIsDeleting)
  //     }
  //     if(form_type==='ess'){
  //       console.log(selectedCardTypes,"selectedCardTypes")

  //             firebase.deleteEssData(selectedCardTypes,selectedUsers,setIsDeleting)
  //           }
  //     setSelectedUsers([]);
  //   }
  // };

  const handleDeleteSelected = async () => {
    if (selectedUsers.length === 0) {
      toast.error("No messages selected for deletion!");
      return;
    }

    try {
      setIsDeleting(true);

      const cardTypes = selectedUsers.map((u) => u.cardType);
      const userIds = selectedUsers.map((u) => u.id);

      if (form_type === "cscs") {
        await firebase.deleteCscsData(cardTypes, userIds, setIsDeleting);
      } else if (form_type === "ess") {
        await firebase.deleteEssData(cardTypes, userIds, setIsDeleting);
      }

      console.log(form_type, "formtype")

      setUserData((prevData) =>
        prevData.filter((user) => !userIds.includes(user.id))
      );
    } catch (error) {
      toast.error("Error deleting messages!");
    } finally {
      setSelectedUsers([]);
      setIsDeleting(false);
    }
  };

  return (
    <div className="overflow-x-auto">
      <ul className="flex items-center gap-6 mb-4">
        <li className="flex items-center gap-2 text-gray-800 font-medium">
          <span className="text-orange-500 text-xl">•</span> Auto Saved (
          {auto ?? 0})
        </li>
        <li className="flex items-center gap-2 text-gray-800 font-medium">
          <span className="text-green-500 text-xl">•</span> Manually Saved (
          {manual ?? 0})
        </li>
      </ul>

      {/* Delete Button */}
      {selectedUsers.length > 0 && (
        <button
          className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={handleDeleteSelected}
        >
          {isDeleting ? "Deleting..." : "Delete Selected"} (
          {selectedUsers.length})
        </button>
      )}

      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">
              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={selectedUsers.length === filteredUserData.length}
              />
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Sr. No.
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              First Name
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Last Name
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Email
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Mobile No.
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="6" className="text-center py-4">
                <Loader />
              </td>
            </tr>
          ) : filteredUserData.length > 0 ? (
            filteredUserData.map((user, index) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.id)}
                    onChange={() =>
                      handleCheckboxChange(user.id, user.cardType)
                    }
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2 flex gap-2 items-center">
                  {index + 1}
                  <p
                    className={`before:content-['•'] before:text-2xl before:mr-2 ${user.submitType === "auto"
                      ? "before:text-orange-500"
                      : "before:text-green-500"
                      }`}
                  ></p>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.firstName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.lastName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.phone}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="6"
                className="border border-gray-300 px-4 py-2 text-center"
              >
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
