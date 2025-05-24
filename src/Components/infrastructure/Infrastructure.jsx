import React, { useState } from "react";

// ✅ Import images (replace with real image paths)
import buildingImg from "../../assets/wha6.jpeg";
import classroomImg from "../../assets/class2.jpeg";
import officeImg from "../../assets/principal2.jpeg";
import receptionImg from "../../assets/rep2.jpeg";
import libraryImg from "../../assets/lib2.jpeg";
import labImg from "../../assets/comp1.jpeg";
import scilab from "../../assets/science2.jpeg"
import ramp from "../../assets/wha5.jpeg"
import cwsn from "../../assets/wha7.jpeg"
const infrastructureItems = [
  {
    title: "Main School Building",
    image: buildingImg,
    description:
      "Our modern school building is designed for comfort, safety, and academic excellence.",
  },
  {
    title: "Classrooms  (28 * 20 ft)",
    image: classroomImg,
    description:
      "Spacious and well-lit classrooms equipped with smart boards and comfortable seating.",
  },
  {
    title: "Principal’s Office (16*10 ft)",
    image: officeImg,
    description:
      "Administrative hub for school leadership, meetings, and parent interactions.",
  },
  {
    title: "Reception Area (10*10 ft)",
    image: receptionImg,
    description:
      "Welcoming reception area to guide visitors and manage inquiries efficiently.",
  },
  {
    title: "Library (20*65 ft)",
    image: libraryImg,
    description:
      "A well-stocked library with a wide collection of books for students of all grades.",
  },
  {
    title: "Computer Laboratory (20*30 ft)",
    image: labImg,
    description:
      "State-of-the-art lab to conduct practical experiments for science learning.",
  },
   {
    title: "Science Laboratory  (20*30 ft)" ,
    image: scilab,
    description:
      "Design a well-equipped science lab for students with proper ventilation, safety equipment,",
  },
  {
    title: "Ramp (60M)",
    image: ramp,
    description:
      "Design a safe and accessible wheelchair ramp for public or residential use,  for support.",
  },
  {
    title: "CWSN Bathroom (12*16 ft)",
    image: cwsn,
    description:
      "Design a child-friendly, accessible bathroom for CWSN that includes grab bars, non-slip flooring,",
  },
];

const Infrastructure = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">
        🏫 Our Infrastructure
      </h2> <br />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {infrastructureItems.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-lg rounded-xl overflow-hidden transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-full max-h-[90vh] rounded-lg shadow-xl border-4 border-white"
          />
        </div>
      )}
    </div>
  );
};

export default Infrastructure;
