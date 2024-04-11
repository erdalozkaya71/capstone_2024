import React, {useState} from 'react';
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { useNavigate } from 'react-router-dom';
import { addBooking } from '../../admin/Scheduling/apiBookingCalls'

const BookingPage = () => {
    const navigate = useNavigate();
    const [booking, setBooking] = useState({}); // Initialize booking state

    // Update state on input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBooking(prev => ({ ...prev, [name]: value }));
    };
    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitted Booking:', booking);

        const requiredFields = ['name', 'email', 'phoneNumber', 'dateOfService', 'serviceType'];
        const missingFields = requiredFields.filter(field => !booking[field]);

        if (missingFields.length > 0) {
            const missingFieldsMessage = missingFields.join(', ');
            alert(`Please fill out the following required fields: ${missingFieldsMessage}`);
            return; // Stop form submission
        }

        try {
            await addBooking(booking); // Call addBooking function with booking data
            alert("Booking added successfully");
            navigate('/user/services');
        } catch (error) {
            console.error("Error adding booking:", error);
            alert("Error adding booking");
        }
    };



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


    return (
        <div classNameName="pt-16">
            <Navbar/>
            <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
                <div className="container max-w-screen-lg mx-auto">
                    <div>
                        <h2 className="font-semibold text-xl text-gray-600 mb-4 sm:mt-14 md: mt-14">Schedule With Us Today</h2>
                        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div className="text-gray-600">
                                    <p className="font-medium text-lg mb-4">Please fill out all the fields.</p>
                                    <ul>
                                        <li className="mb-4">
                                            <p><b>WORKING HOURS</b><br/></p>
                                        </li>
                                        <li className="mb-4">
                                            <p><b>Saturday - Friday</b><br/>10:00 am - 7:00 pm</p>
                                        </li>
                                        <li className="mb-4">
                                            <p><b>Sunday</b><br/>Contact Us For Availability</p>
                                        </li>
                                    </ul>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="lg:col-span-2">
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                            <div className="md:col-span-5">
                                                <label>Full Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Full name"
                                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="md:col-span-5">
                                                <label>Email Address</label>
                                                <input
                                                    type="text"
                                                    name="email"
                                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                    placeholder="email@domain.com"
                                                    onChange={handleChange}/>
                                            </div>
                                            <div className="md:col-span-5">
                                                <label>Phone Number</label>
                                                <input
                                                    type="tel"
                                                    name="phoneNumber"
                                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                    placeholder="647-555-5555"
                                                    onChange={handleChange}/>
                                            </div>
                                        <div className="md:col-span-5">
                                            <label>Date</label>
                                            <input
                                                type="date"
                                                min={new Date().toISOString().split('T')[0]}  // Set min date to today
                                                name="dateOfService"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="md:col-span-5">
                                            <label>Service</label>
                                            <select
                                                name="serviceType"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                onChange={handleChange}
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
                                                    placeholder="Include a message..."
                                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="md:col-span-5">
                                                <button
                                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                    type="submit">
                                                    Request Appointment
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};
export default BookingPage;
