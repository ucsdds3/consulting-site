import { useRef } from "react";
import Button from "./Button";

const Landing = () => {
  const TextAreaRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col lg:w-[80vw] w-[95vw] min-h-[90vh] mx-auto">
      <div className="flex flex-col justify-center mt-[20vh]" id="textarea" ref={TextAreaRef}>
        <div className="">
          <div className=" lg:text-[4vw] text-[7vw] text-white">DS3</div>
          <div className="flex text-white lg:text-[5vw] leading-[4vw] ml-[-0.1rem] text-[6vw]">
            <div className="text-[#F58134]">Learn</div>,
            <div className="text-[#19B5CA] ml-[0.5rem]">Build</div>,
            <div className="text-[#A9A9A9] ml-[0.5rem]">Innovate</div>, With Data
          </div>
          <div className="mt-4 md:text-[1.5vw] text-[4vw] sm:text-[3vw]">
            We are here to expand the horizons of data science as a community together.
          </div>
          <Button contents="JOIN US" onclick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
