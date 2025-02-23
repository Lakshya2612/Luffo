export default function Productcard({ product, onViewMore }) {
  return (
    <div className="w-64 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4">
      <img
        src={product.imageurl}
        alt={product.name}
        className="w-full h-auto object-cover rounded-md mb-4 m-auto"
      />
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        {product.name}
      </h2>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-700">MRP:</h3>
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-red-500">
            ₹{product.sellingprice}
          </span>
          <span className="text-sm line-through text-gray-500">
            ₹{product.mrp}
          </span>
          {product.discount && (
            <span className="text-sm text-green-500 font-semibold">
              {product.discount}
            </span>
          )}
        </div>
      </div>
      <button
        className="text-blue-500 mt-4"
        onClick={() => onViewMore(product._id)}
      >
        View More
      </button>
    </div>
  );
}
