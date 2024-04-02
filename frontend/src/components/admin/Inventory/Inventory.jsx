import React from "react";
import NavBar from "../Shared/Navbar";
import { Link } from "react-router-dom";
import InventoryList from "./InventoryList";


const Staff = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="container mx-auto mt-8 w-full flex justify-start items-center ">
        <Link
          to="/admin/inventory/new"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add New Item
        </Link>
      </div>
      <div className="container mx-auto mt-8 w-full">
        <InventoryList />
      </div>
    </div>
  );
};

export default Staff;
