import React from 'react'
import { FaStar } from "react-icons/fa6";
import { MdOutlineDirectionsRun } from "react-icons/md";

function HotelLocation() {
  return (
    <section className='mt-10 mb-10'>
    <div className='container px-4 md:px-8 '>
   <div className='px-5 py-5 border-2 rounded-xl'>
   <h3 className='text-xl font-semibold text-[#21253D] border-b-2 w-fit pb-1 border-[#8B3EEA] mb-5'>Hotel location</h3>
    
      <img className='relative cursor-pointer' src="googleMap.png" alt="" />
      <div className='absolute flex gap-5 px-3 py-3 ml-10 -mt-40 bg-white cursor-pointer lg:-mt-56'>
        {/* map-info-left */}
      <div>
      <h6 className='text-sm font-semibold text-[#21253D]'>And IT</h6>
        <p className='text-xs text-[#A8A8A8] mt-1'>RH78+F8M, Journalist Manik Saha</p>
        <p className='text-xs text-[#A8A8A8]'>Rd, Khulna</p>
        <div className='flex items-center gap-5'>
          <div className='flex items-center gap-1 mt-2'>
          <p className='text-[#A8A8A8] text-sm font-semibold'>4.7 </p> 
          <div className='flex gap-1'>
          <FaStar className='w-3 h-3 text-[#E7711B]' />
          <FaStar className='w-3 h-3 text-[#E7711B]' />
          <FaStar className='w-3 h-3 text-[#E7711B]' />
          <FaStar className='w-3 h-3 text-[#E7711B]' />
          <FaStar className='w-3 h-3 text-[#E7711B]' />
          </div>
          </div>
    
       
          <span className='text-[#5396EE] hover:underline transition-all duration-700 text-xs font-semibold'>23 reviews</span>
        
        </div>
         
      <p className='text-[#5396EE] hover:underline transition-all duration-700 text-xs font-semibold mt-3'><a href="https://www.google.com/maps/@23.7687879,90.3640686,15z?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D">view larger map</a></p>
      </div>
      {/* map-info-right */}
      <div className='flex flex-col items-center'>
      <MdOutlineDirectionsRun className='text-[#5396EE] w-7 h-7'/>
        <p className='text-[#5396EE] hover:underline transition-all duration-700 text-xs font-semibold'>Directions</p>
      </div>
      </div>
      
    
   </div>
    </div>
  
</section>
  )
}

export default HotelLocation
