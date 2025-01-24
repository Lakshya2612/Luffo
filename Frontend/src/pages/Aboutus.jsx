import { Helmet } from "react-helmet-async";
import AboutusImage from "../assets/Aboutus.jpg";
import Aboutuscard from "../components/Aboutuscard/Aboutuscard";
export default function Aboutus() {
  return (
    <div>
      <Helmet>
        <title>Luffo - About Us</title>
        <meta
          name="description"
          content="Learn more about our company, mission, and the high-quality safety products we manufacture. Providing reliable protection for industries worldwide."
        />
        <meta
          name="keywords"
          content="luffo,about us, safety equipment, safety gear manufacturer, safety shoes, industrial protective gear, company mission"
        />
      </Helmet>
      <div className="flex flex wrap sm:flex-col">
        <div className="flex-1 p-8">
          <div className="flex justify-center items-center mb-4">
            <hr className="border-t-2 border-[#13357c] w-20 sm:w-12" />
            <h1 className="text-[#13357c] text-2xl font-semibold mb-2 mx-2 text-center sm:text-xl">
              About Us
            </h1>
            <hr className=" border-t-2 border-[#13357c] w-20 sm:w-12" />
          </div>
          <h1 className="text-3xl font-semibold text-gray-800 mb-4 sm:text-2xl">
            Luffo- Elevating Safety and Style in Workwear
          </h1>
          <p className="text-base text-gray-700 mb-2 text-justify">
            Luffo, where safety meets style and functionality intertwines with
            fashion. At Luffo, we are more than just a brand—we are your
            dedicated partner in providing top-notch safety shoes, Personal
            Protective Equipments (PPE), and industrial and corporate uniform
            solutions. Explore the essence of Luffo, where innovation, quality,
            and a commitment to excellence come together to redefine workwear
            standards.
          </p>
          <h1 className="text-3xl font-semibold text-gray-800 mb-4 sm:text-2xl">
            Our Vision
          </h1>
          <p className="text-base text-gray-700 mb-2 text-justify">
            Luffo, where safety meets style and functionality intertwines with
            fashion. At Luffo, we are more than just a brand—we are your
            dedicated partner in providing top-notch safety shoes, Personal
            Protective Equipments (PPE), and industrial and corporate uniform
            solutions. Explore the essence of Luffo, where innovation, quality,
            and a commitment to excellence come together to redefine workwear
            standards.
          </p>
          <p className="text-base text-gray-700 mb-2 text-justify">
            Luffo stands as a beacon of excellence in the realm of safety shoes
            and industrial uniforms. Our unwavering commitment to safety,
            durability, comfort, customization, compliance, and sustainability
            sets us apart as the preferred choice for businesses aiming to
            elevate workplace safety standards. Trust Luffo to be your partner
            in creating a safer and more secure work environment for your valued
            workforce.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center p-6">
          <img
            src={AboutusImage}
            alt="aboutus image"
            className="w-[28rem] h-92"
          />
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center mt-6 mb-4">
          <hr className="border-t-2 border-[#13357c] w-20 sm:w-12" />
          <h1 className="text-[#13357c] text-2xl font-semibold mb-2 mx-2 text-center sm:text-xl">
            Why LUFFO
          </h1>
          <hr className=" border-t-2 border-[#13357c] w-20 sm:w-12" />
        </div>
        <Aboutuscard />
      </div>
    </div>
  );
}
