const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => (
  <div className="flex gap-2 overflow-x-auto">
    <button
      onClick={() => setSelectedCategory(null)}
      className={`px-4 py-2 rounded-full ${selectedCategory === null ? 'bg-orange-600 text-white' : 'bg-gray-200'}`}
    >
      Tous
    </button>
    {categories.map(cat => (
      <button
        key={cat.id}
        onClick={() => setSelectedCategory(cat.id)}
        className={`px-4 py-2 rounded-full ${selectedCategory === cat.id ? 'bg-orange-600 text-white' : 'bg-gray-200'}`}
      >
        {cat.name}
      </button>
    ))}
  </div>
)
export default CategoryFilter
