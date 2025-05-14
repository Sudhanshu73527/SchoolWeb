import React, { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Submenus
const aboutSubmenu = ["About School", "Infrastructure", "Transport", "Faculty","Acadmic Program"];
const campusSubmenu = ["School Gallery", "Class Room", "School Bus", "Faculty Gallery"];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileCampusOpen, setMobileCampusOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-20 transition-all duration-500 ${
        scrolled ? "bg-orange-400 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-white whitespace-nowrap">
              Sohardh International School
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-white font-medium gap-10 relative">
            {["Home", "About Us", "Contact Us", "Register", "Campus"].map((item) => (
              <div key={item} className="relative group">
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                  className="px-4 py-2 rounded-md transition-all duration-300 flex items-center gap-1"
                >
                  {item}
                  {(item === "About Us" || item === "Campus") && <ChevronDown size={16} />}
                </a>

                {/* Desktop Dropdown */}
                {(item === "About Us" || item === "Campus") && (
                  <div className="absolute left-0 mt-2 w-64 bg-slate-500 text-white rounded shadow-lg z-20 flex flex-col transform scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-1 transition-all duration-300 ease-in-out">
                    {(item === "About Us" ? aboutSubmenu : campusSubmenu).map((subItem) => (
                      <a
                        key={subItem}
                        href={`#${subItem.toLowerCase().replace(/\s+/g, "")}`}
                        className="px-5 py-3 text-sm font-semi-bold border-b border-gray-700 hover:bg-orange-500 hover:text-black"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="text-white focus:outline-none transition-transform duration-300"
            >
              {mobileMenuOpen ? (
                <motion.div initial={{ rotate: 0 }} animate={{ rotate: 90 }}>
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div initial={{ rotate: -90 }} animate={{ rotate: 0 }}>
                  <Menu size={24} />
                </motion.div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-orange-300 border-t border-slate-300 px-4 py-4 shadow-inner flex flex-col space-y-2"
          >
            {["Home", "About Us", "Contact Us", "Register", "Campus"].map((item) => (
              <div key={item} className="flex flex-col">
                <button
                  onClick={() => {
                    if (item === "About Us") {
                      setMobileAboutOpen((prev) => !prev);
                    } else if (item === "Campus") {
                      setMobileCampusOpen((prev) => !prev);
                    } else {
                      setMobileMenuOpen(false);
                    }
                  }}
                  className="text-slate-800 font-semi-bold text-right px-4 py-2 rounded-md hover:bg-[#D2B48C] transition-all duration-300 flex justify-between items-center"
                >
                  {item}
                  {(item === "About Us" || item === "Campus") && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        (item === "About Us" && mobileAboutOpen) ||
                        (item === "Campus" && mobileCampusOpen)
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  )}
                </button>

                {/* Mobile Dropdown */}
                {item === "About Us" && mobileAboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 mt-2 flex flex-col bg-slate-500 text-white shadow-lg space-y-2 p-2"
                  >
                    {aboutSubmenu.map((subItem) => (
                      <motion.a
                        key={subItem}
                        href={`#${subItem.toLowerCase().replace(/\s+/g, "")}`}
                        whileHover={{ scale: 1.02, x: 4 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="px-4 py-2 text-sm font-semi-bold bg-gray-500 hover:bg-orange-500 hover:text-black transition-colors duration-300"
                      >
                        {subItem}
                      </motion.a>
                    ))}
                  </motion.div>
                )}

                {item === "Campus" && mobileCampusOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 mt-2 flex flex-col bg-slate-500 text-white rounded-lg shadow-lg space-y-2 p-2"
                  >
                    {campusSubmenu.map((subItem) => (
                      <motion.a
                        key={subItem}
                        href={`#${subItem.toLowerCase().replace(/\s+/g, "")}`}
                        whileHover={{ scale: 1.02, x: 4 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="px-4 py-2 text-sm font-semibold bg-gray-700 rounded hover:bg-gray-600 transition-colors duration-300"
                      >
                        {subItem}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
