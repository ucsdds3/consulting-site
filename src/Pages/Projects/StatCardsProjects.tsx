// src/Components/Card.tsx
import { useTheme } from "../../Pages/Home/useTheme";
import { motion } from "framer-motion";
import star from "../../Assets/Images/Star.svg"; // Import the star SVG directly

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
            : "drop-shadow(0px 0px 8px rgba(25, 181, 202, 0.8)) brightness(0.7)",
        }}
      />
    </div>
  );
};

const Card: React.FC = () => {
  const { isDark } = useTheme();

  const title = "ABOUT PROJECTS";
  const imageSrc = "";
  const bulletTitle1 = "Gain Firsthand Experience";
  const bullet1 =
    "Work on real projects—build language models, replicate top ML systems, and develop your own ideas with a team.";
  const bulletTitle2 = "Build Your Portfolio";
  const bullet2 =
    "Strengthen your resume with hands-on projects while mastering in-demand ML tools and techniques.";
  const bulletTitle3 = "Collaborate With Your Peers";
  const bullet3 = "Join a community of data enthusiasts, exchange ideas, and tackle challenges together to grow your skills.";
  
  // Dynamic styles based on theme
  const textColor = isDark ? "text-white" : "text-black";
  const backgroundColor = isDark ? "bg-black" : "bg-transparent";
  const borderColor = isDark ? "border-white" : "border-black";

  return (
    <div
      className={`size-fit ${backgroundColor} p-10 w-[80vw] rounded-xl ${borderColor} border m-20`}
    >
      <p className={`${textColor} text-3xl mb-2`}>{title}</p>
      <div className="grid grid-flow-row grid-cols-10 gap-8">
        <div className="h-[100%] bg-[#D9D9D9] col-span-6 rounded-md">
          {imageSrc}
        </div>
        <div className="col-span-4">
          <div className="grid grid-flow-row grid-cols-8 gap-2">
            <div className="col-span-1">
            <BulletStar />
            </div>
            <div className="col-span-7">
              <p className={`${textColor} text-2xl font-bold mb-2`}>
                {bulletTitle1}
              </p>
              <p className={textColor}>{bullet1}</p>
            </div>
            <div className="col-span-1">
            <BulletStar />
            </div>
            <div className="col-span-7">
              <p className={`${textColor} text-2xl font-bold mb-2`}>
                {bulletTitle2}
              </p>
              <p className={textColor}>{bullet2}</p>
            </div>
            <div className="col-span-1">
            <BulletStar />
            </div>
            <div className="col-span-7">
              <p className={`${textColor} text-2xl font-bold mb-2`}>
                {bulletTitle3}
              </p>
              <p className={textColor}>{bullet3}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Card;
