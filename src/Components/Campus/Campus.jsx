// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import gallary_1 from "../../assets/gallery-1.png";
// import gallary_2 from "../../assets/gallery-2.png";
// import gallary_3 from "../../assets/gallery-3.png";
// import gallary_4 from "../../assets/gallery-4.png";
// import { FaArrowDown } from "react-icons/fa";

// const images = [gallary_1, gallary_2, gallary_3, gallary_4];

// const Campus = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   return (
//     <section className="py-16 px-4 bg-white min-h-screen flex flex-col items-center justify-center" id="campus">
//       {/* Section Header */}
//       <div className="max-w-7xl mx-auto text-center space-y-6">
//         <motion.h3
//           className="text-slate-500 text-sm font-semibold uppercase tracking-wider"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//         >
//           Gallery
//         </motion.h3>
//         <motion.h1
//           className="text-3xl md:text-5xl font-extrabold text-slate-500"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Campus Photos
//         </motion.h1>
//       </div>

//       {/* Gallery Grid */}
//       <motion.div
//         className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10"
//         initial="hidden"
//         whileInView="visible"
//         variants={{
//           visible: {
//             transition: {
//               staggerChildren: 0.2,
//             },
//           },
//         }}
//       >
//         {images.map((img, index) => (
//           <motion.div
//             key={index}
//             className="overflow-hidden rounded-xl shadow-md cursor-pointer"
//             whileHover={{ scale: 1.05 }}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             onClick={() => setSelectedImage(img)}
//           >
//             <img
//               src={img}
//               alt={`Campus ${index + 1}`}
//               className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105 rounded"
//             />
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Image Pop-up Modal */}
//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div
//             className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedImage(null)}
//           >
//             <motion.img
//               src={selectedImage}
//               alt="Enlarged"
//               className="max-w-full w-full max-h-[90vh] rounded-lg shadow-lg"
//               initial={{ scale: 0.6, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.6, opacity: 0 }}
//               transition={{ duration: 0.4 }}
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default Campus;
