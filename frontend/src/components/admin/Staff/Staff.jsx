import React from "react";
import NavBar from "../Navbar";
import StaffList from "./StaffList";


const Staff = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="container mx-auto mt-8">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded my-6">
          Add New Staff
        </button>
        <StaffList />
      </div>
    </div>
  );
};

export default Staff;
