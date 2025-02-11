import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { TbAirConditioning } from "react-icons/tb";
import { FaWifi } from "react-icons/fa";
import { IoIosFitness } from "react-icons/io";
import { PiTelevisionBold } from "react-icons/pi";


function HotelCastle() {
  return (
    <section className='mt-20 mb-16'>
        <div className="container px-4 mx-auto md:px-8 lg:px-10 ">
            {/* Hotel-Castle-left-side  */}
            <div className='flex items-center justify-between '>
                <div>
                <h2 className='text-xl font-semibold md:text-3xl font text-[#212529]'>Hotel castle salam</h2>
                <p className='flex items-center gap-1 mt-2 text-[13px]'><FaLocationDot className='w-3 h-3 cursor-pointer'/> Los angeles</p>
                </div>
                <div>
                    <h4 className='text-[#8B3EEA] text-lg font-semibold '>Excellent</h4>
                    <p className='text-[#8B3EEA]'>4.8/5</p>
                    <p className='mt-1 text-xs text-gray-500'>(1214 reviewes)</p>
                </div>
                
            </div>
            <div className='flex items-center gap-10 py-3 mt-8 border-t-2 border-b-2 lg:gap-24'>
                    <div>
                        <p className='flex items-center gap-2 text-xs text-gray-500'><TbAirConditioning className='w-6 h-6' />
                        Air condition</p>
                    </div>
                    <div>
                        <p className='flex items-center gap-2 text-xs text-gray-500'><PiTelevisionBold className='w-6 h-6' />
                        Flat television</p>
                    </div>
                    <div>
                        <p className='flex items-center gap-2 text-xs text-gray-500'><IoIosFitness className='w-6 h-6' />
                        Fitness center</p>
                    </div>
                    <div>
                        <p className='flex items-center gap-2 text-xs text-gray-500'><FaWifi className='w-6 h-6' />
                        Free Wi-fi</p>
                    </div>
                    
                </div>
          
                    
               
        </div>
   
    </section>
  )
}

export default HotelCastle
