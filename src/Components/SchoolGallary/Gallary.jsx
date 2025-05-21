import React, { useState } from "react";

import img1 from "../../assets/anual1.jpeg";
import img2 from "../../assets/anual2.jpeg";
import img3 from "../../assets/anual3.jpeg";
import img4 from "../../assets/anual4.jpeg";
import img5 from "../../assets/anual5.jpeg";
import img6 from "../../assets/anual6.jpeg";
import img7 from "../../assets/anual7.jpeg";
import img8 from "../../assets/anual8.jpeg";
import img9 from "../../assets/anual9.jpeg";
import img10 from "../../assets/anual10.jpeg";
import img11 from "../../assets/anual11.jpeg";
import img12 from "../../assets/anual12.jpeg";
import img13 from "../../assets/sg7.jpeg";
import img14 from "../../assets/sg8.jpeg";
import img15 from "../../assets/sg9.jpeg";
import img16 from "../../assets/sg12.jpeg";
import img17 from "../../assets/sg4.jpeg";
import img18 from "../../assets/sg5.jpeg";
import img19 from "../../assets/sg6.jpeg";
import img20 from "../../assets/sg10.jpeg";
import img21 from "../../assets/bg6.jpeg";
import img22 from "../../assets/bg2.jpeg";
import img23 from "../../assets/class1.jpeg";
import img24 from "../../assets/school1.jpeg";


const images = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15,
  img16, img17, img18, img19, img20,img21,img22,
  img23,img24
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-white py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-orange-500">School Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300 border border-orange-200 cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`School ${index + 1}`}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Enlarged school"
            className="max-w-full max-h-full rounded-lg shadow-xl"
          />
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;

