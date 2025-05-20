
"use client";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { createContext, useContext, useState } from "react";
import { getFirestore, collection, addDoc, doc, setDoc, getDocs, getDoc, deleteDoc, where, query, updateDoc, writeBatch } from "firebase/firestore";
import { onAuthStateChanged, getAuth, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from 'firebase/auth'
import { toast } from "react-toastify";


// const firebaseConfig = {
//   apiKey: "AIzaSyA601k0fvF6Q5ZZ-xUKDDeFlW4B3m4ipGQ",
//   authDomain: "construction-cards-services.firebaseapp.com",
//   projectId: "construtioncardservices",
//   storageBucket: "construction-cards-services.firebasestorage.app",
//   messagingSenderId: "341499834053",
//   appId: "1:658917393195:web:380c7837d08dd8c5a93b6e",
//   measurementId: "G-93YYE8G0S8",
//   databaseURL: "https://construction-cards-services-default-rtdb.firebaseio.com"
// };

const firebaseConfig = {
  apiKey: "AIzaSyA601k0fvF6Q5ZZ-xUKDDeFlW4B3m4ipGQ",
  authDomain: "construtioncardservices.firebaseapp.com",
  projectId: "construtioncardservices",
  storageBucket: "construtioncardservices.firebasestorage.app",
  messagingSenderId: "658917393195",
  appId: "1:658917393195:web:380c7837d08dd8c5a93b6e",
  measurementId: "G-2NS8DNH22R",
  databaseURL: "https://construtioncardservices-default-rtdb.firebaseio.com/"
};

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain:process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
//   databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
// };

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

const auth = getAuth(app)

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {

  // const [userData, setUserData] = useState(null);



  // const addCscsData = async (firstName, lastName, email, phone, cardType,setIsSubmitting,submit_type) => {
  //     try {
  //       setIsSubmitting(true)
  //       const data = {
  //         firstName,
  //         lastName,
  //         email,
  //         phone,
  //         createdAt: new Date().toISOString(),
  //         cardType:cardType,
  //         submitType:submit_type
  //       };
  //       const docRef = doc(firestore, "cscs-cards-users", cardType);
  //       await addDoc(collection(docRef, "users"), data); 
  //       toast.success("Form Submitted Successfully");
  //     } catch (error) {
  //       toast.error("Error adding data!");
  //     }
  //     finally{
  //       setIsSubmitting(false)
  //     }
  //   };



  const addCscsData = async (formData, submit_type) => {
    try {
      const {
        title,
        firstName,
        middleName,
        lastName,
        dob,
        nationalInsuranceNumber,
        phoneNumber,
        email,
        addressLine1,
        town,
        city,
        pincode,
        citbId,
        cardtype,
        variant
      } = formData;

      console.log("Calling From, CSCS", formData);

      const usersCollection = collection(firestore, "cscs-cards-users", "cscs", "users");

      const data = {
        title,
        firstName,
        middleName,
        lastName,
        dob,
        nationalInsuranceNumber,
        phone: phoneNumber,
        email,
        addressLine1,
        town,
        city,
        pincode,
        citbId,
        cardtype,
        variant,
        submitType: submit_type,
        createdAt: new Date().toISOString(),
      };

      await addDoc(usersCollection, data); // ➕ Always create new entry

      toast.success("Form submitted successfully");

      // 🔁 Redirect to Stripe
      if (formData.variant === "Digital") {
        window.location.href = "https://buy.stripe.com/5kA5mdbQV8jh7T26ov";
      } else {
        window.location.href = "https://buy.stripe.com/3cs15X8EJ5752yI6ou";
      }
    } catch (error) {
      console.error(error);
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

      setCscsUsers(users);

    } catch (error) {

    }
  };

  const fetchAllCscsEssData = async (isCard, cardTypes, setAllUsers, setIsLoading) => {
    try {
      setIsLoading(true);
      let allUsers = [];

      for (const cardType of cardTypes) {
        const docRef = doc(firestore, `${isCard}-cards-users`, cardType);
        const usersCollection = collection(docRef, "users");
        const querySnapshot = await getDocs(usersCollection);

        const users = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          cardType,
          ...doc.data(),
        }));

        allUsers = [...allUsers, ...users];
      }

      allUsers.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

      setAllUsers(allUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error("Failed to fetch user data.");
    } finally {
      setIsLoading(false);
    }
  };


  const AutoaddCscsData = async (firstName, lastName, email, phone, cardType, submit_type) => {
    try {
      const data = {
        firstName,
        lastName,
        email,
        phone,
        createdAt: new Date().toISOString(),
        cardType: cardType,
        submitType: submit_type,
      };

      const docRef = doc(firestore, "cscs-cards-users", cardType);
      await addDoc(collection(docRef, "users"), data);

    } catch (error) {
      // toast.error("Error adding data!");
    }
  };




  const deleteCscsData = async (cardTypes, userIds, setIsDeleting) => {
    console.log("Card Types:", cardTypes); // Example: ['green-labourer', 'blue-skilled']
    console.log("User IDs:", userIds);     // Example: ['KnDpqYxlmJlXMAxgBbNU', '4ka0jJb7erYKDyk5txSN']

    try {
      setIsDeleting(true);

      const deletePromises = [];

      // Iterate over each cardType
      cardTypes.forEach((cardType) => {
        // Iterate over each user ID for the current cardType
        userIds.forEach((id) => {
          const userDocRef = doc(firestore, "cscs-cards-users", cardType, "users", id);
          deletePromises.push(deleteDoc(userDocRef)); // Add delete operation to the array
        });
      });

      await Promise.all(deletePromises); // Execute all delete operations in parallel

      toast.success("Selected users deleted successfully");
    } catch (error) {
      console.error("Error deleting users:", error);
      toast.error("Error deleting users!");
    } finally {
      setIsDeleting(false);
    }
  };






  // const addEssData = async (firstName, lastName, email, phone, cardType,setIsSubmitting,submit_type) => {
  //   try {
  //     setIsSubmitting(true)
  //     const data = {
  //       firstName,
  //       lastName,
  //       email,
  //       phone,
  //       createdAt: new Date().toISOString(),
  //       cardType:cardType,

  //       submitType:submit_type
  //     };

  //     const docRef = doc(firestore, "ess-cards-users", cardType);
  //     await addDoc(collection(docRef, "users"), data); 
  //     toast.success("Form Submitted Successfully");
  //   } catch (error) {

  //     toast("Error adding data!");
  //   }
  //   finally{
  //     setIsSubmitting(false)
  //   }
  // };



  const addEssData = async (formData, submit_type) => {
    try {
      const {
        title,
        firstName,
        middleName,
        lastName,
        dob,
        nationalInsuranceNumber,
        phoneNumber,
        email,
        addressLine1,
        town,
        city,
        pincode,
        citbId,
        cardtype,
        variant,
      } = formData;

      const usersCollection = collection(firestore, "ess-cards-users", "ess", "users");

      const data = {
        title,
        firstName,
        middleName,
        lastName,
        dob,
        nationalInsuranceNumber,
        phoneNumber,
        email,
        addressLine1,
        town,
        city,
        pincode,
        citbId,
        cardtype,
        variant,
        submitType: submit_type,
        createdAt: new Date().toISOString(),
      };

      await addDoc(usersCollection, data); // ➕ Always add new document

      toast.success("Form submitted successfully");

      // 🔁 Redirect to Stripe checkout
      if (formData.variant === "Digital")
        window.location.href = "https://buy.stripe.com/5kA5mdbQV8jh7T26ov";
      else
        window.location.href = "https://buy.stripe.com/3cs15X8EJ5752yI6ou";
    } catch (error) {
      console.error(error);
      toast.error("Error adding data!");
    }
  };





  const AutoaddEssData = async (firstName, lastName, email, phone, cardType, submit_type) => {
    try {
      const data = {
        firstName,
        lastName,
        email,
        phone,
        createdAt: new Date().toISOString(),
        cardType: cardType,
        submitType: submit_type
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



  const deleteEssData = async (cardTypes, userIds, setIsDeleting) => {
    console.log("Card Types:", cardTypes); // Example: ['green-labourer', 'blue-skilled']
    console.log("User IDs:", userIds);     // Example: ['KnDpqYxlmJlXMAxgBbNU', '4ka0jJb7erYKDyk5txSN']

    try {
      setIsDeleting(true);

      const deletePromises = [];

      // Iterate over each cardType
      cardTypes.forEach((cardType) => {
        // Iterate over each user ID for the current cardType
        userIds.forEach((id) => {
          const userDocRef = doc(firestore, "ess-cards-users", cardType, "users", id);
          deletePromises.push(deleteDoc(userDocRef)); // Add delete operation to the array
        });
      });

      await Promise.all(deletePromises); // Execute all delete operations in parallel

      toast.success("Selected users deleted successfully");
    } catch (error) {
      console.error("Error deleting users:", error);
      toast.error("Error deleting users!");
    } finally {
      setIsDeleting(false);
    }
  };








  const applyForCSCSCard = async (title, firstName, middleName, lastName, dob, nationalInsuranceNumber, phoneNumber, email, cardType, applicationType, formType) => {
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

  const fetchCscsEssApplicants = async (formType, setApplicants, setIsLoading) => {
    try {
      setIsLoading(true);

      // Build the path: `${formType}-cards-applicants` collection, then document with ID `${formType}`
      const docRef = doc(firestore, `${formType}-cards-users`, formType);
      const usersCollection = collection(docRef, "users");

      const querySnapshot = await getDocs(usersCollection);

      const applicants = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log(querySnapshot, "Query")

      applicants.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

      setApplicants(applicants);
    } catch (error) {
      console.error("Error fetching applicants:", error);
      toast.error("Error fetching applicants!");
    } finally {
      setIsLoading(false);
    }
  };


  const fetchCscsEssApplicantById = async (form_type, userId, setApplicant) => {
    try {
      // Reference to the document using the user's id
      const docRef = doc(firestore, `${form_type}-cards-applicants`, form_type, "users", userId);
      const docSnapshot = await getDoc(docRef);

      setApplicant(docSnapshot.data())

    } catch (error) {
      // console.error("Error fetching applicant by ID:", error);
      toast.error("Error fetching applicant!");
    }
  };



  const deleteCscsApplications = async (formType, selectedIds) => {
    if (selectedIds.length === 0) {
      toast.error("No applications selected for deletion!");
      return;
    }

    const batch = writeBatch(firestore);
    try {
      selectedIds.forEach((id) => {
        const docRef = doc(firestore, `cscs-cards-applicants/${formType}/users`, id);
        batch.delete(docRef);
      });

      await batch.commit();
      toast.success("Selected applications deleted successfully!");
    } catch (error) {
      console.error("Error deleting CSCS applications:", error);
      toast.error("Error deleting applications!");
    }
  };


  const deleteEssApplications = async (formType, selectedIds) => {
    if (selectedIds.length === 0) {
      toast.error("No applications selected for deletion!");
      return;
    }

    const batch = writeBatch(firestore);
    try {
      selectedIds.forEach((id) => {
        const docRef = doc(firestore, `ess-cards-applicants/${formType}/users`, id);
        batch.delete(docRef);
      });

      await batch.commit();
      toast.success("Selected applications deleted successfully!");
    } catch (error) {
      console.error("Error deleting CSCS applications:", error);
      toast.error("Error deleting applications!");
    }
  };


  const applyForESSCard = async (title, firstName, middleName, lastName, dob, nationalInsuranceNumber, phoneNumber, email, cardType, applicationType, formType) => {
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

  const applyForCITBTest = async (title, firstName, middleName, lastName, dob, nationalInsuranceNumber, phoneNumber, email, fullAddress, locality, city, country, postcode, test_center, setIsSubmitting) => {
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
        testCenter: test_center,
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




  const deleteCitbApplications = async (selectedIds, setIsDeleting) => {
    if (selectedIds.length === 0) {
      toast.error("No applications selected for deletion!");
      return;
    }

    setIsDeleting(true);
    const batch = writeBatch(firestore);

    try {
      selectedIds.forEach((id) => {
        const docRef = doc(firestore, "citb-test-applicants/all-applicants/users", id);
        batch.delete(docRef);
      });

      await batch.commit();
      toast.success("Selected applications deleted successfully!");
    } catch (error) {
      console.error("Error deleting CITB applications:", error);
      toast.error("Error deleting applications!");
    } finally {
      setIsDeleting(false);
    }
  };


  const fetchCITBTestApplicants = async (setApplicants, setIsLoading) => {
    try {
      setIsLoading(true)
      const docRef = collection(firestore, "citb-test-applicants", "all-applicants", "users");
      const querySnapshot = await getDocs(docRef);
      const applicants = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      applicants.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setApplicants(applicants);
      setIsLoading(false)
    } catch (error) {

      toast.error("Error fetching applicants!");
    }
  };

  const fetchCitbApplicantById = async (userId, setApplicant) => {
    try {

      const docRef = doc(firestore, "citb-test-applicants", "all-applicants", "users", userId);
      const docSnapshot = await getDoc(docRef);

      setApplicant(docSnapshot.data())

    } catch (error) {

      toast.error("Error fetching applicant!");
    }
  };

  const applyForHealthAndSafetyCourse = async (title, firstName, middleName, lastName, nationalInsuranceNumber, phoneNumber, email, courseMode, assessmentDate, location, setIsSubmitting) => {
    setIsSubmitting(true)
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

      window.location.href = "https://buy.stripe.com/3cs2a19INbvt6OYcMQ";

    } catch (error) {
      toast("Error adding data!");
    }
    finally {
      setIsSubmitting(false)
    }
  };



  const fetchHealthAndSafetyApplicants = async (setApplicants, setIsLoading) => {
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

  const fetchHealthAndSafetyApplicantById = async (userId, setApplicant, setIsLoading) => {
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



  const deleteHealthAndSafetyApplications = async (selectedIds, setIsDeleting) => {
    if (selectedIds.length === 0) {
      toast.error("No applications selected for deletion!");
      return;
    }

    setIsDeleting(true);
    const batch = writeBatch(firestore);

    try {
      selectedIds.forEach((id) => {
        const docRef = doc(firestore, "health-and-safety-course-applicants/all-applicants/users", id);
        batch.delete(docRef);
      });

      await batch.commit();
      toast.success("Selected applications deleted successfully!");
    } catch (error) {
      console.error("Error deleting Health and Safety applications:", error);
      toast.error("Error deleting applications!");
    } finally {
      setIsDeleting(false);
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

      toast.success("Form submitted successfully!");
      // console.log("Data added to Firestore:", data);
    } catch (error) {
      // console.error("Error adding form data to Firestore:", error);
      toast.error("Error submitting form !");
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
      const docRef = doc(firestore, "group-booking", userId);
      const docSnapshot = await getDoc(docRef);
      setApplicant(docSnapshot.data())
    } catch (error) {
      toast.error("Error fetching applicant!");
    }
  };



  const deleteGroupBookings = async (selectedIds, setIsDeleting) => {
    if (selectedIds.length === 0) {
      toast.error("No bookings selected for deletion!");
      return;
    }

    setIsDeleting && setIsDeleting(true);
    const batch = writeBatch(firestore);

    try {
      selectedIds.forEach((id) => {
        const docRef = doc(firestore, "group-booking", id);
        batch.delete(docRef);
      });

      await batch.commit();
      toast.success("Selected group bookings deleted successfully!");
    } catch (error) {
      console.error("Error deleting group bookings:", error);
      toast.error("Error deleting bookings!");
    } finally {
      setIsDeleting && setIsDeleting(false);
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

  const autoAddContactUs = async (formValues, submit_type) => {
    try {

      const data = {
        ...formValues,
        createdAt: new Date().toISOString(),
        submitType: submit_type
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

      console.log("Goo")
      const docRef = collection(firestore, "contact-us");
      console.log(docRef)

      const querySnapshot = await getDocs(docRef);
      console.log(querySnapshot, "Good")

      const contactUsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      contactUsData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

      setContactUsData(contactUsData);
    } catch (error) {
      console.log(error, "ERROR")
      toast.error("Error fetching data!");
    } finally {
      setIsLoading && setIsLoading(false);
    }
  };

  const fetchContactUsDataById = async (userId, setApplicant) => {
    try {
      const docRef = doc(firestore, "contact-us", userId);
      const docSnapshot = await getDoc(docRef);
      setApplicant(docSnapshot.data())
    } catch (error) {
      toast.error("Error fetching applicant!");
    }
  };




  const deleteContactUsMessages = async (ids, setIsDeleting) => {
    if (!ids || ids.length === 0) {
      toast.error("No messages selected for deletion!");
      return;
    }

    try {
      setIsDeleting && setIsDeleting(true);

      const batch = writeBatch(firestore);
      const docRef = collection(firestore, "contact-us");

      ids.forEach((id) => {
        const docToDelete = doc(docRef, id);
        batch.delete(docToDelete);
      });

      await batch.commit();

      toast.success("Selected messages deleted successfully!");
    } catch (error) {
      toast.error("Error deleting messages!");
    } finally {
      setIsDeleting && setIsDeleting(false);
    }
  };

  const LoginUser = async (email, password, setIsSubmitting) => {
    try {
      setIsSubmitting(true)
      await signInWithEmailAndPassword(auth, email, password);

      toast.success('Login success')
      // setIsSubmitting(false)
    } catch (error) {
      toast.error('Envalid email or password')
    }
    finally {
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


  const ForgotPassword = async (email, setIsSubmitting) => {
    try {
      setIsSubmitting(true);
      await sendPasswordResetEmail(auth, email);
      toast.success("Check your inbox.");
    } catch (error) {
      toast.error("Failed to send. Please check your email address.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FirebaseContext.Provider value={{ addCscsData, AutoaddCscsData, addEssData, AutoaddEssData, deleteCscsData, applyForESSCard, applyForCSCSCard, deleteCscsApplications, deleteEssApplications, applyForCITBTest, deleteCitbApplications, fetchApplicantsData, applyForHealthAndSafetyCourse, fetchHealthAndSafetyApplicants, fetchAllCscsEssData, fetchCscsData, fetchEssData, deleteEssData, fetchCscsEssApplicants, fetchCscsEssApplicantById, fetchCITBTestApplicants, fetchCitbApplicantById, fetchHealthAndSafetyApplicantById, deleteHealthAndSafetyApplications, addGroupBooking, fetchGroupBooking, fetchGroupBookingById, deleteGroupBookings, addContactUs, autoAddContactUs, fetchContactUsData, fetchContactUsDataById, deleteContactUsMessages, LoginUser, onAuthChange, logOut, ForgotPassword }}>
      {children}
    </FirebaseContext.Provider>
  );
};
