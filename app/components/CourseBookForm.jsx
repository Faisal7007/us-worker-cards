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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firestore.applyForHealthAndSafetyCourse(formData.title, formData.firstName, formData.middleName, formData.lastName, formData.nationalInsuranceNumber, formData.phoneNumber, formData.email, formData.applicationMode, formData.assessmentDate, formData.location, setIsSubmitting);

      reset();

      // iOS-compatible redirect - use setTimeout to ensure the redirect happens
      setTimeout(() => {
        window.location.replace("https://buy.stripe.com/3cs2a19INbvt6OYcMQ");
      }, 100);
    } catch (error) {
      console.error("Submission error:", error);
    }
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
      className="max-w-3xl mx-auto rounded space-y-6 px-4"
    >
      <ToastContainer />
      <div className="pt-4">
        <h2 className="text-xl bg-purple_primary text-white py-3 font-semibold mb-5 text-center rounded">
          Book Your Course
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">Title</label>
            <select
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full border border-gray-400 py-2 px-3 rounded-md"
            >
              <option value="" disabled>Please select an item in the list</option>
              <option value="Mr">Mr</option>
              <option value="Ms">Ms</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Dr">Dr</option>
            </select>
          </div>

          {["firstName", "middleName", "lastName"].map((id, i) => (
            <div key={id}>
              <label htmlFor={id} className="block text-sm font-medium mb-1">
                {id.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}
              </label>
              <input
                type="text"
                id={id}
                name={id}
                placeholder={id.replace(/([A-Z])/g, " $1")}
                value={formData[id]}
                onChange={handleChange}
                required={id !== "middleName"}
                className="w-full border border-gray-400 py-2 px-3 rounded-md"
              />
            </div>
          ))}

          <div className="md:col-span-2">
            <label htmlFor="nationalInsuranceNumber" className="block text-sm font-medium mb-1">
              National Insurance Number (Optional)
            </label>
            <input
              type="text"
              id="nationalInsuranceNumber"
              name="nationalInsuranceNumber"
              placeholder="e.g. QQ 123456 C"
              value={formData.nationalInsuranceNumber}
              onChange={handleChange}
              className="w-full border border-gray-400 py-2 px-3 rounded-md"
            />
          </div>
        </div>

        <h2 className="text-lg font-semibold mb-4 text-gray-700">Contact Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
          {[
            { id: "phoneNumber", type: "text", placeholder: "e.g. 2080995236" },
            { id: "email", type: "email", placeholder: "yourname@domain.com" },
          ].map(({ id, type, placeholder }) => (
            <div key={id}>
              <label htmlFor={id} className="block text-sm font-medium mb-1">
                {id === "phoneNumber" ? "Phone Number" : "Email Address"}
              </label>
              <input
                type={type}
                id={id}
                name={id}
                placeholder={placeholder}
                value={formData[id]}
                onChange={handleChange}
                required
                className="w-full border border-gray-400 py-2 px-3 rounded-md"
              />
            </div>
          ))}
        </div>

        <h2 className="text-lg font-semibold mb-4 text-gray-700">Card Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
          <div>
            <label className="block text-sm font-medium mb-2">
              How would you like to take the course?
            </label>
            <div className="flex items-center gap-4">
              {["Online", "Offline"].map((mode) => (
                <label key={mode} className="flex items-center text-sm">
                  <input
                    type="radio"
                    name="applicationMode"
                    value={mode}
                    checked={formData.applicationMode === mode}
                    onChange={handleChange}
                    className="accent-purple_primary w-4 h-4"
                    required
                  />
                  <span className="ml-2">{mode}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="assessmentDate" className="block text-sm font-medium mb-1">
              Preferred Assessment Date
            </label>
            <input
              type="date"
              id="assessmentDate"
              name="assessmentDate"
              value={formData.assessmentDate}
              onChange={handleChange}
              className="w-full border border-gray-400 py-2 px-3 rounded-md"
              required
            />
          </div>
        </div>

        {formData?.applicationMode === "Offline" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
            <div>
              <label htmlFor="location" className="block text-sm font-medium mb-1">Course Location</label>
              <select
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full border border-gray-400 py-2 px-3 rounded-md"
              >
                <option value="" disabled>Please select the test location</option>
                <option value="Location 1">Main Hurak Center</option>
                <option value="Location 2">Birmingham Hurak</option>
              </select>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center mb-4">
        <input
          id="agreeCheckbox"
          type="checkbox"
          onChange={handleCheckboxChange}
          className="w-4 h-4 accent-purple_primary rounded focus:ring-purple_primary"
        />
        <label
          htmlFor="agreeCheckbox"
          className="ml-2 text-sm text-gray-700 select-none"
        >
          I agree to the Terms and Conditions and Privacy Policy
        </label>
      </div>

      <button
        type="submit"
        disabled={!agreed}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded text-sm ${agreed
          ? "bg-purple_primary text-white hover:bg-[#84286a]"
          : "bg-[#854c75] text-white cursor-not-allowed"
          }`}
      >
        {isSubmitting ? "Submitting..." : "Move Forward"}
        <MdArrowRight className="size-5" />
      </button>
    </form>

  );
};

export default CscsForm;
