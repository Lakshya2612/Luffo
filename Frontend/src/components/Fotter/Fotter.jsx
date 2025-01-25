import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-[#14141e] text-white p-10 ">
      <h1 className="text-center text-3xl font-semibold tracking-wide text-shadow-md mb-4 sm:text-2xl sm:text-left">
        CHIRAG COLLECTION
      </h1>
      <div className="flex justify-between mb-4 sm:flex-col">
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">Get In Touch</h1>
          <p className="mb-3">
            <a
              href="https://www.google.com/maps?q=Chaprola+road+Near+Maveshi+Hospital,+Prithla,+Palwal,+Haryana+121102"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaMapMarkerAlt className="mr-2" />
              Chaprola road Near Maveshi Hospital, Prithla, Palwal, Haryana
              121102
            </a>
          </p>
          <p className=" mb-3">
            <a href="mailto:info@luffo.in" className="flex items-center">
              <FaEnvelope className="mr-2" />
              info@luffo.in
            </a>
          </p>
          <p className=" mb-3">
            <a href="tel:+919873499708" className="flex items-center">
              <FaPhoneAlt className="mr-2" />
              +91- 9873499708
            </a>
          </p>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4 text-center sm:text-left">
            Quick Links
          </h1>
          <div className="flex justify-center sm:justify-start mb-2">
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="text-white hover:text-gray-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contactus"
                  className="text-white hover:text-gray-400"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white hover:text-gray-400">
                  Products
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4 text-center sm:text-left">
            Follow us
          </h1>
          <div className="flex justify-center space-x-4 sm:justify-start">
            <a
              href="https://www.facebook.com/luffo.chiragcollection"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com/Luffo65350"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Twitter page"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com/luffo.chiragcollection"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/chirag-collection-6004742b3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our LinkedIn page"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center py-4 border-t border-gray-700">
        <p>&copy; Chirag collection. All Rights Reserved.</p>
        <a
          href="https://www.linkedin.com/in/lakshya2612"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="mt-2 text-sm">Designed and developed by Lakshya</p>
        </a>
      </div>
    </div>
  );
}
