import React from "react";
import aboutImage from "../../assets/bg4.jpeg";

const About1 = () => {
  return (
    <section className="bg-white pt-24 pb-16 px-4 relative overflow-hidden">
      {/* Top info row */}
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between text-sm text-gray-600 px-4 sm:px-10 absolute top-4 left-0 right-0 z-10">
        <span className="font-semibold text-orange-400 text-center sm:text-left">
          Reg. No: 203101420221221152234
        </span>
        <span className="font-semibold text-orange-400 text-center sm:text-right">
          UDISE No: 100111212011
        </span>
      </div>

      {/* Heading */}
      <div className="text-center mb-10 px-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-600">
          About School
        </h1>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={aboutImage}
            alt="About our school"
            className="w-full max-w-md sm:max-w-lg md:max-w-[360px] lg:max-w-[480px] rounded-lg shadow-lg border border-orange-200 object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left px-2 space-y-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500">
            Shaping Futures Through Quality Education
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Established in 2015, <strong className="text-orange-600">Sauhardh International School</strong> has grown into a center of
            excellence, dedicated to nurturing young minds for a brighter tomorrow.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Our mission is to empower students with knowledge, character and confidence
            to face the challenges of the future. At the heart of our philosophy lies
            a commitment to academic rigor balanced with holistic development.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            We believe that education goes beyond textbooks. Our campus buzzes with creativity,
            sportsmanship, leadership activities, and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About1;
