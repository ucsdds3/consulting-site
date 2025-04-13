import { useTheme } from "../Home/useTheme";
import { useCalendarEvents } from "../../Hooks/useCalendarEvents";
import { EventType } from "../../Utils/types";
import Error from "../../Components/ErrorAlert";
// import { useState } from "react";

export default function UpcomingEvents() {
  // const eventTypes = ["Social", "Professional", "Workshop"];
  // const [filter, setFilter] = useState("");
  const { events, loading, error } = useCalendarEvents();

  return (
    <div className="w-full flex md:px-24 px-2 py-10 gap-2 flex-col">
      {/* <div className="flex gap-4 w-full mb-2 ">
          {!loading &&
            eventTypes.map((event, index) => (
              <button
                className={`rounded-full w-fit h-fit px-4 py-2 border-2 border-white ${
                  filter === event ? "bg-white" : ""
                }`}
                onClick={() => setFilter(event === filter ? "" : event)}
                key={index}
              >
                {event}
              </button>
            ))}
          {loading &&
            Array.from({ length: 3 }).map(() => {
              return (
                <button className="rounded-full w-32 h-fit px-4 py-2 border-2 border-white skeleton ">
                  &nbsp;
                </button>
              );
            })}
        </div> */}

      {loading ? (
        Array.from({ length: 3 }).map((_, index) => <Card {...({} as EventType)} key={index} />)
      ) : error ? (
        <Error message={error!} />
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,clamp(300px,40vw,400px))] w-full gap-2 md:gap-5 ">
          {events.map((daton, index) => (
            <Card {...daton} key={index} />
          ))}
        </div>
      )}
      {/* .filter((daton) => daton.type === filter || filter === "") */}
    </div>
  );
}

function Card({ title, date, description, imageUrl, addToCalendarUrl }: EventType) {
  const { isDark } = useTheme();

  return (
    <div
      className={`p-4 rounded-lg shadow-lg border relative duration-100 w-full aspect-[1/1.2] ${
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
        className={`w-[80%]  h-4 mb-2 flex items-center rounded-full  ${
          isDark ? "bg-[#303030]" : "bg-gray-200"
        }`}
        style={{
          borderRadius: "370px",
        }}
      ></div>

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
        {imageUrl ? (
          <img src={imageUrl} className="object-cover rounded-md z-2 w-full h-full" />
        ) : (
          <div className="absolute top-0 skeleton z-1 w-full h-full rounded-lg"></div>
        )}
      </div>

      {description ? (
        <p
          className="text-lg opacity-80 md:max-h-[35%] overflow-y-auto text-wrap w-full"
          style={{
            fontFamily: "'Albert Sans', sans-serif",
            color: isDark ? "white" : "black",
            lineHeight: "25px",
          }}
          dangerouslySetInnerHTML={{ __html: description ? description : "" }}
        ></p>
      ) : (
        <div
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
        </div>
      )}

      {addToCalendarUrl && (
        <a
          href={addToCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-lg px-4 py-2 rounded-md ${
            isDark ? "!text-white bg-[#F58134]" : "!text-black bg-[#11B3C9]"
          }`}
          style={{
            fontFamily: "'Albert Sans', sans-serif",
            color: isDark ? "#F58134" : "#11B3C9",
            lineHeight: "70px",
          }}
        >
          Add to Calendar
        </a>
      )}
    </div>
  );
}
