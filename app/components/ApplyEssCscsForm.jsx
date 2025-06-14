"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { MdArrowRight } from "react-icons/md";
import CardForList from "./CardForList";
import { UserContext } from "../context-api/UserContext";
import { useFirebase } from "../context/Firebase";
import GenericCardDetailsView from "./GenericCardDetailsView";
import { ToastContainer } from "react-toastify";

const ApplyEssCscsForm = ({ form_type, setOpenDetails, setGetCardType, setImagePath }) => {
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
      else setImagePath("/green-card-img.png")
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

  const firebase = useFirebase()
  // console.log(firebase)
  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault(); // Safe check for event

    if (form_type === 'cscs') {
      await firebase.addCscsData(formData, "manual");
    }

    if (form_type === 'ess') {
      await firebase.addEssData(formData, "manual");
    }

    resetForm();
  };





  return (

    <>

      <form
      // onSubmit={handleSubmit}
      >
        {showOverlay && (
          <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-[95%] max-w-3xl border border-gray-200">
              <h2 className="text-2xl font-semibold text-purple_primary mb-8 text-center">
                🔍 Review & Confirm Your Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-800">
                {[
                  { label: "Title", value: formData.title },
                  { label: "DOB", value: formData.dob },
                  { label: "Full Name", value: `${formData.firstName} ${formData.middleName} ${formData.lastName}`, span: 2 },
                  { label: "Phone Number", value: formData.phoneNumber },
                  { label: "Email", value: formData.email },
                  { label: "National Insurance No.", value: formData.nationalInsuranceNumber, span: 2 },
                  {
                    label: "Address",
                    value: `${formData.addressLine1}, ${formData.town}, ${formData.city} - ${formData.pincode}`,
                    span: 2
                  },
                  { label: "CITB ID", value: formData.citbId },
                  { label: "Card Variant", value: formData.variant },
                  { label: "Card Type", value: formData.cardtype },
                  { label: "Application Type", value: formData.applicationType, span: 2 },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`bg-gray-100 rounded-lg px-4 py-3 ${item.span === 2 ? "col-span-2" : ""} border border-gray-200`}
                  >
                    <p className="text-xs font-medium text-gray-500">{item.label}</p>
                    <p className="text-sm font-semibold text-gray-800 break-words">{item.value || "—"}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex justify-end gap-4">
                <button
                  className="px-5 py-2 rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 transition"
                  onClick={() => setShowOverlay(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-5 py-2 rounded-full bg-purple_primary text-white hover:bg-[#84286a] transition flex items-center gap-2"
                  onClick={() => {
                    setShowOverlay(false);
                    handleSubmit();
                  }}
                >
                  Confirm & Submit
                </button>
              </div>
            </div>
          </div>
        )}

      </form>

      <form
        className="max-w-full mx-auto rounded space-y-6"
        onSubmit={(e) => { e.preventDefault(); setShowOverlay(true); }}
      >
        <ToastContainer />

        <div className="pt-6">
          <h2 className="text-[25px] bg-purple_primary text-white py-4 font-bold mb-6 text-center">
            Easy Apply For <span className="uppercase">{form_type}</span> Card
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

          <h2 className="text-2xl font-bold mb-6">Address Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-4">
            <div>
              <label htmlFor="addressLine1" className="block text-md font-medium">
                First Line of Address
              </label>
              <input
                type="text"
                id="addressLine1"
                name="addressLine1"
                placeholder="123 Main Street"
                value={formData.addressLine1}
                onChange={handleChange}
                className="w-full border border-gray-500 py-4 px-3 mb-4"
                required
              />
            </div>

            <div>
              <label htmlFor="town" className="block text-md font-medium">
                Town
              </label>
              <input
                type="text"
                id="town"
                name="town"
                placeholder="e.g. Hounslow"
                value={formData.town}
                onChange={handleChange}
                className="w-full border border-gray-500 py-4 px-3 mb-4"
                required
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-md font-medium">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="e.g. London"
                value={formData.city}
                onChange={handleChange}
                className="w-full border border-gray-500 py-4 px-3 mb-4"
                required
              />
            </div>

            <div>
              <label htmlFor="pincode" className="block text-md font-medium">
                Pincode
              </label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                placeholder="e.g. W1A 1AA"
                value={formData.pincode}
                onChange={handleChange}
                className="w-full border border-gray-500 py-4 px-3 mb-4"
                required
              />
            </div>

            <div>
              <label htmlFor="citbId" className="block text-md font-medium">
                CITB Testing ID
              </label>
              <input
                type="text"
                id="citbId"
                name="citbId"
                placeholder="e.g. 1234567890"
                value={formData.citbId}
                onChange={handleChange}
                className="w-full border border-gray-500 py-4 px-3 mb-4"
              />
            </div>
          </div>


          <h2 className="text-2xl font-bold mb-6">Card Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-4">

            {form_type == 'ess' ?
              <div>
                <label htmlFor="variant" className="block text-md font-medium">
                  Card Variant
                </label>
                <select
                  id="variant"
                  name="variant"
                  value={formData.variant}
                  onChange={handleChange}
                  className="w-full border border-gray-500 py-4 px-3 mb-4"
                  required
                >
                  <option value="" disabled>
                    Please select the variant
                  </option>
                  <option value="Physical + Digital">Physical + Digital</option>
                  <option value="Digital">Digital</option>
                </select>
              </div>
              : <></>}


            <div className="relative">
              <label htmlFor="email" className="block text-md font-medium">
                Card Type
              </label>

              {
                form_type === 'cscs' ? <div>
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="border border-gray-500 py-4 px-3 cursor-pointer"
                  >
                    {formData.cardtype || 'Please select the card from the list'}
                  </div>
                  {isOpen && !isPreSelected ? (
                    <div className="absolute top-full left-0 w-full bg-white border border-gray-500 max-h-48 overflow-y-auto">
                      {cscsCardTypes.map((card) => (
                        <div
                          key={card.value}
                          onClick={() => handleSelect(card.value)}
                          className="py-2 px-3 hover:bg-gray-200 cursor-pointer"
                        >
                          {card.component}
                        </div>
                      ))}
                    </div>
                  ) : ''}
                </div> : <div>
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="border border-gray-500 py-4 px-3 cursor-pointer"
                  >
                    {formData.cardtype || 'Please select the card from the list'}
                  </div>
                  {isOpen && !isPreSelected ? (
                    <div className="absolute top-full left-0 w-full bg-white border border-gray-500 max-h-48 overflow-y-auto">
                      {essCardTypes.map((card) => (
                        <div
                          key={card.value}
                          onClick={() => handleSelect(card.value)}
                          className="py-2 px-3 hover:bg-gray-200 cursor-pointer"
                        >
                          {card.component}
                        </div>
                      ))}
                    </div>
                  ) : ''}
                </div>
              }

            </div>
            <div className="h-[100px]">
              <label className="block text-md font-medium mb-4">
                Application Type
              </label>
              <div className="flex items-center space-x-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="applicationType"
                    value="New Card"
                    checked={formData.applicationType === "New Card"}
                    onChange={handleChange}
                    className="w-5 h-5 accent-purple_primary"
                    required

                  />
                  <span className="ml-2">New Card</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="applicationType"
                    value="Stolen"
                    checked={formData.applicationType === "Stolen"}
                    onChange={handleChange}
                    className="w-5 h-5 accent-purple_primary"
                  />
                  <span className="ml-2">Stolen</span>
                </label>
                {
                  // !["White Academically Qualified Person", "White Professionally Qualified Person", "Red Provisional Card", "Red Technical Supervisor/Manager Card"].includes(formData.cardtype) && (
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="applicationType"
                      value="Renew"
                      checked={formData.applicationType === "Renew"}
                      onChange={handleChange}
                      className="w-5 h-5 accent-purple_primary"
                    />
                    <span className="ml-2">
                      Renew
                    </span>
                  </label>
                  // )
                }






              </div>
              {
                formData.applicationType === "Renew" &&
                ["White Academically Qualified Person", "White Professionally Qualified Person"].includes(formData.cardtype) && (
                  <div className="text-orange-700 text-sm">
                    Only Green, Gold advanced, Gold supervisor, Blue skilled and Black manager cards are renewable
                  </div>
                )
              }

            </div>
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
            className="ml-2 text-sm text-gray-700 select-none media-max-545px:text-[12px]"
          >
            I agree to the Terms and Conditions and Privacy Policy
          </label>
        </div>
        <button
          type="submit"
          disabled={!agreed || isSubmitting}
          // onClick={}
          className={`inline-flex items-center justify-center w-fit px-4 py-2 rounded ${agreed ? "bg-purple_primary text-white hover:bg-[#84286a]" : "bg-[#854c75] text-white cursor-not-allowed"
            }`}
        >
          <span className="ml-2">Move Forward</span>
          <MdArrowRight className="size-6" />
        </button>
      </form>


    </>

  );
};

export default ApplyEssCscsForm;
