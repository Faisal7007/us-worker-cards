"use client"
import React, { useState } from 'react';
import { UserContext } from './UserContext';

export const MyProvider = ({ children }) => {
  const [idx, setIdx] = useState(null);
  const [essId, setEssId] = useState(null);
  const [viewDetailsId,setViewDetailsId] = useState(null);
  const [formType, setFormType] = useState('cscs')
  const [counts, setCounts] = useState([])

  return (
    <UserContext.Provider value={{ idx, setIdx ,essId,setEssId,viewDetailsId,
      setViewDetailsId,formType,setFormType,counts,setCounts}}>
      {children}
    </UserContext.Provider>
  );
};
