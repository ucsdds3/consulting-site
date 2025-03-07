import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { baseURL } from "../../Utils/info";
import { useTheme } from "../../Pages/Home/useTheme";
import NavItem from "./NavItem";

const EventsDropdown = [
  {
    label: "Upcoming",
    src: "/events/upcoming"
  },
  {
    label: "Datahacks",
    src: "/events/datahacks"
  },
  {
    label: "Workshops",
    src: "/events/workshops"
  },
  {
    label: "Social",
    src: "/events/upcoming"
  },
  {
    label: "Professional",
    src: "/events/upcoming"
  },
  {
    label: "Projects",
    src: "/projects"
  }
];

const OurTeamDropdown = [
  { label: "Meet the Board", src: "/our-team/board" },
  { label: "Alumni", src: "/our-team/alumni" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();

  const typographyClasses = "font-quicksand font-normal tracking-[0px]";

  // Function to handle home navigation with trailing slash
  const navigateHome = (e) => {
    e.preventDefault();
    window.location.href = `${window.location.origin}/new-site/`;
  };

  return (
    <nav className="bg-[#0E1111] fixed w-full z-10">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left side: Logo + Light/Dark mode toggle */}
        <div className="flex items-center gap-5">
          {/* logo - using anchor tag with explicit URL to ensure trailing slash */}
          <a href="/new-site/" className="space-x-2" onClick={navigateHome}>
            <img
              src={`${baseURL}/src/Assets/Images/ds3_logo.png`}
              alt="Logo"
              className="w-10 h-auto"
            />
          </a>
          {/* Light/Dark Mode Slider Toggle */}
          <div
            className="relative inline-block w-12 select-none cursor-pointer"
            onClick={toggleTheme}
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

        {/* Right side: Nav links */}
        <div className={`flex items-center space-x-6 ${typographyClasses}`}>
          {/* dropdown */}
          <NavItem title="Events" to="/our-team" dropdown={EventsDropdown} />

          {/* Simple buttons: */}
          <NavItem title="Our team" to="" dropdown={OurTeamDropdown} />
          <NavItem title="Contact" to="/contact" />
          <NavItem title="Consulting" to="/consulting" />
          <NavItem title="Partners" to="/partners" />

          {/* Other links */}

          {/* JOIN US + Light/Dark Toggle */}
          <div className="flex items-center space-x-4">
            <button
              className={`bg-white text-black px-4 py-2 hover:bg-gray-200 rounded-xl ${typographyClasses} font-semibold`}
              onClick={() => navigate("/join")}
            >
              JOIN US
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
