
"use client"
import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { FirebaseProvider, useFirebase } from '@/app/context/Firebase';
// import { ToastContainer } from 'react-toastify';
import Image from 'next/image';
import { RiArrowGoBackFill } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  // redparts2001@gmail.com
  // Construction@1999

  
// const loginFail = () => toast("Wrong email or password");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const firebase=useFirebase()
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
  
    if(formData.email && formData.password){

      firebase.LoginUser(formData.email,formData.password,setIsSubmitting)
    }
    
  };
  return (
  
    <div className="min-h-screen flex items-center justify-center bg-[url('/background-img.jpg')] bg-cover bg-center bg-gray-100 p-6">
  <div className="bg-gradient-to-r from-[#ffe251] to-[#51544b] relative shadow-md rounded-lg w-full max-w-md">
  <ToastContainer/>
    <div className=" h-56   rounded-tr-lg rounded-tl-lg   overflow-hidden  ">
      <Image    width={250}
              height={250} className="w-full h-full object-cover" src={"/background-img.jpg"} alt="Bg-image" />
    </div>
    {/* <ToastContainer /> */}
    <div className='p-8  '>
    <RiArrowGoBackFill onClick={()=>{router.push("/")}} className='absolute text-black top-10 size-5 cursor-pointer '/>
    <h2 className="text-2xl font-bold font josh_regular text-center mb-6 bg-gradient-to-r from-[#31332f] to-[#0f0e0d] bg-clip-text text-transparent"> Admin Log In</h2>
    <form onSubmit={handleLogin}>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
      </div>
      <div className="mb-4 relative">
        <label className="block text-gray-700 mb-2" htmlFor="password">
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-14 transform -translate-y-1/2 text-gray-500 focus:outline-none"
        >
          {showPassword ? <FaEyeSlash/> : <FaEye/>}
        </button>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full text-black font-semibold bg-gradient-to-r from-[#51544b] to-[#ffe251] py-2 rounded-md hover:shadow-xl  transition duration-200 `}
      >
      {isSubmitting?"Submitting...":"Login"}
        
      </button>
    </form>
    </div>

  </div>
</div>
  )
}

export default Login
