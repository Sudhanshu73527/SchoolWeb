import React from "react";
import { motion } from "framer-motion";

const calendarEvents = [
  {
    month: "April",
    events: ["New Academic Session Begins", "Orientation for Parents"],
  },
  {
    month: "May",
    events: ["Internal Assessment 1", "Summer Camp Activities"],
  },
  {
    month: "June",
    events: ["Summer Vacation", "Teacher Training Programs"],
  },
  {
    month: "July",
    events: ["School Reopens", "Weekly Tests Resume"],
  },
  {
    month: "August",
    events: ["Independence Day Celebration", "Unit Test 1"],
  },
  {
    month: "September",
    events: ["Half-Yearly Exams", "Parent-Teacher Meeting"],
  },
  {
    month: "October",
    events: ["Field Trips", "Art & Craft Exhibition"],
  },
  {
    month: "November",
    events: ["Children’s Day", "Diwali Break"],
  },
  {
    month: "December",
    events: ["Annual Sports Day", "Winter Vacation Begins"],
  },
  {
    month: "January",
    events: ["School Reopens", "Republic Day Celebration"],
  },
  {
    month: "February",
    events: ["Pre-board Exams", "Project Submission"],
  },
  {
    month: "March",
    events: ["Final Exams", "Result Declaration"],
  },
];

const Calender = () => {
  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4 flex flex-col items-center">
      <motion.h2
        className="text-3xl font-bold text-orange-500 mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📅 Academic Calendar
      </motion.h2> <br />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {calendarEvents.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <h3 className="text-xl font-semibold text-orange-500 mb-2 text-center">
              {item.month}
            </h3>
            <ul className="text-gray-700 space-y-1 text-center">
              {item.events.map((event, idx) => (
                <li key={idx}>{event}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Calender;
