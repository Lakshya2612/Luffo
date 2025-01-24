import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";
import { FaTshirt, FaShieldAlt } from "react-icons/fa";
import { GiBoots } from "react-icons/gi";

export default function Products() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <Helmet>
        <title>
          Our Products - Industrial Safety Shoes, Gloves, Helmets & More
        </title>
        <meta
          name="description"
          content="Browse our range of industrial safety products including safety shoes, helmets, gloves, gumboots, safety harnesses, and other protective gear."
        />
        <meta
          name="keywords"
          content="luffo, industrial safety shoes, safety gloves, helmets, gumboots, safety harnesses, safety helmets, reflective tape, industrial equipment"
        />
      </Helmet>
      <div className="flex justify-center items-center mb-4">
        <hr className="border-t-2 border-[#13357c] w-20 sm:w-12" />
        <h1 className="text-[#13357c] text-4xl font-semibold mb-2 mx-2 text-center sm:text-xl">
          Our Products
        </h1>
        <hr className=" border-t-2 border-[#13357c] w-20 sm:w-12" />
      </div>
      <p className="text-lg text-gray-600 mt-2 text-center mb-4">
        Explore a wide range of industrial safety products:
      </p>
      <div className="flex flex-wrap justify-center mb-12 gap-6 sm:flex-col sm:gap-4">
        <NavLink
          to="/products/safetyshoes"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-blue-800 text-xl font-medium"
              : "text-xl font-medium text-blue-600 hover:text-blue-800 transition duration-200"
          }
        >
          <div className="flex items-center gap-2">
            <GiBoots />
            Safety Shoes
          </div>
        </NavLink>
        <NavLink
          to="/products/ppe"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-blue-800 text-xl font-medium"
              : "text-xl font-medium text-blue-600 hover:text-blue-800 transition duration-200"
          }
        >
          <div className="flex items-center gap-2">
            <FaShieldAlt />
            PPE (Personal Protective Equipment)
          </div>
        </NavLink>
        <NavLink
          to="/products/uniforms"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-blue-800 text-xl font-medium"
              : "text-xl font-medium text-blue-600 hover:text-blue-800 transition duration-200"
          }
        >
          <div className="flex items-center gap-2">
            <FaTshirt />
            Customize Uniforms
          </div>
        </NavLink>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <Outlet />
      </div>
    </div>
  );
}
