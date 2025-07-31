const ProductCard = ({ product }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all">
    <img src={product.image} alt={product.name} className="h-40 w-full object-cover" />
    <div className="p-4">
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.description}</p>
      <div className="mt-2 font-bold text-orange-600">{product.price} FCFA</div>
    </div>
  </div>
)
export default ProductCard
