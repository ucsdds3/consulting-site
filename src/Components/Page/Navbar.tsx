import { useNavigate } from "react-router-dom";
import logo from "/src/Assets/ds3_logo.png";
import { Button } from "../UI/button";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex fixed w-full z-10 items-center bg-[#0E1111]">
      <div className="flex flex-1 items-center">
        <button
          className="text-[2rem] font-bold ml-2 p-4 hover:rotate-[-180deg] hover:cursor-pointer duration-500"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="Logo" className="w-8" />
        </button>
        {/* <Switch className="hover:cursor-pointer" /> */}
      </div>
      <div className="flex flex-1 justify-end mr-2 gap-4">
        <Button variant={"ghost"} className="text-white font-bold hover:cursor-pointer">About Us</Button>
        <Button variant={"ghost"} className="text-white font-bold hover:cursor-pointer">Our Work</Button>
        <Button variant={"ghost"} className="text-white font-bold hover:cursor-pointer">Contact Us</Button>
        <Button variant={"ghost"} className="bg-[#F58134] text-black font-bold hover:cursor-pointer">DS3 Main Site</Button>
      </div>
    </div>
  );
};

export default Navbar;
