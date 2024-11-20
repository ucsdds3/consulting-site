import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import CarouselCard from "./CarouselCard";
export default function Carousel() {
  const [speed] = useState(2);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      playOnInit: true,
      speed: speed,
      stopOnInteraction: false,
      stopOnFocusIn: false
    })
  ]);
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);
  return (
    <div className="embla overflow-hidden w-[100%]  mt-5" ref={emblaRef}>
      <div className="embla__container grid grid-flow-col auto-cols-min ">
        {Array.from({ length: 10 }, (_, index) => {
          return <CarouselCard index={index} />;
        })}
      </div>
    </div>
  );
}
