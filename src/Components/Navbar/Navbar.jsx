import React, { useState } from "react";
import NavbarMenu from "../../Mockdata/data";
import { MdMenu, MdClose } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import logo from "../../assets/logo2.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="my-2">
        <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center py-1 sm:py-2 px-2 sm:px-4">
          {/* Logo and School Name */}
          <div className="flex items-center gap-3">
            <Link to={"/"}>
              <img
                src={logo}
                alt="School Logo"
                className="w-6 h-6 sm:w-10 sm:h-10 lg:w-14 lg:h-14 object-contain"
              />
            </Link>
            <div className="leading-tight">
              <Link to={"/"}>
                <p className="text-xs sm:text-sm font-bold uppercase text-orange-600 whitespace-nowrap">
                  Sauhardh International School
                </p>
                <p className="text-xs sm:text-sm font-semi-bold uppercase text-black whitespace-nowrap">
                  making harinager litrate
                </p>
              </Link>
            </div>
          </div>

          {/* Desktop Menu - Horizontal */}
          <div className="hidden md:block ml-auto">
            <ul className="flex items-center gap-4 text-slate-600">
              {NavbarMenu.map((item) => (
                <li key={item.id} className="relative group">
                  <a
                    href={item.link}
                    className="inline-block py-1 px-3 hover:text-orange-500 font-semibold uppercase"
                  >
                    {item.title}
                  </a>

                  {/* Submenu */}
                  {item.submenu && (
                    <ul className="absolute left-0 top-full mt-2 w-48 bg-white border border-orange-300 rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                      {item.submenu.map((sub, index) => (
                        <li key={index}>
                          <a
                            href={sub.link}
                            className="block px-4 py-2 text-sm text-slate-700 hover:bg-orange-100 hover:text-orange-500 hover:underline uppercase"
                          >
                            {sub.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? (
              <MdClose className="text-3xl text-slate-800 hover:text-orange-500" />
            ) : (
              <MdMenu className="text-3xl text-slate-800 hover:text-orange-500" />
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
