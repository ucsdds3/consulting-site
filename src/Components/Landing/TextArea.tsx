import Button from "../Button";
import { baseURL } from "../../Utils/info";
import { useTheme } from "../../Pages/Home/useTheme";

export default function Text() {
  const { isDark } = useTheme();

  return (
    <div className="flex flex-col justify-center mt-[20vh]" id="textarea">
      <div className="">
        <div
          className={`flex ${
            isDark ? "text-white" : "text-black"
          } lg:text-[2vw] leading-[2vw] ml-[-0.1rem] font-albert-sans`}
        >
          <div className="text-[#F58134]">LEARN</div>,
          <div className="text-[#19B5CA] ml-[0.5rem]">BUILD</div>,
          <div className="text-[#A9A9A9] ml-[0.5rem] mr-2">INNOVATE</div>
          <span className={`${isDark ? "text-white" : "text-black"}`}>
            WITH DATA
          </span>
        </div>
        <div className="flex">
          <p
            className={`lg:text-[4vw] text-[7vw] ${
              isDark ? "text-white" : "text-black"
            } font-medium font-albert-sans`}
          >
            Data Science Student Society
          </p>
          <img
            src={`${baseURL}/src/Assets/Images/ds3_logo.png`}
            alt="Logo"
            className="-scale-x-100 w-12 object-contain"
          />
        </div>

        <div
          className={`mt-1 md:text-[1.5vw] text-[4vw] sm:text-[3vw] pb-10 font-albert-sans ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          We are here to expand the horizons of data science as a community
          together.
        </div>
        <Button contents="JOIN US" onclick={() => {}} />
      </div>
    </div>
  );
}
