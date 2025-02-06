import React from 'react'
import SearchBar from './SearchBar'
// import SearchFilters from './SearchFilters'
import HotelBookingCard from './HotelBookingCard'

function HotelList() {
  return (
    <div>
      <SearchBar/>
      {/* <SearchFilters/> */}
      <HotelBookingCard/>
    </div>
  )
}

export default HotelList
