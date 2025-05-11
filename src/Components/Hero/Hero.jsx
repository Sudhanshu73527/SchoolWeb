import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../assets/hero.png";
import img2 from "../../assets/hero2.png";
import img3 from "../../assets/hero3.png";
import { FaArrowRightLong } from "react-icons/fa6";

const images = [img1, img2, img3];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds for better UX

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      {/* Animated image transitions */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Overlay content */}
      {/* Overlay content */}
<div className="absolute inset-0 bg-orange-300/30 flex items-center justify-center text-center px-4">
  <div className="text-white max-w-3xl text-center space-y-6 mx-auto">
    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-md">
      Sohardh International School
    </h1>
    <p className="text-lg md:text-2xl font-medium drop-shadow-sm">
      Nurturing Excellence & Empowering Futures Through Holistic Education
    </p>
    <div className="flex justify-center">
      <button className="px-12 py-5 bg-white text-slate-700 text-xl font-bold rounded-full shadow-2xl border-2 border-slate-500 flex items-center justify-center gap-4 hover:bg-orange-100 hover:text-orange-600 transition duration-300">
        Explore More
        <FaArrowRightLong className="text-2xl" />
      </button>
    </div>
  </div>
</div>

    </div>
  );
};

export default Hero;
