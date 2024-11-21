import { motion } from "framer-motion";
import { AppearingVariants } from "./LandingVariants";
import Star from "./Star";
import { RefObject } from "react";

const Stars = ({ rect }: { rect: RefObject<HTMLDivElement> }) => {
  return (
    <motion.div
      variants={AppearingVariants}
      initial="initial"
      animate="animate"
      className="z-[-10]"
    >
      {Array.from({ length: 12 }, (_, index) => {
        return <Star index={index} rect={rect} key={index} />;
      })}
    </motion.div>
  );
};

export default Stars;
