import { motion } from "framer-motion";
// import { useTheme } from "../Pages/Home/useTheme";

const buttonVariants = {
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
  return (
    <div
      className={`relative inline-block w-fit h-fit mt-4 ${className}`}
      onClick={onclick}
    >
      <motion.button
        className={` top-0  border-2 border-[#F58134] rounded-full py-2 px-6 md:py-3 md:px-8 whitespace-nowrap 
          md:text-[1.2vw] text-[4vw] min-w-[10vw] md:min-h-[3vw] min-h-[7vw] bg-[#1E1E1E] text-white
         `}
        variants={buttonVariants}
        initial="initial"
        animate="initial"
        whileHover="hover"
      >
        {contents}
      </motion.button>
      <div
        className={`absolute top-0 translate-y-[1.2vw] md:translate-y-[0.5vw] border-2  border-[#F58134] w-full h-full rounded-full z-[-1] bg-[#F58134]
         `}
      ></div>
      {/* Invisible element to maintain height */}
      <div className="absolute top-0 invisible py-2 px-6 md:py-3 md:px-8 md:text-[1.2vw] text-[4vw] ">
        {contents}
      </div>
    </div>
  );
};

export default Button;
