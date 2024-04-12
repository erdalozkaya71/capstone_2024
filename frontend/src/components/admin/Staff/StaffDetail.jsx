import React from 'react';
import {useParams , Link, useNavigate} from 'react-router-dom';
import { useState , useEffect} from 'react';
import { getStaff,deleteStaff } from './apiStaffCalls'



const initialStaffState = {
  staffInformation: { name: "", surname: "", position: "" },
  contactDetails: { email: "", phone: "" },
  address: { street: "", city: "", province: "", zipCode: "", country: "" },
  personalDetails: {
    qualifications: "",
    specialization: "",
    dateOfBirth: "",
    gender: "",
    workschedule: "",
    hobbies: "",
    photo: ""
  },
};



const StaffDetail = () => {
  // get id from the URL and fetch the staff member from the server
  const { id } = useParams(); // get the id from the URL
  const navigate = useNavigate();
  // staff information state
  const [staff, setStaff] = useState(initialStaffState);

  const updatePath = `/admin/staff/${id}/update`;
  
  useEffect(() => {
    getStaff(id).then((data) => {
      setStaff(data);
    });
  }, [id]); // will depend on the id from the URL

  const handleDelete = async () => {
    console.log("Delete action for staff" + id);
    // send request to the server to delete the staff
    try{
      await deleteStaff(id);
    }catch(error){
      console.error('Error:', error);
    }
  };

  const handleBack = () => {
    navigate('/admin/staff');
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-6/12  mx-auto bg-white m-6 p-6 rounded-lg shadow-md">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-none lg:w-1/4">
            <img
              className="rounded-full border-4 border-blue-500 h-32 w-32 lg:h-48 lg:w-48 mx-auto"
              src={staff.personalDetails.photo}
              alt="Profile"
            />
          </div>
          <div className="lg:w-3/4 lg:pl-4">
            <h2 className="text-lg font-semibold text-blue-600">Staff Information:</h2>
            <p><strong>Name:</strong> {staff.staffInformation.name}</p>
            <p><strong>Surname:</strong> {staff.staffInformation.surname}</p>
            <p><strong>Position:</strong> {staff.staffInformation.position}</p>
            <p><strong>Email:</strong> {staff.contactDetails.email}</p>
            <p><strong>Tel:</strong> {staff.contactDetails.tel}</p>
            <p><strong>Address:</strong> {`${staff.address.street}, ${staff.address.city}, ${staff.address.province}, ${staff.address.zipCode}, ${staff.address.country}`}</p>

            <h2 className="text-lg font-semibold text-blue-600 mt-4">Professional Details:</h2>
            <p>{staff.personalDetails.qualifications}</p>
            <p>{staff.personalDetails.specialization}</p>
            <p>{staff.personalDetails.licenced}</p>


            <h2 className="text-lg font-semibold text-blue-600 mt-4">Personal Details:</h2>
            <p><strong>Date of Birth:</strong> {staff.personalDetails.dateOfBirth}</p>
            <p><strong>Gender:</strong> {staff.personalDetails.gender}</p>
            <p><strong>Working Schedule:</strong> {staff.personalDetails.workschedule}</p>

            <h2 className="text-lg font-semibold text-blue-600 mt-4">Hobbies/Interests:</h2>
            <ul className="list-disc list-inside">
              {
              staff.personalDetails.hobbies.split(',').map((hobby, index) => (
                <li key={index}>{hobby}</li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className="w-full flex justify-center mt-4 space-x-2 gap-10">
          <Link to={updatePath} className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">Update</Link>
          <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">Delete</button>
          <button onClick={handleBack} className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded transition duration-300">Back
        </button>
        </div>
      </div>
    </div>
  );
};

export default StaffDetail;
