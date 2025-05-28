

"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { FaAngleDown, FaBars, FaPhoneAlt, FaTimes } from "react-icons/fa";


const DropdownMenu = ({ label, items, dropdownOpen, toggleDropdown, handleOptionClick }) => {
  const isOpen = dropdownOpen === label;

  return (
    <div className="relative">
      <button
        onClick={() => toggleDropdown(label)}
        className="inline-flex items-center py-1 px-0 text-white hover:text-gray-300 focus:outline-none media-max-935px:px-0 media-max-1022px:px-0"
      >
        {label}
        <FaAngleDown className="ml-2" />
      </button>

      <div
        className={`transition-all duration-300 overflow-hidden whitespace-nowrap ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } lg:absolute lg:top-[72px] lg:left-0 lg:bg-white lg:text-black lg:rounded lg:shadow-lg lg:py-2`}
        style={{ visibility: isOpen ? "visible" : "hidden" }}
      >
        {items.map((item) => (
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
  );
};


const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  const dropdownRef = useRef(null);
  const pathname = usePathname();


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => (prev === menu ? null : menu));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);

  };


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
    <div
      className={`bg-purple_primary fixed min-w-[100vw] top-0 right-0 z-50 shadow-lg transition-transform duration-500 ease-in-out ${showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 lg:px-4">
        <nav className="flex flex-wrap items-center justify-between py-4 lg:py-6 gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/white-logo.png"
              className="cursor-pointer max-h-[70px] w-auto"
              width={100}
              height={100}
              priority
              alt="Logo"
            />
          </Link>

          {/* Contact Info */}
          <div className="text-white font-bold flex flex-col items-center lg:items-end gap-1">
            <div className="flex gap-2 items-center justify-center cursor-pointer">
              <FaPhoneAlt />
              <a href="tel:+443030030136" className="hover:underline">
                +44 3030030136
              </a>
            </div>
            <p className="text-sm font-normal">Mon-Sat (9 AM to 7 PM)</p>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="text-white text-2xl lg:hidden focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>

          {/* Main Nav Links */}
          <div
            className={`w-full lg:w-auto lg:flex lg:items-center ${isMobileMenuOpen
              ? "block absolute top-24 left-0 w-full sm:h-[5vh] h-fit bg-purple_primary text-white transition-all duration-500 pb-2 pt-6 px-6"
              : "hidden"
              } lg:static lg:bg-transparent lg:p-0`}
          >
            <div className="flex justify-start w-full">
              <div
                className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-4"
                ref={dropdownRef}
              >

                {/* Individual Links */}
                <Link href="/book-citb-test/default" onClick={handleOptionClick}
                  className={`relative text-white hover:after:w-full after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 ${pathname === "/book-citb-test/default" ? "after:w-full underline-offset-2" : ""
                    }`}
                >
                  CITB Test
                </Link>

                {/* Dropdowns - CSCS Cards */}
                <DropdownMenu
                  label="CSCS Cards"
                  items={[
                    { path: "/cscs-green-card", label: "Green Labourer" },
                    { path: "/cscs-blue-card", label: "Blue Skilled" },
                    { path: "/cscs-red-provisional-card", label: "Red Provisional" },
                    { path: "/cscs-gold-advanced-craft-card", label: "Gold Advanced Craft" },
                    { path: "/cscs-gold-supervisor-card", label: "Gold Supervisor" },
                    { path: "/cscs-black-manager-card", label: "Black Manager" },
                    { path: "/cscs-card-types", label: "All CSCS Cards" },
                  ]}
                  dropdownOpen={dropdownOpen}
                  toggleDropdown={toggleDropdown}
                  handleOptionClick={handleOptionClick}
                />

                {/* Dropdowns - ESS Cards */}
                <DropdownMenu
                  label="ESS Cards"
                  items={[
                    { path: "/ess-card/green", label: "Green Card" },
                    { path: "/ess-card/blue-skilled", label: "Blue Skilled Card" },
                    { path: "/ess-card/red-trainee", label: "Red Trainee Card" },
                    { path: "/ess-card/gold-advanced", label: "Gold Advanced Card" },
                    { path: "/ess-card/gold-supervisor", label: "Gold Supervisor Card" },
                    { path: "/ess-card/manager", label: "Manager Card" },
                    { path: "/ess-card-types", label: "All ESS Cards" },
                  ]}
                  dropdownOpen={dropdownOpen}
                  toggleDropdown={toggleDropdown}
                  handleOptionClick={handleOptionClick}
                />

                {/* Dropdowns - Construction Courses */}
                <DropdownMenu
                  label="Construction Courses"
                  items={[
                    { path: "/health-and-safety-awareness", label: "Health & Safety Awareness" },
                    { path: "/nvq-level-2", label: "NVQs" },
                  ]}
                  dropdownOpen={dropdownOpen}
                  toggleDropdown={toggleDropdown}
                  handleOptionClick={handleOptionClick}
                />

                {/* Other Links */}
                <Link
                  href="/group-booking"
                  className={`relative text-white hover:after:w-full after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 ${pathname === "/group-booking" ? "after:w-full underline-offset-2" : ""
                    }`}
                  onClick={handleOptionClick}
                >
                  Group Booking
                </Link>
                <Link
                  href="/contact-us"
                  className={`relative text-white hover:after:w-full after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 ${pathname === "/contact-us" ? "after:w-full underline-offset-2" : ""
                    }`}
                  onClick={handleOptionClick}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );

};

export default Navbar;

