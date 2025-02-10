import React from 'react'
import TopBanner from './TopBanner'
import HotelCastle from './HotelCastle'
import ImageGallery from './ImageGallery';
import OverView from './OverView';
import HotelCard from './HotelCard';
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
   
    </div>
  )
}

export default HotelView
