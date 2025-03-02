import AlumniData from "./AlumniTable.json";

export default function AlumniTable() {
  return (
    <div className=" py-24 min-h-screen lg:w-[80vw] w-[95vw] font-albert-sans pb-56 relative">
      <form className="absolute right-0 top-[-5px] border border-white w-[250px] h-[50px] bg-gray-200 rounded-2xl flex justify-center">
        <input
          type="text"
          placeholder="Search"
          className="w-[90%] h-[90%] bg-inherit text-[30px] border-none outline-none text-black"
        ></input>
      </form>
      <div className="grid grid-cols-4 gap-x-10 gap-y-40 w-full m-0">
        {AlumniData.map((data) => {
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
                <a href="" className="text-white text-[2vw]">
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
