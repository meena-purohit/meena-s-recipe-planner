const RecipeCard = ({ recipe, isFavorite, ToggleFavorite, onView}) => {
  return (
    <div className="relative max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
      {/* Favorite Button */}
      <button
        onClick={() => ToggleFavorite(recipe.id)}
        className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-md z-10 hover:scale-110 transition-transform"
      >
        <span className="text-2xl block leading-none">
          {/* If isFavorite is true, show Red Heart. Else, show White Heart */}
          {isFavorite ? "❤️" : "🤍"}
        </span>
      </button>

      <img
        className="w-full h-48 object-cover"
        src={recipe.image}
        alt={recipe.title}
      />

      <div className="px-6 py-4">
        <div className="font-bold text-xl text-gray-800">{recipe.title}</div>
        <button 
        onClick={() => onView(recipe)}
        className="w-full bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors"
        >
            View Recipe 
        </button>
      </div>
      
    </div>
  );
};

export default RecipeCard;
