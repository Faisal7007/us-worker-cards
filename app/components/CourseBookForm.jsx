"use client";
import React, { useEffect, useRef, useState } from "react";
import { MdArrowRight } from "react-icons/md";
import CardForList from "./CardForList";
import { useFirebase } from "../context/Firebase";
import { ToastContainer } from "react-toastify";

const CscsForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    middleName: "",
    lastName: "",
    assessmentDate: "",
    nationalInsuranceNumber: "",
    phoneNumber: "",
    email: "",
    applicationMode: "",
    location: ""
  });

  const [agreed, setAgreed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false)
  const dropdownRef = useRef(null);
  const firestore = useFirebase()



  const reset = () => {
    setFormData({
      title: "",
      firstName: "",
      middleName: "",
      lastName: "",
      assessmentDate: "",
      nationalInsuranceNumber: "",
      phoneNumber: "",
      email: "",
      applicationMode: "",
      location: ""
    })
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setAgreed(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    firestore.applyForHealthAndSafetyCourse(formData.title, formData.firstName, formData.middleName, formData.lastName, formData.nationalInsuranceNumber, formData.phoneNumber, formData.email, formData.applicationMode, formData.assessmentDate, formData.location, setIsSubmitting)
    reset()
  };


  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false); // Close dropdown if clicked outside
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const firstName = params.get("firstName");
    const lastName = params.get("lastName");
    const phoneNumber = params.get("phoneNumber");
    const email = params.get("email");

    setFormData(prev => ({
      ...prev,
      firstName,
      lastName,
      email,
      phoneNumber
    }));
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-full mx-auto rounded space-y-6"
    >
      <ToastContainer />

      <div className="pt-6">
        <h2 className="text-[25px] bg-purple_primary text-white py-4 font-bold mb-6 text-center">
          Book Your Course
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-4">
          <div>
            <label htmlFor="title" className="block text-md font-medium">
              Title
            </label>
            <select
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border border-gray-500 py-4 px-3 mb-4"
              required
            >
              <option value="" disabled>
                Please select an item in the list
              </option>
              <option value="Mr">Mr</option>
              <option value="Ms">Ms</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Dr">Dr</option>
            </select>
          </div>

          <div>
            <label htmlFor="firstName" className="block text-md font-medium">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border border-gray-500 py-4 px-3"
              required
            />
          </div>
          <div>
            <label htmlFor="middleName" className="block text-md font-medium">
              Middle Name
            </label>
            <input
              type="text"
              id="middleName"
              name="middleName"
              placeholder="Middle Name"
              value={formData.middleName}
              onChange={handleChange}
              className="w-full border border-gray-500 py-4 px-3"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-md font-medium">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border border-gray-500 py-4 px-3"
              required
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <label
              htmlFor="nationalInsuranceNumber"
              className="block text-md font-medium"
            >
              National Insurance Number (Optional)
            </label>
            <input
              type="text"
              id="nationalInsuranceNumber"
              name="nationalInsuranceNumber"
              placeholder="e.g. QQ 123456 C"
              value={formData.nationalInsuranceNumber}
              onChange={handleChange}
              className="w-full border border-gray-500 py-4 px-3 mb-4"
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-4">
          <div>
            <label htmlFor="phoneNumber" className="block text-md font-medium">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="e.g. 2080995236"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full border border-gray-500 py-4 px-3 mb-4"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-md font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="yourname@domain.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-500 py-4 px-3 mb-4"
              required
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Card Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-4">

          <div>
            <label className="block text-md font-medium mb-4">
              How would you like to take the course
            </label>
            <div className="flex items-center space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="applicationMode"
                  value="Online"
                  checked={formData.applicationMode === "Online"}
                  onChange={handleChange}
                  className="w-5 h-5 accent-purple_primary"
                  required
                />
                <span className="ml-2">Online</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="applicationMode"
                  value="Offline"
                  checked={formData.applicationMode === "Offline"}
                  onChange={handleChange}
                  className="w-5 h-5 accent-purple_primary"
                />
                <span className="ml-2">Offline</span>
              </label>
            </div>
          </div>


          <div>
            <label htmlFor="assessmentDate" className="block text-md font-medium">
              Preferred Assessment Date
            </label>
            <input
              type="date"
              id="assessmentDate"
              name="assessmentDate"
              value={formData.assessmentDate}
              onChange={handleChange}
              className="w-full border border-gray-500 py-4 px-3 mb-4"
              required
            />
          </div>

        </div>
        {
          formData?.applicationMode === "Offline" ? <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-4">
            <div>
              <label htmlFor="location" className="block text-md font-medium">
                Course Location
              </label>
              <select
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full border border-gray-500 py-4 px-3 mb-4"
                required
              >
                <option value="" disabled>
                  Please select the test location
                </option>
                <option value="Location 1">Main Hurak Center</option>
                <option value="Location 2">Birmingham Hurak</option>
                {/* <option value="Location 3">Location 3</option> */}
              </select>
            </div>
          </div> : ''
        }

      </div>

      <div className="flex items-center mb-4">
        <input
          id="agreeCheckbox"
          type="checkbox"
          onChange={handleCheckboxChange}
          className="w-5 h-5 accent-purple_primary rounded focus:ring-purple_primary"
        />
        <label
          htmlFor="agreeCheckbox"
          className="ml-2 text-sm text-gray-700 select-none media-max-545px:text-[12px]"
        >
          I agree to the Terms and Conditions and Privacy Policy
        </label>
      </div>
      <button
        type="submit"
        disabled={!agreed}
        className={`inline-flex items-center justify-center w-fit px-4 py-2 rounded media-max-545px:text-[14px]  ${agreed
          ? "bg-purple_primary text-white hover:bg-[#84286a]"
          : "bg-[#854c75] text-white cursor-not-allowed"
          }`}
      >
        <span className="ml-2">{isSubmitting ? "Submitting..." : "Move Forward"}</span>
        <MdArrowRight className="size-6" />
      </button>
    </form>
  );
};

export default CscsForm;
