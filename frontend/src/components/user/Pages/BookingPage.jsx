import React from 'react';
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const BookingPage = () => {
    const handleFormSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission
    
        const formData = {
            name: event.target.name.value,
            email: event.target.email.value,
            phoneNumber: event.target.phoneNumber.value,
            date: event.target.date.value,
            service: event.target.service.value,
            message: event.target.message.value,
        };
    
        try {
            const response = await fetch('/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) {
                throw new Error('Something went wrong with the booking request');
            }
    
            const result = await response.json();
            alert('Booking successful!'); // You can replace this with a more sophisticated feedback mechanism
            console.log(result);
        } catch (error) {
            console.error('Failed to book appointment:', error);
            alert('Failed to book appointment.');
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
                                <form onSubmit={handleFormSubmit}>
                                    <div className="lg:col-span-2">
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                            <div className="md:col-span-5">
                                                <label>Full Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Full name"
                                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                />
                                            </div>
                                            <div className="md:col-span-5">
                                                <label>Email Address</label>
                                                <input
                                                    type="text"
                                                    name="email"
                                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                    placeholder="email@domain.com"/>
                                            </div>
                                            <div className="md:col-span-5">
                                                <label>Phone Number</label>
                                                <input
                                                    type="tel"
                                                    name="phoneNumber"
                                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                    placeholder="647-555-5555"/>
                                            </div>
                                        <div className="md:col-span-5">
                                            <label>Date</label>
                                            <input
                                                type="date"
                                                min={new Date().toISOString().split('T')[0]}  // Set min date to today
                                                name="date"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            />
                                        </div>
                                        <div className="md:col-span-5">
                                            <label>Service</label>
                                            <select
                                                name="service"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
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
