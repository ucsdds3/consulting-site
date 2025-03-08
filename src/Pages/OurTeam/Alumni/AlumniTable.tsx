import alumni from "../../../Assets/Data/AlumniTable.json";
import search from "../../../Assets/Images/Alumni/AlumniAssets/Search.svg";
import { useState } from "react";
import { useTheme } from "../../Home/useTheme";
import { FaLinkedin } from "react-icons/fa";
import { VscLinkExternal } from "react-icons/vsc";
// Define an interface for alumni data
interface AlumniData {
  name: string;
  imagesrc: string;
  link: string;
  link_label: string;
  linkedIn: string;
}

export default function AlumniTable() {
  const [searchParameter, setsearchParameter] = useState<string | null>(null);
  const { isDark } = useTheme();
  const handleSubmit = (search: string) => {
    setsearchParameter(search);
  };

  return (
    <div className=" py-24 min-h-screen lg:w-[80vw] w-[95vw] font-albert-sans pb-56 relative mt-32">
      <form className="items-center absolute right-0 top-[-5px] border border-white w-[250px] h-[50px] bg-gray-200 rounded-2xl flex justify-center">
        <input
          type="text"
          onChange={(e) => {
            e.preventDefault();
            handleSubmit(e.target.value.toLowerCase());
          }}
          placeholder="Search..."
          className=" ml-3 w-[90%] h-[90%] bg-inherit text-[30px] border-none outline-none text-black"
        />
        <img src={search} alt="" className="mr-2 h-[80%]" />
      </form>
      <div className="grid grid-cols-4 gap-x-10 gap-y-40 w-full m-0">
        {alumni
          .filter(
            (data: AlumniData) =>
              searchParameter === null ||
              data.name.toLowerCase().includes(searchParameter)
          )
          .map((data: AlumniData) => {
            return (
              <span className={`flex flex-col items-center rounded-lg `}>
                <div className="bg-gray-200 aspect-square w-full rounded-3xl relative">
                  <img src={data.imagesrc} alt="" className="" />
                  <a href={data.linkedIn}>
                    <FaLinkedin className="text-blue-700 absolute text-[2.5vw] bottom-2 right-3 rounded-lg opacity-50 hover:opacity-80 duration-100" />
                  </a>
                </div>
                <p
                  className={`m-0 w-full flex flex-col ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  <a
                    href={data.link}
                    onClick={(e) => {
                      if (!data.link) {
                        e.preventDefault();
                      }
                    }}
                    className={`text-[2vw] text-inherit flex mt-3 group ${
                      !data.link ? "cursor-default" : "cursor-pointer"
                    }`}
                  >
                    {data.name}
                    {data.link && (
                      <VscLinkExternal
                        className={`text-[1.5vw] ml-1 duration-100  ${
                          isDark
                            ? "group-hover:text-[#F58134]"
                            : "group-hover:text-[#11B3C9]"
                        }`}
                      />
                    )}
                  </a>
                  {/* <a href={data.link} className="text-inherit text-[1.3vw] ">
                    {data.link_label}
                  </a>
                  <a href="" className="text-inherit text-[1.3vw]">
                    Linkedin link
                  </a> */}
                </p>
              </span>
            );
          })}
      </div>
    </div>
  );
}
