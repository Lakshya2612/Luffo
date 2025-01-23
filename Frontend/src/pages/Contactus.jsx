import { Helmet } from "react-helmet-async";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/sendmail",
        formData
      );
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };
  return (
    <div className="p-8">
      <Helmet>
        <title>Contact Us - Get in Touch with Our Safety Gear Experts</title>
        <meta
          name="description"
          content="Reach out to us for inquiries, product details, or support regarding our industrial safety products. We're here to help you protect your workforce."
        />
        <meta
          name="keywords"
          content="luffo,contact us, customer support, safety gear inquiries, industrial safety equipment, safety products contact"
        />
      </Helmet>
      <div className="flex justify-center items-center mb-4">
        <hr className="border-t-2 border-[#13357c] w-20 sm:w-12" />
        <h1 className="text-[#13357c] text-2xl font-semibold mb-2 mx-2 text-center sm:text-xl">
          Contact Us
        </h1>
        <hr className=" border-t-2 border-[#13357c] w-20 sm:w-12" />
      </div>
      <h1 className="text-4xl font-semibold text-gray-800 mb-4 text-center sm:text-2xl">
        Contact For Any Query
      </h1>
      <div className="rounded-lg shadow-lg bg-white p-8 sm:p-6">
        <h1 className="font-semibold text-2xl">Send us a message</h1>
        <p className="text-base text-gray-700 mb-2 text-justify">
          Explore durable safety shoes, PPE and reliable industrial uniforms
          designed for protection and comfort. Contact us for inquiries, custom
          orders, or assistance. Your safety at work is our priority.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="flex-1">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#13357c]"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="flex-1">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#13357c]"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="flex-1">
              <label
                htmlFor="mobile"
                className="block text-gray-700 font-semibold"
              >
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#13357c]"
                placeholder="Your Mobile Number"
                required
              />
            </div>

            <div className="flex-1">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#13357c]"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className=" px-6 py-2 text-white bg-[#13357c] rounded-md hover:bg-[#0f2954] focus:outline-none focus:ring-2 focus:ring-[#13357c]"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
