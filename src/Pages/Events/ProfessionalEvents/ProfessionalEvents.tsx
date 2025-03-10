import React, { useEffect, useState } from "react";
import EventPageTemplate from "../EventPageTemplate";
import workshopImage from "../../../Assets/Images/homepage-img2-1.png";
import ProfessionalEventsData from "./ProfessionalEvents.json";

interface EventItem {
    id: number;
    title: string;
    description: string;
    date: string;
    location: string;
    imagePath?: string;
}

const ProfessionalEvents = () => {
    const [upcomingEvents, setUpcomingEvents] = useState<EventItem[]>([]);
    const [pastEvents, setPastEvents] = useState<EventItem[]>([]);
    useEffect(() => {
    // Load events from JSON file
    setUpcomingEvents(ProfessionalEventsData.upcomingEvents);
    setPastEvents(ProfessionalEventsData.pastEvents);
  }, []);
  
  const professionalEvents = {
    pageTitle: "PROFESSIONAL EVENTS",
    pageSubtitle: "Looking for an internship?",
    headerImagePath: workshopImage,
    aboutTitle: "About Professional Events",
    aboutImagePath: "",
    aboutPoints: [
      {
        title: "Grow your network",
        description: "Connect with various professionals through exclusive speaker events, panels, and networking sessions.",
      },
      {
        title: "Enhance your Career Toolkit",
        description: "Improve your resume, portfolio, and professional presence with hands-on workshops.",
      },
      {
        title: "Explore Data Science",
        description: "Discover diverse paths in the field and learn how to leverage your skills for success.",
      },
    ],
    upcomingEvents: upcomingEvents,
    pastEvents: pastEvents,
    eventInfo:
      "Join our next workshop on Python for Data Science on June 15th!",
  };

  return <EventPageTemplate {...professionalEvents} />;
};

export default ProfessionalEvents;
