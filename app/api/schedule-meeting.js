import { google } from "googleapis";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ error: "You must be signed in." });
  }

  const { accessToken } = session;

  try {
    const calendar = google.calendar({ version: "v3", auth: accessToken });

    const event = {
      summary: "Meeting",
      location: "Virtual",
      description: "Schedule a meeting with me.",
      start: {
        dateTime: "2025-02-12T09:00:00-07:00", // Replace with dynamic time
        timeZone: "America/Los_Angeles",
      },
      end: {
        dateTime: "2025-02-12T09:30:00-07:00", // Replace with dynamic time
        timeZone: "America/Los_Angeles",
      },
      attendees: [
        { email: "someone@example.com" },
        // Add more attendees if needed
      ],
    };

    const response = await calendar.events.insert({
      calendarId: "primary", // Primary calendar
      resource: event,
    });

    return res.status(200).json({ event: response.data });
  } catch (error) {
    console.error("Error creating calendar event:", error);
    return res.status(500).json({ error: "Failed to create calendar event" });
  }
}