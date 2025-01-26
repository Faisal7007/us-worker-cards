
"use client";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { createContext, useContext } from "react";
import { getFirestore, collection, addDoc, doc, setDoc, getDocs, getDoc } from "firebase/firestore"; 
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


    const addCscsData = async (firstName, lastName, email, phone, cardType,setIsSubmitting) => {
        try {
          setIsSubmitting(true)
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
          console.log("CSCS users fetched successfully:", users);
        } catch (error) {
          console.error("Error fetching CSCS users:", error);
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
    console.error("Error fetching all CSCS users:", error);
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
    
          const docRef = doc(firestore, "cscs-cards-users", cardType);
          await addDoc(collection(docRef, "users"), data); 
        
        } catch (error) {
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
    
          const docRef = doc(firestore, "ess-cards-users", cardType);
          await addDoc(collection(docRef, "users"), data); 

        } catch (error) {
          toast.error("Error adding data!");
        }
      };

      const addEssData = async (firstName, lastName, email, phone, cardType,setIsSubmitting) => {
        try {
          setIsSubmitting(true)
          const data = {
            firstName,
            lastName,
            email,
            phone,
            createdAt: new Date().toISOString(),
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
    console.log("CSCS Applicants fetched successfully:", applicants);
  } catch (error) {
    console.error("Error fetching CSCS applicants:", error);
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
    console.error("Error fetching applicant by ID:", error);
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

          console.log("CITB Test Applicants fetched successfully:", applicants);
        } catch (error) {
          console.error("Error fetching CITB Test applicants:", error);
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
    console.error("Error fetching applicant by ID:", error);
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

    // Sort the data by `createdAt` from latest to oldest
    applicants.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    setApplicants(applicants);
    setIsLoading(false)
    console.log("Applicants fetched successfully:", applicants);
  } catch (error) {
    console.error("Error fetching applicants:", error);
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
    console.error("Error fetching applicant by ID:", error);
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
          console.log("Data fetched successfully:", applicants);
        } catch (error) {
          console.error("Error fetching data:", error);
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
          console.log("Data added to Firestore:", data);
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
    console.log("Fetched form data successfully:", formDataList);
  } catch (error) {
    console.error("Error fetching form data from Firestore:", error);
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
    console.error("Error fetching applicant by ID:", error);
    toast.error("Error fetching applicant!");
  }
};



const addContactUs = async (formValues, setIsLoading) => {
  try {
    setIsLoading && setIsLoading(true); // Optional loading state

    // Prepare the data to save, adding a timestamp
    const data = {
      ...formValues,
      createdAt: new Date().toISOString(),
    };

    // Reference to the Firestore collection
    const docRef = collection(firestore, "contact-us"); 
    await addDoc(docRef, data);

    // Success notification
    toast.success("Form submitted successfully!");
  } catch (error) {
    console.error("Error saving form values to database:", error);
    toast.error("Error submitting form!");
  } finally {
    setIsLoading && setIsLoading(false); // Reset loading state
  }
};


const fetchContactUsData = async (setContactUsData, setIsLoading) => {
  try {
    setIsLoading && setIsLoading(true); // Optional loading state

    // Reference to the Firestore collection
    const docRef = collection(firestore, "contact-us");

    // Fetch the documents from the collection
    const querySnapshot = await getDocs(docRef);

    // Map through the documents and format the data
    const contactUsData = querySnapshot.docs.map((doc) => ({
      id: doc.id, // Include the document ID
      ...doc.data(),
    }));

    // Sort the data by `createdAt` in descending order (latest first)
    contactUsData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    // Update the state with fetched data
    setContactUsData(contactUsData);

    console.log("Contact Us data fetched successfully:", contactUsData);
  } catch (error) {
    console.error("Error fetching Contact Us data:", error);
    toast.error("Error fetching data!");
  } finally {
    setIsLoading && setIsLoading(false); // Reset loading state
  }
};


const fetchContactUsDataById = async (userId,setApplicant,setIsLoading) => {
  try {
    setIsLoading(true)
    const docRef = doc(firestore, "contact-us", userId);
    const docSnapshot = await getDoc(docRef);

    setApplicant(docSnapshot.data())
    setIsLoading(false)

  } catch (error) {
    console.error("Error fetching applicant by ID:", error);
    toast.error("Error fetching applicant!");
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
    <FirebaseContext.Provider value={{ addCscsData,AutoaddCscsData,addEssData,AutoaddEssData,applyForESSCard,applyForCSCSCard,applyForCITBTest,fetchApplicantsData,applyForHealthAndSafetyCourse,fetchHealthAndSafetyApplicants,fetchAllCscsEssData,fetchCscsData,fetchEssData,fetchCscsEssApplicants,fetchCscsEssApplicantById,fetchCITBTestApplicants,fetchCitbApplicantById,fetchHealthAndSafetyApplicantById,addGroupBooking,fetchGroupBooking,fetchGroupBookingById,addContactUs,fetchContactUsData,fetchContactUsDataById,LoginUser,onAuthChange}}>
      {children}
    </FirebaseContext.Provider>
  );
};
