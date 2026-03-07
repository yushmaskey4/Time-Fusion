import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";

const Home = () => {
  const categories = [
    {
      id: 1,
      name: "Luxury",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600",
      link: "/products",
    },
    {
      id: 2,
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1691439378545-dd6b35ff2f7b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BvcnRzJTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D",
      link: "/products",
    },
    {
      id: 3,
      name: "Smart",
      image:
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/products",
    },
  ];

  return (
    <div className="page-transition">
      <Hero />
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-2">
            Our Collections
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} {...cat} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
