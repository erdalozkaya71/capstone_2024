import React from 'react';
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="container mx-auto px-4">
            <Navbar />
            {/* Top section with appointment buttons */}
            <section className="text-center py-10">
                <h1 className="text-3xl font-bold mb-4">Modern Dentistry for All Ages in the GTA</h1>
                <p className="mb-6">Offering Wide Range of Services using the Latest Digital Technology</p>
                <div className="flex justify-center space-x-4">
                    <Link to="/user/book-appointment" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                        Request Appointment
                    </Link>
                    <Link to="/user/services" className="bg-transparent text-blue-600 py-2 px-4 rounded hover:bg-blue-100 transition-colors">
                        Learn More
                    </Link>
                </div>
            </section>

            {/* How to get our service section */}
            <section className="py-10">
                <h2 className="text-2xl font-bold text-center mb-4">How to get our service?</h2>
                <div className="flex justify-center space-x-10">
                    <Link to="/user/contact" className="text-center hover:text-blue-600">
                        <i className="fas fa-phone-alt"></i>
                        <p>Call for appointment</p>
                    </Link>
                    <Link to="/user/book-appointment" className="text-center hover:text-blue-600">
                        <i className="fas fa-calendar-check"></i>
                        <p>Book an appointment</p>
                    </Link>
                    <Link to="/contact" className="text-center hover:text-blue-600">
                        <i className="fas fa-envelope"></i>
                        <p>Email the team</p>
                    </Link>
                </div>
            </section>

            {/* What makes us special section */}
            <section className="py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Repeat this block for each service */}
                    <Link to="/services" className="card hover:bg-blue-100 transition-colors">
                        <div className="p-4">
                            <i className="fas fa-syringe"></i>
                            <h3>Direct Filling</h3>
                            <p>Precise and comfortable dental care with a high degree of resistance.</p>
                        </div>
                    </Link>
                    {/* ... other services */}
                </div>
            </section>

            {/* Let us brighten your smile section */}
            <section className="bg-gray-100 py-10 text-center">
                <h2 className="text-2xl font-bold mb-4">Let Us Brighten Your Smile!</h2>
                <p className="mb-6">Let our team of experienced & highly-trained dentists give you the smile you deserve. With our accessible location, and diverse staff we are multilingual, we can give you the smile you dream of!</p>
                <Link to="/user/book-appointment" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                    Make an Appointment
                </Link>
            </section>

            {/* Meet our team section */}
            <section className="py-10">
                <h2 className="text-3xl font-bold text-center mb-4">MEET OUR TEAM</h2>
                {/* Team member cards */}
                {/* Repeat this block for each team member */}
                <div className="flex justify-center">
                    <div className="card">
                        <img src="path-to-your-image" alt="Dr. Name" />
                        <h3>Dr. Name</h3>
                        <p>Position</p>
                    </div>
                    {/* ... other team members */}
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default LandingPage;
