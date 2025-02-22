import { NavLink } from "react-router-dom";
interface NavItemprops {
  dropdown?: { label: string; src: string }[];
  title: string;
  to: string;
}
export default function NavItem({ dropdown, title, to }: NavItemprops) {
  if (!dropdown)
    return (
      <NavLink className="text-white hover:text-gray-300" to={to}>
        {title}
      </NavLink>
    );
  else
    return (
      <div className="relative group inline-block">
        {/* Dropdown example: "Our Team" */}
        <button className="inline-flex items-center text-white group-hover:text-gray-300">
          Events
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
        <div className="absolute top-full left-0 pt-2 hidden group-hover:block">
          <div className="relative bg-black border border-white rounded shadow-lg w-48">
            {/* Arrow (black fill + white border) */}
            <div className="absolute -top-3 left-8">
              <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent border-b-white relative" />
              <div className="absolute top-[1px] left-[-7px] w-0 h-0 border-l-[7px] border-r-[7px] border-b-[7px] border-l-transparent border-r-transparent border-b-black" />
            </div>

            {/* Dropdown items */}
            {dropdown.map((link, index: number) => {
              return (
                <NavLink
                  className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700"
                  to={link.src}
                  key={index}
                >
                  {link.label}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    );
}
