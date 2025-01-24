
"use client";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { createContext, useContext } from "react";
import { getFirestore, collection, addDoc, doc, setDoc, getDocs } from "firebase/firestore"; 
import{onAuthStateChanged, getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { toast } from "react-toastify"; 


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

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app); 

const auth=getAuth(app)

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {


    const addCscsData = async (firstName, lastName, email, phone, cardType) => {
        try {
          const data = {
            firstName,
            lastName,
            email,
            phone,
            createdAt: new Date().toISOString(),
          };
          const docRef = doc(firestore, "cscs-cards-users", cardType);
          await addDoc(collection(docRef, "users"), data); 
          toast.success("Form Submitted Successfully");
        } catch (error) {
          toast.error("Error adding data!");
        }
      };

      const fetchCscsData = async (cardType, setCscsUsers) => {
        try {
          const docRef = collection(firestore, "cscs-cards-users", cardType, "users");
          const querySnapshot = await getDocs(docRef);
      
          const users = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
      
          users.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      
          // Update state with the sorted users
          setCscsUsers(users);
          console.log("CSCS users fetched successfully:", users);
        } catch (error) {
          console.error("Error fetching CSCS users:", error);
        }
      };


      const fetchAllCscsData = async (setCscsUsers) => {
        try {
          const docRef = collection(firestore, "cscs-cards-users");
          const querySnapshot = await getDocs(docRef);
      
          const users = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
      
          users.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      
          // Update state with the sorted users
          setCscsUsers(users);
          console.log("All CSCS users fetched successfully:", users);
        } catch (error) {
          console.error("Error fetching CSCS users:", error);
        }
      };


      const AutoaddCscsData = async (firstName, lastName, email, phone, cardType) => {
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

          const docRef = doc(firestore, "cscs-cards-users", cardType);
          await addDoc(collection(docRef, "users"), data); 
          // toast.success("Form Submitted Successfully");

          // console.log("Data added successfully in Firestore!")
        } catch (error) {
        //   console.error("Error adding data:", error);
        // console.log("Data Not added !")
          // toast.error("Error adding data!");
        }
      };

      const AutoaddEssData = async (firstName, lastName, email, phone, cardType) => {
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

          const docRef = doc(firestore, "ess-cards-users", cardType);
          await addDoc(collection(docRef, "users"), data); 
         

        } catch (error) {
        
       
          toast.error("Error adding data!");
        }
      };


      const addEssData = async (firstName, lastName, email, phone, cardType) => {
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

          const docRef = doc(firestore, "ess-cards-users", cardType); // Specify the document
          await addDoc(collection(docRef, "users"), data); 
          toast.success("Form Submitted Successfully");

         
        } catch (error) {
        
        console.log("Data Not added !")

          toast("Error adding data!");
        }
      };


      
      const fetchEssData = async (cardType, setEssUsers) => {
        try {
          const docRef = collection(firestore, "ess-cards-users", cardType, "users");
          const querySnapshot = await getDocs(docRef);
      
          const users = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
      
          users.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      
          // Update state with the sorted users
          setEssUsers(users);
          console.log("ESS users fetched successfully:", users);
        } catch (error) {
          console.error("Error fetching CSCS users:", error);
        }
      };


      const applyForESSCard = async (title,firstName,middleName,lastName,dob,nationalInsuranceNumber,phoneNumber,email,cardType,applicationType,formType) => {
        try {
          const data = {
            title,
            firstName,
            middleName,
            lastName,
            dob,
            nationalInsuranceNumber,
            phoneNumber,
            email,
            cardType,
            applicationType,
            createdAt: new Date().toISOString(),
          };
    
          const docRef = doc(firestore, "ess-cards-applicants", formType); 
          await addDoc(collection(docRef, "users"), data);
          toast.success("Applied Successfully");

        } catch (error) {
          toast("Error adding data!");
        }
      };



      const applyForCSCSCard = async (title,firstName,middleName,lastName,dob,nationalInsuranceNumber,phoneNumber,email,cardType,applicationType,formType) => {
        try {
          const data = {
            title,
            firstName,
            middleName,
            lastName,
            dob,
            nationalInsuranceNumber,
            phoneNumber,
            email,
            cardType,
            applicationType,
            createdAt: new Date().toISOString(),
          };
    
          const docRef = doc(firestore, "cscs-cards-applicants", formType); 
          await addDoc(collection(docRef, "users"), data); 
          toast.success("Form Submitted Successfully");

        } catch (error) {
          toast("Error adding data!");
        }
      };

      const applyForCITBTest = async (title,firstName,middleName,lastName,dob,nationalInsuranceNumber,phoneNumber,email,fullAddress,locality,city,country,postcode) => {
        try {
          const data = {
            title,
            firstName,
            middleName,
            lastName,
            dob,
            nationalInsuranceNumber,
            phoneNumber,
            email,
            fullAddress,
            locality,
            city,
            country,
            postcode,
            createdAt: new Date().toISOString(),
          };
    
          const docRef = doc(firestore, "citb-test-applicants", 'all-applicants'); 
          await addDoc(collection(docRef, "users"), data); 
          toast.success("Form Submitted Successfully");

        } catch (error) {
          toast("Error adding data!");
        }
      };


      const applyForHealthAndSafetyCourse = async (title,firstName,middleName,lastName,nationalInsuranceNumber,phoneNumber,email,courseMode,assessmentDate,location) => {

        try {
          const data = {
            title,
            firstName,
            middleName,
            lastName,
            nationalInsuranceNumber,
            phoneNumber,
            email,
            courseMode,
            assessmentDate,
            location,
            createdAt: new Date().toISOString(),
          };
    
          const docRef = doc(firestore, "health-and-safety-course-applicants", 'all-applicants'); 
          await addDoc(collection(docRef, "users"), data); 
          toast.success("Form Submitted Successfully");

        } catch (error) {
          toast("Error adding data!");
        }
      };


const fetchHealthAndSafetyApplicants = async (setApplicants) => {
  try {
    const docRef = collection(firestore, "health-and-safety-course-applicants", "all-applicants", "users");
    const querySnapshot = await getDocs(docRef);

    const applicants = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Sort the data by `createdAt` from latest to oldest
    applicants.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    setApplicants(applicants);
    console.log("Applicants fetched successfully:", applicants);
  } catch (error) {
    console.error("Error fetching applicants:", error);
  }
};
       





      const fetchApplicantsData = async (setApplicants) => {
        try {
          const docRef = collection(firestore, "citb-test-applicants", "all-applicants", "users");
          const querySnapshot = await getDocs(docRef);
      
          const applicants = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
      
          setApplicants(applicants);
          console.log("Data fetched successfully:", applicants);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };


      const LoginUser = async (email, password) => {
        try {
          await signInWithEmailAndPassword(auth, email, password);
          // successLogin();
          toast.success('Login success')
        } catch (error) {
        }
      };


      const onAuthChange = (user2, setUser2) => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser2(user);
            setUserData(user);
            // console.log("Welcome! You are logged in", user2);
          } else {
            // console.log("Not logged in");
            setUser2(null);
          }
        });
      };


  return (
    <FirebaseContext.Provider value={{ addCscsData,AutoaddCscsData,addEssData,AutoaddEssData,applyForESSCard,applyForCSCSCard,applyForCITBTest,fetchApplicantsData,applyForHealthAndSafetyCourse,fetchHealthAndSafetyApplicants,fetchAllCscsData,fetchCscsData,fetchEssData,LoginUser,onAuthChange}}>
      {children}
    </FirebaseContext.Provider>
  );
};
