import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner'
import TourPackage from '../../Components/TourPackage/TourPackage'
import Tours from '../../Components/Tours/Tours'
import Header from '../../Components/Header/Header'
import PopularTour from '../../Components/PopularTour/PopularTour'
import ExploreHotes from '../../Components/ExploreHotes/ExploreHotes'

const Home = () => {
    return (
        <>
            <Header/>
            <Navbar />
            <Banner />
            <TourPackage />
            <PopularTour/>
            <ExploreHotes/>
            <Tours />
        </>
    )
}

export default Home