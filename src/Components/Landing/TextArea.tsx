import { motion } from "framer-motion";
import { buttonVariants } from "./LandingVariants";

const Text = () => {
  return (
    <div className="flex flex-col justify-center mt-[20vh]" id="textarea">
      <div className="">
        <div className="text-[4vh] text-white">DS3</div>
        <div className="flex text-white text-[5vw] leading-[4vw] ml-[-0.1rem]">
          <div className="text-[#F58134]">Learn</div>,
          <div className="text-[#19B5CA] ml-[0.5rem]">Build</div>,
          <div className="text-[#A9A9A9] ml-[0.5rem]">Innovate</div>, With Data
        </div>
        <div className="mt-4 text-[1vw]">
          We are here to expand the horizons of data science as a community
          together.
        </div>
        <motion.button
          className="mt-10 w-40 h-14 border-2 rounded-full bg-black text-white text-lg"
          variants={buttonVariants}
          initial="initial"
          animate="initial"
          whileHover="hover"
        >
          Join Us
        </motion.button>
        <div className="mt-[-3rem] w-40 h-14 border-2 rounded-full bg-white z-[-1]"></div>
      </div>
    </div>
  );
};
export default Text;
