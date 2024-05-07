import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import sliderDetails from "@/data/Home/sliderDetails";
import { sliderSettings } from "@/data/Home/sliderSettings";

export default function NotableEventSlider() {
  return (
    <div className="relative">
      <div className="xl:max-w-[1058px] md:max-w-[700px] sm:max-w-[620px] max-w-[340px] xl:h-[382px] h-auto px-12 pt-9 pb-9 bg-gradient-to-b from-[#121524] to-black border-[1px] border-solid border-[#535353]">
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {sliderDetails.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flex xl:flex-row flex-col gap-14">
                <div className="flex flex-col gap-3">
                  <h1 className="font-bold text-4xl xl:text-left text-center">{card.title + "-" + Number(i+1)}</h1>
                  <p className="text-[#7b7b7b] text-base md:w-[595px] w-auto xl:text-left text-center">
                    {card.desc}
                  </p>
                </div>
                <div>
                  <img
                    className="rounded-md"
                    src={card.img}
                    alt="Event1"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flex justify-center gap-[1rem] pt-4">
      <button
        className="border-[1px] border-solid border-[#535353] text-[1.2rem] py-[0.2rem] px-[0.8rem] text-white rounded-[5px] bg-gradient-to-b from-[#121524] to-black cursor-pointer"
        onClick={() => swiper.slidePrev()}
      >
        ❰
      </button>
      <button
        className="border-[1px] border-solid border-[#535353] text-[1.2rem] py-[0.2rem] px-[0.8rem] text-white rounded-[5px] bg-gradient-to-b from-[#121524] to-black cursor-pointer"
        onClick={() => swiper.slideNext()}
      >
        ❱
      </button>
    </div>
  );
};
