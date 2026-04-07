import React from 'react'
import assets from '../assets/assets'
import SubHeading from './SubHeading'
import { BsLayoutTextSidebarReverse } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa6'
import ButtonComp from './ButtonComp'
import { CiCalendar } from 'react-icons/ci'

const About = () => {
    return (
        <div className='py-[90px] px-12 relative'>
            <div className="grid grid-cols-2 gap-8">
                <div className="relative">
                    <div className="lg:max-w-[405px] rounded-lg overflow-hidden">
                        <img src={assets.abooutOne} alt="" className='w-full' />
                    </div>
                    <div className="lg:max-w-[310px] absolute bottom-0 left-2/5 rounded-lg overflow-hidden">
                        <img src={assets.abooutTwo} alt="" className='w-full' />
                    </div>
                    <div className="absolute top-1/2 -left-1/12 w-[130px] h-[130px] z-10 p-2">
                        <svg viewBox="0 0 140 140" className="w-full h-full animate-spin-slow">
                            <defs>
                                <path
                                    id="circlePath"
                                    d="M 70,70 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                                />
                            </defs>
                            <circle cx="70" cy="70" r="65" fill="white" opacity="0.9" />
                            <text fill="#18bcc7" fontSize="14" fontWeight="600" letterSpacing="2.5" color='#303334'>
                                <textPath href="#circlePath">
                                    MOST TRUSTED HEALTH CENTRE•
                                </textPath>
                            </text>
                        </svg>

                        {/* Center image - outside SVG so it doesn't rotate */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <img
                                src={assets.doctorLogo}
                                alt="Doctor Logo"
                                className="w-[45px] h-[45px] object-contain"
                            />
                        </div>
                    </div>
                </div>
                <div className='ml-20 lg:max-w-[75%]'>
                    <SubHeading head='Welcome to our medcare hospital.' icon={<BsLayoutTextSidebarReverse fontSize={22} color='#18bcc7' />} subhead='About medcare hospital' />
                    <p className='text-[#848587] text-lg font-normal'>We value each and every human life placed in our hands and constantly work towards meeting the expectations of our customers and stake holders.</p>
                    <div className='flex gap-6 py-10'>
                        <div className="flex gap-4 items-center">
                            <span className='font-extrabold text-6xl text-[#303334]'>722+</span>
                            <div className='bg-[#fd961e] px-2 py-2 rounded-lg flex h-fit gap-1'>
                                <FaStar color='white' />
                                <FaStar color='white' />
                                <FaStar color='white' />
                                <FaStar color='white' />
                            </div>
                        </div>
                        <p className='font-semibold text-[17px] text-[#303334] pl-6 border-l-2 border-l-[#303334]'>5 star reviews from our satisfied people.</p>
                    </div>
                    <div className='flex gap-4'>
                        <ButtonComp text='About Hostipal' primary={false} />
                        <ButtonComp text='Check Timetable' primary={true} icon={<CiCalendar fontSize={18} />} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
