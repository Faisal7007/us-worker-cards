"use client"
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function SearchTestCenter({search,setSearch}) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
  
    }
  };

  return (
    <div className="flex items-center gap-2 w-full max-w-md mx-auto mt-4">
      <input
        type="text"
        placeholder="Search test center..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        
        className="flex-1 border-2 border-purple_primary  rounded-lg p-2 shadow-sm"
      />
      <button 
        onClick={handleSearch} 
        className="flex items-center gap-1 bg-purple_primary text-white px-4 py-2 rounded-lg hover:bg-[#84286a]"
      >
        <IoSearch/> Search
      </button>
    </div>
  );
}
