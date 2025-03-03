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
}: {
  onclick: () => void;
  contents: string;
}) => {
  const { isDark } = useTheme();

  return (
    <div
      className="relative md:w-[10vw] md:h-[3vw] w-[25vw] h-[7vw] mt-4"
      onClick={onclick}
    >
      <motion.button
        className={`absolute top-0 w-full h-full border-2 rounded-full p-[0.5vw] md:text-[1.2vw] text-[4vw] 
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
    </div>
  );
};

export default Button;
