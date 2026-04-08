import React, { useState, useRef } from 'react'
import assets from '../assets/assets'
import { FaPhone, FaPhoneAlt, FaYoutube } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { BsLayoutTextSidebarReverse } from 'react-icons/bs'
import ButtonComp from './ButtonComp'
import SubHeading from './SubHeading'

const Technologies = () => {
    const [hovered, setHovered] = useState(false)
    const [tilt, setTilt] = useState({ x: 0, y: 0 })
    const [showModal, setShowModal] = useState(false)
    const cardRef = useRef(null)
    const rafRef = useRef(null)

    const handleMouseMove = (e) => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current)

        rafRef.current = requestAnimationFrame(() => {
            const card = cardRef.current
            if (!card) return
            const rect = card.getBoundingClientRect()

            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            const centerX = rect.width / 2
            const centerY = rect.height / 2

            const rotateX = ((y - centerY) / centerY) * -15
            const rotateY = ((x - centerX) / centerX) * 15

            setTilt({ x: rotateX, y: rotateY })
        })
    }

    const handleMouseLeave = () => {
        setHovered(false)
        setTilt({ x: 0, y: 0 })
    }

    return (
        <>
            <div className='px-12 pt-[90px]' style={{ perspective: '1200px', perspectiveOrigin: 'center' }}>
                <div className="grid grid-cols-2 gap-10">
                    {/* Wrapper — position relative, no transform */}
                    <div className="lg:max-w-[540px] relative">

                        {/* Only this div tilts */}
                        <div
                            ref={cardRef}
                            className="rounded-xl overflow-hidden"
                            onMouseEnter={() => setHovered(true)}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${hovered ? 1.02 : 1})`,
                                transition: hovered ? 'transform 0.08s linear' : 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                                transformStyle: 'preserve-3d',
                                willChange: 'transform',
                            }}
                        >
                            <img src={assets.technologyImgOne} alt="" className='w-full block' />
                        </div>

                        {/* Button sits on top via absolute, never tilts */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <button
                                onClick={() => setShowModal(true)}
                                className="pointer-events-auto bg-white rounded-full px-6 py-4 flex items-center gap-3 shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer"
                            >
                                <FaYoutube fontSize={22} color='#303334' />
                                <span className="text-[#303334] font-semibold text-lg whitespace-nowrap">See our virtual tour</span>
                            </button>
                        </div>

                    </div>
                    <div className='ml-[95px]'>
                        <SubHeading subhead='Modern technologies' icon={<BsLayoutTextSidebarReverse fontSize={22} color='#18bcc7' />} head='We help you get well sooner!' />
                        <p className='text-[#848587] text-lg font-normal mb-7'>We value each and every human life placed in our hands and constantly work towards meeting the expectations of our customers.</p>
                        <ButtonComp icon={<FaPhoneAlt  color='#ffff' fontSize='18px' />} primary={false}  text='+1234567890' />
                    </div>
                </div>
            </div>

            {/* YouTube Modal */}
            {showModal && (
                <div
                    className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
                    onClick={() => setShowModal(false)}
                >
                    <div
                        className="relative w-[90%] max-w-[800px] aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-3 right-3 z-10 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
                        >
                            <IoClose fontSize={22} color='#303334' />
                        </button>
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                            title="Virtual Tour"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default Technologies