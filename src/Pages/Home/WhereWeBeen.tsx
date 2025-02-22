import Carousel from "../../Components/WhereWeBeen/Carousel";
import PeopleCarousel from "../../Components/WhereWeBeen/PeopleCarousel";
const WhereWeBeen = () => {
  return (
    <div className="flex flex-col items-center gap-10 lg:w-[80vw] w-[95vw] py-32 mt-40 font-albert-sans">
      <div className="text-6xl text-white">Where We've Been</div>
      <div className="w-full text-[6vh]">
        <PeopleCarousel />
      </div>
      <div className="w-full text-[6vh]">
        <Carousel />
      </div>
    </div>
  );
};

export default WhereWeBeen;
