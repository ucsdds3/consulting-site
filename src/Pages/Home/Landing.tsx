import { motion, AnimatePresence } from "framer-motion";
import dino from "/src/Assets/Images/betterdino.png";
import TextArea from "../../Components/Landing/TextArea";
import Stars from "../../Components/Landing/Stars";
import { useEffect, useRef, useState } from "react";

const Landing = () => {
  const [rendered, setRendered] = useState(false);
  const [showArrow, setShowArrow] = useState(true);

  const TextAreaRef = useRef<HTMLDivElement>(null);

  // Show/hide arrow based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Hide arrow after scrolling beyond 50px (adjust as needed)
      if (scrollY > 50) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setRendered(true);
  }, []);

  return (
    <div className=" flex flex-col lg:w-[80vw] w-[95vw] min-h-[90vh] mx-auto">
      {rendered && <Stars rect={TextAreaRef} />}
      <TextArea ref={TextAreaRef} />

      {/* Dino Image */}
      <div className="absolute bottom-[0vh] right-[0.5vw] w-[300px] md:w-[500px] lg:w-[800px] 2xl:w-[1050px] h-1/2">
        <motion.img
          src={dino}
          alt=""
          className="absolute w-1/2 right-10 bottom-10 rotate-[15deg]"
        />
      </div>

      {/* Scroll Indicator Arrow */}
      <AnimatePresence>
        {showArrow && (
          <motion.div
            className="absolute bottom-5 left-1/2 transform -translate-x-1/2 cursor-pointer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
          >
            {/* You can replace this with any icon or SVG arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Landing;
