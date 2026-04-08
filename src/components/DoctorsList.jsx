import React from 'react'
import assets, { doctorsList } from '../assets/assets'
import { FaDribbble, FaFacebookF, FaInstagram, FaStar } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import TreatmentSmallText from './TreatmentSmallText'

const steps = [
    { num: '01', title: 'Search doctor', desc: 'Lorem sit printing' },
    { num: '02', title: 'Book schedule', desc: 'Lorem sit printing' },
    { num: '03', title: 'Make a payment', desc: 'Lorem sit printing' },
]

const DoctorsList = () => {
    return (
        <div className='bg-[#edf9fa] rounded-xl mt-14 px-12 pt-16 relative'>
            <div className='bg-[#18bcc7] rounded-xl px-12 py-10 flex items-center gap-12 mb-[-64px] absolute -top-[10%]'>
                {/* Left heading */}
                <div className='min-w-[220px] relative'>
                    <h2 className='text-white font-bold text-3xl leading-tight pb-3'>
                        Find the right <br /> doctor for you.
                    </h2>
                    <div className='absolute bottom-0 left-0 max-w-[90px]'>
                        <img src={assets.line} alt="" className='w-full'/>
                    </div>
                </div>
                <div className='flex items-center justify-between gap-8 flex-1'>
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <div className='flex items-center gap-4'>
                                <div className='w-18 h-18 rounded-full border-[0.5px] border-[#ffffff4d] flex items-center justify-center shrink-0'>
                                    <span className='text-white font-bold text-base'>{step.num}</span>
                                </div>
                                <div>
                                    <h6 className='text-white font-bold text-xl'>{step.title}</h6>
                                    <p className='text-white/70 text-base'>{step.desc}</p>
                                </div>
                            </div>
                            {/* {index < steps.length - 1 && (
                                <div className='w-px h-12 bg-white/30 shrink-0' />
                            )} */}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Doctors section */}
            <div className='bg-[#edf9fa] pt-24 rounded-xl'>
                <div className='pb-8 text-center'>
                    <h2 className='text-[#303334] font-extrabold text-6xl tracking-tighter mb-6'>Qualified doctors</h2>
                </div>
                <div className="grid grid-cols-4 gap-6  relative z-20">
                    {doctorsList.map((items, index) => (
                        <div key={index} className='bg-white py-5 px-6 flex items-center flex-col rounded-xl shadow-xl'>
                            <div className='flex justify-center flex-col items-center relative'>
                                <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
                                    <img src={items.imgUrl} alt="" className='w-full h-full object-cover' />
                                </div>
                                <div className="flex gap-1 rounded-2xl items-center px-3 py-1 absolute top-[20%] right-[2%] bg-[#ffea23] text-[#303334]">
                                    <FaStar fontSize='12px' />
                                    <span className='text-sm font-semibold'>{items.rating}</span>
                                </div>
                                <div className='text-center pt-2 pb-8 border-b border-b-[#dee2e6]'>
                                    <h6 className='text-lg mt-4 font-extrabold text-[#303334]'>{items.docName}</h6>
                                    <p className='font-normal text-base text-[#848587] px-2 py-3'>{items.desc}</p>
                                </div>
                            </div>
                            <div className="pt-6 w-full flex gap-8 px-2 justify-center">
                                <FaFacebookF fontSize='18px' color='#303334' />
                                <FaDribbble fontSize='18px' color='#303334' />
                                <FaXTwitter fontSize='18px' color='#303334' />
                                <FaInstagram fontSize='18px' color='#303334' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute -top-6 -right-12 lg:max-w-[350px] z-0">
                <img src={assets.svgPatternOne} alt=""  className='w-full opacity-10'/>
            </div>
            <TreatmentSmallText/>
        </div>
    )
}

export default DoctorsList