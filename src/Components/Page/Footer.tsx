import { FaDiscord, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { baseURL } from "../../Utils/info";

const Footer = () => {
  const btnClass =
    "btn rounded-full text-white text-lg w-12 p-0 border-none bg-[#202020] hover:bg-[#282828] glow";

  return (
    <div className="border-t border-[--border-color] flex py-8 bg-[#181818]">
      <div className="flex flex-col flex-1 gap-3 items-center">
        <img src={`${baseURL}/src/Assets/Images/big-logo-light.png`} alt="DS3 Logo" className="w-40" />
        <div className="flex flex-col gap-2 items-center text-sm font-medium">
          <span>© 2024 Data Science Student Society, All Rights Reserved</span>
        </div>
      </div>
      <div
        id="quick-link"
        className="flex flex-1 justify-center gap-x-20 border-x border-[--border-color]"
      >
        <div className="flex flex-col gap-y-2 justify-center">
          <h4 className="text-lg font-bold mb-2 text-white">Information</h4>
          <a href="" className="hover:underline">
            About
          </a>
          <a href="" className="hover:underline">
            Events
          </a>
        </div>
        <div className="flex flex-col gap-y-2 justify-center">
          <h4 className="text-lg font-bold mb-2 text-white">Get Involved</h4>
          <a href="" className="hover:underline">
            Projects
          </a>
          <a href="" className="hover:underline">
            Consulting
          </a>
        </div>
      </div>
      <div
        id="social-media-links"
        className="flex flex-col flex-1 items-center justify-center gap-y-8"
      >
        <h4 className="text-lg font-bold text-white">Social Links</h4>
        <div className="flex items-center w-[20vw] justify-evenly">
          <button
            onClick={() => window.open("https://discord.gg/fbnAP848V9", "_blank")}
            className={btnClass}
            title={"Discord"}
          >
            <FaDiscord />
          </button>
          <button
            onClick={() => window.open("mailto:ds3@ucsd.edu", "_blank")}
            className={btnClass}
            title={"Mail"}
          >
            <SiGmail />
          </button>
          <button
            onClick={() => window.open("https://github.com/TheBoyRoy05/", "_blank")}
            className={btnClass}
            title={"Github"}
          >
            <FaGithub />
          </button>
          <button
            onClick={() => window.open("https://www.linkedin.com/in/issacroy/", "_blank")}
            className={btnClass}
            title={"LinkedIn"}
          >
            <FaLinkedinIn />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
