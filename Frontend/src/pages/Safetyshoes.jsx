import luffocarter from "../assets/luffocarter.jpeg";
import luffodurby from "../assets/luffodurby.jpeg";
import luffodoubledensity from "../assets/luffodoubledensity.jpeg";
import luffohyper from "../assets/luffohyper.jpeg";

export default function Safetyshoes() {
  const shoeData = [
    {
      name: "LUFFO CARTER",
      description: "High-quality steel-toe safety shoes.",
      image: luffocarter,
    },
    {
      name: "LUFFO DURBY",
      description: "Durable and comfortable for long working hours.",
      image: luffodurby,
    },
    {
      name: "LUFFO DOUBLE DENSITY",
      description: "Double density sole for better comfort and protection.",
      image: luffodoubledensity,
    },
    {
      name: "LUFFO HYPER",
      description: "Hyper protection and style in one shoe.",
      image: luffohyper,
    },
  ];

  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-semibold text-gray-800 mb-8">
        Safety Shoes
      </h1>
      <div className="flex flex-wrap gap-6">
        {shoeData.map((shoe, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 flex-1"
          >
            <img
              src={shoe.image}
              alt={shoe.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {shoe.name}
            </h2>
            <p className="text-gray-600 text-sm">{shoe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
