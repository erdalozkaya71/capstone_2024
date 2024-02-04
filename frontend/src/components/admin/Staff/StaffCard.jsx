import React from 'react';

const StaffCard = ({ staff }) => {
  return (
    <div className="bg-white rounded shadow p-4">
      <div className="flex items-center space-x-4">
        <img className="w-24 h-24 rounded-full" src="https://placehold.co/100x100" alt={`Profile of ${staff.name}`} />
        <div className="flex-1">
          <h2 className="font-bold">{staff.name}</h2>
          <p className="text-sm">{staff.position}</p>
          <p className="text-sm text-gray-600">{staff.email}</p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-bold text-lg mb-2">Professional Details:</h3>
        <p className="text-sm text-gray-600">{staff.details}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Details</button>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Update</button>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Delete</button>
      </div>
    </div>
  );
};

export default StaffCard;
