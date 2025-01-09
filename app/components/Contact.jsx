"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoIosMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import ContactUsBanner from "./ContactUsBanner";
// import emailjs from "emailjs-com";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// serviceID-service_s955usf
function Contact({no_banner}) {
//   const successSend = () => toast("Message Send Successfully");


  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    mobile: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_ktk4u1i";
    const templateId = "template_ajdu8zf";
    const publicKey = "KKlmL7C9A_GL1kHL_";

   
    emailjs.send(serviceId, templateId, formValues, publicKey)
      .then(
        (response) => {
          console.log("Email sent successfully!", response.status, response.text);
          // alert("Message sent successfully!");
          successSend()
          
          setFormValues({
            name: "",
            email: "",
            mobile: "",
            description: "",
          });
        },
        (error) => {
          // console.error("Failed to send email.", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="bg-gray-50">
 {
        no_banner?"":<ContactUsBanner/>
      }
    <div className="max-w-[1440px] mx-auto">
     
     
      <div className="pb-10 bg-gray-50 flex flex-col lg:flex-row justify-between items-start px-6 sm:px-12 lg:px-4 pt-5 gap-10">
        {/* Address Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="text-2xl text-purple_primary sm:text-3xl font-semibold">Come, meet us!</div>
          <div className="text-lg inline-flex items-center text-gray-600"><IoIosMail className="size-8 mr-4 text-purple_primary"/>support@constructioncardservices.com</div>
          <br />
          <div className="text-lg inline-flex items-center text-gray-600"><IoLocation className="size-8 mr-4 text-purple_primary"/>265 City Road, London, EC1V 2NX,
          United Kingdom</div>
          <div className="">
            {/* <h2 className="text-xl sm:text-2xl font-bold mb-4">Our Location</h2> */}
            <div className="w-full h-48 sm:h-80 lg:h-96 overflow-hidden">
            
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.0811007441507!2d-0.10030592387103734!3d51.530072309047505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b59306c170f%3A0xd688ddd82fe75dc0!2s265%20City%20Rd%2C%20London%20EC1V%201JX%2C%20UK!5e0!3m2!1sen!2sin!4v1736163138056!5m2!1sen!2sin" 
               width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              >
              </iframe>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full lg:w-1/2 space-y-4">
          {/* <div className="font-semibold text-gray-600 text-base sm:text-lg">
            Want to connect with us for something else?
          </div> */}
          <div className="text-2xl text-purple_primary sm:text-3xl font-semibold"> Message us here, we’ll get back to you soon!</div>
          {/* <div className="font-semibold text-purple_primary  text-base sm:text-lg">
            Message us here and we’ll get back to you soon!
          </div> */}
          <div className="mt-4">
            <form onSubmit={handleSubmit}>
              {/* Name Input */}
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
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple_primary "
                />
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                  Enter Email
                </label>
                <input
                  value={formValues.email}
                  onChange={handleChange}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple_primary"
                />
              </div>

              {/* Mobile Number Input */}
              <div className="mb-4">
                <label htmlFor="mobile" className="block text-gray-700 font-medium">
                  Enter Mobile Number
                </label>
                <input
                  value={formValues.mobile}
                  onChange={handleChange}
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="Your Mobile Number"
                  required
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple_primary"
                />
              </div>

              {/* Description Input */}
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
                  required
                  className="resize-none w-full h-44 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple_primary"
                ></textarea>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-purple_primary text-white p-2 rounded-md hover:bg-[#84286a]  transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
}

export default Contact;
