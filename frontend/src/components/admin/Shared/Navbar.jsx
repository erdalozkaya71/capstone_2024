import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import  useToken  from '../useToken';




const Navbar = () => {

  const [email,setEmail] = useState("User");
  const user = useToken();

  useEffect(() => {
    const fetchEmail = async () => {
      try{
        const response = await fetch(`http://localhost:3000/api/v1/users/${user.id}`);
        const data = await response.json();
        // console.log(data.data.data.email);
        setEmail(data.data.data.email);
      }catch(error){
        console.error("Error fetching email", error);
      } 
    }

    fetchEmail();
  },[user]); // Depend on the user if it changes update the email

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/admin/login";
  }
  

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
            <div className="text-sm text-white mr-4">Hello! {email}</div>
            <button
              onClick={handleLogout}
              className="bg-blue-800 p-1 rounded-full text-blue-200 hover:text-white focus:outline-none focus:shadow-outline"
              title="Logout"
            >
              <FontAwesomeIcon icon={faSignOutAlt} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
