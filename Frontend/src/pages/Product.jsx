import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Product() {
  return (
    <div className="p-8">
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
        <h1 className="text-[#13357c] text-2xl font-semibold mb-2 mx-2 text-center sm:text-xl">
          OUR PRODUCTS
        </h1>
        <hr className="border-t-2 border-[#13357c] w-20 sm:w-12" />
      </div>

      <div className="my-8">
        <h2 className="text-xl font-semibold text-center">
          High-Quality PPE for Every Industry
        </h2>
        <p className="text-center text-gray-600 mt-4">
          Explore our extensive collection of personal protective equipment
          designed for comfort, durability, and safety.
        </p>
      </div>

      <div className="text-center border p-4 rounded-lg shadow-lg">
        <img
          src="/images/safety-shoes.jpg"
          alt="Safety Shoes"
          className="w-full h-32 object-cover rounded-md"
        />
        <h3 className="mt-4 text-lg font-semibold">Safety Shoes</h3>
        <p className="text-sm text-gray-500">
          Durable and comfortable industrial safety shoes for all-day
          protection.
        </p>
        <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded">
          Learn More
        </button>
      </div>

      <div className="my-8 text-center">
        <p className="text-gray-700">
          Looking for something specific or need help choosing the right gear?
          <Link to="/contactus" className="text-blue-500 mx-2">
            Contact us
          </Link>
          for assistance.
        </p>
      </div>
    </div>
  );
}
