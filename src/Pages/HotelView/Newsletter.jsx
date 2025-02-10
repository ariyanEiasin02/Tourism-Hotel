import React from 'react'
import { HiOutlineMailOpen } from "react-icons/hi";

function Newsletter() {
  return (
    <section className='py-20'>
    <div className='container px-4 md:px-8  w-[100%] '>
        <div className='flex flex-col justify-between w-full lg:flex-row'>
            <div className='flex items-center gap-3'>
            <HiOutlineMailOpen className='w-28 h-28 text-[#8B3EEA]' />
                <div>
                    <p className='text-xl text-[#212529] mb- font-semibold'>Get the latest news and offers</p>
                    <h2 className='text-xl font-semibold md:text-3xl lg:text-4xl text-[#212529]'>Subscribe to our newsletter</h2>
                </div>
            </div>
           
                <div className='mt-10 '>
                    <input type="text" placeholder='Enter Your Email'className='px-2 py-3 rounded-md pw-full hover:outline-dotted outline-blue-600' />
                    <button className='bg-[#8B3EEA] px-12 py-3 rounded-md text-white hover:bg-[#212529] transition-all duration-1000 ease-linear font-semibold mr-3 '>Subscribe</button>
                </div>
            
        </div>
    </div>
  
</section>
  )
}

export default Newsletter
