import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/admin/home" className="flex-shrink-0 text-white">
              Home
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/admin/staff"
                  className="text-blue-200 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Staff
                </Link>
                <Link
                  to="/admin/inventory"
                  className="text-blue-200 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Inventory
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-sm text-white mr-4">admin@domain.ca</div>
            <Link
              to="/settings"
              className="bg-blue-800 p-1 rounded-full text-blue-200 hover:text-white focus:outline-none focus:shadow-outline"
            >
              <i className="fas fa-cog"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
