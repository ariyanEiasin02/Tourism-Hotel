import React from "react";

function TopBanner() {
  return (
    <section className="bg-[url('/common-banner.png')] w-full bg-no-repeat bg-cover h-[60vh] mx-auto relative">
      <div className="container absolute px-4 mx-auto mt-32 text-center md:px-8 lg:px-10">
        <h2 className="text-xl text-white md:text-3xl">Hotel details</h2>
        <div className="">
          <ul className="flex items-center justify-center gap-1">
            <li className="p-2 text-white list-disc list-inside hover:text-[#7442A2] transition-all duration-700">
              <a href="">Home</a>
            </li>
            <li className="p-2 text-white list-disc list-inside hover:text-[#7442A2] transition-all duration-700">
              <a href="">Hotel</a>
            </li>
            <li className="p-2 text-white list-disc list-inside hover:text-[#7442A2] transition-all duration-700">
              <a href="">Hotel Details</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default TopBanner;
