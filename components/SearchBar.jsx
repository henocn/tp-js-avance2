const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <input
    type="text"
    placeholder="Rechercher un produit..."
    value={searchTerm}
    onChange={e => setSearchTerm(e.target.value)}
    className="w-full md:w-80 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
  />
)
export default SearchBar
