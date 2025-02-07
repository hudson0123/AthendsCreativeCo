import React, { useState, useEffect } from "react";

const ScheduleMeetingButton = () => {
  const [isVisible, setIsVisible] = useState(false); // State to control button visibility
  const [isClosed, setIsClosed] = useState(false); // State to control manual closing of the button

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClose = (event) => {
    event.stopPropagation(); // Prevent click event from propagating to the parent button
    setIsClosed(true); // Hide the button when the "X" button is clicked
  };

  const handleScheduleClick = () => {
    // Redirect to Calendly scheduling page
    window.open("https://calendly.com/hudsonodonnell2004/30min", "_blank");
  };

  return (
    !isClosed && (
      <div
        className={`fixed bottom-4 right-4 z-50 transition-all duration-500 ease-in-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <div className="relative group">
          {/* "X" Button */}
          <div
            onClick={handleClose}
            className="absolute top-0 right-0 text-black w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
            role="button"
            aria-label="Close"
          >
            ✕
          </div>
          <button
            onClick={handleScheduleClick}
            className="p-4 bg-[#BA0C2F] text-white font-bold rounded-md shadow-lg border-4 border-black transition-colors hover:bg-red-700"
          >
            Schedule a Meeting{" "}
            <span className="inline-block ml-2">&#9654;</span>
          </button>
        </div>
      </div>
    )
  );
};

export default ScheduleMeetingButton;
