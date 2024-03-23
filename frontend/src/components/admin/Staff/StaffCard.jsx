import React from 'react';
import { Link } from 'react-router-dom';
import { deleteStaff } from './apiStaffCalls';

const StaffProfileCard = ({staff, onDelete}) => {

    const {
      _id,
      staffInformation,
      contactDetails,
      address,
      personalDetails,
    } = staff;
  
    const detailsPath = `/admin/staff/${_id}`;
    const updatePath = `/admin/staff/${_id}/update`;
  
    const handleDelete = async () => {
      try{
        const response = await deleteStaff(_id);
        if (response.ok) {
          console.log("Staff member deleted successfully");
          onDelete(_id);
        } else {
          console.log("There was an error deleting the staff member");
        }
      }catch(error){
          console.error("There was an error deleting the staff member", error);
      }
    };
  
    return (
      <div className="flex justify-between items-center bg-white rounded-lg shadow-md overflow-hidden my-4">
        <div className="border-2 m-5">
          <img
            src={personalDetails.photo || 'default-profile.jpg'} // Replace 'default-profile.jpg' with the path to a default image
            alt={`${staffInformation.name} ${staffInformation.surname}`}
            className="w-32 h-32 rounded-full object-cover"
            style={{ flex: '0 0 auto' }} // Fixed size for image, doesn't grow or shrink
          />
        </div>
        
        <div className="flex-grow p-4 mt-5">
          <h3 className="text-xl font-semibold mb-5">{`${staffInformation.name} ${staffInformation.surname}`}</h3>
          <p className="text-md">{staffInformation.position}</p>
          <p className="text-md">{contactDetails.email}</p>
          <p className="text-md">{`${address.street}, ${address.city}, ${address.province}, ${address.zipCode}, ${address.country}`}</p>
          <div className="text-sm mt-5">
            <p> <b>Qualifications:</b> {`${personalDetails.qualifications}`} </p>
            <p> <b>Specialization:</b> {` ${personalDetails.specialization}`} </p>
          </div>
        </div>
        <div className="flex flex-col p-10 gap-2">
          <Link to={updatePath} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded text-center transition duration-300">
            Update
          </Link>
          <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded text-center transition duration-300">
            Delete
          </button>
          <Link to={detailsPath} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-center transition duration-300">
            Details
          </Link>
        </div>
      </div>
    );
};

export default StaffProfileCard;
