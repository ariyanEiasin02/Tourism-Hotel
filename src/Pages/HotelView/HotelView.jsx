import React from 'react'
import TopBanner from './TopBanner'
import HotelCastle from './HotelCastle'
import ImageGallery from './ImageGallery';
import OverView from './OverView';
import HotelCard from './HotelCard';
import Included from './Included';
import Location from './Location';
import Review from './Review';

// import SelectRoom from './SelectRoom';

function HotelView() {
  return (
    <div>
      <TopBanner/>
      <HotelCastle/>
      <ImageGallery/>
      <OverView/>
      {/* <SelectRoom/> */}
      <HotelCard/>
      <Included/>
        <Location />
        <Review/>
   
    </div>
  )
}

export default HotelView
