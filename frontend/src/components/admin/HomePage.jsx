import Navbar from "./Shared/Navbar";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>

      <main>
        <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-4 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
              <div className="flex flex-col">
                <div className="flex items-center p-4">
                  <Link to="/admin/staff" className="bg-teal-300 text-white font-semibold py-2 px-4 rounded">
                    Manage
                  </Link>
                  <span className="ml-4 text-lg font-medium">Staff</span>
                </div>
                <div className="flex items-center p-4">
                  <Link to="/admin/inventory" className="bg-teal-300 text-white font-semibold py-2 px-4 rounded">
                    Manage
                  </Link>
                  <span className="ml-4 text-lg font-medium">Inventory</span>
                </div>
                <div className="flex items-center p-4">
                  <Link to="/admin/schedule" className="bg-teal-300 text-white font-semibold py-2 px-4 rounded">
                    Manage
                  </Link>
                  <span className="ml-4 text-lg font-medium">Patient Schedule</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
