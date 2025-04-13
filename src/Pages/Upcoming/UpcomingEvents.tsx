import { useState } from "react";
import { useTheme } from "../Home/useTheme";
import { useCalendarEvents } from "../../Hooks/useCalendarEvents";
const skeletonContent = {
  title: "",
  date: "",
  description: "",
  type: "",
};
export default function UpcomingEvents() {
  const eventTypes = ["Social", "Professional", "Workshop"];
  const [filter, setFilter] = useState("");
  const { events, loading, error } = useCalendarEvents();

  return (
    <>
      <div className="w-full flex md:px-24 px-2 py-10 gap-2 flex-col">
        <div className="flex gap-4 w-full mb-2 ">
          {!loading &&
            eventTypes.map((event) => {
              return (
                <button
                  className={`rounded-full w-fit h-fit px-4 py-2 border-2 border-white ${
                    filter === event ? "bg-white" : ""
                  }`}
                  onClick={() => {
                    if (event != filter) {
                      setFilter(event);
                    } else {
                      setFilter("");
                    }
                  }}
                >
                  {event}
                </button>
              );
            })}
          {loading &&
            Array.from({ length: 3 }).map(() => {
              return (
                <button className="rounded-full w-32 h-fit px-4 py-2 border-2 border-white skeleton ">
                  &nbsp;
                </button>
              );
            })}
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,clamp(330px,30vw,500px))] w-full gap-2 md:gap-5 ">
          {!loading &&
            events
              .filter((daton) => daton.type === filter || filter === "")
              .map((daton, index) => {
                return <Card {...daton} key={index} />;
              })}
          {loading &&
            Array.from({ length: 10 }).map((_, index) => {
              return (
                <>
                  <Card {...skeletonContent} key={index} />
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

function Card({
  title,
  date,
  description,
  imagesrc,
  type,
}: {
  title?: string;
  date?: string;
  description?: string;
  imagesrc?: string;
  type?: string;
}) {
  const { isDark } = useTheme();
  return (
    <div
      className={`p-4 rounded-lg shadow-lg border relative cursor-pointer duration-100 w-full aspect-[1/1.2] ${
        isDark
          ? "bg-black text-white border-white hover:[box-shadow:0px_0px_20px_8px_#F58134]"
          : "bg-white text-black border-gray-300 hover:[box-shadow:0px_0px_20px_8px_#11B3C9]"
      }`}
    >
      <div className="absolute top-4 right-4 flex space-x-2">
        <span className="w-3 h-3 bg-[#F58134] rounded-full"></span>
        <span className="w-3 h-3 bg-[#11B3C9] rounded-full"></span>
        <span className="w-3 h-3 bg-[#434343] rounded-full"></span>
      </div>
      <div
        className={`w-[80%]  h-4 mb-2 flex items-center rounded-full ${
          type ? "" : "skeleton"
        } ${isDark ? "bg-[#303030]" : "bg-gray-200"}`}
        style={{
          borderRadius: "370px",
        }}
      >
        <p
          className={`absolute text-sm w-[70%] text-nowrap ml-2 font-albert-sans hover:cursor-pointer overflow-hidden [text-overflow:ellipsis]  ${
            isDark
              ? "text-white hover:text-gray-400"
              : "text-black hover:text-gray-600"
          }`}
        >
          {type}
        </p>
      </div>

      <div className="mb-2">
        <span
          className="text-[1.6rem] font-normal relative"
          style={{
            fontFamily: "'Albert Sans', sans-serif",
            color: isDark ? "white" : "black",
            lineHeight: "70px",
          }}
        >
          {title}
        </span>
        <p
          className="text-lg opacity-80"
          style={{
            fontFamily: "'Albert Sans', sans-serif",
            color: isDark ? "white" : "black",
            lineHeight: "25px",
          }}
        >
          {date}
        </p>
      </div>
      <div className="w-full aspect-video relative mb-2">
        <img
          src={imagesrc}
          alt={title}
          className=" object-cover rounded-md z-2 w-full h-full"
          style={{ borderRadius: "8px" }}
        />
        <div className="absolute top-0 skeleton z-1 w-full h-full rounded-lg"></div>
      </div>

      {description && (
        <p
          className="text-lg opacity-80 md:max-h-[35%] overflow-y-auto text-wrap w-full"
          style={{
            fontFamily: "'Albert Sans', sans-serif",
            color: isDark ? "white" : "black",
            lineHeight: "25px",
          }}
          dangerouslySetInnerHTML={{ __html: description ? description : "" }}
        ></p>
      )}
      {!description && (
        <>
          <p
            className="text-lg opacity-80 md:max-h-[35%] overflow-y-auto text-wrap w-full"
            style={{
              fontFamily: "'Albert Sans', sans-serif",
              color: isDark ? "white" : "black",
              lineHeight: "25px",
            }}
          >
            <div className="h-7 m-1 w-auto skeleton"></div>
            <div className="h-7 m-1 w-auto skeleton"></div>
            <div className="h-7 m-1 w-auto skeleton"></div>
            <div className="h-7 m-1 w-[80%] skeleton"></div>
          </p>
        </>
      )}
    </div>
  );
}
