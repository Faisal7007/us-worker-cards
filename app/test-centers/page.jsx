"use client"
import React, { useState } from 'react'
import SearchInput from '../components/SearchInput'
import TestCentersComponents from '../components/TestCentersComponent'
import items from '../constants/testCentersData'

const page = () => {
    const [search, setSearch] = useState("");

    const filteredItems = items
    .filter((item) => {
        const query = search.toLowerCase().replace(/\s/g, "");
        const titleMatch = item.title?.toLowerCase().includes(search.toLowerCase());
        const postcodeMatch = item.postcode?.toLowerCase().replace(/\s/g, "").includes(query);
        return titleMatch || postcodeMatch;
    })
    .sort((a, b) => {
        const query = search.toLowerCase().replace(/\s/g, "");
        const aStarts = a.title?.toLowerCase().startsWith(query) ||
                        a.postcode?.toLowerCase().replace(/\s/g, "").startsWith(query);
        const bStarts = b.title?.toLowerCase().startsWith(query) ||
                        b.postcode?.toLowerCase().replace(/\s/g, "").startsWith(query);
        return (bStarts ? 1 : 0) - (aStarts ? 1 : 0);
    });


    return (
        <div className='max-w-[1440px] mx-auto px-4 pt-8 mt-[102px]'>
            <h1 className='text-[30px] font-bold mb-2 capitalize'>Test Centers</h1>
            <p className='text-justify'>
                Find a nearby test center and book your CITB Health, Safety, and Environment Test (also known as the CITB Touch Screen Test), 
                which is required to apply for a CSCS Card.
            </p>
            <div className='h-[1px] w-full bg-slate-300 my-6'></div>
            <SearchInput search={search} setSearch={setSearch} flag="test-center" />
            <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {
                    filteredItems.length > 0 ? (
                        filteredItems.map((item) => (
                            <TestCentersComponents key={item.id} item={item} />
                        ))
                    ) : (
                        <p className="text-gray-500 mt-2">No results found</p>
                    )
                }
            </div>
        </div>
    )
}

export default page;
