import { ShoppingCart, User, Menu } from "lucide-react";
import { useState } from "react";
import { useOrders } from "../contexts/OrderContext";

const Navbar = () => {
  const { orders } = useOrders();
  const [showCart, setShowCart] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold text-orange-600">ShopOnline</div>

        <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-orange-600">Accueil</a>
          <a href="#" className="hover:text-orange-600">Produits</a>
          <a href="#" className="hover:text-orange-600">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          {/* Panier avec badge */}
          <button className="relative" onClick={() => setShowCart(!showCart)}>
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-orange-600" />
            {orders.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {orders.length}
              </span>
            )}
          </button>

          {/* Modal du panier */}
          {showCart && (
            <div className="absolute right-4 top-16 w-80 bg-white shadow-xl border rounded-lg z-50 p-4">
              <h2 className="text-lg font-semibold mb-3">Vos commandes</h2>
              {orders.length === 0 ? (
                <p className="text-sm text-gray-500">Aucune commande pour le moment.</p>
              ) : (
                <ul className="space-y-2 max-h-60 overflow-y-auto">
                  {orders.map((order) => (
                    <li key={order.id} className="text-sm text-gray-700 border-b pb-2">
                      Commande #{order.id} - {order.status}
                    </li>
                  ))}
                </ul>
              )}
              <button
                onClick={() => setShowCart(false)}
                className="mt-4 text-sm text-orange-600 hover:underline"
              >
                Fermer
              </button>
            </div>
          )}

          <button>
            <User className="w-6 h-6 text-gray-700 hover:text-orange-600" />
          </button>

          <button className="md:hidden">
            <Menu className="w-6 h-6 text-gray-700 hover:text-orange-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
