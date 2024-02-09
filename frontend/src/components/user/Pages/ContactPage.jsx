import React from 'react';
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const ContactPage = () => {
    return (
        <div className="container mx-auto px-4">
            <Navbar/>
            <div className="flex flex-wrap justify-center items-center">
                <div className="w-full lg:w-1/2 p-8">
                    <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
                    <p className="mb-4">hi@green.com</p>
                    <div className="flex space-x-4 mb-6">
                        <a href="https://www.facebook.com/mydentToronto/" target="_blank" rel="noopener noreferrer"
                           className="mb-5 font-bold">
                            <FontAwesomeIcon icon={faFacebookF}/>
                        </a>
                        <a href="https://www.instagram.com/mydentdental/?hl=en" target="_blank"
                           rel="noopener noreferrer"
                           className="font-bold">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                    </div>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                id="fullName"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                E-mail
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                rows="4"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            Contact Us
                        </button>
                    </form>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default ContactPage;
