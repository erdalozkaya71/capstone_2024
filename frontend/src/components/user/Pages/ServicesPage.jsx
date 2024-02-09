import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import ToothIcon from '../images/tooth.png';
import WhiteningIcon from '../images/teethWhitening.png';
import RootIcon from '../images/rootCanal.png';
import HygieneIcon from '../images/hygieneTools.png';
import FillingIcon from '../images/filling.png';
import InvisalignIcon from '../images/invisalign.png';
import VeneersIcon from '../images/veneers.png';
import ImplantIcon from '../images/implants.png';
import MouthWearIcon from '../images/mouthWear.png';
import ToothXRayIcon from '../images/toothXRay.png';
import DentalSeatIcon from '../images/dentalSeat.png';
import SurgicalToothIcon from '../images/surgicalTooth.png';
import PaymentMethods from '../images/paymentMethods.png';

const ServicePage = () => {
    return (
        <div className="container mx-auto px-4">
            <Navbar/>
            <div className="bg-gradient-to-r from-slate-50 to-sky-200">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-5xl font-bold text-center mb-12 mt-8">Everything you need in one place.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left">
                        <div>
                            <img
                                src={ToothIcon}
                                alt="Tooth"
                                className="mx-auto md:mx-0 mb-4 h-10"
                            />
                            <h3 className="text-xl font-semibold mb-2">Crown and Bridge</h3>
                            <p>Bridges fill gaps, enhancing function and appearance. Crowns restore and beautify teeth,
                                offering strength and aesthetic improvements through personalized care.</p>
                        </div>
                        <div>
                            <img
                                src={WhiteningIcon}
                                alt="Whitening Tooth"
                                className="mx-auto md:mx-0 mb-4 h-10"
                            />
                            <h3 className="text-xl font-semibold mb-2">Teeth Whitening</h3>
                            <p>Our customized whitening kits are tailored to restore your bright white smile. Contact us
                                today to explore the best option for you.</p>
                        </div>
                        <div>
                            <img
                                src={RootIcon}
                                alt="Root Canal Tooth"
                                className="mx-auto md:mx-0 mb-4 h-10"
                            />
                            <h3 className="text-xl font-semibold mb-2">Root Canal Therapy</h3>
                            <p>Treat damaged tooth pulp with a root canal for preservation, followed by applying a crown
                                to maintain structure and strength.</p>
                        </div>
                        <div>
                            <img
                                src={HygieneIcon}
                                alt="Hygiene Tools"
                                className="mx-auto md:mx-0 mb-4 h-10"
                            />
                            <h3 className="text-xl font-semibold mb-2">Hygiene Services</h3>
                            <p>Ensure a healthy smile with routine care, including exams, cleanings, fluoride
                                treatments, and daily oral hygiene practices. Prevent pain, infections, and tooth loss
                                for overall well-being.</p>
                        </div>
                        <div>
                            <img
                                src={FillingIcon}
                                alt="Filling Tooth"
                                className="mx-auto md:mx-0 mb-4 h-10"
                            />
                            <h3 className="text-xl font-semibold mb-2">Direct Filling</h3>
                            <p>Restore damaged teeth with either amalgam or tooth-colored composite fillings, providing
                                durable and natural-looking results.</p>
                        </div>
                        <div>
                            <img
                                src={InvisalignIcon}
                                alt="Invisalign Tooth"
                                className="mx-auto md:mx-0 mb-4 h-10"
                            />
                            <h3 className="text-xl font-semibold mb-2">Invisalign</h3>
                            <p>Invisalign transforms your smile discreetly with clear aligners, ensuring comfort, easy
                                oral care, and a flexible lifestyle. With fewer doctor visits and potential insurance
                                coverage, it's a convenient and affordable option.</p>
                        </div>
                        <div>
                            <img
                                src={VeneersIcon}
                                alt="Vaneers"
                                className="mx-auto md:mx-0 mb-4 h-10"
                            />
                            <h3 className="text-xl font-semibold mb-2">Porcelain Veneers</h3>
                            <p>Perfect your smile with porcelain veneers—an excellent, natural-looking alternative to
                                crowns. These thin, durable shells require a minimally invasive procedure for lasting
                                results.</p>
                        </div>
                        <div>
                            <img
                                src={ImplantIcon}
                                alt="Tooth Implants"
                                className="mx-auto md:mx-0 mb-4 h-10"
                            />
                            <h3 className="text-xl font-semibold mb-2">Implants</h3>
                            <p>Our dentists use titanium implants to securely anchor artificial teeth in the jaw,
                                offering a natural feel, durability, and decay resistance for comfortable chewing.</p>
                        </div>
                        <div>
                            <img
                                src={MouthWearIcon}
                                alt="Mouth Wear"
                                className="mx-auto md:mx-0 mb-4 h-10"
                            />
                            <h3 className="text-xl font-semibold mb-2">Mouth Wear</h3>
                            <p>Custom mouthguards protect teeth during sports and prevent damage from bruxism.
                                Crafted for a perfect fit, they save the inconvenience and cost of restoring or
                                replacing teeth.</p>
                        </div>
                        <div>
                            <img
                                src={ToothXRayIcon}
                                alt="On-site Digital Lab"
                                className="mx-auto md:mx-0 mb-4 h-10"
                            />
                            <h3 className="text-xl font-semibold mb-2">On-site Digital Lab</h3>
                            <p>CEREC® technology uses digital imaging for precise design and creation of various
                                dental products, offering a range of materials for optimal performance and quality.</p>
                        </div>
                        <div>
                            <img
                                src={DentalSeatIcon}
                                alt="Dental Seat"
                                className="mx-auto md:mx-0 mb-4 h-10"
                            />
                            <h3 className="text-xl font-semibold mb-2">Digital X-rays</h3>
                            <p>We use advanced digital X-rays for precise monitoring, offering high-resolution images
                                with reduced radiation, tailored to individual needs based on medical and dental
                                history.</p>
                        </div>
                        <div>
                            <img
                                src={SurgicalToothIcon}
                                alt="Performing Surgery on Tooth"
                                className="mx-auto md:mx-0 mb-4 h-10"
                            />
                            <h3 className="text-xl font-semibold mb-2">Oral Surgery</h3>
                            <p>At our clinic, we address impacted wisdom teeth or extreme cases like cyst development
                                through extraction. For other teeth, extraction is a last resort after exploring options
                                like root canal therapy, prompted by factors such as trauma, severe decay, or extensive
                                bone loss for overall oral health preservation.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-12">
                <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between">
                    <div className="md:w-1/2">
                        <img src={PaymentMethods} alt="Payment Methods" className="mb-6 md:mb-0"/>
                    </div>
                    <div className="md:w-1/2 text-lg">
                        <h2 className="text-4xl font-semibold mb-4">PAYMENT METHODS</h2>
                        <p className="mb-4">
                            To make your visit as convenient as possible, we offer direct insurance billing. Our
                            experienced team will submit your claims to your insurance and take care of all the
                            communications with your dental insurance provider. We are pleased to accept various payment
                            methods including Credit Card (Visa / MasterCard), and Debit (Interac) or cash. In case you
                            are in need of extensive dental work not covered by insurance, we offer special financing
                            plans subject to approval and available on a case by case basis. Please contact us for more
                            information.
                        </p>
                        <Link to="/user/contact"
                              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ServicePage;
