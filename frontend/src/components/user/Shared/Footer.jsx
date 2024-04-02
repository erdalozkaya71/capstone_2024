import React from 'react';
import logo from '../images/myDentLogo.png';
import { BsFacebook, BsInstagram } from "react-icons/bs";

const CustomFooter = () => {
    return (
        <footer className="bg-gradient-to-r from-sky-500 to-blue-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between flex-wrap">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:mx-auto">
                        <div className="mb-6 md:justify-center w-full md:w-auto">
                            <a href="/" className="flex items-center sm:flex mb-4
                            md:flex justify-center mx-auto">
                                <img src={logo} className="h-12 me-3" alt="MyDent Logo" />
                            </a>
                        </div>
                        <div className="mb-8">
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Come Visit Us!</h2>
                            <ul className="text-white font-medium">
                                <li className="mb-4">
                                    <p><b>Saturday - Friday</b><br />10:00 am - 7:00 pm</p>
                                </li>
                                <li>
                                    <p>Sunday<br />Contact Us For Availability</p>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-8">
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Follow us</h2>
                            <ul className="text-white font-medium">
                                <li className="mb-4">
                                    <a href="https://www.facebook.com/mydentToronto/" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/mydentdental/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-8">
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Addresses</h2>
                            <ul className="text-white font-medium">
                                <li className="mb-1">
                                    <a href="https://www.google.com/maps/search/?api=1&query=3905+Major+Mackenzie+Dr+W+Unit+114,+Vaughn,+On" target="_blank" rel="noopener noreferrer" className="mb-2 font-bold hover:underline">
                                        3905 Major Mackenzie Dr W <br />Unit 114, Vaughn, On
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:905-303-1256" className="font-bold hover:underline">Call: 905-303-1256</a>
                                </li>

                                <li className="mb-1 mt-4">
                                    <a href="https://www.google.com/maps/search/?api=1&query=1280+Finch+Ave.+W+Suite+707,+North+York,+ON" target="_blank" rel="noopener noreferrer" className="mb-2 font-bold hover:underline">
                                        1280 Finch Ave. W. <br />Suite 707, North York, ON
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:905-303-1256" className="mb-4 font-bold hover:underline">Call: 905-303-1256</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-white sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between flex-wrap">
                    <span className="text-sm text-white sm:text-center mb-4 sm:mb-0 w-full sm:w-auto">© {new Date().getFullYear()} <a href="/" className="hover:underline"> MyDent</a></span>
                    <a href="/admin/login" className="ml-2 inline-block text-sm text-white hover:underline">Staff Login</a>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="https://www.facebook.com/mydentToronto/" className="text-white hover:text-gray-400 me-4">
                            <BsFacebook icon={BsFacebook} className="w-4 h-4" />
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="https://www.instagram.com/mydentdental/?hl=en" className="text-white hover:text-gray-400">
                            <BsInstagram icon={BsInstagram} className="w-4 h-4" />
                            <span className="sr-only">Instagram account</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default CustomFooter;
