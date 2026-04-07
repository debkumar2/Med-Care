import React from 'react'

const SubHeading = ({ icon, subhead, head }) => {
    return (
        <div>
            <div className='flex items-center gap-3 mb-5'>
                <div className="bg-[#16c1cc26] w-[60px] h-[60px] rounded-full flex items-center justify-center">
                    {icon}
                </div>
                <span className='text-[#303334] font-semibold text-lg'>{subhead}</span>
            </div>
            <div>
                <h2 className='text-[#303334] font-extrabold text-6xl tracking-tighter mb-6'>{head}</h2>
            </div>
        </div>
    )
}

export default SubHeading
