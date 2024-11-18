const CarouselCard = ({ index }: { index: number }) => {
  return (
    <div
      className="opacity-50 embla__slide w-[40vh] h-[40vh] border-2 border-white flex justify-center items-center text-[5vh] ml-10 rounded-lg bg-white"
      key={index}
    >
      {index}
    </div>
  );
};

export default CarouselCard;
