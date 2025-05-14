// src/Components/Testing/Testing.jsx
import React from 'react';

const Testing = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center px-4">
      <div className="text-center text-white max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Testing Component</h1>
        <p className="text-lg md:text-xl leading-relaxed">
          This is a fullscreen, responsive testing component designed to take up 100% of the viewport height and adjust gracefully across devices.
        </p>
      </div>
    </section>
  );
};

export default Testing;
