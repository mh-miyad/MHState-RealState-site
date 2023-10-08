"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Card } from "flowbite-react";
import { Pagination } from "swiper/modules";
import "./style.module.css";
// import required modules

const TestimonialCarousel = () => {
  const number = [1, 2, 3, 4, 5];
  return (
    <div className="">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        autoplay={true}
        modules={[Pagination]}
        className="max-w-7xl mx-auto w-[90vw] md:w-[85vw] container "
      >
        {number.map((ele, index) => (
          <>
            <SwiperSlide key={index}>
              <div className="mb-20">
                <Card>
                  <h3 className="caption-top self-auto text-3xl font-bold text-neutral-700 drop-shadow-2xl">
                    MH Miyad{" "}
                  </h3>
                  <h5 className="text-lg font-extrabold text-slate-500 uppercase">
                    London{" "}
                  </h5>
                  <p className="text-lg drop-shadow-2xl font-semibold text-slate-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fames ut dictumst urna, lorem nibh. Pretium leo hendrerit
                    interdum netus{" "}
                  </p>
                </Card>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;
