import { useNavigate } from "react-router-dom";
import { baseURL } from "../../Utils/info";
import { useTheme } from "../../Pages/Home/useTheme";
import NavItem from "./NavItem";
import { useState } from "react";

const EventsDropdown = [
  {
    label: "Upcoming",
    src: "/events/upcoming",
  },
  {
    label: "Datahacks",
    src: "/events/datahacks",
  },
  {
    label: "Workshops",
    src: "/events/workshops",
  },
  {
    label: "Social",
    src: "/events/social",
  },
  {
    label: "Professional",
    src: "/events/professional",
  },
];

const OurTeamDropdown = [
  { label: "Meet the Board", src: "/our-team/board" },
  { label: "Alumni", src: "/our-team/alumni" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const typographyClasses = "font-quicksand font-normal tracking-[0px]";

  // Function to handle home navigation with trailing slash
  const navigateHome = () => {
    navigate("/");
  };

  const handleDropdownClick = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <>
      <nav className="bg-[#0E1111] fixed w-full z-50">
        <div className="flex flex-col md:flex-row items-center justify-between px-6 py-2 md:py-4">
          {/* Top bar with logo and mobile menu button */}
          <div className="w-full md:w-auto flex items-center justify-between">
            <div className="flex items-center gap-5">
              {/* logo */}
              <a className="space-x-2 cursor-pointer" onClick={navigateHome}>
                <img
                  src={`${baseURL}/src/Assets/Images/ds3_logo.png`}
                  alt="Logo"
                  className="w-10 h-auto"
                />
              </a>
              {/* Light/Dark Mode Slider Toggle */}
              <div className="block">
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
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile menu and desktop navigation */}
          <div
            className={`${
              isMobileMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row w-full md:w-auto items-center space-y-2 md:space-y-0 md:space-x-6 mt-2 md:mt-0 ${typographyClasses}`}
          >
            {/* Navigation items */}
            <NavItem
              title="Events"
              to="/our-team"
              dropdown={EventsDropdown}
              isActive={activeDropdown === "Events"}
              onDropdownClick={() => handleDropdownClick("Events")}
              isDark={isDark}
            />
            <NavItem
              title="Our Team"
              to=""
              dropdown={OurTeamDropdown}
              isActive={activeDropdown === "Our Team"}
              onDropdownClick={() => handleDropdownClick("Our Team")}
              isDark={isDark}
            />
            <NavItem title="Projects" to="/projects" isDark={isDark} />
            <NavItem title="Consulting" to="/consulting" isDark={isDark} />
            <NavItem title="Partners" to="/partners" isDark={isDark} />

            {/* JOIN US button */}
            <button
              className={`bg-white text-black px-4 py-2 hover:bg-gray-200 rounded-xl ${typographyClasses} font-semibold w-full md:w-auto`}
              onClick={() => navigate("/join")}
            >
              JOIN US
            </button>
          </div>
        </div>
      </nav>
      {/* Spacer div that adjusts height based on mobile menu and dropdown state */}
      <div
        className={`w-full transition-all duration-200 ${
          isMobileMenuOpen
            ? activeDropdown
              ? "h-[600px]" // Further increased height when mobile menu and dropdown are open
              : "h-[480px]" // Further increased height when only mobile menu is open
            : "h-[60px]" // Default navbar height
        }`}
      />
    </>
  );
};

export default Navbar;
