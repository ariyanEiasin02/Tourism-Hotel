import React from 'react'
import Slider from "react-slick";
import SingleReview from './SingleReview';

function AllReview() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
  return (
    <section className='my-12'>
        <div className='container px-4 md:px-8 '>
        <h3 className='text-xl font-semibold text-[#21253D] border-b-2 w-fit pb-1 border-[#8B3EEA] mb-12'>All review</h3>
       
       
      <Slider {...settings}>
       
        <div>
        <SingleReview image= "review1.png" name="Michel falak"/>
        </div>
    
        <div>
        <SingleReview image= "review2.png" name="Chester dals"/>

        </div>
        <div>
        <SingleReview image= "review3.png" name="Manresh Chandra"/>

        </div>
        <div>
        <SingleReview image= "review2.png" name="Chester dals"/>

        </div>
        <div>
        <SingleReview image= "review3.png" name="Manresh Chandra"/>
        </div>
        <div>
        <SingleReview image= "review1.png" name="Michel falak"/>
        </div>
        <div>
        <SingleReview image= "review3.png" name="Manresh Chandra"/>
        </div>
      
       
    
       
      </Slider>

 


        </div>
      
    </section>
  )
}

export default AllReview
