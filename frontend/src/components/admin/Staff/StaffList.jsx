import React from 'react';
import StaffCard from './StaffCard';
import { useState , useEffect} from 'react';
import { getAllStaff } from './apiStaffCalls'

const StaffList = () => {
  
const [staffs, setStaffList] = useState([]);

useEffect(() => {
  getAllStaff().then((data) => {
    setStaffList(data);
  });
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
