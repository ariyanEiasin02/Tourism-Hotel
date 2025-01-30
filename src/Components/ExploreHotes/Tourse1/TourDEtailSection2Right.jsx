import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { TbAirConditioning } from "react-icons/tb";
import { IoTv } from "react-icons/io5";
import { IoIosFitness } from "react-icons/io";
import { MdNetworkWifi } from "react-icons/md";
import hotel1 from './Picture/hotel3.png'
import hotel2 from './Picture/hotel1.png'
import hotel3 from './Picture/hotel2.png'

import hotel4 from './Picture/hotel5.png'

import hotel5 from './Picture/destination6.png'
import hotel6 from './Picture/hotel7.png'



const TourDEtailSection2Right = () => {
  return (
    <div>
      <div className="md:flex justify-between">
        <div>
          <h2 className="text-3xl font-serif font-bold ">Hotel castle salam</h2>
          <p className="flex items-center gap-1 py-3  text-xm">
            {" "}
            <FaLocationDot /> Los angeles
          </p>
        </div>
        <div>
          <p className="text-xl font-serif font-bold text-violet-600">
            Excellent
          </p>
          <p>4.8/5</p>
          <p>(1214 reviewes)</p>
        </div>
      </div>
      <div className="flex justify-between py-4 my-4 border-t-[1px] border-b-[1px]">
        <div className="md:flex gap-2">
          <TbAirConditioning className="text-3xl" />
          <p>Air condition</p>
        </div>
        <div className="md:flex gap-2">
          <IoTv className="text-3xl" />
          <p>Flat television</p>
        </div>
        <div className="md:flex gap-2">
          <IoIosFitness className="text-3xl" />
          <p>Fitness center</p>
        </div>
        <div className="md:flex gap-2">
          <MdNetworkWifi className="text-3xl" />
          <p>Free Wi-fi</p>
        </div>
      </div>
      <div>
        <div>
          <img className="w-full h-[140px] md:h-[340px]" src={hotel1} alt="hotelIMage" />
        </div>
        <div className="flex gap-1 w-full py-10">
          <img className="w-[20%]" src={hotel2} alt="hotelIMage" />
          <img className="w-[20%]" src={hotel3} alt="hotelIMage" />
          <img className="w-[20%]" src={hotel4} alt="hotelIMage" />
          <img className="w-[20%]" src={hotel5} alt="hotelIMage" />
          <img className="w-[20%]" src={hotel6} alt="hotelIMage" />
        </div>
      </div>
    </div>
  );
};

export default TourDEtailSection2Right;
