import React from 'react';
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const BookingPage = () => {

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
        <div className="container mx-auto px-4rt
        ">
            <Navbar/>
            <form className="w-full md:w-1/2 space-y-4">
                <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-4">
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full name"
                            className="border border-gray-300 rounded w-full py-2 px-3"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-2 mb-4">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="+1 (555) 000-0000"
                            className="border border-gray-300 rounded w-full py-2 px-3"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-2 mb-4">
                    <div className="w-full md:w-1/2 px-2">
                        <input
                            type="date"
                            name="date"
                            className="border border-gray-300 rounded w-full py-2 px-3"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                        <select
                            name="service"
                            className="border border-gray-300 rounded w-full py-2 px-3"
                        >
                            {services.map((service, index) => (
                                <option key={index} value={service}>
                                    {service}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="px-2 mb-4">
          <textarea
              name="message"
              placeholder="Include a message..."
              className="border border-gray-300 rounded w-full py-2 px-3"
              rows="4"
          />
                </div>
                <div className="px-2 mb-4 flex items-center">
                    <input
                        type="checkbox"
                        name="privacyPolicy"
                        className="mr-2"
                        // Handle checkbox change if needed
                    />
                    <label htmlFor="privacyPolicy" className="text-sm">
                        You agree to our friendly privacy policy.
                    </label>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white rounded py-2 px-4 hover:bg-blue-700"
                >
                    Request Appointment
                </button>
            </form>
            {/* Insert image on the left side if needed */}
            <Footer/>
        </div>
    );
};
export default BookingPage;
