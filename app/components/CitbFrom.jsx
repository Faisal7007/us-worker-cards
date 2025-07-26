"use client";
import React, { useState } from "react";
import { MdArrowRight } from "react-icons/md";
import { useFirebase } from "../context/Firebase";
import MapSelector from "./MapSelector";
import testCentres from "./testCentres";


const getDistance = (lat1, lon1, lat2, lon2) => {
  const R = 3958.8;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
    Math.cos((lat2 * Math.PI) / 180) *
    Math.sin(dLon / 2) ** 2;
  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
};

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
    testType: "normal",                  // Test Type (select dropdown)
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
  const [nearest, setNearest] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLocationSelect = async (coords) => {
    setLoading(true);
    try {
      const sorted = testCentres
        .map((c) => ({
          ...c,
          distance: getDistance(coords.lat, coords.lng, c.lat, c.lng),
        }))
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 5);
      console.log(sorted)
      setNearest(sorted);
    } finally {
      setLoading(false);
    }
  };




  const firebase = useFirebase()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setAgreed(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await firebase.applyForCITBTest(
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

      // iOS-compatible redirect - use setTimeout to ensure the redirect happens
      setTimeout(() => {
        if (formData.testType === "retake") {
          window.location.replace("https://buy.stripe.com/dR601T3kp6b9ddmeUZ");
        } else {
          window.location.replace("https://buy.stripe.com/8wMeWN3kp0QP3CMfZ6");
        }
      }, 100);
    } catch (error) {
      console.error("Submission error:", error);
    }
  };


  return (
    <>
      {showOverlayForm && (
        <form onSubmit={handleSubmit}>
          <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center px-4">
            <div className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 rounded-2xl shadow-2xl scroll-smooth touch-auto">

              {/* Spinner */}
              {loading && (
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 rounded-2xl">
                  <div className="w-12 h-12 border-4 border-white border-t-purple-600 rounded-full animate-spin"></div>
                </div>
              )}

              {/* Heading */}
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">📋 Additional Information</h2>

              {/* Test Type */}
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-700">Test Type</label>
                <select
                  name="testVariant"
                  value={formData.testVariant || ""}
                  onChange={handleChange}
                  className="w-full border rounded-md border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
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
              {formData.testVariant === "Operative" && (
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-700">Language</label>
                  <select
                    name="language"
                    value={formData.language || ""}
                    onChange={handleChange}
                    className="w-full border rounded-md border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  >
                    <option value="">Select a Language</option>
                    {[
                      "English", "Voice Over English", "Bulgarian", "Czetch", "French", "German", "Hungarian",
                      "Lithunian", "Polish", "Portuguese", "Punjabi", "Romanian", "Russian", "Spanish", "Welsh"
                    ].map((lang) => (
                      <option key={lang} value={lang}>{lang}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Location & Centres */}
              <div className="mb-6">
                <MapSelector
                  onLocationSelect={handleLocationSelect}
                  onTestCenterSelect={(value) => setFormData((prev) => ({ ...prev, testCenter: value }))}
                  nearestCentres={nearest}
                />
                <h3 className="text-lg font-semibold mt-4 mb-3 text-gray-800">Top 5 Nearest CITB Test Centres</h3>
                {nearest.length === 0 ? (
                  <p className="text-gray-500">No centres selected yet.</p>
                ) : (
                  nearest.map((centre, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, testCenter: centre.name }));
                        document.getElementById("test-center-input").value = centre.name; // 👈 set input box value
                      }}
                      className={`mb-4 p-4 bg-gray-100 border rounded-lg shadow-sm cursor-pointer transition hover:shadow-md ${formData.testCenter === centre.name ? "border-blue-500 ring-2 ring-blue-400" : "border-gray-200"
                        }`}
                    >
                      <h4 className="font-semibold text-gray-800">{centre.name}</h4>
                      <p className="text-gray-700">{centre.address}</p>
                      <p className="text-sm text-gray-500">Distance: {centre.distance.toFixed(2)} miles</p>
                    </div>
                  ))
                )}

              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Preferred Test Date</label>
                  <input
                    type="date"
                    name="preferredTestDate"
                    min={new Date(Date.now() + 86400000).toISOString().split("T")[0]}
                    value={formData.preferredTestDate || ""}
                    onChange={handleChange}
                    className="w-full border rounded-md border-gray-300 py-3 px-4"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Alternate Test Date</label>
                  <input
                    type="date"
                    name="alternateTestDate"
                    min={new Date(Date.now() + 86400000).toISOString().split("T")[0]}
                    value={formData.alternateTestDate || ""}
                    onChange={handleChange}
                    className="w-full border rounded-md border-gray-300 py-3 px-4"
                    required
                  />
                </div>
              </div>

              {/* Time Slot */}
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-700">Time Slot</label>
                <select
                  name="timeSlot"
                  value={formData.timeSlot || ""}
                  onChange={handleChange}
                  className="w-full border rounded-md border-gray-300 py-3 px-4"
                  required
                >
                  <option value="">Select Time</option>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                </select>
              </div>

              {/* Test Variant (Price Option) */}
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-700">Test Package</label>
                <select
                  id="testType"
                  name="testType"
                  value={formData.testType}
                  onChange={handleChange}
                  className="w-full border rounded-md border-gray-300 py-3 px-4"
                  required
                >
                  <option value="normal">Take CITB Test – £40</option>
                  <option value="retake">Take CITB Test + Retake – £60</option>
                </select>
              </div>

              {/* Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={() => setShowOverlayForm(false)}
                  className="bg-gray-200 text-gray-800 px-5 py-2 rounded-md hover:bg-gray-300 transition"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </form>
      )}


      <form
        onSubmit={(e) => {
          e.preventDefault();
          setShowOverlayForm(true);
        }}
        className="max-w-full mx-auto rounded space-y-6"
      >
        <div className="pt-4 max-w-4xl mx-auto px-4">
          <h2 className="text-lg bg-purple_primary text-white py-2 font-semibold mb-4 text-center rounded">
            Candidate Undergoing the Test
          </h2>
          <p className="text-lg font-semibold mb-3 text-gray-700">Name</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4">
            {/* <p>Title</p> */}
            <div>
              {/* <label htmlFor="title" className="block text-sm font-medium mb-1">Name</label> */}
              <select
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={`w-full border border-gray-400 py-2 px-3 rounded-md ${formData.title === '' ? 'text-gray-400' : 'text-gray-900'
                  }`}
                required
              >
                <option value="" disabled hidden>
                  Please select the title
                </option>
                <option className="text-gray-900" value="Mr">Mr</option>
                <option className="text-gray-900" value="Ms">Ms</option>
                <option className="text-gray-900" value="Mrs">Mrs</option>
                <option className="text-gray-900" value="Miss">Miss</option>
                <option className="text-gray-900" value="Dr">Dr</option>
              </select>



            </div>

            {[{ id: "firstName", label: "First Name", required: true }, { id: "middleName", label: "Middle Name" }, { id: "lastName", label: "Last Name", required: true }].map(({ id, label, type = "text", required = false, placeholder }) => (
              <div key={id}>
                {/* <label htmlFor={id} className="block text-sm font-medium mb-1">{label}</label> */}
                <input
                  type={type}
                  id={id}
                  name={id}
                  placeholder={placeholder || label}
                  value={formData[id]}
                  onChange={handleChange}
                  required={required}
                  className="w-full border border-gray-400 py-2 px-3 rounded-md"
                />
              </div>
            ))}
            {[{ id: "dob", label: "Date of Birth", type: "date", required: true }, { id: "nationalInsuranceNumber", label: "National Insurance Number (Optional)", placeholder: "e.g. QQ 123456 C" }].map(({ id, label, type = "text", required = false, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-sm font-medium mb-1">{label}</label>
                <input
                  type={type}
                  id={id}
                  name={id}
                  placeholder={placeholder || label}
                  value={formData[id]}
                  onChange={handleChange}
                  required={required}
                  className="w-full border border-gray-400 py-2 px-3 rounded-md"
                />
              </div>
            ))}
          </div>

          <h2 className="text-lg font-semibold mb-3 text-gray-700">Contact Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4">
            {["phoneNumber", "email"].map((id) => (
              <div key={id}>
                <label htmlFor={id} className="block text-sm font-medium mb-1 capitalize">
                  {id === "phoneNumber" ? "Phone Number" : "Email Address"}
                </label>
                <input
                  type={id === "email" ? "email" : "text"}
                  id={id}
                  name={id}
                  placeholder={id === "email" ? "yourname@domain.com" : "e.g. 2080995236"}
                  value={formData[id]}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-400 py-2 px-3 rounded-md"
                />
              </div>
            ))}
          </div>

          <h2 className="text-lg font-semibold mb-3 text-gray-700">Address</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4">
            <div className="sm:col-span-2">
              {/* <label htmlFor="houseNumber" className="block text-sm font-medium mb-1">
                House Number and Street Name
              </label> */}
              <input
                type="text"
                id="houseNumber"
                name="houseNumber"
                placeholder="House Number and Street Name"
                value={formData.houseNumber}
                onChange={handleChange}
                required
                className="w-full border border-gray-400 py-2 px-3 rounded-md"
              />
            </div>

            {[{ id: "locality", label: "Locality (Optional)" }, { id: "townCity", label: "Town/City", required: true }, { id: "county", label: "Country" }, { id: "postcode", label: "Postcode" }].map(({ id, label, required = false }) => (
              <div key={id}>
                {/* <label htmlFor={id} className="block text-sm font-medium mb-1">{label}</label> */}
                <input
                  type="text"
                  id={id}
                  name={id}
                  placeholder={label}
                  value={formData[id]}
                  onChange={handleChange}
                  required={required}
                  className="w-full border border-gray-400 py-2 px-3 rounded-md"
                />
              </div>
            ))}
          </div>
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
            className="ml-2 text-sm text-gray-700 select-none"
          >
            I agree to the Terms and Conditions and Privacy Policy
          </label>
        </div>

        <button
          type="submit"
          disabled={!agreed}
          className={`inline-flex items-center justify-center w-fit px-4 py-2 rounded ${agreed ? "bg-purple_primary text-white hover:bg-[#84286a]" : "bg-gray-300 text-gray-600 cursor-not-allowed"}`}
        >
          Move Forward <MdArrowRight className="ml-2" />
        </button>
      </form>

    </>
  );
};
export default CitbForm;