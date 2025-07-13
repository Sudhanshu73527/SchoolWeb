import React from "react";
import aboutImage from "../../assets/bg4.jpeg";

const About1 = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Top Info Row */}
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between text-sm text-gray-600 px-4 sm:px-6 lg:px-8 absolute top-4 left-0 right-0 z-10">
        <span className="font-semibold text-orange-400 text-center sm:text-left"> <br />
          Reg. No: 203101420221221152234
        </span>
        <span className="font-semibold text-orange-400 text-center sm:text-right mt-1 sm:mt-0">
          UDISE No: 100111212011
        </span>
      </div> <br />

      {/* Heading */}
      <div className="text-center mb-14 mt-10 sm:mt-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-600">
          About School
        </h1> <br />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 sm:gap-16">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={aboutImage}
            alt="About our school"
            className="w-full max-w-xs sm:max-w-md md:max-w-[380px] lg:max-w-[450px] rounded-2xl shadow-xl border border-orange-200 object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 leading-snug">
            Shaping Futures Through Quality Education
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Established in 2015, <strong className="text-orange-600">Sauhardh International School</strong> has grown into a center of
            excellence, dedicated to nurturing young minds for a brighter tomorrow.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Our mission is to empower students with knowledge, character, and confidence
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
