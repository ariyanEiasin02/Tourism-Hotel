import React from 'react'
import TopBanner from './TopBanner'
import HotelCastle from './HotelCastle'
import ImageGallery from './ImageGallery';
import OverView from './OverView';
import HotelCard from './HotelCard';
import Included from './Included';
import HotelLocation from './HotelLocation';
import AllReview from './AllReview';
import RelatedHotelAll from './RelatedHotelAll';
import Newsletter from './Newsletter';
import PriceCard from './PriceCard';
import WhyChooseUs from './WhyChooseUs';
import WriteReview from './WriteReview';

// import SelectRoom from './SelectRoom';

function HotelView() {
  return (
    <div className='w-[100%]'> 
      <TopBanner/>

   <div className='flex flex-col md:flex-row'>
    {/* left-part */}
   <div className='w-full md:w-[65%]'>
      <HotelCastle/>
      <ImageGallery/>
      <OverView/>
      {/* <SelectRoom/> */}
      <HotelCard/>
      <Included/>
        <HotelLocation />
      </div>
      {/* right-part */}
      <div>
        <PriceCard/>
        <WhyChooseUs/>
      </div>
   </div>
    
        <WriteReview/>
        <AllReview/>
        <RelatedHotelAll/>
        <Newsletter/>
   
    </div>
  )
}

export default HotelView
