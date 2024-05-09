import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const InfiniteSliderCard = ({ image }) => {
  const [showOverlay, setShowOverlay] = React.useState(false);
  return (
    <motion.div
      className="relative overflow-hidden h-[70px] w-[70px] flex justify-center items-center"
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <Image src={image} alt={image} fill style={{ objectFit: "fill" }} />
    </motion.div>
  );
};

export default InfiniteSliderCard;
