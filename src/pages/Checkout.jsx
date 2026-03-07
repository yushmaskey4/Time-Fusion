import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleOrder = (e) => {
    e.preventDefault();
    alert("Order Successful! Thanks for shopping with Time Fusion.");
    clearCart();
    navigate("/");
  };

  if (cart.length === 0) {
    return (
      <div className="p-20 text-center text-white text-2xl page-transition">
        Cart is empty!
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-12 px-6 text-white page-transition">
      <h1 className="text-3xl font-bold mb-8 text-yellow-500">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Billing Form */}
        <form onSubmit={handleOrder} className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold mb-2 border-b border-gray-800 pb-2">
            Shipping Details
          </h2>
          <input
            required
            type="text"
            placeholder="Full Name"
            className="bg-gray-900 border border-gray-800 p-3 rounded outline-none focus:border-yellow-500"
          />
          <input
            required
            type="email"
            placeholder="Email Address"
            className="bg-gray-900 border border-gray-800 p-3 rounded outline-none focus:border-yellow-500"
          />
          <input
            required
            type="text"
            placeholder="Phone Number"
            className="bg-gray-900 border border-gray-800 p-3 rounded outline-none focus:border-yellow-500"
          />
          <textarea
            required
            placeholder="Delivery Address"
            className="bg-gray-900 border border-gray-800 p-3 rounded outline-none focus:border-yellow-500 h-32"
          ></textarea>

          <button
            type="submit"
            className="bg-yellow-500 text-black py-4 font-bold rounded-lg hover:bg-white transition-all mt-4"
          >
            PLACE ORDER (Rs. {total.toLocaleString()})
          </button>
        </form>

        {/* Order Summary */}
        <div className="bg-gray-900 p-6 rounded-lg h-fit border border-gray-800">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-800 pb-2">
            Order Summary
          </h2>
          <div className="flex flex-col gap-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center text-sm"
              >
                <span>
                  {item.name} (x{item.quantity})
                </span>
                <span className="text-yellow-500">
                  Rs. {(item.price * item.quantity).toLocaleString()}
                </span>
              </div>
            ))}
            <div className="border-t border-gray-800 mt-4 pt-4 flex justify-between font-bold text-lg">
              <span>Total Amount</span>
              <span className="text-yellow-500">
                Rs. {total.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
