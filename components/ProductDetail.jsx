import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShoppingCart, Heart, Truck, ShieldCheck, ArrowLeft } from "lucide-react";
import AddToCartModal from "../components/AddToCartModal";

import axios from "../axios";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get(`/products/${id}`).then((res) => {
      setProduct(res.data);
    }).catch((err) => {
      console.error("Erreur lors du chargement du produit :", err);
    });
  }, [id]);

  if (!product) {
    return <div className="text-center py-20 text-gray-500">Chargement du produit...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {showModal && (
        <AddToCartModal product={product} onClose={() => setShowModal(false)} />
      )}
      <button
        onClick={() => navigate("/")}
        className="mb-6 flex items-center text-orange-600 hover:underline text-sm"
      >
        <ArrowLeft size={18} className="mr-2" />
        Retour à la liste des produits
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-orange-200">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Infos centrées */}
        <div className="flex flex-col justify-center space-y-5">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-gray-600 text-sm">
            Un délicieux produit sélectionné avec soin pour satisfaire vos envies. Frais, local et livré rapidement.
          </p>

          <div className="flex items-center gap-4 mt-4">
            <span className="text-2xl font-bold text-orange-600">
              {product.price} FCFA
            </span>
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 bg-orange-600 text-white px-5 py-2 rounded-full hover:bg-orange-700 transition"
            >
              <ShoppingCart size={18} />
              Ajouter au panier
            </button>
            <button className="bg-white border p-2 rounded-full hover:bg-gray-100 transition">
              <Heart className="text-gray-500 hover:text-red-500" />
            </button>
          </div>

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

          <div className="mt-6 text-gray-600 text-sm leading-relaxed">
            <h2 className="text-md font-semibold text-gray-800 mb-2">Description</h2>
            <p>
              Ce produit fait partie de notre sélection exclusive. Il a été soigneusement choisi pour sa qualité et son excellent rapport qualité-prix.
              Parfait pour les amateurs de saveurs authentiques. Convient à tous types de régimes et disponible en plusieurs tailles selon les stocks.
            </p>
            <p className="mt-2">
              N'hésitez pas à nous contacter pour plus d'informations. Notre service client est à votre écoute 7j/7.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
