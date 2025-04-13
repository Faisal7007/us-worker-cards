

"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { FaAngleDown, FaBars, FaPhoneAlt, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();
  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => (prev === menu ? null : menu));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
   
  };

  // useEffect(()=>{
  //   if (isMobileMenuOpen) {
  //     document.body.classList.add("no-scroll");
  //   } else {
  //     document.body.classList.remove("no-scroll");
  //   }

  // },[isMobileMenuOpen])

  const handleOptionClick = () => {
    setDropdownOpen(null);
    setIsMobileMenuOpen(false);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  

  return (
    <div className="bg-purple_primary fixed min-w-[100vw] top-0 right-0 z-50 shadow-lg">
      <div className="max-w-[1440px] mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          
          <Link href="/" className="flex items-center">
            <Image
              src={"/white-logo.png"}
              className="cursor-pointer max-h-[80px] w-auto h-auto"
              width={100}
              height={100}
              priority
              alt="Logo"
            />
          </Link>
          <div className="text-white font-bold cursor-pointer flex justify-center gap-2 items-center "><FaPhoneAlt/><span>+91 7483939335</span></div>

          
          <button
            className="text-white text-2xl lg:hidden focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>

         
          
          <div
            className={` flex justify-center media-max-935px:pt-10 media-max-1022px:pt-10  lg:flex lg:items-center lg:space-x-8 ${
              isMobileMenuOpen
                ? "block absolute top-24 left-0 w-full media-max-935px:h-[100vh] media-max-1022px:h-[100vh]  bg-purple_primary  text-white transition-all duration-500 "
                : "hidden"
            } lg:static lg:bg-transparent lg:w-auto`}
          >
            <div
              className="flex flex-col lg:flex-row lg:items-center lg:space-x-8"
              ref={dropdownRef}
            >

<Link
  href="/book-citb-test/default"
  className={`relative  text-white after:content-[''] after:absolute 
    after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] 
    after:bg-current after:transition-all after:duration-300 
    hover:after:w-full media-max-935px:hover:after:w-[70px] media-max-1022px:hover:after:w-[70px] media-max-935px:mb-2 media-max-1022px:mb-2 ${
      pathname === "/book-citb-test/default" ? "after:w-full media-max-935px:after:w-[70px] media-max-1022px:after:w-[70px] underline-offset-2" : ""
    }`}
  onClick={handleOptionClick}
>
  CITB Test
</Link>

              {/* CSCS Cards */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("CSCS")}
                  className="inline-flex items-center py-2 px-4 text-white hover:text-gray-300 focus:outline-none media-max-935px:px-0 media-max-1022px:px-0 "
                >
                  CSCS Cards
                  <FaAngleDown className="ml-2" />
                </button>
                <div
                  className={`transition-all text-purple_primary  whitespace-nowrap duration-300 overflow-hidden ${
                    dropdownOpen === "CSCS" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  } lg:absolute lg:top-[72px] lg:left-0 lg:bg-white lg:text-black lg:rounded lg:shadow-lg lg:py-2`}
                  style={{ visibility: dropdownOpen === "CSCS" ? "visible" : "hidden"}}
                >
                  {[
                    { path: "/cscs-green-card", label: "Green Labourer" },
                    { path: "/cscs-blue-card", label: "Blue Skilled" },
                    { path: "/cscs-red-provisional-card", label: "Red Provisional" },
                    { path: "/cscs-gold-advanced-craft-card", label: "Gold Advanced Craft" },
                    { path: "/cscs-gold-supervisor-card", label: "Gold Supervisor" },
                    { path: "/cscs-black-manager-card", label: "Black Manager" },
                    { path: "/cscs-card-types", label: "All CSCS Cards" },
                  ].map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="block font-semibold px-6 py-2 text-[14px] text-black hover:bg-purple_primary hover:text-white media-max-935px:text-white media-max-1022px:text-white"
                      onClick={handleOptionClick}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* ESS Cards */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("ESS")}
                  className="inline-flex items-center py-2 px-4 text-white hover:text-gray-300 focus:outline-none media-max-935px:px-0 media-max-1022px:px-0"
                >
                  ESS Cards
                  <FaAngleDown className="ml-2" />
                </button>
                <div
                  className={`transition-all whitespace-nowrap duration-300 overflow-hidden ${
                    dropdownOpen === "ESS" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  } lg:absolute lg:top-[72px] lg:left-0 lg:bg-white lg:text-black lg:rounded lg:shadow-lg lg:py-2`}
                  style={{ visibility: dropdownOpen === "ESS" ? "visible" : "hidden" }}
                >
                  {[
                    { path: "/ess-card/green", label: "Green Card" },
                    { path: "/ess-card/blue-skilled", label: "Blue Skilled Card" },
                    { path: "/ess-card/red-trainee", label: "Red Trainee Card" },
                    { path: "/ess-card/gold-advanced", label: "Gold Advanced Card" },
                    { path: "/ess-card/gold-supervisor", label: "Gold Supervisor Card" },
                    { path: "/ess-card/manager", label: "Manager Card" },
                    { path: "/ess-card-types", label: "All ESS Cards" },
                  ].map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="block font-semibold px-6 py-2 text-[14px] text-black hover:bg-purple_primary hover:text-white media-max-935px:text-white media-max-1022px:text-white"
                      onClick={handleOptionClick}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="relative">
                <button
                  onClick={() => toggleDropdown("CC")}
                  className="inline-flex items-center py-2 px-4 text-white hover:text-gray-300 focus:outline-none media-max-935px:px-0 media-max-1022px:px-0"
                >
                 Construction Courses
                  <FaAngleDown className="ml-2"/>
                </button>
                <div
                  className={`transition-all whitespace-nowrap duration-300 overflow-hidden ${
                    dropdownOpen === "CC" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  } lg:absolute lg:top-[72px] lg:left-0 lg:bg-white lg:text-black lg:rounded lg:shadow-lg lg:py-2`}
                  style={{ visibility: dropdownOpen === "CC" ? "visible" : "hidden" }}
                >
                  {[
                    { path: "/health-and-safety-awareness", label: "Health & Safety Awareness" },
                    { path: "/nvq-level-2", label: "NVQ Level 2" },
                  
                  ].map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="block font-semibold px-6 py-2 text-[14px] text-black hover:bg-purple_primary hover:text-white media-max-935px:text-white media-max-1022px:text-white"
                      onClick={handleOptionClick}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other Links */}
              <Link
                href="/group-booking"
                className={`relative media-max-935px:mb-4 media-max-1022px:mb-4 text-white after:content-[''] after:absolute 
    after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] 
    after:bg-current after:transition-all after:duration-300 
    hover:after:w-full media-max-935px:hover:after:w-[110px] media-max-1022px:hover:after:w-[110px] ${
      pathname === "/group-booking" ? "after:w-full media-max-935px:after:w-[110px] media-max-1022px:after:w-[110px] underline-offset-2" : ""
    }`}
                onClick={handleOptionClick}
              >
                Group Booking
              </Link>
              <Link
                href="/contact-us"
                className={`relative  text-white after:content-[''] after:absolute 
    after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] 
    after:bg-current after:transition-all after:duration-300 
    hover:after:w-full media-max-935px:hover:after:w-[10px] ${
      pathname === "/contact-us" ? "after:w-full media-max-935px:after:w-[80px]  media-max-1022px:after:w-[80px] underline-offset-2" : ""
    }`}
                onClick={handleOptionClick}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

