import { motion } from "framer-motion";
import { AppearingVariants, starVariants } from "./LandingVariants";
import star from "../../Assets/Images/Star.svg";
import { useTheme } from "../../Pages/Home/useTheme";

const Star = ({
  index,
  x,
  y,
  w,
}: {
  index: number;
  x: number;
  y: number;
  w: number;
}) => {
  const { isDark } = useTheme();
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const getStarStyle = () => {
    if (isMobile) {
      if (isDark) {
        return {
          width: `${w}vw`,
          opacity: 1,
          filter: "brightness(1) drop-shadow(0px 0px 8px white)",
        };
      } else {
        return {
          width: `${w}vw`,
          opacity: 0.8,
          filter: "brightness(0) drop-shadow(0px 0px 4px rgba(0,0,0,0.5))",
        };
      }
    }
    // Desktop styles remain unchanged
    return {
      width: `${w}vw`,
      opacity: isDark ? 0.4 : 0.6,
      filter: isDark
        ? "drop-shadow(0px 0px 8px white)"
        : "drop-shadow(0px 0px 8px #19B5CA) brightness(0.3)",
    };
  };

  return (
    <motion.div
      variants={AppearingVariants}
      key={index}
      className="m-4"
      style={{
        top: `${y}%`,
        left: `${x}%`,
        position: "absolute",
      }}
    >
      <div>
        <motion.img
          src={star}
          alt=""
          variants={starVariants}
          initial="initial"
          animate="animate"
          transition={{
            delay: index * 0.1,
            duration: 8 + Math.floor(Math.random() * 4),
            repeat: Infinity,
          }}
          style={getStarStyle()}
        />
      </div>
    </motion.div>
  );
};

export default Star;
