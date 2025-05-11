"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { MdArrowRight } from "react-icons/md";
import CardForList from "./CardForList";
import { UserContext } from "../context-api/UserContext";
import { useFirebase } from "../context/Firebase";
import GenericCardDetailsView from "./GenericCardDetailsView";

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
    cardtype: "",
    applicationType: "",
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



  const [agreed, setAgreed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isPreSelected, setIsPreSelected] = useState(false)
  const dropdownRef = useRef(null);
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setAgreed(e.target.checked);
  };

  const handleSelect = (value) => {
    setFormData({ ...formData, cardtype: value });
    setIsOpen(false);

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

    if (setImagePath) {
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
    });
    setAgreed(false);
    setIdx(null);
  };

  const firebase = useFirebase()
  // console.log(firebase)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (form_type === 'cscs') {
      setOpenDetails(true);
    }

    if (form_type === 'ess') {
      firebase.applyForESSCard(
        formData.title,
        formData.firstName,
        formData.middleName,
        formData.lastName,
        formData.dob,
        formData.nationalInsuranceNumber,
        formData.phoneNumber,
        formData.email,
        formData.cardtype,
        formData.applicationType,
        form_type
      );

      resetForm();

      // Redirect to Stripe after submission
      window.location.href = "https://buy.stripe.com/00gaGx6wBfLJ1uE3ce";
    }
  };




  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-full mx-auto rounded space-y-6"
    >
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

        <h2 className="text-2xl font-bold mb-6">Card Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-4">


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
              <label className="flex items-center">
                <input
                  type="radio"
                  name="applicationType"
                  value="Renew"
                  checked={formData.applicationType === "Renew"}
                  onChange={handleChange}
                  className="w-5 h-5 accent-purple_primary"
                  disabled={["White Academically Qualified Person", "White Professionally Qualified Person", "Red Provisional Card", "Red Technical Supervisor/Manager Card"].includes(formData.cardtype)}
                />
                <span className="ml-2">
                  Renew
                </span>
              </label>



            </div>
            {
              formData.applicationType === "Renew" &&
              !["Green Labourer Card", "Gold Advanced Craft Card", "Gold Supervisor Card", "Blue Skilled Worker Card", "Black Manager Card"].includes(formData.cardType) && (
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
        disabled={!agreed}
        className={`inline-flex items-center justify-center w-fit px-4 py-2 rounded ${agreed
          ? "bg-purple_primary text-white hover:bg-[#84286a]"
          : "bg-[#854c75] text-white cursor-not-allowed"
          }`}
      >
        <span className="ml-2">Move Forward</span>
        <MdArrowRight className="size-6" />
      </button>
    </form>
  );
};

export default ApplyEssCscsForm;
