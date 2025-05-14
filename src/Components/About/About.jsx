import React, { useState } from "react";
import about from "../../assets/hero2.png";

const About = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-12 min-h-screen flex flex-col justify-center">
      {/* Title */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-500 hover:text-slate-500 mb-4">
          About Us
        </h1>
        <h3 className="text-lg md:text-base text-slate-500 font-medium hover:text-slate-800 mb-6">
          Learn more about our mission and values
        </h3>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 group">
          <img
            src={about}
            alt="About Sohardh International School"
            className="w-full h-auto rounded-xl shadow-lg transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-5 text-justify">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-500 text-center md:text-left">
            Sohardh International School
          </h2>

          <p className="text-gray-700 text-base md:text-[17px] leading-loose font-normal">
            The School respects its educational legitimacy and its responsibility for the scientific scrutiny of its own educational acts, for social openness, and for special consideration of the weak and deprived parts of society. We believe in the cooperation of all participants in the educational process.
          </p>

          <p className="text-gray-700 text-base md:text-[17px] leading-loose font-normal">
            The school aims to impart education with a comprehensive understanding of human beings and the world, rooted in Indian cultural traditions. It also promotes the belief in human welfare and works towards building a more inclusive society.
          </p>

          {/* Expandable Text */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              expanded ? "max-h-[1000px] opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-gray-700 text-base md:text-[17px] leading-loose font-normal">
              The school performs its duties with the collective responsibility of all participants. This requires correspondence between teachers, parents, and students in recognizing the objectives and principles of education, along with cooperative actions in the school.
            </p>
            <p className="text-gray-700 text-base md:text-[17px] leading-loose font-normal">
              Our goal is to build a community that celebrates learning, personal growth, and positive contributions to society. Every effort is made to support students academically and emotionally in a nurturing environment.
            </p>
            <p className="text-gray-700 text-base md:text-[17px] leading-loose font-normal mt-2">
              By blending modern methods with traditional values, we guide students to become thoughtful, capable, and responsible global citizens.
            </p>
          </div>

          {/* Toggle Button */}
          <div className="text-center md:text-left">
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 text-orange-500 font-semibold hover:underline focus:outline-none transition duration-300"
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
