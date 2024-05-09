import useMeasure from "react-use-measure";
import SponsorSliderCard from "./SponsorSliderCard";
import { animate, useMotionValue, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SponsorSlider() {
  const images = [
    {
      img: "/Home/google.svg",
    },
    {
      img: "/Home/Postman.png",
    },
    {
      img: "/Home/github.png",
    },
    {
      img: "/Home/Azure.png",
    },
    {
      img: "/Home/openai.png",
    },
    {
      img: "/Home/VSCode.png",
    },
    {
      img: "/Home/metrics.svg",
    },
    {
      img: "/Home/notableEvents.svg",
    },
  ];

  const duration = 15;

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8; // 8 is the gap between the images and width / 2 is because we have 2 sets of images

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: duration,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    return () => controls?.stop();
  }, [xTranslation, width, duration]);

  return (
    <main className="py-8">
      <div
        className="overflow-x-hidden flex"
        // style={{ WebkitOverflowScrolling: "touch" }}
      >
        <motion.div
          className="flex sm:gap-40 gap-20"
          ref={ref}
          style={{ x: xTranslation }}
        >
          {[...images, ...images].map((item, idx) => (
            <SponsorSliderCard image={item.img} key={idx} />
          ))}
        </motion.div>
      </div>
    </main>
  );
}
