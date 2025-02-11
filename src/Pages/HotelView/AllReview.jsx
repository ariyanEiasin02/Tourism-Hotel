import React from 'react'
import Slider from "react-slick";
import SingleReview from './SingleReview';
import SmallImageGallery from './SmallImageGallery';

function AllReview() {

    const settings = {
      
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
      
      ]
      };
  return (
    <section className='my-12 '>
        <div className='container px-6 md:px-8'>
        <h3 className='text-xl font-semibold text-[#21253D] border-b-2 w-fit pb-1 border-[#8B3EEA] mb-12 mt-4 '>All review</h3>
       
       
      <Slider {...settings}>
       
        <div className='py-4 border-2 rounded-lg'>
        <SingleReview image= "review1.png" name="Michel falak"/>
        <SmallImageGallery/>
        </div>
    
        <div className='py-4 border-2 rounded-lg'>
        <SingleReview image= "review2.png" name="Chester dals"/>
        <SmallImageGallery number= "5+"/>
        </div>
        <div className='py-4 border-2 rounded-lg'>
        <SingleReview image= "review3.png" name="Manresh Chandra"/>
        <SmallImageGallery number= "10+"/>
        </div>
        <div className='py-4 border-2 rounded-lg'>
        <SingleReview image= "review4.png" name="Jason bruno"/>
      
        </div>
        <div className='py-4 border-2 rounded-lg'>
        <SingleReview image= "review5.png" name="Casper mike"/>
        <SmallImageGallery number= "15+"/>
        </div>
        <div className='py-4 border-2 rounded-lg'>
        <SingleReview image= "review1.png" name="Michel falak"/>
        </div>
        <div className='py-4 border-2 rounded-lg'>
        <SingleReview image= "review2.png" name="Casper mike"/>
        <SmallImageGallery number= "19+"/>
        </div>
      
       
    
       
      </Slider>

 


        </div>
      
    </section>
  )
}

export default AllReview
