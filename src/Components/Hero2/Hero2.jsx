import React, { useState, useEffect } from "react";
import heroimage from "../../assets/student1.png";
import { motion, AnimatePresence } from "framer-motion";

// SlideLeft animation for text
const SlideLeft = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
  transition: { duration: 0.5 },
};

// SlideRight animation for image
const SlideRight = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 },
};

const Hero2 = () => {
  const thoughts = [
    "Knowledge gives you the perfect IDEA",
    "Education is the passport to the FUTURE",
    "Learning opens every locked MIND",
    "Empower through knowledge, succeed with EFFORT",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % thoughts.length);
      setKey((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [thoughts.length]);

  const highlightedWords = ["IDEA", "FUTURE", "MIND", "EFFORT"];

  const renderThought = (thought) =>
    thought.split(" ").map((word, index) =>
      highlightedWords.includes(word.toUpperCase()) ? (
        <span key={index} className="text-orange-500">
          {word}{" "}
        </span>
      ) : (
        word + " "
      )
    );

  return (
    <>
    <marquee className="bg-orange-100 text-orange-400" behavior="" direction="left">🎓 Admissions Open for 2025–2026! Limited seats available — Enroll now and secure your child’s future!</marquee>
    <section className="bg-orange-100">
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
        {/* brand info */}
        <div className="flex flex-col justify-center py-14 md:py-0">
          <div className="text-center md:text-left space-y-6">
            <AnimatePresence mode="wait">
              <motion.h1
                key={key}
                variants={SlideLeft}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={SlideLeft.transition}
                className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal"
              >
                {renderThought(thoughts[currentIndex])}
              </motion.h1>
            </AnimatePresence>

            <p className="text-gray-600 xl:max-w-[500px]">
              "Education is the most powerful weapon which you can use to change
              the world. In learning you will teach, and in teaching you will
              learn"
            </p>
            <br />

            <div className="flex justify-center md:justify-start">
              <button
                onClick={(e) => e.currentTarget.blur()}
                className="mt-10 flex items-center px-6 py-3 bg-orange-500 text-white font-semi-bold rounded shadow-md transition duration-300 hover:bg-white hover:text-orange-500 active:bg-orange-600 active:text-white"
              >
                Explore More
              </button>
            </div>
          </div>
        </div>

        {/* hero image with SlideRight animation */}
        <motion.div
          variants={SlideRight}
          initial="initial"
          animate="animate"
          transition={SlideRight.transition}
          className="flex justify-center items-center"
        >
          <img
            src={heroimage}
            alt="Student illustration"
            className="w-[370px] md:w-[550px] xl:w-[510px] drop-shadow"
          />
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default Hero2;
