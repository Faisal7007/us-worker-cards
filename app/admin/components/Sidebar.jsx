import Link from 'next/link';
import { IoHomeOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { RiContactsBook3Line} from "react-icons/ri";
import { useFirebase } from '@/app/context/Firebase';
import { Tooltip } from 'react-tooltip'
import { CiCircleList, CiLogout } from "react-icons/ci";
import { LuNotebookTabs } from "react-icons/lu";
import { FaUsersRectangle } from "react-icons/fa6";
import { AiOutlineHome } from "react-icons/ai";

import { useState } from 'react';
import LogoutModal from './LogoutModal';
import { FaList, FaListUl, FaRegListAlt } from 'react-icons/fa';

const Sidebar = ({isSidebarOpen,setIsSidebarOpen}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const firebase = useFirebase()
  const handleLogout = () => {
    // firebase.logOut()
    setIsModalOpen(true)
  }

  const confirmDelete = async () => {

    try {
      await firebase.logOut();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };


  const closeModal = () => {
    setIsModalOpen(false)
  };
  return (
    <div className=" vertical-scrollbar w-full  bg-gray-800 text-white flex flex-col py-5 px-2 space-y-4">
      <div className='flex items-center mt-8'>
        <Tooltip id="logout" place="right" style={{
          backgroundColor: 'red',
          color: 'white',
          borderRadius: '5px',
          padding: '10px',
        }} />
        <h2 className="text-[26px] font-bold ml-2">Admin Dashboard</h2>
        <CiLogout  data-tooltip-id="logout" data-tooltip-content="Logout" onClick={handleLogout} className='text-xl ml-10 cursor-pointer'/>
      </div>
      <nav>
        <div className="space-y-2">
          <div onClick={()=>{setIsSidebarOpen(!isSidebarOpen)}}>
            <Link href="/admin"  className="hover:bg-gray-700 p-2 rounded flex items-center gap-2">
              <AiOutlineHome className="text-xl"/> {/* Adjust icon size as needed */}
              <span className='text-[18px] '>Home</span>
            </Link>
          </div>

          <div onClick={()=>{setIsSidebarOpen(!isSidebarOpen)}}>
            <Link href="/admin/enquiry-for/cscs" className="hover:bg-gray-700 p-2 rounded flex items-center gap-2">
              <FaRegListAlt className="text-xl" />
              <span className='text-[18px] '>Enquiry For Cscs Card</span>
            </Link>
          </div>

          <div onClick={()=>{setIsSidebarOpen(!isSidebarOpen)}}>
            <Link href="/admin/enquiry-for/ess" className="hover:bg-gray-700 p-2 rounded flex items-center gap-2">
              <FaRegListAlt className="text-xl"/>
              <span className='text-[18px] '>Enquiry For Ess Card</span>
            </Link>
          </div>

          
          <div onClick={()=>{setIsSidebarOpen(!isSidebarOpen)}}>
            <Link href="/admin/applicants-list-for/cscs" className="hover:bg-gray-700 p-2 rounded flex items-center gap-2">
              <FaListUl className="text-xl" />
              <span className='text-[18px]'>Cscs Applicants List</span>
            </Link>
          </div>

          <div onClick={()=>{setIsSidebarOpen(!isSidebarOpen)}}>
            <Link href="/admin/applicants-list-for/ess" className="hover:bg-gray-700 p-2 rounded flex items-center gap-2">
              <FaListUl className="text-xl" />
              <span className='text-[18px]'>Ess Applicants List</span>
            </Link>
          </div>

          <div onClick={()=>{setIsSidebarOpen(!isSidebarOpen)}}>
            <Link href="/admin/citb-applicants-list" className="hover:bg-gray-700 p-2 rounded flex items-center gap-2">
              <FaUsersRectangle className="text-xl" />
              <span className='text-[18px]'>CITB Applicants List</span>
            </Link>
          </div>

          <div onClick={()=>{setIsSidebarOpen(!isSidebarOpen)}}>
            <Link href="/admin/health-and-safety-course-applicants" className="hover:bg-gray-700 p-2 rounded flex items-center gap-2">
              <LuNotebookTabs className="text-xl" />
              <span className='text-[18px]'>Course Booking List</span>
            </Link>
          </div>

          <div onClick={()=>{setIsSidebarOpen(!isSidebarOpen)}}>
            <Link href="/admin/contact-us-list" className="hover:bg-gray-700 p-2 rounded flex items-center gap-2">
              <RiContactsBook3Line className="text-xl" />
              <span className='text-[18px]'>Contact-Us Messages</span>
            </Link>
          </div>

          <div onClick={()=>{setIsSidebarOpen(!isSidebarOpen)}}>
            <Link href="/admin/settings" className="hover:bg-gray-700 p-2 rounded flex items-center gap-2">
              <IoSettingsOutline className="text-xl" /> {/* Adjust icon size as needed */}
              <span className='text-[18px]'>Settings</span>
            </Link>
          </div>

        </div>
        <LogoutModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmDelete}
      />
      </nav>
   
    </div>
  );
};

export default Sidebar;
