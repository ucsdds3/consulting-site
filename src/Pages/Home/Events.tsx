import Carousel from "../../Components/Events/Carousel";
const Events = () => {
  return (
    <div className="flex flex-col items-center gap-10 w-[80vw] py-24">
      <div className="text-6xl text-white">Explore Our Events</div>
      <div className="w-full text-[6vh]">
        <Carousel />
      </div>
    </div>
  );
};

export default Events;
