"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoIosMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import ContactUsBanner from "./ContactUsBanner";
import { useFirebase } from "../context/Firebase";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";

function Contact({ no_banner }) {

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    mobile: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [contactUsData, setContactUsData] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [saved, setSaved] = useState(false);
  const firebase = useFirebase()





  useEffect(() => {
    firebase.fetchContactUsData(setContactUsData, setisLoading)

  }, [])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const reset = () => {
    setFormValues({
      name: "",
      email: "",
      mobile: "",
      description: "",
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailExists = contactUsData.some((user) => user.email === formValues.email.trim());
    const phoneExists = contactUsData.some((user) => user.mobile === formValues.mobile.trim());

    if (emailExists || phoneExists) {
      if (emailExists) {
        toast.error("Email already exists!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          className: "bg-red-100 text-red-800 font-medium",
        });
      }
      if (phoneExists) {
        toast.error("Mobile number already exists!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          className: "bg-red-100 text-red-800 font-medium",
        });

      }
      return;
    }
    firebase.addContactUs(formValues, setIsSubmitting);
    reset()


    // firebase.addContactUs(formValues,setIsSubmitting)

  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const autoSave = () => {
    if (saved) return;
    setSaved(true);
    try {
      const emailExists = contactUsData.some((user) => user.email === formValues.email.trim());
      const phoneExists = contactUsData.some((user) => user.phone === formValues.mobile.trim());

      if (emailExists || phoneExists) {
        // alert("Email or phone number already exists in the database.");
        return;
      }
      firebase.autoAddContactUs(formValues, 'auto');
      // console.log("on blur data saved successfully!");
    } catch (error) {
      // console.error("Error saving on blur data", error);
    } finally {
      setSaved(false);
    }
  };


  const handleEmailBlur = () => {
    if (emailRegex.test(formValues.email.trim())) {
      autoSave();
    }
  };

  const handleMobileBlur = () => {
    if (formValues.mobile.trim().length > 7) {
      autoSave();
    }
  };



  const saveUserDetails = () => {
    const emailExists = contactUsData.some((user) => user.email === formValues.email.trim());
    const phoneExists = contactUsData.some((user) => user.phone === formValues.mobile.trim());

    if (emailExists || phoneExists) {
      //alert("Email or phone number already exists in the database. On URL change");
      return;
    }
    else {
      if (formValues.email || formValues.mobile) {
        try {
          firebase.autoAddContactUs(formValues, "auto");
          console.log("Data added on url change");
        } catch (error) {
          console.error("Error saving data on url change", error);
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
  }, [formValues.email, formValues.mobile]);


  return (
    <div className={`bg-gray-50 ${no_banner ? "mt-0" : "mt-[102px]"}`}>
      {
        no_banner ? "" : <ContactUsBanner />
      }
      <div className="max-w-[1440px] mx-auto px-4 pt-8">
        <ToastContainer />

        <div className="pb-10 bg-gray-50 flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* Address Section */}
          <motion.div initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }} className="w-full lg:w-1/2 space-y-6 overflow-x-hidden">
            <div className="text-2xl text-purple_primary sm:text-3xl font-semibold">Come, meet us!</div>
            <a href="mailto:support@constructioncardservices." className="text-lg inline-flex items-center text-gray-500 media-max-545px:text-[14px] font-semibold"  ><IoIosMail className="size-8 mr-4 text-purple_primary" />support@constructioncardservices.com</a>


            <br />
            <div className="text-lg inline-flex items-center text-gray-500 media-max-545px:text-[14px]  font-semibold"><IoLocation className="size-8 mr-4 text-purple_primary" />Dalton House 60 Winsdor Avenue London SW19 2RR</div>
            <div className="">
              {/* <h2 className="text-xl sm:text-2xl font-bold mb-4">Our Location</h2> */}
              <div className="w-full h-48 sm:h-80 lg:h-96 overflow-hidden">


                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.5566585166084!2d-0.18871782387861788!3d51.411200317727136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487607004b00d293%3A0x4e5b71cce0946809!2s9%20Dalton%20House!5e0!3m2!1sen!2sin!4v1741453322175!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                />


              </div>
            </div>
          </motion.div>


          <motion.div initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }} className="w-full lg:w-1/2 space-y-4">

            <div className="text-2xl text-purple_primary sm:text-3xl font-semibold"> Message us here, we’ll get back to you soon!</div>

            <div className="mt-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium">
                    Enter Full Name
                  </label>
                  <input
                    value={formValues.name}
                    onChange={handleChange}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full p-2  rounded-md     outline-purple_primary   focus:outline-none focus:ring-2 focus:ring-purple_primary "
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium">
                    Enter Email
                  </label>
                  <input
                    value={formValues.email}
                    onChange={handleChange}
                    onBlur={handleEmailBlur}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple_primary"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="mobile" className="block text-gray-700 font-medium">
                    Enter Mobile Number
                  </label>
                  <input
                    value={formValues.mobile}
                    onChange={handleChange}
                    onBlur={handleMobileBlur}
                    type="tel"
                    id="mobile"
                    name="mobile"
                    pattern="[0-9]{7,15}"
                    placeholder="Your Mobile Number"
                    required
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple_primary"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="description" className="block text-gray-700 font-medium">
                    Description
                  </label>
                  <textarea
                    value={formValues.description}
                    onChange={handleChange}
                    id="description"
                    name="description"
                    placeholder="Write a description..."
                    rows="6"
                    className="resize-none w-full h-44 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple_primary"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple_primary text-white p-2 rounded-md hover:bg-[#84286a]  transition duration-200"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>

  );
}

export default Contact;
