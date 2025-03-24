import { motion } from "framer-motion";
import { useTheme } from "../Home/useTheme";
import { starVariants } from "../../Components/Landing/LandingVariants";
import star from "../../Assets/Images/Star.svg";
const points = [
  {
    title: "Event Overview",
    description:
      "DataHacks is an annual data science hackathon hosted by DS3 every Spring Quarter"
  },
  {
    title: "Community Engagement",
    description:
      "Over 150 attendees from diverse backgrounds participated in DataHacks 2024"
  },
  {
    title: "Opportunities for Growth",
    description:
      "Participate to build your portfolio, win exciting prizes, and gain invaluable experience!"
  }
];
const AboutCard = () => {
  const { isDark } = useTheme();
  const borderColor = isDark ? "border-white" : "border-black";
  const textColor = isDark ? "text-white" : "text-black";
  const backgroundColor = isDark ? "#0E1111" : "transparent";
  return (
    <>
      <div
        className={`w-[90%] max-w-[1204px] min-h-[688px] relative mx-auto border ${borderColor} rounded-[15px] flex flex-col px-4 md:px-16 py-6`}
        style={{ backgroundColor }}
      >
        <h2
          className={`w-full ${textColor} text-[35px] md:text-[45px] font-medium font-['Albert Sans'] uppercase leading-[45px] md:leading-[65px]`}
        >
          ABOUT DATAHACKS
        </h2>

        <div className="flex flex-col lg:flex-row items-start lg:items-center mt-6 gap-8 lg:gap-0">
          {/* Placeholder for Image */}
          <div className="w-full lg:w-[574px] h-[300px] md:h-[479px] bg-[#D9D9D9] rounded-[10px] pl-4"></div>

          {/* Text Section */}
          <div className="w-full lg:ml-7 flex flex-col justify-center space-y-8 lg:max-w-[500px]">
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
          ease: "linear"
        }}
        style={{
          width: "31px",
          height: "32px",
          opacity: 1,
          filter: isDark
            ? "drop-shadow(0px 0px 8px rgba(245, 129, 52, 0.6))"
            : "drop-shadow(0px 0px 8px rgba(25, 181, 202, 0.6))"
        }}
      />
    </div>
  );
};
export default AboutCard;
