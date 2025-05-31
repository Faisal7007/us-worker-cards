"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoIosMail, IoIosCall } from "react-icons/io";
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
      {!no_banner && <ContactUsBanner />}
      <div className="max-w-[1440px] mx-auto px-6 pt-10">
        <ToastContainer />

        <div className="pb-12 bg-gray-50 flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Address Section */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full lg:w-1/2 space-y-8 overflow-x-hidden bg-white p-8 rounded-lg shadow-md"
          >
            <div className="text-xl sm:text-3xl md:text-4xl text-purple_primary font-semibold tracking-wide">
              Come, meet us!
            </div>

            {/* Email */}
            <div>
              <a
                href="mailto:support@constructioncardservices.com"
                className="text-sm sm:text-lg inline-flex items-center text-gray-600 hover:text-purple_primary transition-colors duration-300 font-semibold"
              >
                <IoIosMail className="text-purple_primary mr-4 text-lg sm:text-xl" />
                support@constructioncardservices.com
              </a>
            </div>

            {/* Phone Number */}
            <div className="text-sm sm:text-lg inline-flex items-center text-gray-600 font-semibold">
              <IoIosCall className="text-purple_primary mr-4 text-lg sm:text-xl" />
              +44 3030030136
            </div>

            {/* Address */}
            <div className="text-sm sm:text-lg inline-flex items-center text-gray-600 font-semibold">
              <IoLocation className="text-purple_primary mr-4 text-lg sm:text-xl" />
              Dalton House, 60 Windsor Avenue, London SW19 2RR
            </div>

            {/* Map */}
            <div className="w-full h-56 sm:h-80 lg:h-96 rounded-md overflow-hidden shadow-inner mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.5471223637405!2d-0.1892843234904513!3d51.411375517713836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876061fc2c0f7c7%3A0xdc0cdfd2caab07ff!2sDalton%20House%2C%2060%20Windsor%20Ave%2C%20London%20SW19%202RR%2C%20UK!5e0!3m2!1sen!2sin!4v1748694571025!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              />

            </div>
          </motion.div>


          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-md space-y-6"
          >
            <div className="text-3xl text-purple_primary sm:text-4xl font-semibold tracking-wide">
              Message us here, we’ll get back to you soon!
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
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
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple_primary transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
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
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple_primary transition"
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-gray-700 font-semibold mb-1">
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
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple_primary transition"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-gray-700 font-semibold mb-1">
                  Description
                </label>
                <textarea
                  value={formValues.description}
                  onChange={handleChange}
                  id="description"
                  name="description"
                  placeholder="Write a description..."
                  rows="6"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple_primary transition"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple_primary text-white p-3 rounded-lg hover:bg-[#84286a] transition duration-300 font-semibold shadow-md"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
