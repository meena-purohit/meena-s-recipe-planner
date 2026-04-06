import { useEffect } from "react";


const RecipeModal = ({recipe, isOpen, onClose}) => {

   useEffect(() => {
    if(isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
    return () => {
        document.body.style.overflow = 'unset';
    };
   },[isOpen]);
    if (!isOpen) return null;
    return(
        <div className="fixed inset-0 bg-black bg-opacity-50  flex items-center  justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl animate-in fade-in zoom-in duration-200 ">
                <button onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
                >
                    ✕ 
                </button>
                <img src={recipe.image} className="w-full h-64 object-cover" alt={recipe.title} />
                <div className="p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{recipe.title}</h2>
                    <div className="flex gap-2 mb-6">
                        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold" >{recipe.category}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Ingredients:</h3>
                    <ul className="list-disc list-inside text-gray-600 mb-6">
                        {recipe.ingredients.map((ing, index)=> <li key={index}>{ing}</li>)}
                    </ul>

                    <h3 className="text-xl font-bold mb-2">Instructions:</h3>
                    <p className="text-gray-600 leading-relaxed">{recipe.instructions}</p>
                </div>
            </div>
        </div>
    );
};

export default RecipeModal;