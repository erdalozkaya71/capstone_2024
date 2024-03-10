import React from 'react';
import StaffCard from './StaffCard';
import { useState , useEffect} from 'react';

const StaffList = () => {
  
const [staffs, setStaffList] = useState([]);

//get toke from cookies
const [userToken, ] = useState(localStorage.getItem('token'));

  //use effect to fetch the staff from the server
  // store staff after fetching

  

useEffect(() => {
  const fetchStaff = async () => {
    try{
      const response = await fetch('http://localhost:3000/api/v1/staff',{
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${userToken}`, // Include the JWT token in the 'Authorization' header
        }
      });
      const data = await response.json();
      const staffData = data.data.data;

      console.log(staffData)
      setStaffList(staffData);

    }catch(error){
      console.log(error);
    }
  }
  fetchStaff();
}, []);



  return (
    <div className="gap-4">
      {staffs.map((staff) => (
        <StaffCard key={staff._id} staff={staff} />
      ))}
    </div>
  );
};

export default StaffList;
