import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../Utils/info";

const Navbar = () => {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);

  const typographyClasses = "font-quicksand font-normal tracking-[0px]";

  return (
    <nav className="bg-[#0E1111] fixed w-full z-10">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left side: Logo */}
        <button
          className="flex items-center space-x-2"
          onClick={() => navigate("/")}
        >
          <img
            src={`${baseURL}/src/Assets/Images/ds3_logo.png`}
            alt="Logo"
            className="w-10 h-auto"
          />
        </button>

        {/* Right side: Nav links */}
        <div className={`flex items-center space-x-6 ${typographyClasses}`}>
          {/* Simple button: "Events" */}
          <button
            className="text-white hover:text-gray-300"
            onClick={() => navigate("/our-team")}
          >
            Events
          </button>

          {/* Dropdown example: "Our Team" */}
          <div className="relative group inline-block">
            <button className="inline-flex items-center text-white hover:text-gray-300">
              Our Team
              <svg
                className="ml-1 w-4 h-4 text-gray-400 group-hover:text-gray-300 transform rotate-180"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 mt-2 hidden group-hover:block">
              <div className="relative bg-black border border-white rounded shadow-lg w-48">
                {/* Arrow (black fill + white border) */}
                <div className="absolute -top-3 left-8">
                  <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent border-b-white relative" />
                  <div className="absolute top-[1px] left-[-7px] w-0 h-0 border-l-[7px] border-r-[7px] border-b-[7px] border-l-transparent border-r-transparent border-b-black" />
                </div>

                {/* Dropdown items */}
                <button
                  className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700"
                  onClick={() => navigate("/events/upcoming")}
                >
                  Upcoming
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700"
                  onClick={() => navigate("/our-team/datahacks")}
                >
                  Datahacks
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700"
                  onClick={() => navigate("/our-team/workshops")}
                >
                  Workshops
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700"
                  onClick={() => navigate("/our-team/social")}
                >
                  Social
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700"
                  onClick={() => navigate("/our-team/professional")}
                >
                  Professional
                </button>
              </div>
            </div>
          </div>

          {/* Other links */}
          <button
            className="text-white hover:text-gray-300"
            onClick={() => navigate("/contact")}
          >
            Contact
          </button>
          <button
            className="text-white hover:text-gray-300"
            onClick={() => navigate("/consulting")}
          >
            Consulting
          </button>
          <button
            className="text-white hover:text-gray-300"
            onClick={() => navigate("/partners")}
          >
            Partners
          </button>

          {/* JOIN US + Light/Dark Toggle */}
          <div className="flex items-center space-x-4">
            <button
              className={`bg-white text-black px-4 py-2 hover:bg-gray-200 rounded-xl ${typographyClasses} font-semibold`}
              onClick={() => navigate("/join")}
            >
              JOIN US
            </button>

            {/* Light/Dark Mode Slider Toggle */}
            <div
              className="relative inline-block w-12 select-none cursor-pointer"
              onClick={() => setIsDark(!isDark)}
            >
              <div
                className={`block w-12 h-6 rounded-full ${
                  isDark ? "bg-gray-600" : "bg-gray-300"
                }`}
              />
              <div
                className={`absolute top-0.5 h-5 w-5 rounded-full transition-all transform ${
                  isDark ? "translate-x-6 bg-black" : "bg-white"
                }`}
              >
                <div className="flex items-center justify-center w-full h-full">
                  {isDark ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20.354 15.354A9 9 0 1110.646 5.646a7 7 0 009.708 9.708z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-yellow-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414M18.364 18.364l-1.414-1.414M6.05 6.05l-1.414-1.414M12 8a4 4 0 100 8 4 4 0 000-8z"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;