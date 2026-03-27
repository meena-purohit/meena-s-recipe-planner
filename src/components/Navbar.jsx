const Navbar = () => {
    return (
        <nav className="bg-orange-500 p-4 text-white flex justify-between items-center shadow-lg">
            <h1 className="text-2xl font-bold italic">Meena's Recipe Planner</h1>
            <ul className="flex gap-6">
                <li className="hover:underline cursor-pointer">Home</li>
                <li className="hover:underline cursor-pointer">My Recipes</li>
                <li className="hover:underline cursor-pointer">Favorites</li>
            </ul>
        </nav>
    )
}

export default Navbar;