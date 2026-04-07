import React from 'react'
import assets from '../assets/assets'
import ButtonComp from './ButtonComp'
import { FaRegCalendar } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-between bg-white py-8'>
      <a href="" className='max-w-[180px]'>
        <img src={assets.brandLogo} alt="" className='w-full h-full'/>
      </a>
      <ul className='flex gap-4'>
        <li><a href="" className='text-lg font-bold text-[#303334] py-2.5 px-4'>Home</a></li>
        <li><a href="" className='text-lg font-bold text-[#303334]  py-2.5 px-4'>About</a></li>
        <li><a href="" className='text-lg font-bold text-[#303334]'>Treatments</a></li>
        <li><a href="" className='text-lg font-bold text-[#303334]  py-2.5 px-4'>Doctors</a></li>
        <li><a href="" className='text-lg font-bold text-[#303334]  py-2.5 px-4'>Timetable</a></li>
        <li><a href="" className='text-lg font-bold text-[#303334]  py-2.5 px-4'>Contact</a></li>
      </ul>
      <div>
        <ButtonComp icon={<FaRegCalendar />} primary={true} text='Book Online'/>
      </div>
    </div>
  )
}

export default Navbar
