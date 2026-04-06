import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("meena-favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("meena-favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const isAlreadyFav = prev.includes(id);
      const newFavorites = isAlreadyFav
      ? prev.filter((favId) => favId !== id)
      : [...prev, id];
      return newFavorites;
    });
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar favoritesCount={favorites.length} />
      <Routes>
        <Route
          path="/"
          element={
            <Home favorites={favorites} toggleFavorite={toggleFavorite} />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites favorites={favorites} ToggleFavorite={toggleFavorite} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
