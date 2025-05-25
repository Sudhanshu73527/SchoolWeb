import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <><br />
    <footer className="bg-slate-900 text-white pt-10 px-4 mb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-gray-600">
        
        {/* Logo and About */}
        <div>
          <h2 className="text-2xl font-semi-bold text-orange-500 mb-3">Sauhardh International School</h2>
          <p className="text-sm text-gray-300">
            Empowering students to become leaders of tomorrow through academic excellence and holistic development.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-orange-400">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about/school" className="hover:underline">About Us</a></li>
            <li><a href="/admission/form" className="hover:underline">Admissions</a></li>
            <li><a href="about-gallery" className="hover:underline">Gallery</a></li>
            <li><a href="/contact/Help" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-orange-400">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2"><FaMapMarkerAlt className="mt-1" />Harinager, Belaspur-Bihar</li>
            <li className="flex items-center gap-2"><FaPhoneAlt /> +91-7739692245</li>
            <li className="flex items-center gap-2"><FaEnvelope />infosauhardhedu@gmail.com</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-orange-400">Follow Us</h3>
          <div className="flex space-x-4 text-gray-300 gap-2">
            <a href="#"><FaFacebookF className="hover:text-blue-400" /></a>
            <a href="#"><FaTwitter className="hover:text-slate-700" /></a>
            <a href="#"><FaInstagram className="hover:text-red-600" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-400 py-4">
        &copy; {new Date().getFullYear()} Sauhardh International School. All rights reserved.
      </div>
    </footer>
    </>
  );
};

export default Footer;
