import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Service from './components/Service'
import Technologies from './components/Technologies'

const App = () => {
  return (
    <div className='max-w-[1231px] mx-auto'>
      <Navbar/>
      <Banner/>
      <About/>
      <Service/>
      <Technologies/>
    </div>
  )
}

export default App
