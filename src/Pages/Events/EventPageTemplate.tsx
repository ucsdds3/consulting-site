// src/Pages/Events/EventPageTemplate.tsx

import React, { useState } from "react";
import Page from "../../Components/Page/Page";
import { useTheme } from "../../Pages/Home/useTheme";
import ds3Logo from "../../Assets/Images/ds3_logo.png";

// Types for props
interface EventPageTemplateProps {
  pageTitle: string;
  pageSubtitle: string;
  headerImagePath: string;
  aboutTitle: string;
  aboutImagePath?: string;
  aboutPoints: AboutPoint[];
  upcomingEvents: EventItem[];
  pastEvents: EventItem[];
  eventInfo?: string;
}

interface AboutPoint {
  title: string;
  description: string;
}

interface EventItem {
  id: number;
  title: string;
  description: string;
  imagePath?: string;
  date?: string;
}

// Banner Component
export const Banner: React.FC<{ eventInfo: string }> = ({ eventInfo }) => {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  // Keep the border color dynamic but text color always black
  const borderColor = isDark ? "border-white" : "border-black";

  return (
    <div
      className={`w-[1143px] h-[114px] relative mx-auto my-8 rounded-[10px] shadow-[4px_7px_10px_0px_rgba(0,0,0,0.25)] flex items-center justify-between px-6 border ${borderColor}`}
      style={{ backgroundColor: "rgba(217, 217, 217, 0.5)" }}
    >
      <div>
        <p className="text-[28px] font-bold font-['Albert Sans'] text-black leading-7">
          There is an upcoming event!
        </p>
        <p className="text-2xl font-normal font-['Albert Sans'] text-black leading-7">
          {eventInfo ||
            "(INSERT BASIC EVENT INFORMATION HERE + link to event page)"}
        </p>
      </div>
      <div className="flex items-center gap-4">
        {/* DS3 Logo - with full opacity */}
        <img src={ds3Logo} alt="DS3 Logo" className="w-10 h-10 z-10" />
        {/* Close button */}
        <div
          className="text-2xl font-normal text-black cursor-pointer"
          onClick={() => setIsVisible(false)}
        >
          ×
        </div>
      </div>
    </div>
  );
};

// Header Component
export const Header: React.FC<{
  title: string;
  subtitle: string;
  imagePath: string;
}> = ({ title, subtitle, imagePath }) => {
  const { isDark } = useTheme();

  // Text color based on theme
  const textColor = isDark ? "text-white" : "text-black";

  return (
    <div className="flex items-center justify-center py-6 gap-10">
      {/* Workshop Text */}
      <div className="flex flex-col items-start ml-20 -mt-16">
        <div
          className={`w-[516px] ${textColor} text-3xl font-normal font-['Albert Sans'] leading-[45px] -mt-26 mb-2`}
        >
          {subtitle}
        </div>
        <div
          className={`w-[604px] ${textColor} text-[80px] font-medium font-['Albert Sans'] leading-[70px]`}
        >
          {title}
        </div>
      </div>

      {/* Workshop Image */}
      <img
        className="w-[604px] h-[604px]"
        src={imagePath}
        alt={`${title} Decor Image`}
      />
    </div>
  );
};

