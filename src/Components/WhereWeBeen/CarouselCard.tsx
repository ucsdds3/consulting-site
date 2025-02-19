interface CarouselCardProps {
  src: string;
}

export default function CarouselCard({ src }: CarouselCardProps) {
  return (
    <div className="embla__slide w-[12vw] h-[10vw] flex-shrink-0 mx-[3vw] border-2 border-white rounded-lg bg-white flex justify-center items-center">
      <img src={src} alt="logo" className="object-contain w-full h-full" />
    </div>
  );
}