import { motion } from "framer-motion";
import dino from "/src/Assets/Images/Dino.svg";
import TextArea from "../../Components/Landing/TextArea";
import Stars from "../../Components/Landing/Stars";

const Landing = () => {
  return (
    <div className="w-full min-h-screen">
      <Stars />
      <TextArea />

      <div className="absolute top-[50vh] right-0 w-[30%] h-1/2">
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
