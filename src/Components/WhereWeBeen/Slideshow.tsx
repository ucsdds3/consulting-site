import Arrow from "../../Assets/Images/Arrow.svg";
// import placeholder from "../../Assets/Images/placeholder.png";
import data from "./slideshow-info.json";
import { baseURL } from "../../Utils/info";
import { useState } from "react";
import { motion } from "framer-motion";
export default function SlideShow() {
  const [slideNum, setSlideNum] = useState(0);
  const increment = () => {
    if (slideNum + 1 >= data.length) {
      setSlideNum(0);
    } else {
      setSlideNum(slideNum + 1);
    }
  };
  const decrement = () => {
    if (slideNum <= 0) {
      setSlideNum(data.length - 1);
    } else {
      setSlideNum(slideNum - 1);
    }
  };
  return (
    <div className="w-full h-[60vh]  relative flex items-center justify-center">
      <img
        src={Arrow}
        alt=""
        className="bg-white rounded-full cursor-pointer absolute left-0 top-1/2 mx-[10vh] w-[6vh] opacity-50"
        onClick={decrement}
      />
      {data.map((daton, index) => {
        if (slideNum === index)
          return (
            <motion.div
              className="m-auto h-[70%] w-[80%]  flex justify-between px-[5vw] absolute"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              // exit={{ opacity: 0 }}
            >
              <img src={`${baseURL}/${daton.link}`} alt="" className="h-full" />
              <span className="w-[55%] text-[1.6vw]">
                <h2 className="my-5 text-white ">{daton.header}</h2>
                <p>{daton.text}</p>
                <p>-{daton.name} | Linkedin</p>
              </span>
            </motion.div>
          );
      })}

      <img
        src={Arrow}
        alt=""
        className="bg-white rounded-full cursor-pointer rotate-180 absolute right-0 top-1/2 mx-[10vh] w-[6vh] opacity-50"
        onClick={increment}
      />
    </div>
  );
}
