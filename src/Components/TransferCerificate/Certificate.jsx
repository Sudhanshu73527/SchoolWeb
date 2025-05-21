import React from "react";
import { motion } from "framer-motion";
import certificateSample from "../../assets/bg1.jpeg"; // Replace with actual image
import { useNavigate } from "react-router-dom";

const Certificate = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4 flex flex-col items-center">
      <motion.h2
        className="text-3xl font-bold text-orange-500 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📄 Transfer Certificate
      </motion.h2>

      <motion.div
        className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg max-w-3xl w-full transition"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center mb-6">
          <img
            src={certificateSample}
            alt="Sample Transfer Certificate"
            className="w-full md:w-1/2 h-auto rounded-lg border border-gray-200"
          />
        </div>

        <p className="text-gray-700 text-md mb-6 text-center">
          If you are a student or parent looking to obtain a transfer
          certificate, you can download the sample above or request an official
          certificate by clicking the button below.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href={certificateSample}
            download="Sample_Transfer_Certificate.png"
            className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition"
          >
            📥 Download Sample
          </a>
          <button
            onClick={() => navigate("/")}
            className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition"
          >
            📝 Request Certificate
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Certificate;
