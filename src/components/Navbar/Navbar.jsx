import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Luffo from "../../assets/Luffo.webp";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="h-20 px-4 sticky top-0 bg-white shadow-md flex items-center justify-between z-50">
      <NavLink to="/">
        <div className="flex items-center space-x-2 px-4">
          <img src={Luffo} alt="Logo" className="h-16 w-12" />
          <h1 className="text-4xl font-semibold text-[#13357c]">LUFFO</h1>
        </div>
      </NavLink>

      <div className="sm:hidden">
        <ul className="flex gap-4 text-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-800 hover:text-blue-500 transition duration-200"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-800 hover:text-blue-500 transition duration-200"
              }
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-800 hover:text-blue-500 transition duration-200"
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactus"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-800 hover:text-blue-500 transition duration-200"
              }
            >
              Contact us
            </NavLink>
          </li>
        </ul>
      </div>

      <button
        className="md:hidden"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <div
        className={`absolute flex flex-col bg-white w-full left-0 top-20 py-4 md:hidden 
    transition-all duration-300 transform ease-in-out
    ${isMenuOpen ? "h-48 opacity-100" : "h-0 opacity-0 pointer-events-none"}`}
      >
        <ul className="flex flex-col gap-4 text-lg items-center ">
          <li>
            <NavLink
              to="/"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-800 hover:text-blue-500 transition duration-200"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-800 hover:text-blue-500 transition duration-200"
              }
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-800 hover:text-blue-500 transition duration-200"
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactus"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-800 hover:text-blue-500 transition duration-200"
              }
            >
              Contact us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
