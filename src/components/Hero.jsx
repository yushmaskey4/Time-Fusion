import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[91vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-1000 hover:scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1800')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <h4 className="text-yellow-500 uppercase tracking-widest font-semibold mb-2">
          New Arrival 2026
        </h4>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          TIMELESS <span className="text-yellow-500">ELEGANCE</span>
        </h1>
        <p className="text-gray-300 max-w-lg mx-auto mb-8 text-lg">
          Discover our curated collection of luxury timepieces. Where
          craftsmanship meets modern technology.
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            to="/products"
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105"
          >
            Explore Collection
          </Link>
          <button className="border border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-full font-bold transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
