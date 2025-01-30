"use client";
import React, { useEffect, useState } from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { useFirebase } from '../context/Firebase';
import { toast } from "react-toastify";

const EssCardForm = ({ titleOne, titleTwo, cardType }) => {
//   const { addDataToFirestore } = useFirebase();
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false); 
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const [isSubmitBtnClicked, setisSubmitBtnClicked] = useState(false)

  const [saved, setSaved] = useState(false);
  const [essUsers, setEssUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const firebase=useFirebase()
  
  
  

  // Regex for email validation
  
  const firestore=useFirebase()
  const essCardTypes = ["green-labourer", "blue-skilled","blue-experienced","red-trainee","red-industry","gold-advanced","gold-supervisor","black-manager","white-aqp","white-pqp"];

    useEffect(()=>{
      firebase.fetchAllCscsEssData('ess',essCardTypes,setEssUsers,setIsLoading)
      },[cardType])

  const reset=()=>{
    setFirstName('')
    setLastName('')
    setEmail('')
    setPhone('')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
     // Check if email or phone already exists in the database
  const emailExists = essUsers.some((user) => user.email === email.trim());
  const phoneExists = essUsers.some((user) => user.phone === phone.trim());

  if (emailExists || phoneExists) {
    if(emailExists){
      toast.error("Email already exists!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        className: "bg-red-100 text-red-800 font-medium",
      });
    }
    if(phoneExists){
      toast.error("Mobile number already exists!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        className: "bg-red-100 text-red-800 font-medium",
      });

    }
    return;
  }
     firestore.addEssData(firstName, lastName, email, phone, cardType,setIsSubmitting,'manual');
     setisSubmitBtnClicked(true)
     reset()
  };


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const autoSave = () => {
      if (saved) return; // Avoid repeated saves for the same data
      setSaved(true);
      try {
        const emailExists = essUsers.some((user) => user.email === email.trim());
        const phoneExists = essUsers.some((user) => user.phone === phone.trim());
      
        if (emailExists || phoneExists) {
          // alert("Email or phone number already exists in the database.");
          return;
        }
        // Save user data (replace this with your save function)
        firestore.AutoaddEssData(firstName, lastName, email, phone, cardType,'auto');
        console.log("User details saved successfully!");
      } catch (error) {
        console.error("Error saving user details:", error);
      } finally {
        setSaved(false); // Reset saved state for subsequent changes
      }
    };
 
    const handleEmailBlur = () => {
      if (emailRegex.test(email.trim())) {
        autoSave(); 
      } else {
        // console.log("Invalid email, not saved.");
      }
    };
  
    const handlePhoneBlur = () => {
      if (phone.trim().length > 7) {
        autoSave(); 
      } else {
        // console.log("Invalid phone number, not saved.");
      }
    };


     const saveUserDetails = () => {
        const emailExists = essUsers.some((user) => user.email === email.trim());
          const phoneExists = essUsers.some((user) => user.phone === phone.trim());
        
          if (emailExists || phoneExists) {
          //alert("Email or phone number already exists in the database. On URL change");
            return;
          }
          else{
            if (email || phone) {
              try {
                firestore.AutoaddEssData(firstName, lastName, email, phone, cardType,'auto');
                console.log("User ESS details saved successfully!");
              } catch (error) {
                console.error("Error saving user details:", error);
              }
            }
          }
      };
    
      useEffect(() => {
        
        const handleUrlChange = () => {
          saveUserDetails();
        };
    
        // window.addEventListener("popstate", handleUrlChange); // For history navigation
        window.addEventListener("beforeunload", handleUrlChange); // For page refresh or close
    
       
        return () => {
          // window.removeEventListener("popstate", handleUrlChange);
          window.removeEventListener("beforeunload", handleUrlChange);
        };
      }, [email, phone, cardType]);

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
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)} 
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
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)} 
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
                  pattern="[0-9]{7,15}"
                  placeholder="Enter your phone number"
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                  onBlur={handlePhoneBlur}
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
                  onBlur={handleEmailBlur}
                  className="mt-1 block w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple_primary"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-purple_primary text-white py-2 px-4 mt-4 rounded-md hover:bg-[#84286a] focus:outline-none focus:ring-2 focus:ring-purple_primary focus:ring-offset-2"
          >
            {isSubmitting?"Submitting...":"Submit"}
          </button>
        </div>
      </form>
    </div>
    </div>

  );
};

export default EssCardForm;
