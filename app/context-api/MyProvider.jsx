"use client"
import React, { useState } from 'react';
import { UserContext } from './UserContext';

export const MyProvider = ({ children }) => {
  const [idx, setIdx] = useState(null);
  const [essId, setEssId] = useState(null);

  return (
    <UserContext.Provider value={{ idx, setIdx ,essId,setEssId}}>
      {children}
    </UserContext.Provider>
  );
};
