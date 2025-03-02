import React, { useState } from "react";
import { useTheme } from "../../../Pages/Home/useTheme";
import Page from "../../../Components/Page/Page";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import boardData from "./board.json";

// Define button animation variants
const buttonVariants = {
  initial: {
    y: 0,
  },
  hover: {
    y: "0.5vw",
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
  const [selectedCommittee, setSelectedCommittee] = useState<Committee | null>(
    null
  );

  // Get board members and committees from JSON
  const boardMembers: BoardMember[] = boardData.boardMembers as BoardMember[];
  const committees: Committee[] = boardData.committees as Committee[];

  // Filter board members by selected committee
  const filteredMembers = selectedCommittee
    ? boardMembers.filter((member) => member.committee === selectedCommittee)
    : [];

  // Theme-based colors
  const backgroundColor = isDark ? "#1E1E1E" : "#FAF9F6";
  const textColor = isDark ? "white" : "black";
  const buttonBgColor = isDark ? "#F58134" : "#19B5CA"; // Orange in dark mode, Blue in light mode
  const buttonColor = isDark ? "#121212" : backgroundColor; // Navbar color in dark mode, regular bg in light mode

  // Committee description component
  const CommitteeDescription = () => {
    if (
      selectedCommittee &&
      boardData.committeeDescriptions[selectedCommittee]
    ) {
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

  // General description component, shows when no committee is selected
  const GeneralDescription = () => (
    <div className="mt-4">
      <p
        className={`font-albert-sans font-light text-[22px] leading-[28px] tracking-[0px]`}
        style={{
          fontFamily: "'Albert Sans', sans-serif",
          color: textColor,
        }}
      >
        {boardData.generalDescription}
      </p>
    </div>
  );

  return (
    <Page>
      <div
        className="min-h-screen pt-24 pb-12 px-6 md:px-12"
        style={{ backgroundColor }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left side: Title and committees */}
            <div className="md:w-1/3">
              <h1
                className="font-albert-sans font-medium text-[60px] leading-[60px] tracking-[0px] mb-10"
                style={{
                  fontFamily: "'Albert Sans', sans-serif",
                  color: textColor,
                }}
              >
                Meet Our Board!
              </h1>

              {/* Committees section */}
              <h2
                className="font-albert-sans font-medium text-[24px] leading-[24px] tracking-[0px] mb-6"
                style={{
                  fontFamily: "'Albert Sans', sans-serif",
                  color: textColor,
                }}
              >
                Committees:
              </h2>
              <ul className="space-y-4">
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
                          borderColor: textColor,
                          backgroundColor:
                            selectedCommittee === committee
                              ? textColor
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

              {/* Join us button with refined positioning and color */}
              <div className="mt-16 mb-8">
                <div className="relative w-[180px] h-[65px]">
                  {/* Background element - positioned for better reveal */}
                  <div
                    className="absolute top-[10px] left-0 w-full h-[55px] rounded-full"
                    style={{ backgroundColor: buttonBgColor }}
                  ></div>

                  {/* Button with border - moves down more on hover and uses navbar color in dark mode */}
                  <motion.button
                    className="absolute top-0 left-0 w-full h-[60px] rounded-full text-[20px] flex items-center justify-center border-2"
                    style={{
                      backgroundColor: buttonColor, // Using navbar color in dark mode
                      borderColor: buttonBgColor,
                      color: textColor,
                    }}
                    initial={{ y: 0 }}
                    whileHover={{ y: 4 }} // Increased movement from 3 to 4
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    onClick={() => navigate("/join")}
                  >
                    JOIN US
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Right side: Board members grid or general description */}
            <div className="md:w-2/3">
              {selectedCommittee === null ? (
                <GeneralDescription />
              ) : (
                <>
                  <CommitteeDescription />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredMembers.map((member, index) => (
                      <BoardMemberCard
                        key={index}
                        member={member}
                        textColor={textColor}
                        isDark={isDark}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Board;
