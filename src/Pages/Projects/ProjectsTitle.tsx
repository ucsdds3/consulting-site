import { motion } from "framer-motion";
import dino from "/src/Assets/Images/betterdino.png";
import TextAreaProjects from "../Projects/TextAreaProjects";
import Stars from "../../Components/Landing/Stars";
import { useEffect, useRef, useState } from "react";

const Landing = () => {
  const [rendered, setRendered] = useState(false);

  const TextAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setRendered(true);
  }, []);

  return (
    <div className=" flex flex-col lg:w-[80vw] md:w-[80vw] w-[90vw] min-h-[90vh] mx-auto">
      {rendered && <Stars rect={TextAreaRef} />}
      <TextAreaProjects ref={TextAreaRef} />

      {/* Dino Image */}
      <div className="absolute bottom-[0vh] right-[0.5vw] md:w-[500px] lg:w-[650px] 2xl:w-[1000px] h-1/2 w-[400px]">
        <motion.img
          src={dino}
          alt=""
          className="absolute w-1/2 right-10 bottom-10 rotate-[15deg]"
        />
      </div>
    </div>
  );
};

export default Landing;
