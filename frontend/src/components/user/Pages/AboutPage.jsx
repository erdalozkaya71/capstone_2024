import React, {useEffect} from 'react';
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import DrAliImage from '../images/docAli.png';
import OfficeManagerMesut from '../images/officeManMesut.png';
import DrMostafaImage from '../images/docMostafa.png'
import PatientDentist from '../images/PatientDentist.png';
import ScrollReveal from "scrollreveal";
import HellenDentalHyg from '../images/Hellen.png';
import SunaDentalAss from '../images/Suna.png';
import ZeynepDentalAss from '../images/Zeynep.png';
import NilgunDentalAss from '../images/Nilgun.png';
import GulcanRec from '../images/Gulcan.png';
import CrownBefore from '../images/CrownBefore.png'
import CrownAfter from '../images/CrownAfter.png'
import TeethWhiteningBefore from '../images/TeethWhiteningBefore.png'
import TeethWhiteningAfter from '../images/TeethWhiteningAfter.png'
import InvisalignBefore from '../images/InvisalignBefore.png'
import InvisalignAfter from '../images/InvisalignAfter.png'
import PorcelainVaneersBefore from '../images/PorcelainVeneersBefore.png'
import PorcelainVaneersAfter from '../images/PorcelainVeneersAfter.png'
import {Card} from "react-bootstrap";
import ReactCompareImage from "react-compare-image";


