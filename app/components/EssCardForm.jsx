"use client";
import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { useFirebase } from '../context/Firebase';

const EssCardForm = ({ titleOne, titleTwo, cardType }) => {
//   const { addDataToFirestore } = useFirebase();
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false); 
  const [isSubmitBtnClicked, setisSubmitBtnClicked] = useState(false)
  
  const firestore=useFirebase()

  const handleSubmit = (e) => {
    e.preventDefault();
     firestore.addEssData(firstName, lastName, email, phone, cardType);
     setisSubmitBtnClicked(true)
  };


  
    const handleAutoSubmit=()=>{
      // addCscsData(firstName, lastName, email, phone, cardType);
      // alert('jI ha')
      if (submitted || phone.trim() === ""||email.trim()==="") {
        return; 
      }
      setSubmitted(true);
      try {
  
        firestore.AutoaddEssData(firstName, lastName, email, phone, cardType);  
        console.log("Auto Phone number submitted successfully:");
      } catch (error) {
        console.error("Error submitting phone number:");
      } finally {
        setSubmitted(false); // Reset submitted state for future interactions
      }
    }
  
    if (isSubmitBtnClicked==='false') {
      handleAutoSubmit();
    }

  



  return (
    <div className='w-[660px] media-max-700px:w-full'>

    <div className="px-6 py-[26px]  bg-gray-200 shadow-md rounded-lg">
      <h2 className="text-xl font-bold text-center mb-2">{titleOne}</h2>
      <h2 className="text-lg font-semibold text-center mb-6 media-max-480px:text-[16px] media-max-480px:text-justify">{titleTwo}</h2>
      
      <form onSubmit={handleSubmit}>
        <div>
          <div className="grid grid-cols-2 gap-4 mb-5 media-max-480px:grid-cols-1 ">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                value={firstName} // Bind value to state
                onChange={(e) => setFirstName(e.target.value)} // Update state on change
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple_primary"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                value={lastName} // Bind value to state
                onChange={(e) => setLastName(e.target.value)} // Update state on change
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple_primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8 media-max-480px:grid-cols-1">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <FaPhoneAlt />
                </span>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={phone} // Bind value to state
                  onChange={(e) => setPhone(e.target.value)} 
                  onBlur={()=>handleAutoSubmit()}
                  className="mt-1 block w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple_primary"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={()=>handleAutoSubmit()}
                  className="mt-1 block w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple_primary"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-purple_primary text-white py-2 px-4 mt-4 rounded-md hover:bg-[#84286a] focus:outline-none focus:ring-2 focus:ring-purple_primary focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>

  );
};

export default EssCardForm;
