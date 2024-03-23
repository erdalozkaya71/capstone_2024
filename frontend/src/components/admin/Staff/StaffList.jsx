import React from 'react';
import StaffCard from './StaffCard';
import { useState , useEffect} from 'react';
import { getAllStaff } from './apiStaffCalls'
import { HashLoader } from 'react-spinners';

const StaffList = () => {
  
const [loading, setLoading] = useState(false);
const [staffs, setStaffList] = useState([]);

useEffect(() => {
  const fetchStaff = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const data = await getAllStaff();
      setStaffList(data);
    } catch (error) {
      console.error("Error fetching staff", error);
    } finally{
      setLoading(false);
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
    
    <div className="gap-4 mt-10">
      <div className="gap-4">
      {loading ? (
        <div className="flex flex-col justify-center items-center min-h-screen"> {/* Adjust the height as needed */}
          <HashLoader color="#123abc" loading={loading} size={75} />
          <h1>Fetching Employees</h1>
        </div>
      ) : staffs.length === 0 ? (
        <div className="text-center text-2xl font-bold text-red-600">
          No staff found
        </div>
      ) : (
        <>
          {staffs.map((staff) => (
            <StaffCard key={staff._id} staff={staff} onDelete={() => handleDelete(staff._id)} />
          ))}
          <div className="h-16"></div>
        </>
      )}
    </div>
    </div>
  );
};

export default StaffList;
