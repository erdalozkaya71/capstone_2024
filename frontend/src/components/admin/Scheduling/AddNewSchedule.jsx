import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBooking } from "./apiBookingCalls";

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
  "Oral Surgery",
];

const timeSlots = [
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "12:00 PM - 1:00 PM",
  "1:00 PM - 2:00 PM",
  "2:00 PM - 3:00 PM",
  "3:00 PM - 4:00 PM",
  "4:00 PM - 5:00 PM",
  "5:00 PM - 6:00 PM",
  "6:00 PM - 7:00 PM",
];

const initialScheduleState = {
  dateOfService: "",
  email: "",
  message: "",
  name: "",
  phoneNumber: "",
  serviceType: "",
  timeSlot: "",
};

const AddSchedule = () => {
  const navigate = useNavigate();
  const [booking, setBooking] = useState({...initialScheduleState}); // Initialize booking state

  const formatDateForInput = (dateString) => {
    const torontoTime = new Date(dateString + 'T00:00:00-04:00'); // -04:00 for EDT, -05:00 for EST
    return torontoTime.toISOString();
  };

  // Update state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log("Updating field:", name, "Value:", value); // Debugging line to check updates
    setBooking((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    navigate("/admin/schedule");
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = ['name', 'email', 'phoneNumber', 'dateOfService', 'serviceType'];
    const missingFields = requiredFields.filter(field => !booking[field]);

    if (missingFields.length > 0) {
        const missingFieldsMessage = missingFields.join(', ');
        alert(`Please fill out the following required fields: ${missingFieldsMessage}`);
        return; // Stop form submission
    }

    try {
      //conver time to local
      booking.dateOfService = formatDateForInput(booking.dateOfService);
      const response = await addBooking(booking); // Call addBooking function with booking data
      
      if (response.ok) {
        alert("Booking added successfully");
        navigate("/admin/schedule"); // Redirect to schedule list or another appropriate route
      }else{
        alert("Error adding booking");
      }

    } catch (error) {
      console.error("Error adding booking:", error);
      alert("Error adding booking");
    }
  };

  return (
    <div className="">
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600 mb-4 sm:mt-14 md: mt-14">
              Add New Schedule
            </h2>
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-3">
                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label>Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={booking.name}
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
                          value={booking.email}
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
                          value={booking.phoneNumber}
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
                          value={booking.dateOfService || ""}
                          onChange={handleChange}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          required
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label>Time Slot</label>
                        <select name="timeSlot" value={booking.timeSlot} onChange={handleChange} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" required>
                          <option value="">Select a time slot</option>
                          {timeSlots.map((timeSlot, index) => (
                            <option key={index} value={timeSlot}>
                              {timeSlot}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="md:col-span-5">
                        <label>Service Type</label>
                        <select
                          name="serviceType"
                          value={booking.serviceType}
                          onChange={handleChange}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          required
                        >
                          <option value="">Select a service</option>
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
                          value={booking.message}
                          onChange={handleChange}
                          className="h-32 border mt-1 rounded px-4 w-full bg-gray-50" // Increased height for the textarea
                        />
                      </div>
                      <div className="md:col-span-5 flex justify-center">
                        <button
                          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mx-2"
                          type="submit"
                        >
                          Add Schedule
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSchedule;
