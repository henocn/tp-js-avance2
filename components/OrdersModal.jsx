import { X, ShoppingBag, DollarSign, Hash } from "lucide-react";

const OrdersModal = ({ orders, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-2">
          <ShoppingBag className="text-orange-500" />
          Vos Commandes
        </h2>

        {/* Orders list */}
        {orders.length === 0 ? (
          <p className="text-gray-500 text-center">Aucune commande trouvée.</p>
        ) : (
          <ul className="space-y-4 max-h-80 overflow-y-auto pr-2">
            {orders.map((order) => (
              <li
                key={order.id}
                className="border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
                <p className="text-lg font-semibold text-gray-800 mb-2">
                  {order.productName}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4 text-green-500" />
                    <span>{order.price.toLocaleString()} FCFA</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Hash className="w-4 h-4 text-blue-500" />
                    <span>Quantité : {order.quantity}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default OrdersModal;
