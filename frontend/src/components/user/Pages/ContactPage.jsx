import React from 'react';
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const ContactPage = () => {
    return (
        <div className="pt-16">
            <Navbar/>
            <section className="bg-white">
                <div className="container px-6 py-12 mx-auto">
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact
                            Us</h2>
                        <p className="font-light text-center text-gray-500 sm:text-xl">We can answer your
                            questions
                            and make your experience easier!</p>
                    </div>

                    <div className="grid grid-cols-1 gap-12 mt-4 lg:grid-cols-3">
                        <div className="flex flex-col items-center justify-center text-center mb-4">
                            <span className="p-3 text-blue-500 rounded-full bg-blue-100/80">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5"
                                     stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                                </svg>
                            </span>
                            <h2 className="mt-4 text-lg font-medium text-gray-800">Offices</h2>
                            <p className="mt-2 text-gray-500">Come visit our offices.</p>
                            <p className="mt-2 text-blue-500"><a
                                href="https://www.google.com/maps/search/?api=1&query=3905+Major+Mackenzie+Dr+W+Unit+114,+Vaughn,+On"
                                target="_blank" rel="noopener noreferrer" className="hover:underline">
                                3905 Major Mackenzie Dr W <br/>Unit 114, Vaughn, On
                            </a></p>
                            <p className="mt-2 text-blue-500"><a
                                href="https://www.google.com/maps/search/?api=1&query=1280+Finch+Ave.+W+Suite+707,+North+York,+ON"
                                target="_blank" rel="noopener noreferrer" className="hover:underline">
                                1280 Finch Ave. W. <br/>Suite 707, North York, ON
                            </a></p>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center mb-4">
                            <span className="p-3 text-blue-500 rounded-full bg-blue-100/80">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5"
                                     stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                                </svg>
                            </span>
                            <h2 className="mt-4 text-lg font-medium text-gray-800">Phone</h2>
                            <p className="mt-2 text-gray-500">Call us to speak to a member of our team.</p>
                            <p className="mt-2 text-blue-500">Vaughn Location:<br/>
                                <a href="tel:905-303-1256" className="hover:underline">905-303-1256</a>
                            </p>
                            <p className="mt-2 text-blue-500">North York Location:<br/>
                                <a href="tel:905-303-1256" className="hover:underline">905-303-1256</a>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center">
                            <span className="p-3 text-blue-500 rounded-full bg-blue-100/80">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5"
                                     stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                                </svg>
                            </span>

                            <h2 className="mt-4 text-lg font-medium text-gray-800">Email Us</h2>
                            <p className="mt-2 text-gray-500">Email us for general queries.</p>
                            <p className="mt-2 text-blue-500"><a
                                href="mailto:info@mydent.ca">info@mydent.ca</a><br/><br/><br/><br/></p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="py-2">
                <div className="p-6 min-w-screen min-h-screen bg-gray-50 flex items-center justify-center">
                    <div
                        className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
                        <div className="w-full max-w-6xl mx-auto">
                            <h2 className="text-4xl font-bold text-center mt-4 dokdo-regular mb-4">Visit Our
                                Offices!</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                                <div>
                                    <h3 className="text-xl font-extrabold mb-2 life-savers-bold">North York Office</h3>
                                    <p>
                                        <a href="https://www.google.com/maps/search/?api=1&query=1280+Finch+Ave.+W+Suite+707,+North+York,+ON"
                                           target="_blank" rel="noopener noreferrer" className="mb-2 hover:underline">
                                            1280 Finch Ave. W. <br/>Suite 707, North York, ON
                                        </a>
                                    </p>
                                    <p className="mt-2 mb-2">
                                        <a href="tel:905-303-1256" className="mb-4 hover:underline">Call:
                                            905-303-1256</a>
                                    </p>
                                    <div className="aspect-w-16 aspect-h-12">
                                        <iframe
                                            title="North York Map"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.365701309409!2d-79.52015368425304!3d43.76705407911803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b33f0b1969d05%3A0xa389f01919b4a3a5!2s1280%20Finch%20Ave%20W%20%23707%2C%20North%20York%2C%20ON%20M3J%203K6%2C%20Canada!5e0!3m2!1sen!2sus!4v1647810068609!5m2!1sen!2sus"
                                            allowFullScreen
                                            loading="lazy"
                                            className="w-full h-full"
                                        ></iframe>
                                    </div>
                                    <p className="mt-4 mb-2">
                                        Saturday - Friday: 10:00 am - 7:00 pm<br/>Sunday: Contact Us For Availability
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-extrabold mb-2 life-savers-bold">Vaughn Office</h3>
                                    <p>
                                        <a href="https://www.google.com/maps/search/?api=1&query=3905+Major+Mackenzie+Dr+W+Unit+114,+Vaughn,+On"
                                           target="_blank" rel="noopener noreferrer" className="mb-2 hover:underline">
                                            3905 Major Mackenzie Dr W <br/>Unit 114, Vaughn, On
                                        </a>
                                    </p>
                                    <p className="mt-2 mb-2">
                                        <a href="tel:905-303-1256" className="mb-4 hover:underline">Call:
                                            905-303-1256</a>
                                    </p>
                                    <div className="aspect-w-16 aspect-h-16">
                                        <iframe
                                            title="Vaughn Map"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.627985869135!2d-79.57400808425322!3d43.85106517911738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b388b6a91e8f1%3A0xef32f651d0e99f79!2s3905%20Major%20Mackenzie%20Dr%20W%20%23114%2C%20Vaughan%2C%20ON%20L4H%200A4%2C%20Canada!5e0!3m2!1sen!2sus!4v1647810144227!5m2!1sen!2sus"
                                            allowFullScreen
                                            loading="lazy"
                                            className="w-full h-full"
                                        ></iframe>
                                    </div>
                                    <p className="mt-4 mb-2">
                                        Saturday - Friday: 10:00 am - 7:00 pm<br/>Sunday: Contact Us For Availability
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default ContactPage;
