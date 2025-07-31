// src/components/OrdersModal.jsx
import { X } from "lucide-react";

const OrdersModal = ({ orders, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-xl p-6 relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-red-500">
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-semibold mb-4">Commandes</h2>
        {orders.length === 0 ? (
          <p className="text-gray-600">Aucune commande trouvée.</p>
        ) : (
          <ul className="space-y-3 max-h-80 overflow-y-auto">
            {orders.map((order) => (
              <li key={order.id} className="border p-3 rounded-md">
                <p className="font-medium">{order.productName}</p>
                <p className="text-sm text-gray-500">Prix : {order.price} FCFA</p>
                <p className="text-sm text-gray-500">Quantité : {order.quantity}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default OrdersModal;
