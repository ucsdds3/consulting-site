<<<<<<< HEAD:src/Components/Page/Navbar.tsx
=======
// import { FaHome } from "react-icons/fa";
>>>>>>> 56c20cd (Feat: Created Simple Landing Page for #2):src/Components/Navbar.tsx
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../Utils/info";

const Navbar = () => {
  const navigate = useNavigate();
  const btnClass =
    "btn mx-2 my-2 overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-none shadow-lg text-gray-200 text-shadow hover:bg-gray-500 hover:bg-opacity-30";

  return (
    <div className="flex fixed w-full z-10 items-center">
<<<<<<< HEAD:src/Components/Page/Navbar.tsx
      <button className="text-[2rem] font-bold ml-2 p-4 hover:rotate-[-180deg] duration-500" onClick={() => navigate("/")}>
        <img src={`${baseURL}/src/Assets/Images/ds3_logo.png`} alt="Logo" className="w-12" />
=======
      <button
        className="text-[2rem] font-bold ml-6"
        onClick={() => navigate("/")}
      >
        DS3
>>>>>>> 56c20cd (Feat: Created Simple Landing Page for #2):src/Components/Navbar.tsx
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
