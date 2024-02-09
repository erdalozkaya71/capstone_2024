import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import logo from '../images/myDentLogo.png'

const Footer = () => {
    return (
        <footer className="bg-blue-800 text-white text-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-center">
                    <div className="mb-7">
                        <a href="/">
                            <img src={logo} alt="MyDent Dental Logo" className="myDentLogo" />
                        </a>
                    </div>
                    <p>Come visit the team and get a free consultation. Our team looks forward to meeting you!</p>
                    <a href="/admin/login" className="mt-4 inline-block text-blue-200 hover:text-blue-100">
                        Staff Login
                    </a>
                </div>
                <div className="flex flex-col items-center">
                    <div className="mt-2">
                    <h3 className="text-lg font-extrabold mb-4">Come Visit Us!</h3>
                    </div>
                    <p className="font-bold">Saturday - Friday</p>
                    <p>10:00 am - 7:00 pm</p>
                    <p className="mt-2 font-bold">Sunday</p>
                    <p>Contact Us For Availability</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="mt-2">
                        <h3 className="text-lg font-extrabold mb-4">Where to find us</h3>
                    </div>
                    <a href="https://www.facebook.com/mydentToronto/" target="_blank" rel="noopener noreferrer"
                       className="mb-5 font-bold">
                        <FontAwesomeIcon icon={faFacebookF}/> Facebook
                    </a>
                    <a href="https://www.instagram.com/mydentdental/?hl=en" target="_blank" rel="noopener noreferrer"
                       className="font-bold">
                        <FontAwesomeIcon icon={faInstagram}/> Instagram
                    </a>
                </div>
                <div className="flex flex-col items-center">
                    <div className="mt-2">
                        <h3 className="text-lg font-extrabold mb-4">Addresses</h3>
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=3905+Major+Mackenzie+Dr+W+Unit+114,+Vaughn,+On" target="_blank" rel="noopener noreferrer" className="mb-2 font-bold">
                        3905 Major Mackenzie Dr W Unit 114, Vaughn, On
                    </a>
                    <a href="tel:905-303-1256" className="mb-4 font-bold">Call: 905-303-1256</a>
                    <a href="https://www.google.com/maps/search/?api=1&query=1280+Finch+Ave.+W+Suite+707,+North+York,+ON" target="_blank" rel="noopener noreferrer" className="mb-2 font-bold">
                        1280 Finch Ave. W. Suite 707, North York, ON
                    </a>
                    <a href="tel:416-901-1150" className="font-bold" >Call: 416-901-1150</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
