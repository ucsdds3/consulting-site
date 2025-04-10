import { motion } from "framer-motion";
import dino from "/src/Assets/Images/betterdino.png";
import TextAreaProjects from "../Projects/TextAreaProjects";
import Stars from "../../Components/Landing/Stars";
import starsData from "./StarsData.json";

const Landing = () => {
  // Animation variants for the dinosaur
  const dinoVariants = {
    initial: {
      x: 0,
      y: 0,
      rotate: 0,
    },
    hover: {
      x: [-20, 20, -20], // Move left and right
      y: [0, -30, 0], // Hop up and down
      rotate: [-5, 5, -5], // Slight rotation for playfulness
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="w-[90%] max-w-[1204px] relative mx-auto mb-[2vw]">
      <Stars StarsArray={starsData[Math.floor(Math.random() * 4)]} />

      <div className="flex flex-col lg:flex-row items-center justify-center py-6 gap-[0.5vw] min-h-[600px]">
        {/* Text Area */}
        <TextAreaProjects />

        {/* Dino Image with hover animation */}
        <div className="hidden lg:block">
          <motion.img
            src={dino}
            alt="Projects Decor Image"
            className="w-[604px] h-[604px] object-contain cursor-pointer"
            variants={dinoVariants}
            initial="initial"
            whileHover="hover"
          />
        </div>

        {/* Static image for mobile */}
        <img
          src={dino}
          alt="Projects Decor Image"
          className="w-[80%] h-auto lg:hidden mt-8 object-contain"
        />
      </div>
    </div>
  );
};

export default Landing;
