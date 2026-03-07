import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const handleCheckout = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  
  if (isLoggedIn) {
    navigate("/checkout");
    onClose();
  } else {
    alert("Please login to proceed to checkout!");
    navigate("/login");
    onClose();
  }
};

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, addToCart, decreaseQuantity } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex justify-end page-transition">
      <div className="absolute inset-0 bg-black/60" onClick={onClose}></div>

      <div className="relative w-full max-w-md bg-gray-900 h-full shadow-2xl p-6 flex flex-col text-white">
        <div className="flex justify-between items-center border-b border-gray-800 pb-4">
          <h2 className="text-2xl font-bold text-yellow-500">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-white text-2xl hover:text-yellow-500 transition"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center mt-20">
              <span className="text-5xl mb-4">🛒</span>
              <p className="text-gray-500 text-center">Cart is empty!</p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 mb-4 bg-black/40 p-3 rounded-lg border border-gray-800"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-sm line-clamp-1">
                      {item.name}
                    </h4>
                    <p className="text-yellow-500 text-xs font-bold">
                      ${item.price}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700"
                    >
                      -
                    </button>
                    <span className="text-sm font-bold">{item.quantity}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-xs hover:underline self-start"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-gray-800 pt-4">
          <div className="flex justify-between text-xl font-bold mb-4">
            <span>Total:</span>
            <span className="text-yellow-500">Rs. {total.toLocaleString()}</span>
          </div>
          <Link
            to="/checkout"
            onClick={onClose}
            className="block text-center w-full bg-yellow-500 text-black page-transition py-3 font-bold rounded hover:bg-white transition-all"
          >
            PROCEED TO CHECKOUT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
