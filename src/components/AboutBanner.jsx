import React from 'react'
import assets from '../assets/assets'
import { IoVideocamOutline } from 'react-icons/io5'
import { FaHeart } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'

const AboutBanner = () => {
    return (
        <div className='h-[400px] w-full rounded-xl overflow-hidden' style={{
            background: `url(${assets.AboutBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
        }}>
            <div className='w-full px-8 h-full relative'>
                <div className="grid grid-cols-2 h-full">
                    <div className="flex items-center">
                        <div className='max-w-[540px] px-10'>
                            <h6 className='flex items-center text-[17px] font-medium text-[#303334]'>
                                <span className='inline-block h-0.5 w-12 bg-[#18bcc7] mr-4'></span>
                                Modern treatment centre
                            </h6>
                            <h2 className='text-[#303334] font-extrabold text-6xl tracking-tighter pt-2 mb-6'>About clinic</h2>
                        </div>
                    </div>
                    <div className='absolute top-1/3 left-[45%] w-20 h-20 rounded-full bg-[#f45959] flex items-center justify-center animate-pulse'>
                        <FaHeart fontSize={34} color='white' />
                    </div>
                    <div>
                        <div className="absolute top-1/2 right-1/12 bg-white/70 flex gap-2 items-center py-6 px-4 rounded-lg animate-bounce">
                            <div className='max-w-10'>
                                <MdLocationOn />
                            </div>
                            <div>
                                <span className='font-bold text-[17px] text-[#303334]'>Hospital near me</span>
                                <p className='text-[#848587] font-normal text-[15px] '>Professional doctor</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default AboutBanner
