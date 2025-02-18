import Arrow from "../../Assets/Images/Arrow.svg";
// import placeholder from "../../Assets/Images/placeholder.png";
import data from "./slideshow-info.json";
import { baseURL } from "../../Utils/info";
import { useEffect, useState } from "react";
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
  useEffect(() => {
    const intervalID = setInterval(() => {
      increment();
    }, 5000);
    return () => {
      clearInterval(intervalID);
    };
  });
  return (
    <div className="w-full h-[80vh]  relative flex items-center justify-center">
      <img
        src={Arrow}
        alt=""
        className="bg-white rounded-full cursor-pointer absolute left-0 top-1/2 mt-[-3vh] mx-[10vh] w-[6vh] opacity-50"
        onClick={decrement}
      />
      <div className="m-0 h-[50vh] w-[80%] absolute bg-inherit overflow-x-hidden my-auto">
        <div
          className="duration-500 m-0 h-full w-full"
          style={{ transform: `translateX(-${slideNum * 100}%)` }}
        >
          {data.map((daton, index) => {
            return (
              <div
                key={index}
                className="flex justify-between px-[3vw] absolute h-full"
                style={{ transform: `translateX(${index * 100}%)` }}
              >
                <img
                  src={`${baseURL}/${daton.link}`}
                  alt=""
                  className="h-full"
                />
                <span className="w-[50%] text-[1.5vw]">
                  <h2 className="my-5 text-white ">{daton.header}</h2>
                  <p>{daton.text}</p>
                  <p>-{daton.name} | Linkedin</p>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <img
        src={Arrow}
        alt=""
        className="bg-white rounded-full cursor-pointer rotate-180 absolute right-0 top-1/2 mx-[10vh] w-[6vh] opacity-50 mt-[-3vh]"
        onClick={increment}
      />
    </div>
  );
}
