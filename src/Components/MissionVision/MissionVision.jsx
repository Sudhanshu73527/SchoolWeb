import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/hero.png'; // Import your image

function MissionVision() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-4 py-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay to make text readable */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm z-0" />

      {/* Close Button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-6 right-6 text-orange-600 hover:text-red-600 text-2xl md:text-3xl z-10"
        aria-label="Close"
      >
        <FaTimes />
      </button>

      <div className="relative w-full max-w-4xl text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-orange-600 mb-8"
        >
          Our Mission & Vision
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white shadow-xl rounded-2xl p-6 md:p-10 mb-8"
        >
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">🎯 Vision</h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            To be a leading educational platform that empowers students globally with accessible, high-quality, and future-ready learning experiences that inspire lifelong learning and innovation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white shadow-xl rounded-2xl p-6 md:p-10"
        >
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">🚀 Mission</h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Our mission is to bridge educational gaps by delivering engaging, practical, and inclusive learning opportunities that nurture curiosity, critical thinking, and personal growth for students of all backgrounds.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default MissionVision;
