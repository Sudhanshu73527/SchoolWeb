import React, { useState } from "react";
import preprimaryImg from "../../assets/sunny4.jpeg";
import primaryImg from "../../assets/sunny5.jpeg";
import secondaryImg from "../../assets/sunny6.jpeg";
import seniorSecondaryImg from "../../assets/school5.jpeg";

const sectionData = [
  {
    key: "Preprimary",
    title: "Preprimary",
    image: preprimaryImg,
    description:
      "The Preprimary Section focuses on early childhood education and lays the foundation for lifelong learning through play, exploration, and social interaction.",
    prompts: [
      "Learning through play",
      "Safe and friendly environment",
      "Development of motor & social skills",
      "Colorful classrooms with learning toys",
    ],
    bg: "from-pink-100 to-pink-50",
    reverse: false,
  },
  {
    key: "Primary",
    title: "Primary",
    image: primaryImg,
    description:
      "The Primary Section emphasizes basic literacy, numeracy, and personal development, fostering curiosity and creativity in young learners.",
    prompts: [
      "Strong foundation in core subjects",
      "Activity-based learning",
      "Development of curiosity",
      "Interactive smart classrooms",
    ],
    bg: "from-orange-100 to-yellow-50",
    reverse: true,
  },
  {
    key: "Secondary",
    title: "Secondary",
    image: secondaryImg,
    description:
      "The Secondary Section prepares students for higher education and the future by encouraging critical thinking, problem-solving, and deeper subject understanding.",
    prompts: [
      "Advanced subject learning",
      "Science & computer labs",
      "Critical thinking focus",
      "Leadership opportunities",
    ],
    bg: "from-gray-100 to-slate-200",
    reverse: false,
  },
  {
    key: "Senior Secondary",
    title: "Senior Secondary",
    image: seniorSecondaryImg,
    description:
      "The Senior Secondary Section provides specialized subject knowledge, career readiness, and preparation for competitive examinations and higher studies.",
    prompts: [
      "Career-oriented curriculum",
      "Competitive exam training",
      "Expert faculty guidance",
      "Stream-wise specialization (Science/Commerce/Arts)",
    ],
    bg: "from-purple-100 to-indigo-50",
    reverse: true,
  },
]; 

const SectionTabs = () => {
  const [activeTab, setActiveTab] = useState(sectionData[0].key);

  const activeSection = sectionData.find((section) => section.key === activeTab);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-orange-600">Our School Sections</h1>
        <p className="text-gray-600 mt-2 text-lg">
          Discover the educational journey we offer at each stage
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {sectionData.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 border-2 ${
              activeTab === tab.key
                ? "bg-orange-500 text-white border-orange-500 shadow-lg"
                : "bg-white text-gray-700 border-orange-300 hover:bg-orange-100 hover:text-orange-600"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Section Content */}
      <div
        className={`flex flex-col ${
          activeSection.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center gap-10 p-6 sm:p-10 rounded-2xl shadow-xl bg-gradient-to-r ${activeSection.bg} transition-all duration-500`}
      >
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={activeSection.image}
            alt={`${activeSection.title} Section`}
            className="w-full max-h-[300px] object-cover rounded-xl border-4 border-orange-200 shadow-md"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-600">
            {activeSection.title} Section
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">{activeSection.description}</p>
          <ul className="text-gray-700 text-base list-disc pl-5 mt-4 space-y-2">
            {activeSection.prompts.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionTabs;
