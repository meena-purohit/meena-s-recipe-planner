const SearchBar = ({searchTerm, setSearchTerm}) => {
    return(
        <div className="flex justify-center my-8 px-4">
            <input
             type="text"
            placeholder="Search recipes(e.g. Pasta, Salad)..." 
            className="w-full max-w-xl p-3 border-2 border-orange-200 rounded-lg shadow-sm focus:outline-none focus:border-orange-500 transition-colors"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            />
        </div>
    )
}

export default SearchBar;