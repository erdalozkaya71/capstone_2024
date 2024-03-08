import React from 'react';
import StaffCard from './StaffCard';
import { useState , useEffect} from 'react';

const StaffList = () => {
  
const [staffs, setStaffList] = useState([]);

  //use effect to fetch the staff from the server
  // store staff after fetching

useEffect(() => {
  const fetchStaff = async () => {
    try{
      const response = await fetch('http://localhost:3000/api/v1/staff');
      const data = await response.json();
      const staffData = data.data.data;

      // console.log(staffData)
      setStaffList(staffData);

    }catch(error){
      console.log(error);
    }
  }
  fetchStaff();
}, [staffs]);



  return (
    <div className="gap-4">
      {staffs.map((staff) => (
        <StaffCard key={staff._id} staff={staff} />
      ))}
    </div>
  );
};

export default StaffList;
