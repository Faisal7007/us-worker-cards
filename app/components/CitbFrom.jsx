"use client";
import React, { useState } from "react";
import { MdArrowRight } from "react-icons/md";
import { useFirebase } from "../context/Firebase";

const CitbForm = ({ test_center }) => {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    nationalInsuranceNumber: "",
    phoneNumber: "",
    email: "",
    houseNumber: "",
    locality: "",
    townCity: "",
    county: "",
    postcode: "",
    testType: "",                  // Test Type (select dropdown)
    language: "",                 // Language (select dropdown)
    preferredTestDate: "",        // Preferred Test Date
    alternateTestDate: "",        // Alternate Test Date
    timeSlot: "",                 // Time Slot (morning, afternoon, evening)
    testVariant: "",
    testCenter: ""
  });



  const reset = () => {
    setFormData({
      title: "",
      firstName: "",
      middleName: "",
      lastName: "",
      dob: "",
      nationalInsuranceNumber: "",
      phoneNumber: "",
      email: "",
      houseNumber: "",
      locality: "",
      townCity: "",
      county: "",
      postcode: ""
    })
  }

  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOverlayForm, setShowOverlayForm] = useState(false);


  const firebase = useFirebase()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setAgreed(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    firebase.applyForCITBTest(
      formData.title,
      formData.firstName,
      formData.middleName,
      formData.lastName,
      formData.dob,
      formData.nationalInsuranceNumber,
      formData.phoneNumber,
      formData.email,
      formData.houseNumber,
      formData.locality,
      formData.townCity,
      formData.county,
      formData.postcode,
      formData.testVariant,              // Newly added
      formData.language,              // Newly added
      formData.preferredTestDate,     // Newly added
      formData.alternateTestDate,     // Newly added
      formData.timeSlot,              // Newly added
      formData.testType,
      formData.testCenter,
      test_center,
      setIsSubmitting
    );

    reset();
  };


  return (

    <form
      onSubmit={handleSubmit}
      className="max-w-full mx-auto  rounded  space-y-6"
    >
      <div className="pt-6">

        {showOverlayForm && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="bg-white w-full max-w-xl p-6 rounded shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>

              {/* Test Type */}
              <div className="mb-4">
                <label className="block text-md font-medium">Test Type</label>
                <select
                  name="testVariant"
                  value={formData.testVariant || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-500 py-3 px-3"
                >
                  <option value="">Select a Test Type</option>
                  {[
                    "Operative",
                    "Managers and Professionals",
                    "Supervisors Test",
                    "Working at Height Test",
                    "Plumbing or Gas Test",
                    "Highway Works Test",
                    "Demolition Test",
                    "HVACR Test (Domestic Heating and Plumbing)",
                    "HVACR Test (Ductwork)",
                    "HVACR Test (Pipelifting and Welding)",
                    "HVACR Test (Refrigeration and Air Conditioning)",
                    "HVACR Test (Services and Facilities)",
                    "Lift and Escalators Test",
                    "Tunnelling Test",
                  ].map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Language */}
              <div className="mb-4">
                <label className="block text-md font-medium">Language</label>
                <select
                  name="language"
                  value={formData.language || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-500 py-3 px-3"
                  required
                >
                  <option value="">Select a Language</option>
                  {[
                    "English",
                    "Voice Over English",
                    "Bulgarian",
                    "Czetch",
                    "French",
                    "German",
                    "Hungarian",
                    "Lithunian",
                    "Polish",
                    "Portuguese",
                    "Punjabi",
                    "Romanian",
                    "Russian",
                    "Spanish",
                    "Welsh",
                  ].map((lang) => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-md font-medium">Test Center Name (Optional)</label>
                <input
                  id="testCenter"
                  name="testCenter"
                  value={formData.testCenter}
                  onChange={handleChange}
                  className="w-full border border-gray-500 py-3 px-3"
                >
                </input>
              </div>

              {/* Preferred Test Date */}
              <div className="mb-4">
                <label className="block text-md font-medium">Preferred Test Date</label>
                <input
                  type="date"
                  name="preferredTestDate"
                  min={new Date(Date.now() + 86400000).toISOString().split("T")[0]}
                  value={formData.preferredTestDate || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-500 py-3 px-3"
                />
              </div>

              {/* Alternate Test Date */}
              <div className="mb-4">
                <label className="block text-md font-medium">Alternate Test Date</label>
                <input
                  type="date"
                  name="alternateTestDate"
                  min={new Date(Date.now() + 86400000).toISOString().split("T")[0]}
                  value={formData.alternateTestDate || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-500 py-3 px-3"
                />
              </div>

              {/* Time Slot */}
              <div className="mb-4">
                <label className="block text-md font-medium">Time Slot</label>
                <select
                  name="timeSlot"
                  value={formData.timeSlot || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-500 py-3 px-3"
                >
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-md font-medium">Test variant</label>
                <select
                  id="testType"
                  name="testType"
                  value={formData.testType}
                  onChange={handleChange}
                  className="w-full border border-gray-500 py-3 px-3"
                >
                  <option value="normal">Take CITB Test £40</option>
                  <option value="retake">Take CITB Test + Retake £60</option>
                </select>
              </div>




              {/* Buttons */}
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setShowOverlayForm(false)}
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  Back
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-purple_primary text-white px-4 py-2 rounded hover:bg-[#84286a]"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}




        <h2 className="text-[25px] bg-purple_primary text-white py-4    font-bold mb-6 text-center">Candidate Undergoing the Test</h2>
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
              className="w-full border border-gray-500  py-4 px-3 mb-4"
              required
            >
              <option value="" disabled>
                Please select the title
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
          <div>

            <label htmlFor="dob" className="block text-md font-medium">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border border-gray-500 py-4 px-3 mb-4"
              required
            />

          </div>

          <div>
            <label htmlFor="nationalInsuranceNumber" className="block text-md font-medium">
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
        <h2 className="text-2xl font-bold mb-6">Address</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-4">
          <div className="col-span-1 md:col-span-2">
            <label htmlFor="houseNumber" className="block text-md font-medium">
              House Number and Street Name
            </label>
            <input
              type="text"
              id="houseNumber"
              name="houseNumber"
              placeholder="Please fill out this field"
              value={formData.houseNumber}
              onChange={handleChange}
              className="w-full border border-gray-500  py-4 px-3 mb-4"
              required
            />
          </div>

          <div>
            <label htmlFor="locality" className="block text-md font-medium">
              Locality (Optional)
            </label>
            <input
              type="text"
              id="locality"
              name="locality"
              placeholder="Locality"
              value={formData.locality}
              onChange={handleChange}
              className="w-full border border-gray-500 py-4 px-3 mb-4"
            />
          </div>

          <div>
            <label htmlFor="townCity" className="block text-md font-medium">
              Town/City
            </label>
            <input
              type="text"
              id="townCity"
              name="townCity"
              placeholder="Please fill out this field"
              value={formData.townCity}
              onChange={handleChange}
              className="w-full border border-gray-500 py-4 px-3 mb-4"
              required
            />
          </div>
          <div>
            <label htmlFor="county" className="block text-md font-medium">
              Country
            </label>
            <input
              type="text"
              id="county"
              name="county"
              placeholder="Country"
              value={formData.county}
              onChange={handleChange}
              className="w-full border border-gray-500 py-4 px-3 mb-4"
            />

          </div>

          <div>


            <label htmlFor="postcode" className="block text-md font-medium">
              Postcode
            </label>
            <input
              type="text"
              id="postcode"
              name="postcode"
              placeholder="Postcode"
              value={formData.postcode}
              onChange={handleChange}
              className="w-full border border-gray-500 py-4 px-3 "
            />
          </div>
        </div>

      </div>

      <div className="flex items-center mb-4">
        <input
          id="agreeCheckbox"
          type="checkbox"
          onChange={handleCheckboxChange}
          className="w-5 h-5 accent-purple_primary rounded  focus:ring-purple_primary"
        />
        <label
          htmlFor="agreeCheckbox"
          className="ml-2 text-sm text-gray-700 select-none media-max-545px:text-[12px]"
        >
          I agree to the Terms and Conditions and Privacy Policy
        </label>
      </div>

      {/* <div className="mb-6">
        <label htmlFor="testType" className="block text-md font-medium">
          Choose Test Type
        </label>
        <select
          id="testType"
          name="testType"
          value={formData.testType}
          onChange={handleChange}
          className="w-50% border border-gray-500 py-4 px-3"
          required
        >
          <option value="" disabled>
            Please select a test type
          </option>
          <option value="normal">Take CITB Test</option>
          <option value="retake">Take CITB Test + Retake</option>
        </select>
      </div> */}

      <button
        type="button"
        disabled={!agreed}
        onClick={() => setShowOverlayForm(true)}
        className={`inline-flex items-center justify-center w-fit px-4 py-2 rounded media-max-545px:text-[14px] ${agreed
          ? "bg-purple_primary text-white hover:bg-[#84286a]"
          : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
      >
        Move Forward <MdArrowRight className="ml-2" />
      </button>

    </form>
  );
};
export default CitbForm;