"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { FaAngleDown, FaPhoneVolume } from "react-icons/fa6";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => (prev === menu ? null : menu));
  };

  const handleOptionClick = () => {
    setDropdownOpen(null); // Close dropdown on option click
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(null); // Close dropdown if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-purple_primary sticky top-0 z-50">

    <div className="max-w-[1440px] mx-auto ">

    <nav className="bg-purple_primary text-white py-6">
      <div className=" px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left Part */}
          <div className="flex justify-between items-center">
          <Link href="/">
        <Image src={"/new-logo-white.png"} width={100} height={100} alt="Logo" className="mr-12" />
          </Link>
            
            <div className="flex flex-col gap-4">
              <span className="text-sm inline-flex items-center">
                <FaPhoneVolume className="size-5" />
                <span className="ml-2 text-[25px] font-bold">+91 5678901230</span>
              </span>
              <span className="text-xs mt-1 text-center">Mon-Sat (9 AM-7 PM)</span>
            </div>
          </div>

          {/* Right Part */}
          <div
            className="flex items-end space-x-6 font-semibold"
            ref={dropdownRef} // Attach ref to the dropdown container
          >
            {/* CITB Test */}
            <Link href="/citb-test" className="hover:text-gray-300">
              CITB Test
            </Link>

            {/* CSCS Cards */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("CSCS")}
                className="inline-flex items-center hover:text-gray-300 focus:outline-none"
              >
                <span>CSCS Cards</span>
                <FaAngleDown className="ml-2" />
              </button>
              {dropdownOpen === "CSCS" && (
                <div className="absolute top-[60px] bg-white text-black rounded shadow-lg mt-2 py-2">
                  <Link
                    href="/cscs-green-card"
                    onClick={handleOptionClick}
                    className="block px-4 py-2 whitespace-nowrap hover:bg-gray-300"
                  >
                    Green Labourer
                  </Link>
                  <Link
                    href="cscs-blue-card"
                    onClick={handleOptionClick}
                    className="block px-4 py-2 whitespace-nowrap hover:bg-gray-300"
                  >
                    Blue Skilled
                  </Link>
                  <Link
                    href="cscs-red-provisional-card"
                    onClick={handleOptionClick}
                    className="block px-4 py-2 whitespace-nowrap hover:bg-gray-300"
                  >
                    Red Provisional
                  </Link>
                  <Link
                    href="/cscs-gold-advanced-craft-card"
                    onClick={handleOptionClick}
                    className="block px-4 py-2 whitespace-nowrap hover:bg-gray-300"
                  >
                    Gold Advanced Craft
                  </Link>
                  <Link
                    href="/cscs-gold-supervisor-card"
                    onClick={handleOptionClick}
                    className="block px-4 py-2 whitespace-nowrap hover:bg-gray-300"
                  >
                    Gold Supervisor
                  </Link>
                  <Link
                    href="/cscs-black-manager-card"
                    onClick={handleOptionClick}
                    className="block px-4 py-2 whitespace-nowrap hover:bg-gray-300"
                  >
                    Black Manager
                  </Link>
                  <Link
                    href="/cscs-card-types"
                    onClick={handleOptionClick}
                    className="block px-4 py-2 whitespace-nowrap hover:bg-gray-300"
                  >
                    All CSCS Cards
                  </Link>
                </div>
              )}
            </div>

            {/* ESS Cards */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("ESS")}
                className="inline-flex items-center hover:text-gray-300 focus:outline-none"
              >
                <span>ESS Cards</span>
                <FaAngleDown className="ml-2" />
              </button>
              {dropdownOpen === "ESS" && (
                <div className="absolute top-[60px] bg-white text-black rounded shadow-2xl mt-2 py-2">
                  <Link
                    href="/"
                    onClick={handleOptionClick}
                    className="block px-4 py-2 whitespace-nowrap hover:bg-gray-300"
                  >
                    Green Card
                  </Link>
                  <Link
                    href="/"
                    onClick={handleOptionClick}
                    className="block px-4 py-2 whitespace-nowrap hover:bg-gray-300"
                  >
                    Blue Card
                  </Link>
                  <Link
                    href="/"
                    onClick={handleOptionClick}
                    className="block px-4 py-2 whitespace-nowrap hover:bg-gray-300"
                  >
                    APQ Card
                  </Link>
                  <Link
                    href="/"
                    onClick={handleOptionClick}
                    className="block px-4 py-2 whitespace-nowrap hover:bg-gray-300"
                  >
                    Manager Card
                  </Link>
                  <Link
                    href="/"
                    onClick={handleOptionClick}
                    className="block px-4 py-2 whitespace-nowrap hover:bg-gray-300"
                  >
                    PQP Card
                  </Link>
                  <Link
                    href="/"
                    onClick={handleOptionClick}
                    className="block px-4 py-2 whitespace-nowrap hover:bg-gray-300"
                  >
                    Red Trainee Card
                  </Link>
                  <Link
                    href="/"
                    onClick={handleOptionClick}
                    className="block px-4 py-2 whitespace-nowrap hover:bg-gray-300"
                  >
                    Gold Advanced Card
                  </Link>
                  <Link
                    href="/"
                    onClick={handleOptionClick}
                    className="block px-4 py-2 whitespace-nowrap hover:bg-gray-300"
                  >
                    Gold Supervisor Card
                  </Link>
                </div>
              )}
            </div>

            {/* Construction Courses */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("Construction")}
                className="inline-flex items-center hover:text-gray-300 focus:outline-none"
              >
                <span>Construction Courses</span>
                <FaAngleDown className="ml-2" />
              </button>
              {dropdownOpen === "Construction" && (
                <div className="absolute top-[60px] bg-white text-black rounded shadow-lg mt-2 py-2">
                  <Link
                    href="/health-and-safety-awareness"
                    onClick={handleOptionClick}
                    className="block px-4 py-2 whitespace-nowrap hover:bg-gray-300"
                  >
                    Health & Safety Awareness
                  </Link>
                  <Link
                    href="/nvq-level-2"
                    onClick={handleOptionClick}
                    className="block px-4 py-2 whitespace-nowrap hover:bg-gray-300"
                  >
                    NVQ Level 2
                  </Link>
                </div>
              )}
            </div>

            <Link href="/group-booking" className="hover:text-gray-300">
              Group Booking
            </Link>

            <Link href="/contact-us" className="hover:text-gray-300">
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
