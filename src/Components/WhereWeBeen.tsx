import Google from "/src/Assets/Google.png";

const WhereWeBeen = () => {
  return (
    <div className="flex p-10 px-5 md:px-24 min-h-[80vh] w-full gap-[10vw] flex-wrap">
      <div className="flex-4 flex flex-col justify-center gap-4">
        <h2 className="text-[clamp(32px,5vw,50px)] font-bold text-white">
          Our team has gone on to work for numerous companies.
        </h2>
        <p className="text-[clamp(16px,2.5vw,25px)] text-neutral-300">
          We are here to expand the horizons of data science as a community
          together.
        </p>
      </div>
      <div className="flex-3 min-w-[320px] grid grid-cols-3 grid-rows-3 gap-x-10 place-items-center md:py-24">
        {Array.from({ length: 9 }).map((_, index) => (
          <img src={Google} key={index} className="w-full" alt="" />
        ))}
      </div>
    </div>
  );
};

export default WhereWeBeen;
