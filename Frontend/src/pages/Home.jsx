import HomepageImage from "../assets/home.png";
import Menwearingequipment from "../assets/menequipments.svg";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Luffo</title>
        <meta
          name="description"
          content="We manufacture and supply a wide range of industrial safety equipment and protective gear including safety shoes, gloves, helmets, safety harnesses, reflective tapes, safety goggles, PVC gumboots, safety nets, and more."
        />
        <meta
          name="keywords"
          content="luffo,safety shoes, work shoes, safety gloves, protective glasses, safety uniforms, baton light, PVC gumboots, reflective tape, retro tape, full body harness, safety helmet, caution tape, floor marking tape, industrial safety shoes, HDPE barricade, safety net, coverall, Dangri, boiler suit, electrical gloves, insulated gloves, traffic cone, industrial safety equipment, PU shoes, PVC shoes"
        />
      </Helmet>
      <div
        className="relative w-full h-[28rem] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${HomepageImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold mb-4 sm:text-3xl">
            Step into Safety: Gear Up with Confidence!
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap sm:flex-col">
        <div className="flex-1 flex items-center justify-center">
          <img
            src={Menwearingequipment}
            alt="allsafetyequipments"
            className="w-96 h-96"
          />
        </div>
        <div className="flex-1 p-8 sm:p-6">
          <h1 className="text-[#13357c] text-2xl font-semibold mb-2 sm:text-xl">
            WHY LUFFO
          </h1>
          <h1 className="text-3xl font-bold text-gray-800 mb-4 sm:text-2xl">
            Elevating Safety Standards in Footwear, PPE and Industrial Uniforms
          </h1>
          <p className="text-base text-gray-700 mb-2 text-justify">
            Welcome to Luffo, your trusted partner in enhancing workplace safety
            through cutting-edge safety shoes and industry uniforms. At Luffo,
            we understand the critical importance of providing reliable and
            durable protective gear for workers across various industries. Our
            commitment lies in creating innovative solutions that not only
            prioritize safety but also ensure comfort, style, and functionality.
          </p>
          <p className="text-base text-gray-700 mb-2 text-justify">
            Luffo stands as a beacon of excellence in the realm of safety shoes
            and industry uniforms. Our unwavering commitment to safety,
            durability, comfort, customization, compliance, and sustainability
            sets us apart as the preferred choice for businesses aiming to
            elevate workplace safety standards. Trust Luffo to be your partner
            in creating a safer and more secure work environment for your valued
            workforce.
          </p>
          <div className="flex flex-wrap gap-x-12 gap-y-2">
            <div>
              <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                <li>Affordable Solutions for Industry</li>
                <li>Protecting Workers from Accidents</li>
                <li>Quality Assurance </li>
              </ul>
            </div>
            <div>
              <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                <li>Innovation for Safety</li>
                <li>Community Engagement</li>
                <li>Environmental Responsibility</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* partnership */}
      <div className="bg-[#13357c] text-white py-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2 sm:text-2xl">
            Exclusive Partnership
          </h2>
          <p className="text-lg mb-4 text-justify px-6 sm:text-base">
            We are proud to announce that
            <span className="font-bold"> Chirag Collection</span> is the
            exclusive partner of Luffo in India. Together, we are committed to
            providing top-quality safety solutions across the country.
          </p>
        </div>
      </div>
      {/* service available */}
      <div className="p-8 sm:p-6">
        <h1 className="text-[#13357c] text-3xl font-semibold mb-6 sm:text-2xl text-center tracking-wide">
          WHERE OUR SERVICES ARE AVAILABLE ACROSS INDIA
        </h1>
        <p className="text-base text-gray-700 text-justify mb-6 leading-relaxed">
          Luffo, in partnership with Chirag Collection, is proud to offer
          top-quality safety equipment and uniforms across all regions of India.
          From North to South, East to West, our services reach every corner of
          the country, ensuring that businesses and workers nationwide have
          access to the best in safety solutions.
        </p>

        <p className="text-base text-gray-700 text-justify mb-6 leading-relaxed">
          Whether you&apos;re in a major city or a remote area, you can count on
          Luffo and Chirag Collection to provide reliable, durable, and
          customized safety gear and uniforms tailored to your needs. Stay tuned
          as we continue expanding our reach, with new service areas being added
          regularly.
        </p>

        <div className="text-center mt-6">
          <span className="text-lg font-semibold text-[#13357c]">
            Proudly Serving All of India!
          </span>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center mb-4">
          <hr className="border-t-2 border-[#13357c] w-20 sm:w-12" />
          <h1 className="text-[#13357c] text-2xl font-semibold mb-2 mx-2 text-center sm:text-xl">
            OUR CLIENTS
          </h1>
          <hr className=" border-t-2 border-[#13357c] w-20 sm:w-12" />
        </div>

        {/* gonna comple this later */}
      </div>
      <div className="p-8 sm:p-6">
        <div className="flex justify-center items-center mb-4">
          <hr className="border-t-2 border-[#13357c] w-20 sm:w-12" />
          <h1 className="text-[#13357c] text-2xl font-semibold mb-2 mx-2 text-center sm:text-xl">
            CUSTOMIZE UNIFORMS
          </h1>
          <hr className=" border-t-2 border-[#13357c] w-20 sm:w-12" />
        </div>
        <p className="text-justify text-gray-700">
          Each professional association and educational institution has a
          standard dress code, which increases the demand for uniforms. The use
          of uniforms not only reflects discipline and pride but also allows
          employees to focus on their work commitments. Since customizable
          uniforms are gaining popularity in the market, they help address
          concerns like fitting, embroidery, and other specifications by saving
          time and offering a perfect final product.
        </p>
        <p className="text-justify text-gray-700">
          The customizable uniforms we provide are not only practical but also
          made from top-quality materials. The premium fabrics used in our
          uniforms are designed to withstand all weather conditions.
        </p>
      </div>
    </div>
  );
}
