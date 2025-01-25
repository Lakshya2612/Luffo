import uniform1 from "../assets/uniform1.jpeg";
import uniform2 from "../assets/uniform2.jpeg";
import uniform3 from "../assets/uniform3.jpeg";

export default function Industrialuniforms() {
  const customizeUniformData = [
    {
      name: "Uniform1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, et.",
      image: uniform1,
    },
    {
      name: "Uniform2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, iure!",
      image: uniform2,
    },
    {
      name: "Uniform3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, consequuntur?",
      image: uniform3,
    },
  ];
  return (
    <div className=" text-center">
      <h1 className="text-4xl font-semibold text-gray-800 mb-8 sm:text-3xl">
        Industrial Uniforms
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {customizeUniformData.map((customizeUniform, index) => (
          <div
            key={index}
            className=" w-64 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-2"
          >
            <img
              src={customizeUniform.image}
              alt={customizeUniform.name}
              className="w-auto h-48 object-cover rounded-md mb-4 m-auto"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {customizeUniform.name}
            </h2>
            <p className="text-gray-600 text-sm">
              {customizeUniform.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
