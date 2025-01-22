import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Luffo from "../../assets/Luffo.png";

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
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div>
        <ul className="flex space-x-4 items-center px-4">
          <li>
            <NavLink to="/" activeclassname="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutus" activeclassname="active">
              About US
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" activeclassname="active">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/contactus" activeclassname="active">
              Contactus
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
