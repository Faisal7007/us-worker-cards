"use client";
import React from "react";
import { FaUserShield, FaSignOutAlt } from "react-icons/fa";
import { useFirebase } from "../context/Firebase";

const Page = () => {
  const firebase = useFirebase();

  const handleLogout = () => {
    firebase.logOut();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800 px-4">
      
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-md text-center">
        
        <FaUserShield className="text-5xl text-gray-800 mb-4 mx-auto" />
        
        <h1 className="text-2xl font-semibold">Welcome, Admin!</h1>
        <p className="text-gray-600 mt-2">Manage your dashboard with ease.</p>

        
        <div className="mt-6 bg-yellow-100 text-gray-800 p-3 rounded-lg border border-gray-300 flex items-center justify-center gap-2">
          <FaSignOutAlt
            onClick={handleLogout}
            className="text-lg cursor-pointer text-gray-700 hover:text-gray-600 transition-transform transform hover:scale-110"
          />
          <p className="text-sm">Don't forget to <span className="font-medium">log out</span> when you're done!</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
