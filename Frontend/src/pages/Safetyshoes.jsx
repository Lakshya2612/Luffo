import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader/Loader.jsx";
import { Helmet } from "react-helmet-async";

export default function Safetyshoes() {
  const [shoeData, setShoeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchShoeData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/getshoes`
        );
        setShoeData(response.data.data);
      } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchShoeData();
  }, []);

  const handleviewmore = (_id) => {
    navigate(`/products/safetyshoes/${_id}`);
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
          content="Discover our wide range of industrial safety shoes, gloves, helmets, and more. Browse top-selling products like LUFFO Safety Shoes with great discounts and top quality."
        />
        <meta
          name="keywords"
          content="industrial safety shoes, luffo, safety footwear, luffo cater, luffo durby, luffo hyper, luffo durby dd,luffo dyke, luffo f ld02  "
        />
      </Helmet>
      <h1 className="text-4xl font-semibold text-gray-800 mb-8 sm:text-3xl">
        Safety Shoes
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {shoeData && shoeData.length > 0 ? (
          shoeData.map((shoe) => (
            <div
              key={shoe._id}
              className="w-64 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4"
            >
              <img
                src={shoe.image}
                alt={shoe.name}
                className="w-auto h-48 object-cover rounded-md mb-4 m-auto"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {shoe.name}
              </h2>

              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-700">MRP:</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-red-500">
                    {shoe.sellingprice}
                  </span>
                  <span className="text-sm line-through text-gray-500">
                    {shoe.mrp}
                  </span>
                  {shoe.discount && (
                    <span className="text-sm text-green-500 font-semibold">
                      {shoe.discount}
                    </span>
                  )}
                </div>
              </div>

              <button
                className="text-blue-500 mt-4"
                onClick={() => handleviewmore(shoe._id)}
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
