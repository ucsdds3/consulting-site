import { motion } from "framer-motion";
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
  return (
    <div className="relative w-[10vw] h-[3vw] mt-2" onClick={onclick}>
      <motion.button
        className=" w-full h-full  border-2 rounded-full bg-black text-white text-lg"
        variants={buttonVariants}
        initial="initial"
        animate="initial"
        whileHover="hover"
      >
        {contents}
      </motion.button>
      <div className="absolute top-0 translate-y-[0.5vw] border-2 w-full h-full rounded-full bg-white z-[-1]"></div>
    </div>
  );
};
export default Button;
