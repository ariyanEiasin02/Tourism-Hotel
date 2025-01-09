import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner'
import PopularTour from '../../Components/PopularTour/PopularTour'
import Tours from '../../Components/Tours/Tours'
import Header from '../../Components/Header/Header'

const Home = () => {
    return (
        <>
            <Header/>
            <Navbar />
            <Banner />
            <PopularTour />
            <Tours />
        </>
    )
}

export default Home