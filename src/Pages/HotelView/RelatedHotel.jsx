import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

function RelatedHotel(props) {
   
    
       
  return (
    <section>
    <div className='container px-4 md:px-8  w-[100%] '>
  <div className='px-1 py-5 '>
       
        <img className='relative w-full transition-all duration-1000 rounded-lg md:w-90 hover:scale-x-110 hover:scale-y-110' src={props.img} alt="" />
        <div className='absolute flex items-center gap-2 ml-5 -mt-12 font-semibold text-white cursor-pointer'>
        <FaLocationDot />
        <p>{props.location}</p>
        </div>
        <div className='mt-3 ml-3'>
            <h3 className='text-[#212529] font-semibold mb-1 text-xl'>{props.name}</h3>
            <p className='text-sm text-[#8B3EEA] gap-5 flex mb-1'> 4.8/5 Excellent  <span className='text-sm text-[#A8A8A8]'>(1214 reviews)</span></p>
            <h3 className='text-xl font-semibold text-[#212529]'>$99.00 <span className='text-sm font-normal'>price starts from</span></h3>
        </div>
  </div>
    </div>
  
</section>
  )
}

export default RelatedHotel
