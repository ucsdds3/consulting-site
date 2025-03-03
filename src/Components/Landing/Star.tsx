import { motion } from "framer-motion";
import { AppearingVariants, starVariants } from "./LandingVariants";
import { useEffect, useRef, useState } from "react";
import star from "../../Assets/Images/Star.svg";
import { useTheme } from "../../Pages/Home/useTheme";

const Star = ({
  index,
  rect,
}: {
  index: number;
  rect: React.RefObject<HTMLDivElement>;
}) => {
  const { isDark } = useTheme();
  const [x, setX] = useState(Math.floor(Math.random() * 100));
  const [y, setY] = useState(10 + Math.floor(Math.random() * 70));
  const [w, setW] = useState((5 + Math.random() * 5) / 5);
  const [overlap, setOverlap] = useState(false);
  const starref = useRef<HTMLDivElement>(null);
  const check_overlap = (
    rect1: DOMRect | undefined,
    rect2: DOMRect | undefined
  ) => {
    if (!rect1 || !rect2) return false;
    return !(
      rect1.right < rect2.left ||
      rect1.left > rect2.right ||
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom
    );
  };

  useEffect(() => {
    setOverlap(
      check_overlap(
        rect.current?.getBoundingClientRect(),
        starref.current?.getBoundingClientRect()
      )
    );
    if (overlap) {
      setX(Math.floor(Math.random() * 100));
      setY(10 + Math.floor(Math.random() * 70));
      setW((5 + Math.random() * 5) / 5);
    }
  });
  return (
    <>
      <motion.div
        variants={AppearingVariants}
        key={index}
        className="m-4"
        style={{
          top: `${y}%`,
          left: `${x}%`,
          position: "absolute",
          // boxShadow: "0px 0px 40px 20px #ffffff"
        }}
      >
        <div ref={starref}>
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
            style={{
              width: `${w}vw`,
              opacity: isDark ? 0.4 : 0.6,
              filter: isDark
                ? "drop-shadow(0px 0px 8px white)"
                : "drop-shadow(0px 0px 8px #19B5CA) brightness(0.3)",
            }}
          />
        </div>
      </motion.div>
    </>
  );
};

export default Star;
