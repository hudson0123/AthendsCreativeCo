import React, { useState, useEffect } from 'react'

export default function Hero() {
    const [fade, setFade] = useState(false);
    const adjectives = ["Unique", "Creative", "Dynamic", "Modern", "Strategic", "Authentic", "Better"];
    const [currentAdjective, setCurrentAdjective] = useState(adjectives[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true);
            setTimeout(() => {
                setCurrentAdjective(prev => {
                    const nextIndex = (adjectives.indexOf(prev) + 1) % adjectives.length;
                    return adjectives[nextIndex];
                });
                setFade(false);
            }, 1000);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-center items-center mb-20 px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl w-full h-[92vh]">
                {/* Left Column (Text) */}
                <div className="p-6 rounded-lg flex flex-col justify-center md:mt-20 mt-8">
                    <p className="text-4xl md:text-7xl font-[Helvetica] font-bold mb-8">
                        A <span className={`inline-block transition-all duration-1000 transform text-[#BA0C2F] ${fade ? 'opacity-0 translate-x-10' : 'opacity-100 -translate-x-0'}`}>{currentAdjective}</span><br />  
                        Approach to Digital<br /> Marketing.
                    </p>
                    <hr className="w-32 mb-6" />
                    <p className="text-lg md:text-xl font-sans mt-6 text-gray-500 max-w-4xl">
                        Combining creativity and AI to craft innovative digital solutions that elevate businesses to new heights.
                    </p>
                </div>

                {/* Right Column (Image) */}
                <div className="w-full md:w-[50vw] h-[60vh] md:h-[93vh] mt-8 md:mt-[8vh]">
                    <img
                        src="./home-stock.jpg"
                        alt="Placeholder Image"
                        className="w-full h-full object-cover filter grayscale"
                    />
                </div>
            </div>
        </div>
    )
}
