import React from 'react';
import StaffCard from './StaffCard';

const staff = [
  {
    id: 1,
    name: 'Jennifer',
    surname: 'Smith',
    position: 'Dental Assistance',
    email: 'jennifer@gmail.com',
    tel: '(416)555-55-55',
    address: '12 Leslie Street, No: 80 Toronto, Ontario T5R E9T',
    qualifications: 'Associate Degree in Dental Assisting from ABC College.',
    specialization: 'Jennifer specializes in providing comprehensive support to our dental team, demonstrating proficiency in various areas of dental assistance.',
    image: 'https://placehold.co/150x150' // Placeholder image
  }
];


const StaffList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {staff.map((member, index=1) => (
        <StaffCard key={index} staff={member} />
      ))}
    </div>
  );
};

export default StaffList;
