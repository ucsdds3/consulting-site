import { motion } from "framer-motion";
import star from "../../Assets/Images/Star.svg";
export default function AlumniHeader() {
  const starVariants = {
    initial: {
      rotate: 0
    },
    animate: {
      rotate: Array.from({ length: 360 }, (_, i) => i + 10),
      transition: {
        repeat: Infinity,
        duration: 20
      }
    }
  };
  return (
    <div className="flex flex-col justify-center lg:w-[80vw] w-[95vw] min-h-[90vh] mx-auto items-center ">
      <motion.img
        src={star}
        alt=""
        className="absolute opacity-1 w-[40px] left-60 top-1/2 "
        variants={starVariants}
        initial="initial"
        animate="animate"
      />
      <motion.img
        src={star}
        alt=""
        className="absolute opacity-50 w-[60px] left-64 top-[calc(50%+2rem)] "
        variants={starVariants}
        initial="initial"
        animate="animate"
      />
      <motion.img
        src={star}
        alt=""
        className="absolute opacity-50 w-[80px] right-60 top-[40%]"
        variants={starVariants}
        initial="initial"
        animate="animate"
      />
      <motion.img
        src={star}
        alt=""
        className="absolute opacity-50 w-[40px] right-56 top-[calc(40%-2rem)] "
        variants={starVariants}
        initial="initial"
        animate="animate"
      />
      <h1 className="text-white text-[4vw]">Our Alumni</h1>
      <p className=" text-[1.7vw] w-3/4 text-center font-light text-gray-200">
        (insert general blurb about experiences past graduation, urge website
        viewers to interact and reach out with past members)
      </p>
    </div>
  );
}
