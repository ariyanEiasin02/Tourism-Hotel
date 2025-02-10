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
        <div className='flex items-center gap-3 px-3 mt-8 '>
            <img className='w-12 h-12' src="small-1.png" alt="" />
            <img className='w-12 h-12' src="small-2.png" alt="" />
            <img className='w-12 h-12' src="small-3.png" alt="" />
            <img className='w-12 h-12' src="small-4.png" alt="" />
            <p className='text-[#8B3EEA] font-bold text-xl'>5+</p>
        </div>
        </div>
    
        <div>
        <SingleReview image= "review2.png" name="Chester dals"/>

        </div>
        <div>
        <SingleReview image= "review3.png" name="Manresh Chandra"/>
        <div className='flex items-center gap-3 px-3 mt-8'>
            <img className='w-12 h-12' src="small-1.png" alt="" />
            <img className='w-12 h-12' src="small-2.png" alt="" />
            <img className='w-12 h-12' src="small-3.png" alt="" />
            <p className='text-[#8B3EEA] font-bold text-xl'>15+</p>
        </div>
        </div>
        <div>
        <SingleReview image= "review2.png" name="Chester dals"/>

        </div>
        <div>
        <SingleReview image= "review3.png" name="Manresh Chandra"/>
        <div className='flex items-center gap-3 px-3 mt-8 '>
            <img className='w-12 h-12' src="small-1.png" alt="" />
            <img className='w-12 h-12' src="small-2.png" alt="" />
            <p className='text-[#8B3EEA] font-bold text-xl'>19+</p>
        </div>
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
