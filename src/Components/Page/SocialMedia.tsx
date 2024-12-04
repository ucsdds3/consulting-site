import { FaDiscord, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const SocialMedia = () => {
  const btnClass =
    "btn rounded-full text-white text-lg w-12 p-0 border-none bg-[#202020] hover:bg-[#282828] glow";

  return (
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
  );
};

export default SocialMedia;
