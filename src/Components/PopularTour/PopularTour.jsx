import React from 'react';
import canada1 from '../../assets/canada1.jpg';
import france1 from '../../assets/france1.jpg';
import greece1 from '../../assets/greece1.jpg';
import india1 from '../../assets/india1.jpg';
import maldives1 from '../../assets/maldives1.jpg';
import suadi1 from '../../assets/suadi1.jpg';
import { MdLocationPin, MdOutlineAccessTime } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
import { IoMdHappy } from 'react-icons/io';
import { Link } from 'react-router-dom';

const PopularTour = () => {
  const popularItem = [
    {
      popularImages: canada1,
      popularCountry: "Canada",
      popularTitle: "Canada Tour",
      popularPrice: 300,
      popularDescription:
        "Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum."
    },
    {
      popularImages: france1,
      popularCountry: "France",
      popularTitle: "France Tour",
      popularPrice: 600,
      popularDescription:
        "Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum."
    },
    {
      popularImages: india1,
      popularCountry: "Australia",
      popularTitle: "Australia Tour",
      popularPrice: 2000,
      popularDescription:
        "Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum."
    },
    {
      popularImages: greece1,
      popularCountry: "Greece",
      popularTitle: "Greece Tour",
      popularPrice: 500,
      popularDescription:
        "Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum."
    },
    {
      popularImages: maldives1,
      popularCountry: "Maldives",
      popularTitle: "Maldives Tour",
      popularPrice: 1500,
      popularDescription:
        "Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum."
    },
    {
      popularImages: suadi1,
      popularCountry: "Saudi Arabia",
      popularTitle: "Saudi Arabia Tour",
      popularPrice: 800,
      popularDescription:
        "Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum."
    }
  ];

  return (
    <section className="py-8">
      <div className="max-w-container mx-auto">
        <div className="px-4 md:px-0">
          <span className="font-playfair font-semibold text-xl text-[#FCC703] py-2">
            Choose your place
          </span>
          <h2 className="py-2 font-playfair font-bold md:text-5xl text-2xl text-[#333]">
            Most <span className="text-[#199E9D]">Popular Tours</span>
          </h2>
          <p className="font-playfair font-light text-[#333] md:text-base text-sm md:py-2 md:w-[45%] w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mt-5">
          <div className="md:flex justify-between flex-wrap gap-6">
            {popularItem.map((item, index) => (
              <div key={index} className="md:w-[32%] mt-5 px-4 md:mt-0 md:px-0">
                  <div className="relative group">
                  
                    <div className="relative">
                      <img
                        src={item.popularImages}
                        alt={item.popularTitle}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute bottom-5 right-4 flex flex-col text-white">
                        <h2 className="font-playfair text-2xl font-bold">
                          {item.popularTitle}
                        </h2>
                        <p className="font-playfair mt-1 font-semibold text-[18px] text-[#FCC703]">
                          ${item.popularPrice}/Per Person
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#199E9D] text-white p-3 md:p-4 rounded-lg absolute top-0 left-0 h-0 group-hover:h-full w-full opacity-0 group-hover:opacity-100 group-hover:rotate-y-180 duration-700">
                      <h2 className="font-playfair text-xl md:text-2xl font-bold">{item.popularTitle}</h2>
                      <p className="font-playfair mt-1 font-semibold text-sm md:text-base text-[#FCC703]">
                        ${item.popularPrice}/Per Person
                      </p>
                      <p className="font-open-sans font-normal mt-1 md:text-sm text-xs">{item.popularDescription}</p>
                      <div className="grid grid-cols-2 gap-y-1 mt-2">
                        <div className="flex items-center">
                            <div className=""><MdOutlineAccessTime /></div>
                            <div className="font-open-sans font-normal md:text-sm text-xs ml-1">12 Days</div>
                        </div>
                        <div className="flex items-center">
                            <div className=""><MdLocationPin/></div>
                            <div className="font-open-sans font-normal md:text-sm text-xs ml-1">{item.popularCountry}</div>
                        </div>
                        <div className="flex items-center">
                            <div className=""><FaRegUser/></div>
                            <div className="font-open-sans font-normal md:text-sm text-xs ml-1">12+</div>
                        </div>
                        <div className="flex items-center">
                            <div className=""><IoMdHappy/></div>
                            <div className="font-open-sans font-normal md:text-sm text-xs ml-1">9.5 Superb</div>
                        </div>
                      </div>
                      <button class="py-1 mt-2 md:mt-1 text-white text-base md:text-[18px] font-semibold border-b-2 border-white  hover:border-blue-700 transition duration-300">
                        <Link to="/booknow">
                        Tour details
                        </Link>
                    </button>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularTour;
