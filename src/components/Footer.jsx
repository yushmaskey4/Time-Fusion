import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 text-white pt-12 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-yellow-500 tracking-tighter">
            TIME FUSION
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Premium watch collection for those who value time. Quality and
            elegance on your wrist.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-gray-400 text-sm">
            <Link to="/" className="hover:text-yellow-500 transition">
              Home
            </Link>
            <Link to="/products" className="hover:text-yellow-500 transition">
              Products
            </Link>
            <Link to="/about" className="hover:text-yellow-500 transition">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-yellow-500 transition">
              Contact
            </Link>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-bold mb-4">Categories</h3>
          <ul className="flex flex-col gap-2 text-gray-400 text-sm">
            <li className="cursor-pointer hover:text-yellow-500">
              Luxury Watches
            </li>
            <li className="cursor-pointer hover:text-yellow-500">
              Smart Watches
            </li>
            <li className="cursor-pointer hover:text-yellow-500">
              Sports Edition
            </li>
            <li className="cursor-pointer hover:text-yellow-500">Minimalist</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4">Visit Us</h3>
          <p className="text-gray-400 text-sm mb-2">Kathmandu, Nepal</p>
          <p className="text-gray-400 text-sm">Email: info@timefusion.com</p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:text-blue-500 text-2xl transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="hover:text-pink-500 text-2xl transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="hover:text-blue-400 text-2xl transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-900 mt-10 pt-6 text-center text-gray-600 text-xs">
        &copy; {new Date().getFullYear()} Time Fusion. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
