import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner'
import TourPackage from '../../Components/TourPackage/TourPackage'
import Tours from '../../Components/Tours/Tours'
import Header from '../../Components/Header/Header'
import PopularTour from '../../Components/PopularTour/PopularTour'

const Home = () => {
    return (
        <>
            <Header/>
            <Navbar />
            <Banner />
            <TourPackage />
            <PopularTour/>
            <Tours />
        </>
    )
}

export default Home