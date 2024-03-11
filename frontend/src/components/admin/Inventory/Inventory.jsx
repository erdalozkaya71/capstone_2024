import React from "react";
import NavBar from "../Shared/Navbar";
import { Link } from "react-router-dom";
import InventoryList from "./InventoryList";


const Staff = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="container mx-auto mt-8 w-full">
        <Link to="/admin/Inventory/new" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded my-6">
          Add New Item
        </Link>
        <InventoryList />
      </div>
    </div>
  );
};

export default Staff;
