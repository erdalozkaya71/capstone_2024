import React, { useEffect } from 'react';
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";
import { Link } from 'react-router-dom';
import ScrollReveal from "scrollreveal";
import DentalVideo from '../user/video/DentalVid3.mp4'
import Calling from './images/landingPage/calling.png'
import Mail from './images/landingPage/mail.png'
import Calendar from './images/landingPage/calendar.png'
import FillingIcon from './images/landingPage/filling.png';
import SurgeryIcon from './images/landingPage/surgery.png';
import ImplantIcon from './images/landingPage/implant.png';
import LabIcon from './images/landingPage/lab.png';
import TeethIcon from './images/landingPage/teeth.png';
import InvisalignIcon from './images/landingPage/invisalign.png';
import DrAliImage from './images/landingPage/docAli.png';
import OfficeManagerMesut from './images/landingPage/officeManMesut.png';
import DrMostafaImage from './images/landingPage/docMostafa.png';


import '../../index.css';
import { Card } from "react-bootstrap";

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
        const response = await fetch('/api/v1/bookings', {
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

const LandingPage = () => {
    useEffect(() => {
        ScrollReveal().reveal('#specialSec', {
            duration: 4000,
            distance: '90px',
            origin: 'right',
            reset:true
        });
    }, []);

    useEffect(() => {
        ScrollReveal().reveal('.bottomReveal', {
            duration: 2000,
            distance: '60px',
            origin: 'bottom',
            reset:true
        });
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const ServiceCard = ({ imgSrc, title, description, linkText, linkUrl, onClick }) => {
        return (
            <div className="bg-dark shadow mt-4">
                <Card>
                    <Card.Img variant="top" src={imgSrc} className="w-20 mx-auto mt-3" />
                    <Card.Body>
                        <Card.Title className="text-xl font-extrabold mt-4 life-savers-bold">{title}</Card.Title>
                        <Card.Text className="mt-2">{description}</Card.Text>
                        <Card.Text className="m-4 life-savers-bold font-extrabold">
                            <Link to={linkUrl} className="text-center hover:text-blue-600" onClick={onClick}>
                                <p>{linkText}</p>
                            </Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    };

    const HowToGetServiceSection = ({ handleScrollToTop }) => {
        const serviceCards = [
            {
                imgSrc: Calling,
                title: "Call Us",
                description: "Want More Info? Give Us a Call We Would Love To Talk!",
                linkText: "905-303-1256",
                linkUrl: "tel:905-303-1256",
            },
            {
                imgSrc: Calendar,
                title: "Book With Us!",
                description: "Ready to Better Your Smile? Schedule Today!",
                linkText: "Book an appointment",
                linkUrl: "/user/book-appointment",
            },
            {
                imgSrc: Mail,
                title: "Email Us",
                description: "Have Any Questions? Email Us and We Will Help!",
                linkText: "info@mydent.ca",
                linkUrl: "mailto:info@mydent.ca",
            },
        ];

        return (
            <section className="py-10 mx-4">
                <h2 className="text-4xl font-bold text-center mb-4 dokdo-regular m-2">HOW TO GET OUR SERVICE?</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center m-2">
                    {serviceCards.map((card, index) => (
                        <ServiceCard key={index} {...card} onClick={handleScrollToTop}/>
                    ))}
                </div>
            </section>
        );
    };
    const SpecialServiceCard = ({ imgSrc, title, description, linkUrl, onClick }) => {
        return (
            <div className="bg-dark shadow mt-4 card hover:bg-sky-100 duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <Link to={linkUrl} onClick={onClick} className="card hover:bg-blue-100 transition-colors">
                    <Card.Img variant="top" src={imgSrc} className="h-20 mx-auto mt-3" />
                    <Card.Body>
                        <Card.Title className="text-xl font-extrabold mt-4 life-savers-bold">{title}</Card.Title>
                        <Card.Text className="m-3">{description}</Card.Text>
                    </Card.Body>
                </Link>
            </div>
        );
    };
    const SpecialSection = ({ handleScrollToTop }) => {
        return (
            <section className="py-10" id="specialSec">
                <div className="flex justify-between">
                    <h2 className="text-4xl font-bold mb-4 dokdo-regular m-2 pl-28">WHAT MAKES US MORE SPECIAL?</h2>
                    <h3 className="text-3xl font-bold mb-4 dokdo-regular m-2 pr-40"><br />THIS IS WHAT WE CAN OFFER!</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center m-2 mt-4 mx-6">
                    <SpecialServiceCard
                        imgSrc={FillingIcon}
                        title="Direct Filling"
                        description="Precise and comfortable dental care with a high degree of resistance"
                        linkUrl="/user/services"
                        onClick={handleScrollToTop}
                    />
                    <SpecialServiceCard
                        imgSrc={SurgeryIcon}
                        title="Oral Surgery"
                        description="Precision and expertise define our oral surgery procedures, ensuring optimal outcomes for your oral health and well-being."
                        linkUrl="/user/services"
                        onClick={handleScrollToTop}
                    />
                    <SpecialServiceCard
                        imgSrc={ImplantIcon}
                        title="Dental Implants"
                        description="Extensive experience in Dental Implants with specialized care. Rediscover the joy of proper chewing!"
                        linkUrl="/user/services"
                        onClick={handleScrollToTop}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center m-2 mt-4 mx-6">
                    <SpecialServiceCard
                        imgSrc={LabIcon}
                        title="On-Site Digital Lab"
                        description="We use CEREC® technology for precise design and crafting of various dental solutions, offering optimal performance with a range of materials."
                        linkUrl="/user/services"
                        onClick={handleScrollToTop}
                    />
                    <SpecialServiceCard
                        imgSrc={InvisalignIcon}
                        title="Invisalign"
                        description="Transform your smile discreetly with Invisalign, the virtually invisible and comfortable teeth-straightening solution."
                        linkUrl="/user/services"
                        onClick={handleScrollToTop}
                    />
                    <SpecialServiceCard
                        imgSrc={TeethIcon}
                        title="Hygiene Services"
                        description="Elevate your oral health with our comprehensive Hygiene Services, ensuring a clean, fresh, and vibrant smile."
                        linkUrl="/user/services"
                        onClick={handleScrollToTop}
                    />
                </div>
            </section>
        );
    };

    const TeamSection = ({ handleScrollToTop }) => {
        return (
            <section className="py-10 mx-4">
                <h2 className="text-4xl font-bold text-center mt-4 dokdo-regular mb-4">MEET OUR TEAM</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center m-2">
                    <TeamMember
                        imgSrc={DrAliImage}
                        name="Dr. Ali NamAvarian"
                        position="Dentist (BEng, DDS)"
                        onClick={handleScrollToTop}
                    />
                    <TeamMember
                        imgSrc={DrMostafaImage}
                        name="Dr. Mostafa NamAvarian"
                        position="Dentist (DDS)"
                        onClick={handleScrollToTop}
                    />
                    <TeamMember
                        imgSrc={OfficeManagerMesut}
                        name="Mesut Yagci"
                        position="Office Manager"
                        onClick={handleScrollToTop}
                    />
                </div>
            </section>
        );
    };

    const TeamMember = ({ imgSrc, name, position, onClick }) => {
        return (
            <div className="bg-dark shadow mt-4">
                <Card.Img variant="top" src={imgSrc} className="w-40 mx-auto mt-3" />
                <Card.Body className="mb-9">
                    <Card.Title className="text-xl font-extrabold m-4 life-savers-bold">{name}</Card.Title>
                    <Link to="/user/about" onClick={onClick} className="m-4 hover:text-blue-600 transition-colors">
                        {position}
                    </Link>
                </Card.Body>
            </div>
        );
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
        <div className="pt-16">
            <Navbar/>
            {/* Video section */}
            <section className="relative" style={{
                background: "linear-gradient(to right, #020609, #012f4e)"
            }}>
                {/* Video */}
                <video
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                    style={{minHeight: "100vh"}} // Set minimum height to cover the viewport
                >
                    <source src={DentalVideo} type="video/mp4"/>
                </video>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-4 font-chicle"
                        style={{fontSize: '5vw'}}> {/* Use vw units for responsive font size */}
                        Modern Dentistry for All Ages in the GTA</h1>
                    <h2 className="mb-6 dokdo-regular" style={{fontSize: '25px'}}>Offering Wide Range of Services
                        using
                        the Latest Digital Technology</h2>
                    <div className="flex justify-center space-x-4">
                        <Link to="/user/book-appointment" onClick={handleScrollToTop}
                              className="bg-blue-800 text-white py-2 px-4 rounded hover:bg-white hover:text-gray-800 transition-colors">
                            Request Appointment
                        </Link>
                        {/* Styled button for Learn More */}
                        <Link to="/user/services" onClick={handleScrollToTop}
                              className="bg-blue-800 text-white py-2 px-4 rounded hover:bg-white hover:text-gray-800 transition-colors">
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>

            {/* How to get our service section */}
            <HowToGetServiceSection handleScrollToTop={handleScrollToTop}/>

            {/* What makes us special section */}
            <SpecialSection handleScrollToTop={handleScrollToTop}/>

            {/* Let us brighten your smile section */}
            <section className="bg-gradient-to-r from-sky-500 to-blue-900 py-10 text-center" id="smileSec">
                <h2 className="text-4xl font-bold text-center mt-4 dokdo-regular text-white">Let Us Brighten Your
                    Smile!</h2>
                <p className="m-8 life-savers-bold text-white font-extrabold">Let our team of experienced &
                    highly-trained dentists give you the smile you
                    deserve. <br/>With our accessible location, and diverse staff we are multilingual, we can give
                    you the
                    smile you dream of!</p>
                <Link to="/user/book-appointment" onClick={handleScrollToTop}
                      className="bg-sky-50 text-black py-2 px-4 rounded hover:bg-white hover:text-gray-800 transition-colors">
                    Make an Appointment
                </Link>
            </section>

            {/* Meet our team section */}
            <TeamSection handleScrollToTop={handleScrollToTop}/>


            <section className="py-10 bg-gradient-to-r from-sky-500 to-blue-900">
                <h2 className="text-4xl font-bold text-center mt-4 dokdo-regular mb-4 text-white">Visit Our
                    Offices!</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div>
                        <h3 className="text-xl font-extrabold mb-2 life-savers-bold text-white">North York
                            Office</h3>
                        <p>
                            <a href="https://www.google.com/maps/search/?api=1&query=1280+Finch+Ave.+W+Suite+707,+North+York,+ON"
                               target="_blank" rel="noopener noreferrer"
                               className="text-white mb-2 hover:underline">
                                1280 Finch Ave. W. <br/>Suite 707, North York, ON
                            </a>
                        </p>
                        <p className="mt-2 mb-2">
                            <a href="tel:905-303-1256" className="mb-4 text-white hover:underline">Call:
                                905-303-1256</a>
                        </p>
                        <div className="aspect-w-16 aspect-h-12 bottomReveal">
                            <iframe
                                title="North York Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.365701309409!2d-79.52015368425304!3d43.76705407911803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b33f0b1969d05%3A0xa389f01919b4a3a5!2s1280%20Finch%20Ave%20W%20%23707%2C%20North%20York%2C%20ON%20M3J%203K6%2C%20Canada!5e0!3m2!1sen!2sus!4v1647810068609!5m2!1sen!2sus"
                                allowFullScreen
                                loading="lazy"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                        <p className="text-white mt-4 mb-2">
                            Saturday - Friday: 10:00 am - 7:00 pm<br/>Sunday: Contact Us For Availability
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-extrabold mb-2 life-savers-bold text-white">Vaughn Office</h3>
                        <p>
                            <a href="https://www.google.com/maps/search/?api=1&query=3905+Major+Mackenzie+Dr+W+Unit+114,+Vaughn,+On"
                               target="_blank" rel="noopener noreferrer"
                               className="text-white mb-2 hover:underline">
                                3905 Major Mackenzie Dr W <br/>Unit 114, Vaughn, On
                            </a>
                        </p>
                        <p className="mt-2 mb-2">
                            <a href="tel:905-303-1256" className="mb-4 text-white hover:underline">Call:
                                905-303-1256</a>
                        </p>
                        <div className="aspect-w-16 aspect-h-16 bottomReveal">
                            <iframe
                                title="Vaughn Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.627985869135!2d-79.57400808425322!3d43.85106517911738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b388b6a91e8f1%3A0xef32f651d0e99f79!2s3905%20Major%20Mackenzie%20Dr%20W%20%23114%2C%20Vaughan%2C%20ON%20L4H%200A4%2C%20Canada!5e0!3m2!1sen!2sus!4v1647810144227!5m2!1sen!2sus"
                                allowFullScreen
                                loading="lazy"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                        <p className="text-white mt-4 mb-2">
                            Saturday - Friday: 10:00 am - 7:00 pm<br/>Sunday: Contact Us For Availability
                        </p>
                    </div>
                </div>
            </section>

            <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
                <div className="container max-w-screen-lg mx-auto">
                    <div>
                        <h2 className="font-semibold text-xl text-gray-600 mb-4 sm:mt-14 md: mt-14">Schedule With Us
                            Today</h2>
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

export default LandingPage;
