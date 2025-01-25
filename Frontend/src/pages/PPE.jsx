export default function PPE() {
  const PPEData = [
    { name: "", description: "", image: "" },
    { name: "", description: "", image: "" },
    { name: "", description: "", image: "" },
    { name: "", description: "", image: "" },
  ];
  return (
    <div className=" text-center">
      <h1 className="text-4xl font-semibold text-gray-800 mb-8 sm:text-3xl">
        Personal Protective Equipments (PPE)
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {PPEData.map((PPE, index) => (
          <div
            key={index}
            className=" w-64 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-2"
          >
            <img
              src={PPE.image}
              alt={PPE.name}
              className="w-auto h-48 object-cover rounded-md mb-4 m-auto"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {PPE.name}
            </h2>
            <p className="text-gray-600 text-sm">{PPE.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
