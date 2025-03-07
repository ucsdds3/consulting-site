import { motion } from "framer-motion";
import { useTheme } from "../Pages/Home/useTheme";

export const buttonVariants = {
  initial: {
    y: 0,
  },
  hover: {
    y: "0.5vw",
  },
};

const Button = ({
  onclick,
  contents,
  className = "",
}: {
  onclick: () => void;
  contents: string;
  className?: string;
}) => {
  const { isDark } = useTheme();

  return (
    <div
      className={`relative inline-block mt-4 ${className}`}
      onClick={onclick}
    >
      <motion.button
        className={`absolute top-0 w-full h-full border-2 rounded-full py-2 px-6 md:py-3 md:px-8 whitespace-nowrap 
          md:text-[1.2vw] text-[4vw] min-w-[10vw] md:min-h-[3vw] min-h-[7vw]
          ${
            isDark
              ? "bg-black text-white border-[#F58134]"
              : "bg-white text-black border-[#19B5CA]"
          }`}
        variants={buttonVariants}
        initial="initial"
        animate="initial"
        whileHover="hover"
      >
        {contents}
      </motion.button>
      <div
        className={`absolute top-0 translate-y-[1.2vw] md:translate-y-[0.5vw] border-2 w-full h-full rounded-full z-[-1]
          ${
            isDark
              ? "bg-[#F58134] border-[#F58134]"
              : "bg-[#19B5CA] border-[#19B5CA]"
          }`}
      ></div>
      {/* Invisible element to maintain height */}
      <div className="invisible py-2 px-6 md:py-3 md:px-8 md:text-[1.2vw] text-[4vw]">
        {contents}
      </div>
    </div>
  );
};

export default Button;