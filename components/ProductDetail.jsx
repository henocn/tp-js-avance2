import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCart, Heart, Truck, ShieldCheck } from "lucide-react";
import axios from "../axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error("Erreur lors du chargement du produit", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="text-center py-10">Chargement du produit...</div>;
  }

  if (!product) {
    return <div className="text-center text-red-500 py-10">Produit non trouvé.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Image */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-orange-200">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[400px] object-cover"
        />
      </div>

      {/* Infos Produit */}
      <div className="space-y-5">
        <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
        <p className="text-gray-600 text-sm">
          Un délicieux produit sélectionné avec soin pour satisfaire vos envies.
        </p>

        {/* Prix et Boutons */}
        <div className="flex items-center gap-4 mt-4">
          <span className="text-2xl font-bold text-orange-600">
            {product.price} FCFA
          </span>
          <button className="flex items-center gap-2 bg-orange-600 text-white px-5 py-2 rounded-full hover:bg-orange-700 transition">
            <ShoppingCart size={18} />
            Ajouter au panier
          </button>
          <button className="bg-white border p-2 rounded-full hover:bg-gray-100 transition">
            <Heart className="text-gray-500 hover:text-red-500" />
          </button>
        </div>

        {/* Infos complémentaires */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <Truck className="text-orange-500" size={20} />
            <span>Livraison rapide sous 24-48h</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-orange-500" size={20} />
            <span>Produit garanti et conforme</span>
          </div>
        </div>

        {/* Description plus longue */}
        <div className="mt-6 text-gray-600 text-sm leading-relaxed">
          <h2 className="text-md font-semibold text-gray-800 mb-2">Description</h2>
          <p>{product.description}</p>
          <p className="mt-2">
            Contactez notre service client pour plus d'informations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
