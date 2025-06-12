"use client";
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactUsData, setContactUsData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const firebase = useFirebase();

  useEffect(() => {
    firebase.fetchContactUsData(setContactUsData, setisLoading);
  }, []);
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
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailExists = contactUsData.some(
      (user) => user.email === formValues.email.trim()
    );
    const phoneExists = contactUsData.some(
      (user) => user.mobile === formValues.mobile.trim()
    );

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
    reset();

    // firebase.addContactUs(formValues,setIsSubmitting)
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const autoSave = () => {
    try {
      const emailExists = contactUsData.some(
        (user) => user.email === formValues.email.trim()
      );
      const phoneExists = contactUsData.some(
        (user) => user.mobile === formValues.mobile.trim()
      );

      if (emailExists || phoneExists) {
        return;
      }

      if (formValues.email || formValues.mobile) {
        firebase.autoAddContactUs(formValues, "auto");
        console.log("Auto-saved on blur");
      }
    } catch (error) {
      console.error("Error in autoSave", error);
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
    const emailExists = contactUsData.some(
      (user) => user.email === formValues.email.trim()
    );
    const phoneExists = contactUsData.some(
      (user) => user.phone === formValues.mobile.trim()
    );

    if (emailExists || phoneExists) {
      //alert("Email or phone number already exists in the database. On URL change");
      return;
    } else {
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
    <div className={`bg-gray-50 ${no_banner ? "mt-0" : "mt-[80px]"}`}>
      {!no_banner && <ContactUsBanner />}

      <div className="max-w-[1280px] mx-auto px-4 pt-8">
        <ToastContainer />

        <div className="pb-10 flex flex-col lg:flex-row justify-between gap-10">
          {/* Address Section */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full lg:w-1/2 bg-white p-6 rounded-xl shadow-sm space-y-6"
          >
            <h2 className="text-2xl font-semibold text-purple_primary">
              Come, meet us!
            </h2>

            <a
              href="mailto:support@constructioncardservices.com"
              className="text-base flex items-center text-gray-700 hover:text-purple_primary transition"
            >
              <IoIosMail className="text-purple_primary mr-3" />
              support@constructioncardservices.com
            </a>

            <div className="text-base flex items-center text-gray-700">
              <IoIosCall className="text-purple_primary mr-3" />
              +44 3030030136
            </div>

            <div className="text-base flex items-center text-gray-700">
              <IoLocation className="text-purple_primary mr-3" />
              Dalton House, 60 Windsor Avenue, London SW19 2RR
            </div>

            <div className="h-64 rounded-md overflow-hidden mt-4 shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.5471223637405!2d-0.1892843234904513!3d51.411375517713836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876061fc2c0f7c7%3A0xdc0cdfd2caab07ff!2sDalton%20House%2C%2060%20Windsor%20Ave%2C%20London%20SW19%202RR%2C%20UK!5e0!3m2!1sen!2sin!4v1748694571025!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full lg:w-1/2 bg-white p-6 rounded-xl shadow-sm space-y-5"
          >
            <h2 className="text-2xl font-semibold text-purple_primary">
              Message us, we’ll get back to you soon
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                {
                  label: "Full Name",
                  name: "name",
                  type: "text",
                  value: formValues.name,
                },
                {
                  label: "Email",
                  name: "email",
                  type: "email",
                  value: formValues.email,
                },
                {
                  label: "Mobile Number",
                  name: "mobile",
                  type: "tel",
                  value: formValues.mobile,
                  pattern: "[0-9]{7,15}",
                },
              ].map(({ label, name, type, value, pattern }) => (
                <div key={name}>
                  <label
                    htmlFor={name}
                    className="block text-gray-700 text-sm mb-1 font-medium"
                  >
                    {label}
                  </label>
                  <input
                    value={value}
                    onChange={handleChange}
                    onBlur={
                      name === "email"
                        ? handleEmailBlur
                        : name === "mobile"
                        ? handleMobileBlur
                        : undefined
                    }
                    type={type}
                    id={name}
                    name={name}
                    required
                    placeholder={`Your ${label}`}
                    pattern={pattern}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple_primary focus:outline-none"
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="description"
                  className="block text-gray-700 text-sm mb-1 font-medium"
                >
                  Description
                </label>
                <textarea
                  value={formValues.description}
                  onChange={handleChange}
                  id="description"
                  name="description"
                  rows="5"
                  placeholder="Write a description..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm resize-none focus:ring-2 focus:ring-purple_primary focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-purple_primary text-white rounded-md font-semibold hover:bg-[#84286a] transition"
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
