import React from "react";
import {
  FaHandsHelping,
  FaUsers,
  FaComments,
  FaChalkboardTeacher,
} from "react-icons/fa";

const ParentTeacher = () => {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-white min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-4 uppercase tracking-wide">
          Parent-Teacher Association
        </h2>
        <p className="text-gray-700 text-lg sm:text-xl max-w-3xl text-center">
        The Parent-Teacher Association (PTA) at{" "}
        <span className="text-orange-500 font-semibold">
          Sauhardh International School
        </span>{" "}
        fosters collaboration between parents and educators to create a nurturing and effective learning environment.
      </p> <br />

        {/* Roles/Benefits Cards */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {[
            {
              icon: <FaUsers className="text-4xl text-orange-500 mb-3" />,
              title: "Build Strong Relationships",
              text: "Bridge communication between parents and teachers for student growth.",
            },
            {
              icon: <FaComments className="text-4xl text-orange-500 mb-3" />,
              title: "Open Dialogue",
              text: "Encourage healthy discussions and constructive feedback.",
            },
            {
              icon: <FaHandsHelping className="text-4xl text-orange-500 mb-3" />,
              title: "Support Initiatives",
              text: "Participate in school events, workshops, and development programs.",
            },
            {
              icon: <FaChalkboardTeacher className="text-4xl text-orange-500 mb-3" />,
              title: "Enhance Education",
              text: "Collaborate to improve academic and co-curricular outcomes.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg text-center transition-transform hover:scale-105 duration-300"
            >
              {item.icon}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div> <br />

        {/* Teachers & Parents */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          {/* Teachers */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-orange-100">
            <h3 className="text-2xl font-bold text-orange-600 mb-4">Teachers</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Mr. Rajeev Ranjan – Principal</li>
              <li>Mrs. Sunita Kumari – Coordinator</li>
              <li>Mr. Manoj Singh – Science Teacher</li>
              <li>Ms. Nisha Pandey – English Teacher</li>
              <li>Mr. Rakesh Sharma – Math Teacher</li>
            </ul>
          </div>

          {/* Parents */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-orange-100">
            <h3 className="text-2xl font-bold text-orange-600 mb-4">Parents</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Mr. Sujit Kumar – PTA President</li>
              <li>Mrs. Aisha Qureshi – Member</li>
              <li>Mr. Ranjan Sah – Member</li>
              <li>Mrs. Meena Tiwari – Member</li>
              <li>Mr. Pradeep Pandey – Member</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentTeacher;
