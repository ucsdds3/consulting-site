import { motion } from "framer-motion";
import { AppearingVariants } from "./LandingVariants";
import Star from "./Star";

const Stars = ({
  StarsArray
}: {
  StarsArray: { x: number; y: number; w: number }[];
}) => {
  return (
    <motion.div
      variants={AppearingVariants}
      initial="initial"
      animate="animate"
      className="z-[-10]"
    >
      {StarsArray.map((star, i) => {
        return (
          <>
            <Star x={star.x} y={star.y} w={star.w} index={i}></Star>
          </>
        );
      })}
    </motion.div>
  );
};

export default Stars;
