import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/myDentLogo.png'

const Navbar = () => {
    return (
        <nav className="bg-white w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <img
                            src={logo}
                            alt="MyDent Dental Family & Implant Clinic Logo"
                            className="myDentLogo"
                        />
                    </div>
                    <div className="flex items-center justify-between h-16">
                        <Link
                            to="/"
                            className="text-blue hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            to="/user/services"
                            className="text-blue hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Services
                        </Link>
                        <Link
                            to="/user/about"
                            className="text-blue hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            About Us
                        </Link>
                        <Link
                            to="/user/contact"
                            className="text-blue hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Contact
                        </Link>
                        <Link
                            to="/user/book-appointment"
                            className="text-blue hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Book Appointment
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
