import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bg1 from "../../assets/wha6.jpeg";
import bg2 from "../../assets/bg6.jpeg";
import bg3 from "../../assets/bg3.jpeg";
import bg4 from "../../assets/bg9.jpeg"; // New image

const Hero2 = () => {
  const backgroundImages = [bg1, bg2, bg3, bg4];
  const thoughts = [
    "Knowledge gives you the perfect IDEA",
    "Education is the passport to the FUTURE",
    "Learning opens every locked MIND",
    "Empower through knowledge, succeed with EFFORT",
  ];
  const highlightedWords = ["IDEA", "FUTURE", "MIND", "EFFORT"];

  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgroundImages.length);
      setKey((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const renderThought = (text) =>
    text.split(" ").map((word, i) =>
      highlightedWords.includes(word.toUpperCase()) ? (
        <span key={i} className="text-orange-500">{word} </span>
      ) : (
        <span key={i}>{word} </span>
      )
    );

  return (
    <>
      <marquee className="bg-white text-orange-500 font-medium py-1">
        🎓 Admissions Open for 2025–2026! Limited seats available — Enroll now and secure your child’s future!
      </marquee>

      <div className="relative min-h-[650px] flex items-center overflow-hidden">
        {/* Background Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImages[index]})` }}
          />
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-white/20 z-0" />

        {/* Content */}
        <div className="relative z-10 container px-4 mx-auto">
          <div className="max-w-2xl py-20 space-y-6 text-center md:text-left">
            <AnimatePresence mode="wait">
              <motion.h1
                key={key}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-5xl lg:text-6xl font-bold leading-relaxed"
              >
                {renderThought(thoughts[index % thoughts.length])}
              </motion.h1>
            </AnimatePresence>

            <p className="text-black text-lg font-light max-w-xl">
              "Education is the most powerful weapon which you can use to change the world. In learning you will teach, and in teaching you will learn."
            </p>

            <div className="pt-6">
              {/* Add buttons or links here if needed */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
