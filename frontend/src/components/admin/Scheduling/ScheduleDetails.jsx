import React, { useState, useEffect } from 'react';
import { useParams , Link, useNavigate} from 'react-router-dom';
import { getBooking , deleteBooking} from "./apiBookingCalls"

const initialScheduleState = {
  dateOfService: "",
  email: "",
  message: "",
  name: "",
  phoneNumber: "",
  serviceType: "",
  timeSlot: "",
};

const ScheduleDetails = () => {
  const { id } = useParams(); // Get the schedule ID from the URL params
  const [schedule, setSchedule] = useState({ ...initialScheduleState});
  const navigate = useNavigate();

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

  const handleDelete = async () => {
    await deleteBooking(id);
    alert("Schedule deleted successfully");
    navigate("/admin/schedule");
  }

  const goBack = () => {
    navigate("/admin/schedule");
  }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-4">Schedule Details</h1>
        <div className="mb-6 p-4 bg-blue-100 rounded">
          <p className="text-xl mb-2">Service Type: <span className="font-semibold">{schedule.serviceType}</span></p>
          <p className="text-xl mb-2">Time: <span className="font-semibold">{schedule.timeSlot}</span></p>
          <p className="text-xl mb-2">Date: <span className="font-semibold">{new Date(schedule.dateOfService).toDateString()}</span></p>
          <p className="text-xl mb-2">Client Phone Number: <span className="font-semibold">{schedule.phoneNumber}</span></p>
          <p className="text-xl">Client Email: <span className="font-semibold">{schedule.email}</span></p>

          {/* Client concerns message */}
          <p className="text-xl mt-4">Client Concerns:</p>
          <textarea name="" id="" cols="50" rows="10" readOnly value={schedule.message}></textarea>
        </div>

        <div className="flex justify-center gap-4 mb-4">
          <Link
            to={`/admin/schedule/${id}/update`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Update
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Delete
          </button>
        </div>

        <button
          onClick={goBack}
          className="text-gray-500 hover:text-gray-700 transition duration-300"
        >
          ← Back to Schedule List
        </button>
      </div>
    </div>
  );
};


export default ScheduleDetails;