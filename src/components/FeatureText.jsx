import React from 'react'
import { FaRegFaceSmile } from 'react-icons/fa6'

const FeatureText = () => {
  return (
    <div className='py-16 flex items-center justify-center gap-2'>
      <FaRegFaceSmile color='#18bcc7' fontSize='26px'/>
      <p className='text-xl font-bold text-[#303334]'>We can give you the big smile you've always wanted.</p>
    </div>
  )
}

export default FeatureText
