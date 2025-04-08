import logo from "/src/Assets/DS3_Logo.png";
import { FaDiscord, FaInstagram, FaSpotify } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t flex md:p-8 p-4 bg-[#181818] h-max">
      <div className="flex flex-1 items-center justify-start gap-10">
        <img src={logo} alt="Logo" className="w-[clamp(32px,5vw,50px)]" />
        <p className="text-[clamp(15px,2vw,30px)] font-bold text-white">
          © DS3 @ UCSD 2023
        </p>
      </div>
      <div className="flex flex-1 items-center justify-end gap-4">
        <a>
          <FaInstagram className="text-white text-[clamp(25px,2vw,30px)] hover:cursor-pointer" />
        </a>
        <a>
          <FaDiscord className="text-white text-[clamp(25px,2vw,30px)] hover:cursor-pointer" />
        </a>
        <a>
          <FaMedium className="text-white text-[clamp(25px,2vw,30px)] hover:cursor-pointer" />
        </a>
        <a>
          <FaSpotify className="text-white text-[clamp(25px,2vw,30px)] hover:cursor-pointer" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
