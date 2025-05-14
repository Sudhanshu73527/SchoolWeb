import React from "react";
import { FaBook, FaChalkboardTeacher, FaGraduationCap } from "react-icons/fa";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";

const programData = [
  {
    image: program_1,
    title: "Pre-School Program",
    description: "A nurturing start for early learners.",
    icon: <FaBook className="text-5xl mb-3" />,
  },
  {
    image: program_2,
    title: "Primary Education",
    description: "Strong foundation in core academic areas.",
    icon: <FaChalkboardTeacher className="text-6xl mb-3" />,
  },
  {
    image: program_3,
    title: "High School Curriculum",
    description: "Focused learning for future readiness.",
    icon: <FaGraduationCap className="text-6xl mb-3" />,
  },
];

const Program = () => {
  return (
    <div className="mt-16 md:mt-24 py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-orange-500 cursor-pointer">
        Our Programs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {programData.map((program, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg group w-full max-w-xs md:max-w-sm"
          >
            <div className="overflow-hidden">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-64 md:h-52 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-blue-400 bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center px-4 text-center text-white transition-opacity duration-500">
              <div className="flex flex-col items-center transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {program.icon}
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-sm">{program.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
