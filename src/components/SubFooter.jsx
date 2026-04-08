import React from 'react'

const SubFooter = () => {
    return (
        <div className='flex justify-between py-10 px-12'>
            <div className="">
                <span className='text-sm font-medium text-[#848587] inline-block'>
                    © 2026 Crafto is Proudly Powered by{" "}
                    <a
                        className='underline font-semibold text-[#303334]'
                        href="https://www.themezaa.com/"
                        target='_blank'
                    >
                        ThemeZaa
                    </a>
                </span>
            </div>
            <ul className='flex gap-12'>
                <li><a href="" className='text-[#848587]'>Terms and conditions</a></li>
                <li><a href="" className='text-[#848587]'>Privacy policy</a></li>
            </ul>
        </div>
    )
}

export default SubFooter
