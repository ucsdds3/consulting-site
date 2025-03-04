import { motion } from "framer-motion";
import star from "../../../Assets/Images/Star.svg";
import { useTheme } from "../../Home/useTheme";
export default function AlumniHeader() {
  const { isDark } = useTheme();
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
        className={`absolute opacity-1 w-[40px] left-60 top-1/2 ${
          isDark
            ? "filter-none"
            : "[filter:invert(100%)_sepia(0%)_saturate(7479%)_hue-rotate(267deg)_brightness(117%)_contrast(100%)]"
        }`}
        variants={starVariants}
        initial="initial"
        animate="animate"
      />
      <motion.img
        src={star}
        alt=""
        className={`absolute opacity-50 w-[60px] left-64 top-[calc(50%+2rem)]  ${
          isDark
            ? "filter-none"
            : "[filter:invert(100%)_sepia(0%)_saturate(7479%)_hue-rotate(267deg)_brightness(117%)_contrast(100%)]"
        }`}
        variants={starVariants}
        initial="initial"
        animate="animate"
      />
      <motion.img
        src={star}
        alt=""
        className={`absolute opacity-50 w-[80px] right-60 top-[40%]  ${
          isDark
            ? "filter-none"
            : "[filter:invert(100%)_sepia(0%)_saturate(7479%)_hue-rotate(267deg)_brightness(117%)_contrast(100%)]"
        }`}
        variants={starVariants}
        initial="initial"
        animate="animate"
      />
      <motion.img
        src={star}
        alt=""
        className={`absolute opacity-50 w-[40px] right-56 top-[calc(40%-2rem)]  ${
          isDark
            ? "filter-none"
            : "[filter:invert(100%)_sepia(0%)_saturate(7479%)_hue-rotate(267deg)_brightness(117%)_contrast(100%)]"
        }`}
        variants={starVariants}
        initial="initial"
        animate="animate"
      />
      <h1 className={`text-[4vw] ${isDark ? "text-white" : "text-black"}`}>
        Our Alumni
      </h1>
      <p
        className={`text-[1.7vw] w-3/4 text-center font-light ${
          isDark ? "text-gray-400" : "text-black"
        }`}
      >
        (insert general blurb about experiences past graduation, urge website
        viewers to interact and reach out with past members)
      </p>
    </div>
  );
}
