import React from 'react'
import { TbAirConditioning } from "react-icons/tb";
import { FaWifi } from "react-icons/fa";
import { IoIosFitness } from "react-icons/io";
import { PiTelevisionBold } from "react-icons/pi";

function HotelCard() {
    
    const cardInfo = [
        {
            img: "hotel1.png" ,
            heading: "Culpa cupidatat laborum eiusmod a",
            
        },
        {
            img: "hotel2.png",
            heading: "Ea sint elit duis nostrud consequat",
        },
        {
            img: "hotel3.png",
            heading: "Aliquip sit nisi est laboris eiusmod",
        }
    ]
  return (
    <section className='mt-10'>
      <div className='container px-6 md:px-8  w-[100%]  md:w-[70%] '>
      {
        cardInfo.map((cardInfo,index)=>(
            <div key={index} className='flex flex-col pb-5 mb-5 border-2 md:mb-8 md:items-center md:gap-6 lg:flex-row'>
      <img className='w-full h-auto lg:w-52' src={cardInfo.img} alt="" />
    <div className='flex flex-col sm:flex-row'>
    <div className='flex flex-col px-5 text-left '>
            <h3 className='text-lg font-semibold md:text-xl text-[#21334B] py-3 '>{cardInfo.heading}</h3>
            <div className='grid grid-cols-2 space-x-0 md:gap-1 '>
                <p className='flex items-center gap-2 text-xs md:text-sm'><TbAirConditioning className='w-5 h-5' /> Air Condition</p>
                <p className='flex items-center gap-2 text-xs md:text-sm'>< PiTelevisionBold className='w-5 h-5' /> Air Condition</p>
                <p className='flex items-center gap-2 text-xs md:text-sm'><IoIosFitness className='w-5 h-5' /> Air Condition</p>
                <p className='flex items-center gap-2 text-xs md:text-sm'><FaWifi className='w-5 h-5' /> Air Condition</p>

            
            </div>
        </div>
        <div className='flex flex-col px-2 mt-3'>
            <p className='text-[#8B3EEA] text-lg font-semibold mb-3 lg:text-lg' >$1200.00/ <span className='text-sm'>Per night</span></p>
            <select className='p-2 border-1 focus:border-teal-200 w-[90%]' name="" id="">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
            </select>
        </div>
    </div>
      </div>
        ))
      }
      </div>
    </section>
  )
}

export default HotelCard
