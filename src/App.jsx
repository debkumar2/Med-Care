import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Service from './components/Service'
import Technologies from './components/Technologies'
import FeatureText from './components/FeatureText'
import DoctorsList from './components/DoctorsList'
import Appointment from './components/Appoinment'

const App = () => {
  return (
    <div className='max-w-[1231px] mx-auto'>
      <Navbar/>
      <Banner/>
      <About/>
      <Service/>
      <Technologies/>
      <FeatureText/>
      <DoctorsList/>
      <Appointment/>
    </div>
  )
}

export default App
