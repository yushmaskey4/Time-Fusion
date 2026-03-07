import { useParams, Link } from "react-router-dom";
import { productsData } from "../data/products";
import { useContext } from "react";
import { useCart } from "../context/CartContext";

const SingleProduct = () => {
  const { id } = useParams();
  // Context bata addToCart function tanne
  const { addToCart } = useCart();

  const product = productsData.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center py-20 text-2xl text-white">
        Product Not Found!
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-20 px-6 page-transition">
      <Link
        to="/products"
        className="text-gold hover:underline mb-8 inline-block"
      >
        ← Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-12 mt-4">
        <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-125 object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-gold font-bold tracking-widest uppercase text-sm">
            {product.category}
          </span>
          <h1 className="text-5xl font-bold mt-2 mb-4">{product.name}</h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Experience premium craftsmanship with the {product.name}. This
            timepiece is designed for those who appreciate luxury and precision
            in every second.
          </p>

          <div className="text-4xl font-bold text-white mb-8">
            Rs. {product.price}
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => addToCart(product)}
              className="flex-1 bg-white text-black font-bold py-4 rounded-md hover:bg-gold transition-all"
            >
              ADD TO CART
            </button>
            <button className="px-6 border border-gray-700 rounded-md hover:bg-gray-800">
              ❤
            </button>
          </div>

          <div className="mt-10 border-t border-gray-800 pt-6">
            <p className="text-sm text-gray-500">
              ✓ 2 Year International Warranty
            </p>
            <p className="text-sm text-gray-500">✓ Free Secure Shipping</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
