import React, { useState } from "react";
import  NavbarMenu  from "../../Mockdata/data";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import logo from "../../assets/logo2.png"; // <-- Update this path as per your project structure

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-orange-100 shadow-md my-10">
        <div className="container mx-auto px-4 flex justify-between items-center py-6">
          {/* Logo and School Name */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="School Logo"
              className="w-10 h-10 sm:w-20 sm:h-20 md:w-25 md:h-25 object-contain"
            />
            <div className="leading-tight">
              <p className="text-base sm:text-lg font-bold uppercase text-orange-600 whitespace-nowrap">
                Sauhardh International School
              </p>
              <p className="text-sm sm:text-base text-slate-500 font-semibold tracking-wide">
                Making Harinager Literate
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block ml-auto">
            <ul className="flex items-center gap-4 text-slate-600 relative">
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
                    <ul className="absolute left-0 top-full mt-2 w-50 bg-white border border-orange-300 rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                      {item.submenu.map((sub, index) => (
                        <li key={index}>
                          <a
                            href={sub.link}
                            className="block px-8 py-10 text-sm text-slate-700 hover:bg-orange-100 hover:text-orange-500 hover:underline uppercase"
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
