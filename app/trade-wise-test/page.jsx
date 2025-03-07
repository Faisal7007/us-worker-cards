"use client"
import React, { useState } from 'react';
import { FaHardHat } from 'react-icons/fa';
import items from '../constants/tradeWiseTestData';
import SearchInput from '../components/SearchInput'
import TradeTestComponent from '../components/TradeTestComponent'

const Page = () => {
  const [search, setSearch] = useState("");
  const filteredItems = items
    .filter((item) => item.title.toLowerCase().includes(search.toLowerCase())) // Match all
    .sort((a, b) => {
      const query = search.toLowerCase();
      const aStarts = a.title.toLowerCase().startsWith(query);
      const bStarts = b.title.toLowerCase().startsWith(query);
      return bStarts - aStarts; // Prioritize items starting with search term
    });
  return (
    <div className="max-w-[1440px] mx-auto px-4 py-8 mt-[102px] media-max-545px:text-[14px]">
      <h1 className='text-[30px] font-bold'>Find the right CSCS card and test for you.</h1>
      <div className='h-[1px] w-full bg-slate-300 my-4'></div>

      <p className='text-justify mb-4'>The Operatives Test is the most common test type, covering most trades and CSCS cards, including <span className='font-bold'>Labourers, Bricklayers, Carpenters, Painters & Decorators, Groundworkers, Dry Liners, Floorers, Plasterers, Stone Fixers,</span> and many more. It is suitable for <span className='font-bold'>Green CSCS Card, Blue CSCS Card, Gold CSCS Card, and Red CSCS Card.</span></p>

      <p className='mb-2'>If you fall into any of the categories below, you may need to take a different test:</p>

      <ul className="pl-4 mb-4 text-gray-700 media-max-545px:text-[14px]">
        <li className="flex items-start mb-2 text-justify">
          <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
          <span>Managers or professionals need to take the Managers & Professionals Test for Black or White CSCS Cards.

          </span>
        </li>
        <li className="flex items-start mb-2 text-justify">
          <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
          <span>Supervisors must take the Supervisor Test for the Gold CSCS Card.</span>
        </li>
        <li className="flex items-start mb-2 text-justify">
          <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
          <span>Plumbers need to take the Plumbing/Gas Test for the Blue or Gold CSCS Card</span>
        </li>
        <li className="flex items-start mb-2 text-justify">
          <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
          <span>Demolition workers need to take the Demolition Test for the Red, Blue, or Gold CSCS Card.</span>
        </li>
        <li className="flex items-start mb-2 text-justify">
          <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
          <span>
            Highway workers need to take the Highway Works Test for the Blue or Gold CSCS Card.</span>
        </li>
        <li className="flex items-start mb-2 text-justify">
          <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
          <span>Scaffolders and roofers need to take the Working at Height Test for the Blue or Gold CSCS Card.</span>
        </li>
        <li className="flex items-start mb-2 text-justify">
          <FaHardHat className="text-purple_primary mr-2 mt-1 flex-shrink-0" />
          <span>HVACR professionals need to take the HVACR Test.</span>
        </li>

      </ul>
      <div className='h-[1px] w-full bg-slate-300 my-6'></div>
      <SearchInput search={search} setSearch={setSearch} flag="trade-wise-test" />

      <div className=" mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {

          filteredItems.length > 0 ? filteredItems.map((item) => {
            return (
              <TradeTestComponent key={item.id} item={item} />
            )
          })
            : <p className="text-gray-500 mt-2">No results found</p>

        }
      </div>
    </div>
  );
};

export default Page;
