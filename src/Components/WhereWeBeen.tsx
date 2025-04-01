import Google from "/src/Assets/Google.png";

const WhereWeBeen = () => {
  return (
    <div className="flex p-10 px-24 min-h-[80vh] w-full gap-[10vw]">
      <div className="flex-4 flex flex-col justify-center gap-4">
        <h2 className="text-[3vw] font-bold text-white">
          Our team has gone on to work for numerous companies.
        </h2>
        <p className="text-[1vw] text-neutral-300">We are here to expand the horizons of data science as a community together.</p>
      </div>
      <div className="flex-3 grid grid-cols-3 grid-rows-3 gap-x-10 place-items-center py-24">
        {Array.from({ length: 9 }).map((_, index) => (
          <img src={Google} key={index} className="w-full" alt="" />
        ))}
      </div>
    </div>
  );
};

export default WhereWeBeen;
