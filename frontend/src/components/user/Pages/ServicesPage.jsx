import React, {useEffect} from 'react';
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
import ScrollReveal from "scrollreveal";

const ServicePage = () => {
    useEffect(() => {
        ScrollReveal().reveal('.bottomReveal', {
            duration: 3000,
            distance: '100px',
            origin: 'bottom',
            reset:true
        });}, []);
    useEffect(() => {
        ScrollReveal().reveal('#rightReveal', {
            duration: 2000,
            distance: '90px',
            origin: 'left',
            reset:true
        });}, []);
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="pt-8">
            <Navbar/>
            <div className="bg-gradient-to-r from-slate-50 to-sky-200">
                <div className="max-w-4xl mx-auto px-4" className="bottomReveal">
                    <h2 className="text-5xl font-bold mb-4 dokdo-regular mt-8">Everything you need in one place.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left">
                        <div
                            className="flex-col justify-center overflow-hidden" style={{height: '20rem'}}>
                            <div
                                className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                                <span
                                    className="absolute top-8 z-2 h-12 w-12 rounded-full bg-sky-500 transition-all duration-500 group-hover:scale-[30]"></span>
                                <div className="relative z-10 mx-auto max-w-md">
                                    <span
                                        className="absolute h-10 w-10 place-items-center ml-1 rounded-full transition-all duration-300 group-hover:bg-sky-400">
                                        <img src={ToothIcon} alt="Tooth"/>
                                    </span>
                                    <div
                                        className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                        <h3 className="text-xl font-semibold mb-2 mt-10">Crown and Bridge</h3>
                                        <p>Bridges fill gaps, enhancing function and appearance. Crowns restore and
                                            beautify teeth,
                                            offering strength and aesthetic improvements through personalized care.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex-col justify-center overflow-hidden">
                            <div
                                className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8
                                shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1
                                hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                                <span
                                    className="absolute top-8 z-2 h-12 w-12 rounded-full bg-sky-500 transition-all duration-500 group-hover:scale-[30]"></span>
                                <div className="relative z-10 mx-auto max-w-md">
                                    <span
                                        className="absolute h-10 w-10 place-items-center ml-1 rounded-full transition-all duration-300 group-hover:bg-sky-400">
                                        <img src={WhiteningIcon} alt="Tooth Whitening"/>
                                </span>
                                    <div
                                        className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                        <h3 className="text-xl font-semibold mb-2 mt-10">Teeth Whitening</h3>
                                        <p>Our customized whitening kits are tailored to restore your bright white
                                            smile. Contact us
                                            today to explore the best option for you.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex-col justify-center overflow-hidden">
                            <div
                                className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                                <span
                                    className="absolute top-8 z-2 h-12 w-12 rounded-full bg-sky-500 transition-all duration-500 group-hover:scale-[30]"></span>
                                <div className="relative z-10 mx-auto max-w-md">
                                    <span
                                        className="absolute h-10 w-10 place-items-center ml-1 rounded-full transition-all duration-300 group-hover:bg-sky-400">
                                        <img src={RootIcon} alt="Root Canal"/>
                                    </span>
                                    <div
                                        className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                        <h3 className="text-xl font-semibold mb-2 mt-10">Root Canal Therapy</h3>
                                        <p>Treat damaged tooth pulp with a root canal for preservation, followed by
                                            applying a crown
                                            to maintain structure and strength.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex-col justify-center overflow-hidden">
                            <div
                                className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                                <span
                                    className="absolute top-8 z-2 h-12 w-12 rounded-full bg-sky-500 transition-all duration-500 group-hover:scale-[30]"></span>
                                <div className="relative z-10 mx-auto max-w-md">
                                    <span
                                        className="absolute h-10 w-10 place-items-center ml-1 rounded-full transition-all duration-300 group-hover:bg-sky-400">
                                        <img src={InvisalignIcon} alt="Invisalign"/>
                                    </span>
                                    <div
                                        className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                        <h3 className="text-xl font-semibold mb-2 mt-10">Invisalign</h3>
                                        <p>Invisalign transforms your smile discreetly with clear aligners, ensuring
                                            comfort, easy
                                            oral care, and a flexible lifestyle. With fewer doctor visits and potential
                                            insurance
                                            coverage, it's a convenient and affordable option.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex-col justify-center overflow-hidden">
                            <div
                                className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                                <span
                                    className="absolute top-8 z-2 h-12 w-12 rounded-full bg-sky-500 transition-all duration-500 group-hover:scale-[30]"></span>
                                <div className="relative z-10 mx-auto max-w-md">
                                    <span
                                        className="absolute h-10 w-10 place-items-center ml-1 rounded-full transition-all duration-300 group-hover:bg-sky-400">
                                        <img src={HygieneIcon} alt="Hygiene Tools"/>
                                </span>
                                    <div
                                        className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                        <h3 className="text-xl font-semibold mb-2 mt-10">Hygiene Services</h3>
                                        <p>Ensure a healthy smile with routine care, including exams, cleanings,
                                            fluoride
                                            treatments, and daily oral hygiene practices. Prevent pain, infections, and
                                            tooth loss
                                            for overall well-being.<br/><br/></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex-col justify-center overflow-hidden">
                            <div
                                className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                                <span
                                    className="absolute top-8 z-2 h-12 w-12 rounded-full bg-sky-500 transition-all duration-500 group-hover:scale-[30]"></span>
                                <div className="relative z-10 mx-auto max-w-md">
                                    <span
                                        className="absolute h-7 w-7 place-items-center ml-2.5 mb-2.5 rounded-full transition-all duration-300 group-hover:bg-sky-400">
                                        <img src={FillingIcon} alt="Filling Tooth"/>
                                    </span>
                                    <div
                                        className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                        <h3 className="text-xl font-semibold mb-2 mt-10">Direct Filling</h3>
                                        <p>Restore damaged teeth with either amalgam or tooth-colored composite
                                            fillings, providing
                                            durable and natural-looking results.<br/><br/><br/></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex-col justify-center overflow-hidden">
                            <div
                                className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                                <span
                                    className="absolute top-8 z-2 h-12 w-12 rounded-full bg-sky-500 transition-all duration-500 group-hover:scale-[30]"></span>
                                <div className="relative z-10 mx-auto max-w-md">
                                    <span
                                        className="absolute h-10 w-10 place-items-center ml-1 rounded-full transition-all duration-300 group-hover:bg-sky-400">
                                        <img src={VeneersIcon} alt="Veneers"/>
                                    </span>
                                    <div
                                        className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                        <h3 className="text-xl font-semibold mb-2 mt-10">Porcelain Veneers</h3>
                                        <p>Perfect your smile with porcelain veneers—an excellent, natural-looking
                                            alternative to
                                            crowns. These thin, durable shells require a minimally invasive procedure
                                            for lasting
                                            results.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex-col justify-center overflow-hidden">
                            <div
                                className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                                <span
                                    className="absolute top-8 z-2 h-12 w-12 rounded-full bg-sky-500 transition-all duration-500 group-hover:scale-[30]"></span>
                                <div className="relative z-10 mx-auto max-w-md">
                                    <span
                                        className="absolute h-8 w-8 place-items-center ml-1.5 mb-1.5 rounded-full transition-all duration-300 group-hover:bg-sky-400">
                                        <img src={ImplantIcon} alt="Tooth Implants"/>
                                </span>
                                    <div
                                        className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                        <h3 className="text-xl font-semibold mb-2 mt-10">Implants</h3>
                                        <p>Our dentists use titanium implants to securely anchor artificial teeth in the
                                            jaw,
                                            offering a natural feel, durability, and decay resistance for comfortable
                                            chewing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex-col justify-center overflow-hidden">
                            <div
                                className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                                <span
                                    className="absolute top-8 z-2 h-12 w-12 rounded-full bg-sky-500 transition-all duration-500 group-hover:scale-[30]"></span>
                                <div className="relative z-10 mx-auto max-w-md">
                                    <span
                                        className="absolute h-10 w-10 place-items-center ml-1 rounded-full transition-all duration-300 group-hover:bg-sky-400">
                                        <img src={MouthWearIcon} alt="Mouth Wear"/>
                                    </span>
                                    <div
                                        className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                        <h3 className="text-xl font-semibold mb-2 mt-10">Mouth Wear</h3>
                                        <p>Custom mouthguards protect teeth during sports and prevent damage from
                                            bruxism.
                                            Crafted for a perfect fit, they save the inconvenience and cost of restoring
                                            or replacing teeth.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex-col justify-center overflow-hidden">
                            <div
                                className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                                <span
                                    className="absolute top-8 z-2 h-12 w-12 rounded-full bg-sky-500 transition-all duration-500 group-hover:scale-[30]"></span>
                                <div className="relative z-10 mx-auto max-w-md">
                                    <span
                                        className="absolute h-10 w-10 place-items-center ml-1 rounded-full transition-all duration-300 group-hover:bg-sky-400">
                                        <img src={ToothXRayIcon} alt="On-site Digital Lab"/>
                                    </span>
                                    <div
                                        className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                        <h3 className="text-xl font-semibold mb-2 mt-10">On-site Digital Lab</h3>
                                        <p>CEREC® technology uses digital imaging for precise design and creation of
                                            various
                                            dental products, offering a range of materials for optimal performance and
                                            quality.<br/><br/><br/><br/></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex-col justify-center overflow-hidden">
                            <div
                                className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                                <span
                                    className="absolute top-8 z-2 h-12 w-12 rounded-full bg-sky-500 transition-all duration-500 group-hover:scale-[30]"></span>
                                <div className="relative z-10 mx-auto max-w-md">
                                    <span
                                        className="absolute h-10 w-10 place-items-center ml-1 rounded-full transition-all duration-300 group-hover:bg-sky-400">
                                        <img src={DentalSeatIcon} alt="Dental Seat"/>
                                </span>
                                    <div
                                        className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                        <h3 className="text-xl font-semibold mb-2 mt-10">Digital X-Ray</h3>
                                        <p>We use advanced digital X-rays for precise monitoring, offering
                                            high-resolution images
                                            with reduced radiation, tailored to individual needs based on medical and
                                            dental
                                            history.<br/><br/><br/><br/></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex-col justify-center overflow-hidden mb-10">
                            <div
                                className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                                <span
                                    className="absolute top-8 z-2 h-12 w-12 rounded-full bg-sky-500 transition-all duration-500 group-hover:scale-[30]"></span>
                                <div className="relative z-10 mx-auto max-w-md">
                                    <span
                                        className="absolute h-10 w-10 place-items-center ml-1 rounded-full transition-all duration-300 group-hover:bg-sky-400">
                                        <img src={SurgicalToothIcon} alt="Surgery on Tooth"/>
                                    </span>
                                    <div
                                        className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                        <h3 className="text-xl font-semibold mb-2 mt-10">Oral Surgery</h3>
                                        <p>At our clinic, we address impacted wisdom teeth or extreme cases like cyst
                                            development
                                            through extraction. For other teeth, extraction is a last resort after
                                            exploring options
                                            like root canal therapy, prompted by factors such as trauma, severe decay,
                                            or extensive
                                            bone loss for overall oral health preservation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-12">
                <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between">
                    <div className="md:w-1/2">
                        <img src={PaymentMethods} alt="Payment Methods" className="mb-6 md:mb-0" id="rightReveal"/>
                    </div>
                    <div className="md:w-1/2 text-lg">
                        <h2 className="text-5xl font-bold mb-4 dokdo-regular">PAYMENT METHODS</h2>
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
                              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-gradient-to-r from-blue-700
                              to-blue-800 shadow-2xl transition-colors" onClick={handleScrollToTop}>
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
