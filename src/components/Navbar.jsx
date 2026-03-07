import { Link, useNavigate } from "react-router-dom"; 
import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react"; 
import CartDrawer from "./CartDrawer";

const Navbar = () => {
  const { cart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Check if user is logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    alert("Logged Out Successfully!");
    navigate("/login");
    window.location.reload(); // State refresh garna
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <nav className="flex justify-between items-center p-5 bg-black border-b border-gray-800 sticky top-0 z-50">
        {/* Hamburger for Mobile */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Logo */}
        <Link to="/" className="text-xl md:text-2xl font-bold text-yellow-500 tracking-tighter">
          TIME FUSION
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white items-center">
          <Link to="/" className="hover:text-yellow-500 transition">Home</Link>
          <Link to="/products" className="hover:text-yellow-500 transition">Products</Link>
          <Link to="/about" className="hover:text-yellow-500 transition">About</Link>
          <Link to="/contact" className="hover:text-yellow-500 transition">Contact</Link>
          
          {/* Dynamic Login/Logout Button */}
          {isLoggedIn ? (
            <button 
              onClick={handleLogout}
              className="bg-red-600 px-4 py-1 rounded text-sm font-bold hover:bg-red-700 transition"
            >
              LOGOUT
            </button>
          ) : (
            <Link to="/login" className="bg-yellow-500 px-4 py-1 rounded text-black text-sm font-bold hover:bg-white transition">
              LOGIN
            </Link>
          )}
        </div>

      
        {/* User Profile Icon */}
<div className="relative group cursor-pointer text-white ml-4">
  <div onClick={() => !isLoggedIn && navigate("/login")} className="text-2xl hover:text-yellow-500 transition">
    👤
  </div>

  {/* Dropdown Menu */}
  {isLoggedIn && (
    <div className="absolute right-0 mt-2 w-56 bg-gray-900 border border-gray-800 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none group-hover:pointer-events-auto z-60">
      <div className="p-4 border-b border-gray-800">
        <p className="text-sm font-bold text-yellow-500">Yush Maskey</p>
        <p className="text-[10px] text-gray-400 font-mono">Premium Member</p>
      </div>
      <div className="flex flex-col p-2 text-sm">
        <Link to="/profile" className="p-2 hover:bg-gray-800 rounded">My Profile</Link>
        <Link to="/orders" className="p-2 hover:bg-gray-800 rounded">Order Summary</Link>
        <Link to="/orders" className="p-2 hover:bg-gray-800 rounded flex justify-between">
          Pending Orders <span className="bg-yellow-600 text-[10px] px-1 rounded">2</span>
        </Link>
        <Link to="/orders" className="p-2 hover:bg-gray-800 rounded text-gray-500">Completed Orders</Link>
        <button 
          onClick={handleLogout} 
          className="p-2 text-red-500 text-left hover:bg-gray-800 rounded mt-2 border-t border-gray-800"
        >
          Logout
        </button>
      </div>
    </div>
  )}
</div>

        {/* Mobile Menu */}
        <div className={`absolute top-full left-0 w-full bg-black border-b border-gray-800 flex flex-col items-center gap-5 py-6 transition-all duration-300 md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-yellow-500">Home</Link>
          <Link to="/products" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-yellow-500">Products</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-yellow-500">About</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-yellow-500">Contact</Link>
          
          {isLoggedIn ? (
            <button onClick={handleLogout} className="text-red-500 font-bold">LOGOUT</button>
          ) : (
            <Link to="/login" onClick={() => setIsMenuOpen(false)} className="text-yellow-500 font-bold">LOGIN</Link>
          )}
        </div>
      </nav>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </>
  );
};

export default Navbar;