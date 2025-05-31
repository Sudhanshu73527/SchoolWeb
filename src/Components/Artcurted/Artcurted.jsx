import React from "react";
import art1 from "../../assets/art.jpeg";
// import art2 from "../../assets/art2.jpg";
// import art3 from "../../assets/art3.jpg";

const artworks = [
  { id: 1, title: "Sunset Harmony", image: art1, description: "An expressive blend of colors representing peace." },
  { id: 2, title: "Imagination Flight", image: art1, description: "Depicting a child's creative dreams." },
  { id: 3, title: "Nature’s Rhythm", image: art1, description: "An abstract take on natural balance." },
];

const ArtCurated = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-5xl w-full text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          🎨 Art Curated by Sauhardh International School
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover a thoughtfully curated selection of artworks that reflect creativity, emotion, and vision.
          Each piece is handpicked to inspire and spark imagination among students and visitors.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {artworks.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full max-w-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtCurated;
