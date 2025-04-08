import React, { useEffect, useState } from "react";
import { useTheme } from "./useTheme";
import { baseURL } from "../../Utils/info";

const Partners: React.FC = () => {
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
    <div className="lg:w-[80vw] w-[95vw]">
      <section
        className={`px-6 py-12 md:px-12 font-albert-sans mx-auto justify-center ${isDark ? "text-white" : "text-black"}`}
      >
        <h1
          className={`text-4xl font-bold mb-4 font-albert-sans ${isDark ? "text-white" : "text-black"}`}
        >
          Our Partners!
        </h1>
        <p
          className={`text-lg max-w-xl font-albert-sans ${isDark ? "text-white" : "text-black"}`}
        >
          Interested in hearing how we can help you? Contact us at{" "}
          <a
            href="mailto:ds3@ucsd.edu"
            className={`underline ${isDark ? "hover:text-gray-300" : "hover:text-gray-600"}`}
          >
            ds3@ucsd.edu
          </a>{" "}
          or view our sponsor package{" "}
          <a
            href="/path/to/sponsor-package.pdf"
            className={`underline ${isDark ? "hover:text-gray-300" : "hover:text-gray-600"}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
        
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
      </section>
    </div>
  );
};

export default Partners;
