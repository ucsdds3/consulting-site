import React from "react";
import { useTheme } from "./useTheme";

const AboutUs = () => {
  const { isDark } = useTheme();

  return (
    <div className="flex flex-col items-center py-24 min-h-screen lg:w-[80vw] w-[95vw] font-albert-sans pb-56">
      <div className="grid gap-12 md:grid-cols-2 max-w-[90vw] w-full px-4">
        {/* WHO WE ARE Section */}
        <div className="flex flex-col justify-between gap-8 md:order-1">
          <div className="flex flex-col gap-4">
            <h3 className={`text-xl ${isDark ? "text-white" : "text-black"}`}>
              WHO WE ARE
            </h3>
            <h2 className={`text-5xl ${isDark ? "text-white" : "text-black"}`}>
              We share a passion for data, technology, and problem-solving.
            </h2>
            <p className={`${isDark ? "text-white" : "text-black"}`}>
              We are here to expand the horizons of data science as a community
              together.
            </p>
          </div>
          <button
            className={`w-1/3 rounded-full border-2 p-4 
              ${
                isDark
                  ? "text-white border-white bg-black"
                  : "text-black border-gray-800 bg-white"
              }`}
          >
            OUR TEAM
          </button>
        </div>
        {/* First Image */}
        <div className="bg-gray-300 w-full aspect-video rounded-lg md:order-2">
          <img
            src="src/Assets/Images/homepage/images/who-we-are-img.png"
            alt="Who we are"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {/* Second Image */}
        <div className="bg-gray-300 w-full aspect-video rounded-xl md:order-3 order-4">
          <img
            src="src/Assets/Images/homepage/images/what-we-do-img.png"
            alt="Who we are"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {/* WHAT WE DO Section */}
        <div className="flex flex-col justify-between gap-8 md:order-last order-3">
          <div className="flex flex-col gap-4">
            <h3
              className={`text-xl ${isDark ? "text-gray-200" : "text-black"}`}
            >
              WHAT WE DO
            </h3>
            <h2 className={`text-5xl ${isDark ? "text-white" : "text-black"}`}>
              Build technical skills, network, and gain practical experience in
              data science.
            </h2>
            <p className={`${isDark ? "text-white" : "text-black"}`}>
              We are here to expand the horizons of data science as a community
              together.
            </p>
          </div>
          <button
            className={`w-1/3 rounded-full border-2 p-4 
              ${
                isDark
                  ? "text-white border-white bg-black"
                  : "text-black border-gray-800 bg-white"
              }`}
          >
            EVENTS
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
