export default function Industrialuniforms() {
  const customizeUniformData = [
    { name: "", description: "", image: "" },
    { name: "", description: "", image: "" },
    { name: "", description: "", image: "" },
    { name: "", description: "", image: "" },
  ];
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-semibold text-gray-800 mb-8">
        Industrial Uniforms
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {customizeUniformData.map((customizeUniform, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4"
          >
            <img
              src={customizeUniform.image}
              alt={customizeUniform.name}
              className="w-full h-48 object-cover rounded-md mb-4"
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
