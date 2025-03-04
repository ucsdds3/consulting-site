import Button from "../../Components/Button";

const JoinUs = () => {
  return (
    <div className="flex flex-col mt-5 py-24 lg:w-[80vw] w-[95vw] font-albert-sans">
      <div className="grid gap-20 md:grid-cols-2 max-w-[90vw] w-full px-4">
        {/* JOIN US Section */}
        <div className="flex flex-col justify-between gap-4 md:order-1 pb-2">
          <div className="flex flex-col gap-4 w-[22vw]">
            <h3 className="pt-16 text-xl text-white">WANT TO GET INVOLVED?</h3>
            <h2 className="text-5xl text-white">JOIN US</h2>
            <p className="text-white">
              Join DS3 in one click by joining our Discord community
            </p>
            <Button contents="FIND US" onclick={() => {}} />
          </div>
        </div>

        {/* First Image */}
        <div className="bg-gray-300 mt-5 w-full h-[50vh] rounded-lg md:order-2"></div>
      </div>
    </div>
  );
};

export default JoinUs;
