import { motion } from "framer-motion";

const buttonVariants = {
  initial: {
    y: 0
  },
  hover: {
    y: "0.5rem"
  }
};
const Text = () => {
  return (
    <div className="absolute top-1/3 left-[8%]">
      <div className="relative">
        <div className="text-[4vh] text-white">DS3</div>
        <div className="flex text-white text-[8vh]">
          <div className="text-[#F58134]">Learn</div>,
          <div className="text-[#19B5CA] ml-[0.5ch]">Build</div>,
          <div className="text-[#A9A9A9] ml-[0.5ch]">Innovate</div>, With Data
        </div>
        <div>
          we are here to expand the horizons of data science as a community
          together
        </div>
        <motion.button
          className="absolute top-full mt-5 w-28 h-10 border-2 rounded-full bg-black"
          variants={buttonVariants}
          initial="initial"
          animate="initial"
          whileHover="hover"
        >
          Join Us
        </motion.button>
        <div className="absolute top-full mt-5 w-28 h-10 border-2 rounded-full translate-y-2 bg-white z-[-1]"></div>
      </div>
    </div>
  );
};
export default Text;
