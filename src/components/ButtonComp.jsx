import React from 'react'

const ButtonComp = ({ text, primary, icon }) => {
    return (
        <>
            <button className={`text-[15px] font-medium text-white py-3.5 px-6 rounded-md flex items-center gap-2 ${primary ? 'bg-[#18BCC7]' : 'bg-[#303334]'}`}>{icon}{text}</button>
        </>
    )
}

export default ButtonComp
