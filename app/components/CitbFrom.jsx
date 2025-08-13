"use client";
import React, { useState, useEffect } from "react";
import { MdArrowRight } from "react-icons/md";
import { useFirebase } from "../context/Firebase";
import MapSelector from "./MapSelector";
import testCentres from "./testCentres";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
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
    testType: "normal",
    language: "",
    preferredTestDate: "",
    alternateTestDate: "",
    timeSlot: "",
    testVariant: "",
    testCenter: ""
  });

  // Load saved data from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem(`citbFormData_${test_center}_1`);
    if (saved) {
      setFormData(prev => ({ ...prev, ...JSON.parse(saved) }));
    }
  }, [test_center]);

  const saveFormData = async (step) => {
    try {
      const dataToSave = {
        ...formData,
        step: step,
        testCenter: test_center,
        lastUpdated: new Date().toISOString(),
      };
      localStorage.setItem(`citbFormData_${test_center}_${step}`, JSON.stringify(dataToSave));
    } catch (error) {
      console.error("Error saving form data:", error);
    }
  };

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
      postcode: "",
      testType: "normal",
      language: "",
      preferredTestDate: "",
      alternateTestDate: "",
      timeSlot: "",
      testVariant: "",
      testCenter: ""
    });
  };

  const [agreed, setAgreed] = useState(false);
  const [nearest, setNearest] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);

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
      console.log(sorted);
      setNearest(sorted);
    } finally {
      setLoading(false);
    }
  };

  const firebase = useFirebase();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setAgreed(e.target.checked);
  };

  const handleNext = async () => {
    try {
      // Save to localStorage for Step 2 first
      await saveFormData(1);

      // Navigate to address page immediately
      router.push(`/book-citb-test/${test_center}/address`);

      // Store first form data in database with empty address fields (fire and forget)
      firebase.applyForCITBTest(
        formData.title,
        formData.firstName,
        formData.middleName,
        formData.lastName,
        formData.dob,
        formData.nationalInsuranceNumber,
        formData.phoneNumber,
        formData.email,
        "", // fullAddress - empty for first step
        "", // locality - empty for first step
        "", // city - empty for first step
        "", // country - empty for first step
        "", // postcode - empty for first step
        formData.testVariant,
        formData.language,
        formData.preferredTestDate,
        formData.alternateTestDate,
        formData.timeSlot,
        formData.testType,
        formData.testCenter,
        test_center,
        null, // setIsSubmitting - not needed for first step
        true // isFirstStep - true to indicate this is step 1
      ).catch(error => {
        console.error("Error saving CITB test data:", error);
        // Error handling without blocking navigation
      });

    } catch (error) {
      console.error("Error saving form data:", error);
      // Still navigate even if localStorage save fails
      router.push(`/book-citb-test/${test_center}/address`);
    }
  };

  // Step 1: Test Details & Personal Information
  const renderStep1 = () => (
    <div className="max-w-4xl bg-gray-200 mx-auto rounded space-y-5 px-2 sm:px-4">
      <div className="pt-4">
        <h2 className="text-lg text-gray-800 py-3 font-semibold mb-4 text-center rounded">
          Step 1: Test Details & Personal Information
        </h2>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Test Type</label>
              <select
                name="testVariant"
                value={formData.testVariant || ""}
                onChange={handleChange}
                className="w-full border border-gray-400 py-2 px-3 rounded focus:ring-2 focus:ring-primary-purple focus:border-primary-purple placeholder:text-gray-500"
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
          </div>

          {formData.testVariant === "Operative" && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-gray-700">Language</label>
              <select
                name="language"
                value={formData.language || ""}
                onChange={handleChange}
                className="w-full border border-gray-400 py-2 px-3 rounded focus:ring-2 focus:ring-primary-purple focus:border-primary-purple placeholder:text-gray-500"
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

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-gray-700">Time Slot</label>
            <select
              name="timeSlot"
              value={formData.timeSlot || ""}
              onChange={handleChange}
              className="w-full border border-gray-400 py-2 px-3 rounded focus:ring-2 focus:ring-primary-purple focus:border-primary-purple placeholder:text-gray-500"
              required
            >
              <option value="">Select Time</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Preferred Test Date</label>
              <input
                type="date"
                name="preferredTestDate"
                min={new Date(Date.now() + 86400000).toISOString().split("T")[0]}
                value={formData.preferredTestDate || ""}
                onChange={handleChange}
                className="w-full border border-gray-400 py-2 px-3 rounded focus:ring-2 focus:ring-primary-purple focus:border-primary-purple placeholder:text-gray-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Alternate Test Date</label>
              <input
                type="date"
                name="alternateTestDate"
                min={new Date(Date.now() + 86400000).toISOString().split("T")[0]}
                value={formData.alternateTestDate || ""}
                onChange={handleChange}
                className="w-full border border-gray-400 py-2 px-3 rounded focus:ring-2 focus:ring-primary-purple focus:border-primary-purple placeholder:text-gray-500"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <MapSelector
              onLocationSelect={handleLocationSelect}
              onTestCenterSelect={(value) => setFormData((prev) => ({ ...prev, testCenter: value }))}
              nearestCentres={nearest}
            />

            {nearest.length > 0 && (
              <div className="mt-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-md font-semibold text-gray-800">Top 5 Nearest CITB Test Centres</h4>
                  <button
                    type="button"
                    onClick={() => setShowLocationSuggestions(!showLocationSuggestions)}
                    className="text-sm text-purple_primary hover:text-purple_primary/80 font-medium"
                  >
                    {showLocationSuggestions ? 'Hide' : 'Show'} Centres
                  </button>
                </div>

                {showLocationSuggestions && (
                  <div className="space-y-2">
                    {nearest.map((centre, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, testCenter: centre.name }));
                          document.getElementById("test-center-input").value = centre.name;
                          setShowLocationSuggestions(false);
                        }}
                        className={`p-3 bg-gray-100 border rounded-lg shadow-sm cursor-pointer transition hover:shadow-md ${formData.testCenter === centre.name ? "border-blue-500 ring-2 ring-blue-400" : "border-gray-200"}`}
                      >
                        <h5 className="font-semibold text-gray-800 text-sm">{centre.name}</h5>
                        <p className="text-gray-700 text-xs">{centre.address}</p>
                        <p className="text-xs text-gray-500">Distance: {centre.distance.toFixed(2)} miles</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {[
              { label: "Title", id: "title", type: "select", options: ["Mr", "Ms", "Mrs", "Miss", "Dr"], required: true },
              { label: "First Name", id: "firstName", type: "text", placeholder: "Enter first name", required: true },
              { label: "Middle Name", id: "middleName", type: "text", placeholder: "Enter middle name (optional)" },
              { label: "Last Name", id: "lastName", type: "text", placeholder: "Enter last name", required: true },
            ].map((field, i) => (
              <div key={i}>
                <label htmlFor={field.id} className="block text-sm font-medium mb-1 text-gray-700">{field.label}</label>
                {field.type === "select" ? (
                  <select
                    id={field.id}
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleChange}
                    required={field.required}
                    className={`w-full border border-gray-400 py-2 px-3 rounded focus:ring-2 focus:ring-primary-purple focus:border-primary-purple ${formData[field.id] ? 'text-gray-900' : 'text-gray-500'}`}
                  >
                    <option value="" disabled>Please select the title</option>
                    {field.options.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    placeholder={field.placeholder || ""}
                    value={formData[field.id]}
                    onChange={handleChange}
                    required={field.required}
                    className="w-full border border-gray-400 py-2 px-3 rounded focus:ring-2 focus:ring-primary-purple focus:border-primary-purple placeholder:text-gray-500"
                  />
                )}
              </div>
            ))}
            {[
              { label: "Date of Birth", id: "dob", type: "date", required: true },
            ].map((field, i) => (
              <div key={i}>
                <label htmlFor={field.id} className="block text-sm font-medium mb-1 text-gray-700">{field.label}</label>
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  placeholder={field.placeholder || ""}
                  value={formData[field.id]}
                  onChange={handleChange}
                  required={field.required}
                  className={`w-full border border-gray-400 py-2 px-3 rounded focus:ring-2 focus:ring-purple_primary focus:border-purple_primary ${formData[field.id] ? 'text-gray-900' : 'text-gray-500'}`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: "phoneNumber", placeholder: "e.g. 2080995236", type: "text", label: "Phone Number" },
              { id: "email", placeholder: "yourname@domain.com", type: "email", label: "Email Address" },
            ].map(({ id, placeholder, type, label }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-sm font-medium mb-1 text-gray-700">{label}</label>
                <input
                  type={type}
                  id={id}
                  name={id}
                  placeholder={placeholder}
                  value={formData[id]}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-400 py-2 px-3 rounded focus:ring-2 focus:ring-primary-purple focus:border-primary-purple placeholder:text-gray-500"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6">
          <div className="flex items-start gap-3">
            <input
              id="agreeCheckboxStep1"
              type="checkbox"
              onChange={handleCheckboxChange}
              className="w-5 h-5 accent-primary-purple mt-0.5"
            />
            <div>
              <label htmlFor="agreeCheckboxStep1" className="text-sm text-gray-700 cursor-pointer">
                I accept the <span className="text-purple_primary underline">Terms and Conditions</span> and <span className="text-purple_primary underline">Privacy Policy</span>
              </label>
              <p className="text-xs text-gray-500 mt-1">By checking this box, you confirm that you have read and agree to our terms.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleNext}
            disabled={!formData.testVariant || !formData.timeSlot || !formData.preferredTestDate || !formData.alternateTestDate || !formData.testCenter || !formData.title || !formData.firstName || !formData.lastName || !formData.dob || !formData.phoneNumber || !formData.email || !agreed}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${!formData.testVariant || !formData.timeSlot || !formData.preferredTestDate || !formData.alternateTestDate || !formData.testCenter || !formData.title || !formData.firstName || !formData.lastName || !formData.dob || !formData.phoneNumber || !formData.email || !agreed ? "bg-gray-400 text-white cursor-not-allowed" : "bg-purple_primary text-white hover:bg-purple_primary/90 shadow-md hover:shadow-lg"}`}
          >
            Continue
            <MdArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="w-12 h-12 border-4 border-white border-t-purple-600 rounded-full animate-spin"></div>
        </div>
      )}

      {renderStep1()}
    </>
  );
};

export default CitbForm;