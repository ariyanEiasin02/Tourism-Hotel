import React from 'react'
import { FaStar } from "react-icons/fa6";

function SingleReview(props) {
  return (
    <section>
        <div className='container px-4 md:px-8 '>
      
        <div className='flex items-end gap-5'>
            <p>08 Dec, 2021</p>
        <img src={props.image} alt="" />
        <div className='flex flex-col items-center'>
        <p>Excellent</p>
            <div className='flex items-center gap-1'>
                <FaStar className='text-[#8B3EEA]'/>
                <FaStar className='text-[#8B3EEA]' />
                <FaStar className='text-[#8B3EEA]' />
                <FaStar className='text-[#8B3EEA]' />
                <FaStar className='text-[#8B3EEA]' />
                </div>
            </div>
        </div>
        <h2 className='text-[#212529] text-lg md:text-xl font-semibold text-center mt-3'>{props.name}</h2>
        <p className='text-[#A8A8A8] mt-3 text-center'>" Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer. worth ur money for sure. thanks. Driver was very good and polite and safe driving for all 6 days. on time pickup and drop overall. Thanks for it. "</p>
        </div>
    
      
    </section>
  )
}

export default SingleReview
