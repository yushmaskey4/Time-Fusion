import { useState } from "react";
import { productsData } from "../data/products";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // 1. DYNAMIC CATEGORIES: Data bata aafai categories nikalne logic
  // Yesle "All" plus aru unique categories (Luxury, Sports, Smart, Classic, etc.) nikalcha
  const categories = ["All", ...new Set(productsData.map((item) => item.category))];

  const filteredItems = productsData.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.brand.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto py-6 md:py-10 px-4 md:px-6 text-white page-transition">
      
      {/* Search Bar */}
      <div className="mb-8 flex justify-center">
        <div className="relative w-full max-w-xl">
          <input 
            type="text"
            placeholder="Search luxury watches..."
            className="w-full bg-gray-900 border border-gray-800 text-white px-5 py-3 rounded-full focus:outline-none focus:border-yellow-500 transition-all text-sm md:text-base"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* <span className="absolute right-5 top-3.5 text-gray-500 font-mono">LIVE CLOCK 🕒</span> */}
          <span className="absolute right-5 top-3.5 text-gray-500">🔍</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-10">
        
        {/* Sidebar Filters */}
        <div className="w-full md:w-1/4">
          <h2 className="hidden md:block text-2xl font-bold mb-6 text-yellow-500 italic uppercase tracking-widest">Collections</h2>
          
          <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-5 py-2 rounded-full md:rounded-lg border transition-all text-sm md:text-left font-medium ${
                  activeCategory === cat 
                  ? "bg-yellow-500 text-black border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.3)]" 
                  : "border-gray-800 hover:border-yellow-500/50 text-gray-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm("")}
              className="mt-4 text-xs text-red-500 hover:text-red-400 font-bold flex items-center gap-1"
            >
              ✕ CLEAR SEARCH
            </button>
          )}
        </div>

        {/* Product Grid */}
        <div className="w-full md:w-3/4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 border-b border-gray-800 pb-4 gap-2">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white uppercase">
                {activeCategory} <span className="text-yellow-500">Edition</span>
              </h1>
              {searchTerm && <p className="text-xs text-yellow-500 mt-1 uppercase tracking-wider">Searching for: {searchTerm}</p>}
            </div>
            <p className="text-gray-500 text-sm font-mono">{filteredItems.length} Pieces Found</p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>

          {/* No Results */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-gray-800 backdrop-blur-sm">
              <p className="text-xl text-gray-500 font-medium">No timepieces match your criteria.</p>
              <button 
                onClick={() => {setActiveCategory("All"); setSearchTerm("");}}
                className="mt-4 text-yellow-500 underline"
              >
                Show all products
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;