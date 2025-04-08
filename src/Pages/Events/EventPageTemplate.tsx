import React, { useState } from "react";
import Page from "../../Components/Page/Page";
import { useTheme } from "../../Pages/Home/useTheme";
import ds3Logo from "../../Assets/Images/ds3_logo.png";
import { motion } from "framer-motion";
import star from "../../Assets/Images/Star.svg"; // Import the star SVG directly

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

  const borderColor = isDark ? "border-white" : "border-black";

  return (
    <div
      className={`w-[75%] max-w-[1204px] h-[13%] absolute top-24 left-1/2 transform -translate-x-1/2 z-20 
      rounded-[10px] shadow-[4px_7px_10px_0px_rgba(0,0,0,0.25)] flex items-center justify-between 
      px-8 md:px-16 border ${borderColor}`}
      style={{ backgroundColor: "rgba(217, 217, 217, 0.5)" }}
    >
      <div className="flex-1 pr-4 py-4">
        <p className="text-[18px] sm:text-[24px] md:text-[28px] font-bold font-['Albert Sans'] text-black leading-6 sm:leading-7">
          There is an upcoming event!
        </p>
        <p className="text-[16px] sm:text-xl md:text-2xl font-normal font-['Albert Sans'] text-black leading-6 sm:leading-7">
          {eventInfo ||
            "(INSERT BASIC EVENT INFORMATION HERE + link to event page)"}
        </p>
      </div>
      <div className="flex items-center gap-4 shrink-0">
        {/* DS3 Logo - with full opacity */}
        <img
          src={ds3Logo}
          alt="DS3 Logo"
          className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 z-10"
        />
        {/* Close button */}
        <div
          className="text-lg sm:text-xl md:text-2xl font-normal text-black cursor-pointer"
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
  const textColor = isDark ? "text-white" : "text-black";

  return (
    <div className="w-[90%] max-w-[1204px] relative mx-auto mb-[2vw]">
      <div className="flex flex-col lg:flex-row items-center justify-center py-6 gap-[0.5vw] min-h-[600px]">
        {/* Workshop Text */}
        <div className="flex flex-col items-start lg:items-start">
          <div
            className={`w-full lg:w-[516px] ${textColor} text-3xl lg:text-3xl font-normal font-['Albert Sans'] leading-[45px] mb-2 px-4 lg:px-0`}
          >
            {subtitle}
          </div>
          <div
            className={`w-full lg:w-[604px] ${textColor} text-[65px] lg:text-[80px] font-medium font-['Albert Sans'] leading-[70px] lg:leading-[70px] px-4 lg:px-0`}
          >
            {title}
          </div>
        </div>

        {/* Workshop Image */}
        <img
          className="w-[80%] h-auto lg:w-[604px] lg:h-[604px] mt-8 lg:mt-0"
          src={imagePath}
          alt={`${title} Decor Image`}
        />
      </div>
    </div>
  );
};

// About Component - Modified to center content
export const About: React.FC<{
  title: string;
  imagePath?: string;
  points: AboutPoint[];
}> = ({ title, imagePath, points }) => {
  const { isDark } = useTheme();

  const textColor = isDark ? "text-white" : "text-black";
  const borderColor = isDark ? "border-white" : "border-black";
  const backgroundColor = isDark ? "#0E1111" : "transparent";

  // Star animation variants
  const starVariants = {
    initial: {
      rotate: 0,
      scale: 1,
    },
    animate: {
      rotate: 360,
      scale: [1, 1.1, 0.9, 1],
    },
  };

  // Bullet Star component
  const BulletStar = () => {
    const { isDark } = useTheme();

    return (
      <div className="w-[31px] h-[32px] flex items-center justify-center self-start mt-[3px]">
        <motion.img
          src={star}
          alt=""
          variants={starVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: "31px",
            height: "32px",
            opacity: 1,
            filter: isDark
              ? "drop-shadow(0px 0px 8px rgba(245, 129, 52, 0.6))"
              : "drop-shadow(0px 0px 8px rgba(25, 181, 202, 0.6))",
          }}
        />
      </div>
    );
  };

  return (
    <div
      className={`w-[90%] max-w-[1204px] min-h-[688px] relative mx-auto border ${borderColor} rounded-[15px] flex flex-col px-4 md:px-16 py-6 flex justify-center items-center`}
      style={{ backgroundColor }}
    >
      <h2
        className={`w-full text-center ${textColor} text-[35px] md:text-[45px] font-medium font-['Albert Sans'] uppercase leading-[45px] md:leading-[65px]`}
      >
        {title}
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-center mt-6 gap-8 mx-auto max-w-[90%]">
        {/* Image with equal spacing */}
        <div className="w-full lg:w-[45%] h-[300px] md:h-[479px] bg-[#D9D9D9] rounded-[10px]">
          {imagePath && (
            <img
              src={imagePath}
              alt={title}
              className="w-full h-full object-cover rounded-[10px]"
            />
          )}
        </div>

        {/* Text Section with even spacing */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center space-y-8">
          {points.map((point, index) => (
            <div key={index} className="flex items-start gap-6">
              {/* Star bullet point */}
              <BulletStar key={index} />
              <div className="flex-1">
                <p
                  className={`text-[20px] md:text-[25px] font-semibold font-['Albert Sans'] uppercase leading-[25px] md:leading-[30px] ${textColor}`}
                >
                  {point.title}
                </p>
                <p
                  className={`text-[18px] md:text-[25px] font-light font-['Albert Sans'] leading-[22px] md:leading-[25px] mt-2 ${textColor}`}
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
    let events: EventItem[] = [];
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
    <div className="w-[90%] max-w-[1204px] mx-auto flex flex-col mt-20">
      {/* Search & Buttons */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mb-6">
        <div className="flex gap-4 w-full sm:w-auto">
          <button
            className="flex-1 sm:flex-none sm:w-[205px] h-[54px] rounded-[80px] text-[22px] font-normal font-['Albert Sans'] text-black transition-all duration-300 border border-black"
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
            className="flex-1 sm:flex-none sm:w-[100px] h-[54px] rounded-[80px] text-[22px] font-normal font-['Albert Sans'] text-black transition-all duration-300 border border-black"
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
          className="w-full sm:w-[222px] h-[54px] rounded-[80px] flex justify-center items-center px-4 border border-black"
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
            className="ml-2 cursor-pointer shrink-0"
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div
              key={event.id}
              className="flex flex-col mx-auto w-full max-w-[350px]"
            >
              {/* Image Container - responsive width */}
              <div className="w-full aspect-square bg-[#D9D9D9] rounded-[10px] overflow-hidden">
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
            className={`col-span-1 md:col-span-2 lg:col-span-3 text-center text-[24px] font-normal font-['Albert Sans'] ${textColor}`}
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
