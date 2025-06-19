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

  const firebase = useFirebase()

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const reset = () => {
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
    firebase.addGroupBooking(formData, setIsSubmitting)
    reset()
  };
  return (
    <div className='max-w-[1440px] mx-auto px-4 pt-8 mt-[102px]'>
      <ToastContainer />
      <h1 className='text-[30px] font-bold mb-4 capitalize'>Details for Group Booking</h1>
      <p className='text-justify mb-6'>Please provide the details below so we can contact you to arrange bookings for multiple delegates for the <span className='font-bold'>Health and Safety Test, course, or CSCS Card.</span> Discounts are available for group bookings.</p>
      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto rounded space-y-6 px-4"
      >
        <div className="pt-4">
          <h2 className="text-xl bg-purple_primary text-white py-3 font-semibold mb-5 text-center rounded">
            Booking Information for Delegates
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-1">Title</label>
              <select
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border border-gray-400 py-2 px-3 rounded-md"
                required
              >
                <option value="" disabled>Please select the title</option>
                <option value="Mr">Mr</option>
                <option value="Ms">Ms</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
              </select>
            </div>

            {[
              { id: "firstName", label: "First Name", required: true },
              { id: "middleName", label: "Middle Name" },
              { id: "lastName", label: "Last Name", required: true }
            ].map(({ id, label, required }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-sm font-medium mb-1">{label}</label>
                <input
                  type="text"
                  id={id}
                  name={id}
                  placeholder={label}
                  value={formData[id]}
                  onChange={handleChange}
                  required={required}
                  className="w-full border border-gray-400 py-2 px-3 rounded-md"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="e.g. 2080995236"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full border border-gray-400 py-2 px-3 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="yourname@domain.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-400 py-2 px-3 rounded-md"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium mb-1">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Details about the booking, including the number of delegates you wish to book for, etc."
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full border border-gray-400 py-2 px-3 rounded-md"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 px-4 py-2 bg-purple_primary text-white rounded hover:bg-[#84286a] transition"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
          <MdArrowRight className="size-5" />
        </button>
      </form>

    </div>
  )
}

export default page
