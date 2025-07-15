"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import CardForList from "./CardForList";
import { UserContext } from "../context-api/UserContext";
import { useFirebase } from "../context/Firebase";

import { ToastContainer } from "react-toastify";

const ApplyEssCscsForm = ({ form_type, setOpenDetails, setGetCardType, setImagePath }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    nationalInsuranceNumber: "",
    phoneNumber: "",
    email: "",
    addressLine1: "",
    town: "",
    city: "",
    pincode: "",
    citbId: "",
    cardtype: "",
    applicationType: "",
    variant: ""
  });

  // console.log(formData.cardtype,"Card Types")

  const cscsCardTypes = [
    { id: 1, value: 'Green Labourer Card', component: <CardForList image_path="/green-card-img.png" title="Green Labourer Card" description="For General Labourers and Site Operatives" /> },

    { id: 2, value: 'Blue Skilled Worker Card', component: <CardForList image_path="/blue-card-img.png" title="Blue Skilled Worker Card" description="For the skilled workers who have Level 2 NVQ or SVQ." /> },

    { id: 3, value: 'Red Provisional Card', component: <CardForList image_path="/red-card-img.png" title="Red Provisional Card" description="This card does not require any qualification." /> },

    { id: 4, value: 'Red Trainee Card', component: <CardForList image_path="/red-trainee-img.png" title="Red Trainee Card" description="For applicants registered for NVQ / SVQ or relevant Construction Award." /> },

    { id: 5, value: 'Red Experienced Worker Card', component: <CardForList image_path="/red-supervisor-card-img.png" title="Red Experienced Worker Card" description="For applicants registered for a Construction NVQ or SVQ Level 2." /> },

    { id: 6, value: 'Red Technical Supervisor/Manager Card', component: <CardForList image_path="/red-supervisor-card-img.png" title="Red Technical Supervisor/Manager Card" description="For Supervisors with on the job experience (at least one year in the last three years)" /> },

    { id: 7, value: 'Gold Advanced Craft Card', component: <CardForList image_path="/gold-advanced-card-img.png" title="Gold Advanced Craft Card" description="For people who have achieved a Construction Related NVQ or SVQ level 3." /> },

    { id: 8, value: 'Gold Supervisor Card', component: <CardForList image_path="/gold-supervisor-card-img.png" title="Gold Supervisor Card" description="For professionals in a supervisory role with a Construction Related Supervisory SVQ or NVQ level 3 or 4." /> },

    { id: 9, value: 'Black Manager Card', component: <CardForList image_path="/black-manager-card-img.png" title="Black Manager Card" description="For managers and technical roles with NVQ/SVQ level 5, 6, 7, or NVQ level 4 in construction management." /> },

    { id: 10, value: 'White Professionally Qualified Person', component: <CardForList image_path="/white-professionally-qualified-card-img.png" title="White Professionally Qualified Person" description="This card is available to members of CSCS approved Professional Bodies." /> },

    { id: 11, value: 'White Academically Qualified Person', component: <CardForList image_path="/white-academically-qualified-card-img.png" title="White Academically Qualified Person" description="For those with construction-related degrees, HNDs, HNCs, CIOB Certificates, or NEBOSH diplomas." /> },
  ];


  const essCardTypes = [
    { id: 1, value: 'Green Labourer Card', component: <CardForList image_path="/ess-green-labourer-img.png" title="Green Labourer Card" description="For General Labourers and Site Operatives" /> },

    { id: 2, value: 'Blue Skilled Worker Card', component: <CardForList image_path="/ess-blue-skilled-img.png" title="Blue Skilled Worker Card" description="For the skilled workers who have Level 2 NVQ or SVQ." /> },

    { id: 3, value: 'Blue Experienced Worker Card', component: <CardForList image_path="/ess-blue-experienced-img.png" title="Blue Experienced Worker Card" description="For those without formal qualifications, working towards an NVQ/SVQ Level 2 or higher." /> },

    { id: 4, value: 'Red Trainee Card', component: <CardForList image_path="/ess-red-trainee-img.png" title="Red Trainee Card" description="For those with no prior experience, registered for an Apprenticeship, NVQ, SVQ, NC, HNC, or Degree but yet to qualify." /> },

    { id: 5, value: 'Red Industry Experienced Card', component: <CardForList image_path="/ess-red-industry-img.png" title="Red Industry Experienced Card" description="For students in programs requiring 30+ days of work placement, like T Levels, Traineeships, or Sandwich Degrees." /> },

    { id: 6, value: 'Gold Card Advanced Craft', component: <CardForList image_path="/ess-gold-advanced-craft-img.png" title="Gold Card - Advanced Craft" description="For Skilled worker with an Apprenticeship Standard/NVQ/SVQ Level 3" /> },

    { id: 7, value: 'Gold Supervisor Card', component: <CardForList image_path="/ess-gold-supervisor-img.png" title="Gold Supervisor Card" description="For those with a Level 3 or higher qualification in building services engineering." /> },

    { id: 8, value: 'Black Manager Card', component: <CardForList image_path="/ess-black-img.png" title="Black Manager Card" description="Managers cards are for those with a Level 4+ qualification in building services engineering or construction management." /> },

    { id: 9, value: 'White Professionally Qualified Person', component: <CardForList image_path="/ess-white-pqp-img.png" title="White Professionally Qualified Person" description="This card is available to members of ESS approved Professional Bodies." /> },

    { id: 10, value: 'White Academically Qualified Person', component: <CardForList image_path="/ess-white-aqp-img.png" title="White Academically Qualified Person" description="For anyone with a construction degree, HND, HNC, CIOB Certificate, or NEBOSH diploma." /> },

    { id: 11, value: 'White ACRIB Refrigerant Handler', component: <CardForList image_path="/ess-white-acrib-img.png" title="White ACRIB Refrigerant Handler" description="For anyone with City & Guilds 2079 (Cat1), BESA FG Cat1, an NVQ unit recognized by DEFRA, or Logic 603/1917/3 (Cat1)." /> },
  ];

  const cardImageMap = {
    "Green Labourer Card": "/green-card-img.png",
    "Blue Skilled Worker Card": "/blue-card-img.png",
    "Gold Advanced Craft Card": "/gold-advanced-card-img.png",
    "Gold Supervisor Card": "/gold-supervisor-card-img.png",
    "Black Manager Card": "/black-manager-card-img.png",
    "White Academically Qualified Person": "/white-academically-qualified-card-img.png",
    "White Professionally Qualified Person": "/white-professionally-qualified-card-img.png",
    "Red Provisional Card": "/red-card-img.png",
    "Red Trainee Card": "/red-trainee-img.png",
    "Red Experienced Worker Card": "/red-experienced-worker-card-img.png",
    "Red Technical Supervisor/Manager Card": "/red-supervisor-card-img.png"
  };

  const [agreed, setAgreed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isPreSelected, setIsPreSelected] = useState(false)
  const dropdownRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const { idx, essId, setIdx, setEssId } = useContext(UserContext);
  const firebase = useFirebase();

  // console.log(essId,"ess id Context Api")
  // console.log(idx,"cscs id Context Api")

  useEffect(() => {
    if (idx) {
      const selectedCard = cscsCardTypes.find((card) => card.id === idx);
      if (selectedCard) {
        setFormData((prev) => ({ ...prev, cardtype: selectedCard.value }));
      }
      setIsPreSelected(true)
    }
    return (
      setIdx(null)
    )
  }, [idx]);

  useEffect(() => {
    if (essId) {
      const selectedCard = essCardTypes.find((card) => card.id === essId);
      if (selectedCard) {
        setFormData((prev) => ({ ...prev, cardtype: selectedCard.value }));
      }
      setIsPreSelected(true)
    }

    return (
      setEssId(null)
    )
  }, [essId]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const firstName = params.get("firstName");
    const lastName = params.get("lastName");
    const phoneNumber = params.get("phoneNumber");
    const email = params.get("email");
    const cardtype = params.get("card");
    const imagePath = params.get("image_path");

    setFormData((prev) => ({
      ...prev,
      ...(firstName && { firstName }),
      ...(lastName && { lastName }),
      ...(phoneNumber && { phoneNumber }),
      ...(email && { email }),
      ...(cardtype && { cardtype })
    }));

    if (setImagePath) {
      console.log(cardtype);
      if (cardtype)
        setImagePath(cardImageMap[cardtype]);
      else if (imagePath) setImagePath(imagePath);
      else {
        if (form_type === 'cscs') setImagePath("/green-card-img.png")
        else setImagePath("/ess-green-labourer-img.png")
      }
    }
    console.log(imagePath)
    setGetCardType(cardtype)

  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setAgreed(e.target.checked);
  };

  const handleSelect = (value) => {
    setFormData({ ...formData, cardtype: value });
    setIsOpen(false);

    if (form_type == 'ess') {
      const matchedCard = essCardTypes.find((card) => card.value === value);
      const imagePath = matchedCard?.component?.props?.image_path || "/green-card-img.png";
      setImagePath(imagePath);
    }

    else {
      console.log(value)
      setImagePath(cardImageMap[value] || "/green-card-img.png");
    }

    setGetCardType(value)
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const resetForm = () => {
    setFormData({
      title: "",
      firstName: "",
      middleName: "",
      lastName: "",
      dob: "",
      nationalInsuranceNumber: "",
      phoneNumber: "",
      email: "",
      cardtype: "",
      applicationType: "",
      variant: ""
    });
    setAgreed(false);
    setIdx(null);
  };

  // Save form data progressively
  const saveFormData = async (step) => {
    try {
      const dataToSave = {
        ...formData,
        step: step,
        formType: form_type,
        lastUpdated: new Date().toISOString(),
      };

      // Save to Firebase progressive data collection
      await firebase.saveProgressiveFormData(dataToSave, step, form_type);

      // Also save to localStorage as backup
      localStorage.setItem(`formData_${form_type}_${step}`, JSON.stringify(dataToSave));

      console.log(`Form data saved for step ${step}:`, dataToSave);
    } catch (error) {
      console.error("Error saving form data:", error);
    }
  };

  const handleNext = async (step) => {
    await saveFormData(step);
    setCurrentStep(step + 1);
  };

  const handlePrevious = (step) => {
    setCurrentStep(step - 1);
  };

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();

    if (form_type === 'cscs') {
      await firebase.addCscsData(formData, "manual");
    }

    if (form_type === 'ess') {
      await firebase.addEssData(formData, "manual");
    }

    resetForm();
  };

  // Render Step 1: Card Details and Personal Information
  const renderStep1 = () => (
    <div className="max-w-4xl bg-gray-200 mx-auto rounded space-y-5 px-4">
      <div className="pt-4">
        <h2 className="text-lg text-gray-800 py-3 font-semibold mb-4 text-center rounded">
          Step 1: Card Details & Personal Information
        </h2>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          {/* <h3 className="text-lg font-semibold text-gray-800 mb-4">📋 Card Selection</h3>
          <p className="text-gray-600 mb-4">Please select your card type and application type to proceed.</p> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {form_type === 'ess' && (
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Card Variant</label>
                <select
                  id="variant"
                  name="variant"
                  value={formData.variant}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-400 py-2 px-3 rounded focus:ring-2 focus:ring-primary-purple focus:border-primary-purple placeholder:text-gray-500"
                >
                  <option value="" disabled>Please select the variant</option>
                  <option value="Physical + Digital">Physical + Digital</option>
                  <option value="Digital">Digital</option>
                </select>
              </div>
            )}

            <div className="relative">
              <label className="block text-sm font-medium mb-2 text-gray-700">Card Type</label>
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="border text-gray-500 border-gray-400 py-2 px-3 rounded cursor-pointer hover:border-primary-purple focus:ring-2 focus:ring-primary-purple"
              >
                {formData.cardtype || 'Please select the card from the list'}
              </div>
              {isOpen && !isPreSelected && (
                <div className="absolute top-full left-0 w-full bg-white border border-gray-400 max-h-48 overflow-y-auto z-10 shadow-lg rounded">
                  {(form_type === 'cscs' ? cscsCardTypes : essCardTypes).map((card) => (
                    <div
                      key={card.value}
                      onClick={() => handleSelect(card.value)}
                      className="py-2 px-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100"
                    >
                      {card.component}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-gray-700">Application Type</label>
            <div className="flex flex-wrap gap-4">
              {["New Card", "Stolen", "Renew"].map((type) => (
                <label key={type} className="flex items-center text-sm gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="applicationType"
                    value={type}
                    checked={formData.applicationType === type}
                    onChange={handleChange}
                    className="accent-primary-purple w-4 h-4"
                  />
                  <span className="text-gray-700">{type}</span>
                </label>
              ))}
            </div>
            {formData.applicationType === "Renew" &&
              ["White Academically Qualified Person", "White Professionally Qualified Person"].includes(formData.cardtype) && (
                <div className="text-orange-600 text-xs mt-2 p-2 bg-orange-50 rounded">
                  ⚠️ Only Green, Gold Advanced, Gold Supervisor, Blue Skilled and Black Manager cards are renewable.
                </div>
              )}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          {/* <h3 className="text-lg font-semibold text-gray-800 mb-4">👤 Personal Information</h3>
          <p className="text-gray-600 mb-4">Please provide your personal details accurately.</p> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {[
              { label: "Title", id: "title", type: "select", options: ["Mr", "Ms", "Mrs", "Miss", "Dr"], required: true },
              { label: "First Name", id: "firstName", type: "text", placeholder: "Enter your first name", required: true },
              { label: "Middle Name", id: "middleName", type: "text", placeholder: "Enter your middle name (optional)" },
              { label: "Last Name", id: "lastName", type: "text", placeholder: "Enter your last name", required: true },
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

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          {/* <h3 className="text-lg font-semibold text-gray-800 mb-4">📞 Contact Details</h3>
          <p className="text-gray-600 mb-4">We'll use these details to contact you about your application.</p> */}

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

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex items-start gap-3">
            <input
              id="agreeCheckboxStep1"
              type="checkbox"
              onChange={handleCheckboxChange}
              className="w-5 h-5 accent-primary-purple mt-0.5"
            />
            <div>
              <label htmlFor="agreeCheckboxStep1" className="text-sm text-gray-700 cursor-pointer">
                I accept the <span className="">Terms and Conditions</span> and <span className="">Privacy Policy</span>
              </label>
              <p className="text-xs text-gray-500 mt-1">By checking this box, you confirm that you have read and agree to our terms.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => handleNext(1)}
            disabled={!formData.cardtype || !formData.applicationType || !formData.title || !formData.firstName || !formData.lastName || !formData.dob || !formData.phoneNumber || !formData.email || !agreed}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${!formData.cardtype || !formData.applicationType || !formData.title || !formData.firstName || !formData.lastName || !formData.dob || !formData.phoneNumber || !formData.email || !agreed ? "bg-gray-400 text-white cursor-not-allowed" : "bg-purple_primary text-white hover:bg-purple_primary/90 shadow-md hover:shadow-lg"}`}
          >
            Continue
            <MdArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );

  // Render Step 2: Address Details
  const renderStep2 = () => (
    <div className="max-w-4xl bg-gray-200 mx-auto rounded space-y-5 px-4">
      <div className="pt-4">
        <h2 className="text-lg text-gray-800 py-3 font-semibold mb-4 text-center rounded">
          Step 2: Address & Additional Details
        </h2>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🏠 Address Information</h3>
          <p className="text-gray-600 mb-4">Please provide your current address where you'd like to receive your card.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: "addressLine1", label: "First Line of Address", placeholder: "123 Main Street" },
              { id: "town", label: "Town", placeholder: "e.g. Hounslow" },
              { id: "city", label: "City", placeholder: "e.g. London" },
              { id: "pincode", label: "Pincode", placeholder: "e.g. W1A 1AA" },
            ].map(({ id, label, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-sm font-medium mb-1 text-gray-700">{label}</label>
                <input
                  type="text"
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

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">📋 Additional Information</h3>
          <p className="text-gray-600 mb-4">Please provide any additional details that may help with your application.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nationalInsuranceNumber" className="block text-sm font-medium mb-1 text-gray-700">
                National Insurance Number (Optional)
              </label>
              <input
                type="text"
                id="nationalInsuranceNumber"
                name="nationalInsuranceNumber"
                placeholder="e.g. QQ 123456 C"
                value={formData.nationalInsuranceNumber}
                onChange={handleChange}
                className="w-full border border-gray-400 py-2 px-3 rounded focus:ring-2 focus:ring-primary-purple focus:border-primary-purple placeholder:text-gray-500"
              />
              <p className="text-xs text-gray-500 mt-1">This helps us verify your identity</p>
            </div>

            <div>
              <label htmlFor="citbId" className="block text-sm font-medium mb-1 text-gray-700">
                CITB Testing ID (Optional)
              </label>
              <input
                type="text"
                id="citbId"
                name="citbId"
                placeholder="e.g. 1234567890"
                value={formData.citbId}
                onChange={handleChange}
                className="w-full border border-gray-400 py-2 px-3 rounded focus:ring-2 focus:ring-primary-purple focus:border-primary-purple placeholder:text-gray-500"
              />
              <p className="text-xs text-gray-500 mt-1">If you have already taken the CITB test</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <button
            type="button"
            onClick={() => handlePrevious(2)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium bg-purple_primary text-white hover:bg-purple_primary/90 transition-all duration-200 shadow-md hover:shadow-lg w-full sm:w-auto"
          >
            <MdArrowLeft className="size-5" />
            Back to Personal Details
          </button>
          <button
            type="button"
            onClick={() => handleNext(2)}
            disabled={!formData.addressLine1 || !formData.town || !formData.city || !formData.pincode}
            className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 w-full sm:w-auto ${!formData.addressLine1 || !formData.town || !formData.city || !formData.pincode ? "bg-gray-400 text-white cursor-not-allowed" : "bg-purple_primary text-white hover:bg-purple_primary shadow-md hover:shadow-lg"}`}
          >
            Review & Submit
            <MdArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );

  // Render Step 3: Review and Submit
  const renderStep3 = () => (
    <div className="max-w-4xl bg-gray-200 mx-auto rounded space-y-4 sm:space-y-5 px-3 sm:px-4">
      <div className="pt-4">
        <h2 className="text-lg text-gray-800 py-3 font-semibold mb-4 text-center rounded">
          Step 3: Review & Submit Application
        </h2>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-4 sm:mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">✅ Review Your Information</h3>
          <p className="text-gray-600 mb-6">Please review all your details carefully before submitting. You can go back to make changes if needed.</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 text-sm text-gray-800">
            {[
              { label: "Title", value: formData.title, icon: "👤" },
              { label: "Date of Birth", value: formData.dob, icon: "📅" },
              { label: "Full Name", value: `${formData.firstName} ${formData.middleName} ${formData.lastName}`.trim(), span: 2, icon: "👤" },
              { label: "Phone Number", value: formData.phoneNumber, icon: "📞" },
              { label: "Email Address", value: formData.email, icon: "📧" },
              { label: "National Insurance No.", value: formData.nationalInsuranceNumber || "Not provided", span: 2, icon: "🆔" },
              {
                label: "Address",
                value: `${formData.addressLine1}, ${formData.town}, ${formData.city} - ${formData.pincode}`,
                span: 2,
                icon: "🏠"
              },
              { label: "CITB Testing ID", value: formData.citbId || "Not provided", icon: "🎯" },
              { label: "Card Variant", value: formData.variant || "N/A", icon: "🎨" },
              { label: "Card Type", value: formData.cardtype, icon: "🪪" },
              { label: "Application Type", value: formData.applicationType, span: 2, icon: "📝" },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`bg-gray-50 rounded-lg px-3 sm:px-4 py-3 ${item.span === 2 ? "col-span-1 lg:col-span-2" : ""} border border-gray-200 hover:bg-gray-100 transition-colors`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm flex-shrink-0">{item.icon}</span>
                  <p className="text-xs font-medium text-gray-500 truncate">{item.label}</p>
                </div>
                <p className="text-sm font-semibold text-gray-800 break-words leading-relaxed">{item.value || "—"}</p>
              </div>
            ))}
          </div>
        </div>


        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => handlePrevious(3)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium bg-purple_primary text-white hover:bg-purple_primary/90 transition-all duration-200 shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              <MdArrowLeft className="size-5" />
              Back to Address Details
            </button>
            <button
              type="button"
              disabled={isSubmitting}
              onClick={handleSubmit}
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 w-full sm:w-auto ${isSubmitting ? "bg-gray-400 text-white cursor-not-allowed" : "bg-purple_primary text-white hover:bg-purple_primary/90 shadow-md hover:shadow-lg"}`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Processing...
                </>
              ) : (
                <>
                  Submit Application
                  <MdArrowRight className="size-5" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <ToastContainer />

      {currentStep === 1 && renderStep1()}
      {currentStep === 2 && renderStep2()}
      {currentStep === 3 && renderStep3()}
    </>
  );
};

export default ApplyEssCscsForm;
