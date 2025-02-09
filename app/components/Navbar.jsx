// Navbar.jsx
import React, { useState, useEffect } from "react";
import QuoteButton from './ScheduleMeetingButton';  // Import the QuoteButton component
import ScheduleMeetingButton from "./ScheduleMeetingButton";
import Image from 'next/image'


export default function Navbar() {
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showScrollButton, setShowScrollButton] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            setShowNav(false); // Hide navbar on scroll down
            setShowScrollButton(true);
        } else {
            setShowNav(true); // Show navbar on scroll up
            setShowScrollButton(false);
        }
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <>
            <nav
                className={`bg-[#F5F5F5] text-black p-4 fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${showNav ? "translate-y-0" : "-translate-y-full"}`}
            >
                <div className="fixed top-3 left-8 sm:w-[30vw] w-[50vw]">
                    <a href="./" className="cursor-pointer">
                        <Image
                            src="/athenscreativecologo.png"
                            alt="Athens Creative Co Logo - Marketing and Creative Solutions"
                            width={400}
                            height={800}
                            priority
                            className="h-8 md:h-10 lg:h-12 object-contain"
                        />
                    </a>
                </div>
                <div className="px-3 mx-auto flex justify-end items-center">
                    <ul className="flex space-x-6 text-xl hidden md:flex">
                        <li>
                            <a href="/#about" className="hover:text-black text-[#BA0C2F]">About</a>
                        </li>
                        <li>
                            <a href="/#services" className="hover:text-black text-[#BA0C2F]">Services</a>
                        </li>
                        <li>
                            <a href="/work" className="hover:text-black text-[#BA0C2F]">Work</a>
                        </li>
                        <li>
                            <a href="/#connect" className="bg-[#BA0C2F] text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
                                Connect
                            </a>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2 text-[#BA0C2F]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-transform duration-300 ${isMenuOpen ? "transform rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Scroll Button (now in QuoteButton) */}
            <ScheduleMeetingButton showScrollButton={showScrollButton} />

            {/* Mobile Nav Menu */}
            <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} absolute top-5 right-5 w-[30vw] h-[25vh] bg-white shadow-lg`}>
                <ul className="flex flex-col items-stretch p-4 gap-5">
                    <li>
                        <a href="#about" className="p-4 text-lg text-[#BA0C2F] hover:text-black">About</a>
                    </li>
                    <li>
                        <a href="#services" className="p-4 text-lg text-[#BA0C2F] hover:text-black">Services</a>
                    </li>
                    <li>
                        <a href="/work" className="p-4 text-lg text-[#BA0C2F] hover:text-black">Work</a>
                    </li>
                    <li>
                        <a href="#connect" className="p-2 text-lg bg-[#BA0C2F] text-white font-semibold px-2 rounded-lg hover:bg-red-700 transition-colors">
                            Connect
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}