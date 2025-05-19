import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const FeeStructure = () => {
  const printRef = useRef();

  const feeData = [
    { class: "Nursery", admissionFee: 5000, tuitionFee: 20000, annualFee: 3000 },
    { class: "LKG", admissionFee: 5000, tuitionFee: 21000, annualFee: 3200 },
    { class: "UKG", admissionFee: 5000, tuitionFee: 22000, annualFee: 3400 },
    { class: "Class 1", admissionFee: 6000, tuitionFee: 25000, annualFee: 3600 },
    { class: "Class 2", admissionFee: 6000, tuitionFee: 26000, annualFee: 3700 },
    { class: "Class 3", admissionFee: 6000, tuitionFee: 27000, annualFee: 3800 },
    { class: "Class 4", admissionFee: 7000, tuitionFee: 28000, annualFee: 3900 },
    { class: "Class 5", admissionFee: 7000, tuitionFee: 29000, annualFee: 4000 },
    { class: "Class 6", admissionFee: 8000, tuitionFee: 30000, annualFee: 4200 },
    { class: "Class 7", admissionFee: 8000, tuitionFee: 31000, annualFee: 4400 },
    { class: "Class 8", admissionFee: 9000, tuitionFee: 32000, annualFee: 4600 },
    { class: "Class 9", admissionFee: 10000, tuitionFee: 34000, annualFee: 4800 },
    { class: "Class 10", admissionFee: 10000, tuitionFee: 36000, annualFee: 5000 },
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

      <div ref={printRef} className="overflow-x-auto w-full max-w-6xl">
        <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
          <thead className="bg-orange-500 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Class</th>
              <th className="py-3 px-4 text-left" title="One-time admission fee">
                Admission Fee (₹)
              </th>
              <th className="py-3 px-4 text-left" title="Yearly tuition charge">
                Tuition Fee (₹)
              </th>
              <th className="py-3 px-4 text-left" title="Covers books, uniforms, facilities">
                Annual Fee (₹)
              </th>
              <th className="py-3 px-4 text-left">Total (₹)</th>
              <th className="py-3 px-4 text-left" title="Monthly payment plan">
                Monthly (₹)
              </th>
              <th className="py-3 px-4 text-left" title="Quarterly payment plan">
                Quarterly (₹)
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {feeData.map((item, index) => {
              const total = item.admissionFee + item.tuitionFee + item.annualFee;
              return (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="py-2 px-4">{item.class}</td>
                  <td className="py-2 px-4">{item.admissionFee.toLocaleString()}</td>
                  <td className="py-2 px-4">{item.tuitionFee.toLocaleString()}</td>
                  <td className="py-2 px-4">{item.annualFee.toLocaleString()}</td>
                  <td className="py-2 px-4 font-semibold">{total.toLocaleString()}</td>
                  <td className="py-2 px-4">{Math.round(total / 12).toLocaleString()}</td>
                  <td className="py-2 px-4">{Math.round(total / 4).toLocaleString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div> <br />

      {/* Moved the button to the bottom */}
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
