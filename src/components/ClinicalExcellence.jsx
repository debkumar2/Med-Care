import React from 'react'
import { BsHeartPulse } from 'react-icons/bs'
import { GiStethoscope } from 'react-icons/gi'
import { LiaAmbulanceSolid } from 'react-icons/lia'
import { PiPlusCircleLight } from 'react-icons/pi'
import assets from '../assets/assets'

const ClinicalExcellence = () => {
    const excellenceItems = [
        {
            icon: <GiStethoscope fontSize='40px' color='#16c1cc' />,
            heading: 'Best doctor',
            subHeading: 'Best treatment & specialist doctors.',
        },
        {
            icon: <LiaAmbulanceSolid fontSize='40px' color='#16c1cc' />,
            heading: 'Ambulance',
            subHeading: 'You will be able track ambulance soon.',
        },
        {
            icon: <BsHeartPulse fontSize='40px' color='#16c1cc' />,
            heading: 'Health support',
            subHeading: 'We did provide your health information.',
        },
        {
            icon: <PiPlusCircleLight fontSize='40px' color='#16c1cc' />,
            heading: 'Medical advices',
            subHeading: 'Consult any doctors our clinic any time.',
        }
    ]
    return (
        <div className='px-12 py-[90px] bg-[#edf9fa] relative'>
            <div className="">
                <h2 className='text-[#303334] font-extrabold text-6xl tracking-tighter mb-12 text-center'>Clinical excellence</h2>
            </div>
            <div className="grid grid-cols-4 gap-8 relative z-10">
                {excellenceItems.map((item, index) => (
                    <div className="group p-9 bg-white flex justify-center items-center flex-col rounded-lg hover:bg-[#16c1cc] transition-all duration-300 hover:-translate-y-1" key={index}>
                        <div className="bg-[#edf9fa] w-[110px] h-[110px] rounded-full flex items-center justify-center">
                            {item.icon}
                        </div>
                        <div className="text-center flex gap-4 flex-col mt-4">
                            <h3 className='text-[#303334] text-lg font-bold group-hover:text-white'>{item.heading}</h3>
                            <p className='text-[17px] font-medium text-[#848587] group-hover:text-white'>{item.subHeading}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='text-center pt-14'>
            <h4 className='text-xl font-semibold text-[#303334]'>Delivering tomorrow's health care for your family. <span className='text-[#16c1cc] underline'>View doctor's timetable.</span></h4>
            </div>
             <div className='absolute -top-20 -left-12 lg:max-w-[350px] z-0'>
                <img src={assets.svgPatternOne} alt="" className='w-full opacity-10' />
            </div>
        </div>
    )
}

export default ClinicalExcellence
