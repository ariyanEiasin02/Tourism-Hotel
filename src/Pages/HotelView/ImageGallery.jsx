import React from "react";
import Slider from "react-slick";

function ImageGallery() {
  const settings = {
    
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    
  };
  return (
    
    <div className="w-full px-4 mb-20 slider-container md:px-8 lg:px-16">
      <img className="mb-5" src="hotel-big-1.png" alt="" />
      <Slider {...settings}>
        {/* main-image */}
        <div className="w-10 h-auto ">
          <img src="small-1.png" alt="" />
        </div>
        {/* slider-image */}
        <div className="w-5 h-auto md:w-8 ">
        <img className="mr-4 md:mr-6" src="small-2.png" alt="" />
        </div>
        <div className="w-5 h-auto md:w-8 ">
        <img className="mr-4 md:mr-6" src="small-3.png" alt="" />
        </div>
        <div className="w-5 h-auto md:w-8 ">
        <img className="mr-4 md:mr-6" src="small-4.png" alt="" />
        </div>
        <div className="w-5 h-auto md:w-8 ">
        <img className="mr-4 md:mr-6" src="small-5.png" alt="" />
        </div>
        <div className="w-5 h-auto md:w-8 ">
        <img className="mr-4 md:mr-6" src="small-6.png" alt="" />
        </div>
       
    
        
      </Slider>
    </div>
  );
}

export default ImageGallery;