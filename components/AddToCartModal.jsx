import { useState } from "react";
import { X } from "lucide-react";
import axios from "../axios";

const AddToCartModal = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleOrder = async () => {
    if (quantity < 1) return;
    setLoading(true);

    try {
      await axios.post("/orders", [{
        productId: product.id,
        quantity,
      }]);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 1500);
    } catch (err) {
      console.error("Erreur lors de la commande :", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
          <X size={20} />
        </button>

        <h2 className="text-xl font-semibold mb-4 text-gray-800">Commander {product.name}</h2>

        <div className="mb-4">
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
            Quantité
          </label>
          <input
            id="quantity"
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleOrder}
            disabled={loading || quantity < 1}
            className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition disabled:opacity-50"
          >
            {loading ? "Commande..." : "Confirmer la commande"}
          </button>
        </div>

        {success && (
          <p className="text-green-600 text-sm mt-4 text-center">
            ✅ Commande effectuée avec succès !
          </p>
        )}
      </div>
    </div>
  );
};

export default AddToCartModal;
