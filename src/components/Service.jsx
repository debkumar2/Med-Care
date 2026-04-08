import React from 'react'
import SubHeading from './SubHeading'
import { IoShieldOutline } from 'react-icons/io5'
import ButtonComp from './ButtonComp'
import assets, { serviceSlide } from '../assets/assets'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { RiScissors2Line } from 'react-icons/ri'
import { FaHeartPulse, FaStar } from 'react-icons/fa6'
import { LuStethoscope } from 'react-icons/lu'
import { MdOutlineBloodtype } from 'react-icons/md'
const Service = () => {
    const iconMap = {
        scissors: <RiScissors2Line fontSize={40} />,
        heart: <FaHeartPulse fontSize={40} />,
        stethoscope: <LuStethoscope fontSize={40} />,
        blood: <MdOutlineBloodtype fontSize={40} />,
    }
    return (
        <div className='py-[90px] px-12 relative bg-[#edf9fa] relative rounded-xl'>
            <div className="grid grid-cols-6 grid-rows-1 gap-12">
                <div className='col-span-2'>
                    <SubHeading subhead='Our advance services' icon={<IoShieldOutline color='#18bcc7' fontSize='24px' />} head='Our clinical departments.' />
                    <p className='text-[#848587] text-lg font-normal mb-7'>Lorem ipsum is simply dummy text printing typesetting industry's standard.</p>
                    <ButtonComp primary={false} text='All treatment' />
                </div>
                <div className="col-span-4">
                    <div className="pl-8 w-full h-full">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={24}
                            slidesPerView={2}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                        >
                            {serviceSlide.map((service, index) => (
                                <SwiperSlide key={index}>
                                    <div className="group bg-white rounded-xl px-8 flex flex-col gap-4 rounded-lg shadow-lg my-2 mx-1 hover:bg-[#18bcc7] transition-all duration-300 py-12">
                                        <div className="w-[100px] h-[100px] rounded-full bg-[#edf9fa] flex items-center justify-center text-[#18bcc7] text-3xl">
                                            {iconMap[service.icon]}
                                        </div>
                                        <h3 className="text-[#303334] text-[19px] font-extrabold group-hover:text-white">{service.name}</h3>
                                        <p className="text-[#848587] text-base group-hover:text-white">Lorem ipsum is simply dummy text of simply printing typesetting.</p>
                                        <div className="flex items-center gap-2 text-[#303334] font-medium mt-2 cursor-pointer hover:text-[#18bcc7] transition-colors">
                                            <AiOutlinePlusCircle fontSize={28} className='group-hover:text-white' />
                                            <span className='text-lg font-semibold group-hover:text-white'>Know more</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-10">
                <div className="flex justify-center items-center gap-3">
                    <span className='text-[55px] text-[#303334] font-extrabold'>4.98</span>
                    <div className=''>
                        <div className="flex">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <h5 className='text-lg font-medium'>2,488 rating.</h5>
                    </div>
                </div>
               <div className="flex justify-center items-center gap-3">
                    <span className='text-[55px] text-[#303334] font-extrabold'>98%</span>
                    <div>
                        <h5 className='text-lg font-medium'>Genuine positive
feedback.</h5>
                    </div>
                </div>
               <div className="flex justify-center items-center gap-3">
                     <span className='text-[55px] text-[#303334] font-extrabold'>200+</span>
                    <div>
                        <h5 className='text-lg font-medium'>Daily patients
                            consulted.</h5>
                    </div>
                </div>
            </div>
            <div className='absolute -top-20 -left-12 lg:max-w-[350px]'>
                <img src={assets.svgPatternOne} alt="" className='w-full opacity-10' />
            </div>
        </div>
    )
}

export default Service