// About Component
export const About: React.FC<{
  title: string;
  imagePath?: string;
  points: AboutPoint[];
}> = ({ title, imagePath, points }) => {
  const { isDark } = useTheme();

  // Text color based on theme
  const textColor = isDark ? "text-white" : "text-black";
  const borderColor = "border-black";
  const backgroundColor = isDark ? "#0E1111" : "transparent";

  return (
    <div
      className={`w-[1204px] h-[688px] relative mx-auto border ${borderColor} rounded-[15px] flex flex-col px-8 py-6`}
      style={{ backgroundColor }}
    >
      <h2
        className={`w-full ${textColor} text-[45px] font-medium font-['Albert Sans'] uppercase leading-[65px]`}
      >
        {title}
      </h2>

      <div className="flex items-center mt-6">
        {/* Placeholder for Image */}
        <div className="w-[574px] h-[479px] bg-[#D9D9D9] rounded-[10px]">
          {imagePath && (
            <img
              src={imagePath}
              alt={title}
              className="w-full h-full object-cover rounded-[10px]"
            />
          )}
        </div>

        {/* Text Section */}
        <div className="ml-12 flex flex-col justify-center space-y-8 max-w-[500px]">
          {points.map((point, index) => (
            <div key={index} className="flex items-start gap-4">
              <span
                className={`text-[40px] font-bold ${isDark ? "text-gray-400" : "text-gray-500"}`}
              >
                +
              </span>
              <div>
                <p
                  className={`text-[25px] font-semibold font-['Albert Sans'] uppercase leading-[30px] ${textColor}`}
                >
                  {point.title}
                </p>
                <p
                  className={`text-[25px] font-light font-['Albert Sans'] leading-[25px] mt-2 ${textColor}`}
                >
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Events Component
export const Events: React.FC<{
  upcomingEvents: EventItem[];
  pastEvents: EventItem[];
}> = ({ upcomingEvents, pastEvents }) => {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState("upcoming");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter events based on active tab and search query
  const filteredEvents = (() => {
    let events = [];
    if (activeTab === "upcoming") {
      events = upcomingEvents;
    } else if (activeTab === "all") {
      events = [...upcomingEvents, ...pastEvents];
    }

    return events.filter(
      (event) =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  })();

  // Text color based on theme
  const textColor = isDark ? "text-white" : "text-black";

  // Get glow style for selected button
  const getGlowStyle = () => {
    return {
      boxShadow: isDark
        ? "0 0 15px 2px rgba(245, 129, 52, 0.6)"
        : "0 0 15px 2px rgba(25, 181, 202, 0.6)",
      backgroundColor: isDark ? "#F58134" : "#19B5CA",
      borderColor: "black",
    };
  };

  // Format date function
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="w-[1150px] mx-auto flex flex-col mt-20">
      {/* Search & Buttons */}
      <div className="w-full flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <button
            className="w-[199px] h-[54px] rounded-[80px] text-[22px] font-normal font-['Albert Sans'] text-black transition-all duration-300 border border-black"
            style={
              activeTab === "upcoming"
                ? getGlowStyle()
                : { backgroundColor: "#FAF9F6" }
            }
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming Events
          </button>
          <button
            className="w-[100px] h-[54px] rounded-[80px] text-[22px] font-normal font-['Albert Sans'] text-black transition-all duration-300 border border-black"
            style={
              activeTab === "all"
                ? getGlowStyle()
                : { backgroundColor: "#FAF9F6" }
            }
            onClick={() => setActiveTab("all")}
          >
            All
          </button>
        </div>
        <div
          className="w-[222px] h-[54px] rounded-[80px] flex justify-center items-center px-4 border border-black"
          style={{ backgroundColor: isDark ? "#FAF9F6" : "#D9D9D9" }}
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-full text-[22px] font-normal font-['Albert Sans'] text-black placeholder-black"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg
            className="ml-2 cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 20.9999L16.65 16.6499"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-3 gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div key={event.id} className="flex flex-col">
              {/* Image Container - 350x350 */}
              <div className="w-[350px] h-[350px] bg-[#D9D9D9] rounded-[10px] overflow-hidden">
                {event.imagePath ? (
                  <img
                    src={event.imagePath}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-500 text-lg">
                      No image available
                    </span>
                  </div>
                )}
              </div>

              {/* Event Details Below Image */}
              <div className="mt-2">
                <h3
                  className={`text-[25px] font-normal font-['Albert Sans'] ${textColor}`}
                >
                  {event.title}
                </h3>
                <p
                  className={`text-[18px] font-normal font-['Albert Sans'] mt-1 ${textColor}`}
                >
                  {event.description}
                </p>
                <p
                  className={`text-[16px] font-normal font-['Albert Sans'] mt-1 ${textColor}`}
                >
                  {event.date && formatDate(event.date)}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div
            className={`col-span-3 text-center text-[24px] font-normal font-['Albert Sans'] ${textColor}`}
          >
            No events found. Try a different search term.
          </div>
        )}
      </div>
    </div>
  );
};

// Main Template Component
const EventPageTemplate: React.FC<EventPageTemplateProps> = ({
  pageTitle,
  pageSubtitle,
  headerImagePath,
  aboutTitle,
  aboutImagePath,
  aboutPoints,
  upcomingEvents,
  pastEvents,
  eventInfo,
}) => {
  return (
    <Page>
      <Banner eventInfo={eventInfo || ""} />
      <Header
        title={pageTitle}
        subtitle={pageSubtitle}
        imagePath={headerImagePath}
      />
      <About
        title={aboutTitle}
        imagePath={aboutImagePath}
        points={aboutPoints}
      />
      <Events upcomingEvents={upcomingEvents} pastEvents={pastEvents} />
    </Page>
  );
};

export default EventPageTemplate;
