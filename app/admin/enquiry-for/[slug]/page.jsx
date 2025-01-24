"use client"
import { useFirebase } from '@/app/context/Firebase';
import { useParams } from 'next/navigation';
import React, { use, useEffect, useState } from 'react'

const page = () => {
 
    const [cscsUsers, setCscsUsers] = useState([]);
    const [essUsers, setEssUsers] = useState([]);

    const [greenCscsUsers, setgreenCscsUsers] = useState([])
    const [cardTypes, setCardTypes] = useState('green-labourer')
    const [selectedCscs, setSelectedCscs] = useState("Select an option");
    const [selectedEss, setSelectedEss] = useState("Select an option");
    const [isCscsOpen, setIsCscsOpen] = useState(false);
    const [isEssOpen, setIsEssOpen] = useState(false);
    // const [selectedValue, setSelectedValue] = useState('')
    const firebase=useFirebase()

          const params = useParams();
          const form_type = params.slug;

    
  const CscsOptions = [
    { value: "green-labourer", label: "Green Labourer Card Users" },
    { value: "blue-skilled", label: "Blue Skilled Card Users" },
    { value: "value3", label: "Red Provisional Card Users" },
    { value: "value3", label: "Red Trainee Card Users" },
    { value: "value3", label: "Red Experienced Card Users" },
    { value: "value3", label: "Red Manager Card Users" },
    { value: "value4", label: "Gold Advanced Card Users" },
    { value: "value4", label: "Gold Supervisor Card Users" },
    { value: "value4", label: "Black Manager Card Users" },
    { value: "value4", label: "White AQP Card Users" },
    { value: "white-pqp", label: "White PQP Card Users" },
    { value: "health-and-safety-awareness", label: "Health & Safety Card Users" },

  ];

  const EssOptions = [
    { value: "value1", label: "Green Labourer Card Users" },
    { value: "value2", label: "Blue Skilled Card Users" },
    { value: "value2", label: "Blue Experienced Card Users" },
    { value: "value3", label: "Red Trainee Card Users" },
    { value: "value3", label: "Red Industry Experienced Card Users" },
    { value: "value4", label: "Gold Advanced Card Users" },
    { value: "gold-supervisor", label: "Gold Supervisor Card Users" },
    { value: "value4", label: "Black Manager Card Users" },
    { value: "value4", label: "White AQP Card Users" },
    { value: "value4", label: "White PQP Card Users" },
  ];


  const handleCscsOptionClick = (option) => {
    setSelectedCscs(option.label);
    setIsCscsOpen(false);
    setCardTypes(option.value)
    console.log("Selected value:", option.value);
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

    if(form_type==='ess'){
        firebase.fetchEssData(cardTypes,setEssUsers)
    }
     
  }, [cardTypes]);


  return (
    <div className='py-6 px-3'>

    {
        form_type==='cscs'? <div className="relative w-64">
      CSCS Users
      <div
        onClick={() => setIsCscsOpen(!isCscsOpen)}
        className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-200"
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
    </div>:  <div className="relative w-64">
      Ess Users
      <div
        onClick={() => setIsEssOpen(!isEssOpen)}
        className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-200"
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
   
  

    { form_type==='cscs'?cscsUsers.map((user)=>{
            return(
                <div>
                 <h1>{user.firstName}</h1>
                  <h2>{user.email}</h2>
                </div>
            )
        }):essUsers.map((user)=>{
            return(
                <div>
                 <h1>{user.firstName}</h1>
                  <h2>{user.email}</h2>
                </div>
            )
        })
        
    } 
 

    </div>
  )
}

export default page

