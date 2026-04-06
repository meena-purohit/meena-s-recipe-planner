import { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import RecipeModal from "../components/RecipeModal";

const recipes = [
    { id: 1, title: "Spicy Pasta", image: "/pasta.jpg", category: "Dinner", ingredients: ["200g Pasta", "2 cloves Garlic"], instructions: "Boil pasta..."},
  { id: 2, title: "Salad Bowl", image: "/salad.jpg", category: "Lunch", ingredients: ["Mixed Greens"], instructions: "Chop veggies..."},
  { id: 3, title: "Grilled Chicken", image: "/chicken.jpg", category: "Dinner", ingredients: ["Chicken"], instructions: "Grill..."},
  { id: 4, title: "Veggie Burger", image: "/burger.jpg", category: "Lunch", ingredients: ["Patty"], instructions: "Assemble..."},
  { id: 5, title: "Egg Toast", image: "/eggtoast.jpg", category: "Breakfast", ingredients: ["Eggs"], instructions: "Fry eggs..."}
];

const Favorites = ({ favorites, toggleFavorite }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  
  const favoriteRecipes = recipes.filter(r => favorites.includes(r.id));

  return (
    <main className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">My Favorites</h2>
      
      {favoriteRecipes.length === 0 ? (
        <p className="text-gray-500">You haven't added any favorites yet!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favoriteRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isFavorite={true}
              ToggleFavorite={toggleFavorite}
              onView={setSelectedRecipe}
            />
          ))}
        </div>
      )}

      <RecipeModal 
        recipe={selectedRecipe} 
        isOpen={!!selectedRecipe} 
        onClose={() => setSelectedRecipe(null)} 
      />
    </main>
  );
};

export default Favorites;
