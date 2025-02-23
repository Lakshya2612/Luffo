import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader/Loader.jsx";
import { Helmet } from "react-helmet-async";
import Productcard from "../components/Productcard/Productcard.jsx";

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
          content="Discover our wide range of industrial safety shoes, ppe, uniforms and more. Browse top-selling products like LUFFO Safety Shoes with great discounts and top quality."
        />
        <meta
          name="keywords"
          content="industrial uniforms, customizable uniforms, luffo"
        />
      </Helmet>
      <h1 className="text-4xl font-semibold text-gray-800 mb-8 sm:text-3xl">
        Industrial Uniforms
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {uniformData && uniformData.length > 0 ? (
          uniformData.map((uniform) => (
            <Productcard
              key={uniform._id}
              product={uniform}
              onViewMore={handleviewmore}
            />
          ))
        ) : (
          <h1>No data found</h1>
        )}
      </div>
    </div>
  );
}
