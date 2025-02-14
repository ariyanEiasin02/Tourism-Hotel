import React from 'react'
import { HiOutlineMailOpen } from "react-icons/hi";

function Newsletter() {
  return (
    <section className='py-20'>
    <div className='container px-4 md:px-8 w-[100%] '>
        <div className='flex flex-col justify-between lg:flex-row'>
            <div className='flex items-center gap-3'>
            <HiOutlineMailOpen className='w-28 h-28 text-[#8B3EEA]' />
                <div>
                    <p className='text-xl text-[#212529] mb- font-semibold'>Get the latest news and offers</p>
                    <h2 className='text-xl font-semibold md:text-3xl lg:text-4xl text-[#212529]'>Subscribe to our newsletter</h2>
                </div>
            </div>
           
                <div className='flex items-center justify-center mt-10 '>
              <input
                type="email" placeholder='Enter Your Email'
                className="h-12 px-3 overflow-hidden border-2 border-none rounded-md outline-none hover:border-dotted hover:border-blue-600 w-96 hover:border-r-0"
              />
              <button className="h-12 px-6  text-white bg-[#8B3EEA] hover:bg-[#212529] transition-all duration-700 rounded-sm font-semibold  w-40">
                Sign Up
              </button>

                </div>
            
        </div>
    </div>
  
</section>
  )
}

export default Newsletter
