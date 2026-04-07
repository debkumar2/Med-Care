import React, { useState, useRef } from 'react'
import assets from '../assets/assets'
import { FaYoutube } from 'react-icons/fa'

const Technologies = () => {
    const [hovered, setHovered] = useState(false)
    const [tilt, setTilt] = useState({ x: 0, y: 0 })
    const cardRef = useRef(null)

    const handleMouseMove = (e) => {
        const card = cardRef.current
        const rect = card.getBoundingClientRect()

        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = ((y - centerY) / centerY) * -15  // tilt up/down
        const rotateY = ((x - centerX) / centerX) * 15   // tilt left/right

        setTilt({ x: rotateX, y: rotateY })
    }

    const handleMouseLeave = () => {
        setHovered(false)
        setTilt({ x: 0, y: 0 })
    }

    return (
        <div className='px-12 relative bg-[#edf9fa]' style={{ perspective: '1000px' }}>
            <div className="grid">
                <div
                    ref={cardRef}
                    className="lg:max-w-[540px] rounded-xl overflow-hidden relative cursor-pointer"
                    onMouseEnter={() => setHovered(true)}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${hovered ? 1.03 : 1})`,
                        transition: hovered ? 'transform 0.1s ease' : 'transform 0.4s ease',
                        transformStyle: 'preserve-3d',
                    }}
                >
                    <img src={assets.technologyImgOne} alt="" className='w-full' />

                    {/* See our virtual tour button */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="bg-white rounded-full px-6 py-4 flex items-center gap-3 shadow-lg">
                            <FaYoutube fontSize={22} color='#303334' />
                            <span className="text-[#303334] font-semibold text-lg whitespace-nowrap">See our virtual tour</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies