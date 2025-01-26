"use client"
import CscsEssTable from '@/app/components/CscsEssTable';
import { useFirebase } from '@/app/context/Firebase';
import { useParams } from 'next/navigation';
import React, { use, useEffect, useState } from 'react'

const page = () => {
  const params = useParams();
  const form_type = params.slug;
    const [cscsUsers, setCscsUsers] = useState([]);
    const [essUsers, setEssUsers] = useState([]);
    const [allCscs, setAllCscs] = useState([])

    const [cardTypes, setCardTypes] = useState(`all-${form_type}-users`)
    const [selectedCscs, setSelectedCscs] = useState("All Cscs Card Users");
    const [selectedEss, setSelectedEss] = useState("All Ess Card Users");
    const [isCscsOpen, setIsCscsOpen] = useState(false);
    const [isEssOpen, setIsEssOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const firebase=useFirebase()

     

    
  const CscsOptions = [
    { value: "all-cscs-users", label: "All Cscs Card Users" },
    { value: "green-labourer", label: "Green Labourer Card Users" },
    { value: "blue-skilled", label: "Blue Skilled Card Users" },
    { value: "red-provisional", label: "Red Provisional Card Users" },
    { value: "red-trainee", label: "Red Trainee Card Users" },
    { value: "red-experienced", label: "Red Experienced Card Users" },
    { value: "red-technical-supervisor", label: "Red Manager Card Users" },
    { value: "gold-craft", label: "Gold Advanced Card Users" },
    { value: "gold-supervisor", label: "Gold Supervisor Card Users" },
    { value: "black-manager", label: "Black Manager Card Users" },
    { value: "white-aqp", label: "White AQP Card Users" },
    { value: "white-pqp", label: "White PQP Card Users" },
    { value: "health-and-safety-awareness", label: "Health & Safety Card Users" },

  ];

  const EssOptions = [
    { value: "all-ess-users", label: "All Ess Card Users" },
    { value: "green-labourer", label: "Green Labourer Card Users" },
    { value: "blue-skilled", label: "Blue Skilled Card Users" },
    { value: "blue-experienced", label: "Blue Experienced Card Users" },
    { value: "red-trainee", label: "Red Trainee Card Users" },
    { value: "red-industry", label: "Red Industry Experienced Card Users" },
    { value: "gold-advanced", label: "Gold Advanced Card Users" },
    { value: "gold-supervisor", label: "Gold Supervisor Card Users" },
    { value: "black-manager", label: "Black Manager Card Users" },
    { value: "white-aqp", label: "White AQP Card Users" },
    { value: "white-pqp", label: "White PQP Card Users" },
  ];


  const handleCscsOptionClick = (option) => {
    setSelectedCscs(option.label);
    setIsCscsOpen(false);
    setCardTypes(option.value)
    // console.log("Selected value:", option.value);
  };


  const handleEssOptionClick = (option) => {
    setSelectedEss(option.label);
    setIsEssOpen(false);
    setCardTypes(option.value)

    console.log("Selected value:", option.value);
  };
      
 
  useEffect(() => {

    if(form_type==='cscs'){
        firebase.fetchCscsData(cardTypes, setCscsUsers);
    }   
  }, [cardTypes]);

  useEffect(()=>{
    if(form_type==='ess'){
      firebase.fetchEssData(cardTypes,setEssUsers)
  }
  },[cardTypes])


  const cscsCardTypes = ["green-labourer", "blue-skilled","red-provisional","red-trainee","red-experienced","red-technical-supervisor","gold-craft","gold-supervisor","black-manager","white-aqp","white-pqp","health-and-safety-awareness"];
  const essCardTypes = ["green-labourer", "blue-skilled","blue-experienced","red-trainee","red-industry","gold-advanced","gold-supervisor","black-manager","white-aqp","white-pqp"];
  

  console.log(cardTypes,"Card Type in useeffect")
  useEffect(()=>{

    if(cardTypes==="all-cscs-users"){
      firebase.fetchAllCscsEssData('cscs',cscsCardTypes,setCscsUsers,setIsLoading)
    }

  },[cardTypes])

  // console.log(cscsUsers,"All CSCS")

  useEffect(()=>{
     
    if(cardTypes==="all-ess-users"){
      firebase.fetchAllCscsEssData('ess',essCardTypes,setEssUsers,setIsLoading)
    }

  },[cardTypes])



  return (
    <div className='py-6 px-3'>
    <div className='flex justify-center'>{
      form_type==='cscs'?<span className='text-[24px] text-gray-800 text-center font-bold mb-6'>CSCS Users</span>:<span className='text-[24px] text-gray-800 text-center font-bold mb-6'>ESS Users</span>
    }
    </div>
    {
    
        form_type==='cscs'? <div className="relative w-64">
       
      <div
        onClick={() => setIsCscsOpen(!isCscsOpen)}
        className="bg-gray-100 border mb-3 border-gray-300 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-200"
      >
        {selectedCscs}
      </div>

      {/* Dropdown Options */}
      {isCscsOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
          {CscsOptions.map((option) => (
            <div
              key={option.value}
              onClick={() => handleCscsOptionClick(option)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-800 hover:text-white"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>:<div className="relative w-64">
             
      <div
        onClick={() => setIsEssOpen(!isEssOpen)}
        className="bg-gray-100 mb-3 border border-gray-300 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-200"
      >
        {selectedEss}
      </div>

      {/* Dropdown Options */}
      {isEssOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
          {EssOptions.map((option) => (
            <div
              key={option.value}
              onClick={() => handleEssOptionClick(option)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-800 hover:text-white"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
    }
   
  

    { form_type==='cscs'?<CscsEssTable userData={cscsUsers} isLoading={isLoading}/>:<CscsEssTable userData={essUsers} isLoading={isLoading}/>
        
    } 
 

    </div>
  )
}

export default page

