import { useState } from "react";
import Navbar from "./components/Navbar";
import RecipeCard from "./components/RecipeCard";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchTerm, setSearchTerm] = useState(""); //Track search input
  const [favorites, setFavorites] = useState([]);
  
  const recipes = [
    {id: 1, title: "Spicy Pasta",image: "/pasta.jpg"},
    { id: 2, title: "Salad Bowl", image: "/salad.jpg" },
    { id: 3, title: "Grilled Chicken", image: "/chicken.jpg" },
    { id: 4, title: "Veggie Burger", image: "/burger.jpg" },
  ];
  
  const ToggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  //Logic: Filter recipes based on the search term
  const filteredRecipes = recipes.filter((recipe)=>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );
  return(
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Popular Recipes</h2>

         <SearchBar  searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
           {filteredRecipes.map((recipe)=>(
            <RecipeCard  key={recipe.id} recipe={recipe}
            isFavorite={favorites.includes(recipe.id)}
            ToggleFavorite={ToggleFavorite}
            />
           ))}
        </div>

        {filteredRecipes.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No recipes found. Try searching for something else</p>
        )}
      </main>
    </div>
  );
}
export default App;