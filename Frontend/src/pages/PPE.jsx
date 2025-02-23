import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader/Loader.jsx";
import { Helmet } from "react-helmet-async";
import Productcard from "../components/Productcard/Productcard.jsx";

export default function Safetyshoes() {
  const [ppeData, setppeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchppeData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/getppe`
        );
        setppeData(response.data.data);
      } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchppeData();
  }, []);

  const handleviewmore = (_id) => {
    navigate(`/products/ppe/${_id}`);
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
          content="industrial safety shoes, ppe, personal protective equipment, industrial gear"
        />
      </Helmet>
      <h1 className="text-4xl font-semibold text-gray-800 mb-8 sm:text-3xl">
        Personal Protective Equipment (PPE)
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {ppeData && ppeData.length > 0 ? (
          ppeData.map((ppe) => (
            <Productcard
              key={ppe._id}
              product={ppe}
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
