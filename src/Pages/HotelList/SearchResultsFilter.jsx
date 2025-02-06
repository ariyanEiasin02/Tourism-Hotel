import React, { useState } from "react";

const SearchResultsFilter = () => {
  const [isMapEnabled, setIsMapEnabled] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Our Trending");

  return (
    <div className="flex flex-col items-center justify-between max-w-4xl p-4 mx-auto mt-2 bg-gray-100 rounded-md md:flex-row md:mt-16 ">
      {/* Search Results Count */}
      <h2 className="mb-2 text-lg font-semibold text-gray-800 md:mb-0">
        Showing <span className="font-bold">280</span> Search Results
      </h2>

      {/* Map Toggle */}
      <div className="flex items-center gap-4">
        <button
          className={`flex items-center gap-2 px-3 py-0.5 rounded-full border text-sm ${
            isMapEnabled ? "bg-red-500 text-white" : "bg-[#FFDFDD] "
          }`}
          onClick={() => setIsMapEnabled(!isMapEnabled)}
        >
          <span
            className={`w-3 h-3 rounded-md border ${
              isMapEnabled ? "bg-white text-red-500 -translate-x-2 duration-300 transition-all ease-linear" : "bg-[#86B7FE] translate-x-2 duration-300 transition-all ease-linear"
            }`}
          ></span>
         
        </button>
        Map
        {/* Filter Tabs */}
        <div className="flex px-2 py-3 text-xs font-semibold bg-red-500 rounded-md">
          {["Our Trending", "Most Popular", "Lowest Price"].map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-md ${
                selectedFilter === filter
                  ? "bg-white text-red-500  p-1"
                  : "text-white p-1"
              }`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResultsFilter;