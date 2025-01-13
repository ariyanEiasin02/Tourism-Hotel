import React from 'react';
import Slider from 'react-slick';
import popular1 from '../../assets/popular1.jpg'
import popular2 from '../../assets/popular2.jpg'
import popular3 from '../../assets/popular3.jpg'
import popular4 from '../../assets/popular4.jpg'
import popular5 from '../../assets/popular5.jpg'
import popular6 from '../../assets/popular6.jpg'
import { IoIosArrowBack, IoIosArrowForward,IoMdTime,IoIosStar } from "react-icons/io";
import { MdArrowForward } from "react-icons/md";

const TourPackage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    prevArrow: <PreviousArrow />,  
    nextArrow: <NextArrow />,
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const TourItem = [
    {
      tourImages : popular1,
      tourTitle :"Stay Smart at Boss Suites",
      tourPrice: 980,
      tourDay : 7,
    },
    {
      tourImages : popular2,
      tourTitle :"Comfort Meets Style",
      tourPrice: 750,
      tourDay : 5,
    },
    {
      tourImages : popular3,
      tourTitle :"Relax in Nana’s Heart",
      tourPrice: 1250,
      tourDay : 10,
    },
    {
      tourImages : popular4,
      tourTitle :"Luxury You Deserve",
      tourPrice: 550,
      tourDay : 3,
    },
    {
      tourImages : popular5,
      tourTitle :"Your Home in Bangkok",
      tourPrice: 999,
      tourDay : 7,
    },
    {
      tourImages : popular6,
      tourTitle :"Discover Boss Suites",
      tourPrice: 850,
      tourDay : 5,
    },
  ]
  return (
    <div className='bg-[#E9F7FA] py-8 relative'>
      <div className="max-w-container mx-auto my-8">
        <div className="">
            <div className="px-4 md:px-0">
              <span className='font-playfair font-semibold text-xl text-[#FCC703] py-2'>Top Pick</span>
              <h2 className='py-2 font-playfair font-bold md:text-5xl text-2xl text-[#333]'>Most  <span className='text-[#199E9D]'>Tour Packages</span></h2>
              <p className='font-playfair font-light text-[#333] md:text-base text-sm md:py-2 md:w-[45%] w-full'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
        <div className="mt-6">
        <Slider {...settings} className='bg-[#E9F7FA]'>
          {
            TourItem.map((popular)=>(
              <div className="w-[24%] p-2 md:mt-0 mt-12">
            <div className="group bg-white relative shadow rounded-lg after:content-[''] after:w-0 after:h-[3px] after:bg-[#199E9D] after:absolute after:bottom-0 after:left-0 after:duration-300 after:hover:w-full">
            <div className="relative overflow-hidden">
                <img
                  src={popular.tourImages}
                  alt="Piazza Castello"
                  className="w-full h-64 object-cover duration-700 ease-in-out group-hover:scale-125"
                />
                <div className="absolute bottom-0 left-0 h-0 w-full bg-overlay opacity-30 group-hover:h-full duration-700"></div>
                </div>
                <div className="p-4">
                  <div className="">
                    <div className="">
                      <h3 className="text-xl font-semibold">{popular.tourTitle}</h3>
                      <div className="flex mt-1 gap-x-2 items-center">
                        <div className="flex gap-x-1">
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                        </div>
                        <div className="">
                        <p className='font-playfair font-medium text-base text-[#333]'>(4.8 rating)</p>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <h2 className='font-playfair font-medium text-xl text-[#333]'>${popular.tourPrice}/<span className='text-sm'>Person</span></h2>
                    </div>
                    <div className="mt-5 flex justify-between items-center">
                        <div className="flex items-center">
                            <i className='text-base text-[#333]'><IoMdTime/></i>
                            <span className='ml-1 font-playfair font-medium text-base text-[#333]'>{popular.tourDay} Days</span>
                        </div>
                        <div className="">
                        <button className='rounded-full border border-[#FF833F] w-full py-2 px-7 font-poppins font-medium text-[#333] text-base'>Book Now <MdArrowForward className='inline-block' /></button>
                        </div>
                    </div>
                  </div>
                </div>
                </div>
            </div>
            ))
          }
        </Slider>
          </div>
      </div>
    </div>
  );
};


const PreviousArrow = ({ onClick }) => {
  return (
    <button onClick={onClick} className='absolute md:-top-28 -top-4 right-20 py-4 px-4 rounded-md bg-white font-poppins font-bold text-2xl text-black z-10'><IoIosArrowBack/></button>
  );
};

const NextArrow = ({onClick }) => {
  return (
    <button onClick={onClick} className='absolute md:-top-28 -top-4 right-0 py-4 px-4 rounded-md bg-white font-poppins font-bold text-2xl text-black'><IoIosArrowForward/></button>
  );
};
export default TourPackage;
