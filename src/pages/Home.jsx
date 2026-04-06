import { useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import RecipeModal from "../components/RecipeModal";
import Favorites from "./Favorites";

const recipes = [
  {
    id: 1,
    title: "Spicy Pasta",
    image: "/pasta.jpg",
    category: "Dinner",
    ingredients: ["200g Pasta", "2 cloves Garlic"],
    instructions: "Boil pasta...",
  },
  {
    id: 2,
    title: "Salad Bowl",
    image: "/salad.jpg",
    category: "Lunch",
    ingredients: ["Mixed Greens"],
    instructions: "Chop veggies...",
  },
  {
    id: 3,
    title: "Grilled Chicken",
    image: "/chicken.jpg",
    category: "Dinner",
    ingredients: ["Chicken"],
    instructions: "Grill...",
  },
  {
    id: 4,
    title: "Veggie Burger",
    image: "/burger.jpg",
    category: "Lunch",
    ingredients: ["Patty"],
    instructions: "Assemble...",
  },
  {
    id: 5,
    title: "Egg Toast",
    image: "/eggtoast.jpg",
    category: "Breakfast",
    ingredients: ["Eggs"],
    instructions: "Fry eggs...",
  },
];


const Home = ({ favorites, toggleFavorite }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRecipe, setSelectedRecipe] = useState(null);


const filteredRecipes = recipes.filter((recipe) => {
  const matchesSearch = recipe.title
    .toLowerCase()
    .includes(searchTerm.toLowerCase().trim());
  const matchesCategory =
    selectedCategory === "All" || recipe.category === selectedCategory;
  return matchesSearch && matchesCategory;
});

return (
  
    <main className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Popular Recipe</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div>
        {["All", "Breakfast", "Lunch", "Dinner"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              selectedCategory === cat
                ? "bg-orange-500 text-white"
                : "bg-white text-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            isFavorite={favorites.includes(recipe.id)}
            toggleFavorite={toggleFavorite}
            onView={setSelectedRecipe}
          />
        ))}
      </div>

      <RecipeModal
        recipe={selectedRecipe}
        isOpen={!!selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
      />
    </main>
  
);
}

export default Home;
