import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { TbAirConditioning } from "react-icons/tb";
import { IoTv } from "react-icons/io5";
import { IoIosFitness } from "react-icons/io";
import { MdNetworkWifi } from "react-icons/md";
import hotel1 from "./Picture/hotel3.png";
import hotel2 from "./Picture/hotel1.png";
import hotel3 from "./Picture/hotel2.png";

import hotel4 from "./Picture/hotel5.png";

import hotel5 from "./Picture/destination6.png";
import hotel6 from "./Picture/hotel7.png";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { SlCalender } from "react-icons/sl";

const TourDetailSection2Left = () => {
  const [date, setDate] = useState(new Date());
  const [showcal, setShowCal] = useState(true);
  const [showcal2, setShowCal2] = useState(false);

  const [selectRoom, setSelectRoom] = useState(true);

  const showcalculator = () => {
    setShowCal(!showcal);
  };
  const showcalculator2 = () => {
    setShowCal2(!showcal2);
  };

  return (
    <div className="mx-3 md:mx-0">
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
      <div className="">
        <div>
          <img
            className="w-[100%] h-[240px] md:h-[340px]"
            src={hotel1}
            alt="hotelIMage"
          />
        </div>
        <div className="flex gap-1 w-[95%] md:w-[100%] py-10">
          <img className="w-[20%]" src={hotel2} alt="hotelIMage" />
          <img className="w-[20%]" src={hotel3} alt="hotelIMage" />
          <img className="w-[20%]" src={hotel4} alt="hotelIMage" />
          <img className="w-[20%]" src={hotel5} alt="hotelIMage" />
          <img className="w-[20%]" src={hotel6} alt="hotelIMage" />
        </div>
      </div>
      <div className="px-5 py-4 shadow-soft rounded-lg my-5">
        <h2 className=" border-b-2 pb-1 w-fit text-2xl  font-serif">
          Overview
        </h2>
        <p className="opacity-60 text-[16px]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est.
          <br />
          <br />
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod.
        </p>
        <ul className=" list-disc pl-5 opacity-60 text-[16px] pt-5">
          <li>Buffet breakfast as per the Itinerary</li>
          <li>Visit eight villages showcasing Polynesian culture</li>
          <li>Cultural </li>
          <li>All toll tax, parking, fuel, and driver allowances</li>
          <li>
            Comfortable and hygienic vehicle (SUV/Sedan) for sightseeing on all
            days as per the itinerary.
          </li>
        </ul>
      </div>
      <div className="px-5 my-6 py-5 shadow-soft rounded-lg">
        <h2 className=" border-b-[1px] border-purple-500 pb-1 w-fit text-2xl  font-serif">
          Select your room
        </h2>
        <div>
          <div className="flex flex-col md:flex-row items-center md:justify-center gap-2 py-5">
            <button
              onClick={() => setSelectRoom(true)}
              className=" w-40 md:w-[38%] py-2 rounded-md bg-purple-100"
            >
              Book
            </button>
            <button
              onClick={() => setSelectRoom(false)}
              className="w-40 md:w-[38%] py-2 rounded-md bg-purple-100"
            >
              Enquiry
            </button>
          </div>

          {selectRoom ? (
            <div className="flex flex-col gap-4 md:flex-row w-full">
              <div className="px-5 py-4 shadow-soft rounded-lg bg-purple-100 md:w-[60%]">
                <div className="flex justify-between ">
                  <p>Check In date</p>
                  <p>Check Out date</p>
                </div>
                <div className="flex justify-between">
                  <div>
                    <div className="flex items-center gap-2 font-semibold">
                      <p className="mt-2">{date.toDateString()}</p>
                      <p
                        onClick={() => {
                          showcalculator();
                          setShowCal2(!showcal2);
                        }}
                        className="flex pt-2"
                      >
                        <SlCalender />
                      </p>
                    </div>
                    <div
                      className={`p-4 absolute w-[70%] h-[290px] ${
                        showcal ? "hidden" : "block"
                      }`}
                    >
                      <Calendar onChange={setDate} value={date} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 font-semibold">
                      <p className="mt-2">{date.toDateString()}</p>
                      <p
                        onClick={() => {
                          showcalculator2();
                          setShowCal(!showcal);
                        }}
                        className="flex pt-2"
                      >
                        <SlCalender />
                      </p>
                    </div>
                    <div
                      className={`p-4 left-8 md:right-2 absolute w-[70%] h-[290px] ${
                        showcal2 ? "block" : " hidden"
                      }`}
                    >
                      <Calendar onChange={setDate} value={date} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-5 py-4 shadow-soft rounded-lg bg-purple-100 w-full md:w-[60%]">
                <p className=" opacity-70">Guests</p>
                <p className="font-semibold text-xl ">1 Guests</p>
                <p className="text-xs">Adult</p>
              </div>
              <div>
                <button className="bg-purple-700 px-8 py-2 rounded-xl text-white flex  justify-center hover:bg-black ease-in-out duration-700">
                  Check Avilability
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex flex-col gap-3 md:flex-row md:justify-between">
                <input
                  className=" outline-none px-4 py-2 bg-indigo-100 rounded-lg md:w-[48%]"
                  type="text"
                  placeholder="Enter Full Name"
                />
                <input
                  className=" outline-none px-4 py-2 bg-indigo-100 rounded-lg md:w-[48%]"
                  type="text"
                  placeholder="Enter Email address"
                />
              </div>
              <textarea
                className=" outline-none px-3 py-1 bg-indigo-100 rounded-lg w-full my-3 h-40"
                placeholder="Write your Comment Here...."
              ></textarea>
            </div>
          )}
        </div>
        <div></div>
      </div>
      <div className="px-5 py-5  shadow-soft rounded-lg my-7">
        <div>
          <h2 className=" border-b-2 pb-1 w-fit text-2xl  font-serif">
            Included/Excluded
          </h2>
          <p className="opacity-60 text-[16px]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.
            <br />
            <br />
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod.
          </p>
          <ul className=" list-disc pl-5 opacity-60 text-[16px] pt-5">
            <li>Buffet breakfast as per the Itinerary</li>
            <li>Visit eight villages showcasing Polynesian culture</li>
            <li>Cultural </li>
            <li>All toll tax, parking, fuel, and driver allowances</li>
            <li>
              Comfortable and hygienic vehicle (SUV/Sedan) for sightseeing on
              all days as per the itinerary.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TourDetailSection2Left;
