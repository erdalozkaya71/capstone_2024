import React, { useState, useEffect } from 'react';
import { useParams , Link} from 'react-router-dom';
import { getBooking } from "./apiBookingCalls"

const initialScheduleState = {
  _id: "",
  createdAt: "",
  dateOfService: "",
  email: "",
  message: "",
  name: "",
  phoneNumber: "",
  serviceType: "",
  updatedAt: ""
};

const ScheduleDetails = () => {
  const { id } = useParams(); // Get the schedule ID from the URL params
  const [schedule, setSchedule] = useState({ ...initialScheduleState});

  useEffect(() => {
    // Fetch the schedule details when the component mounts
    const fetchSchedule = async () => {
      try {
        const fetchedSchedule = await getBooking(id); // Fetch schedule details from the API
        // console.log(fetchedSchedule);
        setSchedule(fetchedSchedule);
      } catch (error) {
        console.error("Error fetching schedule:", error);
      }
    };
    fetchSchedule();
  }, []);

  const handleUpdate = () => {
    // Handle update functionality here
    console.log("Update schedule:", schedule);
  }

  const handleDelete = () => {
    // Handle delete functionality here
    console.log("Delete schedule:", schedule);
  }

  return (
    <div className="flex items-center justify-center">
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-6">
      <h1 className="text-2xl font-bold mb-4">Schedule Details</h1>
      <p className="text-lg mb-2">Service: {schedule.serviceType}</p>

      <p className="text-lg mb-2">Time: {new Date(schedule.dateOfService).toLocaleTimeString()}</p>
      <p className="text-lg mb-2">Date: {new Date(schedule.dateOfService).toDateString()}</p>
      <p className="text-lg mb-2">Client Phone Number: {schedule.phoneNumber}</p>
      <p className="text-lg mb-2">Client Email: {schedule.email}</p>

      <div className="mt-6">
        <Link
          to={`/admin/schedule/${id}/update`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded"
        >
          Update
        </Link>
        <Link
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </Link>
      </div>
    </div>
    </div>
  );
};


export default ScheduleDetails;