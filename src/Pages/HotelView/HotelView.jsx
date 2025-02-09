import React from 'react'
import TopBanner from './TopBanner'
import HotelCastle from './HotelCastle'
import ImageGallery from './ImageGallery';
import OverView from './OverView';

function HotelView() {
  return (
    <div>
      <TopBanner/>
      <HotelCastle/>
      <ImageGallery/>
      <OverView/>
    </div>
  )
}

export default HotelView
