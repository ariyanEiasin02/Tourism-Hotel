import React from 'react'
import { IoPlayOutline } from "react-icons/io5";
const ActivitiesContent = ({activitiesShan,activitiesHeading,activitiesDescription,activitiesSpanOne,activitiesSpanTwo,activitiesSpanThree,activitiesSpanFour,activitiesImagesOne,activitiesImages}) => {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
            <div className="md:w-[68%]">
                <span className="font-playfair font-bold text-xl text-[#FCC703] pb-2">
                    {activitiesShan}
                </span>
                <h2 className="py-2 font-playfair font-bold md:text-3xl text-2xl text-[#333] md:w-[90%]">{activitiesHeading}</h2>
                <p className="font-playfair font-light text-[#333] md:text-base text-sm md:py-2 !leading-8 w-full">{activitiesDescription}</p>
                <div className="grid grid-cols-2 w-[90%] gap-5 mt-5">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-[#199E9D] rounded-full"></div>
                        <p className="font-playfair font-semibold text-gray-800 text-base md:text-[18px">
                            {activitiesSpanOne}
                        </p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-[#199E9D] rounded-full"></div>
                        <p className="font-playfair font-semibold text-gray-800 text-base md:text-[18px">
                            {activitiesSpanTwo}
                        </p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-[#199E9D] rounded-full"></div>
                        <p className="font-playfair font-semibold text-gray-800 text-base md:text-[18px">
                            {activitiesSpanThree}
                        </p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-[#199E9D] rounded-full"></div>
                        <p className="font-playfair font-semibold text-gray-800 text-base md:text-[18px">
                            {activitiesSpanFour}
                        </p>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 mt-8">
                    <div>
                        <button className="rounded-lg bg-[#199E9D] font-playfair font-medium font-base text-white hover:bg-[#FBB03B] py-3 px-8 text-center duration-500">Check Availability</button>
                    </div>
                    <div className="flex items-center space-x-3 cursor-pointer group">
                        <div className="border-2 border-gray-300 w-12 h-12 flex items-center justify-center rounded-full text-2xl text-[#333] group-hover:border-[#199E9D] group-hover:text-[#199E9D] transition-all duration-700">
                            <IoPlayOutline />
                        </div>
                        <div>
                            <h6 className="font-semibold text-gray-800">
                                Watch Adventure
                            </h6>
                        </div>
                    </div>

                </div>
            </div>
            <div className="md:w-[30%] grid grid-cols-2 md:grid-cols-1 gap-5">
                <div className="">
                    <img src={activitiesImagesOne} alt="" className='rounded-lg w-full h-full' />
                </div>
                <div className="">
                    <img src={activitiesImages} alt="" className='rounded-lg w-full h-full' />
                </div>
            </div>
        </div>
    )
}

export default ActivitiesContent