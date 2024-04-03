import React, { useState, useEffect } from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import { getBooking , updateBooking} from "./apiBookingCalls"

const services = [
    "Crown and Bridge",
    "Teeth Whitening",
    "Root Canal Therapy",
    "Hygiene Services",
    "Direct Filling",
    "Invisalign",
    "Porcelain Veneers",
    "Implants",
    "Mouth Wear",
    "On-site Digital Lab",
    "Digital X-rays",
    "Oral Surgery"
];

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

const UpdateSchedule = () => {
    const { id } = useParams(); // Get the schedule ID from the URL params
    const navigate = useNavigate();
    const [schedule, setSchedule] = useState({ ...initialScheduleState});

    const formatDateForInput = (dateString) => {
        if (!dateString) return '';
        
        // Construct a Date object using the dateString
        const date = new Date(dateString + 'T00:00:00'); // Force midnight to avoid timezone shifts
      
        // Format the date as 'YYYY-MM-DD'
        const formattedDate = [
          date.getFullYear(),
          ('0' + (date.getMonth() + 1)).slice(-2),
          ('0' + date.getDate()).slice(-2)
        ].join('-');
      
        return formattedDate;
    };
    
    useEffect(() => {
        // Fetch the schedule details when the component mounts
        const fetchSchedule = async () => {
            try {
                const fetchedSchedule = await getBooking(id); // Fetch schedule details from the API
                // console.log(fetchedSchedule);
                setSchedule({ 
                    ...fetchedSchedule,
                    dateOfService: fetchedSchedule.dateOfService.split('T')[0]
                });
            } catch (error) {
                console.error("Error fetching schedule:", error);
            }
        };
        fetchSchedule();
    }, []); // Ensure useEffect is called when the id changes

    // Update state on input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSchedule(prev => ({ ...prev, [name]: value }));
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare the schedule data for the update
        const updatedSchedule = {
            ...schedule,
            // Convert the dateOfService to a string 'YYYY-MM-DD'
            dateOfService: schedule.dateOfService
        };


        try {
            if(await updateBooking(id, updatedSchedule)) {
                alert("Schedule updated successfully");
                navigate('/admin/schedule');
            }
        }catch(error) {
            console.error("Error updating schedule:", error);
            alert("Error updating schedule");
        }
        
    };

    // Handle cancellation
    const handleCancel = () => {
        navigate('/admin/schedule');
    };

    return (
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <h1 className="font-semibold text-3xl text-gray-600 mb-4 sm:mt-14 md:mt-14">Update Schedule</h1>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-5">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={schedule.name}
                  onChange={handleChange}
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  required // Make sure to validate required fields
                />
              </div>
              <div className="md:col-span-5">
                <label>Email Address</label>
                <input
                  type="email" // Use type="email" for proper validation
                  name="email"
                  value={schedule.email}
                  onChange={handleChange}
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  required
                />
              </div>
              <div className="md:col-span-5">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={schedule.phoneNumber}
                  onChange={handleChange}
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  required
                />
              </div>
              <div className="md:col-span-5">
                <label>Date of Service</label>
                <input
                  type="date"
                  name="dateOfService"
                  value={schedule.dateOfService || ''}
                  onChange={handleChange}
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  required
                />
              </div>
              <div className="md:col-span-5">
                <label>Service Type</label>
                <select
                  name="serviceType"
                  value={schedule.serviceType}
                  onChange={handleChange}
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  required
                >
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-5">
                <label>Message</label>
                <textarea
                  name="message"
                  value={schedule.message}
                  onChange={handleChange}
                  className="h-32 border mt-1 rounded px-4 w-full bg-gray-50" // Increased height for the textarea
                />
              </div>
              <div className="md:col-span-5 flex justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mx-2"
                  type="submit"
                >
                  Update Schedule
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mx-2"
                  onClick={handleCancel} // You'll need to define this function to handle cancellation
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
}

export default UpdateSchedule;
