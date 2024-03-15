import React from 'react';
import StaffCard from './StaffCard';
import { useState , useEffect} from 'react';
import { getAllStaff } from './apiStaffCalls'

const StaffList = () => {
  
const [staffs, setStaffList] = useState([]);

useEffect(() => {
  const fetchStaff = async () => {
    try {
      const data = await getAllStaff();
      setStaffList(data);
    } catch (error) {
      console.error("Error fetching staff", error);
    }
  };
  fetchStaff();
}, []);

const handleDelete = (id) => {
  console.log("Attempting to delete staff with ID:", id); // This should log the ID
  setStaffList((currStaff) => currStaff.filter((staff) => staff._id !== id));
}

  return (
    // check if the staff is empty
    <div className="gap-4">
      {staffs.length === 0 ? (
        <div className="text-center text-2xl font-bold text-red-600">
          No staff found
        </div>
      ) : (
        <>
          {staffs.map((staff) => (
            <StaffCard key={staff._id} staff={staff} onDelete={handleDelete} />
          ))}
        </>
      )}
    </div>
  );
};

export default StaffList;
