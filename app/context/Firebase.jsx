
"use client";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { createContext, useContext, useState } from "react";
import { getFirestore, collection, addDoc, doc, setDoc, getDocs, getDoc } from "firebase/firestore"; 
import{onAuthStateChanged, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
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

  // const [userData, setUserData] = useState(null);



    const addCscsData = async (firstName, lastName, email, phone, cardType,setIsSubmitting,submit_type) => {
        try {
          setIsSubmitting(true)
          const data = {
            firstName,
            lastName,
            email,
            phone,
            createdAt: new Date().toISOString(),
            submitType:submit_type
          };
          const docRef = doc(firestore, "cscs-cards-users", cardType);
          await addDoc(collection(docRef, "users"), data); 
          toast.success("Form Submitted Successfully");
        } catch (error) {
          toast.error("Error adding data!");
        }
        finally{
          setIsSubmitting(false)
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
    
          setCscsUsers(users);
         
        } catch (error) {
          
        }
      };

const fetchAllCscsEssData = async (isCard,cardTypes, setAllUsers,setIsLoading) => {
  try {
    setIsLoading(true)
    let allUsers = [];
    
    for (const cardType of cardTypes) {
      const docRef = collection(firestore,  `${isCard}-cards-users`, cardType, "users");
      const querySnapshot = await getDocs(docRef);

      const users = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        cardType, 
        ...doc.data(),
      }));

      allUsers = [...allUsers, ...users]; 
    }

    allUsers.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));


    setAllUsers(allUsers);
    setIsLoading(false)
  } catch (error) {
   
  }
};

      const AutoaddCscsData = async (firstName, lastName, email, phone, cardType,submit_type) => {
        try {
          const data = {
            firstName,
            lastName,
            email,
            phone,
            createdAt: new Date().toISOString(),
            submitType:submit_type
          };
    
          const docRef = doc(firestore, "cscs-cards-users", cardType);
          await addDoc(collection(docRef, "users"), data); 
        
        } catch (error) {
          // toast.error("Error adding data!");
        }
      };

      const addEssData = async (firstName, lastName, email, phone, cardType,setIsSubmitting,submit_type) => {
        try {
          setIsSubmitting(true)
          const data = {
            firstName,
            lastName,
            email,
            phone,
            createdAt: new Date().toISOString(),
            submitType:submit_type
          };
    
          const docRef = doc(firestore, "ess-cards-users", cardType);
          await addDoc(collection(docRef, "users"), data); 
          toast.success("Form Submitted Successfully");
        } catch (error) {
        
          toast("Error adding data!");
        }
        finally{
          setIsSubmitting(false)
        }
      };

      const AutoaddEssData = async (firstName, lastName, email, phone, cardType,submit_type) => {
        try {
          const data = {
            firstName,
            lastName,
            email,
            phone,
            createdAt: new Date().toISOString(),
            submitType:submit_type
          };
    
          const docRef = doc(firestore, "ess-cards-users", cardType);
          await addDoc(collection(docRef, "users"), data); 

        } catch (error) {
          toast.error("Error adding data!");
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
          // console.log("ESS users fetched successfully:", users);
        } catch (error) {
          // console.error("Error fetching CSCS users:", error);
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

const fetchCscsEssApplicants = async (formType, setApplicants,setIsLoading) => {
  try {
    setIsLoading(true)
    const docRef = collection(firestore, `${formType}-cards-applicants`, formType, "users");
    const querySnapshot = await getDocs(docRef);

    // Map through the documents and format the data
    const applicants = querySnapshot.docs.map((doc) => ({
      id: doc.id, // Add the document ID
      ...doc.data(),
    }));

    // Sort the applicants by createdAt (newest first)
    applicants.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    // Update state with the sorted applicants
    setApplicants(applicants);
    setIsLoading(false)
    // console.log("CSCS Applicants fetched successfully:", applicants);
  } catch (error) {
    // console.error("Error fetching CSCS applicants:", error);
    toast.error("Error fetching applicants!");
  }
};

const fetchCscsEssApplicantById = async (form_type, userId, setApplicant) => {
  try {
    // Reference to the document using the user's id
    const docRef = doc(firestore, `${form_type}-cards-applicants`, form_type, "users", userId);
    const docSnapshot = await getDoc(docRef);

    setApplicant(docSnapshot.data())

    // if (docSnapshot.exists()) {
    //   const applicant = { id: docSnapshot.id, ...docSnapshot.data()};
    //   setApplicant(applicant); // Update state with the applicant data
    //   console.log("Applicant data fetched successfully:", applicant);
    // } else {
    //   // console.log("No applicant found with this ID.");
    //   toast.error("No applicant found with this ID!");
    // }
  } catch (error) {
    // console.error("Error fetching applicant by ID:", error);
    toast.error("Error fetching applicant!");
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

      const applyForCITBTest = async (title,firstName,middleName,lastName,dob,nationalInsuranceNumber,phoneNumber,email,fullAddress,locality,city,country,postcode,setIsSubmitting) => {
        try {
          setIsSubmitting(true)
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
        finally {
          setIsSubmitting && setIsSubmitting(false); 
        }
      };

      const fetchCITBTestApplicants = async (setApplicants,setIsLoading) => {
        try {
          setIsLoading(true)
          const docRef = collection(firestore, "citb-test-applicants", "all-applicants", "users");
          const querySnapshot = await getDocs(docRef);
      
          // Map through the documents and format the data
          const applicants = querySnapshot.docs.map((doc) => ({
            id: doc.id, // Add the document ID
            ...doc.data(),
          }));
      
          // Sort the applicants by createdAt (newest first)
          applicants.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      
          // Update state with the sorted applicants
          setApplicants(applicants);
          setIsLoading(false)

          // console.log("CITB Test Applicants fetched successfully:", applicants);
        } catch (error) {
          // console.error("Error fetching CITB Test applicants:", error);
          toast.error("Error fetching applicants!");
        }
      };
     
const fetchCitbApplicantById = async (userId, setApplicant) => {
  try {
    // Reference to the document using the user's id
    const docRef = doc(firestore, "citb-test-applicants", "all-applicants", "users", userId);
    const docSnapshot = await getDoc(docRef);

    setApplicant(docSnapshot.data())

  } catch (error) {
    // console.error("Error fetching applicant by ID:", error);
    toast.error("Error fetching applicant!");
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

const fetchHealthAndSafetyApplicants = async (setApplicants,setIsLoading) => {
  try {
    setIsLoading(true)
    const docRef = collection(firestore, "health-and-safety-course-applicants", "all-applicants", "users");
    const querySnapshot = await getDocs(docRef);

    const applicants = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    
    applicants.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    setApplicants(applicants);
    setIsLoading(false)
    // console.log("Applicants fetched successfully:", applicants);
  } catch (error) {
    // console.error("Error fetching applicants:", error);
  }
};

const fetchHealthAndSafetyApplicantById = async (userId,setApplicant,setIsLoading) => {
  try {
    setIsLoading(true)
    const docRef = doc(firestore, "health-and-safety-course-applicants", "all-applicants", "users", userId);
    const docSnapshot = await getDoc(docRef);

    setApplicant(docSnapshot.data())
    setIsLoading(false)

  } catch (error) {
    // console.error("Error fetching applicant by ID:", error);
    toast.error("Error fetching applicant!");
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
          // console.log("Data fetched successfully:", applicants);
        } catch (error) {
          // console.error("Error fetching data:", error);
        }
      };

      const addGroupBooking = async (formData, setIsSubmitting) => {
        try {
          setIsSubmitting && setIsSubmitting(true); 
      
          const data = {
            ...formData,
            createdAt: new Date().toISOString(),
          };
    
          const docRef = collection(firestore, "group-booking");
    
          await addDoc(docRef, data);
  
          toast.success("Form data submitted successfully!");
          // console.log("Data added to Firestore:", data);
        } catch (error) {
          // console.error("Error adding form data to Firestore:", error);
          toast.error("Error submitting form data!");
        } finally {
          setIsSubmitting && setIsSubmitting(false); 
        }
      };

const fetchGroupBooking = async (setFormDataList, setIsLoading) => {
  try {
    setIsLoading && setIsLoading(true); 

    const docRef = collection(firestore, "group-booking"); 

    const querySnapshot = await getDocs(docRef);

    const formDataList = querySnapshot.docs.map((doc) => ({
      id: doc.id, 
      ...doc.data(), 
    }));

    formDataList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setFormDataList && setFormDataList(formDataList);
  } catch (error) {

  } finally {
    setIsLoading && setIsLoading(false);
  }
};

const fetchGroupBookingById = async (userId, setApplicant) => {
  try {
    const docRef = doc(firestore,  "group-booking", userId);
    const docSnapshot = await getDoc(docRef);
    setApplicant(docSnapshot.data())
  } catch (error) {
    toast.error("Error fetching applicant!");
  }
};

const addContactUs = async (formValues, setIsLoading) => {
  try {
    setIsLoading && setIsLoading(true); 
    const data = {
      ...formValues,
      createdAt: new Date().toISOString(),
    };

 
    const docRef = collection(firestore, "contact-us"); 
    await addDoc(docRef, data);

    toast.success("Message send successfully!");
  } catch (error) {
    toast.error("Error submitting form!");
  } finally {
    setIsLoading && setIsLoading(false);
  }
};

const autoAddContactUs = async (formValues,submit_type) => {
  try {
    
    const data = {
      ...formValues,
      createdAt: new Date().toISOString(),
      submitType:submit_type
    };
    const docRef = collection(firestore, "contact-us"); 
    await addDoc(docRef, data);
  } catch (error) {
    // toast.error("Error submitting form!");
  } 
};

const fetchContactUsData = async (setContactUsData, setIsLoading) => {
  try {
    setIsLoading && setIsLoading(true); 


    const docRef = collection(firestore, "contact-us");

    const querySnapshot = await getDocs(docRef);

    const contactUsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    contactUsData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    setContactUsData(contactUsData);
  } catch (error) {

    toast.error("Error fetching data!");
  } finally {
    setIsLoading && setIsLoading(false); 
  }
};

const fetchContactUsDataById = async (userId,setApplicant) => {
  try {
    const docRef = doc(firestore, "contact-us", userId);
    const docSnapshot = await getDoc(docRef);
    setApplicant(docSnapshot.data())
  } catch (error) {
    toast.error("Error fetching applicant!");
  }
};

      const LoginUser = async (email, password,setIsSubmitting) => {
        try {
          setIsSubmitting(true)
          await signInWithEmailAndPassword(auth, email, password);
          
          toast.success('Login success')
          setIsSubmitting(false)
        } catch (error) {
          toast.error('Envalid email or password')
        }
        finally{
          setIsSubmitting(false)
        }
      };

      const onAuthChange = (setUser) => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
          } else {
            setUser(null);
          }
        });
      };

      const logOut = () => {
        signOut(auth);
      };


  return (
    <FirebaseContext.Provider value={{ addCscsData,AutoaddCscsData,addEssData,AutoaddEssData,applyForESSCard,applyForCSCSCard,applyForCITBTest,fetchApplicantsData,applyForHealthAndSafetyCourse,fetchHealthAndSafetyApplicants,fetchAllCscsEssData,fetchCscsData,fetchEssData,fetchCscsEssApplicants,fetchCscsEssApplicantById,fetchCITBTestApplicants,fetchCitbApplicantById,fetchHealthAndSafetyApplicantById,addGroupBooking,fetchGroupBooking,fetchGroupBookingById,addContactUs,autoAddContactUs,fetchContactUsData,fetchContactUsDataById,LoginUser,onAuthChange,logOut}}>
      {children}
    </FirebaseContext.Provider>
  );
};
