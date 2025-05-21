import React from "react";
import { motion } from "framer-motion";

const studentData = [
  { class: "Nursery", count: 30 },
  { class: "LKG", count: 32 },
  { class: "UKG", count: 31 },
  { class: "Class 1", count: 35 },
  { class: "Class 2", count: 33 },
  { class: "Class 3", count: 36 },
  { class: "Class 4", count: 34 },
  { class: "Class 5", count: 38 },
  { class: "Class 6", count: 40 },
  { class: "Class 7", count: 37 },
  { class: "Class 8", count: 39 },
  { class: "Class 9", count: 34 },
  { class: "Class 10", count: 33 },
];

const Studentdetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 flex flex-col items-center">
      <motion.h2
        className="text-3xl font-bold text-orange-600 mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🎓 Student Details by Class
      </motion.h2> <br />

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        {studentData.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <h3 className="text-xl font-semibold text-orange-500 mb-2">
              {item.class}
            </h3>
            <p className="text-gray-700 text-lg">
              👨‍🎓 Students: <strong>{item.count}</strong>
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Studentdetails;
