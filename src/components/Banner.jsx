import React from 'react'
import assets from '../assets/assets'
import ButtonComp from './ButtonComp'
import { IoVideocamOutline } from 'react-icons/io5'
import { FaHeart } from 'react-icons/fa6'
import { IoIosInformationCircleOutline } from 'react-icons/io'
// React Swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper core modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
    return (
        <div className='h-[635px] w-full rounded-xl' style={{
            background: `url(${assets.backgroundBg})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
        }}>
            <div className='flex justify-center w-full px-8 h-full relative overflow-hidden'>
                <div className="grid grid-cols-2 h-full">
                    <div className="pt-20">
                        <span className='text-lg font-normal text-[#18bcc7]  inline-block mb-3.5'>Tell us your problem!</span>
                        <div className='max-w-[540px]'>
                            <h1 className='text-[70px] font-black text-[#303334] tracking-tighter leading-18 mb-8'>Most trusted health partner for your life.</h1>
                            <div className='flex gap-4'>
                                <ButtonComp primary={false} text='Find a doctor' />
                                <ButtonComp primary={true} text='Video Call' icon={<IoVideocamOutline />
                                } />
                            </div>
                        </div>
                    </div>
                    <div className="h-full relative">
                        <img src={assets.bannerModel} alt="" className='w-full h-full' />
                        <div className='absolute top-1/3 left-1/12 w-20 h-20 rounded-full bg-[#f45959] flex items-center justify-center animate-pulse'>
                            <FaHeart fontSize={34} color='white' />
                        </div>
                        <div>
                            <div className="absolute top-1/2 right-1/12 bg-white/70 flex gap-2 items-center py-6 px-4 rounded-lg animate-bounce">
                                <div className='max-w-10'>
                                    <img src={assets.verifiedStamp} alt="" className='w-full' />
                                </div>
                                <div>
                                    <span className='font-bold text-[17px] text-[#303334]'>Verified doctors</span>
                                    <p className='text-[#848587] font-normal text-[15px] '>Professional doctor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="absolute w-full bottom-0 left-0 bg-[#18bcc7] py-8 px-32">
                    <div className='flex gap-2 items-center border-r border-white w-fit pr-8'>
                        <IoIosInformationCircleOutline color='white' fontSize={28} />
                        <p className='font-medium text-lg text-white'>Covid-19 information</p>
                    </div>
                    <div className=''>
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            autoplay={{
                                delay: 1200,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                        >
                            <SwiperSlide>
                                <p className='font-medium text-white text-lg'>Get vaccinated as soon as it's your turn and follow guidance on vaccination.</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p className='font-medium text-white text-lg'>Clean your hands frequently with alcohol-based hand soap and water.</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p className='font-medium text-white text-lg'>Get vaccinated as soon as it's your turn and follow guidance on vaccination.</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p className='font-medium text-white text-lg'>Clean your hands frequently with alcohol-based hand soap and water.</p>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
