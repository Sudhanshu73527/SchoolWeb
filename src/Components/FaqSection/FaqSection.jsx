import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    question: "What is the admission process for new students?",
    answer:
      "Parents can visit the school office or apply online through our website. Admission depends on seat availability and an informal interaction or test.",
  },
  {
    question: "What are the school timings?",
    answer:
      "Our school functions from 8:00 AM to 2:00 PM from Monday to Saturday. Pre-primary classes typically have a shorter duration.",
  },
  {
    question: "Is transport provided by the school?",
    answer:
      "Yes, the school offers well-managed bus services across major routes with GPS tracking and trained staff for student safety.",
  },
  {
    question: "What curriculum does the school follow?",
    answer:
      "We follow the CBSE curriculum supplemented by activity-based learning, life skills training, and digital classrooms for a modern learning experience.",
  },
  {
    question: "How do parents stay updated on their child’s progress?",
    answer:
      "We conduct regular PTMs, share report cards, and use our mobile app to notify parents about homework, attendance, and performance.",
  },
  {
    question: "Are extracurricular activities available?",
    answer:
      "Yes! From sports, music, dance, and drama to robotics, debates, and yoga—we provide ample opportunities for all-round development.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-yellow-50 py-16 px-4">
      <div className="max-w-10xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-4">
          <FaQuestionCircle className="inline-block mr-2 text-orange-500" />
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mb-10 text-lg">
          Everything you need to know about our school system and facilities.
        </p> <br />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-orange-200 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-lg text-orange-700 hover:text-orange-600 focus:outline-none"
              >
                <span>{faq.question}</span>
                {activeIndex === index ? (
                  <FaChevronUp className="text-orange-500" />
                ) : (
                  <FaChevronDown className="text-orange-500" />
                )}
              </button>
              <div
                className={`px-6 pb-5 text-gray-700 leading-relaxed text-base transition-all duration-300 ${
                  activeIndex === index ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
