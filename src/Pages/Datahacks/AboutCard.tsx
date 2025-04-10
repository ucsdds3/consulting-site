import { motion } from "framer-motion";
import { useTheme } from "../Home/useTheme";
import { starVariants } from "../../Components/Landing/LandingVariants";
import star from "../../Assets/Images/Star.svg";
import React from "react";

const points = [
  {
    title: "Event Overview",
    description:
      "DataHacks is an annual data science hackathon hosted by DS3 every Spring Quarter",
  },
  {
    title: "Community Engagement",
    description:
      "Over 150 attendees from diverse backgrounds participated in DataHacks 2024",
  },
  {
    title: "Opportunities for Growth",
    description:
      "Participate to build your portfolio, win exciting prizes, and gain invaluable experience!",
  },
];

const AboutCard = () => {
  const { isDark } = useTheme();
  const borderColor = isDark ? "border-white" : "border-black";
  const textColor = isDark ? "text-white" : "text-black";
  const backgroundColor = isDark ? "#0E1111" : "transparent";
  return (
    <>
      <div
        className={`size-fit w-[80vw] max-w-[1204px] relative mx-auto border ${borderColor} rounded-xl p-10 m-20`}
        style={{ backgroundColor }}
      >
        <h2
          className={`${textColor} text-3xl mb-2 font-['Albert Sans'] uppercase`}
        >
          ABOUT DATAHACKS
        </h2>

        <div className="grid grid-flow-row grid-cols-10 gap-8">
          {/* Image section - takes up 6/10 of the width */}
          <div className="h-[100%] bg-[#D9D9D9] col-span-6 rounded-md"></div>

          {/* Text section - takes up 4/10 of the width */}
          <div className="col-span-4">
            <div className="grid grid-flow-row grid-cols-8 gap-6">
              {points.map((point, index) => (
                <React.Fragment key={index}>
                  <div className="col-span-1">
                    <BulletStar key={index} />
                  </div>
                  <div className="col-span-7">
                    <p
                      className={`${textColor} text-2xl font-bold mb-2 font-['Albert Sans']`}
                    >
                      {point.title}
                    </p>
                    <p className={`${textColor} font-['Albert Sans']`}>
                      {point.description}
                    </p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

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

export default AboutCard;
