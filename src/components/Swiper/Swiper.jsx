// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./swiper.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

export default function App() {
    return (
        <div className="w-[400px] h-[300px] bg-purple-400 mx-auto">
            <Swiper pagination={true} modules={[Pagination]} autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }} className="mySwiper">
                <SwiperSlide><img src="/slider/slider0.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/slider/slider1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/slider/slider2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/slider/slider3.jpg" alt="" /></SwiperSlide>

            </Swiper>
        </div>
    );
}
