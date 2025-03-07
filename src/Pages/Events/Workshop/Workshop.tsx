import React, { useEffect, useState } from "react";
import EventPageTemplate from "../EventPageTemplate";
import workshopImage from "../../../Assets/Images/homepage-img2-1.png";
import workshopEventsData from "./workshopEvents.json";

// Define the event item type to match our JSON structure
interface EventItem {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  imagePath?: string;
}

const Workshop = () => {
  const [upcomingEvents, setUpcomingEvents] = useState<EventItem[]>([]);
  const [pastEvents, setPastEvents] = useState<EventItem[]>([]);

  useEffect(() => {
    // Load events from JSON file
    setUpcomingEvents(workshopEventsData.upcomingEvents);
    setPastEvents(workshopEventsData.pastEvents);
  }, []);

  // Data for the Workshops page
  const workshopData = {
    pageTitle: "WORKSHOPS",
    pageSubtitle: "Want to learn something new?",
    headerImagePath: workshopImage,
    aboutTitle: "ABOUT WORKSHOPS",
    aboutPoints: [
      {
        title: "MAKING DATA SCIENCE ACCESSIBLE",
        description:
          "The Workshops Team is here to make data science accessible to everyone! Whether you're just starting out or diving into advanced topics, our workshops are designed to help students build the skills and confidence to thrive as data scientists.",
      },
      {
        title: "HANDS-ON LEARNING",
        description:
          "We run workshops on a variety of topics, including Exploratory Data Analysis, Scikit-Learn, Generative AI Theory, LLMs, and AI Agents.",
      },
    ],
    upcomingEvents: upcomingEvents,
    pastEvents: pastEvents,
    eventInfo:
      "Join our next workshop on Python for Data Science on June 15th!",
  };

  return <EventPageTemplate {...workshopData} />;
};

export default Workshop;
