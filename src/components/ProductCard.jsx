import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-gray-900 page-transition border border-gray-800 p-3 md:p-4 rounded-lg hover:border-yellow-500 transition-all group flex flex-col h-full">
      <div className="w-full h-48 md:h-64 overflow-hidden rounded-md bg-black flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col grow mt-4">
        <h3 className="text-lg md:text-xl font-bold line-clamp-1 text-white">
          {product.name}
        </h3>
        <p className="text-gray-400 text-xs md:text-sm mb-2">
          {product.category}
        </p>

        {/* Price and Buttons Area */}
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-3">
            <span className="text-yellow-500 font-bold text-base md:text-lg">
              Rs. {product.price.toLocaleString()}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-yellow-500 text-black py-2.5 md:py-2 text-xs md:text-sm font-bold rounded hover:bg-white transition-all active:scale-95"
            >
              ADD TO CART
            </button>

            <Link
              to={`/product/${product.id}`}
              className="text-center text-[10px] md:text-xs text-white hover:bg-gray-400 rounded transition-colors py-1"
            >
              VIEW DETAILS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
