import AlumniData from "./AlumniTable.json";
import search from "../../Assets/Images/Alumni/AlumniAssets/Search.svg";
import { FormEvent, useState } from "react";
export default function AlumniTable() {
  const [alumni, setAlumni] = useState(AlumniData);
  const [searchParameter, setsearchParameter] = useState(null);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const searchParameter = event.target[0].value;
    setsearchParameter(searchParameter);
  };
  return (
    <div className=" py-24 min-h-screen lg:w-[80vw] w-[95vw] font-albert-sans pb-56 relative">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
        className="items-center absolute right-0 top-[-5px] border border-white w-[250px] h-[50px] bg-gray-200 rounded-2xl flex justify-center"
      >
        <input
          type="text"
          placeholder="Search..."
          className=" ml-3 w-[90%] h-[90%] bg-inherit text-[30px] border-none outline-none text-black"
        />
        <img src={search} alt="" className="mr-2 h-[80%]" />
      </form>
      <div className="grid grid-cols-4 gap-x-10 gap-y-40 w-full m-0">
        {alumni
          .filter(
            (data) =>
              searchParameter === null || data.name.includes(searchParameter)
          )
          .map((data) => {
            return (
              <span className="flex flex-col items-center  rounded-lg text-white">
                <div className="bg-gray-200 aspect-square w-full rounded-3xl">
                  <img src={data.imagesrc} alt="" className="" />
                </div>
                <p className="m-0 w-full flex flex-col">
                  <div className="text-[2vw] text-white">{data.name}</div>
                  <a href={data.link} className="text-white text-[1.3vw]">
                    {data.link_label}
                  </a>
                  <a href="" className="text-white text-[1.3vw]">
                    Linkedin link
                  </a>
                </p>
              </span>
            );
          })}
      </div>
    </div>
  );
}
