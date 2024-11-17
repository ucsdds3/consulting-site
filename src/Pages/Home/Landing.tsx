import { motion } from "framer-motion";
import star from "/src/Assets/Images/Star.svg";
import dino from "/src/Assets/Images/Dino.svg";

const buttonVariants = {
  initial: {
    y: 0
  },
  hover: {
    y: "0.5rem"
  }
};

const starVariants = {
  initial: {
    rotate: 0
  },
  animate: {
    rotate: Array.from({ length: 360 }, (_, i) => i + 10)
  }
};

const Landing = () => {
  return (
    <div className="w-full min-h-screen">
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
      <div className="absolute top-[50vh] right-0 w-[30%] h-1/2">
        {Array.from({ length: 6 }, (_, index) => {
          const randomX = 25 + Math.floor(Math.random() * 20);
          const randomY = Math.floor(Math.random() * 100);
          return (
            <div
              key={index}
              style={{
                top: `${randomX}%`,
                left: `${randomY}%`,
                position: "absolute"
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
            </div>
          );
        })}

        <motion.img
          src={dino}
          alt=""
          className="absolute w-1/2 right-10 opacity-40 bottom-10 rotate-[25deg]"
        />
      </div>
    </div>
  );
};

export default Landing;
