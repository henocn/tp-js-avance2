import { ShoppingCart, User, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-600">ShopOnline</div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-orange-600">Accueil</a>
          <a href="#" className="hover:text-orange-600">Produits</a>
          <a href="#" className="hover:text-orange-600">Contact</a>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-orange-600" />
            {/* Badge */}
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded-full">2</span>
          </button>

          <button>
            <User className="w-6 h-6 text-gray-700 hover:text-orange-600" />
          </button>

          {/* Mobile menu icon */}
          <button className="md:hidden">
            <Menu className="w-6 h-6 text-gray-700 hover:text-orange-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
