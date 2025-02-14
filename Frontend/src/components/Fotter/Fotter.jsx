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
              href="https://www.google.com/maps/place/28%C2%B014'04.9%22N+77%C2%B017'21.5%22E/@28.2346822,77.2867336,17z/data=!3m1!4b1!4m4!3m3!8m2!3d28.2346822!4d77.2893085?hl=en&entry=ttu&g_ep=EgoyMDI1MDIxMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaMapMarkerAlt className="mr-2" size={17} />
              Corporate Office:- Chaprola road Near Maveshi Hospital, Prithla,
              Palwal, Haryana 121102.
            </a>
          </p>
          <p className="mb-3">
            <a
              href="https://www.google.com/maps/place/Chirag+Collection+%7C+Safety+Shoes+%7C+Uniforms/@28.3398867,77.311354,17z/data=!3m1!4b1!4m6!3m5!1s0x390cdbea3abe0d83:0xff52291e09c8e7f5!8m2!3d28.339882!4d77.3139289!16s%2Fg%2F11kzkf09km?entry=ttu&g_ep=EgoyMDI1MDIxMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaMapMarkerAlt className="mr-2 " size={17} />
              Mini Store :- Shop no. 03, MCF 89, Gali no.06, Navlu colony,
              Railway Station Road, Ballabgarh, Faridabad, 121004
            </a>
          </p>

          <p className=" mb-3">
            <a href="mailto:luffosales@gmail.com" className="flex items-center">
              <FaEnvelope className="mr-2 " size={17} />
              luffosales@gmail.com
            </a>
          </p>
          <p className=" mb-3">
            <a href="tel:+919873499708" className="flex items-center">
              <FaPhoneAlt className="mr-2" size={17} />
              +91- 9811606507
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
              href="https://www.facebook.com/share/1Bc8rFSoP6/?mibextid=wwXIfr"
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
