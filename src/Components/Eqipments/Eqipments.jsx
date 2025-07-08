import React from "react";
import { GiGraduateCap } from "react-icons/gi";
import { motion } from "framer-motion";

const EqipmentsData = [
  {
    id: 1,
    title: "Education Equipments",
    desc: "Practical solutions that turn vision into achievement.Empowering institutions with innovation and reliability.",
    icons: <GiGraduateCap />,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Modern Classrooms",
    desc: "Designed to enrich teaching and enhance the student experience at every level",
    icons: <GiGraduateCap />,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Digital Resources",
    desc: "Empowering schools and students to thrive in a digital era.Where innovation meets education for a brighter.",
    icons: <GiGraduateCap />,
    delay: 0.9,
  },
];

const Eqipments = () => {
  return (
    <div className="bg-white py-24"> <br />
      <div className="container">
        <div className="flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
          {/* Heading */}
          <div className="space-y-4 p-6 sm:col-span-2 md:col-span-1 text-center sm:text-left">
            <h1 className="text-3xl md:text-4xl font-bold">
              Unlock Your Learning Potential
            </h1>
            <p className="text-slate-700">
             
            </p>
          </div>

          {/* Animated Cards */}
          {EqipmentsData.map((item) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: item.delay }}
    whileHover={{ scale: 1.01 }}
    whileTap={{ scale: 0.95 }}
    className="bg-gray-100 space-y-4 p-6 rounded-xl hover:bg-white hover:shadow-[0_0_22px_0_rgba(184,31,31,0.15)] transition-all duration-100 w-full max-w-xs hover:text-orange-500 cursor-pointer"
  >
    <div className="text-4xl text-orange-500">{item.icons}</div>
    <p className="text-2xl font-semibold">{item.title}</p>
    <p className="text-slate-600">{item.desc}</p>
  </motion.div>
))}

        </div>
      </div> <br />
    </div>
  );
};

export default Eqipments;
