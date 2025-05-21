import React, { useState, useEffect } from "react";
import bg1 from "../../assets/bg4.jpeg";
import bg2 from "../../assets/bg6.jpeg";
import bg3 from "../../assets/bg3.jpeg";
import { motion, AnimatePresence } from "framer-motion";

// Text animation
const SlideLeft = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
  transition: { duration: 0.5 },
};

// Background fade animation
const Fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 1 },
};

const Hero2 = () => {
  const backgroundImages = [bg1, bg2, bg3];
  const thoughts = [
    "Knowledge gives you the perfect IDEA",
    "Education is the passport to the FUTURE",
    "Learning opens every locked MIND",
    "Empower through knowledge, succeed with EFFORT",
  ];

  const [bgIndex, setBgIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [key, setKey] = useState(0);

  // Change background and quote every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
      setQuoteIndex((prev) => (prev + 1) % thoughts.length);
      setKey((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const highlightedWords = ["IDEA", "FUTURE", "MIND", "EFFORT"];

  const renderThought = (thought) =>
    thought.split(" ").map((word, index) =>
      highlightedWords.includes(word.toUpperCase()) ? (
        <span key={index} className="text-orange-500">
          {word}{" "}
        </span>
      ) : (
        <span key={index}>{word} </span>
      )
    );

  return (
    <>
      <marquee className="bg-white text-orange-500 font-medium py-1">
        🎓 Admissions Open for 2025–2026! Limited seats available — Enroll now and secure your child’s future!
      </marquee>

      <div className="relative min-h-[650px] overflow-hidden flex items-center">
        {/* Background image transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={bgIndex}
            variants={Fade}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={Fade.transition}
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImages[bgIndex]})` }}
          />
        </AnimatePresence>

        {/* Optional overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-white/20 z-0" />

        <div className="relative z-10 container px-4 mx-auto">
          <div className="max-w-2xl text-center md:text-left space-y-6 py-20">
            <AnimatePresence mode="wait">
              <motion.h1
                key={key}
                variants={SlideLeft}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={SlideLeft.transition}
                className="text-5xl lg:text-6xl font-bold leading-relaxed"
              >
                {renderThought(thoughts[quoteIndex])}
              </motion.h1>
            </AnimatePresence>

            <p className="text-black text-lg font-light max-w-xl">
              "Education is the most powerful weapon which you can use to change the world. In learning you will teach, and in teaching you will learn."
            </p>

            <div className="pt-6"> <br />
              <button className="px-6 py-3 bg-orange-500 text-white font-semi-bold rounded shadow hover:bg-white hover:text-orange-500 transition duration-300">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
