"use client";
// /app/admin/layout.js
import Link from "next/link";
import { useEffect, useState } from "react";
import { FirebaseProvider, useFirebase } from "../context/Firebase";
import Sidebar from "./components/Sidebar";
// import Login from "../login/page";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Login from "./components/Login";

const AdminLayout = ({ children }) => {
  const [user2, setUser2] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const firebase = useFirebase();

  useEffect(() => {
    firebase.LoginUser();
    firebase.onAuthChange(user2, setUser2);
  }, []);
  console.log(user2, "User 2");
  
  if (user2 === "hello") {
    return (
      <>
        <FirebaseProvider>
          <Login/>
        </FirebaseProvider>
      </>
    );
  }

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="bg-gray-100">

    <FirebaseProvider>
      <div className="flex h-screen max-w-[1540px] mx-auto">
        {/* Sidebar */}
        <aside
          className={`fixed top-0 left-0 h-full bg-gray-800 text-white z-50 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform lg:relative lg:translate-x-0 lg:w-1/5`}
        >
          <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-6 lg:w-4/5">
          {/* Toggle Button */}
          <button
            className="  lg:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <span className="size-10"><RxCross2 className="size-5"/></span> : <GiHamburgerMenu/>}
          </button>
          {children}
        </main>

        {/* Overlay for Sidebar (Visible on Small Screens) */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={toggleSidebar}
          ></div>
        )}
      </div>
    </FirebaseProvider>
    </div>

  );
};

export default AdminLayout;
