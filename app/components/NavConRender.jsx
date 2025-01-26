
"use client"
import { usePathname } from 'next/navigation';
import React, { useContext } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { UserContext } from '../context-api/UserContext';

const NavFooterCondiRender = () => {
  const pathname = usePathname();
  
          const {viewDetailsId}=useContext(UserContext)
          // console.log(viewDetailsId,"in NavConRen")
  

  const adminRoutes = ["/admin", "/admin/settings", "/admin/cscs-applicants-list","/admin/ess-applicants-list","/admin/enquiry-for/cscs","/admin/enquiry-for/ess","/admin/applicants-list-for/cscs","/admin/applicants-list-for/ess",`/admin/cscs-ess-applicants-details/${viewDetailsId}`,"/admin/citb-applicants-list",`/admin/citb-applicants-details/${viewDetailsId}`,"/admin/health-and-safety-course-applicants",`/admin/health-and-safety-course-applicants-details/${viewDetailsId}`,"/admin/contact-us-list"];
  // console.log(pathname,'Path Name')

  return !adminRoutes.includes(pathname) ? <Navbar/> : null;
}

export default NavFooterCondiRender
