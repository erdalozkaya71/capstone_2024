import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/myDentLogo.png";

const StickyNavbar = () => {
    const navLinks = [
        { path: "/", text: "Home" },
        { path: "/user/services", text: "Services" },
        { path: "/user/about", text: "About Us" },
        { path: "/user/contact", text: "Contact" },
        { path: "/user/book-appointment", text: "Book Appointment" },
    ];

    // Get the current location using useLocation hook from react-router-dom
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <nav className="bg-white w-full fixed top-0 z-50 shadow-md mb-8">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="/">
                            <img
                                src={logo}
                                alt="MyDent Dental Family & Implant Clinic Logo"
                                className="myDentLogo"
                            />
                        </a>
                    </div>
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                            <svg
                                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:block">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                to={link.path}
                                className={`text-blue ${
                                    location.pathname === link.path
                                        ? "text-blue-500"
                                        : "hover:bg-blue-700 hover:text-white"
                                } px-3 py-2 rounded-md text-sm font-medium`}
                                onClick={scrollToTop} // Scroll to top when clicked
                            >
                                {link.text}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                to={link.path}
                                className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-blue-700`}
                                onClick={scrollToTop} // Scroll to top when clicked
                            >
                                {link.text}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default StickyNavbar;
