import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

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

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 text-white font-medium gap-10">
            {["Home", "About Us", "Contact Us", "Register", "Campus"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                  className="px-4 py-2 rounded-md hover:bg-[#D2B48C] hover:text-white transition-all duration-300"
                >
                  {item}
                </a>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
            className="md:hidden bg-orange-300 border-t border-slate-300 px-4 py-4 shadow-inner flex flex-col space-y-4 gap-1"
          >
            {["Home", "About Us", "Contact Us", "Register", "Campus"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                  className="text-slate-600 px-4 py-2 rounded-md hover:bg-[#D2B48C] transition-all duration-300"
                >
                  {item}
                </a>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
