import { motion } from "framer-motion";

export const buttonVariants = {
  initial: { y: 0 },
  hover: { y: "0.5vw" },
};

const Button = ({ onclick, contents }: { onclick: () => void; contents: string }) => {
  return (
    <div className="relative md:w-[10vw] md:h-[3vw] w-[25vw] h-[7vw] mt-4" onClick={onclick}>
      <motion.button
        className="absolute top-0 w-full h-full border-2 rounded-full p-[0.5vw] bg-black text-white md:text-[1.2vw] text-[4vw]"
        variants={buttonVariants}
        initial="initial"
        animate="initial"
        whileHover="hover"
      >
        {contents}
      </motion.button>
      <div className="absolute top-0 translate-y-[1.2vw] md:translate-y-[0.5vw]  border-2 w-full h-full rounded-full bg-white z-[-1]" />
    </div>
  );
};
export default Button;
