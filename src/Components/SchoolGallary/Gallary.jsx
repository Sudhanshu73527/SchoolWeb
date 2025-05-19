import React, { useState } from "react";

import img1 from "../../assets/hero.png";
import img2 from "../../assets/hero.png";
import img3 from "../../assets/hero.png";
import img4 from "../../assets/hero.png";
import img5 from "../../assets/hero.png";
import img6 from "../../assets/hero.png";
import img7 from "../../assets/hero.png";
import img8 from "../../assets/hero.png";
import img9 from "../../assets/hero.png";
import img10 from "../../assets/hero.png";
import img11 from "../../assets/hero.png";
import img12 from "../../assets/hero.png";
import img13 from "../../assets/hero.png";
import img14 from "../../assets/hero.png";
import img15 from "../../assets/hero.png";
import img16 from "../../assets/hero.png";
import img17 from "../../assets/hero.png";
import img18 from "../../assets/hero.png";
import img19 from "../../assets/hero.png";
import img20 from "../../assets/hero.png";

const images = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15,
  img16, img17, img18, img19, img20,
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

