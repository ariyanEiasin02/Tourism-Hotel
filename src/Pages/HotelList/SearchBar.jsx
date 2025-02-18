import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";


function SearchBar() {
  const [selected, setSelected] = useState("");
  const [startDate, setStartDate] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(0);
  
  // Function to update counts
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
    <div className="px-4 py-8 bg-red-600 lg:px-12">
   
    <div className="grid items-center justify-center grid-cols-1 gap-4 px-2 md:grid-cols-2 lg:grid-cols-4">
      
      {/* WHERE (Dropdown) */}
      <div>
        <label className="block mb-1 font-semibold text-[#E18A85]">WHERE</label>
        <select
          className="w-full mx-auto bg-white sm:w-[80%] lg:w-[300px] h-[70px] rounded-md focus:outline-none px-2 "
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="" disabled>
            Going To
          </option>
          <option value="New York">New York</option>
          <option value="San Diego">San Diego</option>
          <option value="San Jose">San Jose</option>
          <option value="Philadelphia">Philadelphia</option>
          <option value="Nashville">Nashville</option>
          <option value="San Francisco">San Francisco</option>
        </select>
      </div>

      {/* CHECK-IN & CHECKOUT */}
      <div className="">
        <label className="block mb-1 font-semibold text-[#B1ADBD] ">
          CHECK-IN & CHECKOUT
        </label>
        <div className="relative w-full mx-auto bg-white sm:w-[80%] lg:w-[300px] h-[70px] rounded-md flex items-center justify-start">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="MMMM d, yyyy"
          placeholderText="Check-In & Check-Out"
          className="focus:outline-none"
        />
        
      </div>
      </div>

      {/* GUESTS & ROOMS */}
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
        
        <IoChevronDown  />
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

      {/* SEARCH BUTTON */}
      <div className="flex items-end">
        <button className="w-full mx-auto bg-white sm:w-[60%]  h-[60px] mt-5 rounded-md flex gap-3 items-center justify-center hover:bg-[#0E1E2B] hover:text-white transition-all duration-1000 ease-linear">
          <IoSearch className="w-5 h-5" /> <span className="font-semibold">Search</span>
        </button>
      </div>
    </div>
  </div>
   );
  
}

export default SearchBar;
