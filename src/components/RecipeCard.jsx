const RecipeCard = ({ recipe }) => {

    return(
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform duration-300">
        <img className="w-full h-48 object-cover" src={recipe.image} alt={recipe.title} />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-800">{recipe.title}</div>
            <p className="text-gray-600 text-sm">Delicious and healthy recipe for your daily meal.</p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-orange-100 rounded-b-full px-3 py-1 text-sm font-semibold text-orange-700 mr-2 mb-2">#Easy</span>
            <span className="inline-block bg-green-100 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2">#15min</span>
        </div>
    </div>
    );
};
export default RecipeCard;