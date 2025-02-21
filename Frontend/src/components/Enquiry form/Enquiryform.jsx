import { useState } from "react";
import { toast } from "react-toastify";
import { FaTimes } from "react-icons/fa";
import axios from "axios";

export default function Enquiryform({ product, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    productName: product.name,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `
            ${import.meta.env.VITE_BACKEND_URL}/api/products/sendenquiry`,
        formData
      );
      toast.success(response.data.message);
    } catch (error) {
      toast.error("Error while sending email");
      console.log(error);
    }
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center mb-4 justify-between">
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-full mr-4"
              src={product.imageurl}
              alt={product.name}
            />
            <h2 className="text-2xl font-semibold text-gray-800">
              Enquire about {product.name}
            </h2>
          </div>
          <FaTimes
            onClick={onClose}
            className="text-gray-600 cursor-pointer hover:text-gray-800"
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-semibold mb-2"
            >
              Your Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full p-2 border border-gray-300 rounded-lg"
              pattern="[0-9]{10}"
              placeholder="Enter your phone number"
              required
              value={formData.phone}
              onChange={handleChange}
            />
            <small className="text-gray-500">Enter 10-digit phone number</small>
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-2 border border-gray-300 rounded-lg"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}
