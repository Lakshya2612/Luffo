import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader/Loader.jsx";
import { Helmet } from "react-helmet-async";

export default function Safetyshoes() {
  const [uniformData, setuniformData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchuniformData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/getuniforms`
        );
        setuniformData(response.data.data);
      } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchuniformData();
  }, []);

  const handleviewmore = (_id) => {
    navigate(`/products/uniforms/${_id}`);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="text-center">
      <Helmet>
        <title>
          Our Products - Industrial Safety Shoes, Gloves, Helmets & More
        </title>
        <meta
          name="description"
          content="Discover our wide range of industrial safety shoes, ppe and uniforms and more. Browse top-selling products like LUFFO Safety Shoes with great discounts and top quality."
        />
        <meta
          name="keywords"
          content="industrial uniforms, customizable uniforms, luffo "
        />
      </Helmet>
      <h1 className="text-4xl font-semibold text-gray-800 mb-8 sm:text-3xl">
        Industrial Uniforms
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {uniformData && uniformData.length > 0 ? (
          uniformData.map((uniform) => (
            <div
              key={uniform._id}
              className="w-64 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-2"
            >
              <img
                src={uniform.imageurl}
                alt={uniform.name}
                className="w-auto h-48 object-cover rounded-md mb-4 m-auto"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {uniform.name}
              </h2>

              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-700">MRP:</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-red-500">
                    {uniform.sellingprice}
                  </span>
                  <span className="text-sm line-through text-gray-500">
                    {uniform.mrp}
                  </span>
                  {uniform.discount && (
                    <span className="text-sm text-green-500 font-semibold">
                      {uniform.discount}
                    </span>
                  )}
                </div>
              </div>

              <button
                className="text-blue-500 mt-4"
                onClick={() => handleviewmore(uniform._id)}
              >
                View More
              </button>
            </div>
          ))
        ) : (
          <h1>No data found</h1>
        )}
      </div>
    </div>
  );
}
