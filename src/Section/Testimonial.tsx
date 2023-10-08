"use client";
import React from "react";
import TestimonialCarousel from "@/Components/Slider/Carousel";

const Testimonial = () => {
  return (
    <div className="flex justify-center items-center ">
      <div>
        {/*  headline of testimonial  */}
        <div className="text-center my-5 ">
          <h3 className="text-xl sm:text-3xl md:text-6xl text-slate-600 my-2 font-bold drop-shadow-xl">
            {" "}
            Testimonials{" "}
          </h3>
          <p className="text-sm sm:text-3xl font-semibold mb-5 text-slate-500">
            {" "}
            This Is What Our Client are Saying{" "}
          </p>
          <button className="px-5 bg-red-600 text-white drop-shadow-xl py-2 rounded-xl shadow-xl shadow-red-400/20 ">
            View More{" "}
          </button>
        </div>
        {/*  headline of testimonial  */}

        <div className="px-10">
          <TestimonialCarousel />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
