import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Service from './components/Service'

const App = () => {
  return (
    <div className='max-w-[1231px] mx-auto'>
      <Navbar/>
      <Banner/>
      <About/>
      <Service/>
    </div>
  )
}

export default App
