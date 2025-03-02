import alumni from "../../../Assets/Data/AlumniTable.json";
import search from "../../../Assets/Images/Alumni/AlumniAssets/Search.svg";
import { useState } from "react";

// Define an interface for alumni data
interface AlumniData {
  name: string;
  imagesrc: string;
  link: string;
  link_label: string;
}

export default function AlumniTable() {
  const [searchParameter, setsearchParameter] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLFormElement;
    const input = target[0] as HTMLInputElement;
    const searchParameter = input.value;
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
            (data: AlumniData) =>
              searchParameter === null || data.name.includes(searchParameter)
          )
          .map((data: AlumniData) => {
            return (
              <span className="flex flex-col items-center rounded-lg text-white">
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
