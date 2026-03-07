import { Link } from "react-router-dom";

const CategoryCard = ({ name, image, link }) => {
  return (
    <Link
      to={link}
      className="relative group overflow-hidden rounded-lg h-64 block"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-white text-3xl font-bold tracking-wider group-hover:text-gold transition-colors">
          {name.toUpperCase()}
        </h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
