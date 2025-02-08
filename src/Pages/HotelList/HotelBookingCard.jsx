import React from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import SearchResultsFilter from "./SearchResultsFilter";
import DiscreteSlider from "./DiscreteSlider";

const HotelBookingCard = () => {
  // hotelinfo for map
  
  const hotelInfo = [
    {
      id: 1,
      img: "hotel1.webp",
      heading: "Hotel Chancellor@Orchard",
    },
    {
      id: 2,
      img: "hotel-2.webp",
      heading: "Dorsett Singapore",
    },
    {
      id: 3,
      img: "hotel-3.webp",
      heading: "Royal Plaza on Scotts",
    },
  ];
  return (
    <section className="px-2">
      
      {/* section-left-side */}

      <div className="flex flex-col gap-2 lg:flex-row w-[100%] ">
        <div className="w-[100%] lg:w-[33%]">
          <div className="flex flex-col p-4 mb-5 bg-gray-100 rounded-lg ">
            
            {/* Left - Filters Section-top */}
            <div className="flex items-start justify-between mt-6 md:mt-16">
              <div>
                <h2 className="text-lg font-semibold text-[#05264E]">
                  Filters
                </h2>
                <p className="text-sm text-gray-500">Showing 180 Hotels</p>
              </div>
              <div>
                <button className="text-sm font-semibold text-red-500 ">
                  Clear All
                </button>
              </div>
            </div>
            <hr className="mt-4 full " />

            {/* left-Filter-section-middle-To-Bottom */}
            <div class="p-4 space-y-4 bg-white rounded-lg shadow ">
              {/* Bed Type Section */}
              <div className="">
                <h3 class="text-lg font-semibold mb-2 text-[#05264E] py-2">
                  Bed Type
                </h3>
                <div class="grid grid-cols-2  gap-2 ">
                  <button class="px-4 py-3 rounded-md border bg-gray-100 text-gray-700 hover:bg-[#CD2C22] font-semibold text-xs hover:text-white">
                    1 Double Bed
                  </button>
                  <button class="px-4 py-3 rounded-md border bg-gray-100 text-gray-700 hover:bg-[#CD2C22] font-semibold text-xs hover:text-white">
                    2 Beds
                  </button>
                  <button class="px-4 py-3 rounded-md border bg-gray-100 text-gray-700 hover:bg-[#CD2C22] font-semibold text-xs hover:text-white">
                    1 Single Bed
                  </button>
                  <button class="px-4 py-3 rounded-md border bg-gray-100 text-gray-700 hover:bg-[#CD2C22] font-semibold text-xs hover:text-white">
                    3 Beds
                  </button>
                  <button class="px-4 py-3 rounded-md border bg-gray-100 text-gray-700 hover:bg-[#CD2C22] font-semibold text-xs hover:text-white col-span-2">
                    King Bed
                  </button>
                </div>
              </div>

              {/* Popular Filters Section  */}
              <div className="w-full ">
                <h3 class="text-lg font-semibold mb-2 text-[#05264E] py-2">
                  Popular Filters
                </h3>
                <div class="space-y-2">
                  <label class="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      class="w-5 h-5 rounded border-gray-300 focus:ring-red-500"
                    />
                    <span>Free Cancellation Available</span>
                  </label>

                  <label class="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      class="w-5 h-5 rounded border-gray-300 focus:ring-red-500"
                    />
                    <span>Book @ ₹1</span>
                  </label>
                  <label class="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      class="w-5 h-5 rounded border-gray-300 focus:ring-red-500"
                    />
                    <span>Free Breakfast Included</span>
                  </label>

                  <label class="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      class="w-5 h-5 rounded border-gray-300 focus:ring-red-500"
                    />
                    <span>Pay At Hotel Available</span>
                  </label>
                </div>
              </div>
              {/* Pricing Range */}
              <div className="w-full ">
                <DiscreteSlider />
              </div>
              {/* Customer Rating */}
              <div className="w-full ">
                <h3 className="text-lg font-semibold mb-2 text-[#05264E] py-2">
                  Customer Rating
                </h3>
                <div className="space-y-2 ">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        class="w-5 h-5 rounded border-gray-300 focus:red-600"
                      />
                      <div className="flex items-center">
                        <div className="flex items-center gap-1">
                          <FaStar className="text-[#FFC107] w-5 h-5" />
                          <span className="text-lg font-bold text-[#0E1E2B]">
                            4.5+
                          </span>
                        </div>
                      </div>
                    </label>
                    <span className="text-[16px] text-[#9AA4B3]">16</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <label class="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        class="w-5 h-5 rounded border-gray-300 focus:red-600"
                      />
                      <div className="flex items-center">
                        <div className="flex items-center gap-1">
                          <FaStar className="text-[#FFC107] w-5 h-5" />
                          <span className="text-lg font-bold text-[#0E1E2B]">
                            4+
                          </span>
                        </div>
                      </div>
                    </label>
                    <span className="text-[16px] text-[#9AA4B3]">8</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <label class="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        class="w-5 h-5 rounded border-gray-300 focus:red-600"
                      />
                      <div className="flex items-center">
                        <div className="flex items-center gap-1">
                          <FaStar className="text-[#FFC107] w-5 h-5" />
                          <span className="text-lg font-bold text-[#0E1E2B]">
                            3.5+
                          </span>
                        </div>
                      </div>
                    </label>
                    <span className="text-[16px] text-[#9AA4B3]">10</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <label class="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        class="w-5 h-5 rounded border-gray-300 focus:red-600"
                      />
                      <div className="flex items-center">
                        <div className="flex items-center gap-1">
                          <FaStar className="text-[#FFC107] w-5 h-5" />
                          <span className="text-lg font-bold text-[#0E1E2B]">
                            3+
                          </span>
                        </div>
                      </div>
                    </label>
                    <span className="text-[16px] text-[#9AA4B3]">26</span>
                  </div>
                </div>
              </div>
              {/* Star Rating */}
              <div className="w-full ">
                <h3 class="text-lg font-semibold mb-2 text-[#05264E] py-2">
                  Customer Rating
                </h3>
                <div class="space-y-2 ">
                  <div className="flex items-center justify-between ">
                    <label class="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        class="w-5 h-5 rounded border-gray-300 focus:red-600"
                      />
                      <div className="flex items-center">
                        <div className="flex items-center gap-1">
                          <FaStar className="text-[#FFC107] w-5 h-5" />
                          <FaStar className="text-[#FFC107] w-5 h-5" />
                          <FaStar className="text-[#FFC107] w-5 h-5" />
                          <FaStar className="text-[#FFC107] w-5 h-5" />
                          <FaStar className="text-[#FFC107] w-5 h-5" />
                        </div>
                      </div>
                    </label>
                    <span className="text-[16px] text-[#9AA4B3]">16</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <label class="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        class="w-5 h-5 rounded border-gray-300 focus:red-600"
                      />
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <FaStar className="text-[#FFC107] w-5 h-5" />
                          <FaStar className="text-[#FFC107] w-5 h-5" />
                          <FaStar className="text-[#FFC107] w-5 h-5" />
                          <FaStar className="text-[#FFC107] w-5 h-5" />
                        </div>
                      </div>
                    </label>
                    <span className="text-[16px] text-[#9AA4B3]">8</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <label class="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        class="w-5 h-5 rounded border-gray-300 focus:red-600"
                      />
                      <div className="flex items-center">
                        <div className="flex items-center gap-1">
                          <FaStar className="text-[#FFC107] w-5 h-5" />
                          <FaStar className="text-[#FFC107] w-5 h-5" />
                          <FaStar className="text-[#FFC107] w-5 h-5" />
                        </div>
                      </div>
                    </label>
                    <span className="text-[16px] text-[#9AA4B3]">10</span>
                  </div>
                </div>
              </div>
              {/* Amenities */}
              <div className="w-full ">
                <h3 class="text-lg font-semibold mb-2 text-[#05264E] py-2">
                  Amenities
                </h3>
                <div class="space-y-2">
                  <label class="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      class="w-5 h-5 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-[#2D3740]">Free Wifi</span>
                  </label>

                  <label class="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      class="w-5 h-5 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-[#2D3740]">4 Breakfast included</span>
                  </label>
                  <label class="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      class="w-5 h-5 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-[#2D3740]">Pool</span>
                  </label>

                  <label class="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      class="w-5 h-5 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-[#2D3740]">Free Parking</span>
                  </label>
                  <label class="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      class="w-5 h-5 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-[#2D3740]">Air Conditioning</span>
                  </label>
                  <label class="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      class="w-5 h-5 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-[#2D3740]">Air Conditioning</span>
                  </label>
                </div>
              </div>
              {/* Fun things To Do */}
              <div className="w-full ">
                <h3 class="text-lg font-semibold mb-2 text-[#05264E] py-2">
                  Fun things To Do
                </h3>
                <div class="space-y-2">
                  <label class="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      class="w-5 h-5 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-[#2D3740]">Beach</span>
                  </label>

                  <label class="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      class="w-5 h-5 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-[#2D3740]">Fitness center</span>
                  </label>
                  <label class="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      class="w-5 h-5 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-[#2D3740]">Cycling</span>
                  </label>

                  <label class="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      class="w-5 h-5 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-[#2D3740]">Animation Show</span>
                  </label>
                  <label class="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      class="w-5 h-5 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-[#2D3740]">Shopping center</span>
                  </label>
                  <label class="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      class="w-5 h-5 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-[#2D3740]">Air Conditioning</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* section-right-side */}
        <div className="w-[100%] lg:w-[70%]">
          {/* right-Filter-section-top */}
          <SearchResultsFilter />
          {/* right-Filter-section-Top-to-bottom */}
          {hotelInfo.map((hotelInfo, index) => (
            <div key={index} className="flex py-6 shadow-sm rounded-xl ">
              <div className="flex flex-col px-2 md:flex-row lg:items-center lg:gap-5 md:gap-2">
                {/* hotel-image */}
                <div className="w-full lg:w-[30%] ">
                  <img
                    className="w-full mx-auto mb-5 rounded-md md:w-64 h-80"
                    src={hotelInfo.img}
                    alt=""
                  />
                </div>
                {/* hotel-info-all */}
                <div className="w-full lg:w-[80%] mx-auto px-3">
                  <div className="">
                    <div className="flex gap-24 mb-1">
                      <div>
                        <div className="flex flex-col items-start ">
                          <div className="flex flex-col">
                            <div className="flex gap-1">
                              <FaStar className="text-[#FFC107] w-3 h-3" />
                              <FaStar className="text-[#FFC107] w-3 h-3" />
                              <FaStar className="text-[#FFC107] w-3 h-3" />
                              <FaStar className="text-[#FFC107] w-3 h-3" />
                              <FaStar className="text-[#FFC107] w-3 h-3" />
                            </div>
                            <h2 className="text-sm font-bold text-[#05264E] mt-1 lg:text-xl">
                              {hotelInfo.heading}
                            </h2>
                            <p className="text-sm text-[#516A7C] mt-1">
                              Waterloo and Southwark • 9.8 km from Delhi Airport
                            </p>
                          </div>

                          <div>
                            <a className="text-[#CD2C22] text-sm" href="#">
                              Show on Map
                            </a>
                            <div className="flex flex-col ">
                              <div className="flex gap-2 py-1 my-2 text-gray-600 md:my-5">
                                <p className="px-2 py-1 text-xs outline-dashed outline-1">
                                  Parking
                                </p>
                                <p className="px-2 py-1 text-xs outline-dashed outline-1">
                                  WiFi
                                </p>
                                <p className="px-2 py-1 text-xs outline-dashed outline-1">
                                  Eating
                                </p>
                                <p className="px-2 py-1 text-xs outline-dashed outline-1">
                                  Cooling
                                </p>
                                <p className="px-2 py-1 text-xs outline-dashed outline-1">
                                  Pet
                                </p>
                              </div>
                              <div className="">
                                <h4 className="text-sm font-semibold text-[#0E1E2B] lg:text-lg">
                                  Standard Twin Double Room
                                </h4>
                                <p className="text-xs text-[#BFC1C1]">
                                  Last booked 25min ago
                                </p>
                              </div>
                              <div className="mt-5">
                                <p className="text-[#27A974] text-sm font-semibold bg-[#D4EEE3] px-3 py-1 rounded-md inline-block">
                                  Free Cancellation, till 1 hour of Pick up
                                </p>
                                <p className="mt-2 text-sm">
                                  <a className="text-[#D52F30]" href="">
                                    Login  
                                  </a>
                                  <span className="text-[#676F7D] ">
                                  {" "} & get additional $15 Off Using 
                                  </span>
                                  <a className="text-[#D52F30]" href="">{" "}
                                    Visa card
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="flex items-center justify-end">
                          <div className="w-[100px]">
                            <h6 className="font-bold text-[#0E1E2B] text-sm">
                              Exceptional
                            </h6>
                            <p className="text-xs text-gray-500 ">
                              3,014 reviews
                            </p>
                          </div>
                          <div>
                            <button className="px-3 py-3 font-semibold text-white bg-red-600 rounded-md">
                              4.8
                            </button>
                          </div>
                        </div>
                        <div className="text-right ">
                          <div className="flex items-center justify-end">
                            <span className="justify-center px-4 py-1 mt-8 bg-[#27A974] text-white font-semibold rounded-sm text-xs lg:mt-12">
                              15% off
                            </span>
                          </div>
                          <p className="inline-block pt-2 text-sm text-gray-500 line-through">
                            US $79
                          </p>{" "}
                          <span className="font-bold  pt-2 text-xl  text-[#0E1E2B] ">
                            $59
                          </span>
                          <p className="pt-3 text-xs text-gray-500 ">
                            + $22 taxes & Fees
                          </p>
                          <p className="text-xs text-gray-500 ">
                            {" "}
                            For 2 Nights
                          </p>
                          <div className="flex justify-end">
                            <button className="flex items-center gap-2 px-2 py-2 mt-10 text-xs font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 lg:mt-12 lg:text-sm">
                              See Availability <FaArrowTrendUp />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelBookingCard;
