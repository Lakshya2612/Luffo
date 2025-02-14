import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import EnquiryForm from "../components/Enquiry form/Enquiryform";

export default function ProductDetail() {
  const [productData, setProductData] = useState({});
  const [showForm, setShowForm] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/products/getproductdetail/${id}`
        );
        setProductData(response.data.data);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    fetchProductData();
  }, [id]);

  const handleEnquireClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  if (!productData || !productData.name) {
    return (
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-semibold text-gray-800">
          No Product Found
        </h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <img
            className="w-full h-auto rounded-lg shadow-lg"
            src={productData.image}
            alt={productData.name}
          />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-semibold text-gray-800 mb-4">
            {productData.name}
          </h1>
          <p className="text-gray-600 mb-6">{productData.description}</p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Available Sizes
          </h2>
          {Array.isArray(productData.sizes) && productData.sizes.length > 0 ? (
            <ul className="list-disc pl-6 space-y-2">
              {productData.sizes.map((size, index) => (
                <li key={index} className="text-gray-600">
                  {size}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No sizes available</p>
          )}

          <div className="mt-8">
            <button
              onClick={handleEnquireClick}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>
      {showForm && (
        <EnquiryForm product={productData} onClose={handleCloseForm} />
      )}
    </div>
  );
}
