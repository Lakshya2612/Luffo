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
        <div className="flex items-center space-x-4 px-4">
          <img src={Luffo} alt="Logo" className="h-16 w-auto" />
          <h1 className="text-4xl font-semibold text-[#13357c]">LUFFO</h1>
        </div>
      </NavLink>
      <div>
        <button
          className="hidden sm:block"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div>
        <ul className="flex space-x-4 items-center px-4">
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
              About US
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
              Contactus
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
