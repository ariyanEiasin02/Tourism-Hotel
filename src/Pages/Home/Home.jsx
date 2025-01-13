import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner'
import TourPackage from '../../Components/TourPackage/TourPackage'
import Header from '../../Components/Header/Header'
import PopularTour from '../../Components/PopularTour/PopularTour'
import ExploreHotes from '../../Components/ExploreHotes/ExploreHotes'
import ToursGallery from '../../Components/ToursGallery/ToursGallery'
import ActivitiesTab from '../../Components/ActivitiesTab/ActivitiesTab'

const Home = () => {
    return (
        <>
            <Header/>
            <Navbar />
            <Banner />
            <TourPackage />
            <PopularTour/>
            <ExploreHotes/>
            <ActivitiesTab/>
            <ToursGallery />
        </>
    )
}

export default Home