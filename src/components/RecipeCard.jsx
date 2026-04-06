const RecipeCard = ({ recipe, isFavorite, toggleFavorite, onView }) => {
  return (
    <div 
      className="relative max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white 
                 transition-all duration-300 hover:scale-105 hover:shadow-2xl 
                 cursor-pointer group"
    >
      
      <button
        onClick={(e) => {
          e.stopPropagation(); 
          toggleFavorite(recipe.id);
        }}
        className="absolute top-3 right-3 p-2 rounded-full bg-white/90 shadow-md 
                   z-30 hover:scale-125 transition-transform duration-200"
      >
        <span className="text-2xl block leading-none">
          {isFavorite ? "❤️" : "🤍"}
        </span>
      </button>

      
      <div onClick={() => onView(recipe)}>
        <img
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          src={recipe.image}
          alt={recipe.title}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-1 text-gray-800">{recipe.title}</div>
          <span className="inline-block bg-orange-100 text-orange-700 rounded-full px-3 py-1 text-sm font-semibold">
            {recipe.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
