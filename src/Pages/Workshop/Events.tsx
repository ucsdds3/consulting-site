const Events = () => {
  return (
    <div className="w-[1150px] mx-auto flex flex-col mt-20"> {/* Increased margin-top */}
      {/* Search & Buttons */}
      <div className="w-full flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <button className="w-[268px] h-[54px] bg-[#faf9f6] rounded-[80px] border-2 border-black text-[26px] font-normal">
            Upcoming Events
          </button>
          <button className="w-[199px] h-[54px] bg-[#faf9f6] rounded-[80px] border-2 border-black text-[26px] font-normal">
            Past Events
          </button>
        </div>
        <div className="w-[222px] h-[54px] bg-[#e1e1e1] rounded-[80px] flex justify-center items-center px-4">
          <span className="text-[26px] font-normal text-black">Search...</span>
          <svg className="ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 20.9999L16.65 16.6499" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Event Grid */}
      <div className="grid grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num} className="flex flex-col items-start">
            <div className="w-[350px] h-[350px] bg-[#D9D9D9] rounded-[10px]" />
            <h3 className="text-[40px] font-normal text-black mt-1 ml-2">Event {num}</h3> {/* Adjusted spacing */}
            <p className="text-[19px] font-normal text-black ml-2">More info here...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
