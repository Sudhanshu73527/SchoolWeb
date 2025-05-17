import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { NavbarMenu } from "../../Mockdata/data";

const ResponsiveMenu = ({ open }) => {
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleSubmenu = (id) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semi-bold uppercase bg-orange-400 text-white py-10 m-6 rounded-3xl overflow-y-auto max-h-[80vh]">
            <ul className="flex flex-col justify-center items-center gap-4 px-4">
              {NavbarMenu.map((item) => (
                <li key={item.id} className="w-full text-center">
                  <div
                    className="hover:text-black cursor-pointer"
                    onClick={() =>
                      item.submenu ? toggleSubmenu(item.id) : null
                    }
                  >
                    <a href={item.link}>{item.title}</a>
                    {item.submenu && (
                      <span className="ml-2 text-white text-lg">
                        {openSubmenus[item.id] ? "-" :  "+"}
                      </span>
                    )}
                  </div>

                  {/* Submenu */}
                  <AnimatePresence>
                    {item.submenu && openSubmenus[item.id] && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-base normal-case mt-2 text-orange-100 space-y-2"
                      >
                        {item.submenu.map((sub, index) => (
                          <li key={index}>
                            <a
                              href={sub.link}
                              className="block px-2 py-1 hover:text-black transition"
                            >
                              {sub.title}
                            </a>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
