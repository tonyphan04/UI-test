import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.min.css'

import '../style.css'

import ts_1 from '../media/download.jpg'
import ts_2 from '../media/download1.jpg'
import ts_3 from '../media/download2.jpg'

const images = [ts_1, ts_2, ts_3]

export default () => {
    return (
        <div className='carousel'>
            <h2>Carousel</h2>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} height='600' alt="img" className='carousel-image'></img>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};