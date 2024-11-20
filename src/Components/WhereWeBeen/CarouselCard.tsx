const CarouselCard = ({ index }: { index: number }) => {
  return (
    <div
      className="opacity-50 embla__slide w-[12vw] h-[10vw] border-2 border-white flex justify-center items-center text-[3vw] ml-[3vw] rounded-lg bg-white"
      key={index}
    >
      {index}
    </div>
  );
};

export default CarouselCard;
