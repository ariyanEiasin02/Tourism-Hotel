import React from "react";
import BookCard from "../BookCard/BookCard";

const HotelDetails = () => {
  return (
    <div className="">
      <div className="max-w-container mx-auto bg-white overflow-hidden">
        <div className="relative">
          <BookCard/>
          <span className="absolute top-36 left-4 bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
            Featured
          </span>
        </div>
        <div className="px-6 pt-2 pb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Grand Paradise Hotel</h2>
            <span className="text-lg text-blue-600 font-semibold">
              $120 <span className="text-gray-500 text-sm">/night</span>
            </span>
          </div>

          <p className="text-gray-600 mb-4">
            Experience luxury at its finest with stunning views, spacious rooms, and top-notch amenities. Perfect for vacations, business trips, or a weekend getaway.
          </p>

          {/* Amenities */}
          <div className="flex flex-wrap gap-4 mb-6 text-gray-700">
            <div className="flex items-center gap-2">
              <span className="text-blue-600">✔</span> Free WiFi
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600">✔</span> Swimming Pool
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600">✔</span> Spa & Wellness
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600">✔</span> Breakfast Included
            </div>
          </div>

          {/* Ratings */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex text-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <span className="text-gray-500 text-sm">(4.5/5)</span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md font-semibold">
              Book Now
            </button>
            <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg shadow-md font-semibold">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
