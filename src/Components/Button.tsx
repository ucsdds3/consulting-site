import { motion } from "framer-motion";
// import { useTheme } from "../Pages/Home/useTheme";

const buttonVariants = {
  initial: {
    y: 0
  },
  hover: {
    y: "5px"
  }
};

const Button = ({
  onclick,
  contents,
  className = ""
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
        className={` top-0  border-2 border-[#F58134] rounded-full py-1 px-6 cursor-pointer  whitespace-nowrap  text-[20px] bg-[#1E1E1E] text-white
         `}
        variants={buttonVariants}
        initial="initial"
        animate="initial"
        whileHover="hover"
      >
        {contents}
      </motion.button>
      {/* Invisible element to maintain height */}
      <div
        className={`absolute top-0  translate-y-[5px] border-2  border-[#F58134] w-full h-full rounded-full z-[-1] bg-[#F58134]
         `}
      ></div>

      <div className="absolute top-0 invisible py-2 px-6   ">{contents}</div>
    </div>
  );
};

export default Button;
