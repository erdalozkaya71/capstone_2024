import React from "react";
import NavBar from "../Shared/Navbar";
import StaffList from "./StaffList";
import { Link } from "react-router-dom";


const Staff = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="container mx-auto mt-8 w-full flex justify-start items-center ">
        <Link
          to="/admin/staff/new"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add New Staff
        </Link>
      </div>
      <div className="container mx-auto mt-8 w-full">
        <StaffList />
      </div>
    </div>
  );
};

export default Staff;
