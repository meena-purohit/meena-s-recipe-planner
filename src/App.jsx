import { useState , useEffect} from "react";
import Navbar from "./components/Navbar";
import RecipeCard from "./components/RecipeCard";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchTerm, setSearchTerm] = useState(""); //Track search input
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState(() =>{
    const saved = localStorage.getItem("meena-favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("meena-favorites", JSON.stringify(favorites));
  }, [favorites]);
 
  const recipes = [
    { id: 1, title: "Spicy Pasta", image: "/pasta.jpg", category: "Dinner" },
    { id: 2, title: "Salad Bowl", image: "/salad.jpg", category: "Lunch" },
    { id: 3, title: "Grilled Chicken", image: "/chicken.jpg", category: "Dinner" },
    { id: 4, title: "Veggie Burger", image: "/burger.jpg" , category: "Lunch"},
    {id:5, title: "Egg Toast", image: "/eggtoast.jpg", category: "Breakfast"},
  ];

  const ToggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],
    );
  };

  //Logic: Filter recipes based on the search term
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase().trim());
    const matchesCategory = selectedCategory === "All" || recipe.category === selectedCategory;
    return matchesSearch && matchesCategory;
});
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar favoritesCount={favorites.length} />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Popular Recipes
        </h2>

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div>
          {["All", "Breakfast", "Lunch", "Dinner"].map((cat)=>(
            <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              selectedCategory === cat
              ? "bg-orange-500 text-white shadow-md"
              : "bg-white text-gray-600 hover:bg-orange-100"
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
              ToggleFavorite={ToggleFavorite}
            />
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No recipes found. Try searching for something else
          </p>
        )}
      </main>
    </div>
  );
}
export default App;
