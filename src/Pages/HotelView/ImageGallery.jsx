import React from "react";
import Slider from "react-slick";

function ImageGallery() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
   
    
  };
  return (
    
    <div className="w-full slider-container md:w-[65%] px-4 md:px-8 lg:px-10 mb-10 mt-10">
         <img className='mb-5 rounded-lg' src="hotel-big-1.png" alt="" />
      <Slider {...settings}>
        
        <div className="w-5 h-auto mr-3">
          <img className="pr-3" src="small-1.png" alt="" />
        </div>
        <div className="w-5 h-auto">
        <img className="pr-3" src="small-2.png" alt="" />
        </div>
        <div className="w-5 h-auto">
        <img className="pr-3" src="small-3.png" alt="" />
        </div>
        <div className="w-5 h-auto">
        <img className="pr-3" src="small-4.png" alt="" />
        </div>
        <div className="w-5 h-auto">
        <img className="pr-3" src="small-5.png" alt="" />
        </div>
        <div className="w-5 h-auto">
        <img className="pr-3" src="small-6.png" alt="" />
        </div>
       
    
        
      </Slider>
    </div>
  );
}

export default ImageGallery;