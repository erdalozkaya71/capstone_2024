import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const StaffProfileCard = ({staff}) => {

    // staff information state
    const [staffInformation, setStaffInformation] = useState({
        id: staff.id,
        name: staff.name,
        surname: staff.surname,
        position: staff.position,
        email: staff.email,
        phone: staff.phone,
        address: staff.address,
        qualifications: staff.qualifications,
        specialization: staff.specialization,
        image: staff.image
    });
  
    const handleUpdate = () => console.log("Update action for", staff.name);
    const handleDelete = () => console.log("Delete action for", staff.name);
  
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 m-4 flex flex-col md:flex-row md:max-w-2xl">
        <img
          src={staffInformation.image}
          alt={`${staffInformation.name} ${staffInformation.surname}`}
          className="rounded-full border-4 border-blue-300 h-32 w-32 md:h-48 md:w-48"
        />
        <div className="mt-4 md:mt-0 md:ml-6 flex-grow">
          <div className="text-lg">
            <h2 className="text-blue-500 font-semibold">Staff Information:</h2>
            <p><strong>Name:</strong> {staffInformation.name}</p>
            <p><strong>Surname:</strong> {staffInformation.surname}</p>
            <p><strong>Position:</strong> {staffInformation.position}</p>
          </div>
          <div className="mt-4">
            <h2 className="text-blue-500 font-semibold">Contact Details:</h2>
            <p><strong>Email:</strong> {staffInformation.email}</p>
            <p><strong>Tel:</strong> {staffInformation.phone}</p>
            <p><strong>Address:</strong> {staffInformation.address}</p>
          </div>
          <div className="mt-4">
            <h2 className="text-blue-500 font-semibold">Professional Details:</h2>
            <p><strong>Qualifications:</strong> {staffInformation.qualifications}</p>
            <p><strong>Specialization:</strong> {staffInformation.specialization}</p>
          </div>
          <div className="flex mt-4">
            <button onClick={handleUpdate} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mr-2">Update</button>
            <button onClick={handleDelete} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Delete</button>
          </div>

          {/* connect to details page with staff information */}
          <Link to={`/admin/staff/${staffInformation.id}`} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-center">View Details</Link>
        </div>
      </div>
    );
};

export default StaffProfileCard;
