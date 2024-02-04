import React from 'react';
import StaffCard from './StaffCard';

const staffMembers = [
  // ... Populate with your staff member data
  {
    id: 1,
    name: "Jennifer Smith",
    position: "Dental Assistant",
    email: "jennifer.smith@dentistoffice.com",
    image: "https://placehold.co/100x100",
    details: "Jennifer brings a wealth of education and training to our dental office. She holds an Associate Degree in Dentistry from ABC College and specializes in providing comprehensive support to our dental team, demonstrating proficiency in various areas of dental assistance."
  }
];

const StaffList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {staffMembers.map((member, index) => (
        <StaffCard key={index} staff={member} />
      ))}
    </div>
  );
};

export default StaffList;
