import logo from "/src/Assets/DS3_Logo.png";
import { FaDiscord, FaInstagram, FaSpotify } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t flex p-8 bg-[#181818]">
      <div className="flex flex-1 items-center justify-start gap-10">
        <img src={logo} alt="Logo" className="w-[3vw]" />
        <p className="text-[1vw] font-bold text-white">© DS3 @ UCSD 2023 </p>
      </div>
      <div className="flex flex-1 items-center justify-end gap-4">
        <a><FaInstagram className="text-white text-[2vw] hover:cursor-pointer" /></a>
        <a><FaDiscord className="text-white text-[2vw] hover:cursor-pointer" /></a>
        <a><FaMedium className="text-white text-[2vw] hover:cursor-pointer" /></a>
        <a><FaSpotify className="text-white text-[2vw] hover:cursor-pointer" /></a>
      </div>
    </footer>
  );
};

export default Footer;
