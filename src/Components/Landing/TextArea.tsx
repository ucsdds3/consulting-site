import { forwardRef, LegacyRef } from "react";
import Button from "../Button";
import { baseURL } from "../../Utils/info";
const Text = forwardRef((_props, ref: LegacyRef<HTMLDivElement>) => {
  return (
    <div
      className="flex flex-col justify-center mt-[20vh]"
      id="textarea"
      ref={ref}
    >
      <div className="">
        <div className="flex text-white lg:text-[5vw] leading-[4vw] ml-[-0.1rem] text-[6vw]">
          <div className="text-[#F58134]">Learn</div>,
          <div className="text-[#19B5CA] ml-[0.5rem]">Build</div>,
          <div className="text-[#A9A9A9] ml-[0.5rem]">Innovate</div>, With Data
        </div>
          <div className="flex">
            <p className="lg:text-[4vw] text-[7vw] text-white">Data Science Student Society</p>
            <img src={`${baseURL}/src/Assets/Images/ds3_logo.png`} alt="Logo" className="-scale-x-100 w-12 object-contain" />
          </div>
          
        <div className="mt-4 md:text-[1.5vw] text-[4vw] sm:text-[3vw]">
          We are here to expand the horizons of data science as a community
          together.
        </div>
        <Button contents="JOIN US" onclick={() => {}} />
      </div>
    </div>
  );
});
export default Text;
