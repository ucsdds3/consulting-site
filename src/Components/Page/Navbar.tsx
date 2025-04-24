// import { useNavigate } from "react-router-dom";
import logo from "/src/Assets/DS3_Logo.png";
import { Button } from "../UI/button";

const Navbar = () => {
  // const navigate = useNavigate();

  return (
    <div className="flex fixed right-0 sm:w-full z-100 sm:h-fit sm:flex-row items-center bg-[#0E1111] px-[clamp(1px,3vw,10px)] h-full w-fit flex-col navbar duration-500">
      <div className="flex sm:flex-1 items-center">
        <button
          className="text-[2rem] font-bold sm:p-4 p-2 hover:rotate-[-180deg] hover:cursor-pointer duration-500"
          // onClick={() => navigate("/")}
        >
          <a href="#landing">
            <img src={logo} alt="Logo" className="w-8" />
          </a>
        </button>
        <div className="h-7 w-7 sm:hidden">
          <input type="checkbox" id="accordian" className=" hidden" />
          <label
            htmlFor="accordian"
            className=" relative cursor-pointer flex flex-col h-full justify-around"
          >
            <span className="bg-white h-1 w-full block"></span>
            <span className="bg-white h-1 w-full block "></span>
            <span className="bg-white h-1 w-full block "></span>
          </label>
        </div>

        {/* <Switch className="hover:cursor-pointer" /> */}
      </div>
      <div className="flex sm:flex-1 justify-end mr-2 gap-4 flex-col sm:flex-row">
        <NavItem text="About Us" link="#about-us" />
        <NavItem text="Our Work" link="#work" />
        <NavItem text="Contact Us" link="#contact" />
        <Button className="bg-[#F58134] hover:brightness-110 text-white hover:cursor-pointer rounded-md font-bold">
          DS3 Main Site
        </Button>
      </div>
    </div>
  );
};

function NavItem({ text, link }: { text: string; link: string }) {
  return (
    <Button className="text-white hover:cursor-pointer font-bold font-quicksand rounded-md">
      <a href={link} className="">
        {text}
      </a>
    </Button>
  );
}
export default Navbar;
