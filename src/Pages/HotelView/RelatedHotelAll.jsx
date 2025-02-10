import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import RelatedHotel from './RelatedHotel';
import Slider from "react-slick";

function RelatedHotelAll() {
  
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 3
      };
  return (
    <section>
    <div className='container '>
  <div className=''>
  <h3 className='text-xl font-semibold text-[#21253D] border-b-2 w-fit pb-1 border-[#8B3EEA] text-center mx-auto md:text-3xl mb-10'>Related hotels</h3>
  
  <div className="slider-container">
      <Slider {...settings}>
        <div>
        <RelatedHotel img= "hotel1.png" name= "Hotel Deluxe" location= "kualalampur"/>
        </div>
        <div>
        <RelatedHotel img= "hotel2.png" name= "Hotel Kualalampur" location= "Beach View"/>
        </div>
        <div>
        <RelatedHotel img= "hotel3.png" name= "Kantoa Hotle , Thailand" location= "Thailand"/>
        </div>
        <div>
        <RelatedHotel img= "hotel4.png" name= "Zefi Resort and Spa" location= "Long Island"/>
        </div>
        <div>
        <RelatedHotel img= "hotel7.png" name= "Hotel Paradaise International" location= "New Beach"/>
        </div>
        <div>
        <RelatedHotel img= "hotel6.png" name= "Thailand Grand Suit" location= "Indonesia"/>
        </div>
      
      </Slider>
    </div>
  



  
  </div>
    </div>
  
</section>
  )
}

export default RelatedHotelAll
