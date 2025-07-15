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
        className="inline-flex items-center font-semibold py-1 px-0 text-purple_primary hover:after:w-full after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 focus:outline-none media-max-935px:px-0 media-max-1022px:px-0"
      >
        {label}
        <FaAngleDown className="ml-2" />
      </button>

      <div
        className={`transition-all duration-300 overflow-hidden whitespace-nowrap ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } lg:absolute lg:top-[72px] lg:left-0 lg:bg-white lg:text-purple_primary lg:rounded lg:shadow-lg lg:py-2`}
        style={{ visibility: isOpen ? "visible" : "hidden" }}
      >
        {items.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className="block font-semibold px-6 py-2 text-[14px] text-purple_primary hover:bg-purple_primary hover:text-white hover:under line media-max-935px:text-purple_primary media-max-1022px:text-purple_primary"
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
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutsideMobileMenu = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        isMobileMenuOpen // Only on mobile menu open
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideMobileMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMobileMenu);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNavbar(false); // Hide navbar on scroll down
        setIsMobileMenuOpen(false); // Close mobile menu on scroll down
      } else {
        setShowNavbar(true); // Show navbar on scroll up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);




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
      className={`bg-white/90 backdrop-blur fixed min-w-[100vw] top-0 right-0 z-50 shadow-md border-b border-slate-200 transition-transform duration-500 ease-in-out ${showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 lg:px-6">

        <nav className="flex w-full items-center justify-between py-3 lg:py-4 gap-2">


          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/color-logo.png"
              className="cursor-pointer max-h-[70px] w-auto"
              width={120}
              height={120}
              priority
              alt="Logo"
            />
          </Link>

          {/* Contact Info (all screens) */}
          <div className="lg:hidden flex justify-center py-2 border-t border-slate-200 text-[15px] font-medium">
            <div className="flex flex-col items-center text-purple_primary gap-0.5">
              <div className="flex items-center gap-1.5">
                <FaPhoneAlt className="text-purple_primary" />
                <a href="tel:+443030030136" className="hover:underline">
                  +44 3030030136
                </a>
              </div>
              <p className="text-xs text-slate-500">Mon-Sat • 9 AM – 7 PM</p>
            </div>
          </div>

          {/* Contact Info (desktop) */}
          <div className="hidden lg:flex flex-col items-end text-right text-purple_primary font-semibold gap-0.5 text-[16px] lg:text-[17px] xl:text-[18px]">
            <div className="flex items-center gap-1.5">
              <FaPhoneAlt className="text-purple_primary" />
              <a href="tel:+443030030136" className="hover:underline tracking-wide">
                +44 3030030136
              </a>
            </div>
            <p className="text-xs font-normal text-slate-500">Mon-Sat • 9 AM – 7 PM</p>
          </div>

          {/* Menu Toggle */}
          <button
            className="text-purple_primary text-2xl lg:hidden focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>

          {/* Main Nav Links */}
          <div
            ref={mobileMenuRef}
            className={`w-full lg:w-auto lg:flex lg:items-center transition-all duration-500 font-medium ${isMobileMenuOpen
              ? "block absolute top-full left-0 w-full bg-white px-6 py-5 shadow-lg border-t border-slate-200"
              : "hidden"
              } lg:static lg:bg-transparent lg:p-0`}
          >

            <div
              className="flex flex-col lg:flex-row lg:items-center lg:gap-8 gap-4 w-full lg:w-auto text-[17px] lg:text-[18px] xl:text-[19px] tracking-tight"
              ref={dropdownRef}
            >
              <Link
                href="/book-citb-test/default"
                onClick={handleOptionClick}
                className={`relative text-purple_primary font-semibold hover:after:w-full after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 focus:outline-none transition-all ${pathname === "/book-citb-test/default" ? "underline underline-offset-4" : ""
                  }`}
              >
                CITB Test
              </Link>

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

              <Link
                href="/group-booking"
                onClick={handleOptionClick}
                className={`relative text-purple_primary font-semibold hover:after:w-full after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 focus:outline-none transition-all ${pathname === "/group-booking" ? "underline underline-offset-4" : ""
                  }`}
              >
                Group Booking
              </Link>
              <Link
                href="/contact-us"
                onClick={handleOptionClick}
                className={`relative text-purple_primary font-semibold hover:after:w-full after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 focus:outline-none transition-all ${pathname === "/contact-us" ? "underline underline-offset-4" : ""
                  }`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </nav>

        {/* Mobile contact block */}
        {/* <div className="lg:hidden flex justify-center py-2 border-t border-slate-200 text-[15px] font-medium">
          <div className="flex flex-col items-center text-purple_primary gap-0.5">
            <div className="flex items-center gap-1.5">
              <FaPhoneAlt className="text-purple_primary" />
              <a href="tel:+443030030136" className="hover:underline">
                +44 3030030136
              </a>
            </div>
            <p className="text-xs text-slate-500">Mon-Sat • 9 AM – 7 PM</p>
          </div>
        </div> */}

      </div>
    </div>

  );


};

export default Navbar;

