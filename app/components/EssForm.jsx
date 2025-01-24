// "use client";
// import React, { useContext, useEffect, useRef, useState } from "react";
// import { MdArrowRight } from "react-icons/md";
// import CardForList from "./CardForList";
// import { UserContext } from "../context-api/UserContext";
// import { useFirebase } from "../context/Firebase";

// const CscsForm = ({id}) => {
//   const [formData, setFormData] = useState({
//     title: "",
//     firstName: "",
//     middleName: "",
//     lastName: "",
//     dob: "",
//     nationalInsuranceNumber: "",
//     phoneNumber: "",
//     email: "",
//     cardtype: "",
//     applicationType: "", 
//   });

  
//   const cardTypes = [
//     {id:1, value: 'Green Labourer Card', component:<CardForList image_path="/green-card-img.png" title="Green Labourer Card" description="For General Labourers and Site Operatives"/> },

//     {id:2, value: 'Blue Skilled Worker Card', component: <CardForList image_path="/blue-card-img.png" title="Blue Skilled Worker Card" description="For the skilled workers who have Level 2 NVQ or SVQ."/> },

//     {id:3, value: 'Red Provisional Card', component: <CardForList image_path="/red-card-img.png" title="Red Provisional Card" description="This card does not require any qualification."/> },

//     {id:4, value: 'Red Trainee Card', component: <CardForList image_path="/red-trainee-img.png" title="Red Trainee Card" description="For applicants registered for NVQ / SVQ or relevant Construction Award."/> },

//     {id:5, value: 'Red Experienced Worker Card', component: <CardForList image_path="/red-supervisor-card-img.png" title="Red Technical Supervisor/Manager Card" description="For applicants registered for a Construction NVQ or SVQ Level 2."/> },

//     {id:6, value: 'Red Technical Supervisor/Manager Card', component: <CardForList image_path="/red-supervisor-card-img.png" title="Red Technical Supervisor/Manager Card" description="For Supervisors with on the job experience (at least one year in the last three years)"/> },

//     {id:7, value: 'Gold Advanced Craft Card', component: <CardForList image_path="/gold-advanced-card-img.png" title="Gold Advanced Craft Card" description="For people who have achieved a Construction Related NVQ or SVQ level 3."/> },

//     {id:8, value: 'Gold Supervisor Card', component: <CardForList image_path="/gold-supervisor-card-img.png" title="Gold Supervisor Card" description="For professionals in a supervisory role with a Construction Related Supervisory SVQ or NVQ level 3 or 4."/> },

//     {id:9, value: 'Black Manager Card', component: <CardForList image_path="/black-manager-card-img.png" title="Black Manager Card" description="For managers and technical roles with NVQ/SVQ level 5, 6, 7, or NVQ level 4 in construction management."/> },

//     {id:10, value: 'White Professionally Qualified Person', component: <CardForList image_path="/white-professionally-qualified-card-img.png" title="White Professionally Qualified Person" description="This card is available to members of CSCS approved Professional Bodies."/> },

//     {id:11, value: 'White Academically Qualified Person', component: <CardForList image_path="/white-academically-qualified-card-img.png" title="White Academically Qualified Person" description="For those with construction-related degrees, HNDs, HNCs, CIOB Certificates, or NEBOSH diplomas."/> },
//   ];

  

//   const [agreed, setAgreed] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [isPreSelected, setIsPreSelected] = useState(false)
//   const dropdownRef = useRef(null);
  

//   const { idx, setIdx } = useContext(UserContext);
//   // console.log(idx,"Context Api")


//   useEffect(() => {
//     if (idx) {
//       const selectedCard = cardTypes.find((card) => card.id === idx);
//       if (selectedCard) {
//         setFormData((prev) => ({ ...prev, cardtype:selectedCard.value }));
//       }
//       setIsPreSelected(true)
//     }
//   }, [idx]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleCheckboxChange = (e) => {
//     setAgreed(e.target.checked);
//   };

//   const handleSelect = (value) => {
//     setFormData({ ...formData, cardtype: value });
//     setIsOpen(false);
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("click", handleClickOutside);
//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   const resetForm = () => {
//     setFormData({
//       title: "",
//       firstName: "",
//       middleName: "",
//       lastName: "",
//       dob: "",
//       nationalInsuranceNumber: "",
//       phoneNumber: "",
//       email: "",
//       cardtype: "",
//       applicationType: "",
//     });
//     setAgreed(false);
//     setIdx(null);
//   };
  
// const firebase=useFirebase()
// // console.log(firebase)
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // firebase.applyForCSCSCard(formData)   
//     // console.log(formData,'Form Data')
    
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-full mx-auto rounded space-y-6"
//     >
//       <div className="pt-6">
//         <h2 className="text-[25px] bg-purple_primary text-white py-4 font-bold mb-6 text-center">
//           Candidate Undergoing the Test
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-4">
//           <div>
//             <label htmlFor="title" className="block text-md font-medium">
//               Title
//             </label>
//             <select
//               id="title"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               className="w-full border border-gray-500 py-4 px-3 mb-4"
//               // required
//             >
//               <option value="" disabled>
//                 Please select the title
//               </option>
//               <option value="Mr">Mr</option>
//               <option value="Ms">Ms</option>
//               <option value="Mrs">Mrs</option>
//               <option value="Miss">Miss</option>
//               <option value="Dr">Dr</option>
//             </select>
//           </div>

