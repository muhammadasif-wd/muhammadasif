import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
//? import required modules
import { Mousewheel, Autoplay, Scrollbar, Navigation, Pagination } from 'swiper/modules';
//? import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function MousewheelCarousel({ carousels_data }) {
    const carouselsData = carousels_data ?? [];
    const [isMousewheelEnabled, setIsMousewheelEnabled] = useState(true);
    const handleSlideChange = (swiper) => {
        if (swiper.isEnd) {
            setIsMousewheelEnabled(false);
        } else {
            setIsMousewheelEnabled(true);
        }
    };
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={isMousewheelEnabled}
            modules={[Mousewheel, Autoplay, Scrollbar, Navigation, Pagination]}
            onSlideChange={(swiper) => handleSlideChange(swiper)}
            centeredSlides={true}
            autoplay={{
                delay: 10000,
                disableOnInteraction: false,
            }}
            scrollbar={{
                hide: true,
            }}
            pagination={{
                type: 'progressbar',
            }}
            navigation={true}
            className="mySwiper"
        >
            {carouselsData.map(({ title, content }, index) => {
                return (
                    <SwiperSlide className='' key={index}>
                        <div className="mt-3">
                            <h1 className='text-2xl font-bold'>{title}</h1> <br />
                            <article className='font-medium leading-7 dark:text-darkColor'>{content}</article>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}
