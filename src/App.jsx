import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SubFooter from './components/SubFooter'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import AboutPage from './pages/About/AboutPage'

const App = () => {
  return (
    <div className='max-w-[1231px] mx-auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
      </Routes>
      <Footer />
      <SubFooter />
    </div>
  )
}

export default App