//           <div>
//             <label htmlFor="firstName" className="block text-md font-medium">
//               First Name
//             </label>
//             <input
//               type="text"
//               id="firstName"
//               name="firstName"
//               placeholder="First Name"
//               value={formData.firstName}
//               onChange={handleChange}
//               className="w-full border border-gray-500 py-4 px-3"
//               // required
//             />
//           </div>
//           <div>
//             <label htmlFor="middleName" className="block text-md font-medium">
//               Middle Name
//             </label>
//             <input
//               type="text"
//               id="middleName"
//               name="middleName"
//               placeholder="Middle Name"
//               value={formData.middleName}
//               onChange={handleChange}
//               className="w-full border border-gray-500 py-4 px-3"
//             />
//           </div>
//           <div>
//             <label htmlFor="lastName" className="block text-md font-medium">
//               Last Name
//             </label>
//             <input
//               type="text"
//               id="lastName"
//               name="lastName"
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChange={handleChange}
//               className="w-full border border-gray-500 py-4 px-3"
//               // required
//             />
//           </div>
//           <div>
//             <label htmlFor="dob" className="block text-md font-medium">
//               Date of Birth
//             </label>
//             <input
//               type="date"
//               id="dob"
//               name="dob"
//               value={formData.dob}
//               onChange={handleChange}
//               className="w-full border border-gray-500 py-4 px-3 mb-4"
//               // required
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="nationalInsuranceNumber"
//               className="block text-md font-medium"
//             >
//               National Insurance Number (Optional)
//             </label>
//             <input
//               type="text"
//               id="nationalInsuranceNumber"
//               name="nationalInsuranceNumber"
//               placeholder="e.g. QQ 123456 C"
//               value={formData.nationalInsuranceNumber}
//               onChange={handleChange}
//               className="w-full border border-gray-500 py-4 px-3 mb-4"
//             />
//           </div>
//         </div>

//         <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-4">
//           <div>
//             <label htmlFor="phoneNumber" className="block text-md font-medium">
//               Phone Number
//             </label>
//             <input
//               type="text"
//               id="phoneNumber"
//               name="phoneNumber"
//               placeholder="e.g. 2080995236"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               className="w-full border border-gray-500 py-4 px-3 mb-4"
//               // required
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-md font-medium">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="yourname@domain.com"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border border-gray-500 py-4 px-3 mb-4"
//               // required
//             />
//           </div>
//         </div>

//         <h2 className="text-2xl font-bold mb-6">Card Details</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-4">
         
        
//   <div className="relative">
//   <label htmlFor="email" className="block text-md font-medium">
//               Card Type
//             </label>
//       <div
//         onClick={() => setIsOpen(!isOpen)}
//         className="border border-gray-500 py-4 px-3 cursor-pointer"
//       >
//         {formData.cardtype || 'Please select the card from the list'}
//       </div>
//       {isOpen && !isPreSelected ? (
//         <div  className="absolute top-full left-0 w-full bg-white border border-gray-500 max-h-48 overflow-y-auto">
//           {cardTypes.map((card) => (
//             <div
//               key={card.value}
//               onClick={() => handleSelect(card.value)}
//               className="py-2 px-3 hover:bg-gray-200 cursor-pointer"
//             >
//               {card.component}
//             </div>
//           ))}
//         </div>
//       ):''}
//     </div>


//           <div>
//             <label className="block text-md font-medium mb-4">
//               Application Type
//             </label>
//             <div className="flex items-center space-x-6">
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="applicationType"
//                   value="New Card"
//                   checked={formData.applicationType === "New Card"}
//                   onChange={handleChange}
//                   className="w-5 h-5 accent-purple_primary"
//                   required
//                 />
//                 <span className="ml-2">New Card</span>
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="applicationType"
//                   value="Stolen"
//                   checked={formData.applicationType === "Stolen"}
//                   onChange={handleChange}
//                   className="w-5 h-5 accent-purple_primary"
//                 />
//                 <span className="ml-2">Stolen</span>
//               </label>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex items-center mb-4">
//         <input
//           id="agreeCheckbox"
//           type="checkbox"
//           onChange={handleCheckboxChange}
//           className="w-5 h-5 accent-purple_primary rounded focus:ring-purple_primary"
//         />
//         <label
//           htmlFor="agreeCheckbox"
//           className="ml-2 text-sm text-gray-700 select-none"
//         >
//           I agree to the Terms and Conditions and Privacy Policy
//         </label>
//       </div>
//       <button
//         type="submit"
//         disabled={!agreed}
//         className={`inline-flex items-center justify-center w-fit px-4 py-2 rounded ${
//           agreed
//             ? "bg-purple_primary text-white hover:bg-[#84286a]"
//             : "bg-[#854c75] text-white cursor-not-allowed"
//         }`}
//       >
//         <span className="ml-2">Move Forward</span>
//         <MdArrowRight className="size-6" />
//       </button>
//     </form>
//   );
// };

// export default CscsForm;


import React from 'react'

const EssForm = () => {
  return (
    <div>
    Ess Form
      
    </div>
  )
}

export default EssForm

