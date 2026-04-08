import React from 'react'
import Banner from '../../components/Banner'
import About from '../../components/About'
import Service from '../../components/Service'
import Technologies from '../../components/Technologies'
import FeatureText from '../../components/FeatureText'
import DoctorsList from '../../components/DoctorsList'
import Appointment from '../../components/Appoinment'

const Home = () => {
    return (
        <>
            <Banner />
            <About />
            <Service />
            <Technologies />
            <FeatureText />
            <DoctorsList />
            <Appointment />
        </>
    )
}

export default Home
