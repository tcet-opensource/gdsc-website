"use client";
import NotableEventSlider from "./NotableEventSlider";

export default function NotableEvents() {
  return (
    <div className="relative">
      <img className="sm:block hidden absolute -top-40" src="Home/EllipseGrad1.svg" alt="Ellipse" />
      <div className="sm:mt-36 mt-28 flex justify-center">
        <div className="flex flex-col gap-7">
          <div className="flex gap-4 xl:justify-start justify-center items-center ml-2">
            <img src="Home/notableEvents.svg" alt="Notable Events" />
            <span className="text-[#b5b5b5] font-semibold text-2xl">
              Notable Events
            </span>
          </div>
          <NotableEventSlider />
        </div>
      </div>
    </div>
  );
}
