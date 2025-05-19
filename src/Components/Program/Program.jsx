import React, { useState } from "react";
import { FaBook, FaChalkboardTeacher, FaBasketballBall } from "react-icons/fa";
import { motion } from "framer-motion";
import program_1 from "../../assets/Anual.jpeg";
import program_2 from "../../assets/price.png";
import program_3 from "../../assets/program-3.png";

const programData = [
  {
    image: program_1,
    title: "Annual Function",
    description: "Celebrating talent, culture, and achievements every year.",
    icon: <FaBook className="text-5xl mb-3" />,
  },
  {
    image: program_2,
    title: "Spreading Price ",
    description: "Interactive, tech-enabled classrooms for 21st century skills.",
    icon: <FaChalkboardTeacher className="text-6xl mb-3" />,
  },
  {
    image: program_3,
    title: "Sports & Games",
    description: "Holistic development through physical education.",
    icon: <FaBasketballBall className="text-5xl mb-3" />,
  },
];

const Program = () => {
  const [clickedIndex, setClickedIndex] = useState(null);

  return (
    <div className="mt-16 md:mt-24 py-12 px-4 max-w-15xl mx-auto">
      <br />
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-orange-500">
        Our School Events
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
        {programData.map((program, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg group w-full max-w-xs cursor-pointer"
            onClick={() => setClickedIndex(index === clickedIndex ? null : index)}
            animate={{
              scale: index === clickedIndex ? 1.05 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="overflow-hidden">
              <motion.img
                src={program.image}
                alt={program.title}
                className="w-full h-64 object-cover border border-orange-200 rounded-xl"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <div className="absolute inset-0 bg-orange-500 bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center px-4 text-center text-white transition-opacity duration-500">
              <motion.div
                className="flex flex-col items-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {program.icon}
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-sm">{program.description}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Program;

