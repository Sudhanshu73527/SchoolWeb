import React from 'react';

const Rte = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-3xl p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-orange-500 mb-4 text-center">Right to Education (RTE)</h1> <br />
        <p className="text-gray-700 text-lg mb-4">
          In accordance with the Right to Education (RTE) Act, 25% of the total strength in each class from Grade 1 to Grade 8 is reserved for children from economically weaker sections (EWS) and disadvantaged groups of the society.
        </p>
        <p className="text-gray-700 text-base mb-2">
          This initiative ensures that every child, regardless of financial background, has access to quality education. The school supports and encourages inclusive education by fostering a nurturing and diverse learning environment.
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Applicable for students from Grade 1 to 8.</li>
          <li>25% reservation in each class for EWS students.</li>
          <li>Documents required: Income certificate, proof of residence, birth certificate.</li>
          <li>No tuition fee charged from RTE students.</li>
        </ul>
      </div>
    </div>
  );
};

export default Rte;
