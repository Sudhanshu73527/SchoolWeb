import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const FeeStructure = () => {
  const printRef = useRef();

  const feeData = [
    { class: "Nursery", admissionFee: 2000, tuitionFee: 350 },
    { class: "LKG", admissionFee: 2000, tuitionFee: 350 },
    { class: "UKG", admissionFee: 2000, tuitionFee: 350 },
    { class: "Class 1", admissionFee: 2000, tuitionFee: 400 },
    { class: "Class 2", admissionFee: 2000, tuitionFee: 400 },
    { class: "Class 3", admissionFee: 2000, tuitionFee: 400 },
    { class: "Class 4", admissionFee: 2000, tuitionFee: 400 },
    { class: "Class 5", admissionFee: 2000, tuitionFee: 400 },
    { class: "Class 6", admissionFee: 2000, tuitionFee: 400 },
    { class: "Class 7", admissionFee: 2000, tuitionFee: 400 },
    { class: "Class 8", admissionFee: 2000, tuitionFee: 400 },
    { class: "Class 9", admissionFee: 2000, tuitionFee: 400 },
    { class: "Class 10", admissionFee: 2000, tuitionFee: 400 },
  ];

  const handleDownloadPDF = () => {
    const input = printRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      pdf.save("fee-structure.pdf");
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">
        📚 School Fee Structure (2025–2026)
      </h2>

      <div ref={printRef} className="overflow-x-auto w-full max-w-4xl">
        <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
          <thead className="bg-orange-500 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Class</th>
              <th className="py-3 px-4 text-left">Admission Fee (₹)</th>
              <th className="py-3 px-4 text-left">Tuition Fee (₹)</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {feeData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                <td className="py-2 px-4">{item.class}</td>
                <td className="py-2 px-4">{item.admissionFee.toLocaleString()}</td>
                <td className="py-2 px-4">{item.tuitionFee.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        onClick={handleDownloadPDF}
        className="mt-8 bg-orange-500 text-white px-6 py-2 rounded shadow hover:bg-orange-600"
      >
        📥 Download as PDF
      </button>
    </div>
  );
};

export default FeeStructure;
