import React from 'react';
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import DrAliImage from '../images/docAli.png';
import OfficeManagerMesut from '../images/officeManMesut.png';
import DrMostafaImage from '../images/docMostafa.png';
import RandomWorker from '../images/randomWorker.png';

const AboutPage = () => {
    return (
        <div className="container mx-auto px-4">
            <Navbar/>
            <div className="bg-white py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-8">Meet Your Dental Specialists</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        <div className="bg-sky-100 rounded-xl p-4 flex flex-col items-center">
                            <img src={DrAliImage} alt="Dr. Ali NamAvarian" className="w-32 h-32 rounded-full mb-4"/>
                            <h3 className="text-lg font-semibold">Dr. Ali NamAvarian</h3>
                            <p>Dentist (DMD, DDS)</p>
                            <p className="text-gray-600 mt-2">Specialized in surgical and implant treatments, excels in
                                All-on-Four, immediate implant replacement, and single implant procedures.</p>
                        </div>
                        <div className="bg-sky-100 rounded-xl p-4 flex flex-col items-center">
                            <img src={DrMostafaImage} alt="Dr. Mostafa NamAvarian" className="w-32 h-32 rounded-full mb-4"/>
                            <h3 className="text-lg font-semibold">Dr. Mostafa NamAvarian</h3>
                            <p>Dentist (DDS)</p>
                            <p className="text-gray-600 mt-2">Drawing upon three decades of dental expertise,
                                Dr. M. NamAvarian passionately delivers a diverse array of treatments, catering to
                                patients of all ages. His unwavering commitment lies in guiding individuals towards not
                                just a healthy but a truly radiant smile.</p>
                        </div>
                        <div className="bg-sky-100 rounded-xl p-4 flex flex-col items-center">
                            <img src={OfficeManagerMesut} alt="Office Manager Mesut" className="w-32 h-32 rounded-full mb-4"/>
                            <h3 className="text-lg font-semibold">Mesut Yagci</h3>
                            <p>Office Manager</p>
                            <p className="text-gray-600 mt-2">Through many years of experience , Mesut has a vast dental
                                knowledge that can assist our patients. He can also speak Turkish if needed.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-8">Meet Our Stellar Support Team: Ensuring Your
                        Smile Shines Bright</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
                        <div className="bg-sky-100 rounded-xl p-4 flex flex-col items-center">
                            <img src={RandomWorker} alt="Hellen" className="w-24 h-24 rounded-full mb-4"/>
                            <h3 className="text-lg font-semibold">Hellen</h3>
                            <p>Dental Hygienist</p>
                        </div>
                        <div className="bg-sky-100 rounded-xl p-4 flex flex-col items-center">
                            <img src={RandomWorker} alt="Suna" className="w-24 h-24 rounded-full mb-4"/>
                            <h3 className="text-lg font-semibold">Hellen</h3>
                            <p>Dental Assistant</p>
                        </div>
                        <div className="bg-sky-100 rounded-xl p-4 flex flex-col items-center">
                            <img src={RandomWorker} alt="Zeynab" className="w-24 h-24 rounded-full mb-4"/>
                            <h3 className="text-lg font-semibold">Hellen</h3>
                            <p>Dental Hygienist</p>
                        </div>
                        <div className="bg-sky-100 rounded-xl p-4 flex flex-col items-center">
                            <img src={RandomWorker} alt="Nilgun" className="w-24 h-24 rounded-full mb-4"/>
                            <h3 className="text-lg font-semibold">Hellen</h3>
                            <p>Receptionist</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default AboutPage;