const AboutPage = () => {
    useEffect(() => {
        ScrollReveal().reveal('.rightReveal', {
            duration: 2000,
            distance: '90px',
            origin: 'left',
            reset:true
        });}, []);

    useEffect(() => {
        ScrollReveal().reveal('.bottomReveal', {
            duration: 2000,
            distance: '90px',
            origin: 'bottom'
        });}, []);


    return (
        <div className="pt-16">
            <Navbar/>
            <section className="bg-gradient-to-r from-slate-50 to-sky-200">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="text-center mx-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                            We Put Your Smile First!
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-0 md:text-lg lg:text-xl">
                            We strive to bring a positive environment for our patients. With our exceptional team
                            we are able to provide services that are specifically tailored for you! At MyDent Dental,
                            caring for your pearly whites offers countless reasons to love. From accommodating
                            scheduling
                            to top-notch care and a wealth of patient amenities, we provide everything you anticipate
                            and more.
                        </p>
                        <a href="/user/book-appointment"
                           className="inline-flex items-center justify-center px-5 py-3 mr-3 bg-white ring-1 ring-gray-900/5
                           text-gray-900 text-base font-medium text-center rounded-lg bg-primary-700 transition-all
                           duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:text-white
                           hover:bg-gradient-to-r from-sky-500 to-blue-900 mt-4">
                            Book An Appointment
                        </a>
                        <p className="max-w-2xl mt-4 font-light text-gray-500 text-small">
                            Or Give Us a Call:&nbsp;
                            <a href="tel:905-303-1256"
                               className="mt-1 hover:text-blue-800 hover:underline transition-all duration-1000">
                                905-303-1256
                            </a>
                        </p>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src={PatientDentist}
                             alt="Patient and Dentist" className='mx-auto rightReveal'
                             style={{width: '26rem', transform: 'rotate(5deg)'}}/>
                    </div>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className="bg-gradient-to-r from-slate-50 to-sky-200"
                    style={{position: 'relative', bottom: '-1px'}}
                >
                    <path
                        fill="#FFFFFF"
                        fillOpacity="1"
                        d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,101.3C672,128,768,160,864,170.7C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1048,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </section>

            <div className="py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="rightReveal mb-28 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Meet
                        Your Dental Specialists</h2>
                    <div
                        className='grid grid-cols-1 sm: lg:grid-cols-3 lg:gap-8 justify-center from-gray-700 via-gray-800 to-gray-900 mt-10'>
                        <div
                            className="relative w-full group max-w-md min-w-0 mx-auto mt-6 mb-20 break-words bg-white border shadow-2xl md:max-w rounded-xl
                            transition-all duration-300 hover:-translate-y-1 hover:shadow-sky-400">
                            <div className="pb-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="flex justify-center w-full">
                                        <div className="relative">
                                            <img src={DrAliImage} alt='Dr. Ali NamAvarian'
                                                 className="border-white rounded-full align-middle border-8 absolute -m-16 -ml-18 lg:-ml-16 max-w-[150px]"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 mt-20 text-center">
                                    <h3 className="mb-1 text-2xl font-bold leading-normal text-gray-700">Dr. Ali
                                        NamAvarian</h3>
                                    <div className="flex flex-row justify-center w-full mx-auto space-x-2 text-center">
                                        <div
                                            className="text-sm font-bold tracking-wide text-gray-600 font-mono">
                                            Dentist (DMD, DDS)
                                        </div>
                                    </div>

                                </div>
                                <div
                                    className="pt-6 mx-6 mt-6 text-center border-t border-gray-200">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full px-6">
                                            <p className="mb-4 font-light leading-relaxed text-gray-600">
                                                Specialized in surgical and implant treatments, excels in
                                                All-on-Four, immediate implant replacement, and single implant
                                                procedures.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="relative w-full group max-w-md min-w-0 mx-auto mt-6 mb-20 break-words bg-white border shadow-2xl md:max-w-sm rounded-xl
                            transition-all duration-300 hover:-translate-y-1 hover:shadow-sky-400">
                            <div className="pb-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="flex justify-center w-full">
                                        <div className="relative">
                                            <img src={DrMostafaImage} alt='Dr. Mostafa NamAvarian'
                                                 className="border-white rounded-full align-middle border-8 absolute -m-16 -ml-18 lg:-ml-16 max-w-[150px]"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 mt-20 text-center">
                                    <h3 className="mb-1 text-2xl font-bold leading-normal text-gray-700">Dr. Mostafa
                                        NamAvarian</h3>
                                    <div className="flex flex-row justify-center w-full mx-auto space-x-2 text-center">
                                        <div
                                            className="text-sm font-bold tracking-wide text-gray-600 font-mono">
                                            Dentist (DMD, DDS)
                                        </div>
                                    </div>

                                </div>
                                <div
                                    className="pt-6 mx-6 mt-6 text-center border-t border-gray-200">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full px-6">
                                            <p className="mb-4 font-light leading-relaxed text-gray-600">
                                                Drawing upon three decades of dental expertise,
                                                Dr. M. NamAvarian passionately delivers a diverse array of treatments,
                                                catering to
                                                patients of all ages. His unwavering commitment lies in guiding
                                                individuals towards not
                                                just a healthy but a truly radiant smile.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="relative w-full group max-w-md min-w-0 mx-auto mt-6 mb-20 break-words bg-white border shadow-2xl md:max-w-sm rounded-xl
                            transition-all duration-300 hover:-translate-y-1 hover:shadow-sky-400">
                            <div className="pb-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="flex justify-center w-full">
                                        <div className="relative">
                                            <img src={OfficeManagerMesut} alt='Mesut Yagci'
                                                 className="border-white rounded-full align-middle border-8 absolute -m-16 -ml-18 lg:-ml-16 max-w-[150px]"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 mt-20 text-center">
                                    <h3 className="mb-1 text-2xl font-bold leading-normal text-gray-700">Mesut
                                        Yagci</h3>
                                    <div className="flex flex-row justify-center w-full mx-auto space-x-2 text-center">
                                        <div
                                            className="text-sm font-bold tracking-wide text-gray-600 font-mono">
                                            Office Manager
                                        </div>
                                    </div>

                                </div>
                                <div
                                    className="pt-6 mx-6 mt-6 text-center border-t border-gray-200">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full px-6">
                                            <p className="mb-4 font-light leading-relaxed text-gray-600">
                                                Through many years of experience, Mesut has a vast dental
                                                knowledge that can assist our patients. He can also speak Turkish if
                                                needed.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-gradient-to-r from-sky-500 to-blue-900">
                <div className="container px-6 py-12 mx-auto">
                    <h2 className="text-5xl font-bold mb-4 dokdo-regular mt-2 text-white">What Do We Offer?</h2>
                    <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
                        <div className="flex flex-col items-center justify-center text-center">
                            <span className="p-3 text-blue-500 rounded-full bg-sky-200">
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                                     clip-rule="evenodd"><path
                                    d="M17 24h-10v-1c1.533-.366 2.386-1.572 2.497-3h5.006c.111
                                    1.427.964 2.634 2.497 3v1zm6-5c.265 0 .52-.105.707-.293.188-.187.293-.442.293-.707v-17c0-.265-.105-.52-.293-.707-.187-.188-.442-.293-.707-.293h-22c-.265
                                    0-.52.105-.707.293-.188.187-.293.442-.293.707v17c0 .265.105.52.293.707.187.188.442.293.707.293h22zm-11-3.419c.552
                                    0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm10-13.581h-20v12h20v-12z"/></svg>
                            </span>

                            <h2 className="mt-4 text-lg font-medium text-white">Modern Dentistry</h2>
                            <p className="mt-2 text-gray-200">We use the latest digital technology in dentistry
                                for accurate and high quality results, tailored to maximize safety while
                                reducing discomfort and treatment time. These services include fully digital
                                x-rays and the revolutionary CEREC® technology.</p>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center">
                            <span className="p-3 text-blue-500 rounded-full bg-sky-200">
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                                     clip-rule="evenodd"><path
                                    d="M8.816 1.321c.815-.816 1.941-1.321 3.184-1.321 1.251 0 2.384.512 3.2 1.338
                                    4.056.308 5.687 1.739 7.382 8.486.664.463 1.418 1.436 1.418 3.489 0 1.765-.986
                                    3.991-3.139 4.906-2.348 3.731-5.484 5.781-8.861 5.781-3.377 0-6.513-2.05-8.862-5.781-2.153-.915-3.138-3.141-3.138-4.906
                                    0-2.053.753-3.026 1.417-3.489 1.732-6.779 3.38-8.213 7.399-8.503zm5.584 16.679h-4.8c.004.012.682
                                    1.884 2.4 1.884 1.782 0 2.396-1.872 2.4-1.884zm5.235-11h-3.894c-.807 1.206-2.182 2-3.741 2-1.559
                                    0-2.934-.794-3.741-2h-3.923c-.222.631-.412 1.304-.58 2-.179.746.964.954.917 1.733-.044.722-.76.953-1.421.661-.184-.082-.469-.079-.673.053-1
                                    .651-.893 4.184 1.554 5.012 1 .339 2.579 3.361 4.288.432.591-1.012 2.455-1.126
                                    3.579-.322 1.123-.804 2.988-.69 3.578.322 1.709 2.929 3.288-.093 4.288-.432 2.448-.828
                                    2.554-4.361 1.554-5.012-.235-.152-.531-.115-.672-.053-.661.293-1.36.094-1.374-.629-.016-.818 1.114-.871.89-1.765-.168-.669-.389-1.356-.629-2zm-3.885
                                    2c-1.124 0-2.094.629-2.607 1.546-.373-.116-.744-.174-1.143-.174s-.77.058-1.143.174c-.513-.917-1.483-1.546-2.607-1.546-1.654
                                    0-3 1.346-3 3s1.346 3 3 3c1.231 0 2.285-.748 2.747-1.811.245-.566.394-1.301 1.003-1.301.609
                                    0 .758.735 1.003 1.301.462 1.063 1.516 1.811 2.747 1.811 1.654 0 3-1.346 3-3s-1.346-3-3-3zm0
                                    4.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm-7.5
                                    0c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm3.75-11.5c1.38
                                    0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z"/></svg>
                            </span>
                            <h2 className="mt-4 text-lg font-medium text-white">Experienced Staff</h2>
                            <p className="mt-2 text-gray-200">Our experienced, compassionate and highly-trained dentists
                                can cover all your surgical and restorative needs, with specialized training in the
                                field of implant dentistry.<br/><br/></p>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center">
                            <span className="p-3 text-blue-500 rounded-full bg-sky-200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path
                                    d="M9 19h-4v-2h4v2zm2.946-4.036l3.107 3.105-4.112.931
                                    1.005-4.036zm6.054-9.053l2-2.024v-.887h-4.609l2.609 2.808v.103zm0
                                    12.134v3.955h-16v-16.192l2.666-2.808h-4.666v21h20v-7.98l-2
                                    2.025zm-14.297-11.045h12.651l-3.312-3.569v-.41c.001-1.668-1.352-3.021-3.021-3.021-1.667 0-3.021
                                    1.332-3.021 3l.001.431-3.298 3.569zm6.297-5c.553 0 1 .448 1 1s-.447 1-1 1-1-.448-1-1
                                    .447-1 1-1zm14 7.125l-7.898 7.996-3.202-3.202 7.898-7.995 3.202 3.201z"/></svg>
                            </span>
                            <h2 className="mt-4 text-lg font-medium text-white">A Welcoming Environment</h2>
                            <p className="mt-2 text-gray-200">With two convenient locations in the GTA, we offer
                                services for all ages with flexible financing and direct insurance billing.
                                We can also accommodate Farsi and and Turkish speaking patients.<br/><br/></p>
                        </div>
                    </div>
                </div>
            </section>


            <div className="bg-white py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="rightReveal mb-10 text-5xl font-extrabold tracking-tight leading-none">
                        Meet Our Stellar Support Team<br/>Who Ensures Your Smile Shines Bright</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-8 m-2">
                        <div
                            className="bg-dark mt-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-sky-400 shadow-2xl">
                            <Card.Img variant="top" src={ZeynepDentalAss} className="w-40 mx-auto mt-3"/>
                            <Card.Body className="mb-9">
                                <Card.Title className="text-xl font-extrabold m-4 life-savers-bold">Zeynep</Card.Title>
                                <Card.Text className="m-4">
                                    Dental Assistant
                                </Card.Text>
                            </Card.Body>
                        </div>
                        <div
                            className="bg-dark mt-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-sky-400 shadow-2xl">
                            <Card.Img variant="top" src={NilgunDentalAss} className="w-40 mx-auto mt-3"/>
                            <Card.Body className="mb-9">
                                <Card.Title className="text-xl font-extrabold m-4 life-savers-bold">Nilgun</Card.Title>
                                <Card.Text className="m-4">
                                    Dental Assistant
                                </Card.Text>
                            </Card.Body>
                        </div>
                        <div
                            className="bg-dark mt-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-sky-400 shadow-2xl">
                            <Card.Img variant="top" src={SunaDentalAss} className="w-40 mx-auto mt-3"/>
                            <Card.Body className="mb-9">
                                <Card.Title className="text-xl font-extrabold m-4 life-savers-bold">Suna</Card.Title>
                                <Card.Text className="m-4">
                                    Dental Assistant
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-8 m-2 mt-6">
                        <div
                            className="bg-dark mt-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-sky-400 shadow-2xl">
                            <Card.Img variant="top" src={HellenDentalHyg} className="w-40 mx-auto mt-3"/>
                            <Card.Body className="mb-9">
                                <Card.Title className="text-xl font-extrabold m-4 life-savers-bold">Hellen</Card.Title>
                                <Card.Text className="m-4">
                                    Dental Hygienist
                                </Card.Text>
                            </Card.Body>
                        </div>
                        <div
                            className="bg-dark mt-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-sky-400 shadow-2xl">
                            <Card.Img variant="top" src={GulcanRec} className="w-40 mx-auto mt-3"/>
                            <Card.Body className="mb-9">
                                <Card.Title className="text-xl font-extrabold m-4 life-savers-bold">Gulcan</Card.Title>
                                <Card.Text className="m-4">
                                    Receptionist
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </div>

                </div>
            </div>

            <div className="py-4">
                <div className="p-10 min-w-screen min-h-screen bg-gray-50 flex items-center justify-center">
                    <div
                        className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
                        <div className="w-full max-w-6xl mx-auto">
                            <div className="text-center max-w-xl mx-auto">
                                <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">Testimonials</h1>
                                <div className="text-center mb-10">
                                    <span className="inline-block w-1 h-1 rounded-full bg-blue-900 ml-1"></span>
                                    <span className="inline-block w-3 h-1 rounded-full bg-blue-900 ml-1"></span>
                                    <span className="inline-block w-40 h-1 rounded-full bg-blue-900"></span>
                                    <span className="inline-block w-3 h-1 rounded-full bg-blue-900 ml-1"></span>
                                    <span className="inline-block w-1 h-1 rounded-full bg-blue-900 ml-1"></span>
                                </div>
                            </div>
                            <div className="-mx-3 md:flex items-start">
                                <div className="px-3 md:w-1/3">
                                    <div
                                        className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                        <div className="w-full flex mb-4 items-center">
                                            <div className="flex-grow pl-3">
                                                <h6 className="font-bold text-sm uppercase text-gray-600">Asel
                                                    Oztekin</h6>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <p className="text-sm leading-tight"><span
                                                className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                                                You can blindly rely on this dental clinic. Everybody is friendly, the
                                                doctors are
                                                well knowledged and doing their job with enthusiasm. Dr Mesut is the
                                                best and most
                                                genuine dentist you can come across in Canada.<span
                                                    className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                        <div className="w-full flex mb-4 items-center">
                                            <div className="flex-grow pl-3">
                                                <h6 className="font-bold text-sm uppercase text-gray-600">Fatma
                                                    Tirpanci</h6>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <p className="text-sm leading-tight"><span
                                                className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                                                Amazing professionals. Very Clean and organized office. Was treated with
                                                kindness
                                                The hygienist Ms. Gizem was extreamly gental and made sure I was
                                                comfortable the entire time,
                                                she highly deserves over 5 stars. also the staff, secretaries and
                                                doctors were very welcoming,
                                                had a beautiful experience. 100% recommended<span
                                                    className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-3 md:w-1/3">
                                    <div
                                        className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                        <div className="w-full flex mb-4 items-center">
                                            <div className="flex-grow pl-3">
                                                <h6 className="font-bold text-sm uppercase text-gray-600">Zahra
                                                    Alaswad</h6>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <p className="text-sm leading-tight"><span
                                                className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                                                This is a great clinic, the staff are very friendly and the clinic is
                                                clean.
                                                They did a great job to my teeth, and i feel very satisfied with the
                                                service<span
                                                    className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                        <div className="w-full flex mb-4 items-center">
                                            <div className="flex-grow pl-3">
                                                <h6 className="font-bold text-sm uppercase text-gray-600">Ipek
                                                    Akdemir</h6>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <p className="text-sm leading-tight"><span
                                                className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                                                One of the fillings on my front teeth fell out and needed a crown.
                                                Despite this,
                                                they saved my tooth and I had a filling that looked like the original
                                                tooth. The
                                                filling in my tooth is not even visible. Thanks for this.<span
                                                    className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-3 md:w-1/3">
                                    <div
                                        className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                        <div className="w-full flex mb-4 items-center">
                                            <div className="flex-grow pl-3">
                                                <h6 className="font-bold text-sm uppercase text-gray-600">Klm Yinh</h6>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <p className="text-sm leading-tight"><span
                                                className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                                                I recently had some emergency dental work done and both dentists made
                                                time to help
                                                resolve the issues quickly and as painless as possible.After years of
                                                avoiding dental
                                                appointments I am happy I made the switch to Mydent Dental.Thank you
                                                again.Best of luck!!!<span
                                                    className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                        <div className="w-full flex mb-4 items-center">
                                            <div className="flex-grow pl-3">
                                                <h6 className="font-bold text-sm uppercase text-gray-600">Eren
                                                    Kilinc</h6>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <p className="text-sm leading-tight"><span
                                                className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                                                Very professional and involved with the patients. The area is kept clean
                                                and the staff are very kind. Would recommend to anyone.<span
                                                    className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-4 mb-12">
                <div>
                    <h1 className="text-5xl font-bold mb-8 text-gray-600">Check Out Our Work</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-8 m-2">
                    <h3 className="font-extrabold text-2xl life-savers-bold mb-6 m-12 bottomReveal">Crowns
                        <ReactCompareImage leftImageLabel="Before" leftImage={CrownBefore}
                                           rightImageLabel="After" rightImage={CrownAfter}/>
                    </h3>
                    <h3 className="font-extrabold text-2xl life-savers-bold mb-6 m-12 bottomReveal">Teeth Whitening
                        <ReactCompareImage leftImageLabel="Before" leftImage={TeethWhiteningBefore}
                                           rightImageLabel="After" rightImage={TeethWhiteningAfter}/>
                    </h3>
                    <h3 className="font-extrabold text-2xl life-savers-bold mb-6 m-12 bottomReveal">Porcelain Veneers
                        <ReactCompareImage leftImageLabel="Before" leftImage={PorcelainVaneersBefore}
                                           rightImageLabel="After" rightImage={PorcelainVaneersAfter}/>
                    </h3>
                    <h3 className="font-extrabold text-2xl life-savers-bold mb-6 m-12 bottomReveal">Invisalign
                        <ReactCompareImage leftImageLabel="Before" leftImage={InvisalignBefore}
                                           rightImageLabel="After" rightImage={InvisalignAfter}/>
                    </h3>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default AboutPage;
