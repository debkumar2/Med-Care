import React, { useState, useRef, useEffect } from 'react'

const accordionData = [
    {
        id: '01',
        title: 'Our hospital mission',
        content: 'Velit officia consequat duis enim velit mollit amet minim mollit non.',
    },
    {
        id: '02',
        title: 'Our hospital vision',
        content: 'Velit officia consequat duis enim velit mollit amet minim mollit non.',
    },
]

const AccordionItem = ({ item, isOpen, onToggle }) => {
    const contentRef = useRef(null)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? contentRef.current.scrollHeight : 0)
        }
    }, [isOpen])

    return (
        <div
            onClick={onToggle}
            className={`flex items-start gap-5 px-6 py-7 mb-5 rounded-xl cursor-pointer transition-all duration-300 relative overflow-hidden  ${isOpen ? 'bg-white shadow-md' : 'bg-[#f5f5f5]'
                }`}
        >
            {/* Outlined teal number */}
            <span className='absolute top-2 -left-4'
                style={{
                    fontSize: '55px',
                    fontWeight: '600',
                    lineHeight: 1,
                    WebkitTextStroke: '1px #18bcc7',
                    color: isOpen ? '#18bcc7' : 'transparent',
                    minWidth: '60px',
                    display: 'inline-block',
                    userSelect: 'none',
                }}
            >
                {item.id}
            </span>

            {/* Title + content */}
            <div className="flex-1 pl-12">
                <p className="text-[#1a2b2c] font-semibold text-base leading-snug">
                    {item.title}
                </p>

                <div
                    style={{
                        height: `${height}px`,
                        overflow: 'hidden',
                        transition: 'height 0.35s cubic-bezier(0.4,0,0.2,1)',
                    }}
                >
                    <div ref={contentRef}>
                        <p className="text-[#848587] text-[15px] leading-relaxed mt-2">
                            {item.content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const VisionAccordion = () => {
    const [openIndex, setOpenIndex] = useState(0)

    return (
        <div className="mt-8 w-full">
            {accordionData.map((item, index) => (
                <AccordionItem
                    key={item.id}
                    item={item}
                    isOpen={openIndex === index}
                    onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                />
            ))}
        </div>
    )
}

export default VisionAccordion