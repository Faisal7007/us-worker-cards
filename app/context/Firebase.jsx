
"use client";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createContext, useContext } from "react";
// import { firestore } from "./firebase"; 

// Firestore imports
import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore"; // Import Firestore methods

// Toast import (If you're using a library for toast notifications)
import { toast } from "react-toastify"; // Ensure you have react-toastify installed

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzbmYBbg6hHKQi9lA3P8IwKOQwOBQ779o",
  authDomain: "construction-cards-services.firebaseapp.com",
  projectId: "construction-cards-services",
  storageBucket: "construction-cards-services.firebasestorage.app",
  messagingSenderId: "341499834053",
  appId: "1:341499834053:web:d178f71e59efcefd0e0aac",
  measurementId: "G-93YYE8G0S8",
  databaseURL: "https://construction-cards-services-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firestore
const firestore = getFirestore(app); 

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
    const addDataToFirestore = async (firstName, lastName, email, phone, cardType) => {
        try {
          const data = {
            firstName,
            lastName,
            email,
            phone,
            createdAt: new Date().toISOString(),
          };
    
          // const collectionName =  `users-for-${cardType}-card`
          // const docRef = doc(firestore, "cscs-cards-users",collectionName);
          // await addDoc(collection(docRef, collectionName), data);

          const docRef = doc(firestore, "cscs-cards-users", cardType); // Specify the document
await addDoc(collection(docRef, "users"), data); 
         
    
        console.log("Data added successfully in Firestore!")
        } catch (error) {
        //   console.error("Error adding data:", error);
        console.log("Data Not added !")

          toast("Error adding data!");
        }
      };

// Apply for CSCS cards

const applyForCSCSCard = async (applicantDetails) => {
  const {
    title,
    firstName,
    middleName,
    lastName,
    dob,
    nationalInsuranceNumber,
    phone,
    email,
    cardType,
    applicationType
  } = applicantDetails;

  // console.log(title,firstName)

  try {
    // Main document data
    const cscsData = {
    title,
    firstName,
    middleName,
    lastName,
    dob,
    nationalInsuranceNumber,
    phone,
    email,
    cardType,
    applicationType,
    appliedAt: new Date().toISOString(),
    };

    await addDoc(collection(firestore, "testimonials"), cscsData);

  console.log("Data added successfully in Firestore! Just")
  } catch (error) {
  //   console.error("Error adding data:", error);
  console.log("Data Not added !")
    // toast("Error adding data!");
  }
};


  return (
    <FirebaseContext.Provider value={{ addDataToFirestore,applyForCSCSCard }}>
      {children}
    </FirebaseContext.Provider>
  );
};
