import { motion } from "framer-motion";
import star from "/src/Assets/Images/Star.svg";

const starVariants = {
  initial: {
    rotate: 0
  },
  animate: {
    rotate: Array.from({ length: 360 }, (_, i) => i + 10)
  }
};

const AppearingVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5
    }
  }
};

const Stars = () => {
  return (
    <motion.div
      variants={AppearingVariants}
      initial="initial"
      animate="animate"
      className="z-[-10]"
    >
      {Array.from({ length: 10 }, (_, index) => {
        const randomX = 10 + Math.floor(Math.random() * 80);
        const randomY = 5 + Math.floor(Math.random() * 80);
        return (
          <motion.div
            variants={AppearingVariants}
            key={index}
            style={{
              top: `${randomY}%`,
              left: `${randomX}%`,
              position: "absolute",
              opacity: 0.2
            }}
          >
            <motion.img
              src={star}
              alt=""
              className="w-[20%]"
              variants={starVariants}
              initial="initial"
              animate="animate"
              transition={{
                delay: index * 0.1,
                duration: 10,
                repeat: Infinity
              }}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Stars;
