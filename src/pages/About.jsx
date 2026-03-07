import React from "react";

const About = () => {
  return (
    <div className="bg-black text-white py-20 px-6 page-transition">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <h1 className="text-5xl font-bold text-center mb-8">
          About <span className="text-gold">Time Fusion</span>
        </h1>
        <p className="text-xl text-gray-400 text-center mb-16 leading-relaxed">
          Welcome to Time Fusion, your premier destination for timeless luxury
          and precision engineering. We believe a watch is more than just an
          accessory—it's a statement of who you are.
        </p>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="p-6 border border-gray-800 rounded-lg bg-gray-900">
            <h3 className="text-gold text-xl font-bold mb-3">Authenticity</h3>
            <p className="text-gray-400">
              100% genuine products with verified craftsmanship.
            </p>
          </div>
          <div className="p-6 border border-gray-800 rounded-lg bg-gray-900">
            <h3 className="text-gold text-xl font-bold mb-3">Precision</h3>
            <p className="text-gray-400">
              Curated timepieces that define accuracy and performance.
            </p>
          </div>
          <div className="p-6 border border-gray-800 rounded-lg bg-gray-900">
            <h3 className="text-gold text-xl font-bold mb-3">Support</h3>
            <p className="text-gray-400">
              Dedicated customer care and 2-year warranty support.
            </p>
          </div>
        </div>

        {/* Why Us */}
        <div className="bg-gray-900 p-10 rounded-2xl border border-gray-800">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <ul className="space-y-4 text-gray-400">
            <li>✓ Global Shipping with secure packaging.</li>
            <li>✓ Easy return and exchange policy.</li>
            <li>✓ Secure payment gateways for safe transactions.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
