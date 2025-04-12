import { useEffect, useState } from "react";

type EventItem = {
  title: string;
  date: string;
  type: string;
  description: string;
};

export function useCalendarEvents() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const calendarId = import.meta.env.VITE_CALENDAR_ID;
  const apiKey = import.meta.env.VITE_CALENDAR_API_KEY;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        console.log(data);

        const mappedEvents = (data.items || []).map((item: any) => {
          const dateObj = new Date(item.start?.dateTime || item.start?.date);
        
          const formattedDate = dateObj.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }); // Jan 1, 2025
        
          const formattedTime = dateObj.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          }); // 5:30 PM
        
          const image = item.attachments?.[0]?.fileUrl || null;
        
          return {
            title: item.summary || "No Title",
            date: `${formattedDate} ${formattedTime}`,
            location: item.location || "No location",
            description: item.description || "No description",
            image,
          };
        });
        console.log(mappedEvents);

        setEvents(mappedEvents);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [calendarId, apiKey]);

  return { events, loading, error };
}
