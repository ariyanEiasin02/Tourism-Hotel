import React from 'react'
import BookBanner from '../../Components/BookBanner/BookBanner'
import BookNavbar from '../../Components/BookNavabr/BookNavbar'
import BookCard from '../../Components/BookCard/BookCard'
import Facilities from '../../Components/Facilities/Facilities'
import HotelDetails from '../../Components/HotelDetails/HotelDetails'
const BookNow = () => {
  return (
    <>
        <BookBanner/>
        <BookNavbar/>
        {/* <BookCard/> */}
        <HotelDetails/>
        <Facilities/>
    </>
  )
}

export default BookNow