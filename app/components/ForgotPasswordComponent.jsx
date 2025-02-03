"use client"
import React, { useState } from "react";
import { useFirebase } from "../context/Firebase";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ForgotPasswordComponent = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const firebase=useFirebase()
  const router=useRouter()
  

  const handleForgotPassword = () => {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    firebase.ForgotPassword(email, setIsSubmitting);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded shadow">
    <div className="flex justify-between items-center mb-6">

      <h2 className="text-xl font-bold mb-4">Change Password</h2>
      <button onClick={() => (router.back())} className='bg-gray-800 rounded-2xl text-white px-4 py-2'>Go Back</button>
    </div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg"
        placeholder="Enter your email"
        required
      />
      <button
        onClick={handleForgotPassword}
        className={`w-full mt-4 px-4 py-2 text-white font-bold rounded-lg ${
          isSubmitting ? "bg-gray-500 cursor-not-allowed" : "bg-gray-800 hover:bg-gray-900"
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Reset Email"}
      </button>
    </div>
  );
};

export default ForgotPasswordComponent;
