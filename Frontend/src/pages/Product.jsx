import { Helmet } from "react-helmet-async";
export default function Product() {
  return (
    <div className="p-8">
      <Helmet>
        <title>
          Our Products - Industrial Safety Shoes, Gloves, Helmets & More
        </title>
        <meta
          name="description"
          content="Browse our range of industrial safety products including safety shoes, helmets, gloves, gumboots, safety harnesses, and other protective gear."
        />
        <meta
          name="keywords"
          content="luffo,industrial safety shoes, safety gloves, helmets, gumboots, safety harnesses, safety helmets, reflective tape, industrial equipment"
        />
      </Helmet>
      <div className="flex justify-center items-center mb-4">
        <hr className="border-t-2 border-[#13357c] w-20 sm:w-12" />
        <h1 className="text-[#13357c] text-2xl font-semibold mb-2 mx-2 text-center sm:text-xl">
          OUR PRODUCTS
        </h1>
        <hr className=" border-t-2 border-[#13357c] w-20 sm:w-12" />
      </div>
    </div>
  );
}
