import React from "react";
import hotel1 from "../../assets/hotel1.png";
import hotel2 from "../../assets/hotel2.png";
import hotel3 from "../../assets/hotel3.png";
import hotel4 from "../../assets/hotel4.png";
import hotel5 from "../../assets/hotel5.png";
import hotel6 from "../../assets/hotel6.png";
import hotel7 from "../../assets/hotel7.png";
import hotel8 from "../../assets/hotel8.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

const ExploreHotes = () => {
  const exploreItems = [
    {
      exploreImages: hotel1,
      exploreLocation: "New beach, Thailand",
      exploreTitle: "Kantua hotel, Thailand",
      exploreReview: "4.8/5 Excellent",
      explorePrice: 99,
      exploreStar: "Price starts from",
    },
    {
      exploreImages: hotel2,
      exploreLocation: "Indonesia",
      exploreTitle: "Hotel paradise international",
      exploreReview: "4.8/5 Excellent",
      explorePrice: 69,
      exploreStar: "Price starts from",
    },
    {
      exploreImages: hotel3,
      exploreLocation: "Kualalampur",
      exploreTitle: "Hotels Kualalampur",
      exploreReview: "4.8/5 Excellent",
      explorePrice: 79,
      exploreStar: "Price starts from",
    },
    {
      exploreImages: hotel4,
      exploreLocation: "Mariana island",
      exploreTitle: "Hotel deluxe",
      exploreReview: "4.8/5 Excellent",
      explorePrice: 99,
      exploreStar: "Price starts from",
    },
    {
      exploreImages: hotel5,
      exploreLocation: "imgKathmundu, Nepal",
      exploreTitle: "Hotel rajavumi",
      exploreReview: "4.8/5 Excellent",
      explorePrice: 49,
      exploreStar: "Price starts from",
    },
    {
      exploreImages: hotel6,
      exploreLocation: "Beach view",
      exploreTitle: "Thailand grand suit",
      exploreReview: "4.8/5 Excellent",
      explorePrice: 99,
      exploreStar: "Price starts from",
    },
    {
      exploreImages: hotel7,
      exploreLocation: "Long island",
      exploreTitle: "Zefi resort and spa",
      exploreReview: "4.8/5 Excellent",
      explorePrice: 89,
      exploreStar: "Price starts from",
    },
    {
      exploreImages: hotel8,
      exploreLocation: "Philippine",
      exploreTitle: "Manila international",
      exploreReview: "4.8/5 Excellent",
      explorePrice: 99,
      exploreStar: "Price starts from",
    },
  ];

  const tours = exploreItems.slice(2, 8);
  const space = exploreItems.slice(4, 8);
  const events = exploreItems.slice(3, 8);
  return (
    <section className="py-8">
      <div className="max-w-container mx-auto">
        <div className="px-4 md:px-0">
          <span className="font-playfair font-semibold text-xl text-[#FCC703] py-2">
            Choose your Hotes
          </span>
          <h2 className="py-2 font-playfair font-bold md:text-5xl text-2xl text-[#333]">
            Explore <span className="text-[#199E9D]">our hot deals</span>
          </h2>
          <p className="font-playfair font-light text-[#333] md:text-base text-sm md:py-2 md:w-[45%] w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="px-4 md:px-0">
          <Tabs>
            <TabList>
              <div className="mt-8 flex justify-center gap-6 flex-wrap mb-6">
                <Tab className="border-2 py-3 px-5 border-[#199E9D] cursor-pointer rounded-lg font-open-sans text-base md:text-[18px] outline-none">
                  Hotels
                </Tab>
                <Tab className="border-2 py-3 px-5 border-[#199E9D] cursor-pointer rounded-lg font-open-sans text-base md:text-[18px] outline-none">
                  Tours
                </Tab>
                <Tab className="border-2 py-3 px-5 border-[#199E9D] cursor-pointer rounded-lg font-open-sans text-base md:text-[18px] outline-none">
                  Space
                </Tab>
                <Tab className="border-2 py-3 px-5 border-[#199E9D] cursor-pointer rounded-lg font-open-sans text-base md:text-[18px] outline-none">
                  Events
                </Tab>
              </div>
            </TabList>

            <TabPanel>
              <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
                {exploreItems.map((explore) => (
                  <div class="group bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img
                        src={explore.exploreImages}
                        alt="Hotel"
                        class="w-full h-full object-cover group-hover:scale-125 duration-500"
                      />
                      <div class="absolute bottom-3 left-2 flex items-center text-white text-[18px]">
                        <div className="">
                          <MdLocationPin />
                        </div>
                        <div className="ml-1">
                          <p className="font-playfair font-semibold">
                            {explore.exploreLocation}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="p-4">
                      <h2 class="font-playfair text-[18px] font-semibold text-[#333]">
                        {explore.exploreTitle}
                      </h2>

                      <div class="flex items-center mt-1 text-yellow-500">
                        <span class="font-open-sans font-bold text-sm">
                          {explore.exploreReview}
                        </span>
                        <span class="text-gray-500 text-sm ml-3">
                          (1214 reviews)
                        </span>
                      </div>

                      <div class="mt-2">
                        <span class="font-playfair text-xl font-semibold text-[#199E9D]">
                          ${explore.explorePrice}
                        </span>
                        <span class="font-open-sans font-semibold text-[#333] text-sm ml-2">
                          {explore.exploreStar}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
                {tours.map((explore) => (
                  <div class="group bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative overflow-hidden">
                      <Link to="/TourDetails">
                        
                        <img
                          src={explore.exploreImages}
                          alt="Hotel"
                          class="w-full h-full object-cover group-hover:scale-125 duration-500"
                        />
                      </Link>

                      <div class="absolute bottom-3 left-2 flex items-center text-white text-[18px]">
                        <div className="">
                          <MdLocationPin />
                        </div>
                        <div className="ml-1">
                          <p className="font-playfair font-semibold">
                            {explore.exploreLocation}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="p-4">
                      <h2 class="font-playfair text-[18px] font-semibold text-[#333]">
                        {explore.exploreTitle}
                      </h2>

                      <div class="flex items-center mt-1 text-yellow-500">
                        <span class="font-open-sans font-bold text-sm">
                          {explore.exploreReview}
                        </span>
                        <span class="text-gray-500 text-sm ml-3">
                          (1214 reviews)
                        </span>
                      </div>

                      <div class="mt-2">
                        <span class="font-playfair text-xl font-semibold text-[#199E9D]">
                          ${explore.explorePrice}
                        </span>
                        <span class="font-open-sans font-semibold text-[#333] text-sm ml-2">
                          {explore.exploreStar}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
                {space.map((explore) => (
                  <div class="group bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img
                        src={explore.exploreImages}
                        alt="Hotel"
                        class="w-full h-full object-cover group-hover:scale-125 duration-500"
                      />
                      <div class="absolute bottom-3 left-2 flex items-center text-white text-[18px]">
                        <div className="">
                          <MdLocationPin />
                        </div>
                        <div className="ml-1">
                          <p className="font-playfair font-semibold">
                            {explore.exploreLocation}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="p-4">
                      <h2 class="font-playfair text-[18px] font-semibold text-[#333]">
                        {explore.exploreTitle}
                      </h2>

                      <div class="flex items-center mt-1 text-yellow-500">
                        <span class="font-open-sans font-bold text-sm">
                          {explore.exploreReview}
                        </span>
                        <span class="text-gray-500 text-sm ml-3">
                          (1214 reviews)
                        </span>
                      </div>

                      <div class="mt-2">
                        <span class="font-playfair text-xl font-semibold text-[#199E9D]">
                          ${explore.explorePrice}
                        </span>
                        <span class="font-open-sans font-semibold text-[#333] text-sm ml-2">
                          {explore.exploreStar}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
                {events.map((explore) => (
                  <div class="group bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img
                        src={explore.exploreImages}
                        alt="Hotel"
                        class="w-full h-full object-cover group-hover:scale-125 duration-500"
                      />
                      <div class="absolute bottom-3 left-2 flex items-center text-white text-[18px]">
                        <div className="">
                          <MdLocationPin />
                        </div>
                        <div className="ml-1">
                          <p className="font-playfair font-semibold">
                            {explore.exploreLocation}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="p-4">
                      <h2 class="font-playfair text-[18px] font-semibold text-[#333]">
                        {explore.exploreTitle}
                      </h2>

                      <div class="flex items-center mt-1 text-yellow-500">
                        <span class="font-open-sans font-bold text-sm">
                          {explore.exploreReview}
                        </span>
                        <span class="text-gray-500 text-sm ml-3">
                          (1214 reviews)
                        </span>
                      </div>

                      <div class="mt-2">
                        <span class="font-playfair text-xl font-semibold text-[#199E9D]">
                          ${explore.explorePrice}
                        </span>
                        <span class="font-open-sans font-semibold text-[#333] text-sm ml-2">
                          {explore.exploreStar}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ExploreHotes;
