"use client";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Metrics() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="mx-20 sm:mt-12 mt-0 mb-24 flex flex-col gap-12">
      <div className="flex justify-center xl:justify-start gap-4 items-center ml-2">
        <img src="Home/metrics.svg" alt="Metrics" />
        <span className="text-[#b5b5b5] font-semibold text-2xl">Metrics</span>
      </div>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="flex xl:flex-nowrap flex-wrap xl:justify-start justify-center gap-12">
          <div className="w-[278px] p-12 flex flex-col gap-4 items-center justify-center rounded-xl border-[1px] border-solid border-[#7c7c7c] bg-gradient-to-b from-[#102e51] to-[#155299]">
            <h1 className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-b from-white to-[#999999]">
              +
              {counterOn && (
                <CountUp start={0} end={90} duration={4} delay={0} />
              )}
            </h1>
            <p className="font-bold text-xl">Registrations</p>
          </div>
          <div className="w-[278px] p-12 flex flex-col gap-4 items-center justify-center rounded-xl border-[1px] border-solid border-[#7c7c7c] bg-gradient-to-b from-[#0d141c] to-[#021224]">
            <h1 className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-b from-white to-[#999999]">
              +
              {counterOn && (
                <CountUp start={0} end={6} duration={4} delay={0} />
              )}
            </h1>
            <p className="font-bold text-xl">Workshops</p>
          </div>
          <div className="w-[278px] p-12 flex flex-col gap-4 items-center justify-center rounded-xl border-[1px] border-solid border-[#7c7c7c] bg-gradient-to-b from-[#0d141c] to-[#021224]">
            <h1 className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-b from-white to-[#999999]">
              +
              {counterOn && (
                <CountUp start={0} end={31} duration={4} delay={0} />
              )}
            </h1>
            <p className="font-bold text-xl">Months</p>
          </div>
          <div className="w-[278px] p-12 flex flex-col gap-4 items-center justify-center rounded-xl border-[1px] border-solid border-[#7c7c7c] bg-gradient-to-b from-[#0d141c] to-[#021224]">
            <h1 className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-b from-white to-[#999999]">
              +
              {counterOn && (
                <CountUp start={0} end={90} duration={4} delay={0} />
              )}
            </h1>
            <p className="font-bold text-xl">Registrations</p>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
}
