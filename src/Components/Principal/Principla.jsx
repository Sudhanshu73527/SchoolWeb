import React, { useState } from "react";
import about from "../../assets/hero2.png";

const About = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-12">
      {/* Title */}
      <div className="text-center">
        <br /> <br />
        <h3 className="text-3xl md:text-5xl font-bold text-gray-500 hover:text-slate-500 mb-4">
          Principal Message
        </h3>
       
        <br />
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Image with Play Icon on Hover */}
        <div className="relative w-full md:w-1/2 group">
          <img
            src={about}
            alt="About School"
            className="w-full h-auto rounded-xl shadow-lg transition-transform duration-500 group-hover:scale-90"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 space-y-5 text-justify">
          

          <p className="text-gray-700 text-base md:text-[17px] leading-loose font-normal">
            Dear <strong>Students</strong> respects its educational legitimacy and its
            responsibility for the scientific scrutiny of its own educational
            acts, for social openness and for special consideration of the weak
            and deprived parts of the society as well as co-operation of all
            with the educational process.
          </p><br />
          <p className="text-gray-700 text-base md:text-[17px] leading-loose font-normal">
            Its characteristic and its part in the educational mission in the
            country is attained by the school in the way that it educates with a
            comprehensive understanding of human being and the world in the
            light of Indian cultural tradition. The school makes efforts to
            promote the belief in human welfare.
          </p> <br />
          

          {/* Expandable Text */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              expanded ? "max-h-[1000px] opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-gray-700 text-base md:text-[17px] leading-loose font-normal">
            The school performs its duties with a common responsibility of all
            the participants. This needs correspondence of views of teachers,
            parents, and students in recognition of the objectives and the basic
            principles of education and educational work as well as trustful
            co-operative action in the school.
          </p>
            <p className="text-gray-700 text-base md:text-[17px] leading-loose font-normal">
              We aim to build a community that celebrates learning, personal
              growth, and positive contributions to society. Every effort is
              made to ensure students are supported academically and emotionally
              in a nurturing environment.
            </p>
            <p className="text-gray-700 text-base md:text-[17px] leading-loose font-normal mt-2">
              By blending modern methods with traditional values, we guide
              students to become thoughtful, capable, and responsible global
              citizens.
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
