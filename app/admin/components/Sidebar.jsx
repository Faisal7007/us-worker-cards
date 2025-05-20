"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoSettingsOutline } from "react-icons/io5";
import { RiContactsBook3Line } from "react-icons/ri";
import { useFirebase } from '@/app/context/Firebase';
import { Tooltip } from 'react-tooltip';
import { CiLogout } from "react-icons/ci";
import { LuNotebookTabs } from "react-icons/lu";
import { FaUsersRectangle } from "react-icons/fa6";
import { AiOutlineHome } from "react-icons/ai";
import { useState } from 'react';
import LogoutModal from './LogoutModal';
import { FaListUl, FaRegListAlt } from 'react-icons/fa';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const firebase = useFirebase();
  const pathname = usePathname()

  const handleLogout = () => {
    setIsModalOpen(true);
  };

  const confirmDelete = async () => {
    try {
      await firebase.logOut();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const isActive = (path) => pathname === path;
  return (
    <div className="vertical-scrollbar w-full bg-gray-800 text-white flex flex-col py-5 px-2 space-y-4">
      <div className='flex items-center mt-8'>
        <Tooltip id="logout" place="right" style={{
          backgroundColor: 'red',
          color: 'white',
          borderRadius: '5px',
          padding: '10px',
        }} />
        <h2 className="text-[26px] font-bold ml-2">Admin Dashboard</h2>
        <CiLogout data-tooltip-id="logout" data-tooltip-content="Logout" onClick={handleLogout} className='text-xl ml-10 cursor-pointer' />
      </div>
      <nav>
        <div className="space-y-2">
          <div onClick={() => { setIsSidebarOpen(!isSidebarOpen) }}>
            <Link href="/admin" className={`p-2 rounded flex items-center gap-2 ${isActive('/admin') ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
              <AiOutlineHome className="text-xl" />
              <span className='text-[18px]'>Home</span>
            </Link>
          </div>

          <div onClick={() => { setIsSidebarOpen(!isSidebarOpen) }}>
            <Link href="/admin/enquiry-for/cscs" className={`p-2 rounded flex items-center gap-2 ${isActive('/admin/enquiry-for/cscs') ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
              <FaRegListAlt className="text-xl" />
              <span className='text-[18px]'>Enquiry For Cscs Card</span>
            </Link>
          </div>

          <div onClick={() => { setIsSidebarOpen(!isSidebarOpen) }}>
            <Link href="/admin/enquiry-for/ess" className={`p-2 rounded flex items-center gap-2 ${isActive('/admin/enquiry-for/ess') ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
              <FaRegListAlt className="text-xl" />
              <span className='text-[18px]'>Enquiry For Ess Card</span>
            </Link>
          </div>

          <div onClick={() => { setIsSidebarOpen(!isSidebarOpen) }}>
            <Link href="/admin/applicants-list-for/cscs" className={`p-2 rounded flex items-center gap-2 ${isActive('/admin/applicants-list-for/cscs') ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
              <FaListUl className="text-xl" />
              <span className='text-[18px]'>Cscs Applicants List</span>
            </Link>
          </div>

          <div onClick={() => { setIsSidebarOpen(!isSidebarOpen) }}>
            <Link href="/admin/applicants-list-for/ess" className={`p-2 rounded flex items-center gap-2 ${isActive('/admin/applicants-list-for/ess') ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
              <FaListUl className="text-xl" />
              <span className='text-[18px]'>Ess Applicants List</span>
            </Link>
          </div>

          <div onClick={() => { setIsSidebarOpen(!isSidebarOpen) }}>
            <Link href="/admin/citb-applicants-list" className={`p-2 rounded flex items-center gap-2 ${isActive('/admin/citb-applicants-list') ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
              <FaUsersRectangle className="text-xl" />
              <span className='text-[18px]'>CITB Applicants List</span>
            </Link>
          </div>

          <div onClick={() => { setIsSidebarOpen(!isSidebarOpen) }}>
            <Link href="/admin/nvq-list" className={`p-2 rounded flex items-center gap-2 ${isActive('/admin/nvq-list') ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
              <FaUsersRectangle className="text-xl" />
              <span className='text-[18px]'>NVQ List</span>
            </Link>
          </div>

          <div onClick={() => { setIsSidebarOpen(!isSidebarOpen) }}>
            <Link href="/admin/health-and-safety-course-applicants" className={`p-2 rounded flex items-center gap-2 ${isActive('/admin/health-and-safety-course-applicants') ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
              <LuNotebookTabs className="text-xl" />
              <span className='text-[18px]'>Course Booking List</span>
            </Link>
          </div>

          <div onClick={() => { setIsSidebarOpen(!isSidebarOpen) }}>
            <Link href="/admin/group-booking-list" className={`p-2 rounded flex items-center gap-2 ${isActive('/admin/group-booking-list') ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
              <LuNotebookTabs className="text-xl" />
              <span className='text-[18px]'>Group Booking List</span>
            </Link>
          </div>

          <div onClick={() => { setIsSidebarOpen(!isSidebarOpen) }}>
            <Link href="/admin/contact-us-list" className={`p-2 rounded flex items-center gap-2 ${isActive('/admin/contact-us-list') ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
              <RiContactsBook3Line className="text-xl" />
              <span className='text-[18px]'>Contact-Us Messages</span>
            </Link>
          </div>

          <div onClick={() => { setIsSidebarOpen(!isSidebarOpen) }}>
            <Link href="/admin/settings" className={`p-2 rounded flex items-center gap-2 ${isActive('/admin/settings') ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
              <IoSettingsOutline className="text-xl" />
              <span className='text-[18px]'>Settings</span>
            </Link>
          </div>
        </div>
        <LogoutModal isOpen={isModalOpen} onClose={closeModal} onConfirm={confirmDelete} />
      </nav>
    </div>
  );
};

export default Sidebar;
