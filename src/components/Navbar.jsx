import { Link } from "react-router-dom";

const Navbar = ({ favoritesCount }) => {
  return (
    <nav className="bg-orange-500 p-4 text-white flex justify-between items-center shadow-lg">
      <Link className="text-2xl font-bold italic">Meena's Recipe Planner</Link>
      <ul className="flex gap-6">
        <li><Link className="hover:underline cursor-pointer">Home</Link></li>
       <li><Link className="hover:underline cursor-pointer">
          Favorites
          {favoritesCount > 0 && (
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-bounce">
              {favoritesCount}
            </span>
          )}
        </Link></li>
      </ul>
    
    </nav>
  );
};

export default Navbar;
