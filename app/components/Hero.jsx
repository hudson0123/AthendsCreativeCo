"use client"

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";


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
        <div className="flex justify-center items-left mb-20 px-6 mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full h-[92vh]">
                {/* Left Column (Text) */}
                <div className="rounded-lg flex flex-col justify-center mt-20 ">
                    <h1 className="text-4xl md:text-6xl/snug font-[Helvetica]  mb-8 font-thin">
                        A{" "}
                        <span
                            className={`inline-block transition-all duration-1000 font-semibold transform text-[#BA0C2F] ${fade ? "opacity-0 translate-x-10" : "opacity-100 -translate-x-0"
                                }`}
                        >
                            {currentAdjective}
                        </span>{" "}
                        <br></br> Approach to Digital Marketing in <br></br>{" "}
                        <span
                            className={`font-semibold inline-block transition-all duration-1000 transform text-[#BA0C2F]`}
                        >
                            Athens, Georgia.
                        </span>
                    </h1>
                    <motion.hr
                        className="w-64 sm:w-80 h-1 my-2 bg-[#BA0C2F] rounded-sm"
                        initial={{ width: 0 }}
                        whileInView={{ width: "130px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.0, ease: "easeOut" }}
                    />                    <p className="text-lg  mt-6 text-gray-500 max-w-xs font-[Helvetica]">
                        Combining creativity and AI to craft
                        innovative digital solutions that elevate businesses to new heights.
                    </p>
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