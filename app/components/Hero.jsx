import React, { useState, useEffect } from "react";

export default function Hero() {
    const [fade, setFade] = useState(false);
    const adjectives = ["Unique", "Local", "Creative", "Dynamic", "Modern", "Strategic", "Authentic", "Better"];
    const [currentAdjective, setCurrentAdjective] = useState(adjectives[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true);
            setTimeout(() => {
                setCurrentAdjective((prev) => {
                    const nextIndex = (adjectives.indexOf(prev) + 1) % adjectives.length;
                    return adjectives[nextIndex];
                });
                setFade(false);
            }, 1000);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-center items-left mb-20 px-6 sm:mt-0 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full h-[92vh]">
                {/* Left Column (Text) */}
                <div className="rounded-lg flex flex-col justify-center md:mt-10 mt-8">
                    <h1 className="text-4xl md:text-5xl font-[Helvetica] font-bold mb-8 mr-32">
                        A{" "}
                        <span
                            className={`inline-block transition-all duration-1000 transform text-[#BA0C2F] ${fade ? "opacity-0 translate-x-10" : "opacity-100 -translate-x-0"
                                }`}
                        >
                            {currentAdjective}
                        </span>{" "}
                        <br></br> Approach to Digital Marketing in <br></br>{" "}
                        <span
                            className={`inline-block transition-all duration-1000 transform text-[#BA0C2F]`}
                        >
                            Athens, Georgia.
                        </span>
                    </h1>
                    <hr className="w-40 h-1 my-2 bg-[#BA0C2F] border-1 rounded-sm" />
                    <p className="text-lg md:text-xl font-sans mt-6 text-gray-500 max-w-sm">
                        We provide creative marketing and AI-driven digital solutions to
                        businesses in Athens, Georgia. Combining creativity and AI to craft
                        innovative digital solutions that elevate businesses to new heights.
                    </p>
                    {/* "Let's get to work" Button */}
                    <a href="./#connect">
                        <button className="text-2xl font-semibold rounded-md mt-10 relative h-16 w-60 overflow-hidden border border-[#BA0C2F] bg-[#BA0C2F] text-white shadow-md transition-all hover:shadow-[#BA0C2F]">
                            <span className="relative z-10">Let's Get to Work.</span>
                        </button>
                    </a>
                </div>

                {/* Right Column (Image, only visible on medium screens and up) */}
                <div className="hidden md:block w-full md:w-[50vw] h-[60vh] md:h-[93vh] mt-8 md:mt-[8vh]">
                    <img
                        src="/home-stock.jpg"
                        alt="Athens Georgia Marketing Agency - Creative Digital Solutions"
                        className="w-full h-full object-cover filter grayscale"
                    />
                </div>
            </div>
        </div>
    );
}