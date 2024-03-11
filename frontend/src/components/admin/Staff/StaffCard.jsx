import React from 'react';
import { Link } from 'react-router-dom';
import { deleteStaff } from './apiStaffCalls';

const StaffProfileCard = ({staff}) => {

    const {
      _id,
      staffInformation,
      contactDetails,
      address,
      personalDetails,
    } = staff;
  
    const detailsPath = `/admin/staff/${_id}`;
  
    const handleUpdate = () => console.log("Update action for", staff.name);

    const handleDelete = async (id) => {
      const response = await deleteStaff(id);
      if (response.status === 200) {
        console.log("Staff member deleted successfully");
      } else {
        console.log("There was an error deleting the staff member");
      }
    };
  
    return (
      <div className="flex justify-between items-center bg-white rounded-lg shadow-md overflow-hidden my-4">
        <img
          src={personalDetails.photo || 'default-profile.jpg'} // Replace 'default-profile.jpg' with the path to a default image
          alt={`${staffInformation.name} ${staffInformation.surname}`}
          className="w-32 h-32 rounded-full object-cover"
          style={{ flex: '0 0 auto' }} // Fixed size for image, doesn't grow or shrink
        />
        <div className="flex-grow p-4">
          <h3 className="text-lg font-semibold">{`${staffInformation.name} ${staffInformation.surname}`}</h3>
          <p className="text-sm">{staffInformation.position}</p>
          <p className="text-sm">{contactDetails.email}</p>
          <p className="text-sm">{`${address.street}, ${address.city}, ${address.province}, ${address.zipCode}, ${address.country}`}</p>
          <div className="text-sm mt-2">
            <p>{`Qualifications: ${personalDetails.qualifications}`}</p>
            <p>{`Specialization: ${personalDetails.specialization}`}</p>
          </div>
        </div>
        <div className="flex flex-col p-4">
          <button onClick={handleUpdate} className="bg-green-300 hover:bg-green-400 text-white py-2 px-4 rounded text-center">
            Update
          </button>
          <button onClick={handleDelete} className="bg-red-300 hover:bg-red-400 text-white py-2 px-4 rounded text-center">
            Delete
          </button>
          <Link to={detailsPath} className="bg-blue-300 hover:bg-blue-400 text-white py-2 px-4 rounded mt-2 text-center">
            Details
          </Link>
        </div>
      </div>
    );
};

export default StaffProfileCard;
