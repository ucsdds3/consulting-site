import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const btnClass =
    "btn mx-2 my-2 overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-none shadow-lg text-gray-200 text-shadow hover:bg-gray-500 hover:bg-opacity-30";

  return (
    <div className="flex fixed w-full z-10 items-center">
      <button className="text-[2rem] font-bold ml-6 p-4" onClick={() => navigate("/")}>
        <img src="src\Assets\Images\big-logo-light.png" alt="Logo" className="w-24" />
      </button>
      <div className="flex flex-1 justify-end mr-2">
        <button className={btnClass} onClick={() => navigate(`/about-me`)}>
          {"About Us"}
        </button>
        <button className={btnClass} onClick={() => navigate(`/resume`)}>
          {"Projects"}
        </button>
        <button className={btnClass} onClick={() => navigate(`/contact-me`)}>
          {"Get Involved"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
