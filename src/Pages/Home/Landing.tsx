import { motion } from "framer-motion";
import dino from "/src/Assets/Images/Dino.svg";
import TextArea from "../../Components/Landing/TextArea";
import Stars from "../../Components/Landing/Stars";

const Landing = () => {
  return (
    <div className="flex flex-col w-[80vw] min-h-[90vh] mx-auto">
      <Stars />
      <TextArea />

      <div className="absolute bottom-[10vh] right-[10vw] w-[30%] h-1/2">
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
