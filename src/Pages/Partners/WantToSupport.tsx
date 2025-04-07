import { useTheme } from "../../Pages/Home/useTheme";
import { baseURL } from "../../Utils/info";
import { useEffect, useState } from "react";

const WantToSupport = () => {
  const { isDark } = useTheme();
  const [partnerLogos, setPartnerLogos] = useState<string[]>([]);

  useEffect(() => {
    // List of partner logo files
    const logos = [
      "intel.png",
      "asml.png",
      "hp.png",
      "blizzard.png",
      "rockstar.png",
      "marimo.png",
      "SDX-logo.png",
      "hdsi-logo-light.png",
      "palantir_dark.png",
      "hdsi-logo.svg",
      "cse-logo.svg",
      "ibm.svg"
    ];
    
    setPartnerLogos(logos);
  }, []);

  return (
    <div className="lg:w-[80vw] w-[95vw] pb-16">
      <section className="py-20 font-albert-sans mx-auto justify-center">
        <div className="flex flex-col gap-4">
          <h3 className="pt-16 text-xl">WANT TO SUPPORT US?</h3>
          <h2 className="text-5xl">OUR PARTNERS</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {partnerLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img 
                src={`${baseURL}/src/Assets/Images/homepage/partners logos/${logo}`}
                alt={`Partner Logo ${index + 1}`}
                className="max-h-24 w-auto object-contain"
              />
            </div>
          ))}
        </div>
        
        <div className="bg-gray-300 mt-20 w-full h-[85vh] rounded-lg md:order-2"></div>
      </section>
    </div>
  );
};

export default WantToSupport;
