
"use client"
import { usePathname } from 'next/navigation';
import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

const NavFooterCondiRender = () => {
  const pathname = usePathname();

  const adminRoutes = ["/admin", "/admin/settings", "/admin/cscs-applicants-list","/admin/ess-applicants-list","/admin/enquiry-for/cscs","/admin/enquiry-for/ess"];
  // console.log(pathname,'Path Name')

  return !adminRoutes.includes(pathname) ? <Navbar/> : null;
}

export default NavFooterCondiRender
