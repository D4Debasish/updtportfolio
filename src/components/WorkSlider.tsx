"use client";
import React from "react";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSlider = () => {
  const swiper = useSwiper();
  return (
    <div
      className="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between 
              xl:w-max xl:justify-none"
    >
      <button
        className="bg-accent hover:bg-accent-hover text-primary text=[22px] w-[54px] h-[54px] flex justify-center rounded-full 
              items-center transition-all"
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold className="text-black font-bold" />
      </button>
      <button
        className="bg-accent hover:bg-accent-hover text-primary text=[22px] w-[54px] h-[54px] flex justify-center rounded-full
              items-center transition-all"
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold className="text-black font-bold" />
      </button>
    </div>
  );
};

export default WorkSlider;
