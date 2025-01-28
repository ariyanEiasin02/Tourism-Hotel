import React from "react";
import aboutBanner from '../../assets/aboutBanner.mp4'
import CheckInOut from "../check In-Out/CheckInOut";
const BookBanner = () => {
  return (
   <section className="relative py-16 bg-cover bg-center">
    <div className="max-w-container mx-auto">
    <div className="">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={aboutBanner} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full text-white ">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Explore the World
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Find your next adventure with our exclusive travel packages.
        </p>
        <div className="flex flex-col md:flex-row gap-4 pb-5">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-md">
            Book Now
          </button>
          <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md shadow-md">
            Learn More
          </button>
        </div>
      </div>

      <div className="absolute -bottom-8 left-0 right-0 w-full">
        <CheckInOut/>
      </div>
    </div>
   </section>
  );
};

export default BookBanner;
