import { baseURL } from "../../Utils/info";
import SocialMedia from "./SocialMedia";
import Sponsers from "./Sponsers";

const Footer = () => {
  return (
    <div className="border-t border-[--border-color] flex py-8 bg-[#181818]">
      <div className="flex flex-col flex-1 gap-3 items-center">
      <div className="flex items-center justify-center">
        <img
          src={`${baseURL}/src/Assets/Images/ds3_logo.png`}
          alt="DS3 Logo"
          className="w-12"
        />
        <span className="ml-2 text-white text-2xl font-semibold">DS3 @ UC SAN DIEGO</span>
      </div>
        
      </div>
      <SocialMedia />
    </div>
  );
};

export default Footer;
