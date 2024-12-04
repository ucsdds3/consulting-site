import Carousel from "../../Components/WhereWeBeen/Carousel";
const WhereWeBeen = () => {
  return (
    <div className="flex flex-col items-center gap-10 w-[80vw] py-24">
      <div className="text-6xl text-white">Where We've Been</div>
      <div className="w-full text-[6vh]">
        <Carousel />
      </div>
    </div>
  );
};

export default WhereWeBeen;
