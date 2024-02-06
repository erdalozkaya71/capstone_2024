import React from 'react';
import Navbar from '../Shared/Navbar';
import { Link } from 'react-router-dom';


const AddNewStaffForm = () => {
  // You would manage form state and submission here with useState and onSubmit

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-200 flex items-center justify-center px-4">
      <div className="bg-white m-6 p-6 rounded-lg shadow-lg w-full max-w-3xl">
      <div className="mb-6">
          <Link to="/admin/staff" className="text-blue-500 hover:text-blue-700">
            <i className="fas fa-arrow-left mr-2"></i>Back
          </Link>
        </div>
        <h2 className="text-2xl font-semibold mb-6">Staff Information:</h2>
        <form>
          {/* Staff Information */}
          <div className="grid grid-cols-1 gap-4 mb-4">
            <input type="text" placeholder="Name" className="form-input px-4 py-2 rounded"/>
            <input type="text" placeholder="Surname" className="form-input px-4 py-2 rounded"/>
            <input type="text" placeholder="Position" className="form-input px-4 py-2 rounded"/>

            {/* Contact */}
            <input type="email" placeholder="Email" className="form-input px-4 py-2 rounded"/>
            <input type="tel" placeholder="Tel" className="form-input px-4 py-2 rounded"/>
          </div>
          
          {/* Address */}
          <h2 className="text-2xl font-semibold mb-6">Address:</h2>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <input type="text" placeholder="City" className="form-input px-4 py-2 rounded"/>
            <select className="form-select px-4 py-2 rounded">
              {/* ontario provinces */}
              <option>Province</option>
              <option>Ontario</option>
              <option>Quebec</option>
              <option>British Columbia</option>
              <option>Alberta</option>
              <option>Manitoba</option>
              <option>Saskatchewan</option>
              <option>Nova Scotia</option>
              <option>New Brunswick</option>
              <option>Newfoundland and Labrador</option>
              <option>Prince Edward Island</option>
              <option>Northwest Territories</option>
              <option>Nunavut</option>
              <option>Yukon</option>
            </select>
            <input type="text" placeholder="Zip Code" className="form-input px-4 py-2 rounded"/>
          </div>

          {/* Professional Details */}
          <h2 className="text-2xl font-semibold mb-6">Professional Details:</h2>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <textarea placeholder="Qualifications" className="form-textarea px-4 py-2 rounded" rows="4"></textarea>
            <textarea placeholder="Specialization" className="form-textarea px-4 py-2 rounded" rows="4"></textarea>
            <textarea placeholder="License/Certification" className="form-textarea px-4 py-2 rounded" rows="4"></textarea>
          </div>

          {/* Personal Details */}
          <h2 className="text-2xl font-semibold mb-6">Personal Details:</h2>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <input type="text" placeholder="Date of Birth" className="form-input px-4 py-2 rounded"/>
            <input type="text" placeholder="Gender" className="form-input px-4 py-2 rounded"/>
            <input type="text" placeholder="Working Schedule" className="form-input px-4 py-2 rounded"/>
            <input type="text" placeholder="Hobbies/Interests" className="form-input px-4 py-2 rounded"/>
          </div>

          {/* Submit Button */}
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add New Staff
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default AddNewStaffForm;
