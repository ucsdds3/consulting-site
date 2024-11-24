import { baseURL } from "../../Utils/info";
import SocialMedia from "./SocialMedia";
import Sponsers from "./Sponsers";

const Footer = () => {
  return (
    <div className="border-t border-[--border-color] flex py-8 bg-[#181818]">
      <div className="flex flex-col flex-1 gap-3 items-center">
        <img
          src={`${baseURL}/src/Assets/Images/big-logo-light.png`}
          alt="DS3 Logo"
          className="w-40"
        />
        <div className="flex flex-col gap-2 items-center text-sm font-medium">
          <span>© 2024 Data Science Student Society, All Rights Reserved</span>
        </div>
      </div>
      <Sponsers />
      <SocialMedia />
    </div>
  );
};

export default Footer;
