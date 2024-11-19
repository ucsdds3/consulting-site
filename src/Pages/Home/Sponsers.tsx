import { baseURL } from "../../Utils/info";

const Sponsers = () => {
  return (
    <div className="flex flex-col gap-10 w-[60vw]">
      <div className="flex flex-col gap-8 w-[40vw]">
        <h2 className="text-5xl text-white">Our Sponsers</h2>
        <p className="text-gray-300 w-2/3">
          Interested in hearing how we can help you? Contact us at ds3@ucsd.edu or view our sponsor
          packet{" "}
          <a href="https://www.ds3ucsd.com/documents/DS3_Sponsors_23-24.pdf" className="underline">
            here.
          </a>
        </p>
      </div>
      <div className="flex gap-10 justify-between">
        <img
          src={`${baseURL}/src/Assets/Images/CSE_logo.png`}
          alt="CSE @ UCSD"
          className="w-60 h-auto object-contain"
        />
        <img
          src={`${baseURL}/src/Assets/Images/HDSI_logo.png`}
          alt="HDSI @ UCSD"
          className="w-60 h-auto object-contain"
        />
        <img
          src={`${baseURL}/src/Assets/Images/palantir-vector-logo.svg`}
          alt="Palantir"
          className="w-60 h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Sponsers;
