"use client"
import React, { useState } from "react";
import { getAuth, updateEmail, sendEmailVerification, updatePassword } from "firebase/auth";

const ChangeEmailPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpdate = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      setMessage("No user is logged in.");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      // Update Email with Verification
      if (email) {
        await updateEmail(user, email);
        await sendEmailVerification(user);
        setMessage("Verification email sent. Please verify your new email to complete the update.");
        setIsLoading(false);
        return; // Stop execution to avoid simultaneous password update
      }

      // Update Password
      if (password) {
        await updatePassword(user, password);
        setMessage("Password updated successfully!");
      }
    } catch (error) {
      console.error("Error updating email/password:", error);
      setMessage(error.message || "An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Change Email and Password</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="email">
          New Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
          placeholder="Enter new email"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="password">
          New Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
          placeholder="Enter new password"
        />
      </div>
      <button
        onClick={handleUpdate}
        className={`w-full px-4 py-2 text-white font-bold rounded-lg ${
          isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
        }`}
        disabled={isLoading}
      >
        {isLoading ? "Updating..." : "Update"}
      </button>
      {message && (
        <p
          className={`mt-4 text-center ${
            message.includes("successfully") || message.includes("Verification")
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default ChangeEmailPassword;
