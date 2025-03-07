const Banner = () => {
  return (
    <div className="w-[1143px] h-[114px] relative mx-auto my-8 opacity-50 bg-[#D9D9D9] rounded-[10px] shadow-[4px_7px_10px_0px_rgba(0,0,0,0.25)] flex items-center px-6 border border-black">
      <div>
        <p className="text-[28px] font-bold text-black leading-7">There is an upcoming event!</p>
        <p className="text-2xl font-normal text-black leading-7">
          (INSERT BASIC EVENT INFORMATION HERE + link to event page)
        </p>
      </div>
      <div className="ml-auto text-2xl font-normal text-black cursor-pointer">x</div>
    </div>
  );
};

export default Banner;
