import React from 'react'
import { FaWifi, FaSmokingBan } from "react-icons/fa";
import { MdAirportShuttle, MdOutlineFamilyRestroom, MdFitnessCenter, MdCleaningServices, MdOutlineCoffeeMaker, MdLocalBar, MdOutlineFreeBreakfast } from "react-icons/md";
import PopularFacilities from '../PopularFacilities/PopularFacilities';
import { LuParkingCircle } from "react-icons/lu";
import { IoLocation } from "react-icons/io5";

const Facilities = () => {
    return (
        <div>
            <section>
                <div className="max-w-container mx-auto">
                    <div className="flex justify-between gap-x-4">
                        <div className="w-8/12">
                            <p className='font-playfair font-medium text-base text-[#333]'>You might be eligible for a Genius discount at HOTEL LUXURY STAY NEAR IGI DELHI AIRPORTt. To check if a Genius discount is available for your selected dates <a className='text-blue-500 underline' href="#">Sign in.</a></p>
                            <p className='font-playfair font-medium text-base text-[#333] py-2'>Genius discounts at this property are subject to book dates, stay dates and other available deals.</p>
                            <p className='font-playfair font-medium text-base text-[#333] py-2'>Set in New Delhi, 13 km from MG Road, HOTEL LUXURY STAY NEAR IGI DELHI AIRPORTt offers accommodation with a fitness centre, free private parking and a bar. This 4-star hotel offers an ATM and a concierge service. The accommodation provides a 24-hour front desk, airport transfers, room service and free WiFi throughout the property.</p>
                            <p className='font-playfair font-medium text-base text-[#333] py-2'>Set in New Delhi, 13 km from MG Road, HOTEL LUXURY STAY NEAR IGI DELHI AIRPORTt offers accommodation with a fitness centre, free private parking and a bar. This 4-star hotel offers an ATM and a concierge service. The accommodation provides a 24-hour front desk, airport transfers, room service and free WiFi throughout the property.</p>
                            <p className='font-playfair font-medium text-base text-[#333] py-2'>At the hotel, all rooms come with a desk, a flat-screen TV, a shared bathroom, bed linen and towels. At HOTEL LUXURY STAY NEAR IGI DELHI AIRPORTt each room includes air conditioning and a safety deposit box.</p>
                            <p className='font-playfair font-medium text-base text-[#333] py-2'>A buffet, continental or Italian breakfast can be enjoyed at the property.</p>
                            <p className='font-playfair font-medium text-base text-[#333] py-2'>Qutub Minar is 13 km from the accommodation, while Rashtrapati Bhavan is 15 km away. Delhi International Airport is a few steps from the property.</p>
                            <p className='font-playfair font-medium text-base text-[#333] py-2'>Couples particularly like the location — they rated it 9.7 for a two-person trip.</p>
                            <p className='font-playfair font-medium text-sm text-[#333] py-2'>Distance in property description is calculated using © OpenStreetMap</p>
                            <div className="">
                                <h3 className='font-playfair font-bold text-xl text-[#333] py-2'>Most popular facilities</h3>
                                <div className="flex gap-x-4 gap-y-3 flex-wrap">
                                    <PopularFacilities titleName="Free WiFi" titleIcon={<FaWifi />} />
                                    <PopularFacilities titleName="Airport shuttle" titleIcon={<MdAirportShuttle />} />
                                    <PopularFacilities titleName="Family rooms" titleIcon={<MdOutlineFamilyRestroom />} />
                                    <PopularFacilities titleName="Fitness centre" titleIcon={<MdFitnessCenter />} />
                                    <PopularFacilities titleName="Free parking" titleIcon={<LuParkingCircle />} />
                                    <PopularFacilities titleName="Non-smoking rooms" titleIcon={<FaSmokingBan />} />
                                    <PopularFacilities titleName="Room service" titleIcon={<MdCleaningServices />} />
                                    <PopularFacilities titleName="Tea/coffee maker in all rooms" titleIcon={<MdOutlineCoffeeMaker />} />
                                    <PopularFacilities titleName="Bar" titleIcon={<MdLocalBar />} />
                                    <PopularFacilities titleName="Breakfast" titleIcon={<MdOutlineFreeBreakfast />} />
                                </div>
                            </div>
                        </div>
                        <div className="w-4/12">
                            <div className="bg-[#F0F6FF] p-6 rounded-sm">
                              <div className="">
                              <h3 className='font-playfair font-bold text-xl text-[#333'>Property highlights</h3>
                                <div className="flex items-start py-2">
                                    <div className="pt-1">
                                        <i className='text-base'><IoLocation/></i>
                                    </div>
                                    <div className="pl-2">
                                        <p className='font-playfair font-medium text-base text-[#333]'>Top location: Highly rated by recent guests (8.4)</p>
                                    </div>
                                </div>
                              </div>
                              <div className="">
                              <h3 className='font-playfair font-bold text-xl text-[#333'>Breakfast info</h3>
                              <p className='font-playfair font-medium text-base text-[#333]py-3'>Continental, Italian, American, Buffet</p>
                              <div className="flex items-start py-2">
                                    <div className="pt-1">
                                        <i className='text-base'><LuParkingCircle /></i>
                                    </div>
                                    <div className="pl-2">
                                        <p className='font-playfair font-medium text-base text-[#333]'>Free private parking available at the hotel</p>
                                    </div>
                                </div>
                              </div>
                              <div className="text-center bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-700 font-playfair font-bold text-base cursor-pointer">Reserve</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Facilities