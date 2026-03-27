import Navbar from "./components/Navbar";
import RecipeCard from "./components/RecipeCard";

function App() {
  //Mock data to test our grid
  const recipes = [
    {id: 1, title: "Spicy Pasta",image: "/pasta.jpg"},
    { id: 2, title: "Salad Bowl", image: "/salad.jpg" },
    { id: 3, title: "Grilled Chicken", image: "/chicken.jpg" },
    { id: 4, title: "Veggie Burger", image: "/burger.jpg" },
  ];
  return(
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Popular Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
           {recipes.map((recipe)=>(
            <RecipeCard  key={recipe.id} recipe={recipe}/>
           ))}
        </div>
      </main>
    </div>
  );
}
export default App;