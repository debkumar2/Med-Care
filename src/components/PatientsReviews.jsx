import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'


const reviews = [
    {
        id: 1,
        name: '@Matthew',
        text: 'It is a great experience and the staff is very experienced and kind.',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
        id: 2,
        name: '@Herman',
        text: "It's a pleasure to meet him and get seen by him.",
        avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
    {
        id: 3,
        name: '@Sarah',
        text: 'Amazing doctors and world-class facilities. Highly recommend this hospital.',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        id: 4,
        name: '@James',
        text: 'The care and attention I received was beyond my expectations. Truly exceptional.',
        avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
    },
]

const StarRating = () => (
    <div className="flex items-center gap-1 bg-[#f5a623] px-3 py-[5px] rounded-md">
        {[...Array(5)].map((_, i) => (
            <FaStar key={i} color="#fff" fontSize={12} />
        ))}
    </div>
)

const PatientsReviews = () => {
    return (
        <div className="px-12 py-[90px]  bg-white overflow-hidden">
            {/* Heading */}
            <h2 className="text-[#303334] font-extrabold text-6xl tracking-tighter mb-12 text-center">
                Patients reviews
            </h2>

            {/* Swiper Slider */}
            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1.4}
                centeredSlides={true}
                spaceBetween={24}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                pagination={{
                    clickable: true,
                    
                }}
                breakpoints={{
                    768: { slidesPerView: 1.6 },
                    1024: { slidesPerView: 2.2 },
                    1280: { slidesPerView: 2.6 },
                }}
                className="!pb-2"
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review.id}>
                        {({ isActive }) => (
                            <div
                                className={`rounded-2xl p-6 flex items-start gap-5 transition-all duration-500 ${
                                    isActive
                                        ? 'bg-white shadow-sm border border-[#efefef] opacity-100 scale-100'
                                        : 'bg-white border border-[#f0f0f0] opacity-40 scale-95'
                                }`}
                            >
                                <img
                                    src={review.avatar}
                                    alt={review.name}
                                    className={`rounded-full object-cover flex-shrink-0 transition-all duration-500 ${
                                        isActive
                                            ? 'w-20 h-20'
                                            : 'w-16 h-16 grayscale'
                                    }`}
                                />
                                <div>
                                    <p className="text-[#303334] text-[15px] leading-relaxed mb-4">
                                        {review.text}
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <StarRating />
                                        <span className="text-[#303334] font-semibold text-sm">
                                            {review.name}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Pagination Dots */}
            <div className="custom-pagination flex justify-center gap-2 mt-6" />

            {/* Trust badge */}
            <div className="flex items-center justify-center gap-4 mt-10">
                <span className="bg-[#18bcc7] text-white text-sm font-semibold px-5 py-2 rounded-full">
                    TRUST
                </span>
                <p className="text-[#303334] text-xl font-semibold">
                    Genuine 10000+ people trusting medcare hospital treatment.
                </p>
            </div>

            {/* Swiper custom dot styles */}
            <style>{`
                .custom-bullet {
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    border-radius: 999px;
                    background: #d0d0d0;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .custom-bullet-active {
                    width: 24px;
                    background: #18bcc7;
                }
            `}</style>
        </div>
    )
}

export default PatientsReviews