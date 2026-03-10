import { NavLink, Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import CartDrawer from "./CartDrawer";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { cart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsProfileOpen(false);
    navigate("/login");
    window.location.reload();
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const activeStyle = ({ isActive }) =>
    isActive
      ? "text-yellow-500 font-bold border-b-2 border-yellow-500 pb-1 transition-all"
      : "text-white hover:text-yellow-500 transition-all";

  return (
    <>
      {/* Navbar Container */}
      <nav className="relative flex justify-between items-center p-5 bg-black border-b border-gray-800 top-0 z-100">
        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-yellow-500 text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className="text-xl md:text-2xl font-bold text-yellow-500 tracking-tighter"
        >
          TIME FUSION
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <NavLink to="/" className={activeStyle}>
            Home
          </NavLink>
          <NavLink to="/products" className={activeStyle}>
            Products
          </NavLink>
          <NavLink to="/about" className={activeStyle}>
            About
          </NavLink>
          <NavLink to="/contact" className={activeStyle}>
            Contact
          </NavLink>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-6">
          <div
            className="relative cursor-pointer text-white flex items-center gap-1 hover:text-yellow-500 transition"
            onClick={() => setIsCartOpen(true)}
          >
            <span className="text-2xl">🛒</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-black">
                {cartCount}
              </span>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() =>
                isLoggedIn
                  ? setIsProfileOpen(!isProfileOpen)
                  : navigate("/login")
              }
              className="text-2xl text-white hover:text-yellow-500 transition focus:outline-none"
            >
              👤
            </button>

            {isLoggedIn && isProfileOpen && (
              <div className="absolute right-0 mt-3 w-52 bg-gray-900 border border-gray-800 rounded shadow-2xl z-60">
                <div className="p-4 border-b border-gray-800">
                  <p className="text-sm font-bold text-yellow-500">
                    Balen Sampang Oli
                  </p>
                </div>
                <div className="flex flex-col p-2 text-sm text-white">
                  <Link
                    to="/profile"
                    onClick={() => setIsProfileOpen(false)}
                    className="p-2 hover:bg-gray-800 rounded text-left"
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/orders"
                    onClick={() => setIsProfileOpen(false)}
                    className="p-2 hover:bg-gray-800 rounded text-left"
                  >
                    Orders
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="p-2 text-red-500 text-left hover:bg-gray-800 rounded mt-1 border-t border-gray-800"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* --- MOBILE DROPDOWN --- */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              
              className="absolute top-full left-0 w-full bg-black/80 backdrop-blur-lg border-b border-gray-800 flex flex-col items-center py-8 space-y-6 md:hidden z-[-1] overflow-hidden"
            >
              <NavLink
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-xl text-white hover:text-yellow-500 transition-colors uppercase tracking-widest font-light"
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                onClick={() => setIsMenuOpen(false)}
                className="text-xl text-white hover:text-yellow-500 transition-colors uppercase tracking-widest font-light"
              >
                Products
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-xl text-white hover:text-yellow-500 transition-colors uppercase tracking-widest font-light"
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-xl text-white hover:text-yellow-500 transition-colors uppercase tracking-widest font-light"
              >
                Contact
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
