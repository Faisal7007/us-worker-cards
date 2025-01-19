import React from 'react'
import ESSCard from '../components/ESSCard'
import items from '../essCardData'

const page = () => {
   
  return (
    <div className='max-w-[1440px] mx-auto px-4 pt-8'>
       <h1 className='text-[30px] font-bold mb-2 capitalize'>ESS Card Types</h1>
    {/*<Link href='#' className='inline-flex items-center text-purple_primary '><IoIosArrowForward/><span>Go to full card types list</span></Link> */}
    <div className='h-[1px] w-full bg-slate-300 my-4'></div>
    <p>Here are the CSCS Cards you can apply for. You must hold the relevant or equivalent qualification, with requirements listed under <span className='font-bold'>Know More.</span></p>
    {/* Card mapping */}
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 items-center media-max-545px:gap-8">
  {items && items.map((item) => <ESSCard key={item.id} item={item}/>)}
</div>

    </div>
  )
}

export default page
