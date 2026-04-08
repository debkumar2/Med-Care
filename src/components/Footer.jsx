import React from 'react'
import assets from '../assets/assets'
import { FaDribbble, FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='py-[35px] bg-[#303334] rounded-lg flex justify-between items-center px-12'>
      <div className="max-w-[192px]">
        <img src={assets.footerLogo} alt="" className='w-full'/>
      </div>
      <ul className='flex gap-4'>
        <li><a href="" className='text-base font-semibold text-[#ffff] transition-all duration-300 hover:text-[#18bcc7] py-2.5 px-4'>Home</a></li>
        <li><a href="" className='text-base font-semibold text-[#ffff] transition-all duration-300 hover:text-[#18bcc7] py-2.5 px-4'>About</a></li>
        <li><a href="" className='text-base font-semibold text-[#ffff] transition-all duration-300 hover:text-[#18bcc7] py-2.5 px-4'>Treatments</a></li>
        <li><a href="" className='text-base font-semibold text-[#ffff] transition-all duration-300 hover:text-[#18bcc7] py-2.5 px-4'>Doctors</a></li>
        <li><a href="" className='text-base font-semibold text-[#ffff] transition-all duration-300 hover:text-[#18bcc7] py-2.5 px-4'>Timetable</a></li>
        <li><a href="" className='text-base font-semibold text-[#ffff] transition-all duration-300 hover:text-[#18bcc7] py-2.5 px-4'>Contact</a></li>
      </ul>
      <div className="flex gap-4">
        <FaFacebookF color='#fff' fontSize='18px'/>
        <FaInstagram color='#fff' fontSize='18px'/>
        <FaXTwitter color='#fff' fontSize='18px'/>
        <FaDribbble color='#fff' fontSize='18px'/>
      </div>
    </div>
  )
}

export default Footer
