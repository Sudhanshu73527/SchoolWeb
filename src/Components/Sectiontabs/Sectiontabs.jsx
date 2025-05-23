import React, { useState } from 'react';
import preprimaryImg from "../../assets/preprimary.jpeg";
import primaryImg from "../../assets/primary.jpg";
import secondaryImg from "../../assets/secondary.jpg";
import seniorSecondaryImg from "../../assets/school5.jpeg"; // Add your actual image here

const Sectiontabs = () => {
  const [activeTab, setActiveTab] = useState('Preprimary');

  const tabs = ['Preprimary', 'Primary', 'Secondary', 'Senior Secondary'];

  // Content and images for each section
  const sectionContent = {
    Preprimary: {
      img: preprimaryImg,
      text: 'The Preprimary Section focuses on early childhood education and lays the foundation for lifelong learning through play, exploration, and social interaction.',
    },
    Primary: {
      img: primaryImg,
      text: 'The Primary Section emphasizes basic literacy, numeracy, and personal development, fostering curiosity and creativity in young learners.',
    },
    Secondary: {
      img: secondaryImg,
      text: 'The Secondary Section prepares students for higher education and the future by encouraging critical thinking, problem-solving, and deeper subject understanding.',
    },
    'Senior Secondary': {
      img: seniorSecondaryImg,
      text: 'The Senior Secondary Section provides specialized subject knowledge, career readiness, and preparation for competitive examinations and higher studies.',
    },
  };

  const getLayoutStyles = () => {
    switch (activeTab) {
      case 'Primary':
        return {
          bg: 'bg-orange-200',
          direction: 'lg:flex-row-reverse',
        };
      case 'Secondary':
        return {
          bg: 'bg-slate-300',
          direction: 'lg:flex-row',
        };
      case 'Senior Secondary':
        return {
          bg: 'bg-purple-200',
          direction: 'lg:flex-row-reverse',
        };
      default:
        return {
          bg: 'bg-green-300',
          direction: 'lg:flex-row',
        };
    }
  };

  const { bg, direction } = getLayoutStyles();
  const { img, text } = sectionContent[activeTab];

  return (
    <div className="w-full p-4 max-w-10xl mx-auto">
      <br /><br />

      {/* Tabs */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-md text-lg font-semibold shadow-md border transition-all ${
              activeTab === tab
                ? 'bg-orange-500 text-white'
                : 'bg-white text-gray-700 hover:bg-orange-400 hover:text-white'
            }`}
          >
            {tab} Section
          </button>
        ))}
      </div>
      <br />

      {/* Content Area */}
      <div className={`flex flex-col ${direction} gap-6 items-center ${bg} rounded-xl p-6 shadow-md`}>
        {/* Image */}
        <img
          src={img}
          alt={`${activeTab} Section`}
          className="w-full lg:w-100 rounded-md shadow-md"
        />

        {/* Text Content */}
        <div className="w-full text-center">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">
            {activeTab} Section
          </h2>
          <p className="text-gray-800 text-xl mb-4">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sectiontabs;
