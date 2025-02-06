import React, { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";

const ScheduleMeetingButton = () => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // State to control button visibility

  useEffect(() => {
    const handleScroll = () => {
      // Show the button if user scrolls down, hide it otherwise
      if (window.scrollY > 100) { // You can change the scroll position to trigger visibility
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

  const handleScheduleClick = async () => {
    if (!session) {
      // If the user isn't signed in, prompt them to sign in
      await signIn("google");
      return;
    }

    setLoading(true);

    try {
      // Construct the Google Calendar URL with prefilled details
      const startDate = getStartDate();
      const endDate = getEndDate();
      const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Scheduled+Meeting&details=Meeting+scheduled+via+app&location=Online&dates=${startDate}%2F${endDate}`;
      
      console.log("Redirecting to Google Calendar with URL:", calendarUrl);  // Debugging the URL

      // Open Google Calendar in a new tab
      window.open(calendarUrl, "_blank");
    } catch (error) {
      console.error("Error scheduling the meeting:", error);
    } finally {
      setLoading(false);
    }
  };

  const getStartDate = () => {
    const startDate = new Date();
    return startDate.toISOString().replace(/-|:|\.\d+/g, ""); // Format: YYYYMMDDTHHMMSSZ
  };

  const getEndDate = () => {
    const endDate = new Date(new Date().getTime() + 60 * 60 * 1000); // 1 hour later
    return endDate.toISOString().replace(/-|:|\.\d+/g, ""); // Format: YYYYMMDDTHHMMSSZ
  };

  return (
    isVisible && (
      <button
        onClick={handleScheduleClick}
        disabled={loading}
        className={`z-50 fixed bottom-4 right-4 p-4 bg-[#BA0C2F] text-white font-bold rounded-md shadow-lg transition-all duration-500 hover:bg-red-700 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Scheduling..." : "Schedule a Meeting"}
      </button>
    )
  );
};

export default ScheduleMeetingButton;