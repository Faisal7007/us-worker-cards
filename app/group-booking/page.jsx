"use client"
import React, { useState } from 'react'
import { MdArrowRight } from 'react-icons/md';
import { useFirebase } from '../context/Firebase';
import { ToastContainer } from 'react-toastify';

const page = () => {
      const [formData, setFormData] = useState({
        title: "",
        firstName: "",
        middleName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        description: "",
      });

      const firebase=useFirebase()

      const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const reset=()=>{
        setFormData({
          title: "",
          firstName: "",
          middleName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          description: "",
        })
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
       firebase.addGroupBooking(formData,setIsSubmitting)
       reset()
      };
  return (
    <div className='max-w-[1440px] mx-auto px-4 pt-8 mt-[102px]'>
    <ToastContainer/>
         <h1 className='text-[30px] font-bold mb-4 capitalize'>Details for Group Booking</h1>
         <p className='text-justify mb-6'>Please provide the details below so we can contact you to arrange bookings for multiple delegates for the <span className='font-bold'>Health and Safety Test, course, or CSCS Card.</span> Discounts are available for group bookings.</p>
         {/* Form */}

          <form
               onSubmit={handleSubmit}
               className="max-w-full mx-auto rounded  space-y-6"
             >
             <div className="pt-6">
         
               <h2 className="text-[25px] bg-purple_primary text-white py-4 font-bold mb-6 text-center">Booking Information for Delegates</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-4">
         
             <div>
               <label htmlFor="title" className="block text-md font-medium">
                 Title
               </label>
               <select
                 id="title"
                 name="title"
                 value={formData.title}
                 onChange={handleChange}
                 className="w-full border border-gray-500  py-4 px-3 mb-4"
                 required
               >
                 <option value="" disabled>
                   Please select the title
                 </option>
                 <option value="Mr">Mr</option>
                 <option value="Ms">Ms</option>
                 <option value="Mrs">Mrs</option>
                 <option value="Miss">Miss</option>
                 <option value="Dr">Dr</option>
               </select>
         </div>
         
                 <div>
                   <label htmlFor="firstName" className="block text-md font-medium">
                     First Name
                   </label>
                   <input
                     type="text"
                     id="firstName"
                     name="firstName"
                     placeholder="First Name"
                     value={formData.firstName}
                     onChange={handleChange}
                     className="w-full border border-gray-500 py-4 px-3"
                     required
                   />
                 </div>
                 <div>
                   <label htmlFor="middleName" className="block text-md font-medium">
                     Middle Name
                   </label>
                   <input
                     type="text"
                     id="middleName"
                     name="middleName"
                     placeholder="Middle Name"
                     value={formData.middleName}
                     onChange={handleChange}
                     className="w-full border border-gray-500 py-4 px-3"
                   />
                 </div>
                 <div>
                   <label htmlFor="lastName" className="block text-md font-medium">
                     Last Name
                   </label>
                   <input
                     type="text"
                     id="lastName"
                     name="lastName"
                     placeholder="Last Name"
                     value={formData.lastName}
                     onChange={handleChange}
                     className="w-full border border-gray-500 py-4 px-3"
                     required
                   />
                 </div>
              
         
    
         </div>
         
               {/* <h2 className="text-2xl font-bold mb-6">Contact Details</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-4">
            <div>
         
               <label htmlFor="phoneNumber" className="block text-md font-medium">
                 Phone Number
               </label>
               <input
                 type="text"
                 id="phoneNumber"
                 name="phoneNumber"
                 placeholder="e.g. 2080995236"
                 value={formData.phoneNumber}
                 onChange={handleChange}
                 className="w-full border border-gray-500 py-4 px-3 mb-4"
                 required
               />
          </div>
         
         <div>
         
               <label htmlFor="email" className="block text-md font-medium">
                 Email Address
               </label>
               <input
                 type="email"
                 id="email"
                 name="email"
                 placeholder="yourname@domain.com"
                 value={formData.email}
                 onChange={handleChange}
                 className="w-full border border-gray-500 py-4 px-3 mb-4"
                 required
               />
         </div>
         
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
         <div className="col-span-1 md:col-span-2">
               <label htmlFor="description" className="block text-md font-medium">
                 Description
               </label>
               <input
                 type="text"
                 id="description"
                 name="description"
                 placeholder="Details about the booking, including the number of delegates you wish to book for, etc."
                 value={formData.description}
                 onChange={handleChange}
                 className="w-full border border-gray-500  py-4 px-3 mb-4"
                 required
               />
           </div>
         </div>
         
               </div>
               <button
                 type="submit"
                 disabled={isSubmitting}
                 className={`inline-flex items-center justify-center rounded w-fit px-4 py-2 bg-purple_primary text-white hover:bg-[#84286a]`}
               >
                 <span className="ml-2">{isSubmitting?"Submitting...":"Submit"}</span>
                 <MdArrowRight className="size-6"/>
               </button>
             </form>
    </div>
  )
}

export default page
