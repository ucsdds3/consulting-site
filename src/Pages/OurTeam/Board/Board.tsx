import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "../../../Pages/Home/useTheme";
import Page from "../../../Components/Page/Page";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import boardData from "./board.json";
import star from "../../../Assets/Images/Star.svg"; // Import star image directly

// Define button animation variants
const buttonVariants = {
  initial: {
    y: 0,
  },
  hover: {
    y: "0.5vw",
  },
};

// Define star animation variants
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

type Committee =
  | "Executives"
  | "Marketing"
  | "Design"
  | "Workshops"
  | "Professional Events"
  | "Social Events"
  | "Online Content"
  | "Infrastructure"
  | "Projects"
  | "Consulting";

// Board member interface
interface BoardMember {
  name: string;
  committee: Committee;
  image: string;
  personalWebsite?: string;
  resume?: string;
  linkedIn?: string;
}

// Board Member Card Component
const BoardMemberCard: React.FC<{
  member: BoardMember;
  textColor: string;
  isDark: boolean;
}> = ({ member, textColor, isDark }) => {
  // Instead of trying to load an image that might not exist,
  // we'll just use a colored div as a placeholder
  return (
    <div className="flex flex-col items-center">
      {/* Member image placeholder - 250x250 with rounded corners */}
      <div className="w-[250px] h-[250px] rounded-[10px] bg-[#D9D9D9] overflow-hidden flex items-center justify-center">
        {/* Display initials or a generic icon instead of trying to load an image */}
        <span
          className="text-[80px] font-bold text-gray-400"
          style={{ fontFamily: "'Albert Sans', sans-serif" }}
        >
          {member.name.charAt(0)}
        </span>
      </div>

      {/* Member name */}
      <h3
        className="font-albert-sans font-medium text-[30px] mt-4"
        style={{
          fontFamily: "'Albert Sans', sans-serif",
          color: textColor,
        }}
      >
        {member.name}
      </h3>

      {/* Member links */}
      <div
        className="text-[20px] mt-1"
        style={{ color: isDark ? "#9CA3AF" : "#6B7280" }}
      >
        <a
          href={member.personalWebsite || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:underline"
        >
          personal website / resume
        </a>
        <a
          href={member.linkedIn || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:underline"
        >
          LinkedIn link
        </a>
      </div>
    </div>
  );
};

const Board: React.FC = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const [selectedCommittee, setSelectedCommittee] =
    useState<Committee>("Executives");

  // Get board members and committees from JSON
  const boardMembers: BoardMember[] = boardData.boardMembers as BoardMember[];
  const committees: Committee[] = boardData.committees as Committee[];

  // Filter board members by selected committee
  const filteredMembers = boardMembers.filter(
    (member) => member.committee === selectedCommittee
  );

  // Theme-based colors
  const backgroundColor = isDark ? "#1E1E1E" : "#FAF9F6";
  const textColor = isDark ? "white" : "black";
  const buttonBgColor = isDark ? "#F58134" : "#19B5CA"; // Orange in dark mode, Blue in light mode
  const buttonColor = isDark ? "#121212" : backgroundColor; // Navbar color in dark mode, regular bg in light mode

  // Get committee name with "Team" appended for the title
  const getCommitteeSingular = (committee: Committee): string => {
    // Handle special cases
    if (committee === "Executives") return "Executive Team";
    if (committee === "Infrastructure") return "Infrastructure Team";
    if (committee === "Online Content") return "Online Content Team";
    if (committee === "Professional Events") return "Professional Events Team";
    if (committee === "Social Events") return "Social Events Team";

    // For committees without trailing 's', just add "Team"
    return `${committee} Team`;
  };

  // Function to generate text shadow style for the glowing text
  const getGlowStyle = (color: string) => {
    return {
      textShadow: `
        0 5px 20px ${color}66,
        0 -5px 15px ${color}33,
        0 0 30px ${color}55
      `,
      color: color,
    };
  };

  // Committee description component
  const CommitteeDescription = () => {
    if (boardData.committeeDescriptions[selectedCommittee]) {
      return (
        <p
          className={`font-albert-sans font-light text-[22px] leading-[28px] tracking-[0px] mb-8`}
          style={{
            fontFamily: "'Albert Sans', sans-serif",
            color: textColor,
          }}
        >
          {boardData.committeeDescriptions[selectedCommittee]}
        </p>
      );
    }
    return null;
  };

  return (
    <Page>
      <div
        className="min-h-screen pt-20 pb-12 relative"
        style={{ backgroundColor }}
      >
        {/* Top right stars - moved higher up */}
        <div className="absolute top-12 right-12 flex space-x-2 z-10">
          <motion.img
            src={star}
            alt=""
            className="w-6 h-6"
            initial="initial"
            animate="animate"
            variants={starVariants}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              opacity: isDark ? 0.4 : 0.6,
              filter: isDark
                ? "drop-shadow(0px 0px 8px white)"
                : "drop-shadow(0px 0px 8px #19B5CA) brightness(0.3)",
            }}
          />
          <motion.img
            src={star}
            alt=""
            className="w-6 h-6"
            initial="initial"
            animate="animate"
            variants={starVariants}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              opacity: isDark ? 0.4 : 0.6,
              filter: isDark
                ? "drop-shadow(0px 0px 8px white)"
                : "drop-shadow(0px 0px 8px #19B5CA) brightness(0.3)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Left side: Fixed sidebar with committee list and join button */}
            <div
              className="md:w-1/4 fixed top-20 px-2 md:px-6 flex flex-col"
              style={{
                backgroundColor,
                height: "calc(100vh - 80px - 120px)",
                zIndex: 5,
              }}
            >
              {/* Committee section header with glowing underline */}
              <div className="pl-2 mb-6">
                <h2
                  className="font-albert-sans font-medium text-[26px] leading-[28px] tracking-[0px] mb-2"
                  style={{
                    fontFamily: "'Albert Sans', sans-serif",
                    color: textColor,
                  }}
                >
                  Committees:
                </h2>
                {/* Glowing underline */}
                <div
                  className="h-[2px] w-[153px] rounded-full"
                  style={{
                    backgroundColor: isDark ? "#F58134" : "#19B5CA",
                    boxShadow: isDark
                      ? "0 0 8px 1px #F58134, 0 0 12px 2px rgba(245, 129, 52, 0.5)"
                      : "0 0 8px 1px #19B5CA, 0 0 12px 2px rgba(25, 181, 202, 0.5)",
                  }}
                ></div>
              </div>

              {/* Simple scrollable committee list with consistent spacing */}
              <div className="overflow-y-auto flex-grow pl-2 pr-2">
                <ul className="space-y-[20px]">
                  {committees.map((committee) => (
                    <li key={committee} className="flex items-center">
                      <button
                        className="flex items-center w-full text-left font-albert-sans font-normal text-[22px] leading-[26px] tracking-[0px]"
                        style={{
                          fontFamily: "'Albert Sans', sans-serif",
                          color: textColor,
                        }}
                        onClick={() => setSelectedCommittee(committee)}
                      >
                        <span
                          className={`inline-block w-5 h-5 rounded-full border mr-3`}
                          style={{
                            borderColor: buttonBgColor,
                            backgroundColor:
                              selectedCommittee === committee
                                ? buttonBgColor
                                : "transparent",
                          }}
                        >
                          {/* No inner circle needed since the entire circle is filled when selected */}
                        </span>
                        {committee}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Join us button */}
              <div className="mt-4 mb-6 relative pl-2">
                <div className="relative w-[160px] h-[60px]">
                  {/* Background element - positioned for better reveal */}
                  <div
                    className="absolute top-[8px] left-0 w-full h-[50px] rounded-full"
                    style={{ backgroundColor: buttonBgColor }}
                  ></div>

                  {/* Button with border - moves down more on hover and uses navbar color in dark mode */}
                  <motion.button
                    className="absolute top-0 left-0 w-full h-[55px] rounded-full text-[18px] flex items-center justify-center border-2"
                    style={{
                      backgroundColor: buttonColor, // Using navbar color in dark mode
                      borderColor: buttonBgColor,
                      color: textColor,
                    }}
                    initial={{ y: 0 }}
                    whileHover={{ y: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    onClick={() => navigate("/join")}
                  >
                    JOIN US
                  </motion.button>
                </div>

                {/* Bottom left stars - correctly positioned next to the JOIN US button */}
                <div className="absolute top-[25px] left-[170px] flex space-x-2 z-10">
                  <motion.img
                    src={star}
                    alt=""
                    className="w-5 h-5"
                    initial="initial"
                    animate="animate"
                    variants={starVariants}
                    transition={{
                      duration: 9,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      opacity: isDark ? 0.4 : 0.6,
                      filter: isDark
                        ? "drop-shadow(0px 0px 8px white)"
                        : "drop-shadow(0px 0px 8px #19B5CA) brightness(0.3)",
                    }}
                  />
                  <motion.img
                    src={star}
                    alt=""
                    className="w-5 h-5"
                    initial="initial"
                    animate="animate"
                    variants={starVariants}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      opacity: isDark ? 0.4 : 0.6,
                      filter: isDark
                        ? "drop-shadow(0px 0px 8px white)"
                        : "drop-shadow(0px 0px 8px #19B5CA) brightness(0.3)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Right side: Scrollable content with board members - adjusted margin to match new width */}
            <div className="w-full md:w-3/4 md:ml-[25%] px-6 md:px-12 pb-24">
              {" "}
              {/* Increased width and adjusted margin */}
              {/* Dynamic title based on selected committee */}
              <h1
                className="font-albert-sans font-medium text-[60px] leading-[60px] tracking-[0px] mb-10"
                style={{
                  fontFamily: "'Albert Sans', sans-serif",
                }}
              >
                <span style={{ color: textColor }}>Meet Our </span>
                <span style={getGlowStyle(isDark ? "#F58134" : "#19B5CA")}>
                  {getCommitteeSingular(selectedCommittee).split(" Team")[0]}
                </span>
                <span style={{ color: textColor }}> Team!</span>
              </h1>
              <CommitteeDescription />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
                {filteredMembers.map((member, index) => (
                  <BoardMemberCard
                    key={index}
                    member={member}
                    textColor={textColor}
                    isDark={isDark}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Board;
