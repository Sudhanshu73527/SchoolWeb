import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../assets/hero.png";
import img2 from "../../assets/hero2.png";
import img3 from "../../assets/hero3.png";

const slides = [
  {
    image: img1,
    title: "Sohardh International School",
    subtitle: "Nurturing Excellence & Empowering Futures Through Holistic Education"
  },
  {
    image: img2,
    title: "Where Dreams Begin",
    subtitle: "Fostering Innovation, Creativity, and Leadership for Tomorrow's World"
  },
  {
    image: img3,
    title: "Building Better Tomorrows",
    subtitle: "Empowering Young Minds to Think, Explore, and Lead with Confidence"
  }
  
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const { image, title, subtitle } = slides[currentIndex];

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      {/* Animated image transitions */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={image}
          alt={`Slide ${currentIndex + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Overlay content */}
      <div className="absolute inset-0 bg-orange-300/30 flex items-center justify-center text-center px-4">
        <div className="text-white max-w-3xl text-center space-y-6 mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-md">
            <strong>{title}</strong>
          </h1>
          <p className="text-lg md:text-2xl font-medium drop-shadow-sm">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
