import React from 'react';
import {useParams } from 'react-router-dom';
import { useState , useEffect} from 'react';



const StaffDetail = () => {
  // Dummy data for the staff member
  // get id from the URL and fetch the staff member from the server
  const { id } = useParams(); // get the id from the URL

  // get token from cookies
  const userToken = localStorage.getItem('token');

  // staff information state
  const [staff, setStaff] = useState({
    staffInformation: { name: '', surname: '', position: '' },
    contactDetails: { email: '', phone: '' },
    address: { street: '', city: '', province: '', zipCode: '', country: '' },
    personalDetails: { qualifications: '', specialization: '', dateOfBirth: '', gender: '', schedule: '', hobbies: '' },
  });
  
  useEffect(() => {
    const fetchStaff = async () => {
      // fetch current staff with ID from the server
      try{
        const response = await fetch(`http://localhost:3000/api/v1/staff/${id}`,{
          method: 'GET',
          headers: {
            "Authorization": `Bearer ${userToken}`, // Include the JWT token in the 'Authorization' header
          }
        });
        const data = await response.json();
        const staffData = data.data.data;
        // console.log(staffData);
        setStaff(staffData);
      }catch(error){
        console.error('Error:', error);
      }
    }
    fetchStaff();
  }
  , [id]); // will depend on the id from the URL

  const handleDelete = async (id) => {
    console.log("Delete action for staff" + id);
    // send request to the server to delete the staff
    try{
      await fetch(`http://127.0.0.1:3000/api/v1/staff/${id}`
      , {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });
    }catch(error){
      console.error('Error:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white  m-6 p-6 rounded-lg shadow-md">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-none lg:w-1/4">
          <img
            className="rounded-full border-4 border-blue-500 h-32 w-32 lg:h-48 lg:w-48 mx-auto"
            src="https://placehold.co/150x150"
            alt="Profile"
          />
        </div>
        <div className="lg:w-3/4 lg:pl-4">
          <h2 className="text-lg font-semibold text-blue-600">Staff Information:</h2>
          <p><strong>Name:</strong> {staff.staffInformation.name}</p>
          <p><strong>Surname:</strong> {staff.staffInformation.surname}</p>
          <p><strong>Position:</strong> {staff.staffInformation.position}</p>
          <p><strong>Email:</strong> {staff.contactDetails.email}</p>
          <p><strong>Tel:</strong> {staff.contactDetails.phone}</p>
          <p><strong>Address:</strong> {`${staff.address.street}, ${staff.address.city}, ${staff.address.province}, ${staff.address.zipCode}, ${staff.address.country}`}</p>

          <h2 className="text-lg font-semibold text-blue-600 mt-4">Professional Details:</h2>
          <p>{staff.personalDetails.qualifications}</p>
          <p>{staff.personalDetails.specialization}</p>

          <h2 className="text-lg font-semibold text-blue-600 mt-4">Personal Details:</h2>
          <p><strong>Date of Birth:</strong> {staff.personalDetails.dateOfBirth}</p>
          <p><strong>Gender:</strong> {staff.personalDetails.gender}</p>
          <p><strong>Working Schedule:</strong> {staff.personalDetails.schedule}</p>

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
      <div className="flex justify-end mt-4 space-x-2">
        <button onClick={() => console.log('Update')} className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">Update</button>
        <button onClick={() => handleDelete(id)} className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">Delete</button>
      </div>
    </div>
  );
};

export default StaffDetail;
