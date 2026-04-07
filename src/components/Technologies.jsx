import React from 'react'
import assets from '../assets/assets'

const Technologies = () => {
    return (
        <div className='px-12 relative bg-[#edf9fa] relative'>
            <div className="grid">
                <div className="lg:max-w-[540px]">
                    <img src={assets.technologyImgOne} alt="" className='w-full' />
                </div>
            </div>
        </div>
    )
}

export default Technologies
