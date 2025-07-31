import { ShoppingCart, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group border border-orange-600/50"
    >
      <div className="overflow-hidden h-44">
        <img
          src={product.image}
          alt={product.name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>

    {/* Contenu */}
    <div className="p-4 space-y-2">
      <h3 className="font-semibold text-lg text-gray-900">{product.name}</h3>
      <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
      <div className="flex items-center justify-between mt-2">
        <span className="text-orange-600 font-bold">{product.price} FCFA</span>
        <button className="bg-orange-100 text-orange-600 p-2 rounded-full hover:bg-orange-200 transition">
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
    </div>

    {/* Bouton like en haut à droite */}
    <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full shadow transition">
      <Heart className="w-5 h-5 text-gray-500 hover:text-red-500" />
    </button>
  </div>
)};

export default ProductCard;
