import React from 'react'
import BookBanner from '../../Components/BookBanner/BookBanner'
import BookNavbar from '../../Components/BookNavabr/BookNavbar'
import Facilities from '../../Components/Facilities/Facilities'
import HotelDetails from '../../Components/HotelDetails/HotelDetails'
const BookNow = () => {
  return (
    <>
        <BookBanner/>
        <BookNavbar/>
        <HotelDetails/>
        <Facilities/>
    </>
  )
}

export default BookNow