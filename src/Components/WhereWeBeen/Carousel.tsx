import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import CarouselCard from "./CarouselCard";

// 1) Manually import each SVG:
import amazon from "../../Assets/Images/homepage/company logos/amazon.svg";
import amazonsmall from "../../Assets/Images/homepage/company logos/amazonsmall.svg";
import amex from "../../Assets/Images/homepage/company logos/amex.svg";
import atnt from "../../Assets/Images/homepage/company logos/atnt.svg";
import attIcon from "../../Assets/Images/homepage/company logos/att-icon.svg";
import aurora from "../../Assets/Images/homepage/company logos/aurora.svg";
import awsSmall from "../../Assets/Images/homepage/company logos/aws-small.svg";
import aws from "../../Assets/Images/homepage/company logos/aws.svg";
import blackrock from "../../Assets/Images/homepage/company logos/blackrock.svg";
import cisco from "../../Assets/Images/homepage/company logos/cisco.svg";
import citi from "../../Assets/Images/homepage/company logos/citi.svg";
import deloitte from "../../Assets/Images/homepage/company logos/deloitte.svg";
import facebookSmall from "../../Assets/Images/homepage/company logos/facebook-small.svg";
import facebook from "../../Assets/Images/homepage/company logos/facebook.svg";
import fedexFreight from "../../Assets/Images/homepage/company logos/fedex-freight.svg";
import ficoLogo from "../../Assets/Images/homepage/company logos/FICO_logo.svg";
import goldmanSachs from "../../Assets/Images/homepage/company logos/goldman-sachs.svg";
import googleSmall from "../../Assets/Images/homepage/company logos/google-small.svg";
import google from "../../Assets/Images/homepage/company logos/google.svg";
import intel from "../../Assets/Images/homepage/company logos/intel.svg";

// 2) Put them in a single array:
const companyLogos = [
  amazon,
  amex,
  atnt,
  attIcon,
  aurora,
  aws,
  blackrock,
  cisco,
  citi,
  deloitte,
  facebookSmall,
  facebook,
  fedexFreight,
  ficoLogo,
  goldmanSachs,
  google,
  intel
];

export default function Carousel() {
  // Adjust the speed to your preference
  const [speed] = useState(2);

  // Set up Embla with autoScroll plugin:
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [
      AutoScroll({
        playOnInit: true,
        speed,
        stopOnInteraction: false,
        stopOnFocusIn: false
      })
    ]
  );

  useEffect(() => {
    if (emblaApi) {
      console.log("Embla slides:", emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <div className="embla overflow-hidden w-full mt-5" ref={emblaRef}>
      <div className="embla__container flex">
        {companyLogos.map((logoSrc, index) => (
          <CarouselCard key={index} src={logoSrc} />
        ))}
      </div>
    </div>
  );
}
