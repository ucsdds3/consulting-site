import { forwardRef, LegacyRef } from "react";
import { useTheme } from "../../Pages/Home/useTheme";

const Text = forwardRef((_props, ref: LegacyRef<HTMLDivElement>) => {
  const { isDark } = useTheme();

  const textColor = isDark ? "text-white" : "text-black";
  return (
    <div
      className="flex flex-col justify-center mt-[20vh]"
      id="textarea"
      ref={ref}
    >
      <div className="w-full lg:w-[604px]">
        <p
          className={`${textColor} text-3xl lg:text-3xl font-normal font-['Albert Sans'] leading-[45px] mb-2`}
        >
          Want to build your resume?
        </p>
        <p
          className={`${textColor} text-[65px] lg:text-[80px] font-medium font-['Albert Sans'] leading-[70px] lg:leading-[70px] mb-4`}
        >
          PROJECTS
        </p>
        <p
          className={`${textColor} text-xl lg:text-3xl font-normal font-['Albert Sans'] leading-[45px]`}
        >
          Assisting students with 25+ projects to gain practical data-science
          experience by working on real-world problems, in collaboration with
          both faculty and industry.
        </p>
      </div>
    </div>
  );
});

export default Text;
