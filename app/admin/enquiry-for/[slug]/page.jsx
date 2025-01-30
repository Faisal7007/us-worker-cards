"use client"
import CscsEssTable from '@/app/components/CscsEssTable';
import { UserContext } from '@/app/context-api/UserContext';
import { useFirebase } from '@/app/context/Firebase';
import { useParams } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const Page = () => {
  const params = useParams();
  const form_type = params.slug;
  const [cscsUsers, setCscsUsers] = useState([]);
  const [essUsers, setEssUsers] = useState([]);
  const [cardTypes, setCardTypes] = useState(`all-${form_type}-users`);
  const [selectedCscs, setSelectedCscs] = useState("All Cscs Card Users");
  const [selectedEss, setSelectedEss] = useState("All Ess Card Users");
  const [isCscsOpen, setIsCscsOpen] = useState(false);
  const [isEssOpen, setIsEssOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

 
  const firebase = useFirebase();

  
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
    setCardTypes(option.value);
  };

  const handleEssOptionClick = (option) => {
    setSelectedEss(option.label);
    setIsEssOpen(false);
    setCardTypes(option.value);
  };

  useEffect(() => {
    if (form_type === 'cscs') {
      firebase.fetchCscsData(cardTypes, setCscsUsers);
    }
  }, [cardTypes]);

  useEffect(() => {
    if (form_type === 'ess') {
      firebase.fetchEssData(cardTypes, setEssUsers);
    }
  }, [cardTypes]);

  useEffect(() => {
    if (cardTypes === "all-cscs-users") {
      firebase.fetchAllCscsEssData('cscs', CscsOptions.map(opt => opt.value), setCscsUsers, setIsLoading);
    }
  }, [cardTypes]);

  useEffect(() => {
    if (cardTypes === "all-ess-users") {
      firebase.fetchAllCscsEssData('ess', EssOptions.map(opt => opt.value), setEssUsers, setIsLoading);
    }
  }, [cardTypes]);





 
  return (
    <div className='py-6 px-3'>
      <div className='flex justify-center'>
        {form_type === 'cscs' ? (
          <span className='text-[24px] text-gray-800 text-center font-bold mb-6'>CSCS Users</span>
        ) : (
          <span className='text-[24px] text-gray-800 text-center font-bold mb-6'>ESS Users</span>
        )}
      </div>
      {form_type === 'cscs' ? (
        <div className="relative w-64">
         
          <div
            onClick={() => setIsCscsOpen(!isCscsOpen)}
            className="flex items-center justify-between bg-gray-100 border mb-3 border-gray-300 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-200"
          >
            <span>{selectedCscs}</span>
            {
            
            isCscsOpen? <FaAngleDown/>:<FaAngleUp/>
            
            }
          </div>
  

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
        </div>
      ) : (
        <div className="relative w-64">
          <div
            onClick={() => setIsEssOpen(!isEssOpen)}
            className="flex items-center justify-between bg-gray-100 mb-3 border border-gray-300 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-200"
          >
            <span>{selectedEss}</span>
            {/* <FaAngleDown/> */}
            {
            
            isEssOpen? <FaAngleDown/>:<FaAngleUp/>
            
            }
          </div>
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
      )}
      {form_type === 'cscs' ? (
        <CscsEssTable userData={cscsUsers} isLoading={isLoading}  />
      ) : (
        <CscsEssTable userData={essUsers} isLoading={isLoading}  />
      )}
    </div>
  );
};

export default Page;
