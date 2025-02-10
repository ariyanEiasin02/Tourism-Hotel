import React from 'react'
import { useState } from "react";
import DatePicker from "react-datepicker";

import { FaCalendarAlt } from "react-icons/fa";

function SelectRoom() {
      const [selected, setSelected] = useState("");
      const [startDate, setStartDate] = useState(null);
    
      const [isOpen, setIsOpen] = useState(false);
      const [adults, setAdults] = useState(1);
      const [children, setChildren] = useState(0);
      const [rooms, setRooms] = useState(0);

      const updateCount = (type, operation) => {
        if (type === "adults") {
          setAdults((prev) => (operation === "increase" ? prev + 1 : Math.max(1, prev - 1)));
        } else if (type === "children") {
          setChildren((prev) => (operation === "increase" ? prev + 1 : Math.max(0, prev - 1)));
        } else if (type === "rooms") {
          setRooms((prev) => (operation === "increase" ? prev + 1 : Math.max(0, prev - 1)));
        }
      };
   
  return (
    <section>
          <div className='container px-4 md:px-8 lg:px-10  w-[100%] md:w-[65%] border p-5 rounded-2xl'>
        <h3 className='text-xl font-semibold text-[#21253D] border-b-2 w-40 pb-1 border-[#8B3EEA]'>Select your room</h3>
            <div>
                <button className='hover:bg-[#8B3EEA] hover:text-white px-20 py-3 rounded-md text-[#3374D3] font-semibold mt-5 ml-40'>Book</button>
                <button className='hover:bg-[#8B3EEA] hover:text-white px-20 py-3 rounded-md text-[#3374D3] font-semibold mt-5 ml-40'>Enquiry</button>
            </div>
            <div className='flex flex-col items-center md:flex-row'>
              <div className="flex items-center">
                <div className=''>
                <label className="block mb-1 font-semibold text-[#E18A85] ">
                  Check In date
                  </label>
                  {/* < FaCalendarAlt/> */}
                  <p>05/05/2025</p>
                  <p>Thursday</p>
                </div>
               <div>
               
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="MMMM d, yyyy"
                    placeholderText="Check-In date"
                    className="focus:outline-none"
                  />
               </div>
                </div>
                <div className="flex items-center">
                <div className=''>
                <label className="block mb-1 font-semibold text-[#E18A85] ">
                  Check In date
                  </label>
                  {/* < FaCalendarAlt/> */}
                  <p>05/05/2025</p>
                  <p>Thursday</p>
                </div>
               <div>
               
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="MMMM d, yyyy"
                    placeholderText="Check-out date"
                    className="focus:outline-none"
                  />
               </div>
                </div>
                  <div>
                        <label className="block mb-1 font-semibold text-[#E18A85]">
                          GUESTS & ROOMS
                        </label>
                      {/* Input Box */}
                      <div
                        className="w-full bg-white sm:w-[90%] lg:w-[300px] h-[70px] rounded-md px-4 py-4 flex items-center justify-between "
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        {adults} Adults, {children} Children, {rooms} Rooms
                        
                       
                      </div>
                
                      {/* Dropdown Menu */}
                      {isOpen && (
                        <div className="absolute z-10 mt-2 bg-white rounded-md w-[95%] px-10 py-6 space-y-5 sm:w-[25%] text-lg">
                          {[
                            { label: "Adults", count: adults, type: "adults" },
                            { label: "Children", count: children, type: "children" },
                            { label: "Rooms", count: rooms, type: "rooms" }
                          ].map((item) => (
                            <div key={item.type} className="flex items-center justify-around mb-2 ">
                              <button
                                className="w-6 h-6 p-2 text-red-600 border rounded-md disabled:opacity-50 "
                                onClick={() => updateCount(item.type, "decrease")}
                                disabled={item.type === "adults" && item.count === 1}
                              >
                                <FaMinus className="w-3 h-3" />
                              </button>
                              <span className="text-xs text-red-800 md:text-sm">{item.count} {item.label}</span>
                              <button
                                className="w-6 h-6 p-2 text-red-600 border rounded-md hover:bg-red-100"
                                onClick={() => updateCount(item.type, "increase")}
                              >
                                <FaPlus className="w-3 h-3 " />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                      </div>
                </div>
            </div>
      
      
    </section>
  )
}

export default SelectRoom
