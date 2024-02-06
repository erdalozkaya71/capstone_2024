import React from 'react';
import { Link } from 'react-router-dom';

const StaffDetail = () => {
  // Dummy data for the staff member
  const staffMember = {
    name: 'Jennifer',
    surname: 'Smith',
    position: 'Dental Assistance',
    email: 'jennifer@gmail.com',
    phone: '(416)555-55-55',
    address: '12 Leslie Street, No: 80 King city T5R E9T Toronto, Ontario',
    dob: '01/01/1990',
    gender: 'Female',
    schedule: 'Full-Time',
    interests: [
      'Fitness and Wellness Advocate',
      'Book Club Member',
      'Photography Enthusiast',
      'Gardening Enthusiast'
    ],
    qualifications: 'As a dental assistant, Jennifer Smith brings a wealth of education and training to our dental office. Jennifer holds an Associate Degree in Dental Assisting from ABC College, where she completed an intensive program covering both theoretical knowledge and hands-on clinical experience. In addition to her degree, she is certified in Basic Life Support (BLS) and maintains her CPR certification to ensure the safety and well-being of our patients. Jennifer’s commitment to ongoing professional development is evident in her participation in various workshops and seminars, staying abreast of the latest advancements in dental care.',
    specialization: 'Jennifer Smith specializes in providing comprehensive support to our dental team, demonstrating proficiency in various areas of dental assistance. With a keen eye for detail and excellent organizational skills, she excels in chairside assisting during dental procedures, maintaining an aseptic environment, and preparing patients for treatment. Jennifer has developed expertise in digital radiography, efficiently capturing high-quality images for accurate diagnoses. Her friendly and compassionate demeanor extends to patient care, where she excels in explaining post-treatment instructions and addressing patient concerns. Jennifer’s dedication to her role and commitment to continuous learning make her a valuable asset to our dental practice.'
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
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
          <p><strong>Name:</strong> {staffMember.name}</p>
          <p><strong>Surname:</strong> {staffMember.surname}</p>
          <p><strong>Position:</strong> {staffMember.position}</p>
          <p><strong>Email:</strong> {staffMember.email}</p>
          <p><strong>Tel:</strong> {staffMember.phone}</p>
          <p><strong>Address:</strong> {staffMember.address}</p>

          <h2 className="text-lg font-semibold text-blue-600 mt-4">Professional Details:</h2>
          <p>{staffMember.qualifications}</p>
          <p>{staffMember.specialization}</p>

          <h2 className="text-lg font-semibold text-blue-600 mt-4">Personal Details:</h2>
          <p><strong>Date of Birth:</strong> {staffMember.dob}</p>
          <p><strong>Gender:</strong> {staffMember.gender}</p>
          <p><strong>Working Schedule:</strong> {staffMember.schedule}</p>

          <h2 className="text-lg font-semibold text-blue-600 mt-4">Hobbies/Interests:</h2>
          <ul className="list-disc list-inside">
            {staffMember.interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-end mt-4 space-x-2">
        <button onClick={() => console.log('Update')} className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">Update</button>
        <button onClick={() => console.log('Delete')} className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">Delete</button>
      </div>
    </div>
  );
};

export default StaffDetail;
