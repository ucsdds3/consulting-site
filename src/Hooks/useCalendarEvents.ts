/* eslint-disable @typescript-eslint/no-explicit-any */
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

        const mappedEvents = (data.items || []).map((item:any) => {
          const dateObj = new Date(item.start?.dateTime || item.start?.date);
          const formattedDate = dateObj.toLocaleDateString("en-GB"); // DD/MM/YYYY
          const [day, month, year] = formattedDate.split("/");
          return {
            title: item.summary || "No Title",
            date: `${day}/${month}/${year}`,
            type: "Workshop", // Placeholder — customize if needed
            description: item.description || "No description",
          };
        });
        console.log(mappedEvents);

        setEvents(mappedEvents);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setTimeout(()=>{setLoading(false)},10000)
        
      }
    };

    fetchEvents();
  }, [calendarId, apiKey]);

  return { events, loading, error };
}
