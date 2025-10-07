import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaPhoneVolume } from "react-icons/fa";
import logo from "../assets/logo_blp.png";

const navLinks = [
  { name: "Strona główna", path: "/" },
  { name: "Dla przemysłu", path: "/for-industry" },
  { name: "Dla domu", path: "/for-house" },
  { name: "Dotacje", path: "/dotation" },
  { name: "Realizacje", path: "/realization" },
  { name: "Kontakt", path: "/contact" },
];

const MainNavbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgOpacity = Math.min(scrollY / 100, 1); // od 0 do 1

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-colors duration-300"
      style={{ backgroundColor: `rgba(255, 255, 255, ${bgOpacity})` }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        {/* Logo */}
        <img
          src={logo}
          alt="LogoBLP"
          className="w-[150px] lg:w-[220px] transition-all duration-300"
        />

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8 list-none text-gray-800 font-medium">
          {navLinks.map((link) => (
            <li key={link.path} className="relative">
              <NavLink
                to={link.path}
                end
                className="relative pb-1 transition-all duration-300"
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{link.name}</span>
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] w-full bg-[#7ed957] transition-all duration-300 transform origin-left ${
                        isActive
                          ? "scale-x-100 opacity-100"
                          : "scale-x-0 opacity-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Przycisk Zadzwoń */}
        <a href="tel:+48123073135" className="hidden lg:block">
          <button className="flex items-center gap-2 bg-[#7ed957] rounded-2xl px-4 py-2 text-white font-bold hover:bg-[#6dc94a] transition transform active:scale-95 duration-150 shadow-sm">
            <FaPhoneVolume className="text-xl" /> Zadzwoń do nas
          </button>
        </a>

        {/* Hamburger (mobile) */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <HiX className="w-8 h-8 text-gray-800" />
            ) : (
              <HiMenu className="w-8 h-8 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 bg-white text-gray-800 p-4 shadow-lg font-medium">
          {navLinks.map((link) => (
            <li key={link.path} className="relative">
              <NavLink
                to={link.path}
                end
                onClick={() => setMenuOpen(false)}
                className="block pb-1 transition-all duration-300"
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{link.name}</span>
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] w-full bg-[#7ed957] transition-all duration-300 transform origin-left ${
                        isActive
                          ? "scale-x-100 opacity-100"
                          : "scale-x-0 opacity-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default MainNavbar;
