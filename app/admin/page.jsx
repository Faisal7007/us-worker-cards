"use client"
import React from 'react';
import { FaUserShield, FaSignOutAlt } from 'react-icons/fa';
import { useFirebase } from '../context/Firebase';

const Page = () => {
  const firebase=useFirebase()
  const handleLogout=()=>{
         firebase.logOut();
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-6">
      {/* Admin Card */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        {/* Admin Icon */}
        <FaUserShield className="text-5xl text-gray-800 mb-4 mx-auto" />
        
        {/* Welcome Message */}
        <h1 className="text-2xl font-semibold">Welcome, Admin!</h1>
        <p className="text-gray-600 mt-2">Manage your dashboard with ease.</p>

        {/* Logout Reminder */}
        <div className="mt-6 bg-yellow-100 text-yellow-800 p-3 rounded-lg border border-yellow-300">
          <p className="flex items-center gap-2 text-sm">
            <FaSignOutAlt onClick={handleLogout} className="text-lg cursor-pointer text-yellow-700" />
            Don't forget to <span className="font-medium">log out</span> when you're done!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
