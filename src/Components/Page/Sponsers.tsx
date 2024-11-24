import { baseURL } from "../../Utils/info";

const Sponsers = () => {
  return (
    <div
      id="sponsers"
      className="flex-1 flex flex-col justify-center items-center border-x border-[--border-color] px-[2vw]"
    >
      <h4 className="text-lg font-bold text-white">Our Sponsers</h4>
      <div className="flex justify-center gap-x-[2vw]">
        <img
          src={`${baseURL}/src/Assets/Images/CSE_logo.png`}
          alt="CSE @ UCSD"
          className="w-[4vw] h-auto object-contain"
        />
        <img
          src={`${baseURL}/src/Assets/Images/HDSI_logo_light.png`}
          alt="HDSI @ UCSD"
          className="w-[10vw] h-auto object-contain"
        />
        <img
          src={`${baseURL}/src/Assets/Images/palantir-vector-logo.svg`}
          alt="Palantir"
          className="w-[8vw] h-auto object-contain"
        />
      </div>
      <p className="mt-[1vw]">
        View our sponsor packet{" "}
        <a href="https://www.ds3ucsd.com/documents/DS3_Sponsors_23-24.pdf" className="underline">
          here
        </a>{" "}
        or contact us at{" "}
        <a href="mailto:ds3@ucsd.edu" className="underline">
          ds3@ucsd.edu
        </a>
      </p>
    </div>
  );
};

export default Sponsers;
