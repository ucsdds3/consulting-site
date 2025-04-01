import Layer1 from "/src/Assets/Layer1.png";
import Layer2 from "/src/Assets/Layer2.png";
import Layer3 from "/src/Assets/Layer3.png";

const AboutUs = () => {
  return (
    <div className="flex p-24 min-h-[80vh] w-full">
      <div className="relative flex-1 flex justify-center items-center">
        <img src={Layer3} alt="Layer 3" className="absolute w-1/2 z-3 top-[0vw]" />
        <img src={Layer2} alt="Layer 2" className="absolute w-1/2 z-2 top-[7vw]" />
        <img src={Layer1} alt="Layer 1" className="absolute w-1/2 z-1 top-[14vw]" />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center gap-10">
        <h2 className="text-[4vw] text-white font-bold">WHO WE ARE</h2>
        <p className="text-[1.5vw] text-white indent-8">
          There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour, or randomised words which don't look
          even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
          sure there isn't anything embarrassing hidden in the middle of text.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
