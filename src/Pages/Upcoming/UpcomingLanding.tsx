// src/Pages/Events/EventPageTemplate.tsx

import { useTheme } from "../../Pages/Home/useTheme";
import workshopImage from "../../Assets/Images/homepage-img2-1.png"
// Types for props

// Header Component
const UpcomingLanding = () => {
  const { isDark } = useTheme();
  const textColor = isDark ? "text-white" : "text-black";

  return (
    <div className="w-[90%] max-w-[1204px] mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-center py-6 gap-10">
        {/* Workshop Text */}
        <div className="flex flex-col items-start lg:ml-20 lg:-mt-16">
          <div
            className={`w-full lg:w-[516px] ${textColor} text-3xl lg:text-3xl font-normal font-['Albert Sans'] leading-[45px] lg:-mt-26 mb-2 px-4 lg:px-0`}
          >
            {"Curious to see what’s next?"}
          </div>
          <div
            className={`w-full lg:w-[604px] ${textColor} text-[65px] lg:text-[80px] font-medium font-['Albert Sans'] leading-[70px] lg:leading-[70px] px-4 lg:px-0`}
          >
            {"UPCOMING EVENTS"}
          </div>
        </div>

        {/* Workshop Image */}
        <img
          className="w-[80%] h-auto lg:w-[604px] lg:h-[604px] mt-8 lg:mt-0"
          src={workshopImage}
          alt={`Logo Image`}
        />
      </div>
    </div>
  );
};


export default UpcomingLanding;
