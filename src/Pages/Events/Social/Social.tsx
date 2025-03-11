import React, { useEffect, useState } from "react";
import EventPageTemplate from "../EventPageTemplate";
import workshopImage from "../../../Assets/Images/homepage-img2-1.png";
import socialEventsData from "./socialEvents.json";

// Define the event item type to match our JSON structure
interface EventItem {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  imagePath?: string;
}

const Social = () => {
  const [upcomingEvents, setUpcomingEvents] = useState<EventItem[]>([]);
  const [pastEvents, setPastEvents] = useState<EventItem[]>([]);

  useEffect(() => {
    // Load events from JSON file
    setUpcomingEvents(socialEventsData.upcomingEvents);
    setPastEvents(socialEventsData.pastEvents);
  }, []);

  // Data for the Workshops page
  const workshopData = {
    pageTitle: "SOCIAL EVENTS",
    pageSubtitle: "Here to have some fun?",
    headerImagePath: workshopImage,
    aboutTitle: "ABOUT SOCIAL   ",
    aboutPoints: [
      {
        title: "BUILDING COMMUNITY THROUGH DATA",
        description:
          "The Social Subcommittee fosters a welcoming, inclusive community by creating opportunities for members to connect, collaborate, and have fun beyond coding.",
      },
      {
        title: "NETWORKING AND ENGAGEMENT",
        description:
          "We organize a variety of events, including social mixers, study jams, and mentorship programs, to help members build lasting connections while growing together in the field.",
      },
    ],
    upcomingEvents: upcomingEvents,
    pastEvents: pastEvents,
    eventInfo:
      "Join our next workshop on Python for Data Science on June 15th!",
  };

  return <EventPageTemplate {...workshopData} />;
};

export default Social;
